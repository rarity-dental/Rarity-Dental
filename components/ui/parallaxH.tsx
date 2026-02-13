"use client";

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
	// Convert velocity to a CSS animation duration (higher velocity = faster = shorter duration)
	const duration = Math.max(5, Math.round(5000 / baseVelocity));

	return (
		<div
			className="flex items-center relative w-full overflow-hidden"
			style={{ height: "112px" }}
		>
			{hasOverlay && (
				<div className="absolute bg-[#f7f2ec] bg-opacity-50 w-full h-full top-0 left-0 overflow-hidden" />
			)}
			<div
				className="flex"
				style={{
					height: "83px",
					width: `${childWidth * 2}px`,
					animation: `parallax-scroll ${duration}s linear infinite`,
				}}
			>
				<div style={{ width: `${childWidth}px` }}>{children}</div>
				<div style={{ width: `${childWidth}px` }}>{children}</div>
			</div>
		</div>
	);
}
