/* eslint-disable @next/next/no-img-element */
import { Gallery } from "@/components/gallery";
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
	title: "Privacy Policy",
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

export default function PrivacyPolicyPage() {
	return (
		<div className=" px-4 pt-[140px] md:pt-[160px]">
			<div className="max-w-[340px] md:max-w-[80%] lg:max-w-[70%] 2xl:max-w-[65%] mx-auto">
				<h1 className="text-3xl font-bold mb-6">
					Privacy Policy for Rarity Dental Care Centres
				</h1>

				<section className="mb-8">
					<h2 className="text-2xl font-semibold mb-4">
						Introduction
					</h2>
					<p className="text-gray-700">
						{`At Rarity Dental Care Centres ("Rarity", "we", "us", "our"),
					we are committed to protecting and safeguarding the privacy
					and security of our patients' and website users' personal
					information. This Privacy Policy outlines our practices
					regarding the collection, use, disclosure, and protection of
					your information when you visit our website or use our
					services.`}
					</p>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-semibold mb-4">
						Information We Collect
					</h2>
					<h3 className="text-xl font-medium mb-2">
						Personal Information
					</h3>
					<ul className="list-disc list-inside mb-4 text-gray-700">
						<li>Name</li>
						<li>Address</li>
						<li>Age</li>
						<li>Gender</li>
						<li>Contact details (phone number, email address)</li>
						<li>Dental history and medical history</li>
						<li>Treatment preferences and requirements</li>
					</ul>

					<h3 className="text-xl font-medium mb-2">Usage Data</h3>
					<p className="text-gray-700">
						We collect information about your use of our website,
						including pages visited, resources accessed, traffic
						data, location data, and other communication data.
					</p>
				</section>

				<section className="pb-[10%]  relative">
					<h2 className="text-2xl font-semibold mb-4">
						Frequently Asked Questions (FAQs)
					</h2>
					<Accordion
						type="single"
						collapsible
						className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}>
								<AccordionTrigger className="text-left">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-left">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
					<PageEndDiv />
				</section>
			</div>

			<div className="overflow-hidden">
				<TestimonialsSection />
			</div>

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
							className=" object-contain "
							fetchPriority="high"
							style={{
								width: "2387px",
								height: "83px",
							}}
						/>
					</ParallaxBanner>
				</Slide>
			</div>

			<Gallery />
		</div>
	);
}
