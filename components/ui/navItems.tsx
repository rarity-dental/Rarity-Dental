/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { navItems } from "@/lib/data";
import { PhoneIcon, SeparatorHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

export function NavigationMenuItems() {
	const router = useRouter();

	return (
		<NavigationMenu className="hidden lg:flex">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="text-white">
						Patient Care
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-center items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md border-slate-200 border-2 shadow-xl shadow-black/15 "
										href="/">
										<img
											src="/images/logo-light.png"
											alt="logo-dark"
											className="w-full"
										/>
										<p className="text-lg text-[#584934]">
											Unwind in Luxury
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							{navItems
								.filter(
									(item) =>
										item.category === "Patient Care" &&
										item.title !== "International Patients"
								)
								.map((item) => (
									<ListItem
										href={item.href}
										key={item.id}
										title={item.title}>
										{item.description}
									</ListItem>
								))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem className="">
					<Link
						href={"/about"}
						legacyBehavior
						passHref>
						<NavigationMenuLink
							className={cn(
								navigationMenuTriggerStyle(),
								"text-white"
							)}>
							About Us
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						className="text-white"
						onClick={() => router.push("/specialised-treatments")}>
						Specialised Treatments
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{navItems
								.filter((item) => item.category === "ST")
								.map((item) => (
									<ListItem
										className="border border-slate-500 "
										key={item.id}
										title={item.title}
										href={item.href}></ListItem>
								))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						className="text-white"
						onClick={() => router.push("/smile-designing")}>
						Smile Designing
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
							{navItems
								.filter((item) => item.category === "SD")
								.map((item) => (
									<ListItem
										key={item.id}
										title={item.title}
										href={item.href}
										className="min-w-[133px] md:min-w-[170px] lg:min-w-[200px] border border-slate-500"></ListItem>
								))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						className="text-white"
						onClick={() => router.push("/single-day-dentistry")}>
						Single Day Dentistry
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
							{navItems
								.filter((item) => item.category === "SDD")
								.map((item) => (
									<ListItem
										key={item.id}
										title={item.title}
										href={item.href}
										className="min-w-[133px] md:min-w-[170px] lg:min-w-[200px] border border-slate-500"></ListItem>
								))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						className="text-white"
						onClick={() => router.push("/advanced-technology")}>
						Advanced Technology
					</NavigationMenuTrigger>
					<NavigationMenuContent className="">
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
							{navItems
								.filter((item) => item.category === "AT")
								.map((item) => (
									<div key={item.title}>
										<ListItem
											key={item.id}
											title={item.title}
											href={item.href}
											className="min-w-[133px] md:min-w-[170px] lg:min-w-[200px] border border-slate-500"></ListItem>
									</div>
								))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				{navItems
					.filter((item) => item.id === 5 || item.id === 9)
					.map((item) => (
						<NavigationMenuItem
							key={item.id}
							className="hidden xl:flex">
							<Link
								href={item.href}
								legacyBehavior
								passHref>
								<NavigationMenuLink
									className={cn(
										navigationMenuTriggerStyle(),
										"text-white"
									)}>
									{item.title}
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					))}
				<NavigationMenuItem className="pl-4">
					<Link
						href="tel:+917899418483"
						className="transition-all duration-8000 ease-in-out flex gap-x-2 justify-center items-center  cursor-pointer ">
						<PhoneIcon
							width={20}
							height={20}
							className="text-base text-white"
						/>
						<span className="text-sm text-white font-poppins">
							+91-7899418483
						</span>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li className="group relative duration-1000 DURA transition-all ease-in-out">
			<div className="bg-amber-500 h-[2px] w-0 group-hover:w-full absolute left-0 bottom-0 duration-1000 transition-all ease-in-out " />
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#c8c8c8] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ",
						className
					)}
					{...props}>
					<div className="text-sm font-medium leading-none">
						{title}
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground ">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
