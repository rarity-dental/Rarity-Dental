import { motion } from "framer-motion";
import { StarHalfIcon, StarIcon } from "lucide-react";

import { forwardRef } from "react";

interface TestimonialProps {
	name: string;
	text: string;
	rating: number;
	image: string;
}

const renderStars = (rating: number) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;

	const stars = [];

	for (let i = 0; i < fullStars; i++) {
		stars.push(
			<StarIcon
				key={`full-${i}`}
				className="text-[#e49e48]"
				fill="currentColor"
				size={24}
			/>
		);
	}

	if (hasHalfStar) {
		stars.push(
			<StarHalfIcon
				size={24}
				key={`half-${fullStars}`}
				className="text-[#e49e48]"
				fill="currentColor"
			/>
		);
	}

	return stars;
};

const Testimonial = forwardRef<HTMLDivElement, TestimonialProps>(
	({ name, text, rating, image }, ref) => (
		<motion.div
			ref={ref}
			className="relative max-w-[342px] md:min-w-[1064px] h-[364px] md:h-[600px] max-h-[800px] overflow-visible "
			style={{
				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
				backgroundPosition: `${
					name === "Sophia, Celebrity Client" ||
					name === "Sarah, Happy Client"
						? "center"
						: name === "Rahul, Satisfied Customer" ||
						  name === "John, Loyal Customer"
						? "left"
						: ""
				}`,
			}}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
		>
			<div className="absolute -bottom-[204px] left-0 md:-bottom-[100px] md:left-[100px] bg-white min-h-[204px] md:h-[337px] w-[342px] md:w-[522px] px-6 py-8 md:p-[64px]">
				<div className="flex flex-col">
					<p className="text-[16px] md:text-[24px] font-normal text-[#305369]">
						{text}
					</p>
					<br />
					<p className="text-[16px] md:text-[24px] font-normal text-[#305369]">
						{name}
					</p>
					<br />
					<div className="flex items-center space-x-2">
						{renderStars(rating)}
					</div>
				</div>
			</div>
		</motion.div>
	)
);

Testimonial.displayName = "Testimonial"; // Add displayName to avoid issues with forwardRef

export default Testimonial;
