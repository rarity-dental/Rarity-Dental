/* eslint-disable @next/next/no-img-element */
import Slide from "@/components/ui/animated-sections";
import { CheckIcon } from "lucide-react";
import dynamic from "next/dynamic";

import { ConsultationForm } from "@/components/forms/connect-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { getInvisalignPage } from "@/sanity/sanity.query";
import { notFound } from "next/navigation";

import { Team } from "@/components/team";
import { FlipCard } from "@/components/flip-card/flip-cards";
import { HeroPointers } from "@/components/hero-pointers";

const ParallaxBanner = dynamic(
	() =>
		import("../../components/ui/parallaxH").then(
			(mod) => mod.ParallaxBanner
		),
	{
		loading: () => <p>Loading...</p>,
	}
);

const searchItems = [
	{
		id: 1,
		category: "SD",
		title: "Digital Smile Designing",
		description: "Read our latest articles and dental care tips.",
		href: "/smile-designing/Digital-Smile-Design",
	},
	{
		id: 2,
		category: "SD",
		title: "Smile Makeovers Consultation",
		description: "Read our latest articles and dental care tips.",
		href: "/smile-designing/smile-makeover-consultation",
	},
	{
		id: 3,
		category: "SD",
		title: "Gum Contouring",
		description: "Read our latest articles and dental care tips.",
		href: "/smile-designing/gum-contouring",
	},
	{
		id: 4,
		category: "SD",
		title: "Tooth Contouring & Reshaping",
		description: "Read our latest articles and dental care tips.",
		href: "/smile-designing/tooth-contouring-and-reshaping",
	},
	{
		id: 5,
		category: "SD",
		title: "Lip Repositioning Surgery",
		description: "Read our latest articles and dental care tips.",
		href: "/smile-designing/lip-repositioning-surgery",
	},

	{
		id: 6,
		category: "SD",
		title: "Orthognathic Surgery",
		description: "Read our latest articles and dental care tips.",
		href: "/smile-designing/orthognathic-surgery",
	},
];

const faqs = [
	{
		question:
			"How do I start my treatment journey at Rarity Dental Care Centres?",
		answer: "Starting your treatment journey at Rarity Dental Care Centres is simple and hassle-free. You can begin by contacting us via our website, email, or phone to schedule a pre-arrival consultation. During this consultation, our team will assess your dental needs, provide a personalized treatment plan, and guide you through the next steps, including travel arrangements and accommodation options.",
	},
	{
		question: "What should I expect during the pre-arrival consultation?",
		answer: "During the pre-arrival consultation, our dental experts will discuss your dental concerns, medical history, and treatment goals. We may request X-rays, photos, or other diagnostic records to create a tailored treatment plan. This consultation can be conducted via video call or email, ensuring you are fully informed and comfortable before arriving at our clinic.",
	},
	{
		question:
			"How will Rarity Dental Care Centres assist me with travel arrangements?",
		answer: "We understand that traveling for dental care can be overwhelming. Our dedicated patient care team will assist you with flight bookings, visa invitations, local transportation, and accommodation recommendations. We aim to make your journey as seamless as possible, so you can focus entirely on your treatment and recovery.",
	},
	{
		question: "What kind of dental technology do you use?",
		answer: "At Rarity Dental Care Centres, we pride ourselves on using state-of-the-art dental technology to ensure the highest standards of care. Our clinic is equipped with advanced tools such as 3D imaging, digital scanners, intraoral cameras, and laser dentistry equipment. These technologies enable precise diagnostics, minimally invasive treatments, and faster recovery times.",
	},
	{
		question: "How do you ensure the quality of dental care?",
		answer: "We are committed to delivering world-class dental care. Our team consists of highly skilled and experienced dental professionals who stay updated with the latest advancements in dentistry. We adhere to strict international hygiene and safety protocols and use only premium-quality materials. Additionally, we conduct regular quality checks and patient feedback sessions to continuously improve our services.",
	},
	{
		question: "Is there any language barrier?",
		answer: "No, there is no language barrier at Rarity Dental Care Centres. Our team is fluent in multiple languages, including English, and we also provide translation services if needed. We ensure clear communication at every step, so you fully understand your treatment plan and feel comfortable throughout your journey.",
	},
	{
		question: "What are the payment options available?",
		answer: "We offer flexible payment options to suit your needs. You can pay via credit/debit cards, bank transfers, or other secure online payment methods. We also provide detailed cost breakdowns and financing options to make your treatment more affordable. Our team will guide you through the payment process and address any questions you may have.",
	},
	{
		question: "Do you provide post-treatment support?",
		answer: "Yes, we provide comprehensive post-treatment support to ensure your recovery and long-term dental health. After your treatment, our team will schedule follow-up consultations (in-person or virtual) to monitor your progress. We also offer 24/7 emergency support and are always available to address any concerns or questions you may have after returning home.",
	},
];

export async function generateMetadata() {
	const data = await getInvisalignPage();

	// console.log(data, "meta");

	if (!data) {
		// Return a basic metadata object for 404
		return {
			title: "Not Found",
			description: "The requested page does not exist.",
		};
	}

	return {
		title: data?.meta_title || data?.ogTitle || "Invisalign",
		description: data?.meta_description || "Information about Invisalign",
		openGraph: {
			title: data?.ogTitle || data?.meta_title || "Invisalign",
			description:
				data?.ogDescription ||
				data?.meta_description ||
				"Information about Invisalign",
			url: `/invisalign`,
			images: data?.ogImage
				? [
						{
							url: data.ogImage,
							width: 1200,
							height: 630,
							alt: data?.ogTitle || "Invisalign",
						},
					]
				: [],
		},
		twitter: {
			title: data?.ogTitle || data?.meta_title || "Invisalign",
			description:
				data?.ogDescription ||
				data?.meta_description ||
				"Information about Invisalign",
			images: data?.ogImage
				? [
						{
							url: data.ogImage,
							width: 1200,
							height: 630,
							alt: data?.ogTitle || "Invisalign",
						},
					]
				: [],
			card: "summary_large_image",
		},
	};
}

export default async function InvisalignPage() {
	const data = await getInvisalignPage();

	if (!data) {
		return notFound();
	}

	// console.log(data);

	const blogItems = data?.relatedBlogs?.selectedArticles;

	return (
		<div
			className="min-h-screen flex flex-col w-full justify-center items-center pt-[120px] md:pt-[30px] relative"
			id="form-top">
			<a
				href="#form-top"
				className="fixed top-[22%]  md:top-[60%] right-0 w-8 md:w-12 h-[14rem] md:h-[18rem] bg-[#86806c] z-30 cursor-pointer hover:bg-[#2a2424] transition-colors duration-300 group rounded-l-lg overflow-hidden ">
				<div className="absolute w-[18rem] h-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<div className="w-full h-full flex items-center justify-center -rotate-90 text-white font-bold tracking-[0.15em] text-lg md:text-2xl">
						Talk To An Expert
					</div>
				</div>
			</a>
			<a
				href="/Rarity Dental Brochure.pdf"
				download
				rel="noreferrer noopener"
				// href="https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2FRarity%20Dental%20Brochure.pdf?alt=media&token=b12d59c2-aaf7-4831-903b-d7f4092652a2"
				className="fixed top-[22%] left-0 md:left-auto md:top-[20%] md:right-0 w-8 md:w-12 h-[14rem] md:h-[18rem] bg-[#86806c] z-30 cursor-pointer hover:bg-[#2a2424] transition-colors duration-300 group rounded-r-lg md:rounded-l-lg md:rounded-r-none overflow-hidden">
				<div className="absolute w-[18rem] h-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<div className="w-full h-full flex items-center justify-center -rotate-90 text-white font-bold tracking-[0.15em] text-lg md:text-2xl">
						Download Brochure
					</div>
				</div>
			</a>

			<div className="w-full pt-[1%] md:pt-[10%] pb-[6%] relative">
				<div className="w-full h-full">
					<video
						autoPlay
						muted
						loop
						playsInline
						poster={data.heroSection.posterImage}
						className="absolute top-0 left-0 w-full h-full object-cover scale-x-[-1] ">
						<source
							src={data?.heroSection?.videoUrl}
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
					{/* Optional overlay to control video brightness/contrast */}
					<div className="absolute inset-0 bg-black/50"></div>

					<div className="max-w-[300px] md:max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between space-y-4 md:space-x-4 items-center h-full md:pt-0 pb-8 md:pb-0 ">
						<div className="h-full w-full md:w-[56%] flex flex-col justify-center items-center z-[1] pt-4 md:pt-0">
							<h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.4em] tracking-normal text-center md:text-left">
								{data.heroSection?.title}
							</h1>

							<div className="space-y-2 w-full pt-4">
								{data.heroSection?.heroPointers && (
									<HeroPointers
										pointers={data.heroSection.heroPointers}
									/>
								)}
							</div>
						</div>
						<div className=" flex h-full justify-center items-center w-full md:w-[44%] z-[1]">
							<div
								className="max-w-[320px] md:max-w-[500px]"
								id="form">
								<ConsultationForm
									buttonText="Book a Free Consultation"
									countryCode={true}
								/>
							</div>
						</div>
					</div>
				</div>
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
							alt="Awards, Accreditations, and Certifications"
							className="object-contain  "
							fetchPriority="high"
							style={{
								width: "2387px",
								height: "83px",
							}}
						/>
					</ParallaxBanner>
				</Slide>
			</div>

			{data.howCanWeHelp?.image && data.howCanWeHelp?.items && (
				<div className="flex flex-col justify-center items-center gap-8  py-8 md:py-0 md:pb-[10%] 2xl:pb-[3%]">
					<div className="max-w-[320px] md:max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start md:h-[70vh] md:max-h-[600px] gap-8 h-full">
						<img
							src={data.howCanWeHelp?.image}
							width={800}
							height={800}
							alt={data.howCanWeHelp?.title}
							className="object-cover max-w-[320px] h-[500px] md:max-w-[550px] md:h-full border border-copyColor"
							fetchPriority="high"
						/>

						<div className="w-full md:w-[55%] h-full flex flex-col justify-between text-center md:text-left px-2">
							<p className="text-sm md:text-md tracking-widest leading-relaxed font-semibold uppercase  font-poppins">
								How can we help?
							</p>
							<h2 className="text-2xl md:text-4xl font-bold pb-2">
								{data.howCanWeHelp?.title}
							</h2>
							<p className="text-md md:text-lg pb-4 md:pb-0">
								{data.howCanWeHelp?.description}
							</p>
							<div className="flex flex-col md:flex-row w-full justify-between items-start pt-6">
								<div className="flex flex-col space-y-2 w-full md:w-1/2 justify-center items-center md:items-start">
									{data.howCanWeHelp?.items[0]?.icon && (
										<img
											src={
												data.howCanWeHelp?.items[0]
													?.icon
											}
											alt={
												data.howCanWeHelp?.items[0]
													?.text
											}
											className="object-cover w-8 h-8 md:w-[90px] md:h-[90px]"
											width={90}
											height={90}
										/>
									)}
									<h3 className="text-xl md:text-2xl font-bold">
										{data.howCanWeHelp?.items[0]?.text}
									</h3>
									<p className="text-md md:text-lg leading-[1.4em] max-w-[310px]">
										{
											data.howCanWeHelp?.items[0]
												?.description
										}
									</p>
								</div>
								<div className="flex flex-col pt-8 md:pt-0 space-y-2 w-full md:w-1/2 justify-center items-center md:items-start">
									{data.howCanWeHelp?.items[1]?.icon && (
										<img
											src={
												data.howCanWeHelp?.items[1]
													?.icon
											}
											alt={
												data.howCanWeHelp?.items[1]
													?.text
											}
											className="object-cover w-8 h-8 md:w-[90px] md:h-[90px]"
											width={90}
											height={90}
										/>
									)}
									<h3 className="text-xl md:text-2xl font-bold">
										{data.howCanWeHelp?.items[1]?.text}
									</h3>
									<p className="text-md md:text-lg leading-[1.4em] max-w-[320px]">
										{
											data.howCanWeHelp?.items[1]
												?.description
										}
									</p>
								</div>
							</div>
							<a
								href="#form"
								className="pt-4">
								<Button
									variant={"defaultWhite"}
									className="group relative px-[40px] py-[20px] gap-x-[16px] bg-copyColor/15 rounded-none h-auto md:h-[60px] z-10 w-[242px] md:w-auto overflow-hidden border border-copyColor">
									<span className="uppercase text-[12px] md:text-[14px] font-poppins font-semibold tracking-wide text-[#73383E] transition-colors duration-500 ease-out relative z-10 group-hover:text-white">
										Connect with us
									</span>
									<div className="w-[20px] h-[20px] bg-[url('/images/arrow-right-brown.svg')] bg-cover transition-all duration-500 ease-out relative z-10 group-hover:bg-[url('/images/arrow-right-white.svg')]" />
									<div className="absolute inset-0 bg-[#73383E] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
								</Button>
							</a>
						</div>
					</div>
				</div>
			)}

			<div className="md:min-h-[97vh] 2xl:min-h-[80vh] w-full relative flex justify-center items-center">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute top-0 left-0 w-full h-full object-cover scale-x-[-1] ">
					<source
						src={data.whyChooseUs?.videoUrl}
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
				{/* Optional overlay to control video brightness/contrast */}
				<div className="absolute inset-0 bg-black/50"></div>

				<div className="max-w-[320px] md:max-w-7xl mx-auto flex flex-col justify-between space-y-8 px-2 items-center h-full z-[2] py-[8%] md:py-[5%]">
					<p className="text-sm md:text-md tracking-widest leading-relaxed font-semibold uppercase text-white font-poppins">
						Your case, Our Priority
					</p>
					<h2 className="text-3xl md:text-6xl text-center font-bold text-white">
						{data.whyChooseUs?.title}
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{data.whyChooseUs?.items?.map(
							(item: any, index: any) => {
								return (
									<FlipCard
										key={index}
										icon={item.icon}
										text={item.text}
										description={item.description}
									/>
								);
							}
						)}
					</div>
				</div>
			</div>

			<div className="w-full px-2 flex flex-col space-y-4 max-w-[342px] md:max-w-7xl mx-auto py-[8%] md:py-[3%]">
				<p className="text-sm md:text-md tracking-widest leading-relaxed font-semibold uppercase font-poppins">
					How We Work
				</p>
				<h2 className="text-2xl md:text-4xl font-bold">
					{data?.howWeWork?.title}
				</h2>
				<p className="text-md md:text-lg pb-4 md:pb-0">
					{data?.howWeWork?.description}
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{data?.howWeWork?.items?.map((item: any, index: any) => {
						return (
							<div
								key={index}
								className="p-6">
								<div className="flex flex-col items-center gap-2">
									<img
										src={item.icon}
										alt={item.title}
										className="object-cover w-16 h-16"
										width={64}
										height={64}
									/>
									<h3 className="text-2xl font-bold text-center">
										{item.title}
									</h3>
								</div>
								<h3 className="text-lg pt-4">{item.text}</h3>
							</div>
						);
					})}
				</div>
			</div>

			<div className="w-full bg-copyColor">
				<div className="w-full max-w-[300px] md:max-w-7xl mx-auto py-[8%] md:py-[3%] flex flex-col md:flex-row justify-between items-center ">
					<p className="text-2xl md:text-6xl font-extrabold font-poppins text-white pb-4 md:pb-0">
						Book Free Consultation
					</p>
					<a href="#form">
						<Button
							variant={"defaultWhite"}
							className="group relative px-[40px] py-[20px] gap-x-[16px] bg-[#f7f2ec] rounded-lg h-auto md:h-[60px] z-10 w-[242px] md:w-auto overflow-hidden border-4  border-[#86806c]">
							<span className="uppercase text-[12px] md:text-xl font-poppins font-semibold tracking-wide text-[#73383E] transition-colors duration-500 ease-out relative z-10 group-hover:text-white">
								Click Here
							</span>
							<div className="w-[20px] h-[20px] bg-[url('/images/arrow-right-brown.svg')] bg-cover transition-all duration-500 ease-out relative z-10 group-hover:bg-[url('/images/arrow-right-white.svg')]" />
							<div className="absolute inset-0 bg-[#73383E]/50 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
						</Button>
					</a>
				</div>
			</div>
			<Team />

			{/* <div className="w-full">
				<div className="w-full max-w-[300px] md:max-w-7xl mx-auto py-[3%]">
					<CarouselComponent carouselItems={carouselItems} />
				</div>
			</div> */}

			<div className="w-full bg-copyColor bg-[url('https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fimages%2FSmile%20Designing%2Fbg-treatments.png?alt=media&token=2bbcf862-16b0-4b94-a16c-e99eab52e83c')] bg-no-repeat bg-left-top">
				<div className="w-full max-w-[300px] md:max-w-7xl mx-auto py-[10%] md:py-[3%] flex flex-col justify-center items-center space-y-8">
					<p className="text-2xl md:text-4xl font-bold text-center text-white">
						Common Smile Design Treatments Offered
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{data.treatments?.items?.map(
							(item: any, index: any) => {
								return (
									<div
										key={index}
										className="flex flex-col items-center space-y-4 gap-4 px-[0%] py-11 border-[3px] border-white min-h-[380px] rounded-lg">
										{item?.icon && (
											<img
												src={item.icon}
												alt={item.title}
												width={64}
												height={64}
												className="h-16 w-16 text-white"
											/>
										)}
										<div className="flex flex-col items-center space-y-2 text-center">
											<h3 className="text-2xl px-3 font-bold text-white">
												{item.title}
											</h3>
											<p className="text-lg px-7 text-center font-bold text-white">
												{item.text}
											</p>
										</div>
									</div>
								);
							}
						)}
					</div>
				</div>
			</div>

			<div className="w-full">
				<div className="w-full max-w-[300px] md:max-w-7xl mx-auto py-[8%] md:py-[3%] flex flex-col md:flex-row justify-between md:items-start space-y-8 md:space-x-8 min-h-[50vh]">
					<div className="w-full md:w-1/2 flex flex-col space-y-4">
						<p className="text-sm md:text-md tracking-widest leading-relaxed font-semibold uppercase font-poppins text-center md:text-left">
							Enhance Your Smile with Rarity Dental
						</p>
						<h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
							{data.benefits?.title}
						</h2>
						<p className="text-md md:text-lg text-center md:text-left">
							{data.benefits?.description}
						</p>

						<div className="flex flex-col space-y-4">
							{data.benefits?.items?.map(
								(item: any, index: any) => (
									<div
										key={index}
										className="flex flex-col items-center md:flex-row md:items-start gap-4">
										{item?.icon && (
											<div className="h-20 w-20 flex items-center justify-center relative">
												<img
													src={item.icon}
													alt={item.title}
													fetchPriority="high"
													className="absolute top-0 left-0 w-full h-full object-contain"
												/>
											</div>
										)}
										<div className="flex flex-col">
											<h3 className="text-xl md:text-2xl font-bold">
												{item.title}
											</h3>
											<p className="text-md md:text-lg">
												{item.text}
											</p>
										</div>
									</div>
								)
							)}
						</div>
					</div>
					<div className="relative min-h-[45vh] w-full  md:w-[40%] flex items-center justify-center border-2 border-copyColor">
						<img
							src={data.benefits?.image}
							alt={data.benefits?.title}
							fetchPriority="high"
							className="absolute top-0 left-0 w-full h-full object-cover "
						/>
					</div>
				</div>
			</div>

			<div className="w-full">
				<div className="w-full max-w-[300px] md:max-w-7xl mx-auto py-[8%] md:py-[3%] flex flex-col items-center gap-y-8 gap-x-8">
					<p className="text-sm md:text-md tracking-widest leading-relaxed font-semibold uppercase font-poppins">
						Popular Searches
					</p>
					<p className="text-2xl md:text-4xl font-bold  text-center md:text-left">
						Types of Smile Design Procedures Available
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 w-full">
						{searchItems?.map((item) => (
							<Link
								href={item.href}
								key={item.id}
								className="hover:scale-105 transition-all duration-300 ease-in-out">
								<div className="flex flex-col items-center gap-4 p-4 border-[3px] bg-copyColor text-white  rounded-lg">
									<p className="text-xl md:text-2xl font-bold text-center">
										{item.title}
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>

			<div className="w-full">
				<div className="w-full max-w-[300px] md:max-w-5xl mx-auto py-[10%] md:py-[3%] flex flex-col items-center gap-y-8 gap-x-8">
					<p className=" text-2xl md:text-4xl font-bold ">
						<span className="underline-effect">
							Frequently Asked Questions (FAQs)
						</span>
					</p>
					<Accordion
						type="single"
						collapsible
						className="w-full">
						{faqs?.map((faq: any, index: number) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className="group hover:no-underline">
								<AccordionTrigger className="text-left text-xl font-semibold mt-2 hover:no-underline">
									<span>
										<h3 className="underline-effect">
											{faq.question}
										</h3>
									</span>
								</AccordionTrigger>
								<AccordionContent className="text-left text-lg">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>

			<div className="w-full">
				<div className="w-full max-w-[300px] md:max-w-7xl mx-auto py-[3%] flex flex-col justify-center items-center space-y-4">
					<p className="text-sm md:text-md tracking-widest leading-relaxed font-semibold uppercase font-poppins text-center">
						Trending Topics
					</p>
					<p className="text-2xl md:text-4xl font-bold text-center ">
						Latest Blogs
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4  lg:gap-12 w-full pt-4">
						{blogItems?.map((item) => (
							<Link
								href={`/blog/invisalign/${item.slug}`}
								key={item._id}
								className="hover:scale-105 transition-all duration-300 ease-in-out border-[1.5px] border-copyColor">
								<div className="flex flex-col space-y-4 justify-center items-center w-full">
									<div className="w-full">
										{item?.image && (
											<img
												src={item.image}
												alt={item.meta_title}
												width={380}
												height={380}
												className="object-cover w-full"
											/>
										)}
									</div>
									<div className="flex flex-col space-y-4 w-full px-6">
										<h3 className="text-2xl font-bold">
											{item.meta_title}
										</h3>
										<p className="text-lg pb-4">
											{item.meta_description}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>

			<div className="w-full">
				<div className="w-full max-w-[320px] md:max-w-7xl mx-auto py-[3%] flex flex-col md:flex-row gap-[5%]">
					<div className="w-full md:w-1/2 h-[600px] z-[3] relative hidden md:block">
						<img
							src="/images/inpat-img-form.webp"
							alt="Invisalign"
							fetchPriority="high"
							className="object-cover absolute top-0 left-0 w-full h-full rounded-lg "
						/>
					</div>
					<div className="w-full md:w-1/2">
						<ConsultationForm
							countryCode
							buttonText="Book a Free Consultation"
							className="rounded-none sm:rounded-md "
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export const revalidate = 60;
