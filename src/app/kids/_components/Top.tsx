"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, RevealText, Tilt3D } from "@/lib/animations";

const PROGRAMS = [
  {
    en: "Experiment",
    ja: "実験",
    body: "色水・浮力・電気のしくみ。手を動かしながら「ふしぎ」をつかむ。",
    color: "#FF8FA3",
    emoji: "⚗️",
    image: "/images/kids/02-kid-experiment.webp",
  },
  {
    en: "Craft",
    ja: "工作",
    body: "段ボール、紙、布。今日のテーマだけで、自分だけの作品を。",
    color: "#FFD166",
    emoji: "✂️",
    image: "/images/kids/03-kid-craft.webp",
  },
  {
    en: "Picture Book",
    ja: "絵本ワーク",
    body: "絵本を読んで、考えて、絵に描く。物語をつくる時間。",
    color: "#7AC4A2",
    emoji: "📖",
    image: "/images/kids/04-kid-picture.webp",
  },
  {
    en: "Season",
    ja: "季節のお菓子",
    body: "春のいちごジャム、秋の栗ようかん。台所もラボに。",
    color: "#E89AC7",
    emoji: "🍓",
    image: "/images/kids/05-parent-child.webp",
  },
];

const VOICES = [
  {
    name: "Mさん 5歳のママ",
    body: "週末の予定に困らなくなりました。本人が「色のじっけんやりたい」って毎週聞いてきます。",
  },
  {
    name: "Kさん 6歳のパパ",
    body: "親も飽きない内容。先生方の声かけがプロで、子どもが伸びていくのが見えます。",
  },
  {
    name: "Yさん 7歳のママ",
    body: "工作の作品を玄関に飾るのが楽しみ。本人が説明してくれる時間も増えました。",
  },
];

const TEACHERS = [
  {
    name: "Sakura",
    role: "保育士・主任",
    body: "保育士12年。お子さまの様子を細やかに見て、声かけのプロです。",
    image: "/images/kids/10-teacher-01.webp",
  },
  {
    name: "Ryo",
    role: "理系学生・実験担当",
    body: "東工大院生。実験パートを企画。むずかしいことも、ワクワクに変換します。",
    image: "/images/kids/11-teacher-02.webp",
  },
];

const WORKS = [
  "/images/kids/06-work-01.webp",
  "/images/kids/07-work-02.webp",
  "/images/kids/08-work-03.webp",
  "/images/kids/09-work-04.webp",
];

export function KidsTop() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFF9F0] pb-20 pt-32 sm:pt-40">
        {/* Subtle background classroom photo */}
        <Image
          src="/images/kids/01-hero-classroom.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          className="pointer-events-none absolute -top-32 -right-20 size-96 rounded-full bg-[#FFD166] opacity-50 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-20 size-96 rounded-full bg-[#7AC4A2] opacity-40 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]"
          >
            For ages 3 – 8 and parents
          </motion.p>

          <h1 className="mt-6 font-[family-name:var(--font-mplus-rounded)] text-[clamp(2.5rem,8vw,7rem)] font-extrabold leading-[0.95] text-[#3D2B1F]">
            <span className="block">
              <RevealText text="考える力は、" splitBy="word" />
            </span>
            <span className="block text-[#FF8FA3]">
              <RevealText text="つくる時間から。" splitBy="word" delay={0.2} />
            </span>
          </h1>

          <FadeIn delay={0.5}>
            <p className="mt-12 max-w-xl text-base leading-loose text-[#3D2B1F]/80">
              親子のための、ちょっと不思議な実験と工作の教室。
              色のふしぎ・季節のお菓子・絵本でつくる紙芝居まで、土日の朝にどうぞ。
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/kids/contact"
                className="rounded-full bg-[#FF8FA3] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
              >
                体験を申し込む（1,500円）
              </Link>
              <Link
                href="/kids/program"
                className="rounded-full border-2 border-[#3D2B1F] px-8 py-4 text-sm font-bold text-[#3D2B1F] transition-colors hover:bg-[#3D2B1F] hover:text-white"
              >
                プログラムを見る
              </Link>
            </div>
          </FadeIn>

          <div className="mt-20 flex flex-wrap gap-8 text-xs text-[#3D2B1F]/60">
            <span>👶 対象 3〜8歳と保護者</span>
            <span>🕘 土日 90分</span>
            <span>👥 1コマ最大8組</span>
            <span>📍 自由が丘</span>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="relative bg-[#FFF9F0] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">
            Programs
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-mplus-rounded)] text-4xl font-extrabold text-[#3D2B1F] sm:text-5xl">
            <span className="inline-block">4つのテーマで、</span>
            <span className="inline-block">毎週ちがう体験。</span>
          </h2>
          <ul className="mt-16 grid gap-6 sm:grid-cols-2">
            {PROGRAMS.map((p, i) => (
              <motion.li
                key={p.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Tilt3D
                  intensity={10}
                  raise={6}
                  glare
                  className="overflow-hidden rounded-3xl shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]"
                  style={{
                    background: p.color + "22",
                    border: `2px solid ${p.color}`,
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.ja}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-3xl">{p.emoji}</div>
                    <h3 className="mt-4 font-[family-name:var(--font-mplus-rounded)] text-3xl font-extrabold text-[#3D2B1F]">
                      {p.ja}
                    </h3>
                    <p
                      className="text-xs font-bold uppercase tracking-[0.2em]"
                      style={{ color: p.color }}
                    >
                      {p.en}
                    </p>
                    <p className="mt-6 text-sm leading-loose text-[#3D2B1F]/80">
                      {p.body}
                    </p>
                  </div>
                </Tilt3D>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Works gallery — 子どもたちの作品 */}
      <section className="bg-[#FFF9F0] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">
            Works
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-mplus-rounded)] text-4xl font-extrabold text-[#3D2B1F] sm:text-5xl">
            <span className="inline-block">子どもたちが、</span>
            <span className="inline-block">つくったもの。</span>
          </h2>
          <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORKS.map((src, i) => (
              <motion.li
                key={src}
                initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  type: "spring",
                }}
                className="overflow-hidden rounded-3xl border-2 border-[#FFD166]/40 bg-white"
              >
                <div className="relative aspect-square">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Numbers / promise */}
      <section className="relative overflow-hidden bg-[#FF8FA3] px-6 py-32 text-white sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em]">
            3つのやくそく
          </p>
          <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-mplus-rounded)] text-4xl font-extrabold sm:text-5xl">
            <span className="inline-block">親も、</span>
            <span className="inline-block">安心して、</span>
            <span className="inline-block">一緒に。</span>
          </h2>
          <ul className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { n: "01", t: "少人数制", body: "1コマ最大8組まで。先生の目が必ず届く。" },
              {
                n: "02",
                t: "保育士＋専門講師",
                body: "保育士・理系学生・絵本作家がペアで担当。",
              },
              { n: "03", t: "見学・体験OK", body: "親も同席。最初の1コマは1,500円で体験。" },
            ].map((p, i) => (
              <motion.li
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl bg-white/15 p-8 backdrop-blur-sm"
              >
                <p className="font-[family-name:var(--font-mplus-rounded)] text-5xl font-extrabold">
                  {p.n}
                </p>
                <p className="mt-4 text-xl font-bold">{p.t}</p>
                <p className="mt-3 text-sm leading-loose opacity-90">{p.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Teachers — 講師紹介 */}
      <section className="bg-[#FFF9F0] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">
            Teachers
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-mplus-rounded)] text-4xl font-extrabold text-[#3D2B1F] sm:text-5xl">
            <span className="inline-block">お迎えするのは、</span>
            <span className="inline-block">こんな先生。</span>
          </h2>
          <ul className="mt-16 grid gap-8 sm:grid-cols-2">
            {TEACHERS.map((t, i) => (
              <motion.li
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_24px_-16px_rgba(0,0,0,0.18)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8FA3]">
                    {t.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#3D2B1F]">
                    {t.name}
                  </h3>
                  <p className="mt-3 text-sm leading-loose text-[#3D2B1F]/75">
                    {t.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Voice */}
      <section
        id="voice"
        className="relative overflow-hidden bg-[#FFF9F0] px-6 py-32 sm:px-12 lg:px-20"
      >
        <Image
          src="/images/kids/12-voice-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">
            Voice
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-mplus-rounded)] text-4xl font-extrabold text-[#3D2B1F] sm:text-5xl">
            保護者さまから。
          </h2>
          <ul className="mt-16 grid gap-6 lg:grid-cols-3">
            {VOICES.map((v, i) => (
              <motion.li
                key={v.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08, type: "spring" }}
                className="relative rounded-3xl bg-white p-8 shadow-md"
              >
                <span className="absolute -top-4 left-6 inline-flex size-8 items-center justify-center rounded-full bg-[#FFD166] font-extrabold text-[#3D2B1F]">
                  ★
                </span>
                <p className="text-sm leading-loose text-[#3D2B1F]/85">
                  {v.body}
                </p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#FF8FA3]">
                  — {v.name}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Access */}
      <section
        id="access"
        className="bg-[#FFF9F0] px-6 py-32 sm:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">
              Access
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-mplus-rounded)] text-4xl font-extrabold text-[#3D2B1F] sm:text-5xl">
              <span className="inline-block">自由が丘の、</span>
              <span className="inline-block">ラボ棟2F。</span>
            </h2>
            <p className="mt-8 text-sm leading-loose text-[#3D2B1F]/80">
              自由が丘駅から徒歩6分。商店街の真ん中、文具店の上です。
              ベビーカー入場OK、エレベーターあり。
            </p>
          </div>
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/kids/01-hero-classroom.webp"
                alt="ぽけっとラボ教室の風景"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#3D2B1F] px-6 py-32 text-[#FFF9F0] sm:px-12 lg:px-20">
        <Image
          src="/images/kids/05-parent-child.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-[#FF8FA3] opacity-30 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFD166]">
            First Lesson
          </p>
          <h2 className="mt-6 font-[family-name:var(--font-mplus-rounded)] text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-tight">
            <span className="inline-block">まずは、</span>
            <span className="inline-block">土曜の朝に。</span>
          </h2>
          <p className="mt-8 text-sm leading-loose opacity-80">
            体験レッスン 1,500円（保護者1名含む）。10:00 or 13:30 から。
          </p>
          <Link
            href="/kids/contact"
            className="mt-12 inline-block rounded-full bg-[#FFD166] px-12 py-5 font-bold text-[#3D2B1F] transition-transform hover:scale-[1.05]"
          >
            体験を申し込む →
          </Link>
        </div>
      </section>
    </>
  );
}
