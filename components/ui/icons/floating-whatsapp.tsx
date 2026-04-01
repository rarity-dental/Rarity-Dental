"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Calendar, PhoneIcon } from "lucide-react";
import React from "react";

export const FloatingWhatsAppButton = () => {
	return (
		<div
			className="pointer-events-none fixed bottom-0 right-0 z-40 flex h-[140px] w-full flex-col items-center justify-center transition-transform duration-300 md:bottom-6 md:left-1/2 md:right-auto md:h-auto md:w-auto md:-translate-x-1/2 md:items-center">
			<div className="pointer-events-auto flex flex-col items-center">
				<a
					href="https://api.whatsapp.com/send?phone=917899418483"
					aria-label="WhatsApp"
					className="decoration-transparent">
					<div className="contact_icon">
						<IconBrandWhatsapp className="h-8 w-8" />
					</div>
				</a>
				<p className="mt-2 text-title font-bold text-center">
					Talk to us?
				</p>
			</div>
			<div className="pointer-events-auto h-[60px] w-full bg-black flex justify-center items-center md:hidden">
				<a
					href="tel:+917899418483"
					className="w-1/2 flex justify-center gap-[5%] items-center h-full text-center border border-slate-300 text-white">
					<PhoneIcon />
					<p className="text-white font-poppins text-sm">
						+91-7899418483
					</p>
				</a>
				<a
					href="/contact-us"
					className="w-1/2 flex justify-center gap-[5%] items-center h-full text-center border border-slate-300 text-white">
					<Calendar />
					<p className="text-white font-poppins text-sm">
						Appointment
					</p>
				</a>
			</div>
		</div>
	);
};
