/* eslint-disable @next/next/no-img-element */
"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface CarouselItemProps {
	title: string;
	image: string;
}

export const CarouselComponent = ({
	carouselItems,
}: {
	carouselItems: CarouselItemProps[];
}) => {
	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 2000,
				}),
			]}
			className="max-w-[342px] md:max-w-6xl mx-auto py-10 md:py-0">
			<CarouselContent className="-ml-1">
				{carouselItems?.map((item, index) => (
					<CarouselItem
						key={index}
						className="pl-1 flex justify-center items-center">
						<div className="relative aspect-[16/9] w-full md:w-[80%] overflow-hidden rounded-lg">
							<img
								src={item.image}
								alt={`Carousel Image ${index + 1}`}
								fetchPriority="high"
								sizes="(max-width: 768px) 100vw, 80vw"
								className="object-cover absolute inset-0 w-full h-full"
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>

			<CarouselPrevious className="absolute -bottom-4 md:left-[0%] md:top-1/2 md:transform md:-translate-y-1/2 z-10" />
			<CarouselNext className="absolute -bottom-4 md:right-[0%] md:top-1/2 md:transform md:-translate-y-1/2 z-10" />
		</Carousel>
	);
};
