"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import { sendEmail } from "@/lib/resend";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

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
	countryCode?: boolean;
}

export const ConsultationForm = ({
	paraText = "Fill out the form above and our team will get back to you shortly.",
	buttonText = "Get in Touch",
	className = "md:rounded-l-md",
	countryCode = false,
}: ConsultationFormProps) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState<string>("+91"); // Default to India
	const [country, setCountry] = useState<string>("India");
	const [countryIso, setCountryIso] = useState<string>("IN"); // ISO country code

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	// Auto-detect country
	useEffect(() => {
		if (countryCode) {
			fetch("/api/get-country")
				.then((res) => {
					if (!res.ok) {
						throw new Error(`HTTP error! status: ${res.status}`);
					}
					return res.json();
				})
				.then((data) => {
					if (data && data.country_calling_code) {
						setPhoneNumber(""); // Let user type, don't prefill
						setCountry(data.country_name);
						setCountryIso(data.country_code || "IN");
					}
				})
				.catch((error) => {
					console.error("Error fetching country code:", error);
					// Fallback to India on error (already set as default)
				});
		}
	}, [countryCode]);

	// Update phone number in form state
	useEffect(() => {
		setValue("contactNumber", phoneNumber || "");
	}, [phoneNumber, setValue]);

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true);
		try {
			const formData = new FormData();
			Object.entries(data).forEach(([key, value]) => {
				formData.append(key, value);
			});

			formData.append("submissionUrl", window.location.href);
			formData.append("country", country || "");

			await sendEmail(formData);
			reset();
			setPhoneNumber("+91"); // Reset to default India code
			setCountryIso("IN");
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
			className={`w-full h-full py-8 px-8 flex flex-col justify-center gap-10 bg-[#73383E] ${className}`}
		>
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
				className="flex flex-col gap-y-3 font-poppins"
			>
				<div className="w-full flex gap-x-3 relative">
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
					{countryCode ? (
						<PhoneInput
							international
							defaultCountry={countryIso as any}
							value={phoneNumber}
							onChange={(value) => setPhoneNumber(value || "")}
							className="w-full py-3 px-4 bg-[#ECE3DB] border-none placeholder-[#646A69] !important"
						/>
					) : (
						<input
							{...register("contactNumber")}
							type="tel"
							placeholder="Mobile Number"
							className="w-full py-3 px-4 bg-[#ECE3DB] border-none placeholder-[#646A69] input-bg"
						/>
					)}
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

				<button
					type="submit"
					disabled={isSubmitting}
					className="bg-[#47413c] text-[#ECE3DB] py-3 rounded-none hover:bg-[#86806c] active:scale-95 transition-all duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? "Submitting..." : buttonText}
				</button>
			</form>
		</div>
	);
};
