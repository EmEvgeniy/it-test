import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
	try {
		const { subject, message } = await request.json();

		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: "hollywoodthere@gmail.com",
				pass: "ezhf fiqc edgz wpoc",
			},
		});

		const mailOption = {
			from: "hollywoodthere@gmail.com",
			to: "emevgeniy1323@gmail.com",
			subject: "Send Email",
			html: `
      <h3>Тема: ${subject}</h3>
      <ul>
        <li>Информация по заказу: ${message}</li>
      </ul>
      `,
		};

		await transporter.sendMail(mailOption);
		return NextResponse.json(
			{ message: "Email sent successfully!" },
			{ status: 200 }
		);
	} catch (e) {
		console.error("Error:", e);
		return NextResponse.json({ message: `${e}` }, { status: 500 });
	}
}
