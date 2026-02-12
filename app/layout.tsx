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
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@graph": [
								{
									"@type": "Dentist",
									"@id": "https://www.raritydental.com/#dentist",
									name: "Rarity Dental Care Centres",
									alternateName: "Rarity Dental",
									url: "https://www.raritydental.com",
									logo: "https://www.raritydental.com/images/logo-copyColor-text.png",
									image: "https://www.raritydental.com/images/og-img.jpg",
									telephone: "+91-7899418483",
									email: "info@raritydental.com",
									address: {
										"@type": "PostalAddress",
										streetAddress: "42, Ashoka Crescent, Golf Course Road",
										addressLocality: "Gurugram",
										addressRegion: "Haryana",
										postalCode: "122002",
										addressCountry: "IN",
									},
									geo: {
										"@type": "GeoCoordinates",
										latitude: 28.4595,
										longitude: 77.0266,
									},
									openingHoursSpecification: {
										"@type": "OpeningHoursSpecification",
										dayOfWeek: [
											"Monday",
											"Tuesday",
											"Wednesday",
											"Thursday",
											"Friday",
											"Saturday",
										],
										opens: "09:00",
										closes: "19:00",
									},
									priceRange: "$$",
									sameAs: [
										"https://www.instagram.com/raritydentalofficial/",
										"https://www.facebook.com/raritydental",
										"https://www.youtube.com/@raritydentalofficial",
									],
								},
								{
									"@type": "Organization",
									"@id": "https://www.raritydental.com/#organization",
									name: "Rarity Dental Care Centres",
									url: "https://www.raritydental.com",
									logo: "https://www.raritydental.com/images/logo-copyColor-text.png",
									contactPoint: {
										"@type": "ContactPoint",
										telephone: "+91-7899418483",
										contactType: "customer service",
										availableLanguage: ["English", "Hindi"],
									},
								},
							],
						}),
					}}
				/>
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
					src={`https://www.googletagmanager.com/gtag.js?id=G-7TVYNQX0E4`}
					strategy="lazyOnload"
				/>
				{/* <GoogleAnalytics gaId="G-7TVYNQX0E4" /> */}
				{/* Initialize gtag and provide required config to avoid deferred hits */}
				<Script
					id="gtag-init"
					strategy="afterInteractive">{`
				  window.dataLayer = window.dataLayer || [];
				  function gtag(){window.dataLayer.push(arguments);}
				  gtag('js', new Date());
				  // GA4 measurement ID
				  gtag('config', 'G-7TVYNQX0E4');
				  // Google Ads conversion ID (optional but recommended if using AW)
				  gtag('config', 'AW-16798877123');
				`}</Script>
				<ClientProvider>{children}</ClientProvider>
			</body>
		</html>
	);
}
