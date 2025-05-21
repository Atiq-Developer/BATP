import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const LOCATION_EMAILS: Record<string, string> = {
  "Bala Cynwyd Office": "qwenton.balawejder@batp.org",
  "Philadelphia Office": "samantha.power@batp.org",
  "South Philadelphia Satellite Office": "williampower@batp.org"
};

const REQUIRED_DOCUMENTS = ["resume", "degree", "idProof"];
const VERIFICATION_CODE_EXPIRY_MINUTES = 15;

// In-memory store for verification codes
const verificationCodes = new Map<string, { 
  code: string;
  expiresAt: number;
  attempts: number;
  verified?: boolean;
}>();

function createTransporter() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    throw new Error('Email service not configured');
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

function cleanupExpiredCodes() {
  const now = Date.now();
  for (const [email, data] of verificationCodes.entries()) {
    if (now > data.expiresAt) {
      verificationCodes.delete(email);
    }
  }
}

export async function POST(request: Request) {
  const url = new URL(request.url);
  const action = url.searchParams.get('action');

  try {
    cleanupExpiredCodes();

    if (action === 'send-verification') {
      const { email } = await request.json();

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json(
          { error: "Valid email is required" },
          { status: 400 }
        );
      }

      // Rate limiting
      const existingCode = verificationCodes.get(email);
      if (existingCode && Date.now() < existingCode.expiresAt - (VERIFICATION_CODE_EXPIRY_MINUTES - 1) * 60 * 1000) {
        return NextResponse.json(
          { error: "Please wait before requesting a new code" },
          { status: 429 }
        );
      }

      const code = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = Date.now() + VERIFICATION_CODE_EXPIRY_MINUTES * 60 * 1000;

      verificationCodes.set(email, { 
        code, 
        expiresAt, 
        attempts: 0,
        verified: false
      });

      const transporter = createTransporter();
      await transporter.sendMail({
        from: `"Job Applications" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Your Verification Code",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Job Application Verification</h2>
            <p>Your verification code is:</p>
            <div style="background-color: #f3f4f6; padding: 16px; text-align: center; margin: 16px 0; font-size: 24px; font-weight: bold;">
              ${code}
            </div>
            <p>This code expires in ${VERIFICATION_CODE_EXPIRY_MINUTES} minutes.</p>
          </div>
        `,
      });

      return NextResponse.json({ success: true });

    } else if (action === 'verify-code') {
      const { email, code } = await request.json();

      const storedData = verificationCodes.get(email);
      if (!storedData) {
        return NextResponse.json(
          { error: "No verification request found for this email" },
          { status: 400 }
        );
      }

      if (Date.now() > storedData.expiresAt) {
        verificationCodes.delete(email);
        return NextResponse.json(
          { error: "Verification code expired" },
          { status: 400 }
        );
      }

      if (storedData.attempts >= 3) {
        verificationCodes.delete(email);
        return NextResponse.json(
          { error: "Too many attempts. Please request a new code." },
          { status: 429 }
        );
      }

      if (storedData.code !== code) {
        storedData.attempts += 1;
        verificationCodes.set(email, storedData);
        return NextResponse.json(
          { error: "Invalid verification code" },
          { status: 400 }
        );
      }

      // Mark as verified
      storedData.verified = true;
      verificationCodes.set(email, storedData);

      return NextResponse.json({ 
        success: true, 
        verified: true 
      });

    } else {
      // Handle form submission
      const formData = await request.formData();
      const submittedEmail = formData.get('email') as string;

      // Check if email is verified
      const verificationData = verificationCodes.get(submittedEmail);
      if (!verificationData || !verificationData.verified) {
        return NextResponse.json(
          { error: "Email not verified. Please complete verification first." },
          { status: 403 }
        );
      }

      // Validate required fields
      const requiredFields = ['fullName', 'position', 'location'];
      const missingFields = requiredFields.filter(field => !formData.get(field));
      if (missingFields.length > 0) {
        return NextResponse.json(
          { error: `Missing fields: ${missingFields.join(', ')}` },
          { status: 400 }
        );
      }

      // Validate documents
      const missingDocs = REQUIRED_DOCUMENTS.filter(doc => !formData.has(doc));
      if (missingDocs.length > 0) {
        return NextResponse.json(
          { error: `Missing documents: ${missingDocs.join(', ')}` },
          { status: 400 }
        );
      }

      const location = formData.get('location') as string;
      const recipientEmail = LOCATION_EMAILS[location] || process.env.FALLBACK_EMAIL;

      const transporter = createTransporter();
      await transporter.verify();

      // Prepare attachments
      const attachments = await Promise.all(
        ['resume', 'degree', 'idProof', 'experience', 'certification1', 'certification2', 'other']
          .filter(docType => formData.has(docType))
          .map(async (docType) => {
            const file = formData.get(docType) as File;
            return {
              filename: `${formData.get('fullName')}_${docType}_${file.name}`,
              content: Buffer.from(await file.arrayBuffer()),
              contentType: file.type
            };
          })
      );

      // Send to HR
      await transporter.sendMail({
        from: `"Job Applications" <${process.env.EMAIL_USER}>`,
        to: recipientEmail,
        subject: `New Application: ${formData.get('position')} - ${location}`,
        html: buildHREmail(formData),
        attachments
      });

      // Send confirmation to applicant
      await transporter.sendMail({
        from: `"Job Applications" <${process.env.EMAIL_USER}>`,
        to: submittedEmail,
        subject: "Application Received",
        html: buildConfirmationEmail(formData)
      });

      // Clear verification after successful submission
      verificationCodes.delete(submittedEmail);

      return NextResponse.json({ success: true });
    }

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An error occurred' },
      { status: 500 }
    );
  }
}

function buildHREmail(formData: FormData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">New Application Received</h2>
      <h3>${formData.get('position')} - ${formData.get('location')}</h3>
      <div style="margin-top: 20px;">
        <h4>Candidate Details:</h4>
        <p><strong>Name:</strong> ${formData.get('fullName')}</p>
        <p><strong>Email:</strong> ${formData.get('email')}</p>
        <p><strong>Phone:</strong> ${formData.get('phone') || 'Not provided'}</p>
      </div>
      <div style="margin-top: 20px;">
        <h4>Submitted Documents:</h4>
        <ul style="list-style: none; padding: 0;">
          ${['resume', 'degree', 'idProof', 'experience', 'certification1', 'certification2', 'other']
            .map(doc => `<li>${formData.has(doc) ? '✓' : '✗'} ${doc}</li>`)
            .join('')}
        </ul>
      </div>
    </div>
  `;
}

function buildConfirmationEmail(formData: FormData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Application Received</h2>
      <p>Thank you for applying for the ${formData.get('position')} position at our ${formData.get('location')} office.</p>
      <p>We have received your application materials and will review them carefully. If your qualifications match our needs, we will contact you using the email address you provided.</p>
      <p style="margin-top: 30px;">Best regards,<br>The Hiring Team</p>
    </div>
  `;
}

