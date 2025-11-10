/* eslint-disable @next/next/no-img-element */
import { Gallery } from "@/components/gallery";
import { Team } from "@/components/team";

import Slide from "@/components/ui/animated-sections";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import React from "react";
import { ConsultationForm } from "@/components/forms/connect-form";

export const metadata: Metadata = {
	title: "Contact Us",
};

const ParallaxBanner = dynamic(
	() =>
		import("../../components/ui/parallaxH").then(
			(mod) => mod.ParallaxBanner
		),
	{
		loading: () => <p>Loading...</p>,
	}
);

export default function ContactUsPage() {
	return (
		<div className=" px-4 pt-[140px] md:pt-[160px]">
			<div className=" flex h-full justify-center items-center w-full">
				<div
					className="max-w-[320px] md:max-w-[500px]"
					id="form">
					<ConsultationForm
						countryCode
						buttonText="Book a Free Consultation"
					/>
				</div>
			</div>
			<Team />

			<div className="w-full mb-[1.1%] xl:mt-0 hidden sm:flex overflow-hidden">
				<Slide>
					<ParallaxBanner
						baseVelocity={50}
						childWidth={2430}>
						<img
							src="/images/awards-container.webp"
							width={2387}
							height={83}
							alt="My Image"
							className="object-contain w-full h-auto"
							fetchPriority="high"
						/>
					</ParallaxBanner>
				</Slide>
			</div>

			<Gallery />
		</div>
	);
}
