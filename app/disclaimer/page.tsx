/* eslint-disable @next/next/no-img-element */
import { Gallery } from "@/components/gallery";
import { TestimonialsSection } from "@/components/testim-section";
import { Accordion } from "@/components/ui/accordion";
import Slide from "@/components/ui/animated-sections";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import React from "react";

export const metadata: Metadata = {
	title: "Disclaimer",
	description: "Disclaimer for Rarity Dental Care Centres",
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

export default function DisclaimerPage() {
	const disclaimerSections = [
		{
			id: "general",
			title: "General Information",
			content:
				"All the information on this website - www.raritydentalcare.com - is published in good faith and for general informational purposes only. Rarity Dental (M/S Glowin Dental) Care Centres does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website is strictly at your own risk. Rarity Dental Care Centres will not be liable for any losses and/or damages in connection with the use of our website.",
		},
		{
			id: "external-links",
			title: "External Links",
			content:
				"From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.",
		},
		{
			id: "third-party",
			title: "Third-Party Content",
			content:
				'Please be also aware that when you leave our website, other sites may have different privacy policies and terms that are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.',
		},
		{
			id: "warranties",
			title: "No Warranties",
			content:
				'This website is provided "as is" without any representations or warranties, express or implied. Rarity Dental Care Centres makes no representations or warranties in relation to this website or the information and materials provided on this website. Specifically, Rarity Dental Care Centres does not warrant that: This website will be constantly available, or available at all; or the information on this website is complete, true, accurate, or non-misleading.',
		},
		{
			id: "medical",
			title: "Medical Advice",
			content:
				"Nothing on this website constitutes, or is meant to constitute, medical advice of any kind. If you require advice in relation to any medical matter, you should consult an appropriate professional.",
		},
		{
			id: "liability",
			title: "Limitations of Liability",
			content:
				"Rarity Dental Care Centres will not be liable to you (whether under the law of contract, the law of torts, or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website for: Any indirect, special, or consequential loss; or any business losses, loss of revenue, income, profits, or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data. These limitations of liability apply even if Rarity Dental Care Centres has been expressly advised of the potential loss.",
		},
	];

	return (
		<div className=" pt-[140px] md:pt-[160px]">
			<div className="max-w-[340px] md:max-w-[80%] lg:max-w-[70%] 2xl:max-w-[65%] mx-auto  pb-[5%]">
				<h1 className="text-3xl font-bold mb-6">
					Disclaimer for Rarity Dental Care Centres
				</h1>
				<div className="pt-6">
					<Accordion
						type="single"
						collapsible
						className="space-y-4">
						{disclaimerSections.map((section) => (
							<div key={section.id}>
								<div className="text-left text-2xl font-semibold ">
									{section.title}
								</div>
								<div className="text-gray-600 leading-relaxed">
									{section.content}
								</div>
							</div>
						))}
					</Accordion>

					<div className="mt-8 border-t pt-6">
						<h3 className="text-2xl font-semibold mb-4">
							Contact Us
						</h3>
						<p className="text-gray-600">
							If you require any more information or have any
							questions about our site&apos;s disclaimer, please
							feel free to contact us by email at{" "}
							<a
								href="mailto:info@raritydental.com"
								className="text-blue-600 hover:text-blue-800">
								info@raritydental.com
							</a>
						</p>
					</div>

					<div className="mt-6 text-sm text-gray-500">
						<p>
							By using our website, you hereby consent to our
							disclaimer and agree to its terms.
						</p>
						<p className="mt-2">
							Should we update, amend, or make any changes to this
							document, those changes will be prominently posted
							here.
						</p>
					</div>
				</div>
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
