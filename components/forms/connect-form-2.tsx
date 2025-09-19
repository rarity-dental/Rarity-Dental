"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import { sendEmail } from "@/lib/resend";

const formSchema = z.object({
	firstName: z.string().min(3, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	contactNumber: z.string().min(10, "Invalid contact number"),
	email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>;

interface ConsultationFormProps {
	paraText?: string;
	buttonText?: string;
	className?: string;
}

export const ConsultationForm = ({
	paraText = "Fill out the form above and our team will get back to you shortly. In the meantime, sit back, relax, and let us handle everything.",
	buttonText = "Get in Touch",
	className = "md:rounded-l-md",
}: ConsultationFormProps) => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true);
		try {
			const formData = new FormData();
			Object.entries(data).forEach(([key, value]) => {
				formData.append(key, value);
			});
			formData.append("submissionUrl", window.location.href);
			await sendEmail(formData);
			reset();
			toast({
				title: "Form submitted successfully!",
				description:
					"Sit back and relax. We will get back to you shortly.",
				variant: "success",
			});
		} catch (error) {
			console.error("Error submitting form:", error);
			toast({
				title: "Failed to submit form",
				description:
					"An error occurred while submitting the form. Please try again later.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div
			className={`w-full h-full py-16 px-8 flex flex-col gap-10 bg-[#73383E] ${className}`}>
			<div className="flex flex-col gap-y-4">
				<h2 className="text-white text-[32px] font-normal tracking-tight leading-tight">
					Fill the form for enquiries and consultation requests
				</h2>
				<p className="text-white font-poppins font-normal tracking-[-0.03em] text-[14px] text-pretty">
					{paraText}
				</p>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-y-3">
				<div className="w-full flex gap-x-3 relative font-poppins">
					<div className="w-full">
						<input
							{...register("firstName")}
							type="text"
							placeholder="First Name"
							className="w-full py-3 px-4 bg-[#ECE3DB] border-none placeholder-[#646A69]"
						/>
						{errors.firstName && (
							<span className="text-red-500 absolute top-[-20px] left-0">
								{errors.firstName.message}
							</span>
						)}
					</div>
					<div className="w-full">
						<input
							{...register("lastName")}
							type="text"
							placeholder="Last Name"
							className="w-full py-3 px-4 bg-[#ECE3DB] border-none placeholder-[#646A69]"
						/>
						{errors.lastName && (
							<span className="text-red-500 absolute top-[-20px] right-0">
								{errors.lastName.message}
							</span>
						)}
					</div>
				</div>

				<div className="relative">
					<input
						{...register("contactNumber")}
						type="tel"
						placeholder="Mobile Number"
						className="w-full py-3 px-4 bg-[#ECE3DB] border-none placeholder-[#646A69]"
					/>
					{errors.contactNumber && (
						<span className="text-red-500 absolute top-[-20px] left-0">
							{errors.contactNumber.message}
						</span>
					)}
				</div>

				<div className="relative">
					<input
						{...register("email")}
						type="email"
						placeholder="Email Address"
						className="w-full py-3 px-4 bg-[#ECE3DB] border-none placeholder-[#646A69]"
					/>
					{errors.email && (
						<span className="text-red-500 absolute top-[-20px] left-0">
							{errors.email.message}
						</span>
					)}
				</div>

				<Button
					type="submit"
					disabled={isSubmitting}
					className="bg-[#47413c] text-[#ECE3DB] py-3 rounded-none hover:bg-[#86806c] active:scale-95 transition-all duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
					{isSubmitting ? "Submitting..." : buttonText}
				</Button>
			</form>
		</div>
	);
};
