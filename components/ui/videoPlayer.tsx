"use client";

import { Pause, Play } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";

interface LocalVideoProps {
	src: string;
	onVideoLoaded?: () => void; // Make this prop optional
}

const LocalVideo: React.FC<LocalVideoProps> = ({ src, onVideoLoaded }) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		const videoElement = videoRef.current;
		if (videoElement) {
			const handleLoadedMetadata = () => {
				if (onVideoLoaded) {
					onVideoLoaded();
				}
			};
			videoElement.addEventListener(
				"loadedmetadata",
				handleLoadedMetadata
			);
			return () => {
				videoElement.removeEventListener(
					"loadedmetadata",
					handleLoadedMetadata
				);
			};
		}
	}, [onVideoLoaded]);

	const handlePlayPause = () => {
		if (videoRef.current) {
			if (videoRef.current.paused) {
				videoRef.current.play();
				setIsPlaying(true);
			} else {
				videoRef.current.pause();
				setIsPlaying(false);
			}
		}
	};

	return (
		<div className="relative">
			<video
				ref={videoRef}
				className="block w-full h-full xl:min-h-[280px] xl:max-w-[60%] 4xl:max-w-[70%] xl:mx-auto object-cover rounded-xl shadow-2xl border-4 md:border-8 border-white"
				loop
				autoPlay
				playsInline
				muted
				preload="metadata"
				poster="https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fimages%2Fplaceholder-video.jpg?alt=media&token=0f6a1711-cf5c-4ee4-9c4c-4c17e7d58c10">
				<source
					src={src}
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>

			<button
				onClick={handlePlayPause}
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-4 hover:bg-opacity-75 transition-all">
				{isPlaying ? <Pause /> : <Play />}
			</button>
		</div>
	);
};

export default LocalVideo;
