/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { delay } from "lodash";

export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}) => {
	const [scope, animate] = useAnimate();
	let linesArray = words.split("\n");

	useEffect(() => {
		animate(
			scope.current.querySelectorAll("span"),
			{ opacity: 1 },
			{ duration: 2, delay: stagger(0.2) }
		);
	}, [scope.current]);

	const renderLines = () => {
		return (
			<motion.div ref={scope}>
				{linesArray.map((line, idx) => {
					let wordsArray = line.split(" ");
					return (
						<div
							key={idx}
							className="flex justify-center flex-wrap">
							{wordsArray.map((word, wordIdx) => {
								return (
									<motion.span
										key={word + wordIdx}
										className="text-[28px] md:text-7xl leading-tight text-white opacity-0 z-10 text-center">
										{word}&nbsp;
									</motion.span>
								);
							})}
						</div>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-normal", className)}>
			<div className="mt-4">
				<div className="text-white text-[28px] md:text-7xl leading-snug tracking-tight md:tracking-tight ">
					{renderLines()}
				</div>
			</div>
		</div>
	);
};
