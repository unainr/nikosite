import React from "react";
import ServicesPage from "@/components/ServicesComponents";
import { ServicesFAQ } from "@/components/ServicesFAQ";
import { TimelineServices } from "@/components/TimeLine";
import { Metadata } from "next";

const Services = () => {
	return (
		<>
			<>
				<ServicesPage />
				<TimelineServices />
				<ServicesFAQ />
			</>
		</>
	);
};

export default Services;

export const metadata: Metadata = {
  title: "Services - IrvinTechSolution | Tailored Web Development Solutions",
  description: "Explore a range of professional web development services at IrvinTechSolution, including website design, development, SEO, and e-commerce solutions tailored to your business needs.",
  keywords: "Web Development Services, Custom Websites, E-commerce Development, SEO Services, IrvinTechSolution, Digital Marketing",
};
