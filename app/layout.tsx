import { Belleza, Poppins } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "@/providers/client-provider";
import Script from "next/script";
import { Metadata } from "next";
// import { GoogleAnalytics } from "@next/third-parties/google";

const belleza = Belleza({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	preload: true,
	adjustFontFallback: true,
	variable: "--font-belleza",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	preload: true,
	adjustFontFallback: true,
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
			<head>
				{/* Optional: speed up DNS/TLS for GTM if used */}
				<link
					rel="preconnect"
					href="https://www.googletagmanager.com"
					crossOrigin=""
				/>
			</head>
			{/* <TawkToScript /> */}
			<body
				className={`${belleza.variable} ${poppins.variable} font-belleza bg-[#F7F2EC] relative`}>
				{/* Defer GTM load so it doesn't contend with LCP */}
				<Script
					src={`https://www.googletagmanager.com/gtm.js?id=GTM-WB6467W9`}
					strategy="lazyOnload"
				/>
				<Script
					src={`https://www.googletagmanager.com/gtag.js?id=AW-16798877123`}
					strategy="lazyOnload"
				/>
				<Script
					src={`https://www.googletagmanager.com/gtag.js?id=AW-16798877123`}
					strategy="lazyOnload"
				/>
				{/* <GoogleAnalytics gaId="G-7TVYNQX0E4" /> */}
				<ClientProvider>{children}</ClientProvider>
			</body>
		</html>
	);
}
