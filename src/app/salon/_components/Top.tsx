"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FadeIn, MagneticButton, RevealText } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

const MENUS = [
  { name: "Cut", ja: "カット", price: "8,800" },
  { name: "Color", ja: "カラー", price: "12,000〜" },
  { name: "Treatment", ja: "オーガニックトリートメント", price: "6,500" },
  { name: "Bridal", ja: "ブライダルセット", price: "22,000" },
];

const STYLE_GALLERY = [
  "/images/salon/02-style-01.webp",
  "/images/salon/03-style-02.webp",
  "/images/salon/04-style-03.webp",
  "/images/salon/05-style-04.webp",
  "/images/salon/06-style-05.webp",
  "/images/salon/07-style-06.webp",
];

export function SalonTop() {
  return (
    <>
      <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#E8DCD0]">
        {/* Background image */}
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-y-0 right-0 w-full lg:w-[55%]"
        >
          <Image
            src="/images/salon/01-hero-back.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </motion.div>
        {/* Vignette */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-20"
          style={{
            background: "radial-gradient(circle at 30% 50%, transparent 30%, rgba(46,42,38,0.6) 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-12 lg:px-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-[10px] uppercase tracking-[0.5em] text-[#2E2A26]"
          >
            Omotesando · Private salon
          </motion.p>
          <h1 className="mt-8 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,9vw,9rem)] italic leading-[0.92] text-[#2E2A26]">
            <RevealText text="A mirror," splitBy="word" delay={0.5} />
            <span className="block font-[family-name:var(--font-noto-serif-jp)] not-italic text-[0.45em] tracking-[0.15em] text-[#2E2A26]/80">
              <RevealText text="鏡の前の時間を、ご褒美に。" splitBy="word" delay={0.85} />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-16 max-w-md font-[family-name:var(--font-noto-sans-jp)] text-sm leading-loose text-[#2E2A26]/80"
          >
            完全予約制、デザイナー1名×お客様1名。
            <br />
            ほかのお客さまとすれ違わない、貸切のヘアサロン。
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-[#2E2A26]/70"
        >
          Scroll ↓
        </motion.div>
      </section>

      {/* Concept */}
      <section className="relative bg-[#E8DCD0] px-6 py-40 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.4fr]">
          <SectionLabel number="01" className="text-[#B8896A]">
            Concept
          </SectionLabel>
          <div>
            <FadeIn>
              <h2 className="font-[family-name:var(--font-cormorant)] text-5xl italic leading-tight text-[#2E2A26] sm:text-6xl">
                Personal,
                <br />
                <span className="font-[family-name:var(--font-noto-serif-jp)] not-italic text-3xl tracking-[0.1em] sm:text-4xl">
                  と書いて、丁寧。
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-10 max-w-lg font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#2E2A26]/80">
                同じ髪は、二つとありません。
                骨格、毛流れ、暮らしのリズム、なりたい印象。すべてを聞いてから、はさみを入れます。
                ご来店からお見送りまで、120分。コーヒーとお話を、ほんの少し挟みながら。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-[#2E2A26] px-6 py-32 text-[#E8DCD0] sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel number="02" className="text-[#B8896A]">Menu</SectionLabel>
          <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl italic">
            Treatments
          </h2>
          <ul className="mt-16 divide-y divide-[#E8DCD0]/15 border-y border-[#E8DCD0]/15">
            {MENUS.map((m, i) => (
              <motion.li
                key={m.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                className="grid grid-cols-[auto_1fr_auto] items-baseline gap-8 py-8"
              >
                <span className="font-[family-name:var(--font-cormorant)] text-4xl italic text-[#B8896A]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-[family-name:var(--font-cormorant)] text-3xl italic">
                    {m.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#E8DCD0]/60">
                    {m.ja}
                  </p>
                </div>
                <span className="font-[family-name:var(--font-cormorant)] text-2xl italic text-[#B8896A]">
                  ¥{m.price}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#E8DCD0] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="03" className="text-[#B8896A]">Gallery</SectionLabel>
          <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl italic text-[#2E2A26]">
            Recent works
          </h2>
          <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STYLE_GALLERY.map((src, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.06 }}
                className="group relative overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={src}
                    alt={`Style ${String(i + 1).padStart(2, "0")}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-[0.3em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Style {String(i + 1).padStart(2, "0")}
                </div>
              </motion.li>
            ))}
          </ul>
          <div className="mt-14 text-center">
            <Link
              href="/salon/gallery"
              className="inline-block border border-[#2E2A26] px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#2E2A26] transition-colors hover:bg-[#2E2A26] hover:text-[#E8DCD0]"
            >
              See more works
            </Link>
          </div>
        </div>
      </section>

      {/* Stylist */}
      <section id="stylist" className="bg-[#E8DCD0] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <Image
              src="/images/salon/12-stylist.webp"
              alt="スタイリスト 野上みずき"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div>
            <SectionLabel number="04" className="text-[#B8896A]">Stylist</SectionLabel>
            <FadeIn>
              <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl italic text-[#2E2A26]">
                Mizuki Nogami
              </h2>
            </FadeIn>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#B8896A]">
              野上 みずき · オーナーデザイナー
            </p>
            <FadeIn delay={0.15}>
              <p className="mt-8 max-w-md font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#2E2A26]/80">
                表参道の有名サロンに10年在籍ののち独立。
                JHA入賞2回、雑誌『SPRiNG』ヘア企画レギュラー。
                オーガニックハーブカラーの認定講師。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#2E2A26] px-6 py-32 text-[#E8DCD0] sm:px-12 lg:px-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 80% 30%, rgba(184, 137, 106, 0.4) 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-2xl italic text-[#B8896A]">
            Book your time.
          </p>
          <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,5rem)] italic leading-tight">
            Reserve a quiet
            <br />
            two hours.
          </h2>
          <p className="mt-8 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#E8DCD0]/80">
            ご希望日の3週間前まで、オンラインで承ります。
          </p>
          <div className="mt-12">
            <Link href="/salon/reservation">
              <MagneticButton className="border border-[#B8896A] bg-transparent text-[#B8896A] hover:bg-[#B8896A] hover:text-[#2E2A26]">
                <span className="tracking-[0.3em] uppercase">Reserve now</span>
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
