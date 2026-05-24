"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "framer-motion";

const SPRING: SpringOptions = { damping: 28, stiffness: 320, mass: 0.4 };
const SPRING_DOT: SpringOptions = { damping: 50, stiffness: 800, mass: 0.2 };

type CursorState = "default" | "link" | "text";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, SPRING);
  const ringY = useSpring(y, SPRING);
  const dotX = useSpring(x, SPRING_DOT);
  const dotY = useSpring(y, SPRING_DOT);

  const [state, setState] = useState<CursorState>("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // タッチ端末では表示しない
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    // reduced-motion でも基本動作はOK（spring は控えめになる）
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest(
          'a, button, [role="button"], [data-cursor="link"], input, select, textarea, label',
        )
      ) {
        setState("link");
      } else if (target.closest('p, h1, h2, h3, h4, h5, h6, span, li, [data-cursor="text"]')) {
        setState("text");
      } else {
        setState("default");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.classList.add("cursor-none-active");

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("cursor-none-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringScale = state === "link" ? 2.4 : state === "text" ? 0.6 : 1;
  const dotScale = state === "link" ? 0 : 1;

  return (
    <>
      {/* Outer ring — lags */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        animate={{ scale: ringScale }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div className="size-8 rounded-full border border-white mix-blend-difference" />
      </motion.div>
      {/* Inner dot — snappy */}
      <motion.div
        aria-hidden
        style={{ x: dotX, y: dotY }}
        animate={{ scale: dotScale }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div className="size-1.5 rounded-full bg-white mix-blend-difference" />
      </motion.div>
    </>
  );
}
