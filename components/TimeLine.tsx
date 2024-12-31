import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineServices() {
    const data = [
        {
            title: "SERVICES",
            content: (
                <div className="w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                            {/* Web Development */}
                            <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    <div className="p-3 bg-purple-600/20 rounded-lg shrink-0">
                                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg sm:text-xl font-bold text-white">
                                            Full-Stack Development
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                            Building scalable web applications using Next.js, React, and Node.js with modern architecture and best practices.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* UI/UX Design */}
                            <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    <div className="p-3 bg-purple-600/20 rounded-lg shrink-0">
                                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg sm:text-xl font-bold text-white">
                                            UI/UX Design
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                            Creating intuitive and beautiful user interfaces with Tailwind CSS and modern design principles.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "TECHNOLOGIES",
            content: (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {/* Frontend */}
                        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
                            <div className="space-y-2">
                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                    Frontend Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2 pt-3">
                                    <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
                                        Next.js
                                    </span>
                                    <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
                                        React
                                    </span>
                                    <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
                                        Tailwind CSS
                                    </span>
                                    <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
                                        TypeScript
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
                            <div className="space-y-2">
                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                    Backend Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2 pt-3">
                                    <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
                                        Node.js
                                    </span>
                                    <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
                                        Express
                                    </span>
                                    <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
                                        MongoDB
                                    </span>
                                    <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
                                        PostgreSQL
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "FEATURED PROJECTS",
            content: (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {/* Project 1 */}
                        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
                            <div className="space-y-2">
                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                    E-commerce Platform
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                    Modern e-commerce solution with real-time inventory, secure payments, and analytics dashboard.
                                </p>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-purple-500/50">
                            <div className="space-y-2">
                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                    Content Management System
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                    Custom CMS with dynamic content handling, user management, and SEO optimization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
