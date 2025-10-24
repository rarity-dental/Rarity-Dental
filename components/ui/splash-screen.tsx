/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation, animate } from "framer-motion";

interface SplashScreenProps {
	finishLoading: () => void;
}

const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
	const [progress, setProgress] = useState(0);
	const [displayedProgress, setDisplayedProgress] = useState(0);
	const controls = useAnimation();

	// Only preload critical above-the-fold images
	const imageUrls = [
		"/images/rarity-hero-team.webp", // Hero image priority
		"/images/logo-copyColor-text.png", // Used in splash and navbar
		"/images/hero-back-static-mobile-img.webp", // Mobile hero background
	];

	// Remove video preloading to improve splash screen performance
	const videoUrls: string[] = [];

	useEffect(() => {
		let loaded = 0;
		const total = imageUrls.length + videoUrls.length;

		const loadImage = (url: string): Promise<void> => {
			return new Promise((resolve) => {
				const img = new window.Image();
				img.src = url;
				// Set a timeout to prevent hanging on failed loads
				const timeout = setTimeout(() => {
					console.warn("Image load timeout:", url);
					loaded += 1;
					const percent = Math.round((loaded / total) * 100);
					setProgress(percent);
					resolve();
				}, 3000); // 3 second timeout
				
				img.onload = () => {
					clearTimeout(timeout);
					loaded += 1;
					const percent = Math.round((loaded / total) * 100);
					setProgress(percent);
					resolve();
				};
				img.onerror = () => {
					clearTimeout(timeout);
					console.error("Image failed to load:", url);
					loaded += 1;
					const percent = Math.round((loaded / total) * 100);
					setProgress(percent);
					resolve();
				};
			});
		};

		const loadVideo = (url: string): Promise<void> => {
			return new Promise((resolve) => {
				const video = document.createElement("video");
				video.preload = "metadata";
				video.src = url;
				video.onloadedmetadata = () => {
					loaded += 1;
					const percent = Math.round((loaded / total) * 100);
					setProgress(percent);
					resolve();
				};
				video.onerror = () => {
					console.error("Video failed to load:", url);
					loaded += 1;
					const percent = Math.round((loaded / total) * 100);
					setProgress(percent);
					resolve();
				};
			});
		};

        const simulateProgressSteps = async () => {
            // Keep simulation snappy to avoid delaying LCP
            const steps = [10, 30, 60, 90];
            for (const step of steps) {
                await new Promise(resolve => setTimeout(resolve, 100));
                setProgress(step);
            }
        };

		const loadAllAssets = async () => {
			try {
				// Start with simulated progress
				await simulateProgressSteps();
				
				// Load only critical images
				await Promise.all([
					...imageUrls.map((url) => loadImage(url)),
					...videoUrls.map((url) => loadVideo(url)),
				]);

                // Complete the progress and finish immediately
                setProgress(100);
                finishLoading();
			} catch (error) {
				console.error("Error loading assets:", error);
				setProgress(100);
				// Don't wait too long if there's an error
				setTimeout(() => {
					finishLoading();
				}, 500);
			}
		};

		// Add a maximum timeout to prevent infinite loading
        const maxTimeout = setTimeout(() => {
            console.warn("Splash screen max timeout reached");
            finishLoading();
        }, 5000); // tighter maximum

		loadAllAssets();

		// Cleanup timeout on unmount
		return () => {
			clearTimeout(maxTimeout);
		};
	}, [finishLoading]);

	// Animate the displayed counter smoothly
	useEffect(() => {
		const controls = animate(displayedProgress, progress, {
			duration: 0.5,
			ease: "easeInOut",
			onUpdate(value) {
				setDisplayedProgress(Math.round(value));
			},
		});

		return () => controls.stop();
	}, [progress]);

	// Animate width of progress bar
	useEffect(() => {
		controls.start({ width: `${progress}%` });
	}, [progress, controls]);

	return (
		<motion.div
			className="fixed inset-0 flex flex-col items-center justify-center bg-[#fbf6f5] z-50"
			initial={{ opacity: 1 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}>
			<img
				src="/images/logo-copyColor-text.png"
				alt="Logo"
				className="w-[120px] h-auto mb-8"
			/>

			<div className="w-64 h-4 bg-[#ddd] rounded-full overflow-hidden mb-4">
				<motion.div
					className="h-full bg-[#73383E]"
					initial={{ width: "0%" }}
					animate={controls}
					transition={{ ease: "easeInOut", duration: 0.5 }}
				/>
			</div>

			<div className="text-[#73383E] text-lg font-semibold">
				{displayedProgress}%
			</div>
		</motion.div>
	);
};

export default SplashScreen;
