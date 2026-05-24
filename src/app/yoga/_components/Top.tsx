"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, RevealText, Tilt3D } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

const CLASSES = [
  {
    en: "Sunrise Flow",
    ja: "太陽礼拝",
    time: "06:00 / 07:15",
    body: "ゆるやかなヴィンヤサ。1日の呼吸を整える朝のクラス。",
    image: "/images/yoga/02-class-sunrise.webp",
  },
  {
    en: "Power Yoga",
    ja: "パワーヨガ",
    time: "12:15 / 18:30",
    body: "アシュタンガの流れ。心拍を上げ、筋肉を目覚めさせる60分。",
    image: "/images/yoga/03-class-power.webp",
  },
  {
    en: "Pilates Reformer",
    ja: "ピラティス",
    time: "11:00 / 19:00",
    body: "リフォーマー使用、コアと姿勢の再構築。少人数 4 名まで。",
    image: "/images/yoga/04-class-pilates.webp",
  },
  {
    en: "Restorative",
    ja: "リストラティブ",
    time: "20:15",
    body: "ボルスターで体を支え、ゆっくりと内側を緩める夜のクラス。",
    image: "/images/yoga/05-class-restorative.webp",
  },
];

const TEACHERS = [
  {
    name: "Hana",
    role: "Founder · E-RYT500",
    image: "/images/yoga/06-teacher-01.webp",
  },
  {
    name: "Mio",
    role: "Pilates Master Trainer",
    image: "/images/yoga/07-teacher-02.webp",
  },
  {
    name: "Ren",
    role: "Yin & Restorative",
    image: "/images/yoga/08-teacher-03.webp",
  },
];

export function YogaTop() {
  return (
    <>
      {/* Hero — dawn-to-day gradient + breathing circle */}
      <section className="relative h-screen min-h-[720px] overflow-hidden bg-[#F4F0E8]">
        <Image
          src="/images/yoga/01-hero-dawn.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dawn-to-day gradient (breathes slowly) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(232,213,183,0.6) 0%, rgba(107,127,111,0.15) 40%, rgba(244,240,232,0.4) 100%)",
          }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Breathing circle — center, inhales/exhales */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6B7F6F]/40 lg:size-[640px]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E8D5B7]/60 lg:size-[440px]"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 sm:px-12 lg:px-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[10px] uppercase tracking-[0.5em] text-[#6B7F6F]"
          >
            Yoyogi-Uehara · Yoga &amp; Pilates
          </motion.p>
          <h1 className="mt-8 font-[family-name:var(--font-cormorant)] text-[clamp(2.75rem,8vw,7rem)] italic leading-[0.95] text-[#2C3A2E]">
            <RevealText text="Inhale," splitBy="word" />
            <span className="block">
              <RevealText text="Exhale." splitBy="word" delay={0.2} />
            </span>
            <span className="block mt-4 font-[family-name:var(--font-noto-serif-jp)] not-italic text-[0.35em] tracking-[0.3em] text-[#2C3A2E]/80">
              <RevealText text="ひと呼吸ずつ、整える。" splitBy="word" delay={0.6} />
            </span>
          </h1>
          <FadeIn delay={1.0}>
            <p className="mt-10 max-w-md text-sm leading-loose text-[#2C3A2E]/80">
              代々木上原の小さなスタジオ。
              グループは最大8名、プライベートも承ります。
              朝6時から夜21時まで、ご自身のペースで。
            </p>
          </FadeIn>
          <FadeIn delay={1.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/yoga/contact"
                className="rounded-full bg-[#2C3A2E] px-8 py-4 text-sm text-[#F4F0E8] transition-transform hover:scale-[1.04]"
              >
                体験レッスン（¥2,200）
              </Link>
              <Link
                href="/yoga/classes"
                className="rounded-full border-2 border-[#2C3A2E] px-8 py-4 text-sm text-[#2C3A2E] transition-colors hover:bg-[#2C3A2E] hover:text-[#F4F0E8]"
              >
                クラス一覧
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Classes */}
      <section className="bg-[#F4F0E8] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="01" className="text-[#6B7F6F]">
            Classes
          </SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl italic text-[#2C3A2E]">
            One day, four breaths.
          </h2>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2">
            {CLASSES.map((c, i) => (
              <motion.li
                key={c.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <Tilt3D
                  intensity={6}
                  raise={4}
                  glare
                  className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_-16px_rgba(0,0,0,0.1)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.ja}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-start justify-between p-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#6B7F6F]">
                        {c.en}
                      </p>
                      <h3 className="mt-1 font-[family-name:var(--font-noto-serif-jp)] text-2xl font-bold text-[#2C3A2E]">
                        {c.ja}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-[#2C3A2E]/70">
                        {c.body}
                      </p>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#6B7F6F]">
                        {c.time}
                      </p>
                    </div>
                  </div>
                </Tilt3D>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Studio */}
      <section
        id="studio"
        className="relative bg-[#2C3A2E] px-6 py-32 text-[#F4F0E8] sm:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/yoga/09-studio.webp"
              alt="スタジオ内観"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div>
            <SectionLabel number="02" className="text-[#E8D5B7]">
              Studio
            </SectionLabel>
            <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl italic">
              A quiet room, with morning light.
            </h2>
            <FadeIn delay={0.15}>
              <p className="mt-8 max-w-md font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#F4F0E8]/85">
                築古民家を一棟リノベ。床は無垢のオーク、東向きの大窓から朝の光が入ります。
                グループは最大8名、ピラティスのリフォーマーは4台。
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-[#F4F0E8]/15 pt-6 text-xs">
                <div>
                  <dt className="uppercase tracking-[0.3em] text-[#E8D5B7]">
                    Mat space
                  </dt>
                  <dd className="mt-1">8 mats（2m×1m）</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.3em] text-[#E8D5B7]">
                    Reformer
                  </dt>
                  <dd className="mt-1">Balanced Body × 4</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.3em] text-[#E8D5B7]">
                    Shower
                  </dt>
                  <dd className="mt-1">2基、アメニティ完備</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.3em] text-[#E8D5B7]">
                    Wifi / Locker
                  </dt>
                  <dd className="mt-1">無料</dd>
                </div>
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section
        id="teachers"
        className="bg-[#F4F0E8] px-6 py-32 sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="03" className="text-[#6B7F6F]">
            Teachers
          </SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl italic text-[#2C3A2E]">
            Three guides.
          </h2>

          <ul className="mt-16 grid gap-8 sm:grid-cols-3">
            {TEACHERS.map((t, i) => (
              <motion.li
                key={t.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <Tilt3D
                  intensity={8}
                  raise={6}
                  className="overflow-hidden rounded-2xl bg-white"
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-3xl italic text-[#2C3A2E]">
                      {t.name}
                    </h3>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#6B7F6F]">
                      {t.role}
                    </p>
                  </div>
                </Tilt3D>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#F4F0E8] px-6 py-40 sm:px-12 lg:px-20">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(232,213,183,0.5) 0%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#6B7F6F]">
            Trial
          </p>
          <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,5rem)] italic leading-tight text-[#2C3A2E]">
            <span className="inline-block">Begin with one breath.</span>
          </h2>
          <p className="mt-8 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#2C3A2E]/80">
            体験レッスン ¥2,200。マット・タオル・ウェアのレンタル無料。
            お一人で見学だけでも歓迎します。
          </p>
          <Link
            href="/yoga/contact"
            className="mt-12 inline-block rounded-full bg-[#2C3A2E] px-12 py-5 text-sm text-[#F4F0E8] transition-transform hover:scale-[1.04]"
          >
            体験を予約する →
          </Link>
        </div>
      </section>
    </>
  );
}
