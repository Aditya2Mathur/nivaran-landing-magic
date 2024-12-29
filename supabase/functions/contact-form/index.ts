const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ADMIN_EMAIL = "shashankdixitiitm@gmail.com";

// Updated CORS headers to be more permissive for development
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Max-Age": "86400",
};

interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async (to: string[], subject: string, html: string) => {
  console.log('Attempting to send email to:', to);
  console.log('Using Resend API Key:', RESEND_API_KEY ? 'Present' : 'Missing');
  
  if (!RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Nivaran AI Healthcare <no-reply@healthnivaran.in>",
        to,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Resend API error:', error);
      throw new Error(error);
    }

    const data = await res.json();
    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Error in sendEmail:', error);
    throw error;
  }
};

export const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  }

  try {
    console.log('Received request:', req.method);
    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    // Send email to admin
    const adminEmailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.fullName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `;

    // Send email to user
    const userEmailHtml = `
      <h2>Thank you for contacting Nivaran AI Healthcare</h2>
      <p>Dear ${formData.fullName},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <p>Here's a copy of your message:</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
      <br>
      <p>Best regards,</p>
      <p>Nivaran AI Healthcare Team</p>
    `;

    // Send emails in parallel
    try {
      await Promise.all([
        sendEmail([ADMIN_EMAIL], "New Contact Form Submission", adminEmailHtml),
        sendEmail([formData.email], "Thank you for contacting Nivaran AI Healthcare", userEmailHtml)
      ]);

      return new Response(
        JSON.stringify({ message: "Emails sent successfully" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } catch (emailError) {
      console.error("Error sending emails:", emailError);
      return new Response(
        JSON.stringify({ 
          error: "Failed to send emails",
          details: emailError instanceof Error ? emailError.message : String(emailError)
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        }
      );
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ 
        error: "Error processing request",
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
};