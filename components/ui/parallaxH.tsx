"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

type ParallaxProps = {
	children: React.ReactNode;
	baseVelocity?: number;
	childWidth?: number;
	mt?: number;
	hasOverlay?: boolean;
};

export function ParallaxBanner({
	children,
	baseVelocity = 100,
	childWidth = 4786,
	mt = 3,
	hasOverlay = true,
}: ParallaxProps) {
	const baseX = useMotionValue(0);
	const timeRef = useRef(0);

	// Use requestAnimationFrame for smooth 60fps animation instead of setInterval
	useAnimationFrame((time, delta) => {
		// Convert velocity to pixels per second, then to pixels per frame
		const velocity = baseVelocity * 0.01; // Adjust multiplier for desired speed
		baseX.set(baseX.get() - velocity);
	});

	const x = -baseX.get() % (childWidth * 2); // Calculate x based on childWidth
	return (
		<div
			className={`flex items-center relative w-full overflow-hidden `}
			style={{
				height: "112px",
			}}
		>
			{hasOverlay && (
				<div className="absolute bg-[#f7f2ec] bg-opacity-50 w-full h-full top-0 left-0 overflow-hidden" />
			)}
			<motion.div
				className="flex moving-banner "
				style={{
					transform: `translateX(-${x}%)`,
					height: "83px",
					width: `${childWidth * 1.9}px`, // Add this line
				}}
			>
				<div style={{ width: `${childWidth}px` }}>{children}</div>
				<div style={{ width: `${childWidth}px` }}>{children}</div>
			</motion.div>
		</div>
	);
}
