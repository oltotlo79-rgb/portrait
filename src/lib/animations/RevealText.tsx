"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "./variants";

type RevealTextProps = {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: "char" | "word";
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export function RevealText({
  text,
  className,
  delay = 0,
  splitBy = "word",
  as = "span",
}: RevealTextProps) {
  const parts = splitBy === "char" ? Array.from(text) : text.split(/(\s+)/);
  const Component = motion[as];

  return (
    <Component
      className={className}
      style={{ display: "inline-block" }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        show: {
          transition: { staggerChildren: 0.035, delayChildren: delay },
        },
      }}
    >
      {parts.map((part, i) => {
        if (part.match(/^\s+$/)) {
          return <span key={i}>{part}</span>;
        }
        return (
          <span
            key={i}
            style={{ display: "inline-block", overflow: "hidden" }}
          >
            <motion.span
              style={{ display: "inline-block", willChange: "transform" }}
              variants={{
                hidden: { y: "110%" },
                show: {
                  y: "0%",
                  transition: { duration: 0.9, ease: EASE_OUT_EXPO },
                },
              }}
            >
              {part}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}
