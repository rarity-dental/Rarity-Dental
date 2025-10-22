import { Belleza, Poppins } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "@/providers/client-provider";
import { GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";

const belleza = Belleza({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-belleza",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.raritydental.com"),
	twitter: {
		card: "summary_large_image",
		images: ["/images/og-img.jpg"],
		title: { default: "Rarity Dental", template: "%s | Rarity Dental" },
	},
	openGraph: {
		images: ["/images/og-img.jpg"],
		title: { default: "Rarity Dental", template: "%s | Rarity Dental" },
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
			{/* <TawkToScript /> */}
			<body
				className={`${belleza.variable} ${poppins.variable} font-belleza bg-[#F7F2EC] relative`}>
				<ClientProvider>{children}</ClientProvider>
			</body>
		</html>
	);
}
