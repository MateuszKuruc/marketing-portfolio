import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    console.log("data in api", name, email, phone, message);

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.SEND_EMAIL,
        password: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SEND_EMAIL,
      to: process.env.SEND_EMAIL,
      subject: "Email sent test123",
      html: `
    <h3>Hello Mati</h3>
    <li>name: ${name}</li>
    <li>email: ${email}</li>
    <li>${phone}</li>
    <li>${message}</li>
    `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
