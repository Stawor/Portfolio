"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const message = formData.get("message");
	const emailSender: any = formData.get("emailSender");

	if (!message || typeof message !== "string") {
		return {
			error: "Please fill out all fields",
		};
	}

	resend.emails.send({
		from: "onboarding@resend.dev",
		to: "staworkogabriel@gmail.com",
		reply_to: emailSender,
		subject: "Portfolio Contact Form",
		text: message,
	});
};
