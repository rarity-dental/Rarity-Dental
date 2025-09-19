import { NextResponse } from "next/server";
import { headers } from "next/headers";

// In-memory cache
let cachedData: any = null;
let lastFetchTime = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const RATE_LIMIT_DURATION = 1000; // 1 second in milliseconds

export async function GET() {
	const now = Date.now();
	const headersList = headers();

	// Get client IP from various headers
	const forwardedFor = headersList.get("x-forwarded-for");
	const realIp = headersList.get("x-real-ip");
	const cfConnectingIp = headersList.get("cf-connecting-ip");
	const trueClientIp = headersList.get("true-client-ip");

	// Get the first IP from x-forwarded-for if it contains multiple IPs
	const clientIp =
		forwardedFor?.split(",")[0]?.trim() ||
		realIp ||
		cfConnectingIp ||
		trueClientIp;

	// console.log("Headers received:", {
	// 	"x-forwarded-for": forwardedFor,
	// 	"x-real-ip": realIp,
	// 	"cf-connecting-ip": cfConnectingIp,
	// 	"true-client-ip": trueClientIp,
	// 	"detected-client-ip": clientIp,
	// });

	// Return cached data if available and not expired
	if (cachedData && now - lastFetchTime < CACHE_DURATION) {
		// console.log("Returning cached data:", cachedData);
		return NextResponse.json(cachedData);
	}

	// Check rate limiting
	if (now - lastFetchTime < RATE_LIMIT_DURATION) {
		// console.log("Rate limit hit, returning default");
		return NextResponse.json({
			country_calling_code: "+91",
			country_name: "India",
			country_code: "IN",
		});
	}

	try {
		// Try multiple IP detection services
		let data;

		// First try ipapi.co with client IP if it's not localhost
		if (clientIp && clientIp !== "::1" && clientIp !== "127.0.0.1") {
			// console.log("Trying ipapi.co with client IP:", clientIp);
			const response = await fetch(`https://ipapi.co/${clientIp}/json/`, {
				headers: {
					"User-Agent":
						"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
			});

			if (response.ok) {
				data = await response.json();
				if (!data.error) {
					console.log(
						"Successfully got data from ipapi.co with client IP"
					);
				}
			}
		}

		// If first attempt failed or we have localhost, try ipapi.co without IP
		if (!data || data.error) {
			console.log("Trying ipapi.co without IP");
			const response = await fetch("https://ipapi.co/json/", {
				headers: {
					"User-Agent":
						"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
			});

			if (response.ok) {
				data = await response.json();
				// console.log("Received data from ipapi.co:", data);
			}
		}

		// Check if we got an error response from ipapi.co
		if (!data || data.error) {
			console.log(
				"ipapi.co returned an error:",
				data?.reason || "Unknown error"
			);
			return NextResponse.json({
				country_calling_code: "+91",
				country_name: "India",
				country_code: "IN",
			});
		}

		const result = {
			country_calling_code: data.country_calling_code || "+91",
			country_name: data.country_name || "India",
			country_code: data.country_code || "IN",
		};

		// Update cache
		cachedData = result;
		lastFetchTime = now;

		// console.log("Returning result:", result);
		return NextResponse.json(result);
	} catch (error) {
		console.error("Error fetching country data:", error);
		// Log the full error details
		if (error instanceof Error) {
			console.error("Error details:", {
				message: error.message,
				stack: error.stack,
			});
		}
		// Default to India if there's an error
		return NextResponse.json({
			country_calling_code: "+91",
			country_name: "India",
			country_code: "IN",
		});
	}
}
