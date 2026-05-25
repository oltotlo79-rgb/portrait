"use client";

import { forwardRef, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/cn";
import { motionSpring } from "./tokens";

type Props = HTMLMotionProps<"button"> & {
  strength?: number;
};

export const MagneticButton = forwardRef<HTMLButtonElement, Props>(
  function MagneticButton(
    { children, className, strength = 0.3, style, ...rest },
    forwardedRef,
  ) {
    const localRef = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, motionSpring.tilt);
    const sy = useSpring(y, motionSpring.tilt);

    return (
      <motion.button
        ref={(node) => {
          localRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        style={{ ...style, x: sx, y: sy }}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full px-8 py-4 font-medium transition-colors",
          className,
        )}
        onMouseMove={(e) => {
          const el = localRef.current;
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const offsetX = e.clientX - (rect.left + rect.width / 2);
          const offsetY = e.clientY - (rect.top + rect.height / 2);
          x.set(offsetX * strength);
          y.set(offsetY * strength);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);
