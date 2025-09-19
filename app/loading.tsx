import { Loader2 } from "lucide-react";

export default function Loading() {
	return (
		<div className="w-full h-screen flex items-center justify-center animate-spin ">
			<Loader2
				size={40}
				color="#73383E"
				className="text-[#73383E]"
			/>
		</div>
	);
}
