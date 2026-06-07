"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Bath, Coffee, MapPin } from "lucide-react";

export function MinpakuHero() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-[#3F4A3C] text-[#F4EDE3]">
      {/* Shoji panels sliding apart */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
        className="absolute inset-y-0 left-0 z-20 w-1/2 bg-[#F4EDE3]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(63,74,60,0.06) 0 1px, transparent 1px 56px), repeating-linear-gradient(0deg, rgba(63,74,60,0.06) 0 1px, transparent 1px 56px)",
        }}
        aria-hidden
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
        className="absolute inset-y-0 right-0 z-20 w-1/2 bg-[#F4EDE3]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(63,74,60,0.06) 0 1px, transparent 1px 56px), repeating-linear-gradient(0deg, rgba(63,74,60,0.06) 0 1px, transparent 1px 56px)",
        }}
        aria-hidden
      />

      {/* Background "courtyard" image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut", delay: 1.2 }}
        className="absolute inset-0"
      >
        <Image
          src="/images/minpaku/01-hero-dusk.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(31,38,24,0.3) 0%, rgba(31,38,24,0.4) 60%, rgba(31,38,24,0.7) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="text-[10px] uppercase tracking-[0.5em] text-[#C9A063]"
        >
          Yamadori-an · Kyoto Nishijin
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
          className="mt-8 flex justify-center"
        >
          {/* モバイル〜タブレット: 横書き */}
          <span className="block text-center font-[family-name:var(--font-shippori-mincho)] text-[clamp(1.75rem,6vw,3rem)] leading-[1.4] tracking-[0.08em] lg:hidden">
            <motion.span
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 2.8, duration: 1.5 }}
              className="block"
            >
              静かに、町家に、
            </motion.span>
            <motion.span
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 3.2, duration: 1.5 }}
              className="block"
            >
              暮らすように泊まる
            </motion.span>
          </span>

          {/* デスクトップ: 縦書き（サイズと行間を絞ってビューポートに収まるよう調整） */}
          <span
            className="hidden font-[family-name:var(--font-shippori-mincho)] text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.15] tracking-[0.08em] lg:inline-block"
            style={{ writingMode: "vertical-rl" }}
          >
            <motion.span
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 2.8, duration: 1.5 }}
              className="block"
            >
              静かに、町家に、
            </motion.span>
            <motion.span
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 3.2, duration: 1.5 }}
              className="block"
            >
              暮らすように泊まる
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2, duration: 1 }}
          className="mt-10 font-[family-name:var(--font-cormorant)] italic text-base text-[#F4EDE3]/80 sm:text-lg"
        >
          One stay, one party — a Machiya in Nishijin.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.6, duration: 0.9 }}
        className="absolute bottom-8 left-6 right-6 z-10 mx-auto hidden max-w-5xl grid-cols-[1fr_auto] gap-4 rounded-sm border border-[#F4EDE3]/14 bg-[#1f2618]/68 p-5 text-[#F4EDE3] backdrop-blur-md md:grid"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: MapPin, label: "Nishijin", body: "京都西陣、路地奥の町家" },
            { icon: Bath, label: "Private", body: "1日1組、庭付き一棟貸し" },
            { icon: Coffee, label: "Breakfast", body: "土鍋ごはんと季節の小鉢" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="border-l border-[#C9A063]/40 pl-4">
                <Icon className="mb-3 size-4 text-[#C9A063]" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A063]">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-[#F4EDE3]/74">{item.body}</p>
              </div>
            );
          })}
        </div>
        <Link
          href="/minpaku/contact"
          className="inline-flex items-center self-center rounded-full border border-[#C9A063] px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-[#C9A063] transition-colors hover:bg-[#C9A063] hover:text-[#1f2618]"
        >
          空室相談
          <ArrowUpRight className="ml-2 size-3.5" />
        </Link>
      </motion.div>
    </section>
  );
}
