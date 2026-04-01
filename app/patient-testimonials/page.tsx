import { Team } from "@/components/team";
import { Gallery } from "@/components/gallery";
import { Metadata } from "next";
import TestimonialTestComponent from "@/components/testim-section-test";

export const metadata: Metadata = {
	title: "Patient Testimonials",
	description:
		"Read what our patients have to say about their experience at Rarity Dental Care Centres",
};

const EmpanelmentFinancePage = () => {
	return (
		<div className="min-h-screen pt-[140px] md:pt-[120px] pb-[5%] overflow-hidden">
			<TestimonialTestComponent />
			<Team />
			<Gallery end={false} />
		</div>
	);
};

export default EmpanelmentFinancePage;
