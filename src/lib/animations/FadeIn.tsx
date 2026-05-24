"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp } from "./variants";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  amount?: number;
  once?: boolean;
};

export function FadeIn({
  children,
  delay = 0,
  amount = 0.3,
  once = true,
  className,
  ...rest
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
