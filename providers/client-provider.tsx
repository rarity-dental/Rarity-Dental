"use client";

import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { FloatingWhatsAppButton } from "@/components/ui/icons/floating-whatsapp";

export function ClientProvider({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<Toaster />
			<FloatingWhatsAppButton />
			{children}
			<Footer />
		</>
	);
}
