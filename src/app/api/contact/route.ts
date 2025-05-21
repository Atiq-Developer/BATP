import { NextResponse } from 'next/server';
import { Client } from "@microsoft/microsoft-graph-client";
import { getRecipientEmail } from '@/components/Contact/emailMapping';

// Define types
interface UploadedFile {
  name: string;
  id: string;
  webUrl: string;
}

interface DriveItem {
  id: string;
  webUrl: string;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Initialize Graph client (moved from separate file for simplicity)
    const scope = 'https://graph.microsoft.com/.default';
    const tenantId = process.env.AZURE_AD_TENANT_ID;
    const clientId = process.env.AZURE_AD_CLIENT_ID;
    const clientSecret = process.env.AZURE_AD_CLIENT_SECRET;

    if (!tenantId || !clientId || !clientSecret) {
      throw new Error('Missing Azure AD credentials');
    }

    // Get access token
    const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
    const tokenResponse = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        scope: scope,
        grant_type: 'client_credentials',
      }),
    });

    const tokenData = await tokenResponse.json();
    
    if (!tokenResponse.ok) {
      throw new Error('Failed to get access token');
    }

    // Initialize Graph client
    const graphClient = Client.init({
      authProvider: (done:any) => {
        done(null, tokenData.access_token);
      },
    });

    // Get recipient email
    const recipientEmail = getRecipientEmail(
      formData.get('location') as string,
      formData.get('job') as string
    );

    // Handle file uploads
    const attachments = formData.getAll('attachments');
    const uploadedFiles: UploadedFile[] = [];

    for (const file of attachments) {
      if (file instanceof File) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Upload to OneDrive
        const driveItem = await graphClient
          .api('/me/drive/root:/uploads/' + file.name + ':/content')
          .put(buffer) as DriveItem;

        uploadedFiles.push({
          name: file.name,
          id: driveItem.id,
          webUrl: driveItem.webUrl
        });
      }
    }

    // Prepare email body
    const emailBody = `
      New Contact Form Submission
      
      Name: ${formData.get('firstName')} ${formData.get('lastName')}
      Email: ${formData.get('email')}
      Phone: ${formData.get('phone')}
      Location: ${formData.get('location')}
      Job Interest: ${formData.get('job')}
      Message: ${formData.get('message')}
      
      Attachments: ${uploadedFiles.map(file => file.webUrl).join('\n')}
    `;

    // Send email
    await graphClient.api('/me/sendMail').post({
      message: {
        subject: 'New Contact Form Submission',
        body: {
          contentType: 'text',
          content: emailBody,
        },
        toRecipients: [
          {
            emailAddress: {
              address: recipientEmail,
            },
          },
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}