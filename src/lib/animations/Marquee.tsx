"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
};

export function Marquee({
  children,
  speed = 28,
  reverse = false,
  className,
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        <div className="flex gap-12">{children}</div>
        <div className="flex gap-12" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
