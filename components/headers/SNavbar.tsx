"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../ui/modetoggle";
import Image from "next/image";
export default function MainHeader() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const pathname = usePathname();
	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-200 ${
				isScrolled ? "bg-background/60 backdrop-blur-md" : ""
			}`}>
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				<Link href="/">
					<Image
						src="/images/logo2.png"
						className="h-8 w-auto md:h-9 object-contain"
						alt="irvintechsolution-web-development-website-design-seo-digital-marketing"
						width={160}
						height={36}
						priority
					/>
				</Link>
				<nav className="hidden gap-6 md:flex justify-center items-center">
					<Link
						href="/"
						className={`text-sm font-medium ${
							pathname === "/"
								? "text-blue-500"
								: "text-gray-500 dark:text-white"
						} hover:text-blue-600`}>
						Home
					</Link>
					<Link
						href="/about"
						className={`text-sm font-medium ${
							pathname === "/about"
								? "text-blue-500"
								: "text-gray-500 dark:text-white"
						} hover:text-blue-600`}>
						About
					</Link>
					<Link
						href="/services"
						className={`text-sm font-medium ${
							pathname === "/services"
								? "text-blue-500"
								: "text-gray-500 dark:text-white"
						} hover:text-blue-600`}>
						Services
					</Link>
					<Link
						href="/project"
						className={`text-sm font-medium ${
							pathname === "/project"
								? "text-blue-500"
								: "text-gray-500 dark:text-white"
						} hover:text-blue-600`}>
						Our Projects
					</Link>
					<Link
						href="/contact"
						className={`text-sm font-medium ${
							pathname === "/contact"
								? "text-blue-500"
								: "text-gray-500 dark:text-white"
						} hover:text-blue-600`}>
						Contact
					</Link>
				</nav>
				<div className="hidden gap-4 md:flex">
					<ModeToggle />
				</div>
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon" className="md:hidden">
							<Menu className="h-6 w-6" />
						</Button>
					</SheetTrigger>
					<SheetContent>
						<nav className="flex flex-col gap-4 items-center justify-center">
							<Link
								href="/"
								className={`text-sm font-medium ${
									pathname === "/" ? "text-primary" : ""
								}`}>
								Home
							</Link>
							<Link
								href="/about"
								className={`text-sm font-medium ${
									pathname === "/about" ? "text-primary" : ""
								}`}>
								About
							</Link>
							<Link
								href="/services"
								className={`text-sm font-medium ${
									pathname === "/services" ? "text-primary" : ""
								}`}>
								Services
							</Link>
							<Link
								href="/projects"
								className={`text-sm font-medium ${
									pathname === "/projects" ? "text-primary" : ""
								}`}>
								Our Project
							</Link>
							<Link
								href="/contact"
								className={`text-sm font-medium ${
									pathname === "/contact" ? "text-primary" : ""
								}`}>
								Contact
							</Link>
							<ModeToggle />
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
