import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, contact, company, service, message } = body;
    console.log(body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Build dynamic HTML email template with only provided fields
    const fieldsList = [];
    
    if (name) fieldsList.push(`<tr><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;"><strong style="color: #4f46e5;">Name:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; text-align: right;">${name}</td></tr>`);
    
    if (contact) fieldsList.push(`<tr><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;"><strong style="color: #4f46e5;">Contact:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; text-align: right;">${contact}</td></tr>`);
    
    if (company) fieldsList.push(`<tr><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;"><strong style="color: #4f46e5;">Company:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; text-align: right;">${company}</td></tr>`);
    
    if (service) fieldsList.push(`<tr><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;"><strong style="color: #4f46e5;">Service:</strong></td><td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; text-align: right;">${service}</td></tr>`);

    const subjectName = name ? `from ${name}` : "from Book a Call form";

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1f2937; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: white; padding: 32px 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
            .content { padding: 32px 24px; }
            .content h2 { color: #1f2937; font-size: 20px; margin: 0 0 24px 0; font-weight: 600; }
            table { width: 100%; border-collapse: collapse; }
            td { padding: 0; }
            .message-section { background-color: #f9fafb; border-left: 4px solid #4f46e5; padding: 16px; border-radius: 4px; margin-top: 24px; }
            .message-section strong { color: #4f46e5; display: block; margin-bottom: 8px; }
            .footer { background-color: #f3f4f6; padding: 20px 24px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✨ New Inquiry ${subjectName}</h1>
            </div>
            <div class="content">
              <h2>Inquiry Details</h2>
              <table>
                ${fieldsList.join("")}
              </table>
              ${message ? `
                <div class="message-section">
                  <strong>Message:</strong>
                  <p style="margin: 0; color: #374151; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                </div>
              ` : ""}
            </div>
            <div class="footer">
              <p style="margin: 0;">© 2026 TrioPulse. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry ${subjectName}`,
      html: html,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
    });
  }
}