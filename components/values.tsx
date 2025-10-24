/* eslint-disable @next/next/no-img-element */

import { Button } from "./ui/button";

export const ValuesSection = () => {
	return (
		<div className="py-[8%] flex flex-col md:flex-row justify-between items-center w-full  max-w-[342px] md:max-w-[600px] xl:max-w-[1064px] mx-auto  "
			style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}>
			<div className="flex flex-col w-full md:w-1/2 justify-center  items-center md:items-start">
				<h6 className="text-[14px] tracking-widest leading-relaxed font-semibold uppercase text-[#73383E] font-poppins mb-[12px]">
					OUR VALUES
				</h6>
				<h2 className="text-[24px] md:text-[32px] font-normal text-copyColor mb-[20px] leading-[1.1em] text-center md:text-left 4xl:leading-snug">
					Our Values – Delivering Confident Smiles with Premium Dental
					Care in Gurgaon
				</h2>
				<div className="font-poppins">
					<p className=" text-center md:text-left mb-2 font-semibold text-lg text-[#371b1e]">
						At Rarity, we are committed to:
					</p>
					<ul className="list-disc pl-8 flex flex-col gap-y-2 text-[#371b1e] tracking-widest ">
						<li>
							Trust: Our reputation is built on transparency and
							integrity
						</li>
						<li>
							Luxury Experience: Enjoy a serene and opulent
							environment
						</li>
						<li>
							Excellence: We set the gold standard in dental care
						</li>
						<li>
							Patient-Centered Care: Your comfort and satisfaction
							are our priorities
						</li>
						<li>
							Personalisation: Your treatment plan is uniquely
							tailored to you
						</li>
						<li>Confidentiality: Your privacy is paramount</li>
						<li>
							Innovation: Cutting-edge technology for impeccable
							results
						</li>
						<li>
							Aesthetics: Crafting smiles that are as beautiful as
							they are healthy
						</li>
						<li>
							Global Standards: World-class care with a holistic
							approach
						</li>
					</ul>
				</div>
			</div>

			{/* <div className="w-1/2 h-full bg-[url('/images/values-img.png')]"></div> */}
			<div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] 2xl:h-[50vh] relative flex justify-end items-end mt-[8%] md:ml-[10%]">
				<img
					src="/images/values-image.webp"
					alt="Values Image"
					loading="lazy"
					fetchPriority="low"
					decoding="async"
					sizes="90%"
					className="object-cover rounded-lg absolute inset-0 w-full h-full"
				/>
			</div>
		</div>
	);
};
