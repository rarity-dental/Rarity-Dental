/* eslint-disable @next/next/no-img-element */
import { Gallery } from "@/components/gallery";
import { TestimonialsSection } from "@/components/testim-section";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { FloatingWhatsAppButton } from "@/components/ui/icons/floating-whatsapp";
import { PageEndDiv } from "@/components/ui/page-end-div";
import { warrantyConditions, warrantyDetails } from "@/lib/data";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
	title: "Warranty Details",
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
const Slide = dynamic(
	() =>
		import("../../components/ui/animated-sections").then(
			(mod) => mod.Slide
		),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	}
);

export default function PrivacyPolicyPage() {
	return (
		<div className=" px-4 pt-[140px] md:pt-[160px] relative">
			<FloatingWhatsAppButton />
			<div className="max-w-[340px] md:max-w-[80%] lg:max-w-[70%] 2xl:max-w-[65%] mx-auto">
				<Slide>
					<h1 className="text-3xl font-bold mb-6 text-copyColor">
						Warranties Policy for Rarity Dental Care Centres
					</h1>
				</Slide>
				<section className="mb-8">
					<Slide delay={0.2}>
						<h2 className="text-2xl font-semibold mb-4 text-copyColor">
							Commitment to Quality
						</h2>
					</Slide>
					<Slide delay={0.4}>
						<p className="text-gray-700">
							At Rarity Dental Care Centres, we pride ourselves on
							maintaining the highest standards of dental care.
							Our expert team employs state-of-the-art equipment
							and technology to ensure that your treatments are
							both flawless and comfortable. Given these high
							standards, we confidently offer warranties on a
							variety of dental treatments to ensure your peace of
							mind and satisfaction.
						</p>
					</Slide>
				</section>

				<section className="mb-8">
					<Slide delay={0.6}>
						<h2 className="text-2xl font-semibold mb-4 text-copyColor">
							Warranty Details
						</h2>
					</Slide>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
						{warrantyDetails.map((item, index) => (
							<Slide
								key={index}
								delay={0.8 + index * 0.3}>
								<Card key={index}>
									<CardHeader>
										<CardTitle className="text-copyColor">
											{item.treatment}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p>
											<strong className="text-copyColor">
												Warranty Period:
											</strong>{" "}
											{item.period}
										</p>
										<p>
											<strong className="text-copyColor">
												Coverage:
											</strong>{" "}
											{item.coverage}
										</p>
									</CardContent>
								</Card>
							</Slide>
						))}
					</div>
				</section>

				<section className="mb-8">
					<Slide delay={2.5}>
						<h2 className="text-2xl font-semibold mb-4 text-copyColor">
							Warranty Conditions
						</h2>
					</Slide>
					<Accordion
						type="single"
						collapsible
						className="w-full">
						{warrantyConditions.map((condition, index) => (
							<Slide
								key={index}
								delay={2.7 + index * 0.3}>
								<AccordionItem
									key={index}
									value={`item-${index}`}>
									<AccordionTrigger>
										{condition.title}
									</AccordionTrigger>
									<AccordionContent>
										<ul className="list-disc list-inside">
											{condition.details.map(
												(detail, detailIndex) => (
													<li key={detailIndex}>
														{detail}
													</li>
												)
											)}
										</ul>
									</AccordionContent>
								</AccordionItem>
							</Slide>
						))}
					</Accordion>
				</section>

				<section className="mb-8">
					<Slide delay={3.8}>
						<h2 className="text-2xl font-semibold mb-4 text-copyColor">
							Why Choose Rarity Dental Care Centres?
						</h2>
					</Slide>
					<ul className="list-disc list-inside text-gray-700">
						<li>
							Expert Team: Our specialists spend hours
							meticulously planning each treatment, ensuring
							precision and accuracy in every procedure.
						</li>
						<li>
							State-of-the-Art Technology: We use the latest
							technology to deliver superior results and enhance
							the durability of our treatments.
						</li>
						<li>
							Patient Care: We take full responsibility for our
							work and our patients, which is why we confidently
							offer extensive warranties on our dental treatments.
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-semibold mb-4 text-copyColor">
						Contact Us
					</h2>
					<p className="text-gray-700 mb-4">
						For any questions or to make a warranty claim, please
						contact us at:
					</p>
					<ul className="list-none text-gray-700">
						<li>
							<strong className="text-copyColor">Email:</strong>{" "}
							info@raritydental.com
						</li>
						<li>
							<strong className="text-copyColor font-poppins">
								Phone:
							</strong>{" "}
							+91-7899418483
						</li>
						<li>
							<strong className="text-copyColor">Address:</strong>{" "}
							42, Ashoka Crescent, Golf Course Road Gurugram -
							122002
						</li>
					</ul>
					<Button
						asChild
						className="mt-4">
						<Link href="/warranty-details#contact-form">
							Contact Us
						</Link>
					</Button>
					<PageEndDiv />
				</section>
			</div>

			<div className="overflow-hidden">
				<TestimonialsSection />
			</div>

			<div className="w-full mb-[1.1%] xl:mt-0 hidden sm:flex overflow-hidden border-b">
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

			<div id="contact-form" />
			<Gallery />
		</div>
	);
}
