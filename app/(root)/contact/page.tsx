import React from "react";
import ContactForm from "@/components/ContactUs";
import { Metadata } from "next";

const Contact = () => {
	return (
		<div className="container mx-auto px-4 my-20">
			<div className="text-center ">
				<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-6">
					Contact Us
				</h1>
			</div>
			<ContactForm />
		</div>
	);
};

export default Contact;

export const metadata: Metadata = {
	title: "Contact Us - IrvinTechSolution | Let's Build Your Dream Website",
	description: "Get in touch with IrvinTechSolution for top-notch web development services. Reach out to our team for inquiries, consultations, or project collaborations today!",
	keywords: "Contact IrvinTechSolution, Web Development Agency Contact, Inquiries, Consultations, Website Development Support",
  };
  