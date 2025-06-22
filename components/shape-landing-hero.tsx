"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { FlipWords } from "./ui/flip-words";
import Link from "next/link";
import { Button } from "./ui/button";
import { words } from "@/data";

function ElegantShape({
	className,
	delay = 0,
	width = 400,
	height = 100,
	rotate = 0,
	gradient = "from-white/[0.08]",
}: {
	className?: string;
	delay?: number;
	width?: number;
	height?: number;
	rotate?: number;
	gradient?: string;
}) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: -150,
				rotate: rotate - 15,
			}}
			animate={{
				opacity: 1,
				y: 0,
				rotate: rotate,
			}}
			transition={{
				duration: 2.4,
				delay,
				ease: [0.23, 0.86, 0.39, 0.96],
				opacity: { duration: 1.2 },
			}}
			className={cn("absolute", className)}>
			<motion.div
				animate={{
					y: [0, 15, 0],
				}}
				transition={{
					duration: 12,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				style={{
					width,
					height,
				}}
				className="relative">
				<div
					className={cn(
						"absolute inset-0 rounded-full",
						"bg-gradient-to-r to-transparent",
						gradient,
						"backdrop-blur-[2px] border-2 border-white/[0.15]",
						"shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
						"after:absolute after:inset-0 after:rounded-full",
						"after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
					)}
				/>
			</motion.div>
		</motion.div>
	);
}

function HeroGeometric({
	badge = "Design Collective",
	title1 = "Elevate Your Digital Vision",
}: {
	badge?: string;
	title1?: string;
	title2?: string;
}) {
	const fadeUpVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.5 + i * 0.2,
				ease: [0.25, 0.4, 0.25, 1],
			},
		}),
	};


	return (
		<div className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden py-20 sm:py-32">
			<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
			<div className="absolute inset-0 overflow-hidden">
				<ElegantShape
					delay={0.3}
					width={600}
					height={140}
					rotate={12}
					gradient="from-indigo-500/[0.15]"
					className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
				/>

				<ElegantShape
					delay={0.5}
					width={500}
					height={120}
					rotate={-15}
					gradient="from-rose-500/[0.15]"
					className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
				/>

				<ElegantShape
					delay={0.4}
					width={300}
					height={80}
					rotate={-8}
					gradient="from-violet-500/[0.15]"
					className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
				/>

				<ElegantShape
					delay={0.6}
					width={200}
					height={60}
					rotate={20}
					gradient="from-amber-500/[0.15]"
					className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
				/>

				<ElegantShape
					delay={0.7}
					width={150}
					height={40}
					rotate={-25}
					gradient="from-cyan-500/[0.15]"
					className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
				/>
			</div>

			<div className="relative z-10 container mx-auto px-4 md:px-6">
				<div className="max-w-full mx-auto text-center">
					<motion.div
						custom={0}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
						className="inline-flex items-center gap-2 px-3   rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-5">
						<Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span className="text-sm tracking-wide relative overflow-hidden animate-shimmer bg-[linear-gradient(110deg,rgba(255,255,255,0.3),45%,rgba(255,255,255,0.8),55%,rgba(255,255,255,0.3))] bg-clip-text text-transparent bg-[length:200%_100%] font-medium">
              {badge}
            </span>
					</motion.div>

					<motion.div
						custom={1}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible">
						<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-4 tracking-tight">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-400 to-slate-800 dark:from-blue-500 dark:via-indigo-300 dark:to-slate-100 animate-gradient drop-shadow-2xl">
								{title1}
							</span>
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold leading-tight">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-300 dark:to-purple-300">
								Delivering{" "}
							</span>
							<FlipWords words={words} />
						</h2>
					</motion.div>

					<motion.div
						custom={2}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
						className="my-3">
						<p className="font-medium text-lg md:text-xl text-slate-600 mb-5 dark:text-indigo-200/90 max-w-3xl text-center mx-auto leading-relaxed backdrop-blur-sm">
							From web development to data automation, we create powerful
							digital solutions that drive business growth and innovation.
						</p>
						<div className="flex flex-col items-center justify-center sm:flex-row gap-8 mt-4">
							<Link href="/contact">
								<Button className="whitespace-nowrap border-none text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow relative inline-flex h-11 items-center justify-center rounded-full border border-slate-800 bg-blue-600 px-8 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-blue-700 overflow-hidden">
									<span className="relative z-10 flex flex-row items-center">
										Start Your Project
									</span>
									<span className="absolute inset-0 z-0 animate-shimmer bg-[linear-gradient(110deg,rgba(255,255,255,0.1),45%,rgba(255,255,255,0.3),55%,rgba(255,255,255,0.1))] bg-[length:200%_100%]"></span>
								</Button>
							</Link>
							<Link href="/project">
								<Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border-2 border-indigo-500/30 bg-transparent px-8 font-medium text-indigo-400 [animation-duration:2.5s] transition-all duration-300 hover:scale-105 hover:bg-indigo-500/10 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
									Explore Work
								</Button>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
		</div>
	);
}

export { HeroGeometric };
