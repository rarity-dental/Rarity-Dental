import { defineField, defineType } from "sanity";

const defaultTechAdvantageItems = [
	{
		title: "3D CT Scan",
		fallbackIcon: "print",
		description:
			"Our 3D Cone Beam CT Scanner provides 360-degree imaging of teeth, jaw, nerves, and sinuses with low radiation, aiding precise implants, root canals, wisdom tooth evaluation, and pathology diagnosis.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2F3D%20CBCT%20Video.mp4?alt=media&token=dc67c55a-d24c-4e57-80ce-29417d8422b9",
	},
	{
		title: "Digital Smile Design (DSD)",
		fallbackIcon: "dsd",
		description:
			"Uses facial photography, video, and software to create a virtual preview of your smile, allowing evaluation and refinement for personalized, harmonious treatment results.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FInvisalign-Video.mp4?alt=media&token=651b5901-3f03-430c-a970-9b4330a58fb8",
	},
	{
		title: "BIOLASE Dentistry",
		fallbackIcon: "laser",
		description:
			"BIOLASE lasers enable minimally invasive procedures with reduced pain, faster healing, and improved precision for various dental treatments.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FLaser-Dentistry.mp4?alt=media&token=c9be53e1-4b77-4468-b5cd-7c18598c7a7b",
	},
	{
		title: "Tek-Scan Analysis",
		fallbackIcon: "ar",
		description:
			"Uses advanced digital sensors to measure bite force and contact points in real time, helping diagnose imbalances and guide precise, comfortable bite adjustments for optimal function.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FTek%20Scan%20Bite%20Assessment.mp4?alt=media&token=682bb44d-790b-4b44-bad7-d6bc4353a9a2",
	},
	{
		title: "Joint Vibration Analysis",
		fallbackIcon: "dsd",
		description:
			"JVA is a non-invasive tool detecting TMJ disorders early by analyzing jaw joint sounds and movements for personalized treatment plans.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FJOINT%20VIBRATION%20ANALYSIS.mp4?alt=media&token=b8bd314a-48d0-4b25-a6c3-619703957bc9",
	},
	{
		title: "Microscope Assisted Dentistry",
		fallbackIcon: "dsd",
		description:
			"Microscope-assisted dentistry utilizes a high-resolution 3D model of the teeth to provide precise and detailed treatment planning.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FMicroscope%20Dentistry.mp4?alt=media&token=4a69791c-e3af-4403-b9b2-742a59065462",
	},
	{
		title: "ZOOM Teeth Whitening",
		fallbackIcon: "dsd",
		description:
			"ZOOM Teeth Whitening is a high-tech teeth whitening device that uses a high-resolution 3D model of the teeth to provide precise and detailed treatment planning.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FPhilips%20Zoom%20Teeth%20Whitening.mp4?alt=media&token=0abc5dc3-baf7-495e-9b3d-622b3472d12c",
	},
	{
		title: "Anti Snoring Device",
		fallbackIcon: "dsd",
		description:
			"Anti Snoring Device is a high-tech teeth whitening device that uses a high-resolution 3D model of the teeth to provide precise and detailed treatment planning.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FAnti%20Snoring%20Device.mp4?alt=media&token=688243af-9186-4fbe-bf09-b18da39532df",
	},
	{
		title: "TENS Therapy",
		fallbackIcon: "dsd",
		description:
			"Uses gentle electrical impulses to relax jaw muscles, helping specialists identify optimal bite position for TMJ diagnosis, rehabilitation planning, and long-term comfort after restorations.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FLaser-Dentistry.mp4?alt=media&token=c9be53e1-4b77-4468-b5cd-7c18598c7a7b",
	},
	{
		title: "Conscious Sedation Dentistry",
		fallbackIcon: "dsd",
		description:
			"Enables complex dental procedures in deep relaxation while remaining responsive, ensuring comfort for treatments like implants, full mouth rehabilitation, and smile makeovers.",
		video: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fvideos%2FInvisalign-Video.mp4?alt=media&token=651b5901-3f03-430c-a970-9b4330a58fb8",
	},
];

export default defineType({
	name: "techAdvantageSection",
	title: "Tech Advantage Section",
	type: "object",
	initialValue: {
		eyebrow: "Technological Advantage",
		heading: "Pioneering Dental Excellence with Cutting-Edge Innovations",
		items: defaultTechAdvantageItems,
	},
	fields: [
		defineField({
			name: "eyebrow",
			title: "Eyebrow",
			type: "string",
			initialValue: "Technological Advantage",
		}),
		defineField({
			name: "heading",
			title: "Heading",
			type: "string",
			initialValue:
				"Pioneering Dental Excellence with Cutting-Edge Innovations",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "items",
			title: "Cards",
			type: "array",
			of: [{ type: "techAdvantageItem" }],
			validation: (Rule) => Rule.min(1).max(12).required(),
		}),
	],
	preview: {
		select: {
			title: "heading",
			subtitle: "eyebrow",
		},
	},
});
