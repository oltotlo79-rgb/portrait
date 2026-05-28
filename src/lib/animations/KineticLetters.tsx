"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

function seeded(seed: number, index: number, multiplier: number) {
  const x = Math.sin(seed * 12.9898 + index * 78.233) * 43758.5453;
  return (x - Math.floor(x) - 0.5) * 2 * multiplier;
}

type KineticLettersProps = {
  text: string;
  className?: string;
  delay?: number;
  /** "mount" = animate on first render. "inView" = animate when scrolled into view. */
  trigger?: "mount" | "inView";
  triggerOnce?: boolean;
  /** Seed used to derive each letter's scatter offset deterministically (SSR-safe). */
  seed?: number;
  /** Maximum horizontal scatter in px. */
  scatterX?: number;
  /** Maximum vertical scatter in px. */
  scatterY?: number;
  /** Maximum rotation scatter in degrees. */
  scatterRotate?: number;
  /** Delay between letters in seconds. */
  stagger?: number;
  /** Per-letter transition duration in seconds. */
  duration?: number;
};

/**
 * ryden風の文字組立アニメ：
 *   各文字を散らばった位置から本来の位置に飛ばして集合させる。
 *   scatter* は seeded random で各文字ごとに決定論的に計算されるため、
 *   SSR/CSR でハイドレーション不整合は起こさない。
 */
export function KineticLetters({
  text,
  className,
  delay = 0,
  trigger = "inView",
  triggerOnce = true,
  seed = 1,
  scatterX = 200,
  scatterY = 100,
  scatterRotate = 25,
  stagger = 0.04,
  duration = 1.0,
}: KineticLettersProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: triggerOnce, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = trigger === "mount" ? true : isInView;
  const words = useMemo(() => text.split(" "), [text]);

  // SSR + 初回ペイント: motion を一切持たない素のテキストを描画して
  // ハイドレーション差分を発生させない。マウント後に motion 版へ差し替え。
  // visibility:hidden で初期フラッシュを防ぐ（reduceMotion 時は素直に見せる）。
  if (!mounted || reduceMotion) {
    return (
      <span
        ref={ref}
        className={className}
        aria-label={text}
        style={reduceMotion ? undefined : { visibility: "hidden" }}
      >
        {text}
      </span>
    );
  }

  let charIdx = 0;

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => {
        const wordChars = Array.from(word);
        return (
          <Fragment key={wi}>
            <span
              aria-hidden
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {wordChars.map((letter) => {
                const i = charIdx++;
                const offsetX = seeded(seed, i, scatterX);
                const offsetY = seeded(seed + 17, i, scatterY);
                const offsetRot = seeded(seed + 31, i, scatterRotate);

                return (
                  <motion.span
                    key={i}
                    initial={
                      reduceMotion
                        ? { opacity: 1, x: 0, y: 0, rotate: 0 }
                        : {
                            opacity: 0,
                            x: offsetX,
                            y: offsetY,
                            rotate: offsetRot,
                          }
                    }
                    animate={
                      shouldAnimate
                        ? { opacity: 1, x: 0, y: 0, rotate: 0 }
                        : undefined
                    }
                    transition={{
                      duration,
                      delay: delay + i * stagger,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      display: "inline-block",
                      willChange: "transform",
                    }}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </span>
            {wi < words.length - 1 && (
              <span aria-hidden> </span>
            )}
          </Fragment>
        );
      })}
    </span>
  );
}
