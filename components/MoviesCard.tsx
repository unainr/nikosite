import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
interface Portfolio {
	_id: string;
	name: string;
	description: string;
	portfolioimage: {
		url: string;
	}[];
	slug: {
		current: string;
	};
	portofoliolink: string;
}
const PortfolioCard = ({ portfolio }: { portfolio: Portfolio }) => {
	const { name, description, portfolioimage, slug, portofoliolink } = portfolio;

	return (
		<div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
			{/* Image Section with Overlay */}
			<div className="relative h-72 overflow-hidden">
				<Image
					src={portfolioimage[0].url}
					alt={`${name} preview`}
                    width={500}
                    height={500}
					className="transform group-hover:scale-110 transition-transform duration-700 ease-out"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>

			{/* Content Section */}
			<div className="p-8 flex-1 flex flex-col">
				{/* Title with Accent Line */}
				<div className="relative mb-6">
					<div className="h-1 w-16 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mb-4" />
					<h2 className="text-2xl font-bold text-gray-800 dark:text-white min-h-[2rem]">
						{name}
					</h2>
				</div>

				{/* Description */}
				<p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-2 leading-relaxed flex-1 min-h-[3rem]">
					{description}
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
					{portofoliolink && (
						<Link
							href={portofoliolink}
							target="_blank"
							rel="noopener noreferrer">
							<Button className="whitespace-nowrap border-none text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow relative inline-flex h-11 items-center justify-center rounded-md border border-slate-800 bg-blue-600 px-8 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-blue-700 overflow-hidden">
								<span className="relative z-10 flex flex-row items-center">
									View
								</span>
								<span className="absolute inset-0 z-0 animate-shimmer bg-[linear-gradient(110deg,rgba(255,255,255,0.1),45%,rgba(255,255,255,0.3),55%,rgba(255,255,255,0.1))] bg-[length:200%_100%]"></span>
							</Button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
