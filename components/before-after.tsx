/* eslint-disable @next/next/no-img-element */
"use client";

import { PageEndDiv } from "./ui/page-end-div";
import { PageStartDiv } from "./ui/page-start-div";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export const BeforeAfter = () => {
	const [imagesLoaded, setImagesLoaded] = useState(false);

	const slides = [
		{
			id: 1,
			type: "dual" as const,
			beforeImage: "/images/before-after/d-11-op.webp",
			afterImage: "/images/before-after/d-12-op.webp",
			alt1: `Top Left : Before smile makeover with broken and spaced front teeth – Rarity Dental Gurgaon \n Bottom Left: After smile makeover with aligned and restored teeth – Rarity Dental Gurgaon`,
			alt2: `Top Right : Before image showing crooked upper teeth – Rarity Dental Gurgaon \n Bottom Right: After cosmetic dental treatment with even natural smile – Rarity Dental Gurgaon`,
		},
		{
			id: 2,
			type: "dual" as const,
			beforeImage: "/images/before-after/d-21-op.webp",
			afterImage: "/images/before-after/d-22-op.webp",
			alt1: `Top Left : Before smile makeover showing damaged and misaligned teeth – Rarity Dental Gurgaon \n Bottom Left: After smile makeover with aligned and restored teeth – Rarity Dental Gurgaon`,
			alt2: `Top Right : Before cosmetic dental treatment showing spacing issues – Rarity Dental Gurgaon \n Bottom Right: After smile enhancement with natural, aligned teeth – Rarity Dental Gurgaon`,
		},
		{
			id: 3,
			type: "dual" as const,
			beforeImage: "/images/before-after/d-32-op.webp",
			afterImage: "/images/before-after/s-1.webp",
			alt1: `Top Left : Before treatment showing decayed misaligned teeth – Rarity Dental Gurgaon \n Bottom Left: After makeover with restored white teeth – Rarity Dental Gurgaon`,
			alt2: `Top Right : Before image with missing and uneven front teeth – Rarity Dental Gurgaon \n Bottom Right: After smile transformation with aligned natural teeth – Rarity Dental Gurgaon`,
		},
		{
			id: 4,
			type: "dual" as const,
			beforeImage: "/images/before-after/s-2.webp",
			afterImage: "/images/before-after/s-3-op.webp",
			alt1: `Top Left : Before smile makeover with spacing issues – Rarity Dental Gurgaon \n Bottom Left: After treatment with even, white smile – Rarity Dental Gurgaon`,
			alt2: `Top Right : Before smile correction with missing front tooth – Rarity Dental Gurgaon \n Bottom Right: After cosmetic restoration of front teeth – Rarity Dental Gurgaon`,
		},
		{
			id: 5,
			type: "landscape" as const,
			image: "/images/before-after/p-1-op.webp",
			alt: `Elderly woman with glasses \n
			Left (Before): \n
			Before dental restoration of elderly woman with worn teeth – Rarity Dental Gurgaon \n
			Right (After): \n
			After full smile makeover with improved bite – Rarity Dental Gurgaon`,
		},
		{
			id: 6,
			type: "landscape" as const,
			image: "/images/before-after/p-2-op.webp",
			alt: `Male patient with cap \n
			Left (Before): \n
			Before smile restoration of male with broken front teeth – Rarity Dental Gurgaon \n
			Right (After): \n
			After dental treatment with full natural-looking smile – Rarity Dental Gurgaon`,
		},
		{
			id: 7,
			type: "landscape" as const,
			image: "/images/before-after/p-3-op.webp",
			alt: `Left (Before): \n
			Before smile makeover of elderly male patient with missing teeth and uneven bite – Rarity Dental Gurgaon \n
			Right (After): \n
			After full smile transformation with dental implants and cosmetic restoration – Rarity Dental Gurgaon`,
		},
		{
			id: 8,
			type: "landscape" as const,
			image: "/images/before-after/p-4-op.webp",
			alt: `Image – Female patient (front face) \n
			Left (Before): \n
			Before smile makeover of female with discolored and missing teeth – Rarity Dental Gurgaon \n
			Right (After): \n
			After smile transformation with natural-looking restored teeth – Rarity Dental Gurgaon`,
		},
	];

	useEffect(() => {
		const preloadImages = async () => {
			const imagePromises = slides
				.flatMap((slide) =>
					slide.type === "dual"
						? [slide.beforeImage, slide.afterImage]
						: [slide.image]
				)
				.map(
					(src) =>
						new Promise<void>((resolve, reject) => {
							const img = new window.Image();
							img.src = src;
							img.onload = () => resolve();
							img.onerror = (error) => reject(error);
						})
				);

			try {
				await Promise.all(imagePromises);
				setImagesLoaded(true);
			} catch (error) {
				console.error("Failed to load images:", error);
				setImagesLoaded(true);
			}
		};

		preloadImages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="min-h-screen md:min-h-[90vh] w-full relative flex flex-col justify-center items-center bg-[#73383E] bg-opacity-10 pt-[5%] md:pt-[10%]">
			<PageStartDiv />
			<PageEndDiv />
			<div className="pb-6 md:pb-0 flex flex-col justify-center items-center max-w-[342px] md:max-w-[600px] xl:max-w-[1064px] mx-auto ">
				<h6 className="text-center text-[14px] tracking-widest leading-relaxed font-semibold mb-6 uppercase text-[#73383E] font-poppins">
					transform your smile, transform your life
				</h6>
				<h2 className="text-center text-[28px] md:text-[48px] font-normal text-copyColor tracking-tight leading-[1.2em] 4xl:leading-snug ">
					Smile Makeover Results That Inspire Confidence – See the
					Before & After Transformations at Rarity Dental in Gurgaon
				</h2>
			</div>
			<div className="mt-[2%] mb-[10%] w-full max-w-[90vw] md:max-w-[70vw]">
				{!imagesLoaded ? (
					<Loader2 className="animate-spin" />
				) : (
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						plugins={[
							Autoplay({
								delay: 3000,
							}),
						]}
						className="w-full">
						<CarouselContent className="-ml-1">
							{slides.map((slide) => (
								<CarouselItem
									key={slide.id}
									className="pl-1 flex justify-center items-center">
									<div className="relative aspect-[16/9] w-full md:w-[80%] overflow-hidden rounded-lg">
										{slide.type === "dual" ? (
											<>
												<div className="absolute inset-0 flex">
													{/* LEFT SIDE - BEFORE IMAGE */}
													<div className="w-1/2 relative">
														<img
															src={
																slide.beforeImage
															}
															srcSet={`
            ${slide.beforeImage}?w=400 400w,
            ${slide.beforeImage}?w=800 800w,
            ${slide.beforeImage}?w=1200 1200w
          `}
															sizes="(max-width: 768px) 100vw, 50vw"
															alt={slide.alt1}
															loading={
																slide.id === 1
																	? "eager"
																	: "lazy"
															}
															fetchPriority={
																slide.id === 1
																	? "high"
																	: "auto"
															}
															className="object-cover absolute inset-0 w-full h-full"
														/>
														<div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-sm font-semibold">
															Before
														</div>
													</div>

													{/* RIGHT SIDE - AFTER IMAGE */}
													<div className="w-1/2 relative">
														<img
															src={
																slide.afterImage
															}
															srcSet={`
            ${slide.afterImage}?w=400 400w,
            ${slide.afterImage}?w=800 800w,
            ${slide.afterImage}?w=1200 1200w
          `}
															sizes="(max-width: 768px) 100vw, 50vw"
															alt={slide.alt2}
															loading={
																slide.id === 1
																	? "eager"
																	: "lazy"
															}
															fetchPriority={
																slide.id === 1
																	? "high"
																	: "auto"
															}
															className="object-cover absolute inset-0 w-full h-full"
														/>
														<div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-sm font-semibold">
															After
														</div>
													</div>
												</div>
											</>
										) : (
											// LANDSCAPE SLIDE
											<div className="relative h-full w-full">
												<img
													src={slide.image}
													srcSet={`
														${slide.image}?w=500 500w,
														${slide.image}?w=800 800w,
														${slide.image}?w=1200 1200w
													`}
													sizes="(max-width: 768px) 100vw, 80vw"
													alt={slide.alt}
													loading={
														slide.id === 1
															? "eager"
															: "lazy"
													}
													fetchPriority={
														slide.id === 1
															? "high"
															: "auto"
													}
													className="object-cover absolute inset-0 w-full h-full"
												/>

												<div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-sm font-semibold">
													Before
												</div>
												<div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-sm font-semibold">
													After
												</div>
											</div>
										)}
									</div>
								</CarouselItem>
							))}
						</CarouselContent>

						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				)}
			</div>
		</div>
	);
};
