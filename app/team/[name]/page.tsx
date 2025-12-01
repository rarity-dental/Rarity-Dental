/* eslint-disable @next/next/no-img-element */
import { DoctorBento } from "@/components/doctor-bento";
import Slide from "@/components/ui/animated-sections";
import { PageEndDiv } from "@/components/ui/page-end-div";
import { ParallaxBanner } from "@/components/ui/parallaxH";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: Promise<{ name: string }>;
	searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const resolved = await params;
	const name = resolved?.name;

	// Guard against missing params to prevent runtime errors
	if (!name) {
		return {
			title: "Team",
		};
	}


	const title = name
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	const imageUrl = `https://www.raritydental.com/_next/image?url=%2Fimages%2F${name}.${
		name === "dr-gaurav-malik" ? "jpg" : "png"
	}&w=2048&q=75`;

	return {
		title: `Team | ${title}`,
		openGraph: {
			images: [{ url: imageUrl, width: 2048, height: 1365 }],
		},
		twitter: {
			images: [imageUrl],
		},
	};
}

export default async function DoctorProfilePage({ params }: Props) {
	const { name } = await params;
	return (
		<div className="min-h-screen flex flex-col w-full justify-center items-center pt-[130px] md:pt-[150px] pb-[10%] relative">
			<PageEndDiv />
			<DoctorBento paramName={name} />

			<div className="w-full hidden sm:flex overflow-hidden bg-[#73383E] bg-opacity-50 mt-[2%]">
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
		</div>
	);
}
