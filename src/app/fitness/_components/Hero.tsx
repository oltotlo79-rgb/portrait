"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Dumbbell, Gauge, MapPin } from "lucide-react";
import { GlitchText } from "@/lib/animations";

const HERO_METRICS = [
  { label: "Studios", value: "3", icon: MapPin },
  { label: "Open", value: "24h", icon: Gauge },
  { label: "Trial", value: "60m", icon: Dumbbell },
];

export function FitnessHero() {
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
          <GlitchText
            seed={247}
            steps={6}
            amplitudeX={8}
            amplitudeY={4}
            className="block text-[clamp(5rem,18vw,16rem)] text-white"
          >
            IGNITE
          </GlitchText>
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
          className="mt-16 flex flex-wrap items-end gap-8"
        >
          <p className="max-w-md font-[family-name:var(--font-noto-sans-jp)] text-sm leading-loose text-white/70">
            渋谷・池袋・恵比寿。24時間オープン、パーソナル特化。
            <br />
            コンテスト入賞のトレーナーが、本気で結果にコミットする。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/fitness/contact"
              className="inline-flex items-center gap-2 bg-[#FFE600] px-6 py-3 font-[family-name:var(--font-bebas)] text-xl tracking-[0.18em] text-black transition-transform hover:scale-[1.04]"
            >
              BOOK TRIAL
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/fitness/programs"
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3 font-[family-name:var(--font-bebas)] text-xl tracking-[0.18em] text-white transition-colors hover:border-white"
            >
              PROGRAMS
            </Link>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.7 }}
          className="mt-12 grid max-w-2xl grid-cols-3 border-y border-[#FFE600]/24 py-5"
        >
          {HERO_METRICS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="border-l border-[#FFE600]/24 px-5 first:border-l-0 first:pl-0">
                <Icon className="mb-3 size-4 text-[#FFE600]" />
                <dt className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/44">
                  {item.label}
                </dt>
                <dd className="mt-1 font-[family-name:var(--font-bebas)] text-5xl leading-none text-white">
                  {item.value}
                </dd>
              </div>
            );
          })}
        </motion.dl>

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
