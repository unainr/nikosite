import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold tracking-wide uppercase">
            Our Expertise
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Professional{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
              Experience
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Delivering cutting-edge solutions across multiple technology domains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {workExperience.map((card: any) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundImage:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
              className="w-full text-black dark:text-white border-neutral-200 dark:border-slate-800 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 lg:p-8 gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={card.thumbnail}
                    alt={`${card.title} thumbnail`}
                    className="w-16 sm:w-20 lg:w-24 xl:w-28 object-contain max-w-full"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight mb-2">
                    {card.title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/80 font-medium line-clamp-3">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
