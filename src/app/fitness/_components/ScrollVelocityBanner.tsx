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

// マーキー: ITEMS を COPIES 回複製し、wrap は -100/COPIES% で1セット分ぴったり巻き戻す
// → セット同士が完全に重なる位置でリセットされるので継ぎ目が見えない
const COPIES = 4;
const WRAP_PERCENT = -100 / COPIES; // = -25%

export function ScrollVelocityBanner({ baseSpeed = 0.5 }: { baseSpeed?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  const directionRef = useRef(1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionRef.current * baseSpeed * (delta / 16);
    const v = velocityFactor.get();
    // しきい値 0.05 を超えてから方向反転（ぐらつき防止）
    if (v < -0.05) directionRef.current = -1;
    else if (v > 0.05) directionRef.current = 1;
    // velocityで速度を増幅（方向は directionRef に従う）
    moveBy += directionRef.current * Math.abs(moveBy) * Math.abs(v);
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(0, WRAP_PERCENT, v)}%`);

  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-[#FFE600]/30 bg-[#0A0A0A] py-10"
    >
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] tracking-[0.05em] text-[#FFE600]"
      >
        {Array.from({ length: COPIES })
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
