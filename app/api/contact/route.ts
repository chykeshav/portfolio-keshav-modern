import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { message, email } = await req.json();

    if (!message || !email) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Free plan mein yahi use karo
      to: "keshavchaudhary446@gmail.com",
      replyTo: email,
      subject: `New message from ${email}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    console.error("Server error:", error);
    const msg = error instanceof Error ? error.message : "Failed to send";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}