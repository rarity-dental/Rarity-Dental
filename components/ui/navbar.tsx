/* eslint-disable @next/next/no-img-element */

import { Button } from "./button";
import { useScroll, useSpring, motion } from "framer-motion";
import Link from "next/link";
import { NavigationMenuItems } from "./navItems";
import { PhoneIcon } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { MobileSideNav } from "./mobile-side-nav";
import { socialLinks } from "./footer";

export const Navbar = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50  h-26 flex flex-col justify-center duration-300 ease-in-out backdrop-blur-md bg-opacity-30 border-b border-gray-200`}
			style={
				{
					["--navbar-height" as any]: "122px",
					backdropFilter: "blur(10px)",
					WebkitBackdropFilter: "blur(10px)",
				} as React.CSSProperties
			}>
			<div className="absolute inset-0 bg-black bg-opacity-50  pointer-events-none" />
			<div className="absolute top-0 left-0 w-full bg-[#1A1414] h-8   ">
				<div className="max-w-[372px] px-2 md:px-0 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto h-full">
					<div className="flex justify-between items-center h-full">
						<div className="flex gap-x-2">
							{socialLinks.map((link) => (
								<a
									href={link.link}
									key={link.name}
									rel="noreferrer"
									target="_blank"
									aria-label={link.name}
									className="transition-all duration-800 ease-in-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
									referrerPolicy="no-referrer">
									{link.icon}
								</a>
							))}
						</div>

						<p className="hidden md:block text-center text-[12px] uppercase font-poppins text-white tracking-widest">
							ISO 9001:2015 certified
						</p>
						<p className="hidden md:block text-center text-[12px] uppercase font-poppins text-white tracking-widest">
							42, Ashoka Crescent, Golf Course Road Gurugram -
							122002 | Timings: 9-7 pm Mon - Sat
						</p>
						<Link
							href="tel:+917899418483"
							aria-label="phone"
							className="flex md:hidden transition-all duration-8000 ease-in-out gap-x-2 justify-center items-center  cursor-pointer ">
							<PhoneIcon
								width={20}
								height={20}
								className=" text-white"
							/>
							<p className="text-sm font-bold text-white tracking wider font-dmSans md:font-poppins">
								+91-7899418483
							</p>
						</Link>
					</div>
				</div>
			</div>
			<div className="h-[92px] mt-6 flex justify-between items-center z-10">
				<div className="flex justify-between items-center w-full max-w-[80%]   sm:max-w-[480px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1280px] 2xl:max-w-[1320px]  mx-auto 	">
					<Link
						href="/"
						passHref
						className="h-full mb-3">
						<img
							src="/images/logo-light-text.png"
							className="object-cover"
							alt="logo"
							width={100}
							height={48}
						/>
					</Link>

					<div className="flex flex-row-reverse justify-between items-center gap-x-[24px] ">
						<MobileSideNav />

						<NavigationMenuItems />
					</div>
				</div>
			</div>
			<div className="absolute h-2 w-full -bottom-2 left-0 bg-[#d4b89d]">
				<motion.div
					className="bg-[#b67e59] w-full h-2 origin-[0%]"
					style={{ scaleX }}
				/>
			</div>
		</nav>
	);
};
