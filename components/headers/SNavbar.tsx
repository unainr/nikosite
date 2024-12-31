"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ui/modetoggle";
import Image from "next/image";
import { useTheme } from "next-themes";

const SNavbar = () => {
	const [state, setState] = useState(false);
	const { theme, resolvedTheme } = useTheme(); // Use resolvedTheme for SSR consistency
	const pathname = usePathname(); // Get the current path

	// Ensure the theme is loaded before rendering
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Define your navigation items
	const navigation = [
		{ title: "Home", path: "/" },
		{ title: "About", path: "/about" },
		{ title: "Services", path: "/services" },
		{ title: "Our Project", path: "/project" },
		{ title: "Contact", path: "/contact" },
	];

	// Function to check if the current path matches the navigation path
	const isActive = (path: string) => pathname === path;

	// Prevent rendering issues during hydration
	if (!isMounted) return null;

	return (
		<nav
			className={`bg-white dark:bg-black border-b sticky top-0 backdrop-blur z-30 scroll-p-16 ${
				state
					? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
					: ""
			}`}>
			<div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
				<div className="flex items-center justify-between py-1 md:block">
					<Link href="/">
						<Image
							src={
								resolvedTheme === "dark"
									? "/images/logo2.png"
									: "/images/logo.png"
							}
							className="h-8 mr-3 sm:h-12"
							alt="irvintechsolution-web-development-website-design-seo-digital-marketing"
							width={150}
							height={100}
						/>
					</Link>
					<div className="md:hidden">
						<button
							className="menu-btn text-gray-500 hover:text-gray-800"
							onClick={() => setState(!state)}>
							{state ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="currentColor">
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div
					className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
						state ? "block" : "hidden"
					}`}>
					<ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
						{navigation.map((item, idx) => (
							<li
								key={idx}
								className={`${
									isActive(item.path)
										? resolvedTheme === "dark"
											? "text-indigo-400 font-bold"
											: "text-indigo-600 font-bold"
										: "hover:text-purple-400 dark:hover:text-indigo-300"
								}`}>
								<Link href={item.path}>{item.title}</Link>
							</li>
						))}
					</ul>
					<div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
						<div className="hidden sm:block">
							<ModeToggle />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default SNavbar;
