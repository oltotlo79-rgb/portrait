import type { SpringOptions } from "framer-motion";

export const motionDurations = {
  instant: 0.15,
  fast: 0.35,
  normal: 0.7,
  slow: 1.1,
  scene: 1.6,
} as const;

export const motionStaggers = {
  tight: 0.035,
  normal: 0.08,
  loose: 0.16,
} as const;

export const motionViewport = {
  early: { amount: 0.2 },
  normal: { amount: 0.35 },
  late: { amount: 0.55 },
} as const;

export const motionSpring = {
  soft: { damping: 28, stiffness: 220, mass: 0.5 },
  snappy: { damping: 24, stiffness: 420, mass: 0.35 },
  tilt: { damping: 18, stiffness: 200, mass: 0.4 },
  cursor: { damping: 28, stiffness: 320, mass: 0.4 },
  cursorDot: { damping: 50, stiffness: 800, mass: 0.2 },
} satisfies Record<string, SpringOptions>;

export const motionTimings = {
  defaultSceneIntervalMs: 5400,
  glitchIntervalMs: 90,
} as const;

