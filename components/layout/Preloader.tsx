"use client";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center gap-2"
      >
        <Code2 className="h-10 w-10 text-primary" />
        <span className="font-outfit text-4xl font-bold text-foreground">
          TÁRSIS.DEV
        </span>
      </motion.div>
    </motion.div>
  );
};
