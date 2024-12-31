"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export function About() {
	return (
		<section className="w-full my-16 bg-white dark:bg-black/[0.96] relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5" />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      {/* Left Section: Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden group">
          <Image
            src="/images/aboutuspic.jpg" // Professional development environment
            alt="Web Development Excellence"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-transparent to-transparent opacity-90" />
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
            <h4 className="text-white font-bold text-lg md:text-2xl mb-2">
              Full-Stack Development Excellence
            </h4>
            <p className="text-white/90 text-sm md:text-base">
              Transforming Ideas into Powerful Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Right Section: Content */}
      <div className="w-full lg:w-1/2 space-y-8">
        {/* Heading */}
        <div className="space-y-4">
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold tracking-wide uppercase text-sm md:text-base">
            About Our Vision
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
              Transforming Ideas into
            </span>
            <br />
            <span className="text-gray-800 dark:text-white">
              Digital Reality
            </span>
          </h2>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300">
          <p>
            We specialize in crafting bespoke digital solutions that elevate businesses to new heights. Our expertise spans across modern web technologies, ensuring scalable, efficient, and innovative solutions for every project.
          </p>
          <p>
            From concept to deployment, we're committed to delivering excellence through cutting-edge development practices and creative problem-solving approaches.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "200+", label: "Projects Completed" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "Expert Support" },
            { number: "100%", label: "Success Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 backdrop-blur-sm border border-blue-100/20 dark:border-blue-700/20">
              <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                {stat.number}
              </h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
          <Link href="/contact">
            <Button className="w-full sm:w-auto whitespace-nowrap border-none text-sm md:text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow relative inline-flex h-11 items-center justify-center rounded-full border border-slate-800 bg-blue-600 px-6 md:px-8 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-blue-700 overflow-hidden">
              <span className="relative z-10 flex flex-row items-center">
                Start Your Journey
              </span>
              <span className="absolute inset-0 z-0 animate-shimmer bg-[linear-gradient(110deg,rgba(255,255,255,0.1),45%,rgba(255,255,255,0.3),55%,rgba(255,255,255,0.1))] bg-[length:200%_100%]" />
            </Button>
          </Link>
          <Link href="/services">
            <Button className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-full border-2 border-indigo-500/30 bg-transparent px-6 md:px-8 font-medium text-indigo-500 text-sm md:text-base transition-all duration-300 hover:scale-105 hover:bg-indigo-500/10 hover:border-indigo-400/50">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

	);
}
