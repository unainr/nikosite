"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "sonner";
import { queryform } from "@/lib/actions/form";
import { Button } from "./ui/button";

const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData(formRef.current!);
		const toastid = toast.loading("Submitting in");
		try {
			const response = await queryform(formData);
			if (response.success) {
				toast.success(response.message, { id: toastid });
				formRef.current?.reset();
			} else {
				toast.error(response.message, { id: toastid });
			}
		} catch (error: any) {
			const errorMessage =
				error.cause || "Failed to submit the form. Please try again.";
			toast.error("Something went wrong. Please try again.", { id: toastid });
		}
	};
	return (
		<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black/[0.96] relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5" />

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="text-center space-y-4 mb-16">
					<h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold tracking-wide uppercase">
						Get in Touch
					</h4>
					<h1 className="text-4xl md:text-5xl font-bold">
						Let's Build Something
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
							{" "}
							Amazing Together
						</span>
					</h1>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Contact Info Cards */}
					<div className="space-y-6">
						{[
							{
								icon: <FaEnvelope className="text-2xl" />,
								title: "Email",
								details: "info@irvintechsolution.com",
								subtitle: "Write us anytime",
							},
							{
								icon: <FaPhone className="text-2xl" />,
								title: "Phone",
								details: "+971556150140 +254722104888",
								subtitle: "Mon-Fri 9am-6pm",
							},
							{
								icon: <FaMapMarkerAlt className="text-2xl" />,
								title: "Office",
								details:
									"P. O.Box 16526-80100 Mombasa, Kenya P.o.box 12694 sharjah UAE",
								subtitle: "Come say hello",
							},
						].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300">
								<div className="flex items-center space-x-4">
									<div className="text-blue-600 dark:text-blue-500">
										{item.icon}
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
											{item.title}
										</h3>
										<p className="text-gray-600 dark:text-gray-400">
											{item.details}
										</p>
										<p className="text-sm text-gray-500 dark:text-gray-500">
											{item.subtitle}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="lg:col-span-2 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
						<form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Your Name
									</label>
									<input
										type="text"
										name="name"
										className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="name"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Your Email
									</label>
									<input
										type="email"
										name="email"
										className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="person@example.com"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Subject
								</label>
								<input
									type="text"
									name="subject"
									className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="Project Discussion"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Message
								</label>
								<textarea
									name="message"
									rows={6}
									className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="Your message..."
								/>
							</div>

							<Button className="whitespace-nowrap w-full border-none text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow relative inline-flex h-11 items-center justify-center rounded-md border border-slate-800 bg-blue-600 px-8 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-blue-700 overflow-hidden">
								<span className="relative z-10 flex flex-row items-center">
									Send Message
								</span>
								<span className="absolute inset-0 z-0 animate-shimmer bg-[linear-gradient(110deg,rgba(255,255,255,0.1),45%,rgba(255,255,255,0.3),55%,rgba(255,255,255,0.1))] bg-[length:200%_100%]"></span>
							</Button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
