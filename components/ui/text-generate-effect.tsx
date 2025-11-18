"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import React from "react";

type Props = {
  words: string;
  className?: string;

  staggerDelay?: number;
};

export const TextGenerateEffect: React.FC<Props> = ({
  words,
  className,
  staggerDelay = 0.08,
}) => {
  const wordsArray = words ? words.split(" ") : [];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,

        ease: [0.22, 0.8, 0.2, 1],
      },
    },
  };

  return (
    <div className={cn("font-normal leading-relaxed", className)}>
      <div className="mt-4">
        <div className="text-xl leading-snug tracking-wide">
          {}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
            aria-hidden={false}
          >
            {wordsArray.map((word, idx) => (
              <motion.span
                key={`${word}-${idx}`}
                className="inline-block mr-2"
                variants={wordVariants}
                aria-hidden={false}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
