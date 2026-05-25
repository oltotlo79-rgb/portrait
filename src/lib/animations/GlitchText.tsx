"use client";

import { useEffect, useMemo, useRef, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { motionTimings } from "./tokens";
import { cn } from "@/lib/cn";

type GlitchTextProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  seed?: number;
  steps?: number;
  intervalMs?: number;
  amplitudeX?: number;
  amplitudeY?: number;
};

function seededOffset(seed: number, index: number, amplitude: number) {
  const x = Math.sin(seed * 12.9898 + index * 78.233) * 43758.5453;
  return (x - Math.floor(x) - 0.5) * amplitude * 2;
}

export function GlitchText({
  children,
  className,
  style,
  seed = 1,
  steps = 7,
  intervalMs = motionTimings.glitchIntervalMs,
  amplitudeX = 8,
  amplitudeY = 4,
}: GlitchTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const frames = useMemo(
    () =>
      Array.from({ length: steps }, (_, i) => ({
        x: seededOffset(seed, i, amplitudeX),
        y: seededOffset(seed + 17, i, amplitudeY),
      })),
    [amplitudeX, amplitudeY, seed, steps],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;

    let index = 0;
    const id = window.setInterval(() => {
      const frame = frames[index];
      if (!frame) {
        window.clearInterval(id);
        el.style.transform = "translate3d(0, 0, 0)";
        return;
      }
      el.style.transform = `translate3d(${frame.x}px, ${frame.y}px, 0)`;
      index += 1;
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [frames, intervalMs, reduceMotion]);

  return (
    <span
      ref={ref}
      className={cn("inline-block will-change-transform", className)}
      style={{ transition: "transform 0.04s linear", ...style }}
    >
      {children}
    </span>
  );
}

