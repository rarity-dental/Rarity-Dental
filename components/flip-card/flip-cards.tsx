/* eslint-disable @next/next/no-img-element */
interface FlipCardProps {
	icon: string;
	text: string;
	description?: string;
}

export const FlipCard = ({ icon, text, description }: FlipCardProps) => {
	return (
		<div
			className="flip-card min-h-[220px] w-[290px] lg:w-[400px] bg-transparent"
			style={{
				perspective: "1000px",
			}}>
			<div className="flip-card-inner ">
				<div className="flip-card-front flex flex-col items-center gap-4">
					<img
						src={icon}
						alt={text}
						className="w-16 h-16 object-cover"
					/>
					<h3 className="text-2xl font-bold text-white">{text}</h3>
				</div>
				<div className="flip-card-back px-4">
					<p className="text-md md:text-lg pb-4 md:pb-0 text-slate-800">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};
