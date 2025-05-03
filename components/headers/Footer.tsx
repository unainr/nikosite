"use client";

import Link from "next/link";
import {
	FaWhatsapp,
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaArrowUp,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
const Footer = () => {
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			{/* Fixed Buttons */}
			<Link
				href="https://wa.me/971556150140"
				className="fixed bottom-8 left-8 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
				target="_blank">
				<FaWhatsapp className="text-white text-3xl" />
			</Link>

			<button
				onClick={scrollToTop}
				className={`fixed bottom-8 right-8 z-50 bg-blue-600 p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
					showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
				}`}>
				<FaArrowUp className="text-white text-2xl" />
			</button>

			<footer className="bg-white dark:bg-black/[0.96] border-t dark:border-neutral-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
						{/* Brand Section */}
						<div className="space-y-4">
							<Image
								src={"/images/logo2.png"}
								className="h-8 mr-3 sm:h-12"
								alt="irvintechsolution-web-development-website-design-seo-digital-marketing"
								width={150}
								height={100}
							/>
							<p className="text-gray-600 dark:text-gray-400 max-w-xs">
								Transforming ideas into powerful digital solutions. Building the
								future of web development.
							</p>
							<div className="flex space-x-4">
								<Link
									href="https://github.com/yourusername"
									target="_blank"
									className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
									<FaGithub size={24} />
								</Link>
								<Link
									href="https://www.linkedin.com/in/muhammad-moaiz-282373335/"
									target="_blank"
									className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
									<FaLinkedin size={24} />
								</Link>
								<Link
									href="https://twitter.com/yourusername"
									target="_blank"
									className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
									<FaTwitter size={24} />
								</Link>
							</div>
						</div>

						{/* Services */}
						<div>
							<h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
								Services
							</h4>
							<ul className="space-y-3">
								{[
									"Web Development",
									"E-commerce Solutions",
									"Digital Marketing",
									"API Integration",
									"Forex Investment Services",
								].map((service) => (
									<li key={service}>
										<Link
											href="/services"
											className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
											{service}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Quick Links */}
						<div>
							<h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
								Quick Links
							</h4>
							<ul className="space-y-3">
								
									<li >
										<Link
											href="/"
											className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
											Home
										</Link>
									</li>
									<li >
										<Link
											href="/about"
											className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
											About
										</Link>
									</li>
									<li >
										<Link
											href="/services"
											className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
											Services
										</Link>
									</li>
									<li >
										<Link
											href="/project"
											className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
											Our Project
										</Link>
									</li>
									<li >
										<Link
											href="/contact"
											className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
											Contact
										</Link>
									</li>
							</ul>
						</div>

						{/* Contact Info */}
						<div>
							<h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
								Contact
							</h4>
							<ul className="space-y-3 text-gray-600 dark:text-gray-400">
								<li>Email: info@irvintechsolution.com</li>
								<li>Phone: +971556150140</li>
								<li>Phone: +254722104888</li>
								<li>
								54 STATE STREET, STE 804 #13596
								ALBANY , NY 12207
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="border-t dark:border-neutral-800 mt-12 pt-8">
						<div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
							<p className="text-gray-600 dark:text-gray-400">
								© {new Date().getFullYear()} Irvintechsolution. All rights reserved.
							</p>
							<div className="flex space-x-6">
								<Link
									href="/about"
									className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
									Privacy Policy
								</Link>
								<Link
									href="/services"
									className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
									Terms of Service
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
