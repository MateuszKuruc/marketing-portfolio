"use client";
import { motion } from "framer-motion";

const variant = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },

  // hidden: { opacity: 0, scale: 0.8 },
  // enter: { opacity: 1, scale: 1 },
};

const transition = {
  duration: 0.6,
  ease: "easeInOut",
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variant}
      initial="hidden"
      animate="enter"
      transition={transition}
    >
      {children}
    </motion.main>
  );
}
