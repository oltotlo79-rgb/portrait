"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { FadeIn } from "@/lib/animations";

export function RestaurantChef() {
  return (
    <section
      id="chef"
      className="relative bg-[#1a1208] px-6 py-32 text-[#EFE9DD] sm:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionLabel number="三" className="text-[#B59154]">
            Chef
          </SectionLabel>
          <h2 className="mt-8 font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.1em] sm:text-5xl">
            包丁を入れる、
            <br />
            その一手の前に。
          </h2>
          <FadeIn delay={0.15}>
            <p className="mt-10 max-w-lg font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#EFE9DD]/80">
              京都『未在』、『高台寺和久傳』で十二年を過ごし、独立。素材の良し悪しではなく、
              「今夜の客人にどう手を入れるか」を考える時間が、いちばん長い仕事です。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-10 font-[family-name:var(--font-cormorant)] text-3xl italic text-[#B59154]">
              Takashi Kuroki
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#EFE9DD]/60">
              黒木 隆 — 大将
            </p>
          </FadeIn>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[3/4] overflow-hidden rounded-md"
        >
          <Image
            src="/images/restaurant/09-chef-portrait.webp"
            alt="大将 黒木隆"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 border-l-2 border-[#B59154] pl-4 text-xs uppercase tracking-[0.3em] text-[#EFE9DD]/80">
            Counter, 19:14 — preparation
          </div>
        </motion.div>
      </div>
    </section>
  );
}
