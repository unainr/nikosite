"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiReact,
    SiLaravel,
    SiPython,
    SiPhp,
    SiDotnet,
    SiWordpress,
    SiShopify,
    SiTailwindcss,
    SiSanity
} from "react-icons/si";

interface Technology {
    name: string;
    icon: JSX.Element;
    color: string;
}

const technologies: Technology[] = [
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl md:text-5xl" />, color: "#ffff" },
    { name: "React", icon: <SiReact className="text-4xl md:text-5xl" />, color: "#61DAFB" },
    { name: "Laravel", icon: <SiLaravel className="text-4xl md:text-5xl" />, color: "#FF2D20" },
    { name: "Python", icon: <SiPython className="text-4xl md:text-5xl" />, color: "#3776AB" },
    { name: "PHP", icon: <SiPhp className="text-4xl md:text-5xl" />, color: "#777BB4" },
    { name: ".NET", icon: <SiDotnet className="text-4xl md:text-5xl" />, color: "#512BD4" },
    { name: "WordPress", icon: <SiWordpress className="text-4xl md:text-5xl" />, color: "#21759B" },
    { name: "Shopify", icon: <SiShopify className="text-4xl md:text-5xl" />, color: "#96BF48" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-4xl md:text-5xl" />, color: "#38BDF8" },
    { name: "Sanity", icon: <SiSanity className="text-4xl md:text-5xl" />, color: "#F03E2F" },
];

export default function TechStackSlider(): JSX.Element {
    const duplicatedTechnologies = [...technologies, ...technologies];

    return (
        <section className="w-full  overflow-hidden ">
            <div className=" mx-auto px-4">
                <div className="relative flex overflow-hidden">
                    <motion.div
                        className="flex space-x-12 md:space-x-16"
                        animate={{
                            x: [0, -2000]
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        {duplicatedTechnologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center space-y-4 group"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-slate-900/50 p-4 
                                             backdrop-blur-sm flex items-center justify-center 
                                             border border-slate-800 group-hover:border-indigo-500/50
                                             shadow-lg shadow-black/5"
                                    style={{ color: tech.color }}
                                    whileHover={{
                                        boxShadow: `0 0 20px ${tech.color}33`,
                                        borderColor: tech.color
                                    }}
                                >
                                    {tech.icon}
                                </motion.div>
                                <span className="text-sm md:text-base font-medium text-slate-400 
                                               group-hover:text-indigo-300 transition-colors duration-200">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
