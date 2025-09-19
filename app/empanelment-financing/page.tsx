import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Team } from "@/components/team";
import { Gallery } from "@/components/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Empanelment & Financing",
	description:
		"Empanelment and financing options at Rarity Dental Care Centres",
};

const EmpanelmentFinancePage = () => {
	const faqs = [
		{
			question: "What insurance providers are you empaneled with?",
			answer: "We are empaneled with several national and international insurance providers. Please check with our administrative team for the complete list and coverage details.",
		},
		{
			question: "How do I apply for a loan to cover my dental treatment?",
			answer: "You can apply for a loan by meeting our in-clinic representative who will assist you with the process. Provide the necessary documentation for instant loan approval.",
		},
		{
			question: "What documents are required for the loan application?",
			answer: "You will need to provide ID proof, address proof, and income proof for the loan application.",
		},
		{
			question: "Can I foreclose my loan before the term ends?",
			answer: "Yes, you can foreclose your loan any time after paying the first EMI without any additional foreclosure charges.",
		},
		{
			question: "How does the EMI Network work?",
			answer: "The EMI Network allows you to convert your treatment expenses into easy monthly instalments. This makes it easier to manage payments without financial strain.",
		},
	];

	const financingSteps = [
		{
			title: "Initial Consultation",
			description:
				"Schedule an initial consultation to discuss your dental needs and receive a treatment plan. Our team will provide a detailed cost estimate for the proposed treatments.",
		},
		{
			title: "Financing Consultation",
			description:
				"Meet with our in-clinic representative to discuss financing options. We will explain the EMI Network and loan application process.",
		},
		{
			title: "Loan Application",
			description:
				"Provide necessary documentation for loan application (ID proof, address proof, and income proof). Receive instant loan approval through our partner financing institutions.",
		},
		{
			title: "Treatment and Payment",
			description:
				"Begin your dental treatment as per the agreed plan. Treatment expenses will be converted into EMIs, making payments convenient and affordable.",
		},
		{
			title: "Post-Treatment Support",
			description:
				"Continue with your treatment without worrying about financial strain. Foreclose your loan any time after the first EMI if desired, without paying additional charges.",
		},
	];

	return (
		<div className="min-h-screen  pt-[140px] md:pt-[160px] pb-[5%]">
			<div className="max-w-[340px] md:max-w-[80%] lg:max-w-[70%] 2xl:max-w-[65%]  mx-auto">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Empanelment & Financing
					</h1>
					<p className="text-lg text-gray-600">
						Making quality dental care accessible and affordable
					</p>
				</div>

				<Tabs
					defaultValue="empanelment"
					className="space-y-8">
					<TabsList className="grid w-full grid-cols-2 bg-copyColor/10">
						<TabsTrigger
							value="empanelment"
							className="">
							Insurance & Empanelment
						</TabsTrigger>
						<TabsTrigger value="financing">
							Financing Options
						</TabsTrigger>
					</TabsList>

					<TabsContent value="empanelment">
						<Card>
							<CardHeader>
								<CardTitle>Insurance Partners</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<ul className="list-disc pl-6 space-y-2 text-gray-600">
									<li>
										We are empaneled with major national and
										international insurance providers.
									</li>
									<li>
										Insurance coverage includes various
										dental treatments such as implants, root
										canals, cosmetic dentistry, and more.
									</li>
									<li>
										Patients must verify coverage details
										with their insurance provider before
										availing treatment.
									</li>
									<li>
										Our administrative team assists with
										insurance claims and documentation to
										ensure a hassle-free experience.
									</li>
								</ul>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="financing">
						<Card>
							<CardHeader>
								<CardTitle>Easy Finance Options</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="prose max-w-none">
									<p className="text-gray-600">
										We understand the financial commitment
										required for top-notch dental care. To
										support our patients, we offer financing
										options through our partner EMI Network.
									</p>
								</div>

								<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
									{financingSteps.map((step, index) => (
										<Card
											key={index}
											className="bg-white">
											<CardHeader>
												<CardTitle className="text-lg">
													Step {index + 1}:{" "}
													{step.title}
												</CardTitle>
											</CardHeader>
											<CardContent>
												<p className="text-gray-600">
													{step.description}
												</p>
											</CardContent>
										</Card>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>

				<Card className="mt-12">
					<CardHeader>
						<CardTitle>Frequently Asked Questions</CardTitle>
					</CardHeader>
					<CardContent>
						<Accordion
							type="single"
							collapsible
							className="space-y-2">
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`faq-${index}`}>
									<AccordionTrigger className="text-left">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-gray-600">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</CardContent>
				</Card>

				<div className="mt-12 text-center text-gray-600 mb-8">
					<p>
						Contact us today at{" "}
						<a
							href="mailto:info@raritydental.com"
							className="text-blue-600 hover:text-blue-800">
							info@raritydental.com
						</a>{" "}
						to schedule your consultation and begin your journey to
						a healthier, brighter smile.
					</p>
				</div>
				<Team />
				<Gallery end={false} />
			</div>
		</div>
	);
};

export default EmpanelmentFinancePage;
