import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Calendar, PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const FloatingWhatsAppButton = () => {
	return (
		<div className=" fixed w-full h-[140px] bottom-0 flex flex-col items-center justify-center z-[100000000000000000000]">
			<div>
				<a
					href="https://api.whatsapp.com/send?phone=917899418483"
					className="decoration-transparent">
					<div className="contact_icon">
						<IconBrandWhatsapp className="w-8 h-8" />
					</div>
				</a>
			</div>
			<p className="text-title font-bold">Talk to us?</p>
			<div className="h-[60px] w-full bg-black flex justify-center items-center md:hidden">
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
