"use client";

import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/ui/splash-screen";
import Slide from "@/components/ui/animated-sections";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { FloatingWhatsAppButton } from "@/components/ui/icons/floating-whatsapp";

export function ClientProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [isLoading, setIsLoading] = useState(isHome);
	const [hasShownSplash, setHasShownSplash] = useState(false);

	// Prevent splash screen from showing again in the same session
	useEffect(() => {
		const splashShown = sessionStorage.getItem('splash-shown');
		if (splashShown && isHome) {
			setIsLoading(false);
			setHasShownSplash(true);
		}
	}, [isHome]);

	// Handle splash completion
	const handleSplashComplete = () => {
		sessionStorage.setItem('splash-shown', 'true');
		setIsLoading(false);
		setHasShownSplash(true);
	};

	if (isLoading && isHome && !hasShownSplash) {
		return <SplashScreen finishLoading={handleSplashComplete} />;
	}

	return (
		<>
			<Navbar />
			<Toaster />
			<Slide>
				<FloatingWhatsAppButton />
				{children}
				{/* <div className="absolute h-20 w-full bg-black top-[100vh] z-[1000000]">
					<div className="w-full h-full flex justify-center items-center">
						<div className="w-1/2 h-full text-center">
							<p>Phone</p>
						</div>
						<div className="w-1/2 h-full text-center">
							<p>Appointment</p>
						</div>
					</div>
				</div> */}
			</Slide>
			<Footer />
		</>
	);
}
