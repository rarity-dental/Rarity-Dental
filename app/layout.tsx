import { Belleza } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "@/providers/client-provider";
import { GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";
// import { TawkToScript } from "@/components/TawkComponent";

const belleza = Belleza({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
	metadataBase: new URL("https://www.raritydental.com"),
	// title: {
	// 	default: "Rarity Dental",
	// 	// template: "%s | Rarity Dental",
	// },
	// description: "Unwind in Luxury",
	twitter: {
		card: "summary_large_image",
		images: ["/images/og-img.jpg"],
		title: {
			default: "Rarity Dental",
			template: "%s | Rarity Dental",
		},
	},
	openGraph: {
		images: ["/images/og-img.jpg"],
		title: {
			default: "Rarity Dental",
			template: "%s | Rarity Dental",
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<GoogleTagManager gtmId="GTM-WB6467W9" />
			<body className={`${belleza.className} bg-[#F7F2EC] relative`}>
				<ClientProvider>
					{/* <TawkToScript /> */}
					{children}
				</ClientProvider>
			</body>
		</html>
	);
}
