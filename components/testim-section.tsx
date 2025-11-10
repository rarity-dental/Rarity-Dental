"use client";

import { PageStartDiv } from "./ui/page-start-div";
import { PageEndDiv } from "./ui/page-end-div";
import dynamic from "next/dynamic";
import { TestimonialSection } from "./ui/testim-test";

// const TestimonialSection = dynamic(
// 	() => import("./ui/testim-test").then((mod) => mod.TestimonialSection),
// 	{
// 		loading: () => <p>Loading...</p>,
//
// 	}
// );

export const TestimonialsSection = () => {
	return (
		<div className="w-full flex flex-col bg-[#73383E] pt-[75px] xl:pb-[5%] md:py-20  bg-opacity-10 relative overflow-hidden ">
			<PageStartDiv />
			<PageEndDiv />
			<div className="pt-8 pb-0  md:pt-20 md:pb-10 mb-[12%] xl:mb-0">
				<h6 className="text-center text-[14px] tracking-widest leading-relaxed font-semibold mb-6 uppercase text-[#73383E] font-poppins max-w-[300px] md:max-w-[600px] xl:max-w-[1080px] mx-auto">
					Hear What Our Patients Are Saying
				</h6>
				<h2 className="text-center text-[24px] md:text-[38px] xl:text-5xl 4xl:text-6xl font-normal  text-copyColor max-w-[300px]  mx-auto sm:max-w-[480px] md:max-w-[600px] xl:max-w-[1080px] leading-loose">
					Rarity Dental – Trusted by Patients in Gurgaon and Around
					the World for Exceptional Smile Makeovers and Advanced
					Dental Care
				</h2>
			</div>

			<div className="h-[80vh] xl:h-[70vh] relative mb-[2%] flex justify-start items-start">
				<TestimonialSection />
			</div>
		</div>
	);
};
