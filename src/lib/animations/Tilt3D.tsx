"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import { motionSpring } from "./tokens";

type Tilt3DProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  /** 最大回転角（deg）。10〜16 が目安 */
  intensity?: number;
  /** 子要素を z 方向に少し浮かせる（深度感アップ）。0 なら無効 */
  raise?: number;
  /** ハイライト（光沢）を上に乗せるか */
  glare?: boolean;
};

/**
 * マウス追従の 3D 傾きカード。
 * - 親要素内に perspective を内包
 * - hover 時のみ反応、leave で 0 にスプリング戻り
 * - reduced-motion ユーザーには Framer の MotionConfig 経由で抑制される
 */
export function Tilt3D({
  children,
  intensity = 10,
  raise = 0,
  glare = false,
  className,
  style,
  ...rest
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0); // -0.5..0.5
  const mouseY = useMotionValue(0);

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity]),
    motionSpring.tilt,
  );
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity]),
    motionSpring.tilt,
  );

  // Glare: 光のホットスポット位置（%）
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.25), transparent 50%)`;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        ...style,
      }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      {...rest}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          translateZ: raise,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
            style={{ background: glareBg }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
