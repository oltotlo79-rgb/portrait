"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, RevealText } from "@/lib/animations";

const PROGRAMS = [
  { en: "Experiment", ja: "実験", body: "色水・浮力・電気のしくみ。手を動かしながら「ふしぎ」をつかむ。", color: "#FF8FA3", emoji: "⚗️" },
  { en: "Craft", ja: "工作", body: "段ボール、紙、布。今日のテーマだけで、自分だけの作品を。", color: "#FFD166", emoji: "✂️" },
  { en: "Picture Book", ja: "絵本ワーク", body: "絵本を読んで、考えて、絵に描く。物語をつくる時間。", color: "#7AC4A2", emoji: "📖" },
  { en: "Season", ja: "季節のお菓子", body: "春のいちごジャム、秋の栗ようかん。台所もラボに。", color: "#E89AC7", emoji: "🍓" },
];

const VOICES = [
  { name: "Mさん 5歳のママ", body: "週末の予定に困らなくなりました。本人が「色のじっけんやりたい」って毎週聞いてきます。" },
  { name: "Kさん 6歳のパパ", body: "親も飽きない内容。先生方の声かけがプロで、子どもが伸びていくのが見えます。" },
  { name: "Yさん 7歳のママ", body: "工作の作品を玄関に飾るのが楽しみ。本人が説明してくれる時間も増えました。" },
];

export function KidsTop() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFF9F0] pb-20 pt-32 sm:pt-40">
        <div
          className="pointer-events-none absolute -top-32 -right-20 size-96 rounded-full bg-[#FFD166] blur-3xl opacity-50"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-20 size-96 rounded-full bg-[#7AC4A2] blur-3xl opacity-40"
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
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">Programs</p>
          <h2 className="mt-4 font-[family-name:var(--font-mplus-rounded)] text-4xl font-extrabold text-[#3D2B1F] sm:text-5xl">
            4つのテーマで、毎週ちがう体験。
          </h2>
          <ul className="mt-16 grid gap-6 sm:grid-cols-2">
            {PROGRAMS.map((p, i) => (
              <motion.li
                key={p.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl p-8 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]"
                style={{ background: p.color + "22", border: `2px solid ${p.color}` }}
              >
                <div className="text-5xl">{p.emoji}</div>
                <h3 className="mt-6 font-[family-name:var(--font-mplus-rounded)] text-3xl font-extrabold text-[#3D2B1F]">
                  {p.ja}
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: p.color }}>
                  {p.en}
                </p>
                <p className="mt-6 text-sm leading-loose text-[#3D2B1F]/80">{p.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Numbers / promise */}
      <section className="relative overflow-hidden bg-[#FF8FA3] px-6 py-32 text-white sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em]">3つのやくそく</p>
          <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-mplus-rounded)] text-4xl font-extrabold sm:text-5xl">
            親も、安心して、一緒に。
          </h2>
          <ul className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { n: "01", t: "少人数制", body: "1コマ最大8組まで。先生の目が必ず届く。" },
              { n: "02", t: "保育士＋専門講師", body: "保育士・理系学生・絵本作家がペアで担当。" },
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
                <p className="font-[family-name:var(--font-mplus-rounded)] text-5xl font-extrabold">{p.n}</p>
                <p className="mt-4 text-xl font-bold">{p.t}</p>
                <p className="mt-3 text-sm leading-loose opacity-90">{p.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Voice */}
      <section id="voice" className="bg-[#FFF9F0] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">Voice</p>
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
                <p className="text-sm leading-loose text-[#3D2B1F]/85">{v.body}</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#FF8FA3]">
                  — {v.name}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Access */}
      <section id="access" className="bg-[#FFF9F0] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">Access</p>
            <h2 className="mt-4 font-[family-name:var(--font-mplus-rounded)] text-4xl font-extrabold text-[#3D2B1F] sm:text-5xl">
              自由が丘の、ラボ棟2F。
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
        <div className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-[#FF8FA3] opacity-30 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFD166]">First Lesson</p>
          <h2 className="mt-6 font-[family-name:var(--font-mplus-rounded)] text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-tight">
            まずは、土曜の朝に。
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
