"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Utensils } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/animations/variants";
import type { ShopInfo } from "../_data/types";

export function RestaurantHero({ info }: { info: ShopInfo }) {
  return (
    <section className="relative flex h-screen min-h-[680px] items-center overflow-hidden bg-[#0F0F0F] text-[#EFE9DD]">
      {/* Background image */}
      <Image
        src={info.heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />

      {/* Noren curtains dropping */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.4, ease: EASE_OUT_EXPO, delay: 0.1 }}
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[18vh]"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,15,15,0.95) 0%, rgba(15,15,15,0.85) 50%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Warm vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(15,15,15,0.4) 0%, rgba(15,15,15,0.85) 70%)",
        }}
        aria-hidden
      />

      {/* Brushstroke center */}
      <div className="relative z-20 mx-auto w-full max-w-4xl px-6 text-center sm:px-12">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="text-[10px] uppercase tracking-[0.5em] text-[#B59154]"
        >
          Kappo Kuromoji — Kagurazaka
        </motion.p>

        {/* Vertical writing for the main title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-10 flex justify-center"
        >
          <span
            className="font-[family-name:var(--font-shippori-mincho)] text-[clamp(3.5rem,9vw,7rem)] leading-[0.95] tracking-[0.1em]"
            style={{ writingMode: "vertical-rl" }}
          >
            {["客", "一", "献"].map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 1.9 + i * 0.35,
                  duration: 1.1,
                  ease: EASE_OUT_EXPO,
                }}
                className="block"
              >
                {c}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 1 }}
          className="mt-12 font-[family-name:var(--font-noto-serif-jp)] text-sm tracking-[0.3em] text-[#EFE9DD]/70"
        >
          一席 ご来店ありがとうございます
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.7, duration: 0.9, ease: EASE_OUT_EXPO }}
        className="absolute bottom-8 left-6 right-6 z-20 mx-auto grid max-w-5xl gap-3 border border-[#EFE9DD]/12 bg-[#0F0F0F]/70 p-4 backdrop-blur-md sm:left-12 sm:right-12 md:grid-cols-[1fr_auto_auto]"
      >
        <div>
          <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#B59154]">
            <Utensils className="size-3.5" />
            Tonight&apos;s counter
          </p>
          <p className="mt-2 font-[family-name:var(--font-noto-serif-jp)] text-sm text-[#EFE9DD]/76">
            {info.hours}。{info.seats}、季節のおまかせ。
          </p>
        </div>
        <div className="flex items-center gap-3 border-[#EFE9DD]/10 text-xs text-[#EFE9DD]/72 md:border-l md:px-6">
          <Clock3 className="size-4 text-[#B59154]" />
          最終入店 20:30
        </div>
        <Link
          href="/restaurant/reservation"
          className="inline-flex items-center justify-center gap-2 border border-[#B59154] px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-[#B59154] transition-colors hover:bg-[#B59154] hover:text-[#0F0F0F]"
        >
          予約する
          <ArrowUpRight className="size-3.5" />
        </Link>
      </motion.div>
    </section>
  );
}
