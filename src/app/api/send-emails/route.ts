import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type JobType = "Employment (HR)" | "Services (Case Management)" | "Other (office)";
type Location = "Philadelphia" | "Bucks" | "Delaware" | "Montgomery";

interface EmailMapping {
  [key: string]: {
    [key in JobType]: string;
  };
}

interface FormData {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  location: Location;
  job: JobType;
  consent: boolean;
}

export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();

    if (!formData.location || !formData.job) {
      return NextResponse.json(
        { error: 'Location and job type are required' }, 
        { status: 400 }
      );
    }

    if (!formData.name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    const emailMap: EmailMapping = {
      Philadelphia: {
        "Employment (HR)": "mailbatp@gmail.com",
        "Services (Case Management)": "samantha.power@batp.org",
        "Other (office)": "williampower@batp.org"
      },
      Bucks: {
        "Employment (HR)": "vincentiaadams@batp.org",
        "Services (Case Management)": "qwenton.balawejder@batp.org",
        "Other (office)": "chantellebosier@batp.org"
      },
      Delaware: {
        "Employment (HR)": "vincentiaadams@batp.org",
        "Services (Case Management)": "qwenton.balawejder@batp.org",
        "Other (office)": "chantellebosier@batp.org"
      },
      Montgomery: {
        "Employment (HR)": "vincentiaadams@batp.org",
        "Services (Case Management)": "qwenton.balawejder@batp.org",
        "Other (office)": "chantellebosier@batp.org"
      }
    };

    const recipientEmail = emailMap[formData.location]?.[formData.job] || 
                         process.env.FALLBACK_EMAIL || 
                         "peter.parker@batp.org";

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      throw new Error('Email service is not properly configured.');
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: `"BATP Contact Form" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: `New Contact - ${formData.job} in ${formData.location}`,
      text: `
New contact submission:

Location: ${formData.location}
Job Type: ${formData.job}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Message: ${formData.message || "No message provided"}
Consent: ${formData.consent ? "Given" : "Not given"}
      `,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Location:</strong> ${formData.location}</p>
        <p><strong>Job Type:</strong> ${formData.job}</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Message:</strong><br>${formData.message || "No message provided"}</p>
        <p><strong>Consent:</strong> ${formData.consent ? "Given" : "Not given"}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      {
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}