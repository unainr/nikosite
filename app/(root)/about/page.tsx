import Image from "next/image";
import TechStackSlider from "@/components/TechonologiesSlider";
import { AnimatedTestimonialsDemo } from "@/components/ClientsReview";
import { ServicesFAQ } from "@/components/ServicesFAQ";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
const achievements = [
	{ number: "50+", text: "Projects Completed" },
	{ number: "100%", text: "Client Satisfaction" },
	{ number: "5+", text: "Years Experience" },
	{ number: "10+", text: "Technologies Mastered" },
];

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b ">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
				<div className="space-y-6">
					<h1 className="text-4xl md:text-5xl font-extrabold text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
						Transforming Ideas Into Digital Reality
					</h1>
					<p className="text-xl text-gray-700 dark:text-gray-300 text-center lg:text-left">
						At IrvinTechSolution, we specialize in building exceptional digital
						solutions that bring your visions to life with creativity and
						technical expertise.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{achievements.map((item, index) => (
							<div
								key={index}
								className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
								<div className="text-3xl font-bold text-blue-600">
									{item.number}
								</div>
								<div className="text-sm text-gray-600 dark:text-gray-400">
									{item.text}
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="relative">
					<Image
						src="/images/aboutuspic1.jpg"
						alt="Developer workspace"
						width={500}
						height={500}
						className="rounded-2xl shadow-2xl"
					/>
				</div>
			</div>

			<TechStackSlider />

			<AnimatedTestimonialsDemo />

			<ServicesFAQ />

			{/* CTA Section */}
			<div className="text-center mt-20">
				<h2 className="text-4xl font-extrabold mb-6 text-gradient bg-gradient-to-r from-blue-600 to-purple-600">
					Ready to Build Your Dream Project?
				</h2>
				<p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
					At IrvinTechSolution, we are passionate about delivering tailored
					solutions that exceed expectations. Let’s collaborate to bring your
					vision to life.
				</p>
				<Link href="/contact">
					<Button className="whitespace-nowrap mb-6 border-none text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow relative inline-flex h-11 items-center justify-center rounded-md border border-slate-800 bg-blue-600 px-8 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-blue-700 overflow-hidden">
						<span className="relative z-10 flex flex-row items-center">
							Contact Us Today
						</span>
						<span className="absolute inset-0 z-0 animate-shimmer bg-[linear-gradient(110deg,rgba(255,255,255,0.1),45%,rgba(255,255,255,0.3),55%,rgba(255,255,255,0.1))] bg-[length:200%_100%]"></span>
					</Button>
				</Link>
			</div>
		</div>
	);
}

export const metadata: Metadata = {
	title: "About Us - IrvinTechSolution | Your Trusted Web Development Agency",
	description: "Learn about IrvinTechSolution, a top-rated web development agency delivering innovative and scalable digital solutions. Discover our mission, vision, and commitment to excellence.",
	keywords: "About IrvinTechSolution, Web Development Agency, Digital Solutions, Innovative Websites, Web Development Experts",
  };
  
