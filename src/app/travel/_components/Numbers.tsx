"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";

const STATS = [
  { value: 52, suffix: "ヶ国", label: "アレンジ実績国数" },
  { value: 1240, suffix: "件", label: "累計プラン作成" },
  { value: 78, suffix: "%", label: "リピート率" },
  { value: 16, suffix: "年", label: "創業からの歩み" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString();
      },
    });
    return () => controls.stop();
  }, [inView, motionVal, value]);

  return (
    <span className="font-[family-name:var(--font-manrope)] text-[clamp(4rem,11vw,9rem)] font-bold leading-none tracking-tight">
      <span ref={ref}>0</span>
      <span className="ml-2 font-[family-name:var(--font-noto-serif-jp)] text-[0.3em] font-medium text-[#F4B400]">
        {suffix}
      </span>
    </span>
  );
}

export function TravelNumbers() {
  return (
    <section className="relative bg-[#F7F4EE] px-6 py-32 text-[#101820] sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="03" className="text-[#0F4C81]">
          By the Numbers
        </SectionLabel>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-noto-serif-jp)] text-4xl font-bold leading-tight sm:text-5xl">
          数字で見るHORIZON
        </h2>

        <ul className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2">
          {STATS.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border-t border-[#101820]/15 pt-8"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-4 text-sm tracking-[0.05em] text-[#101820]/70">
                {s.label}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
