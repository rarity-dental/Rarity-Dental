import { getStandalonePagesNoCat } from "@/sanity/sanity.query";
import ServicesClientPage from "./_components/services-client";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services",
	description:
		"Explore our comprehensive dental services at Rarity Dental Gurgaon – smile makeovers, dental implants, Invisalign, cosmetic dentistry, root canal, and more.",
	openGraph: {
		title: "Services | Rarity Dental",
		description:
			"Explore our comprehensive dental services at Rarity Dental Gurgaon – smile makeovers, dental implants, Invisalign, cosmetic dentistry, root canal, and more.",
		url: "/services",
	},
};

export default async function AdvancedTechnologyPage() {
	const standalonePages = await getStandalonePagesNoCat();

	return (
		<div>
			<ServicesClientPage standalonePages={standalonePages} />
		</div>
	);
}
