"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
	interface Window {
		gapi: any;
		google: any;
	}
}

const DISCOVERY_DOC =
	"https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

export default function QuickstartPage() {
	const [authorized, setAuthorized] = useState(false);
	const [events, setEvents] = useState<string[]>([]);
	const tokenClientRef = useRef<any>(null);
	const gapiInited = useRef(false);
	const gisInited = useRef(false);

	const maybeEnableButtons = () => {
		// same idea as the sample: once both libs are ready, we can auth
		if (gapiInited.current && gisInited.current) {
			// no-op; UI can show the authorize button
		}
	};

	// Local handlers called when scripts finish loading (client-only)
	const onGapiLoad = () => {
		if (typeof window === "undefined") return;
		window.gapi.load("client", async () => {
			await window.gapi.client.init({
				apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
				discoveryDocs: [DISCOVERY_DOC],
			});
			gapiInited.current = true;
			maybeEnableButtons();
		});
	};

	const onGisLoad = () => {
		if (typeof window === "undefined") return;
		tokenClientRef.current = window.google.accounts.oauth2.initTokenClient({
			client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
			scope: SCOPES,
			callback: () => {},
		});
		gisInited.current = true;
		maybeEnableButtons();
	};

	const listUpcomingEvents = async () => {
		try {
			const resp = await window.gapi.client.calendar.events.list({
				calendarId: "primary",
				timeMin: new Date().toISOString(),
				showDeleted: false,
				singleEvents: true,
				maxResults: 10,
				orderBy: "startTime",
			});
			const items = resp.result.items ?? [];
			setEvents(
				items.map(
					(ev: any) =>
						`${ev.summary ?? "(no title)"} (${ev.start.dateTime || ev.start.date})`
				)
			);
		} catch (err: any) {
			setEvents([`Error: ${err.message ?? String(err)}`]);
		}
	};

	const handleAuthorize = () => {
		const token = window.gapi.client.getToken?.();
		tokenClientRef.current.callback = async (resp: any) => {
			if (resp.error) throw resp;
			setAuthorized(true);
			await listUpcomingEvents();
		};
		if (!token) {
			tokenClientRef.current.requestAccessToken({ prompt: "consent" });
		} else {
			tokenClientRef.current.requestAccessToken({ prompt: "" });
		}
	};

	const handleSignout = () => {
		const token = window.gapi.client.getToken?.();
		if (token) {
			window.google.accounts.oauth2.revoke(token.access_token);
			window.gapi.client.setToken("");
			setAuthorized(false);
			setEvents([]);
		}
	};

	return (
		<main className="max-w-2xl mx-auto p-6 space-y-4 pt-[142px]">
			<h1 className="text-xl font-semibold">
				Google Calendar API Quickstart
			</h1>

			<div className="flex gap-2">
				<button
					className="px-3 py-2 rounded border"
					onClick={handleAuthorize}>
					{authorized ? "Refresh" : "Authorize"}
				</button>
				<button
					className="px-3 py-2 rounded border"
					onClick={handleSignout}>
					Sign Out
				</button>
			</div>

			<pre className="whitespace-pre-wrap border rounded p-3">
				{events.length
					? ["Events:", ...events].join("\n")
					: "No events yet."}
			</pre>

			{/* Load the same two scripts the quick-start uses */}
			<Script
				src="https://apis.google.com/js/api.js"
				strategy="afterInteractive"
				onLoad={onGapiLoad}
			/>
			<Script
				src="https://accounts.google.com/gsi/client"
				strategy="afterInteractive"
				onLoad={onGisLoad}
			/>
		</main>
	);
}
