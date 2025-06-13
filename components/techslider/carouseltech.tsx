import { AnimatedCarousel } from "./logo-carousel";

const partnerLogos = [
	{ src: "https://cdn.worldvectorlogo.com/logos/react-2.svg", alt: "React" },
	{ src: "/icons/icons1.svg", alt: "Next.js" },
	{ src: "/icons/mongodb.svg", alt: "MongoDB" },
	{ src: "/icons/vercel.svg", alt: "vercel" },
	{
		src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
		alt: "TypeScript",
	},
	{ src: "/icons/clerkicon.svg", alt: "Clerk-auth" },
	{ src: "/icons/postgresql.svg", alt: "PostgreSQL" },
	{
		src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
		alt: "Tailwind CSS",
	},
	{ src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", alt: "Stripe" },
	{ src: "/icons/javascript.svg", alt: "Javascript" },
	{ src: "/icons/express.svg", alt: "Express.js" },
	{ src: "/icons/supabase.svg", alt: "Supabase" },
	{ src: "/icons/figma.svg", alt: "Figma" },
	{
		src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
		alt: "Framer Motion",
	},
	{ src: "/icons/nodejs.svg", alt: "Nodejs" },
	{ src: "/icons/drizzle.svg", alt: "Drizzle-orm" },
	{ src: "https://cdn.worldvectorlogo.com/logos/sanity.svg", alt: "Sanity" },
	{ src: "/icons/shopify.svg", alt: "shopify" },
];

export const CarouselTech = () => {
	return (
		<div className="w-full  overflow-hidden ">
			<AnimatedCarousel
				title="Powering the Web"
				logos={partnerLogos.map((logo) => logo.src)}
				autoPlay={true}
				autoPlayInterval={2000}
				itemsPerViewMobile={3}
				itemsPerViewDesktop={5}
				logoContainerWidth="w-40"
				logoContainerHeight="h-20"
				logoImageWidth="w-auto"
				logoImageHeight="h-10"
			/>
		</div>
	);
};
