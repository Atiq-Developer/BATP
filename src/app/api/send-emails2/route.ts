// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// type JobType = 
//   "Behavior Consultant (BC)" | 
//   "Mobile Therapist (MT)" | 
//   "Registered Behavior Technician (RBT)" | 
//   "Behavior Technician (BT)" | 
//   "Administration";

// type Location = 
//   "Bala Cynwyd Office" | 
//   "Philadelphia Office" | 
//   "South Philadelphia Satellite Office";

// export async function POST(request: Request) {
//   try {
//     const formData = await request.formData();

//     const requiredFields = [
//       'firstName', 'lastName', 'email', 
//       'jobRole', 'location', 'consent'
//     ];

//     // Validate required fields
//     for (const field of requiredFields) {
//       if (!formData.get(field)) {
//         return NextResponse.json(
//           { error: `Missing required field: ${field}` },
//           { status: 400 }
//         );
//       }
//     }

//     const location = formData.get('location') as Location;
//     const jobRole = formData.get('jobRole') as JobType;

//     const emailMap: Record<Location, string> = {
//       "Bala Cynwyd Office": "mailbatp@gmail.com",
//       "Philadelphia Office": "samantha.power@batp.org",
//       "South Philadelphia Satellite Office": "williampower@batp.org"
//     };

//     const recipientEmail = emailMap[location] || "williampower@batp.org";

//     if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
//       throw new Error('Email service is not properly configured.');
//     }

//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST || 'smtp.gmail.com',
//       port: parseInt(process.env.EMAIL_PORT || '587'),
//       secure: process.env.EMAIL_SECURE === 'true',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     await transporter.verify();

//     const mailOptions = {
//       from: `"BATP Job Application" <${process.env.EMAIL_USER}>`,
//       to: recipientEmail,
//       subject: `New Job Application - ${jobRole}`,
//       text: `
// New job application received:

// Name: ${formData.get('firstName')} ${formData.get('lastName')}
// Email: ${formData.get('email')}
// Phone: ${formData.get('phone') || 'Not provided'}
// Address: ${formData.get('address') || 'Not provided'}
// Job Role: ${jobRole}
// Location: ${location}
// Experience: ${formData.get('experience') || 'Not provided'}
// Consent: ${formData.get('consent') === "true" ? "Yes" : "No"}
//       `,
//       attachments: [] as any[]
//     };

//     // Handle file attachment
//     const cvFile = formData.get('cvFile') as File | null;
//     if (cvFile && cvFile.size > 0) {
//       const fileBuffer = Buffer.from(await cvFile.arrayBuffer());
//       mailOptions.attachments.push({
//         filename: cvFile.name || "resume",
//         content: fileBuffer
//       });
//     }

//     const info = await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true, messageId: info.messageId });

//   } catch (error) {
//     console.error('Email sending error:', error);
//     return NextResponse.json(
//       {
//         error: 'Failed to send application',
//         details: error instanceof Error ? error.message : String(error),
//       },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'jobRole', 'location', 'consent'];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const locationEmails: Record<string, string> = {
      "Bala Cynwyd Office": "qwenton.balawejder@batp.org",
      "Philadelphia Office": "samantha.power@batp.org",
      "South Philadelphia Satellite Office": "williampower@batp.org",
    };

    const location = formData.get('location') as string;
    const recipientEmail = locationEmails[location] || "williampower@batp.org";

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      throw new Error('Email service is not properly configured.');
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.verify();

    const mailOptions: any = {
      from: `"BATP Job Application" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: `New Job Application - ${formData.get('jobRole')}`,
      text: `
New job application received:

Name: ${formData.get('firstName')} ${formData.get('lastName')}
Email: ${formData.get('email')}
Phone: ${formData.get('phone') || 'Not provided'}
Address: ${formData.get('address') || 'Not provided'}
Job Role: ${formData.get('jobRole')}
Location: ${location}
Experience: ${formData.get('experience') || 'Not provided'}
Consent: ${formData.get('consent') === "true" ? "Yes" : "No"}
      `,
      attachments: []
    };

    // Handle file attachment
    const cvFile = formData.get('cvFile') as File | null;
    if (cvFile && cvFile.size > 0) {
      const fileBuffer = Buffer.from(await cvFile.arrayBuffer());
      mailOptions.attachments.push({
        filename: cvFile.name || "resume.pdf",
        content: fileBuffer,
        contentType: cvFile.type
      });
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      {
        error: 'Failed to send application',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}