"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function FitnessHero() {
  const glitchRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = glitchRef.current;
    if (!el) return;
    let count = 0;
    const id = setInterval(() => {
      count++;
      if (count > 6) {
        clearInterval(id);
        el.style.transform = "translate(0,0)";
        return;
      }
      const dx = (Math.random() - 0.5) * 8;
      const dy = (Math.random() - 0.5) * 4;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex h-screen min-h-[680px] items-center overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background image */}
      <Image
        src="/images/fitness/01-hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 2px, white 2px, white 3px)",
        }}
        aria-hidden
      />

      {/* Neon glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 80% 10%, rgba(255, 230, 0, 0.3) 0%, transparent 40%), radial-gradient(circle at 10% 90%, rgba(255, 45, 85, 0.25) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      {/* Dark vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.3) 60%, rgba(10,10,10,0.8) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-20">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.4em] text-[#FFE600]"
        >
          24/7 personal training
        </motion.p>

        <h1 className="mt-8 font-[family-name:var(--font-bebas)] leading-[0.82] tracking-[-0.01em]">
          <span
            ref={glitchRef}
            className="block text-[clamp(5rem,18vw,16rem)] text-white"
            style={{ transition: "transform 0.04s" }}
          >
            IGNITE
          </span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="block text-[clamp(5rem,18vw,16rem)] text-[#FFE600]"
          >
            YOUR FIRE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="block -mt-3 text-[clamp(2.5rem,7vw,5rem)] text-white/80"
          >
            again, and again.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex flex-wrap items-center gap-8"
        >
          <p className="max-w-md font-[family-name:var(--font-noto-sans-jp)] text-sm leading-loose text-white/70">
            渋谷・池袋・恵比寿。24時間オープン、パーソナル特化。
            <br />
            コンテスト入賞のトレーナーが、本気で結果にコミットする。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-6 right-6 flex justify-between text-[10px] font-bold uppercase tracking-[0.4em] text-white/60 sm:left-12 sm:right-12 lg:left-20 lg:right-20"
        >
          <span>EST. 2018</span>
          <span className="text-[#FFE600]">SCROLL ↓</span>
          <span>3 STUDIOS · TOKYO</span>
        </motion.div>
      </div>
    </section>
  );
}
