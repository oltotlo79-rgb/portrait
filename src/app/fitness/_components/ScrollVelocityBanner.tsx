"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
  useAnimationFrame,
} from "framer-motion";

const ITEMS = [
  "NO EXCUSES",
  "PUSH HARDER",
  "BURN BRIGHT",
  "FAIL · ADJUST · WIN",
  "BUILT IN TOKYO",
];

export function ScrollVelocityBanner({ baseSpeed = 0.5 }: { baseSpeed?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  const directionRef = useRef(1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionRef.current * baseSpeed * (delta / 16);
    if (velocityFactor.get() < 0) directionRef.current = -1;
    else if (velocityFactor.get() > 0) directionRef.current = 1;
    moveBy += directionRef.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-[#FFE600]/30 bg-[#0A0A0A] py-10"
    >
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] tracking-[0.05em] text-[#FFE600]"
      >
        {Array.from({ length: 6 })
          .flatMap(() => ITEMS)
          .map((t, i) => (
            <Token key={i} label={t} />
          ))}
      </motion.div>
    </section>
  );
}

function Token({ label }: { label: string }) {
  return (
    <span className="mr-12 inline-flex items-center gap-12">
      <span>{label}</span>
      <Dot />
    </span>
  );
}
function Dot() {
  return (
    <span className="inline-block size-3 rounded-full bg-[#FF2D55]" aria-hidden />
  );
}

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}
