/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "./ui/button";
import { PageEndDiv } from "./ui/page-end-div";
import ArrowIcon from "./ui/arrow-right-gallery";
import { useIsMobile } from "@/hooks/useIsMobile";
import { sendEmail } from "@/lib/resend";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { toast } from "./ui/use-toast";
import { PageStartDiv } from "./ui/page-start-div";
import { ConsultationForm } from "./forms/connect-form";

const formSchema = z.object({
	firstName: z.string().min(3, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	contactNumber: z.string().min(10, "Invalid contact number"),
	email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>;

type Props = {
	end?: boolean;
	start?: boolean;
	paraText?: string;
	buttonText?: string;
};

export const Gallery = ({
	end = true,
	start = false,
	paraText = `Fill out the form above and our team will get back to you shortly. In the meantime, sit back, relax, and let us handle everything.`,
	buttonText = "Get in Touch",
}: Props) => {
	const isMobile = useIsMobile();
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
			// Show error message to user
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

	const renderForm = () => (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-y-3 font-poppins"
			id="contact-form-home">
			<div
				className={
					isMobile
						? ""
						: "w-full flex gap-x-3 relative justify-between"
				}>
				<input
					{...register("firstName")}
					type="text"
					placeholder="First Name"
					className="w-full py-3 px-4 mb-3 md:mb-0 bg-[#ECE3DB] border-none placeholder-[#646A69] "
				/>
				{errors.firstName && !isMobile ? (
					<span className="text-red-500 absolute top-[-60%] left-[2%] w-full h-full">
						{errors.firstName.message}
					</span>
				) : (
					<span className="text-red-500 ">
						{errors?.firstName?.message}
					</span>
				)}
				<input
					{...register("lastName")}
					type="text"
					placeholder="Last Name"
					className="w-full py-3 px-4 bg-[#ECE3DB] border-none placeholder-[#646A69]"
				/>
				{errors.lastName && !isMobile && (
					<span className="text-red-500 absolute top-[-60%] right-[15%] ">
						{errors.lastName.message}
					</span>
				)}
				{errors.lastName && isMobile && (
					<span className="text-red-500">
						{errors?.lastName?.message}
					</span>
				)}
			</div>
			<input
				{...register("contactNumber")}
				type="tel"
				placeholder="Mobile Number"
				className="w-full py-3 px-4 bg-[#ECE3DB] border-none placeholder-[#646A69]"
			/>
			{errors.contactNumber && (
				<span className="text-red-500">
					{errors.contactNumber.message}
				</span>
			)}
			<input
				{...register("email")}
				type="email"
				placeholder="Email Address"
				className="w-full py-3 px-4 bg-[#ECE3DB] border-none placeholder-[#646A69]"
			/>
			{errors.email && (
				<span className="text-red-500">{errors.email.message}</span>
			)}
			<Button
				type="submit"
				disabled={isSubmitting}
				className="bg-[#47413c] text-[#ECE3DB] py-3 rounded-none hover:bg-[#86806c] active:scale-95 transition-all duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
				{isSubmitting ? "Submitting..." : buttonText}
			</Button>
		</form>
	);

	return (
		<>
			{isMobile ? (
				<div className="w-full flex flex-col justify-center items-center  relative pt-20 pb-16 max-w-[342px] md:max-w-[600px] xl:max-w-[1080px] mx-auto">
					{end && <PageEndDiv />}
					{start && <PageStartDiv />}
					<div className="max-w-[300px] mx-auto mb-8">
						<h2 className="text-[14px] text-center tracking-widest leading-relaxed font-semibold uppercase text-[#73383E] font-poppins mb-6">
							Gallery
						</h2>
						<h2 className="text-[28px] text-center font-normal text-copyColor leading-tight ">
							Your journey to a flawless smile begins here.
						</h2>
					</div>
					<div className="flex w-full mx-auto h-[245px] justify-between items-center gap-[10px] relative mb-8">
						<div className="absolute left-[49%] top-1/3 rounded-full w-[67px] h-[67px] bg-[#F7F2EC] flex justify-center items-center z-10">
							<img
								src="/images/rotating-image.svg"
								alt="rotating-text"
								loading="lazy"
								width={57}
								height={57}
								className="absolute animate-spin-slow"
							/>
							<div className="text-[14px] text-[#584934] font-semibold tracking-widest  rounded-full">
								<img
									src="/images/arrow-right-gallery-mobile.svg"
									alt="arrow-right-gallery"
									width={45}
									height={45}
									loading="lazy"
								/>
							</div>
						</div>
						<div className="w-[195px] h-[245px] relative rounded-lg">
							<img
								src="/images/gallery/gallery-img-left-2.webp"
								alt="Rarity Dental clinic interior"
								loading="lazy"
								sizes="50vw"
								className=" object-cover  rounded-lg absolute inset-0 w-full h-full"
							/>
						</div>

						<div className="w-[43%] h-[245px] flex-col justify-between  items-center ">
							<div className="w-full h-[47.5%] relative rounded-lg">
								<img
									src="/images/gallery/gallery-img-right-top.webp"
									alt="Dental treatment room at Rarity Dental"
									loading="lazy"
									sizes="25vw"
									className="object-cover rounded-lg absolute inset-0 w-full h-full"
									// style={{ width: "133px", height: "114px" }}
								/>
							</div>
							<div className="w-full h-[5%]"></div>
							<div className="w-full h-[47.5%] relative rounded-lg">
								<img
									src="/images/gallery/gallery-img-left.webp"
									alt="Patient care at Rarity Dental Gurgaon"
									sizes="25vw"
									className="object-cover rounded-lg absolute inset-0 w-full h-full"
									loading="lazy"
								/>
							</div>
						</div>
					</div>
					<div
						id="formDiv"
						className="max-w-[342px] mx-auto py-16 px-8 flex flex-col gap-10 bg-[#73383E]">
						<div className="flex flex-col gap-y-4">
							<h2 className="text-white text-[32px] font-normal tracking-tight leading-tight">
								Fill the form for enquiries and consultation
								requests
							</h2>
							<p className="text-white font-poppins font-normal tracking-tighter text-[14px]">
								Stay in the loop with our newsletter, where we
								deliver bite-sized insights into the latest
								technological solutions in the dental world.
							</p>
						</div>
						{renderForm()}
					</div>
				</div>
			) : (
				<div
					id="formDiv"
					className="w-full relative flex flex-col justify-center items-start max-w-[1280px] mx-auto pt-16 pb-[150px]">
					{end && <PageEndDiv />}
					{start && <PageStartDiv />}
					<h2 className="text-[14px] tracking-widest leading-relaxed font-semibold uppercase text-[#73383E] font-poppins mb-6">
						Gallery
					</h2>
					<h2 className="text-[48px] font-normal text-copyColor leading-tight max-w-[540px] mb-8">
						Your journey to a flawless smile begins here.
					</h2>
					<div className="flex flex-col md:flex-row  gap-5 w-full justify-between items-start ">
						<div className="w-[61%] flex justify-between gap-x-[25px] items-center relative">
							<div className="absolute top-1/2 left-[57%] -translate-x-1/2 -translate-y-1/2 rounded-full w-[154px] h-[154px] bg-[#F7F2EC] flex justify-center items-center z-10">
								<img
									src="/images/rotating-image.svg"
									alt="rotating-text"
									loading="lazy"
									width={131}
									height={131}
									className="absolute animate-spin-slow"
								/>
								<div className="text-[14px] text-[#584934] font-semibold tracking-widest rounded-full">
									<ArrowIcon
										color="#584934"
										width={90}
										height={90}
										className=""
									/>
								</div>
							</div>
							<div className="relative w-[60%] h-[544px]">
								<img
									src="/images/gallery/gallery-img-left-2.webp"
									alt="Rarity Dental clinic interior"
									loading="lazy"
									sizes="(min-width: 1024px) 37vw"
									className="object-cover rounded-lg absolute inset-0 w-full h-full"
								/>
							</div>

							<div className="flex w-[40%] h-[544px] flex-col justify-between gap-5 items-center">
								<div className="relative w-full h-[47.5%]">
									<img
										src="/images/gallery/gallery-img-right-top.webp"
										alt="Dental treatment room at Rarity Dental"
										loading="lazy"
										sizes="(min-width: 1024px) 25vw"
										className="object-cover rounded-lg absolute inset-0 w-full h-full"
									/>
								</div>
								<div className="relative w-full h-[47.5%]">
									<img
										src="/images/gallery/gallery-img-left.webp"
										alt="Patient care at Rarity Dental Gurgaon"
										loading="lazy"
										sizes="(min-width: 1024px) 25vw"
										className="object-cover rounded-lg absolute inset-0 w-full h-full"
									/>
								</div>
							</div>
						</div>
						<div className="w-[45%] h-[539px] px-8 flex flex-col gap-10 bg-[#73383E]">
							<ConsultationForm
								buttonText="Get in Touch"
								paraText={paraText}
								countryCode
								className="h-full w-auto"
							/>
							{/* {renderForm()} */}
						</div>
					</div>
				</div>
			)}
		</>
	);
};
