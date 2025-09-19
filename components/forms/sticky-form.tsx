"use client";

import { ConsultationForm } from "@/components/forms/connect-form";
import React, { useEffect, useState, useRef, CSSProperties } from "react";

interface StickyConsultationFormProps {
	paraText?: string;
	buttonText?: string;
}

export const StickyConsultationForm: React.FC<StickyConsultationFormProps> = ({
	paraText = "Connect with us to book your consultation now!",
	buttonText = "Book Consultation",
}) => {
	const [style, setStyle] = useState<CSSProperties>({
		position: "fixed" as const,
		bottom: "-20px",
		// transition: "top 0.3s ease-in-out",
	});

	const formRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const form = formRef.current;
			if (!form) return;

			const footerElement = document.querySelector(".footer-start");
			if (!footerElement) return;

			const windowHeight = window.innerHeight;
			const footerRect = footerElement.getBoundingClientRect();
			const buffer = 20; // Space between form and footer

			// console.log(footerRect.top, "footer top");
			// console.log(windowHeight, "window height");

			if (footerRect.top < windowHeight) {
				const newTop =
					(100 * (windowHeight - footerRect.top - buffer)) /
					windowHeight;
				setStyle({
					// display: "hidden",
					position: "fixed" as const,
					bottom: `${newTop}%`,
					// transition: "bottom 0.3s ease-in-out",
				});
			} else {
				setStyle({
					position: "fixed" as const,
					bottom: "-20px",
					// transition: "top 0.3s ease-in-out",
				});
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial position check

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			ref={formRef}
			className="w-[370px] hidden md:block right-0 h-fit overflow-y-auto z-[1000000000]"
			style={style}>
			<ConsultationForm
				paraText={paraText}
				buttonText={buttonText}
				countryCode
			/>
		</div>
	);
};
