"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type KineticMarqueeProps = {
  items: readonly string[];
  className?: string;
  trackClassName?: string;
  itemClassName?: string;
  separator?: ReactNode;
  durationSeconds?: number;
  direction?: "left" | "right";
  ariaHidden?: boolean;
};

export function KineticMarquee({
  items,
  className,
  trackClassName,
  itemClassName,
  separator = <span className="inline-block size-3 rounded-full bg-current" />,
  durationSeconds = 28,
  direction = "left",
  ariaHidden = true,
}: KineticMarqueeProps) {
  const reduceMotion = useReducedMotion();
  const x = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];
  const renderedItems = [...items, ...items];

  return (
    <section aria-hidden={ariaHidden} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className={cn("flex w-max whitespace-nowrap", trackClassName)}
        animate={reduceMotion ? undefined : { x }}
        transition={{
          duration: durationSeconds,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {renderedItems.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn("mr-12 inline-flex shrink-0 items-center gap-12", itemClassName)}
          >
            <span>{item}</span>
            {separator}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
