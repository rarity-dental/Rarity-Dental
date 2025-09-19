import { Team } from "@/components/team";
import { Gallery } from "@/components/gallery";
import { Metadata } from "next";
import { TestimonialsSection } from "@/components/testim-section";

export const metadata: Metadata = {
	title: "Patient Testimonials",
	description:
		"Read what our patients have to say about their experience at Rarity Dental Care Centres",
};

const EmpanelmentFinancePage = () => {
	return (
		<div className="min-h-screen pt-[140px] md:pt-[120px] pb-[5%]">
			<TestimonialsSection />
			<Team />
			<Gallery end={false} />
		</div>
	);
};

export default EmpanelmentFinancePage;
