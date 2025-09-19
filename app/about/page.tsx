/* eslint-disable @next/next/no-img-element */
import { Gallery } from "@/components/gallery";
import { Team } from "@/components/team";
import { TestimonialsSection } from "@/components/testim-section";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Slide from "@/components/ui/animated-sections";
import { PageEndDiv } from "@/components/ui/page-end-div";
import { faqs } from "@/lib/data";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import React from "react";

export const metadata: Metadata = {
	title: "About Us",
};

const ParallaxBanner = dynamic(
	() =>
		import("../../components/ui/parallaxH").then(
			(mod) => mod.ParallaxBanner
		),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	}
);

export default function AboutUsPage() {
	return (
		<div className=" px-4 pt-[140px] md:pt-[160px]">
			{/* <div className="max-w-[340px] md:max-w-[80%] lg:max-w-[70%] 2xl:max-w-[65%] mx-auto"> */}
			<Team />
			{/* </div> */}

			<div className="w-full mb-[1.1%] xl:mt-0 flex overflow-hidden">
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
