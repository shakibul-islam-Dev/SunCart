"use client";
import { motion } from "framer-motion";

export const AnimatedCard = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    className={className}
  >
    {children}
  </motion.div>
);
