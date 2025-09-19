"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { navItems } from "@/lib/data";
import { MenuIcon } from "./icons/menuIcon";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRightCircle } from "lucide-react";

import {
	NavigationMenuItem,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MobileSideNav() {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	// Group navigation items by category
	const groupedNavItems = navItems.reduce(
		(acc, item) => {
			const category = item.category;
			if (!acc[category]) {
				acc[category] = [];
			}
			acc[category].push(item);
			return acc;
		},
		{} as Record<string, typeof navItems>
	);

	// Define the order of categories
	const categoryOrder = ["Patient Care", "About", "AT", "ST", "SD", "SDD"];

	// Create a mapping for category titles
	const categoryTitles: Record<string, string> = {
		"Patient Care": "Patient Care",
		// Recognition: "Recognition",
		About: "About Us",
		AT: "Advanced Technology",
		ST: "Specialised Treatments",
		SD: "Smile Designing",
		SDD: "Single Day Dentistry",
	};

	// Handle navigation and close sheet
	const handleNavigation = (href: string) => {
		setOpen(false);
		router.push(href);
	};

	return (
		<Sheet
			open={open}
			onOpenChange={setOpen}>
			<SheetTrigger
				asChild
				className="flex xl:hidden">
				<MenuIcon className="text-[#ebb63c] opacity-70" />
			</SheetTrigger>
			<SheetContent
				side="left"
				className="w-full sm:w-[380px] z-[100000000000] pt-[18px] h-[100dvh] overflow-y-auto">
				<SheetHeader className="mb-6">
					<SheetTitle>Menu</SheetTitle>
					<SheetDescription>
						Explore our services and information
					</SheetDescription>
				</SheetHeader>
				<div className="flex flex-col space-y-2">
					<a
						className="py-2 border-b border-slate-200 w-full"
						href={"/international-patients"}
						rel="noopener noreferrer"
						style={{
							fontSize: "1.125rem",
							lineHeight: "3rem",
						}}>
						International Patients
					</a>
				</div>
				<div className="flex flex-col space-y-2">
					<a
						className="py-2 border-b border-slate-200 w-full"
						href={"/invisalign"}
						rel="noopener noreferrer"
						style={{
							fontSize: "1.125rem",
							lineHeight: "3rem",
						}}>
						Invisalign
					</a>
				</div>

				<div className="flex flex-col space-y-2">
					<a
						className="py-2 border-b border-slate-200 w-full"
						href={"/about"}
						rel="noopener noreferrer"
						style={{
							fontSize: "1.125rem",
							lineHeight: "3rem",
						}}>
						About Us
					</a>
				</div>

				<Accordion
					type="single"
					collapsible
					className="w-full">
					{categoryOrder.map((category) => {
						const items = groupedNavItems[category] || [];
						if (items.length === 0) return null;

						return (
							<AccordionItem
								value={category}
								key={category}
								className="border-b">
								<AccordionTrigger className="hover:no-underline outline-none">
									<div className="flex justify-between items-center gap-4 ">
										<span className="text-lg font-medium ">
											{categoryTitles[category]}
										</span>
										{(category === "AT" ||
											category === "ST" ||
											category === "SD" ||
											category === "SDD") && (
											<ArrowRightCircle
												className=""
												onClick={() =>
													handleNavigation(
														category === "AT"
															? "/advanced-technology"
															: category === "ST"
																? "/specialised-treatments"
																: category ===
																	  "SD"
																	? "/smile-designing"
																	: "/single-day-dentistry"
													)
												}
											/>
										)}
									</div>
								</AccordionTrigger>
								<AccordionContent>
									<div className="space-y-2">
										{items.map((item) => (
											<div
												key={item.id}
												onClick={() =>
													handleNavigation(item.href)
												}
												className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors border-b border-b-slate-200 rounded-b-none last:border-none">
												<h3 className="text-sm font-medium text-gray-900">
													{item.title}
												</h3>
												{/* <p className="text-sm text-gray-500 mt-0.5">
													{item.description}
												</p> */}
											</div>
										))}
									</div>
								</AccordionContent>
							</AccordionItem>
						);
					})}
				</Accordion>
				<div className="flex flex-col space-y-2">
					<a
						className="py-1 border-b border-slate-200 w-full"
						href={"/privacy-policy"}
						rel="noopener noreferrer"
						style={{
							fontSize: "1.125rem",
							lineHeight: "3rem",
							width: "100%",
						}}>
						Privacy Policy
					</a>
					<a
						className="py-1 border-b border-slate-200 w-full"
						href={"/disclaimer"}
						rel="noopener noreferrer"
						style={{
							fontSize: "1.125rem",
							lineHeight: "3rem",
							width: "100%",
						}}>
						Disclaimer
					</a>
				</div>

				<SheetFooter className="mt-6">
					<Button
						type="button"
						variant="outline"
						className="w-full"
						onClick={() => setOpen(false)}>
						Close Menu
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
