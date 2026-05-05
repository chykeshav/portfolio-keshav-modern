import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // ✅ Parse body (App Router correct way)
    const { message, email } = await req.json();

    // ✅ Validation
    if (!message || !email) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    // ✅ ENV Debug (check terminal)
    console.log("ENV CHECK:");
    console.log("USER:", process.env.GMAIL_USER);
    console.log(
      "PASS:",
      process.env.GMAIL_PASS ? "EXISTS" : "MISSING"
    );

    // ✅ Gmail transporter (stable config)
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

    // ✅ Send mail
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New message from ${email}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("MAIL SENT:", info.response);

    return NextResponse.json({ success: true });

  } 
//   catch (error: any) {
//     // ✅ FULL ERROR DEBUG
//     console.error("MAIL ERROR FULL:", error);
//     console.error("ERROR MESSAGE:", error?.message);

//     return NextResponse.json(
//       { error: error?.message || "Failed to send email" },
//       { status: 500 }
//     );
//   }
catch (error: unknown) {
  // ✅ FULL ERROR DEBUG
  console.error("MAIL ERROR FULL:", error);

  let message = "Failed to send email";

  if (error instanceof Error) {
    console.error("ERROR MESSAGE:", error.message);
    message = error.message;
  }

  return NextResponse.json(
    { error: message },
    { status: 500 }
  );
}
}