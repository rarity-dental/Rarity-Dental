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

import { CarouselComponent } from "@/components/carousel/carousel-component";
import {
	getCategoryMetadata,
	getCategoryStandalonePage,
} from "@/sanity/sanity.query";
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
		ssr: false,
	}
);

const searchItems = [
	{
		id: 1,
		category: "ST",
		title: "Dental Implants",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/dental-implants",
	},
	{
		id: 2,
		category: "ST",
		title: "Cosmetic Dentistry",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/cosmetic-dentistry",
	},
	{
		id: 3,
		category: "ST",
		title: "Full Mouth Rehabilitation",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Full-Mouth-Rehabilitation",
	},
	{
		id: 4,
		category: "ST",
		title: "Invisible Braces",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/invisible-braces",
	},
	{
		id: 5,
		category: "ST",
		title: "Facial Pain Cures",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Facial-Pain-Cures",
	},
	{
		id: 6,
		category: "ST",
		title: "Teeth Whitening",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Teeth-Whitening",
	},
	{
		id: 7,
		category: "ST",
		title: "Painless Root Canals",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Painless-Root-Canals",
	},
	{
		id: 8,
		category: "ST",
		title: "Comprehensive Consultations",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Comprehensive-Consultations",
	},
	{
		id: 9,
		category: "ST",
		title: "Advanced Gum Treatments",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Advanced-Gum-Treatments",
	},
	{
		id: 10,
		category: "ST",
		title: "Other Dental Procedures",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Other-Dental-Procedures",
	},
];

const blogItems = [
	{
		id: 1,
		img: "/images/procedures/smile-makeover.jpg",
		title: "The Complete Guide to Smile Design in Gurgaon",
		text: "Explore the advantages of digital smile design, from precise treatment planning to enhanced visualization, providing patients with a personalized and predictable path to achieving their ideal smile transformation.",
		href: "/blog/smile-design-in-gurgaon",
	},
	{
		id: 2,
		img: "/images/procedures/dsd-image.jpg",
		title: "Benefits of Digital Smile Design Over Traditional Methods",
		text: "Discover everything you need to know about smile design in Gurgaon, including procedures, benefits, and what to expect during the process, for a confident and beautiful smile transformation.",
		href: "/blog/benefits-of-digital-smile-design",
	},
	{
		id: 3,
		img: "/images/procedures/smile-1-day.jpg",
		title: "How Much Does Smile Design Cost in Delhi NCR",
		text: "Gain insight into the various factors influencing smile design costs in Delhi NCR, from treatment type to Specialised Treatment used, helping you make well- informed decisions about investing in your ideal smile.",
		href: "/blog/smile-design-in-delhi-ncr",
	},
];

export async function generateMetadata() {
	return await getCategoryMetadata("specialised-treatments");
}

export default async function SpecialisedTreatmentPage() {
	const data = await getCategoryStandalonePage("specialised-treatments");

	if (!data) {
		return notFound();
	}

	const videoUrl = data.heroSection?.videoUrl;

	const carouselItems = data.carousel?.items;

	const blogItems = data?.relatedBlogs?.selectedArticles;

	return (
		<div
			className="min-h-screen flex flex-col w-full justify-center items-center pt-[120px] md:pt-[30px] relative"
			id="form">
			<a
				href="#form"
				className="fixed top-[40%] right-0 w-12 h-[18rem] bg-[#86806c] z-[10] cursor-pointer hover:bg-[#2a2424] transition-colors duration-300 group rounded-l-lg overflow-hidden">
				<div className="absolute w-[18rem] h-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<div className="w-full h-full flex items-center justify-center -rotate-90 text-white font-bold tracking-[0.15em] text-2xl">
						Talk To An Expert
					</div>
				</div>
			</a>

			{videoUrl && (
				<div className="w-full pt-[10%] pb-[6%] relative px-2">
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

						<div className="max-w-[342px] md:max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-4 md:space-x-4 items-center h-full pt-8 md:pt-0 pb-8 md:pb-0 ">
							<div className="h-full w-full md:w-[56%] flex flex-col justify-center items-center z-[1] ">
								<h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.4em] tracking-normal text-center md:text-left">
									{data.heroSection?.title}
								</h1>

								<div className="space-y-2 w-full pt-4">
									{data.heroSection?.heroPointers && (
										<HeroPointers
											pointers={
												data.heroSection.heroPointers
											}
										/>
									)}
								</div>
							</div>
							<div className=" flex h-full justify-center items-center w-full md:w-[44%] z-[1]">
								<div
									className="max-w-[320px] sm:max-w-[85%]  md:max-w-7xl mx-auto px-4 md:px-0"
									id="form">
									<ConsultationForm
										countryCode
										buttonText="Book a Free Consultation"
										className="rounded-md"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className="w-full mb-[1.1%] xl:mt-0 hidden sm:flex overflow-hidden">
				<Slide>
					<ParallaxBanner
						baseVelocity={50}
						childWidth={2430}>
						<img
							src="/images/awards-container.webp"
							width={2387}
							height={83}
							alt="Awards, Accreditations and Certifications"
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
							className="object-cover max-w-[342px] h-[500px] md:max-w-[550px] md:h-full border border-copyColor "
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
									<img
										src={data.howCanWeHelp?.items[0]?.icon}
										alt={data.howCanWeHelp?.items[0]?.text}
										className="object-cover w-8 h-8 md:w-[90px] md:h-[90px]"
										width={90}
										height={90}
									/>
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
									<img
										src={data.howCanWeHelp?.items[1]?.icon}
										alt={data.howCanWeHelp?.items[1]?.text}
										className="object-cover w-8 h-8 md:w-[90px] md:h-[90px]"
										width={90}
										height={90}
									/>
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
					{data.howWeWork?.title}
				</h2>
				<p className="text-md md:text-lg pb-4 md:pb-0">
					{data.howWeWork?.description}
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{data.howWeWork?.items?.map((item: any, index: any) => {
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
								<p className="text-lg pt-4">{item.text}</p>
							</div>
						);
					})}
				</div>
			</div>

			<div className="w-full bg-copyColor">
				<div className="w-full max-w-[320px] md:max-w-7xl mx-auto py-[8%] md:py-[3%] flex flex-col md:flex-row justify-between items-center px-2">
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

			<div className="w-full">
				<div className="w-full max-w-[342px] md:max-w-7xl mx-auto py-[3%]">
					<CarouselComponent carouselItems={carouselItems} />
				</div>
			</div>

			<div className="w-full bg-copyColor bg-[url('https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fimages%2FSmile%20Designing%2Fbg-treatments.png?alt=media&token=2bbcf862-16b0-4b94-a16c-e99eab52e83c')] bg-no-repeat bg-left-top">
				<div className="w-full max-w-[320px] md:max-w-7xl mx-auto py-[10%] md:py-[3%] flex flex-col justify-center items-center space-y-8 px-2">
					<h2 className="text-2xl md:text-4xl font-bold text-center text-white">
						{data.treatments?.title ||
							"Common Specialised Treatments Offered"}
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{data.treatments?.items.map((item: any, index: any) => {
							return (
								<div
									key={index}
									className="flex flex-col items-center justify-center gap-4 p-4 border-[3px] border-white min-h-[380px] rounded-lg">
									<img
										src={item.icon}
										alt={item.title}
										width={64}
										height={64}
										className="h-16 w-16 text-white"
									/>
									<h3 className="text-2xl font-bold text-white">
										{item.title}
									</h3>
									<p className="text-lg text-center font-bold text-white">
										{item.text}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className="w-full ">
				<div className="w-full h-full max-w-[320px] md:max-w-7xl mx-auto py-[8%] md:py-[3%] flex flex-col lg:flex-row justify-between px-2 lg:items-start space-y-8 lg:space-x-8 ">
					<div className="w-full lg:w-1/2  flex flex-col space-y-4">
						<p className="text-sm md:text-md tracking-widest leading-relaxed font-semibold uppercase font-poppins text-center md:text-left">
							Enhance Your Smile with Rarity Dental
						</p>
						<h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
							{data.benefits?.title}
						</h2>
						<p className="text-md md:text-lg text-center md:text-left">
							{data.benefits?.description}
						</p>

						<div className="flex flex-col space-y-6">
							{data.benefits?.items?.map(
								(item: any, index: any) => (
									<div
										key={index}
										className="flex flex-col items-center md:flex-row md:items-start gap-4">
										<img
											src={item.icon}
											alt={item.title}
											width={80}
											height={80}
											className="h-20 w-20"
										/>
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
					<div className="w-full lg:w-1/2 h-[600px] relative border-2 border-copyColor">
						<img
							src={data.benefits?.image}
							alt={data.benefits?.title}
							fetchPriority="high"
							className="object-cover absolute top-0 left-0 w-full h-full"
						/>
					</div>
				</div>
			</div>

			<Team />

			<div className="w-full">
				<div className="w-full max-w-[320px] md:max-w-7xl mx-auto py-[8%] md:py-[3%] flex flex-col items-center gap-y-8 gap-x-8 px-2">
					<p className="text-sm md:text-md tracking-widest leading-relaxed font-semibold uppercase font-poppins">
						Popular Searches
					</p>
					<p className="text-2xl md:text-4xl font-bold  text-center md:text-left">
						Types of Specialised Treatment Procedures Available
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 w-full">
						{searchItems.map((item) => (
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
				<div className="w-full max-w-[320px] md:max-w-5xl mx-auto py-[10%] md:py-[3%] flex flex-col items-center gap-y-8 gap-x-8 px-2">
					<p className=" text-2xl md:text-4xl font-bold ">
						<span className="underline-effect">
							Frequently Asked Questions (FAQs)
						</span>
					</p>
					<Accordion
						type="single"
						collapsible
						className="w-full">
						{data.faqs?.map((faq: any, index: number) => (
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

			{blogItems && blogItems.length > 0 && (
				<div className="w-full">
					<div className="w-full max-w-[320px] md:max-w-7xl mx-auto py-[3%] flex flex-col justify-center items-center space-y-4 px-2">
						<p className="text-sm md:text-md tracking-widest leading-relaxed font-semibold uppercase font-poppins text-center">
							Trending Topics
						</p>
						<p className="text-2xl md:text-4xl font-bold text-center ">
							Latest Blogs
						</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4  lg:gap-12 w-full pt-4">
							{blogItems.map((item) => (
								<Link
									href={`/blog/specialised-treatments/${item.slug}`}
									key={item.slug}
									className="hover:scale-105 transition-all duration-300 ease-in-out border-[1.5px] border-copyColor">
									<div className="flex flex-col space-y-4 justify-center items-center w-full">
										<div className="w-full">
											<img
												src={item.image}
												alt={
													item.meta_title ||
													item.title
												}
												width={380}
												height={380}
												className="object-cover w-full"
											/>
										</div>
										<div className="flex flex-col space-y-4 w-full px-6">
											<h3 className="text-2xl font-bold">
												{item.meta_title || item.title}
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
			)}

			<div className="w-full">
				<div className="w-full max-w-[342px] md:max-w-7xl mx-auto pt-[3%] md:py-[3%] flex flex-col md:flex-row gap-[5%]">
					<div className="w-full md:w-1/2 h-[600px] z-[3]">
						<img
							src="https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fimages%2Fvalues-image.png?alt=media&token=52a8eb66-ec62-42d5-b96a-7ab7b0453e31"
							alt="Specialised Treatment"
							width={300}
							height={300}
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="md:w-1/2">
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
