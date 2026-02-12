// app/about/page.tsx (Server Component by default)
import ClientAbout from "./_components/ClientAbout";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn about Rarity Dental Care Centres in Gurgaon – our mission, values, and the experienced team of dentists dedicated to delivering world-class dental care.",
	openGraph: {
		title: "About Us | Rarity Dental",
		description:
			"Learn about Rarity Dental Care Centres in Gurgaon – our mission, values, and the experienced team of dentists dedicated to delivering world-class dental care.",
		url: "/about",
	},
};

export default function AboutPage() {
	return <ClientAbout />;
}
