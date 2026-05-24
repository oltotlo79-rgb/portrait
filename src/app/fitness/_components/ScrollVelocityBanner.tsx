"use client";

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

// マーキー: ITEMS を COPIES 回複製し、translateX を 0% → -100/COPIES% でループさせる。
// COPIES 個のセットが完全に重なる位置でリセットされるため継ぎ目が見えない。
const COPIES = 4;
const LOOP_PERCENT = 100 / COPIES; // = 25%

// 連続的に [0, modulus) へ正規化する modulo（負数も自然に巻き戻る）
function wrap(value: number, modulus: number) {
  return ((value % modulus) + modulus) % modulus;
}

export function ScrollVelocityBanner({
  baseSpeed = 0.6,
}: {
  baseSpeed?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  // スクロール速度を 0..3 倍に丸める（負方向もスピードとして扱う）
  const velocityFactor = useTransform(
    smoothVelocity,
    [-1500, 0, 1500],
    [3, 0, 3],
    { clamp: false },
  );

  // 方向反転はしない（常に左流れ）。スクロール速度は速度倍率として加算するだけ。
  useAnimationFrame((_t, delta) => {
    const v = Math.max(0, velocityFactor.get());
    const moveBy = baseSpeed * (delta / 16) * (1 + v);
    baseX.set(baseX.get() + moveBy);
  });

  // baseX を [0, 25) にラップして負方向の translate に変換 → 常に左へ流れる
  const x = useTransform(baseX, (v) => `${-wrap(v, LOOP_PERCENT)}%`);

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
