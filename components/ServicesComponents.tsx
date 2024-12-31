import Image from "next/image";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies like Next.js, React, and TypeScript. Focusing on performance, scalability, and user experience.",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Modern Tech Stack"]
  },
  {
    title: "Frontend Development",
    description: "Creating beautiful, interactive user interfaces with attention to detail. Specializing in modern frontend frameworks and responsive design.",
    icon: "https://cdn-icons-png.flaticon.com/512/1197/1197409.png",
    features: ["UI/UX Implementation", "Animation", "Cross-browser Support", "Mobile-first Design"]
  },
  {
    title: "Full Stack Solutions",
    description: "End-to-end development services from database design to deployment. Building scalable applications with robust backend systems.",
    icon: "https://cdn-icons-png.flaticon.com/512/2010/2010990.png",
    features: ["API Development", "Database Design", "Cloud Integration", "Security Implementation"]
  },
  {
    title: "Technical Consultation",
    description: "Expert advice on technology choices, architecture decisions, and best practices for your web projects.",
    icon: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
    features: ["Architecture Planning", "Tech Stack Selection", "Code Reviews", "Performance Optimization"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Delivering cutting-edge web solutions with a focus on performance, user experience, and modern technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800/50 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-violet-500/50"
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-gray-700 rounded-lg p-2 sm:p-3">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain dark:invert"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-violet-400 transition-colors"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-blue-500 dark:text-violet-500"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
}
