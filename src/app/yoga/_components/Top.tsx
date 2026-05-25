"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Leaf, MapPin, Sparkles, Wind } from "lucide-react";
import { FadeIn, KineticMarquee, RevealText, Tilt3D } from "@/lib/animations";
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
    image: "/images/yoga/03-pose-tree.webp",
  },
  {
    en: "Pilates Reformer",
    ja: "ピラティス",
    time: "11:00 / 19:00",
    body: "リフォーマー使用、コアと姿勢の再構築。少人数 4 名まで。",
    image: "/images/yoga/04-pilates-reformer.webp",
  },
  {
    en: "Restorative",
    ja: "リストラティブ",
    time: "20:15",
    body: "ボルスターで体を支え、ゆっくりと内側を緩める夜のクラス。",
    image: "/images/yoga/05-restorative.webp",
  },
];

const TEACHERS = [
  {
    name: "Hana",
    role: "Founder · E-RYT500",
    image: "/images/yoga/06-teacher-hana.webp",
  },
  {
    name: "Mio",
    role: "Pilates Master Trainer",
    image: "/images/yoga/07-teacher-mio.webp",
  },
  {
    name: "Ren",
    role: "Yin & Restorative",
    image: "/images/yoga/08-teacher-ren.webp",
  },
];

const HERO_STATS = [
  { label: "Class size", value: "8 max" },
  { label: "Open", value: "06:00" },
  { label: "Private", value: "1:1" },
];

const DAILY_RHYTHM = [
  { time: "06:00", title: "Sunrise Flow", body: "朝の光で体温を上げる" },
  { time: "11:00", title: "Reformer", body: "姿勢とコアを整える" },
  { time: "18:30", title: "Power Yoga", body: "一日の緊張を動きでほどく" },
  { time: "20:15", title: "Restorative", body: "深く休むための夜の余白" },
];

const EXPERIENCE = [
  {
    icon: Wind,
    label: "Breath-led",
    body: "呼吸のテンポに合わせて強度を調整。初心者でも置いていかれない設計です。",
  },
  {
    icon: Leaf,
    label: "Small room",
    body: "最大8名。講師が全員の姿勢と疲れ方を見ながらクラスを進めます。",
  },
  {
    icon: Sparkles,
    label: "After care",
    body: "レッスン後はハーブティーと短いセルフケアメモをお渡しします。",
  },
];

export function YogaTop() {
  return (
    <>
      {/* Hero — dawn-to-day gradient + breathing circle */}
      <section className="relative h-screen min-h-[720px] overflow-hidden bg-[#25342A] text-[#F8F3EA]">
        <Image
          src="/images/yoga/01-hero-window.webp"
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
              "linear-gradient(90deg, rgba(31,46,36,0.9) 0%, rgba(31,46,36,0.72) 42%, rgba(31,46,36,0.18) 100%)",
          }}
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(31,46,36,0.18)_0%,rgba(31,46,36,0.04)_45%,rgba(31,46,36,0.55)_100%)]"
        />

        {/* Breathing circle — center, inhales/exhales */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F8F3EA]/28 lg:size-[640px]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E8D5B7]/45 lg:size-[440px]"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 pb-28 pt-28 sm:px-12 lg:px-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[10px] uppercase tracking-[0.5em] text-[#E8D5B7]"
          >
            Yoyogi-Uehara · Yoga &amp; Pilates
          </motion.p>
          <h1 className="mt-8 font-[family-name:var(--font-cormorant)] text-[clamp(2.75rem,8vw,7rem)] italic leading-[0.95] text-[#F8F3EA] drop-shadow-[0_2px_24px_rgba(0,0,0,0.28)]">
            <RevealText text="Inhale," splitBy="word" />
            <span className="block">
              <RevealText text="Exhale." splitBy="word" delay={0.2} />
            </span>
            <span className="mt-4 block font-[family-name:var(--font-noto-serif-jp)] text-[0.35em] not-italic tracking-[0.3em] text-[#F8F3EA]/86">
              <RevealText text="ひと呼吸ずつ、整える。" splitBy="word" delay={0.6} />
            </span>
          </h1>
          <FadeIn delay={1.0}>
            <p className="mt-10 max-w-md text-sm leading-loose text-[#F8F3EA]/82 drop-shadow-[0_1px_16px_rgba(0,0,0,0.25)]">
              代々木上原の小さなスタジオ。
              グループは最大8名、プライベートも承ります。
              朝6時から夜21時まで、ご自身のペースで。
            </p>
          </FadeIn>
          <FadeIn delay={1.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/yoga/contact"
                className="rounded-full bg-[#F8F3EA] px-8 py-4 text-sm text-[#26362C] transition-transform hover:scale-[1.04]"
              >
                体験レッスン（¥2,200）
              </Link>
              <Link
                href="/yoga/classes"
                className="rounded-full border-2 border-[#F8F3EA]/70 px-8 py-4 text-sm text-[#F8F3EA] transition-colors hover:bg-[#F8F3EA] hover:text-[#26362C]"
              >
                クラス一覧
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={1.35}>
            <dl className="mt-14 grid max-w-xl grid-cols-3 divide-x divide-[#F8F3EA]/18 border-y border-[#F8F3EA]/18 py-5">
              {HERO_STATS.map((item) => (
                <div key={item.label} className="px-4 first:pl-0 last:pr-0">
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-[#E8D5B7]/80">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl italic text-[#F8F3EA]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

      </section>

      <KineticMarquee
        items={["Breathe in", "Align", "Flow", "Strength", "Restore", "Breathe out"]}
        durationSeconds={34}
        className="border-y border-[#2C3A2E]/10 bg-[#F4F0E8] py-6"
        trackClassName="font-[family-name:var(--font-cormorant)] text-[clamp(2.4rem,6vw,5.4rem)] italic text-[#2C3A2E]/28"
        separator={<span className="inline-block h-px w-14 bg-[#C8795A]/70" />}
      />

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

      {/* Experience */}
      <section className="bg-[#E8D5B7] px-6 py-32 text-[#26362C] sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
          <div>
            <SectionLabel number="02" className="text-[#C8795A]">
              Practice Design
            </SectionLabel>
            <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,6rem)] italic leading-none">
              Quiet,
              <br />
              but not plain.
            </h2>
            <p className="mt-8 max-w-sm font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#26362C]/72">
              静かなページでも、予約前に「ここで過ごす時間」が想像できること。
              ヨガサイトでは、動きの強さよりも呼吸・空間・一日のリズムを可視化します。
            </p>
          </div>

          <div className="grid gap-10">
            <ol className="grid gap-4">
              {DAILY_RHYTHM.map((item, i) => (
                <motion.li
                  key={item.time}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="grid grid-cols-[auto_1fr] gap-6 border-b border-[#26362C]/18 pb-5"
                >
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 size-4 text-[#C8795A]" />
                    <span className="font-[family-name:var(--font-cormorant)] text-4xl italic leading-none">
                      {item.time}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#26362C]/68">
                      {item.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <ul className="grid gap-4 md:grid-cols-3">
              {EXPERIENCE.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="border border-[#26362C]/14 bg-[#F4F0E8]/45 p-5"
                  >
                    <Icon className="size-5 text-[#C8795A]" />
                    <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.18em]">
                      {item.label}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#26362C]/66">
                      {item.body}
                    </p>
                  </motion.li>
                );
              })}
            </ul>
          </div>
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
              src="/images/yoga/09-studio-empty.webp"
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
              <div className="mt-8 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.24em] text-[#F4F0E8]/78">
                <span className="inline-flex items-center gap-2 border border-[#F4F0E8]/18 px-3 py-2">
                  <MapPin className="size-3.5 text-[#E8D5B7]" />
                  Yoyogi-Uehara
                </span>
                <span className="inline-flex items-center gap-2 border border-[#F4F0E8]/18 px-3 py-2">
                  <Leaf className="size-3.5 text-[#E8D5B7]" />
                  Oak floor
                </span>
              </div>
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
