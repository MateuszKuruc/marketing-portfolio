import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.SEND_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SEND_EMAIL,
      to: process.env.SEND_EMAIL,
      text: "This is a test string",
      subject: "Email sent test123",
      html: `
    <h3>Cześć ${process.env.USER_NAME},</h3>
    <p>Pięknego dnia i pysznej kawusi!</p>
    <p>Masz nowe zgłoszenie ze swojej strony internetowej:</p>
    <li>name: ${name}</li>
    <li>Email: ${email}</li>
    <li>Telefon: ${phone}</li>
    <li>Wiadomość: ${message}</li>
    `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "sending email fails" },
      { status: 500 }
    );
  }
}
