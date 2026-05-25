"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Particle = {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

type AmbientParticlesProps = {
  count?: number;
  seed?: number;
  className?: string;
  particleClassName?: string;
  mode?: "rise" | "drift";
};

function seeded(seed: number, index: number) {
  const x = Math.sin(seed * 12.9898 + index * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function AmbientParticles({
  count = 14,
  seed = 1,
  className,
  particleClassName,
  mode = "rise",
}: AmbientParticlesProps) {
  const reduceMotion = useReducedMotion();
  const safeCount = Math.min(Math.max(count, 0), 24);
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: safeCount }, (_, i) => ({
        x: seeded(seed, i) * 100,
        y: seeded(seed + 9, i) * 100,
        size: 2 + seeded(seed + 19, i) * 5,
        delay: seeded(seed + 29, i) * 6,
        duration: 10 + seeded(seed + 39, i) * 8,
        opacity: 0.25 + seeded(seed + 49, i) * 0.35,
      })),
    [safeCount, seed],
  );

  if (safeCount === 0) return null;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {particles.map((particle, i) => {
        const baseStyle = {
          left: `${particle.x}%`,
          top: mode === "rise" ? "100%" : `${particle.y}%`,
          width: particle.size,
          height: particle.size,
          opacity: reduceMotion ? particle.opacity * 0.45 : undefined,
        };

        if (reduceMotion) {
          return (
            <span
              key={i}
              className={cn("absolute rounded-full", particleClassName)}
              style={baseStyle}
            />
          );
        }

        return (
          <motion.span
            key={i}
            className={cn("absolute rounded-full", particleClassName)}
            style={baseStyle}
            animate={
              mode === "rise"
                ? { y: ["0vh", "-110vh"], opacity: [0, particle.opacity, particle.opacity, 0] }
                : { x: [0, 18, -12, 0], y: [0, -18, 12, 0], opacity: [0, particle.opacity, 0] }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: mode === "rise" ? "linear" : "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

