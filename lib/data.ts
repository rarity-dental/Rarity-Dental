import exp from "constants";

export const warrantyDetails = [
	{
		treatment: "Crowns",
		period: "10 years",
		coverage:
			"Free replacement in case of failure due to material or workmanship.",
	},
	{
		treatment: "Bridges",
		period: "10 years",
		coverage:
			"Free replacement if there is any failure due to material or workmanship.",
	},
	{
		treatment: "Dental Implants",
		period: "25 years",
		coverage:
			"Free replacement for any structural failure of the implant itself.",
	},
	{
		treatment: "Fillings",
		period: "3 years",
		coverage:
			"Free replacement or repair in case of failure due to material or workmanship.",
	},
	{
		treatment: "Ceramic Veneers",
		period: "10 years",
		coverage:
			"Free replacement if there is any failure due to material or workmanship.",
	},
	{
		treatment: "Root Canal Treatment",
		period: "5 years",
		coverage:
			"Retreatment or other necessary procedures if the initial treatment fails.",
	},
];

export const colorVariants: Record<
	| "smile-designing"
	| "advanced-technology"
	| "single-day-dentistry"
	| "specialised-treatments"
	| "international-patients"
	| "invisalign"
	| "default",
	{
		text: string;
		bg: string;
		border: string;
		hoverText: string;
		hoverBg: string;
		hoverBorder: string;
		inactiveText?: string;
		inactiveBg?: string;
		inactiveBorder?: string;
		inactiveHoverText?: string;
		inactiveHoverBg?: string;
		inactiveHoverBorder?: string;
	}
> = {
	"smile-designing": {
		inactiveText: "text-gray-700",
		inactiveBg: "bg-gray-50",
		inactiveBorder: "border-gray-200",
		inactiveHoverText: "text-gray-800",
		inactiveHoverBg: "bg-gray-50",
		inactiveHoverBorder: "border-gray-300",
		text: "text-blue-700",
		bg: "bg-blue-200",
		border: "border-blue-300",
		hoverText: "text-blue-800",
		hoverBg: "bg-blue-300",
		hoverBorder: "border-blue-400",
	},
	"advanced-technology": {
		inactiveText: "text-gray-700",
		inactiveBg: "bg-gray-50",
		inactiveBorder: "border-gray-200",
		inactiveHoverText: "text-gray-800",
		inactiveHoverBg: "bg-gray-50",
		inactiveHoverBorder: "border-gray-300",
		text: "text-green-700",
		bg: "bg-green-200",
		border: "border-green-300",
		hoverText: "text-green-800",
		hoverBg: "bg-green-300",
		hoverBorder: "border-green-400",
	},
	"single-day-dentistry": {
		inactiveText: "text-gray-700",
		inactiveBg: "bg-gray-50",
		inactiveBorder: "border-gray-200",
		inactiveHoverText: "text-gray-800",
		inactiveHoverBg: "bg-gray-50",
		inactiveHoverBorder: "border-gray-300",
		text: "text-yellow-700",
		bg: "bg-yellow-200",
		border: "border-yellow-300",
		hoverText: "text-yellow-800",
		hoverBg: "bg-yellow-300",
		hoverBorder: "border-yellow-400",
	},
	"specialised-treatments": {
		inactiveText: "text-gray-700",
		inactiveBg: "bg-gray-50",
		inactiveBorder: "border-gray-200",
		inactiveHoverText: "text-gray-800",
		inactiveHoverBg: "bg-gray-50",
		inactiveHoverBorder: "border-gray-300",
		text: "text-red-700",
		bg: "bg-red-200",
		border: "border-red-300",
		hoverText: "text-red-800",
		hoverBg: "bg-red-300",
		hoverBorder: "border-red-400",
	},
	"international-patients": {
		inactiveText: "text-gray-700",
		inactiveBg: "bg-gray-50",
		inactiveBorder: "border-gray-200",
		inactiveHoverText: "text-gray-800",
		inactiveHoverBg: "bg-gray-50",
		inactiveHoverBorder: "border-gray-300",
		text: "text-pink-700",
		bg: "bg-pink-200",
		border: "border-pink-300",
		hoverText: "text-pink-800",
		hoverBg: "bg-pink-300",
		hoverBorder: "border-pink-400",
	},

	// prettier-ignore
	"invisalign": {
		inactiveText: "text-gray-700",
		inactiveBg: "bg-gray-50",
		inactiveBorder: "border-gray-200",
		inactiveHoverText: "text-gray-800",
		inactiveHoverBg: "bg-gray-50",
		inactiveHoverBorder: "border-gray-300",
		text: "text-purple-700",
		bg: "bg-purple-200",
		border: "border-purple-300",
		hoverText: "text-purple-800",
		hoverBg: "bg-purple-300",
		hoverBorder: "border-purple-400",
	},
	// prettier-ignore
	"default": {
		text: "text-slate-50",
		bg: "bg-slate-800",
		border: "border-gray-300",
		hoverText: "text-gray-800",
		hoverBg: "bg-gray-300",
		hoverBorder: "border-gray-400",
		inactiveText: "text-gray-700",
		inactiveBg: "bg-gray-50",
		inactiveBorder: "border-gray-200",
		inactiveHoverText: "text-gray-800",
		inactiveHoverBg: "bg-gray-50",
		inactiveHoverBorder: "border-gray-300",
	},
};
export interface ColorScheme {
	text: string;
	bg: string;
	border: string;
	hoverText?: string;
	hoverBg?: string;
	hoverBorder?: string;
}

export const warrantyConditions = [
	{
		title: "Exclusions",
		details: [
			"Damage resulting from accidents, trauma, or misuse.",
			"Issues arising from poor oral hygiene, lack of regular maintenance, or failure to follow post-treatment care instructions.",
			"Natural wear and tear that occurs over time.",
			"Treatments performed by other dental practitioners.",
		],
	},
	{
		title: "Maintenance",
		details: [
			"Regular dental check-ups every six months are mandatory to maintain the validity of the warranty.",
			"Any recommended preventive care, such as cleanings and examinations, must be adhered to.",
		],
	},
	{
		title: "Claims",
		details: [
			"To claim a warranty, the patient must provide proof of the original treatment and follow-up visits.",
			"Any repairs or replacements under this warranty will be performed exclusively by Rarity Dental Care Centres.",
		],
	},
	{
		title: "Limitations",
		details: [
			"The warranty covers only the cost of replacement or repair of the dental work. It does not cover additional expenses, such as travel or accommodation.",
		],
	},
];

export const faqs = [
	{
		question: "What is Personal Data?",
		answer: "Personal Data refers to any information that can identify you as an individual, such as your name, contact details, medical history, and other related information.",
	},
	{
		question: "What types of personal data does Rarity collect?",
		answer: "Rarity collects your name, address, contact details, dental and medical history, and treatment preferences. We also collect usage data from your interactions with our website.",
	},
	{
		question: "How is the information collected online used by Rarity?",
		answer: "We use your information to provide and improve our services, communicate with you, process payments, and tailor our services to your preferences. We also use it to comply with legal obligations and protect our rights.",
	},
	{
		question:
			"Does Rarity share my personal information with third parties?",
		answer: "We may share your information with employees, contractors, and third-party service providers who assist us in delivering our services. We may also disclose information when required by law or in connection with business transactions.",
	},
	{
		question: "How does Rarity protect my privacy?",
		answer: "We use industry-standard security measures, such as firewalls and encryption, to protect your data. Access to your data is restricted to authorised personnel only.",
	},
	{
		question: "Can I access and update my personal information?",
		answer: "Yes, you can request access to and update your personal information by contacting us at info@raritydental.com.",
	},
	{
		question: "Does Rarity use cookies on its website?",
		answer: "Yes, we use cookies to enhance your browsing experience and gather information about your internet use. You can adjust your browser settings to decline cookies if you prefer.",
	},
	{
		question: "How does Rarity protect children's privacy?",
		answer: "Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such data collection, we will delete it.",
	},
	{
		question: "How will I know if there are changes to the Privacy Policy?",
		answer: "We will post any changes to this Privacy Policy on our website and update the effective date. We encourage you to review this policy periodically for updates.",
	},
	{
		question: "Who can I contact if I have questions about my privacy?",
		answer: "For any questions or concerns about your privacy or our data practices, please contact us at info@raritydental.com.",
	},
];

export interface NavItem {
	id: number;
	title: string;
	category: string;
	description: string;
	href: string;
}

export const navItems: NavItem[] = [
	{
		id: 1,
		title: "Specialised Treatments",
		category: "Specialised Treatments",
		description:
			"Utilizing modern equipment and methodologies for optimal dental care.",
		href: "/specialised-treatments",
	},
	{
		id: 2,
		title: "Smile Designing",
		category: "Services",
		description: "Customized smile makeover plans for a perfect smile.",
		href: "/smile-designing",
	},
	{
		id: 3,
		title: "Single Day Dentistry",
		category: "Services",
		description:
			"Comprehensive dental procedures completed in a single visit.",
		href: "/single-day-dentistry",
	},
	{
		id: 4,
		title: "Advanced Technology",
		category: "Technology",
		description:
			"State-of-the-art technology for advanced dental treatments.",
		href: "/advanced-technology",
	},
	{
		id: 5,
		title: "Invisalign",
		category: "Services",
		description: "Clear aligners for straightening teeth discreetly.",
		href: "/invisalign",
	},

	{
		id: 6,
		title: "Empanelment & Financing",
		category: "Patient Care",
		description:
			"Access to high-quality dentistry and advanced technology.",
		href: "/empanelment-financing",
	},
	{
		id: 7,
		title: "Warranties",
		category: "Patient Care",
		description: "Guaranteed quality and assurance on dental treatments.",
		href: "/warranty-details",
	},
	{
		id: 8,
		title: "Testimonials",
		category: "Patient Care",
		description: "Real patient experiences and feedback.",
		href: "/patient-testimonials",
	},
	{
		id: 9,
		title: "International Patients",
		category: "IP",
		description: "Specialized care for patients traveling from abroad.",
		href: "/international-patients",
	},
	{
		id: 10,
		title: "Awards & Press",
		category: "Recognition",
		description: "Recognitions and media coverage of our achievements.",
		href: "/recognition/awards-press",
	},
	{
		id: 11,
		title: "About Us",
		category: "ab",
		description: "Learn more about our clinic and team members.",
		href: "/about",
	},
	{
		id: 12,
		title: "Contact Us",
		category: "ab",
		description: "Get in touch with us for inquiries and appointments.",
		href: "/contact-us",
	},
	{
		id: 13,
		category: "ab",
		title: "Services",
		description: "View our comprehensive list of services and treatments.",
		href: "/services",
	},
	{
		id: 14,
		category: "ab",
		title: "Blog",
		description: "Read our latest articles and dental care tips.",
		href: "/blog",
	},
	{
		id: 15,
		category: "ST",
		title: "Dental Implants",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/dental-implants",
	},
	{
		id: 16,
		category: "ST",
		title: "Cosmetic Dentistry",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/cosmetic-dentistry",
	},
	{
		id: 17,
		category: "ST",
		title: "Full Mouth Rehabilitation",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Full-Mouth-Rehabilitation",
	},
	{
		id: 18,
		category: "ST",
		title: "Invisible Braces",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/invisible-braces",
	},
	{
		id: 19,
		category: "ST",
		title: "Facial Pain Cures",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Facial-Pain-Cures",
	},
	{
		id: 20,
		category: "ST",
		title: "Teeth Whitening",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Teeth-Whitening",
	},
	{
		id: 21,
		category: "ST",
		title: "Painless Root Canals",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Painless-Root-Canals",
	},
	{
		id: 22,
		category: "ST",
		title: "Comprehensive Consultations",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Comprehensive-Consultations",
	},
	{
		id: 23,
		category: "ST",
		title: "Advanced Gum Treatments",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Advanced-Gum-Treatments",
	},
	{
		id: 24,
		category: "ST",
		title: "Other Dental Procedures",
		description: "Read our latest articles and dental care tips.",
		href: "/specialised-treatments/Other-Dental-Procedures",
	},

	{
		id: 25,
		category: "SD",
		title: "Digital Smile Designing",
		description: "Read our latest articles and dental care tips.",
		href: "/smile-designing/Digital-Smile-Design",
	},
	{
		id: 26,
		category: "SD",
		title: "Smile Makeovers Consultation",
		description: "Read our latest articles and dental care tips.",
		href: "/smile-designing/smile-makeover-consultation",
	},
	{
		id: 27,
		category: "SD",
		title: "Gum Contouring",
		description: "Read our latest articles and dental care tips.",
		href: "/smile-designing/gum-contouring",
	},
	{
		id: 28,
		category: "SD",
		title: "Tooth Contouring & Reshaping",
		description: "Read our latest articles and dental care tips.",
		href: "/smile-designing/tooth-contouring-and-reshaping",
	},
	{
		id: 29,
		category: "SD",
		title: "Lip Repositioning Surgery",
		description: "Read our latest articles and dental care tips.",
		href: "/smile-designing/lip-repositioning-surgery",
	},

	{
		id: 30,
		category: "SD",
		title: "Orthognathic Surgery",
		description: "Read our latest articles and dental care tips.",
		href: "/smile-designing/orthognathic-surgery",
	},
	{
		id: 31,
		category: "SDD",
		title: "CAD/CAM One Visit Crowns",
		description: "Read our latest articles and dental care tips.",
		href: "/single-day-dentistry/CAD-CAM-One-Visit-Crowns",
	},

	{
		id: 32,
		category: "SDD",
		title: "Smile in a Day",
		description: "Read our latest articles and dental care tips.",
		href: "/single-day-dentistry/Smile-in-a-Day",
	},
	{
		id: 33,
		category: "AT",
		title: "Intraoral Digital Scan",
		description: "Read our latest articles and dental care tips.",
		href: "/advanced-technology/Intraoral-Digital-Scan",
	},
	{
		id: 34,
		category: "AT",
		title: "3D CBCT Scan",
		description: "Read our latest articles and dental care tips.",
		href: "/advanced-technology/3D-CBCT-Scans",
	},
	{
		id: 35,
		category: "AT",
		title: "Ozone Therapy",
		description: "Read our latest articles and dental care tips.",
		href: "/advanced-technology/Ozone-Therapy",
	},
	{
		id: 36,
		category: "AT",
		title: "BIOLASE Dental Lasers",
		description: "Read our latest articles and dental care tips.",
		href: "/advanced-technology/BIOLASE-Dental-Lasers",
	},
	{
		id: 37,
		category: "AT",
		title: "Tek-Scan Analysis",
		description: "Read our latest articles and dental care tips.",
		href: "/advanced-technology/Tek-Scan-Analysis",
	},
	{
		id: 38,
		category: "AT",
		title: "Digital Smile Design",
		description: "Read our latest articles and dental care tips.",
		href: "/advanced-technology/Advanced-Digital-Smile-Design",
	},
	{
		id: 39,
		category: "AT",
		title: "Conscious Sedation Dentistry",
		description: "Read our latest articles and dental care tips.",
		href: "/advanced-technology/Conscious-Sedation-Dentistry",
	},
	{
		id: 40,
		category: "AT",
		title: "TENS Therapy",
		description: "Read our latest articles and dental care tips.",
		href: "/advanced-technology/TENS-Therapy",
	},
	{
		id: 41,
		category: "AT",
		title: "Joint Vibration Analysis",
		description: "Read our latest articles and dental care tips.",
		href: "/advanced-technology/Joint-Vibration-Analysis",
	},
	{
		id: 42,
		category: "AT",
		title: "Microscope Assisted Dentistry",
		description: "Read our latest articles and dental care tips.",
		href: "/advanced-technology/Microscope-Assisted-Dentistry",
	},
	{
		id: 43,
		category: "AT",
		title: "ZOOM Teeth Whitening",
		description: "Read our latest articles and dental care tips.",
		href: "/advanced-technology/ZOOM-Teeth-Whitening",
	},
	{
		id: 44,
		category: "AT",
		title: "Anti Snoring Device",
		description: "Read our latest articles and dental care tips.",
		href: "/advanced-technology/Anti-Snoring-Device",
	},
];

export const doctorData = [
	{
		id: 1,
		image: "/images/dr-sneha-singh.png",
		alt: "Dr. Sneha Singh – Prosthodontist and Implantologist at Rarity Dental Gurgaon",
		title: "Dr Sneha Singh ",
		slug: "dr-sneha-singh",
		experience: 13,
		degree: [
			{
				degImg: "/images/prostho.jpg",
				title: "MDS - Prosthodontist & Implantologist",
			},
			{
				degImg: "/images/dentzz.jpg",
				title: "Ex Head North India - Dentzz Dental Care",
			},
			{
				degImg: "/images/aacd.jpg",
				title: "AACD Member",
			},
		],
		servicelist: [
			{
				type: "Prosthodontics",
				services: [
					"Complete and partial dentures",
					"Fixed crowns and bridges",
					"Dental implants",
					"Occlusal problem diagnosis and treatment",
					"Maxillofacial abnormality treatment",
					"TMJ disorder treatment",
				],
			},
			{
				type: "Maxillofacial Prosthetics",
				services: [
					"Intraoral and extraoral maxillofacial defect rehabilitation",
					"Cleft lip and palate rehabilitation",
					"Silicone prostheses for facial defects",
				],
			},
			{
				type: "Oral Implantology",
				services: [
					"Single tooth replacement",
					"Full mouth rehabilitation",
					"Intricate implant procedures",
				],
			},
			{
				type: "Aesthetic Rehabilitation",
				services: [
					"Smile makeovers",
					"Aesthetic prosthodontic solutions",
				],
			},
		],
		titleDesc: "Dr. Sneha Singh - The Smile Wizard",
		detailDesc: [
			"Dr. Sneha Singh is a renowned Prosthodontist with years of advanced training, earning her reputation as a smile wizard.",
			"Having completed both her Graduation and Post-Graduation in Prosthodontics and Oral Implantology from the prestigious Rajiv Gandhi University of Health Sciences in Bangalore, Dr. Singh has established herself as a leading expert in her field.",
			"Her commitment to excellence is further demonstrated by her additional training in Oral Implantology from the American Academy of Implant Dentistry and her certification in maxillofacial prosthesis fabrication.",
			"Dr. Singh’s extensive expertise spans a wide range of dental prosthetic and aesthetic rehabilitation procedures.",
			"She excels in creating complete and partial dentures, fixed crowns and bridges, and dental implants.",
			"Her diagnostic and treatment skills extend to addressing occlusal problems and maxillofacial abnormalities, including TMJ disorders.",
			"Additionally, she is uniquely qualified to rehabilitate both intraoral and extraoral maxillofacial defects, such as cleft lip and palate, and is skilled in fabricating silicone prostheses for facial defects.",
			"Known for her meticulous attention to detail and her artistic touch, Dr. Singh has provided top-tier dental care to patients from over 30 countries, including some of the world’s top athletes, cricketers, rappers, models, actors, and business professionals.",
			"Her patient-centered approach ensures that each individual receives the highest level of care, tailored to their unique needs and preferences.",
			"She believes in putting patients at ease, taking the time to understand their concerns, and developing effective treatment plans that lead to successful outcomes.",
			"Dr. Singh’s ability to blend advanced dental techniques with a compassionate touch has made her a sought-after specialist for those seeking aesthetic perfection and functional excellence.",
			"Her comprehensive range of services includes the creation of fixed prosthodontic solutions that restore both function and aesthetics, ensuring that each patient leaves with a confident and radiant smile.",
			"Her expertise in oral implantology is particularly noteworthy, as she is capable of performing intricate implant procedures that require precise planning and execution.",
			"Whether it’s a single tooth replacement or a full mouth rehabilitation, Dr. Singh’s proficiency in implant dentistry guarantees long-lasting, natural-looking results.",
			"In her practice, Dr. Singh emphasizes the importance of patient education, ensuring that each patient understands their treatment options and feels confident in their care plan.",
			"Her warm and approachable demeanor helps to alleviate any anxieties, creating a comfortable environment where patients can receive the best possible dental care.",
			"Experience the exceptional care and expertise of Dr. Sneha Singh, where advanced dental techniques and personalized attention come together to create beautiful, healthy smiles for a diverse and discerning clientele.",
			"Let her passion for prosthodontics and commitment to excellence help you achieve your dental goals and enhance your overall well-being.",
		],
		descriptionCard:
			"Dr. Sneha Singh is regarded as the Best full mouth rehabilitation specialist, trusted as the Best Cosmetic Dentist in Gurgaon, and celebrated as a Smile Design expert in India.",
		descriptionHover:
			"Dr. Sneha Singh is a renowned Prosthodontist with years of advanced training, earning her reputation as a smile wizard. Recognized as the Best full mouth rehabilitation specialist, the Best Cosmetic Dentist in Gurgaon, and a Best Smile Design expert in India.",
		description:
			"Dr. Sneha Singh is a distinguished Prosthodontist & Implantologist, recognized as the Best full mouth rehabilitation specialist, the Best Cosmetic Dentist in Gurgaon, and a leading Smile Design expert in India. Having completed both her Graduation and Post-Graduation in Prosthodontics and Oral Implantology from the prestigious Rajiv Gandhi University of Health Sciences in Bangalore, Dr. Singh has established herself as a leading expert in her field. Her commitment to excellence is further demonstrated by her additional training in Oral Implantology from the American Academy of Implant Dentistry and her certification in maxillofacial prosthesis fabrication.",
	},
	{
		id: 2,
		image: "/images/dr-manreet-sidhu-op.webp",
		imageOptimized: "/images/dr-manreet-sidhu-op.webp",
		title: "Dr. Manreet Sidhu",
		alt: "Dr. Manreet Sidhu – Orthodontist and Certified Invisalign Provider at Rarity Dental Gurgaon",
		slug: "dr-manreet-sidhu",
		experience: 13,

		degree: [
			{
				degImg: "/images/rcsed.jpg",
				title: "M.Orth - Royal College of Surgeons, Edinburgh, UK",
			},
			{
				degImg: "/images/dentofacial.jpg",
				title: "MDS - Orthodontics and Dentofacial Orthopaedics",
			},
			{
				degImg: "/images/invi-prov.jpg",
				title: "Certified Invisalign Provider",
			},
		],
		servicelist: [
			{
				type: "Orthodontics",
				services: [
					"Growth modulation for children",
					"Braces for children and adults",
					"Invisalign",
					"Lingual Orthodontics",
				],
			},
			{
				type: "Orthognathic Surgeries",
				services: ["Extensive orthognathic surgeries for adults"],
			},
			{
				type: "Aesthetic Orthodontics",
				services: [
					"Enhancing facial dynamics",
					"Restoring aesthetics and function",
				],
			},
		],
		titleDesc:
			"Dr Manreet Sidhu - A Specialist in Orthodontics and Dentofacial Orthopedics",
		detailDesc: [
			"Dr. Manreet is a highly skilled specialist in Orthodontics and Dentofacial Orthopedics with extensive experience in her field.",
			"She holds a prestigious Membership in Orthodontics from the Royal College of Surgeons, Edinburgh, UK.",
			"Certified in both Invisalign and Lingual Orthodontics, Dr. Manreet is dedicated to creating beautiful smiles with utmost care, precision, and perfection.",
			"She offers a wide range of treatments, including growth modulation for children, various types of braces for both children and adults, and extensive orthognathic surgeries for adults.",
			"Dr. Manreet's approach to patient care is simple and comfortable, focused on restoring both aesthetics and function.",
			"She aims to enhance facial dynamics, helping her patients feel confident and happy.",
			"With a patient-centric approach, Dr. Manreet is committed to making orthodontic care a positive and transformative experience.",
			"Her goal is to deliver outstanding results that not only improve smiles but also boost her patients' confidence and overall well-being.",
		],
		descriptionCard:
			"Dr. Manreet Sidhu is widely known as the Best Orthodontist in Gurgaon, ranked among the Top 1% Invisalign providers in India, delivering precise and predictable smile transformations.",
		descriptionHover:
			"Highly skilled in Orthodontics and Dentofacial Orthopaedics, recognized as the Best Orthodontist in Gurgaon and among the Top 1% Invisalign providers in India.",
		description:
			"Dr. Manreet Sidhu is a highly skilled Orthodontist, regarded as the Best Orthodontist in Gurgaon and ranked among the Top 1% Invisalign providers in India. A highly skilled specialist in Orthodontics and Dentofacial Orthopedics with extensive experience in her field, she holds a prestigious Membership in Orthodontics from the Royal College of Surgeons, Edinburgh, UK. Certified in both Invisalign and Lingual Orthodontics, Dr. Manreet is dedicated to creating beautiful smiles with utmost care, precision, and perfection.",
	},
	// {
	// 	id: 3,
	// 	image: "/images/dr-gaurav-malik.jpg",
	// 	alt: "Dr. Gaurav Malik – Internationally Trained Implantologist, DDS, at Rarity Dental Gurgaon",
	// 	title: "Dr. Gaurav Malik",
	// 	slug: "dr-gaurav-malik",
	// 	experience: 13,

	// 	degree: [
	// 		{
	// 			degImg: "/images/suny-buffalo.png",
	// 			title: "DDS - SUNY Buffalo",
	// 		},
	// 		{
	// 			degImg: "/images/oral-surgery.jpg",
	// 			title: "Implantologist",
	// 		},
	// 		{
	// 			degImg: "/images/omicron.jpg",
	// 			title: "Omicron Kappa Upsilon",
	// 		},
	// 	],
	// 	titleDesc: "Dr. Gaurav Malik - A Leading Implantologist",
	// 	detailDesc: [
	// 		"Born and raised in Delhi, Dr. Malik is trilingual, enhancing his ability to serve a diverse patient base.",
	// 		"Graduating Magna Cum Laude from the School of Dental Medicine at SUNY Buffalo, Dr. Malik earned his Doctor of Dental Surgery (DDS) degree.",
	// 		"He also holds a Bachelor of Dental Surgery (BDS) from the Maulana Azad Institute of Dental Sciences, Delhi University.",
	// 		"His academic journey is adorned with prestigious awards, including the Dr. Lata Shenoy Award and the Hanau Best of the Best Prosthodontics Award.",
	// 		"Dr. Malik's excellence earned him a place in the Omicron Kappa Upsilon, the National Dental Honors Society.",
	// 		"With over a decade of experience, Dr. Malik has mastered various aspects of dentistry, including general dentistry, preventive care, cosmetic dentistry, and restorative treatments.",
	// 		"He is an advocate for same-day dentistry and excels in oral surgery and implantology. Dr. Malik continually enhances his skills through advanced training and staying abreast of the latest dental technologies.",
	// 		"Dr. Malik builds strong, trusting relationships with his patients, providing personalized care tailored to their unique needs. He values patient education, explaining treatment options clearly and addressing any concerns to ensure comfort and understanding.",
	// 		"His commitment to exceptional care means each patient receives individual attention and a comfortable experience, with feasible treatment options presented transparently.",
	// 		"Dr. Malik offers a comprehensive range of dental services. From preventive dentistry, including regular check-ups, cleanings, and dental hygiene education, to restorative dentistry with dental fillings, crowns, bridges, and implants to restore function and aesthetics to damaged teeth.",
	// 		"His expertise in cosmetic dentistry, such as teeth whitening, veneers, and smile makeovers, enhances the appearance of smiles.",
	// 		"He is also skilled in implant surgeries, including freehand, pilot guided, and fully guided implant surgeries with same-day tooth solutions, and advanced implant services like sinus lifts, guided bone regeneration, connective tissue grafts, and ridge augmentation.",
	// 		"Dr. Malik excels in oral surgery, handling moderate to difficult wisdom teeth extractions and other surgical extractions, as well as periodontal surgeries, including clinical crown lengthening, frenotomies, and frenectomies.",
	// 		"Committed to giving back, Dr. Malik actively participates in dental outreach programs, including Remote Area Medical free dental service camps in Tennessee. He strives to provide quality dental care to underserved communities, making a positive impact beyond his practice.",
	// 	],
	// 	description:
	// 		"Dr. Gaurav Malik, DDS, BDS, is a distinguished and compassionate dentist dedicated to providing world-class dental care. With extensive knowledge, a gentle approach, and a commitment to patient comfort, Dr. Malik creates healthy, beautiful smiles that last a lifetime. Born and raised in Delhi, Dr. Malik is trilingual, enhancing his ability to serve a diverse patient base.",
	// 	servicelist: [
	// 		{
	// 			type: "Preventive Dentistry",
	// 			services: [
	// 				"Regular Check-Ups",
	// 				"Cleanings",
	// 				"Dental Hygiene education",
	// 			],
	// 		},
	// 		{
	// 			type: "Restorative Dentistry",
	// 			services: ["Dental Fillings", "Crowns", "Bridges", "Implants"],
	// 		},
	// 		{
	// 			type: "Cosmetic Dentistry",
	// 			services: ["Teeth whitening", "veneers", "smile makeovers"],
	// 		},
	// 		{
	// 			type: "Implant Surgeries",
	// 			services: [
	// 				"Freehand",
	// 				"Pilot guided",
	// 				"Fully guided implant surgeries",
	// 				"Same-day tooth solutions",
	// 			],
	// 		},
	// 		{
	// 			type: "Advanced Implant Services",
	// 			services: [
	// 				"Sinus lifts",
	// 				"guided bone regeneration",
	// 				"connective tissue grafts",
	// 				"ridge augmentation",
	// 			],
	// 		},
	// 		{
	// 			type: "Oral Surgery",
	// 			services: [
	// 				"Wisdom teeth extractions",
	// 				"surgical extractions",
	// 				"periodontal surgeries (clinical crown lengthening, frenotomies, frenectomies)",
	// 			],
	// 		},
	// 	],
	// },
];

export const serviceData = [
	{
		id: 1,
		title: "Full Mouth Reconstruction",
		description:
			"Rejuvenate your oral health with comprehensive full mouth rehabilitation, combining aesthetics and functionality for a complete transformation. Let us craft the smile of your dreams.",
		image: "/images/procedures/full-mouth.jpg",
	},
	{
		id: 2,
		title: "Dental Implants",
		description:
			"Restore functionality and aesthetics with our advanced dental implant solutions. Our expert team ensures seamless integration for a natural-looking smile that lasts a lifetime.",
		image: "/images/procedures/dental-implants.jpg",
	},
	{
		id: 3,
		title: "Cosmetic Dentistry",
		description:
			"Transform your smile with our range of cosmetic dentistry services tailored to enhance your natural beauty. From teeth whitening to porcelain veneers, let us craft the smile of your dreams.",
		image: "/images/procedures/cosmetic-dentistry.jpg",
	},
	{
		id: 4,
		title: "Invisible Braces",
		description:
			"Achieve a flawless smile discreetly with our advanced invisible braces, designed for comfort and effective teeth alignment. Experience the freedom to smile confidently throughout your treatment journey.",
		image: "/images/procedures/invisible-braces.jpg",
	},
	{
		id: 5,
		title: "Facial Pain Cures",
		description:
			"Experience relief from chronic facial pain with our specialized treatments tailored to address the root cause and restore comfort. Let us treat your pain with confidence.",
		image: "/images/procedures/facial-pain.jpg",
	},
	{
		id: 6,
		title: "Teeth Whitening",
		description:
			"Brighten your smile with our professional teeth whitening services, offering safe and effective solutions for a dazzling smile. Experience the freedom to smile confidently throughout your treatment journey.",
		image: "/images/procedures/teeth-white.jpg",
	},
	{
		id: 7,
		title: "Painless Root Canals",
		description:
			"Undergo root canal treatment with ease using our painless techniques, ensuring comfort while saving your natural tooth. Experience the freedom to smile confidently throughout your treatment journey.",
		image: "/images/procedures/painless-rc.jpg",
	},
	{
		id: 8,
		title: "Comprehensive Consultations",
		description:
			"Start your journey to optimal oral health with our thorough and personalized dental consultations, addressing all your concerns. Our team of dentists will assess your needs, discuss your goals, and create a personalized treatment plan to achieve your desired oral health.",
		image: "/images/procedures/comp-consult.jpg",
	},
	{
		id: 9,
		title: "Advanced Gum Treatments",
		description:
			"Protect and rejuvenate your gums with our advanced treatments, ensuring the foundation of your smile remains healthy and strong. Experience the freedom to smile confidently throughout your treatment journey.",
		image: "/images/procedures/adv-gum.jpg",
	},
	{
		id: 10,
		title: "Smile Makeover Consultation",
		description:
			"Begin your journey to a radiant smile with our comprehensive consultation. Our expert dentists will assess your needs, discuss your goals, and create a personalized treatment plan to achieve your dream smile.",
		image: "/images/procedures/smile-makeover.jpg",
	},
	{
		id: 11,
		title: "Digital Smile Designing",
		description:
			"Visualize your new smile before treatment begins with our cutting-edge digital smile design technology. We'll create a virtual mockup of your ideal smile, allowing you to preview and refine your results.",
		image: "/images/procedures/dsd-image.jpg",
	},
	{
		id: 12,
		title: "Gum Contouring",
		description:
			"Enhance your smile's aesthetics by reshaping your gum line. Our precise gum contouring techniques can correct a 'gummy' smile or uneven gum margins, creating a more balanced and attractive smile. Experience the freedom to smile confidently throughout your treatment journey.",
		image: "/images/procedures/gum-contouring.JPG",
	},
	{
		id: 13,
		title: "Tooth Contouring & Reshaping",
		description:
			"Refine your smile with our tooth contouring and reshaping services, creating a harmonious and natural look. Experience the freedom to smile confidently throughout your treatment journey.",
		image: "/images/procedures/tooth-countour.JPG",
	},
	{
		id: 14,
		title: "Lip repositioning Surgery",
		description:
			"Enhance your smile's aesthetics with lip repositioning surgery, tailored to create the perfect balance between teeth and lips. Experience the freedom to smile confidently throughout your treatment journey. Experience the freedom to smile confidently throughout your treatment journey.",
		image: "/images/procedures/lip-repos.jpg",
	},
	{
		id: 15,
		title: "Orthognathic Surgery",
		description:
			"Correct jaw irregularities and enhance facial harmony with our expert orthognathic surgery, improving both function and appearance. Experience the freedom to smile confidently throughout your treatment journey.",
		image: "/images/procedures/orthognathic.jpg",
	},
	{
		id: 16,
		title: "Smile in a Day",
		description:
			"Get a complete smile makeover in just one day with our advanced ‘Smile in a Day’ services, combining efficiency with excellence. Experience the freedom to smile confidently throughout your treatment journey.",
		image: "/images/procedures/smile-1-day.jpg",
	},
];

export const importantLinks = [
	{
		name: "Best Dental Clinic in Gurgaon",
		link: "/gurugram/best-dental-clinic-in-gurgaon-rarity-dental",
	},
	{
		name: "Dental Clinic in Gurgaon",
		link: "/gurugram/dental-clinic-in-gurgaon",
	},
	{
		name: "Dental Clinic in Gurgaon Near Me",
		link: "/gurugram/dental-clinic-in-gurgaon-near-me",
	},
];
export const menuLinks = [
	{
		name: "About Us",
		link: "/about",
	},
	{
		name: "Services",
		link: "/services",
	},
	{
		name: "Blogs",
		link: "/blog",
	},
	{
		name: "Schedule an appointment",
		link: "/contact-us",
	},
	{
		name: "Contact us",
		link: "/contact-us",
	},
];

export const contactLinks = [
	{
		name: "info@raritydental.com",
		link: "#",
		icon: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fimages%2Fmail-icon.svg?alt=media&token=a0d0db7c-3311-4b52-a133-9a8a4c4d7921",
	},
	{
		name: "(+91) 789-9418-483",
		link: "tel:+917899418483",
		icon: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fimages%2Fcall-icon.svg?alt=media&token=561d81e3-1131-4de3-a0a5-e76b2e3cb264",
	},
	{
		name: "www.raritydental.com",
		link: "#",
		icon: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fimages%2Fwebsite-icon.svg?alt=media&token=864c8b58-eafe-473f-88bb-c69214fa961a",
	},
];

export const addressLinks = [
	{
		name: "MON-SAT / 9 AM - 7 PM",
		link: "#",
		icon: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fimages%2Ftimings-icon.svg?alt=media&token=7b25765b-454a-4463-9848-095425fec008",
	},
	{
		name: "42, Ashoka Crescent, Golf Course Road, Gurugram",
		link: "#",
		icon: "https://firebasestorage.googleapis.com/v0/b/casamed-6ec79.appspot.com/o/beyond-dental%2Fimages%2Floc-icon.svg?alt=media&token=a75ee6b8-c396-45ec-bc11-f1864c11f5b8",
	},
];

export const dataImage = [
	"data:image/png;base64,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",
];
