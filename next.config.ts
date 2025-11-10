import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Ensure text compression for HTML and assets
	compress: true,
	poweredByHeader: false,
	// Improve SSR + classnames for styled-components
	compiler: {
		styledComponents: true,
	},
	transpilePackages: ["sanity", "next-sanity", "@sanity/ui", "@sanity/icons"],
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "cdn.sanity.io" },
			{ protocol: "https", hostname: "firebasestorage.googleapis.com" },
			{ protocol: "https", hostname: "pbs.twimg.com" },
			{ protocol: "https", hostname: "drive.google.com" },
			{ protocol: "https", hostname: "images.unsplash.com" },
		],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy:
			"default-src 'self'; script-src 'none'; sandbox;",
	},
};

export default nextConfig;
