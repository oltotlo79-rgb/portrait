"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { FadeIn } from "@/lib/animations";

export function TravelConcierge() {
  return (
    <section
      id="concierge"
      className="relative overflow-hidden bg-[#101820] px-6 py-32 text-white sm:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/travel/11-concierge-portrait.webp"
              alt="コンシェルジュ Aoi Mizuno"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                Lead Concierge
              </p>
              <p className="mt-1 font-[family-name:var(--font-cormorant)] text-3xl italic">
                Aoi Mizuno
              </p>
            </div>
          </motion.div>
        </div>

        <div>
          <SectionLabel number="04" className="text-white/70">
            Concierge
          </SectionLabel>
          <h2 className="mt-6 font-[family-name:var(--font-manrope)] text-4xl font-bold leading-tight sm:text-5xl">
            あなたの旅は、
            <br />
            <span className="font-[family-name:var(--font-cormorant)] italic text-[#F4B400]">
              3回の相談
            </span>
            で形になる。
          </h2>
          <FadeIn delay={0.2}>
            <p className="mt-8 font-[family-name:var(--font-noto-serif-jp)] text-base leading-loose text-white/80">
              はじめに、過ごしたい時間の輪郭を伺います。次に、現地パートナーと相談しながら旅程の素案を組み上げ、最後に細部を一緒に磨いていく。
              ガイドブックには載らない場所と、誰かに話したくなる夜を、3回の対話でお届けします。
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <ul className="mt-10 space-y-4 text-sm text-white/85">
              {[
                "現地に住む日本語ガイドを案件ごとに厳選",
                "緊急24時間日本語サポート（衛星電話含む）",
                "プラン確定後の小さな変更は何度でも無料",
              ].map((t, i) => (
                <li key={i} className="flex gap-4 border-l border-[#F4B400]/60 pl-5">
                  <span className="text-[#F4B400]">0{i + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
