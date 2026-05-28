"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Dumbbell, Gauge, MapPin } from "lucide-react";
import { KineticLetters } from "@/lib/animations";

const HERO_METRICS = [
  { label: "Studios", value: "3", icon: MapPin },
  { label: "Open", value: "24h", icon: Gauge },
  { label: "Trial", value: "60m", icon: Dumbbell },
];

export function FitnessHero() {
  return (
    <>
    <section className="relative h-screen min-h-[680px] overflow-hidden bg-[#0A0A0A] text-white">
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

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 pt-28 pb-16 sm:px-12 lg:px-20">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.4em] text-[#FFE600]"
        >
          24/7 personal training
        </motion.p>

        <h1 className="mt-8 font-[family-name:var(--font-bebas)] leading-[0.82] tracking-[-0.01em]">
          <KineticLetters
            text="IGNITE"
            seed={247}
            trigger="mount"
            delay={0.4}
            scatterX={280}
            scatterY={180}
            scatterRotate={40}
            stagger={0.07}
            duration={1.1}
            className="block text-[clamp(3.5rem,12vw,10rem)] text-white"
          />
          <KineticLetters
            text="YOUR FIRE"
            seed={42}
            trigger="mount"
            delay={0.85}
            scatterX={260}
            scatterY={160}
            scatterRotate={35}
            stagger={0.05}
            duration={1.0}
            className="block text-[clamp(3.5rem,12vw,10rem)] text-[#FFE600]"
          />
          <KineticLetters
            text="again, and again."
            seed={84}
            trigger="mount"
            delay={1.2}
            scatterX={140}
            scatterY={80}
            scatterRotate={20}
            stagger={0.025}
            duration={0.85}
            className="block -mt-3 text-[clamp(2.5rem,7vw,5rem)] text-white/80"
          />
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

      </div>
    </section>

    {/* Metrics strip — moved out of hero to avoid nav overlap on short viewports */}
    <section className="border-b border-[#FFE600]/15 bg-[#0A0A0A] px-6 py-10 sm:px-12 lg:px-20">
      <dl className="mx-auto grid max-w-4xl grid-cols-3 border-y border-[#FFE600]/24 py-5">
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
      </dl>
    </section>
    </>
  );
}
