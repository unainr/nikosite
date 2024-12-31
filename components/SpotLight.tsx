"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/button";
import Link from "next/link";

export function SpotlightPreview() {
	const words = [
		"Full-Stack Solutions",
		"Laravel Development",
		"Shopify E-commerce",
		"WordPress + WooCommerce",
		"PHP Development",
		"Python Scraping",
		"Next.js + Sanity Apps",
		"React + Tailwind",
		"Data Extraction",
		".NET Applications",
		"API Integration",
		"Custom Development",
		"Performance Tuning",
		"Database Solutions",
		"Web Automation",
	];

	return (
		<div className="h-[40rem] w-full flex md:items-center md:justify-center relative overflow-hidden bg-white dark:bg-black/[0.96]">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="currentColor"
			/>
			<div className="relative">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 blur-3xl animate-pulse" />
			</div>
			<div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
				<div className="flex flex-col items-center justify-center gap-8">
					<div className="space-y-6 text-center">
						<h1 className="text-4xl md:text-7xl font-bold tracking-tighter">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-400 to-slate-800 dark:from-blue-500 dark:via-indigo-300 dark:to-slate-100 animate-gradient drop-shadow-2xl">
								Web Development Mastery
							</span>
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold leading-tight">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-300 dark:to-purple-300">
								Delivering{" "}
							</span>
							<FlipWords words={words} />
						</h2>
					</div>

					<p className="font-medium text-lg md:text-xl text-slate-600 dark:text-indigo-200/90 max-w-3xl text-center mx-auto leading-relaxed backdrop-blur-sm">
						From web development to data automation, we create powerful digital
						solutions that drive business growth and innovation.
					</p>

					<div className="flex flex-col items-center sm:flex-row gap-8 mt-4">
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
				</div>
			</div>
		</div>
	);
}
