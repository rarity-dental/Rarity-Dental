import { getStandalonePagesNoCat } from "@/sanity/sanity.query";
import ServicesClientPage from "./_components/services-client";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services",
};

export default async function AdvancedTechnologyPage() {
	const standalonePages = await getStandalonePagesNoCat();

	return (
		<div>
			<ServicesClientPage standalonePages={standalonePages} />
		</div>
	);
}
