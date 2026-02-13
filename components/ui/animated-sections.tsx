"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const slideVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0 },
};

type props = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	staggerChildren?: number;
	// When true, render without motion animations
	disabled?: boolean;
};

export default function Slide({
	children,
	delay = 0.6,
	className,
	staggerChildren = 0.4,
	disabled = false,
}: props) {
	const ref = useRef(null);
	const isInview = useInView(ref, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInview) {
			controls.start("visible");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInview]);

	if (disabled) {
		return <div ref={ref as any} className={cn("w-full", className)}>{children}</div>;
	}

	return (
		<motion.div
			ref={ref}
			variants={slideVariants}
			transition={{
				type: "spring",
				duration: 1,
				damping: 20,
				delay: delay,
				stiffness: 50,
				staggerChildren: staggerChildren,
			}}
			initial="hidden"
			animate={controls}
			className={cn("w-full", className)}>
			{children}
		</motion.div>
	);
}

export { Slide };
