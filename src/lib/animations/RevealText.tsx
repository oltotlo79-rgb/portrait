"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "./variants";
import { motionDurations, motionStaggers } from "./tokens";

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
  // splitBy="word" でもスペースを含まない（日本語等）場合は char モードに自動フォールバック
  // → 各文字が独立した inline-block になり、自然な行内折り返しが効く
  const hasWhitespace = /\s/.test(text);
  const effectiveSplit = splitBy === "word" && !hasWhitespace ? "char" : splitBy;
  const parts =
    effectiveSplit === "char" ? Array.from(text) : text.split(/(\s+)/);
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        show: {
          transition: { staggerChildren: motionStaggers.tight, delayChildren: delay },
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
            style={{
              display: "inline-block",
              overflow: "hidden",
              paddingInline: "0.1em",
              marginInline: "-0.1em",
            }}
          >
            <motion.span
              style={{ display: "inline-block", willChange: "transform" }}
              variants={{
                hidden: { y: "110%" },
                show: {
                  y: "0%",
                  transition: { duration: motionDurations.slow, ease: EASE_OUT_EXPO },
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
