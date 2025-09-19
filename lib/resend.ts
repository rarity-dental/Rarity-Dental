"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const firstName = formData.get("firstName") as string;
	const lastName = formData.get("lastName") as string;
	const email = formData.get("email") as string;
	const contactNumber = formData.get("contactNumber") as string;
	const submissionUrl = formData.get("submissionUrl") as string;
	const country = formData.get("country") as string;

	const htmlContent = `
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #4a4a4a;">New Contact Request</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact Number:</strong> ${contactNumber}</p>
				<p><strong>Submitted From:</strong> ${submissionUrl}</p>
				<p><strong>Country:</strong> ${country}</p>

                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 12px; color: #888;">This is an automated message from Rarity Dental. Please do not reply to this email.</p>
            </body>
        </html>
    `;

	try {
		const { data, error } = await resend.emails.send({
			from: "Rarity Dental <onboarding@raritydental.com>",
			to: [
				"tushar@raritydental.com",
				"susman@raritydental.com",
				"marketing@raritydental.com",
			],
			subject: "New Contact Request from Rarity Dental",
			html: htmlContent,
		});

		if (error) {
			console.error("Error sending email:", error);
			return { error: "Failed to send email." };
		}

		console.log("Email sent successfully:", data);
		return { success: true };
	} catch (error) {
		console.error("Error sending email:", error);
		return { error: "Failed to send email." };
	}
};
