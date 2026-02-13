import { Belleza, Poppins } from "next/font/google";
import "./globals.css";
import { ClientProvider } from "@/providers/client-provider";
import Script from "next/script";
import { Metadata } from "next";

const belleza = Belleza({
	weight: "400",
	subsets: ["latin"],
	display: "optional",
	preload: true,
	adjustFontFallback: true,
	variable: "--font-belleza",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600"],
	display: "optional",
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
				<link
					rel="preconnect"
					href="https://www.googletagmanager.com"
					crossOrigin=""
				/>
			</head>
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
				{/* Defer all analytics until first user interaction to avoid blocking LCP/TBT */}
				<Script
					id="analytics-on-interaction"
					strategy="lazyOnload">{`
				  (function(){
				    var loaded=false;
				    function loadAnalytics(){
				      if(loaded)return;
				      loaded=true;
				      var g=document.createElement('script');
				      g.src='https://www.googletagmanager.com/gtag/js?id=G-7TVYNQX0E4';
				      g.async=true;
				      document.head.appendChild(g);
				      window.dataLayer=window.dataLayer||[];
				      function gtag(){window.dataLayer.push(arguments);}
				      gtag('js',new Date());
				      gtag('config','G-7TVYNQX0E4');
				      gtag('config','AW-16798877123');
				      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				      })(window,document,'script','dataLayer','GTM-WB6467W9');
				    }
				    ['scroll','click','touchstart'].forEach(function(e){
				      window.addEventListener(e,loadAnalytics,{once:true,passive:true});
				    });
				    setTimeout(loadAnalytics,5000);
				  })();
				`}</Script>
				<ClientProvider>{children}</ClientProvider>
			</body>
		</html>
	);
}
