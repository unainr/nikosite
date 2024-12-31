"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black/[0.96] relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5" />
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-16">
      <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold tracking-wide uppercase">
        Testimonials
      </h4>
      <h2 className="text-4xl md:text-5xl font-bold mt-2">
        What Our Clients Say
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative h-[400px] sm:h-[500px] w-full">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.src}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom"
            >
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                width={600}
                height={600}
                draggable={false}
                className="h-full w-full rounded-3xl object-cover object-center shadow-xl"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex flex-col justify-between min-h-[400px] p-6 lg:p-8">
        <motion.div
          key={active}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {testimonials[active].name}
            </h3>
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              {testimonials[active].designation}
            </p>
          </div>

          <motion.p className="text-xl text-gray-600 dark:text-neutral-300 leading-relaxed">
            {testimonials[active].quote.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.02 * index }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 hover:from-blue-500/20 hover:to-indigo-500/20 flex items-center justify-center group transition-all duration-300"
          >
            <IconArrowLeft className="h-6 w-6 text-blue-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button
            onClick={handleNext}
            className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 hover:from-blue-500/20 hover:to-indigo-500/20 flex items-center justify-center group transition-all duration-300"
          >
            <IconArrowRight className="h-6 w-6 text-blue-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};
