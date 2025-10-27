/* eslint-disable @next/next/no-img-element */

import { PageStartDiv } from "./page-start-div";
import { importantLinks, menuLinks } from "@/lib/data";
import { contactLinks } from "@/lib/data";
import { addressLinks } from "@/lib/data";
import { FbIcon } from "./icons/fbIcon";
import { InstaIcon } from "./icons/instaIcon";
import { LinkedInIcon } from "./icons/linkedinIcon";
import { XIcon } from "./icons/xIcon";

export const socialLinks = [
	{
		name: "Facebook",
		link: "https://www.facebook.com/p/Rarity-Dental-61572610386897",
		icon: (
			<FbIcon className="w-4 h-4 text-[#9A887B] hover:text-white !important transition-colors duration-300 ease-in-out" />
		),
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/raritydental?igsh=Y3AzZGxzM3hodG52",
		icon: (
			<InstaIcon className="w-4 h-4 text-[#9A887B] hover:text-white !important transition-colors duration-300 ease-in-out" />
		),
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/company/rarity-dental/",
		icon: (
			<LinkedInIcon className="w-4 h-4 text-[#9A887B] hover:text-white !important transition-colors duration-300 ease-in-out" />
		),
	},
	// {
	// 	name: "X",
	// 	link: "#",
	// 	icon: (
	// 		<XIcon className="w-4 h-4 text-[#9A887B] hover:text-white !important transition-colors duration-300 ease-in-out" />
	// 	),
	// },
];

interface FooterProps {
	hasEndDiv?: boolean;
}

export const Footer = ({ hasEndDiv = true }: FooterProps) => {
	return (
		<div className="bg-[#322D29] pt-16 md:pt-48 lg:pt-36 pb-[40px] w-full flex flex-col gap-y-[44px] justify-center items-center relative footer-start">
			{hasEndDiv && <PageStartDiv />}

			<div className="flex flex-col xl:flex-row gap-[50px] items-start md:items-center max-w-[300px] md:max-w-2xl lg:max-w-[1280px] mx-auto h-auto lg:h-[282px] justify-center px-4">
				{/* <div className="flex flex-col w-full lg:w-[445px] h-[118.8%] justify-between align-text-top ">
					<div className="flex flex-col gap-[11px] ">
						<h2 className="font-bold font-dmSans text-[32px] text-white">
							rarity
						</h2>
						<div className="w-full h-[1px] bg-white opacity-[18%]" />
					</div>

					<img
						src="/images/footer-image.webp"
						alt="footer image"
						width={445}
						height={250}
						className="transition-all duration-800 ease-in-out cursor-pointer rounded-lg w-full h-auto"
					/>
				</div> */}
				<div className="flex flex-col md:flex-row gap-y-[24px] lg:gap-x-[40px] flex-1 ">
					<div className="flex flex-col gap-y-[16px] md:gap-y-[24px] w-[180px]">
						<div className="flex flex-col gap-[11px]">
							<h2 className="text-[24px] text-white whitespace-nowrap">
								Important Links
							</h2>
							<div className="w-[200px] h-[1px] bg-white opacity-[18%]" />
						</div>
						<ul className="w-full flex flex-col gap-[4px] lg:gap-[24px]">
							{importantLinks.map((link) => (
								<li
									key={link.name}
									className="transition-all duration-800 ease-in-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer  ">
									<a
										href={link.link}
										key={link.name}
										className="text-white font-medium text-[14px] font-poppins flex justify-between items-center gap-x-[16px] cursor-pointer">
										<span className="bg-[url('/images/arrow-right-white.svg')] bg-cover min-w-4 min-h-4 "></span>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col gap-y-[16px] md:gap-y-[24px] w-[180px]">
						<div className="flex flex-col gap-[11px]">
							<h2 className="text-[24px] text-white whitespace-nowrap">
								Menu
							</h2>
							<div className="w-[200px] h-[1px] bg-white opacity-[18%]" />
						</div>
						<ul className="w-full flex flex-col gap-[4px] lg:gap-[24px]">
							{menuLinks.map((link) => (
								<li
									key={link.name}
									className="transition-all duration-800 ease-in-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer">
									<a
										href={link.link}
										key={link.name}
										className="text-white font-medium text-[14px] font-poppins cursor-pointer">
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col gap-y-[16px] md:gap-y-[24px] min-w-[200px]">
						<div className="flex flex-col gap-[11px]">
							<h2 className="text-[24px] text-white whitespace-nowrap">
								Contact & Appointments
							</h2>
							<div className="w-[200px] h-[1px] bg-white opacity-[18%]" />
						</div>
						<ul className="w-full flex flex-col gap-[4px] lg:gap-[24px]">
							{contactLinks.map((link, index) => (
								<li
									className="flex flex-col md:flex-row gap-[4px] lg:gap-[24px]"
									key={link.name}>
									<div className="flex justify-start w-full items-center space-x-4">
										<img
											src={link.icon}
											alt={`link icon - ${index + 1}`}
											width={16}
											height={16}
											style={{
												width: "16px",
												height: "16px",
											}}
											className="transition-all duration-800 ease-in-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer "
										/>
										<a
											href={link.link}
											className="text-white font-medium text-[14px] font-poppins transition-all duration-800 ease-in-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer">
											{link.name}
										</a>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col gap-y-[16px] md:gap-y-[24px] w-[200px]">
						<div className="flex flex-col gap-[11px]">
							<h2 className="text-[24px] text-white whitespace-nowrap">
								Address
							</h2>
							<div className="w-[200px] h-[1px] bg-white opacity-[18%]" />
						</div>

						{addressLinks.map((link) => (
							<div
								className="flex justify-start w-full items-center gap-[16px]"
								key={link.name}>
								<img
									src={link.icon}
									alt={link.name}
									width={16}
									height={16}
									style={{
										width: "16px",
										height: "16px",
									}}
									className="transition-all duration-800 ease-in-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer min-w-[16px] "
								/>
								<a
									href={link.link}
									className="text-white font-medium text-[14px] font-poppins transition-all duration-800 ease-in-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer xl:min-w-[200px]">
									{link.name}
								</a>
							</div>
						))}
						<div className="pt-[86px] flex gap-4 ">
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
					</div>
				</div>
			</div>
			<div className="w-full lg:w-[82%] h-[1px] bg-white bg-opacity-[18%]" />
			<div className="flex flex-col md:flex-row w-full max-w-[342px] md:max-w-[1180px] md:justify-between pb-[40%] md:pb-0 mx-auto items-center justify-between	 px-4 md:px-2 xl:px-0">
				<p className="text-[12px] text-white font-poppins text-opacity-[70%] font-medium min-w-fit">
					© 2024 Rarity Dental | All Rights Reserved
				</p>
				<div className="min-w-fit flex flex-row  justify-center gap-4 md:gap-[40px] z-[100000000000]">
					<a
						href="/disclaimer"
						className="text-[12px] text-white font-poppins text-opacity-[70%] font-medium transition-all duration-800 ease-in-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer">
						Disclaimer
					</a>
					<a
						href={"/privacy-policy"}
						className="text-[12px] text-white font-poppins text-opacity-[70%] font-medium transition-all duration-800 ease-in-out hover:scale-[1.03] active:scale-[0.98] cursor-pointer">
						Privacy Policy
					</a>
				</div>
			</div>
		</div>
	);
};
