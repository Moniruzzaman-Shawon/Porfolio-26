"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function StaggerContainer({
  children,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
