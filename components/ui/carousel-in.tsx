/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useReducer, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
	children: React.ReactNode[];
	className?: string;
	duration?: number;
	onSlideChange?: (index: number) => void; // New prop
};

type State = {
	currentIndex: number;
	isManualControl: boolean;
	isVisible: boolean;
};

type Action =
	| { type: "NEXT" }
	| { type: "PREVIOUS" }
	| { type: "SET_MANUAL_CONTROL"; payload: boolean }
	| { type: "SET_VISIBILITY"; payload: boolean };

const initialState: State = {
	currentIndex: 0,
	isManualControl: false,
	isVisible: true,
};

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "NEXT":
			return {
				...state,
				currentIndex: (state.currentIndex + 1) % childrenLength,
				isManualControl: false,
			};
		case "PREVIOUS":
			return {
				...state,
				currentIndex:
					(state.currentIndex - 1 + childrenLength) % childrenLength,
				isManualControl: false,
			};
		case "SET_MANUAL_CONTROL":
			return { ...state, isManualControl: action.payload };
		case "SET_VISIBILITY":
			return { ...state, isVisible: action.payload };
		default:
			return state;
	}
}

let childrenLength = 0;

export const Carousel: React.FC<Props> = ({
	children,
	className,
	duration = 4,
	onSlideChange = () => {}, // Default no-op function
}) => {
	childrenLength = children.length;
	const [state, dispatch] = useReducer(reducer, initialState);
	const containerRef = useRef<HTMLDivElement>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const previousIndexRef = useRef(0);
	const [direction, setDirection] = React.useState<"left" | "right">("right");

	const isInView = useInView(containerRef, { amount: 0.1 });

	const startAutoplayTimer = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			dispatch({ type: "NEXT" });
		}, duration * 1000);
	}, [duration]);

	useEffect(() => {
		const handleVisibilityChange = () => {
			dispatch({ type: "SET_VISIBILITY", payload: !document.hidden });
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			document.removeEventListener(
				"visibilitychange",
				handleVisibilityChange
			);
		};
	}, []);

	useEffect(() => {
		if (isInView && !state.isManualControl && state.isVisible) {
			startAutoplayTimer();
		} else if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [
		state.currentIndex,
		state.isManualControl,
		state.isVisible,
		isInView,
		startAutoplayTimer,
	]);

	useEffect(() => {
		if (onSlideChange) {
			onSlideChange(state.currentIndex);
		}
	}, [state.currentIndex, onSlideChange]);

	const handleManualControl = (direction: "prev" | "next") => {
		dispatch({ type: "SET_MANUAL_CONTROL", payload: true });
		dispatch({ type: direction === "prev" ? "PREVIOUS" : "NEXT" });
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		startAutoplayTimer();
	};

	useEffect(() => {
		const previousIndex = previousIndexRef.current;
		if (
			(state.currentIndex === 0 &&
				previousIndex === childrenLength - 1) ||
			state.currentIndex < previousIndex
		) {
			setDirection("left"); // going backward
		} else {
			setDirection("right"); // going forward
		}
		previousIndexRef.current = state.currentIndex;

		onSlideChange(state.currentIndex);
	}, [state.currentIndex, onSlideChange]);

	return (
		<div
			ref={containerRef}
			className={cn(
				"w-full h-full overflow-visible relative",
				className
			)}>
			<button
				onClick={() => handleManualControl("prev")}
				className="active:scale-[95%] rounded-full p-2 transition-all duration-500 ease-in-out focus:outline-none z-10 absolute   top-[300px] lg:top-[340px] 2xl:top-[540px] transform -translate-y-[1/2] left-[1%]"
				aria-label="Previous slide">
				<img
					width={48}
					height={48}
					src="/images/left-circle-arrow.svg"
					alt="left-arrow"
				/>
			</button>
			<button
				onClick={() => handleManualControl("next")}
				className=" active:scale-[95%] rounded-full p-2 transition-all duration-500 ease-in-out focus:outline-none z-10  top-[300px] lg:top-[340px] 2xl:top-[540px]  transform -translate-y-[1/2] absolute right-[1%]"
				aria-label="Next slide">
				<img
					width={48}
					height={48}
					src="/images/right-circle-arrow.svg"
					alt="right-arrow"
				/>
			</button>{" "}
			<AnimatePresence mode="wait">
				<motion.div
					key={state.currentIndex}
					initial={{
						opacity: state.currentIndex === 0 ? 1 : 0,
						x: state.currentIndex === 0 ? "50%" : 10,
					}}
					animate={{
						opacity: 1,
						x: 0,
					}}
					exit={{
						opacity: state.currentIndex === 0 ? 1 : 0,
						x: state.currentIndex === 0 ? "-100%" : -10,
					}}
					transition={{
						type: "tween",
						duration: state.currentIndex === 0 ? 0.5 : 0.3,
						ease: "easeInOut",
					}}
					className="h-full">
					{children[state.currentIndex]}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
