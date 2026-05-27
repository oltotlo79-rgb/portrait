"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { FadeIn, RevealText } from "@/lib/animations";

const HERO_SLIDES = [
  { src: "/images/kids/01-hero-classroom.webp", alt: "ぽけっとラボの教室" },
  { src: "/images/kids/02-kid-experiment.webp", alt: "色水の実験" },
  { src: "/images/kids/05-parent-child.webp", alt: "親子で工作" },
  { src: "/images/kids/03-kid-craft.webp", alt: "工作の時間" },
];

const NEWS = [
  "🌸 春期スケジュール公開しました",
  "🧪 新プログラム「色の実験室」4月開講",
  "📖 4/13(土) 体験会 残2組",
  "✂️ 5月の工作テーマは「動くおもちゃ」",
  "🍓 季節のお菓子「いちごジャム」回 受付中",
];

const AGE_CATEGORIES = [
  {
    label: "3〜4歳",
    en: "Toddler",
    body: "はじめての教室。親子いっしょに、まず触ってみる。",
    color: "#FF8FA3",
    image: "/images/kids/04-kid-picture.webp",
  },
  {
    label: "5〜6歳",
    en: "Preschool",
    body: "「なんで？」が爆発する時期に、手を動かして答えを探す。",
    color: "#FFD166",
    image: "/images/kids/02-kid-experiment.webp",
  },
  {
    label: "7〜8歳",
    en: "School-age",
    body: "ひとりでつくれる年齢に。仮説と試行錯誤の時間を。",
    color: "#7AC4A2",
    image: "/images/kids/03-kid-craft.webp",
  },
];

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
    image: "/images/kids/13-program-season.webp",
  },
];

const FLOW = [
  {
    step: "01",
    title: "申し込む",
    body: "WEBフォームから希望日と人数を送信。1日以内にご返信します。",
    icon: "📝",
  },
  {
    step: "02",
    title: "教室にお越しください",
    body: "土曜・日曜の朝、90分のレッスン。親も一緒に参加できます。",
    icon: "🚪",
  },
  {
    step: "03",
    title: "つくる時間",
    body: "実験・工作・絵本ワーク。先生と一緒に手を動かしてみる。",
    icon: "🛠️",
  },
  {
    step: "04",
    title: "持ち帰る",
    body: "作品とふしぎの気持ちを、お家へ。次回までの宿題はありません。",
    icon: "🎁",
  },
];

const SCHEDULE = [
  { day: "土", time: "9:30", program: "実験", age: "3〜5歳", status: "残2" },
  { day: "土", time: "13:30", program: "工作", age: "4〜8歳", status: "残5" },
  { day: "土", time: "15:30", program: "絵本ワーク", age: "全年齢", status: "残3" },
  { day: "日", time: "9:30", program: "工作", age: "3〜5歳", status: "満席" },
  { day: "日", time: "13:30", program: "実験", age: "6〜8歳", status: "残4" },
  { day: "日", time: "15:30", program: "季節のお菓子", age: "全年齢", status: "残2" },
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
  {
    name: "Aoi",
    role: "絵本ワーク担当",
    body: "絵本作家・読み聞かせ歴8年。物語の世界を、子どもと一緒につくります。",
    image: "/images/kids/14-teacher-03.webp",
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
      <HeroCarousel />

      {/* News strip */}
      <section
        aria-label="お知らせ"
        className="relative overflow-hidden border-y border-[#7AC4A2]/30 bg-[#F1F8F4]"
      >
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3 sm:px-12 lg:px-20">
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#7AC4A2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            <Sparkles className="size-3" />
            News
          </span>
          <div className="relative flex-1 overflow-hidden">
            <motion.div
              className="flex w-max gap-10 whitespace-nowrap text-sm font-bold text-[#3D2B1F]"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 36, ease: "linear", repeat: Infinity }}
            >
              {[...NEWS, ...NEWS].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  {item}
                  <span className="text-[#7AC4A2]">·</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Message — メッセージ */}
      <section className="relative overflow-hidden bg-[#FFF9F0] px-6 py-32 sm:px-12 lg:px-20">
        <FloatingDecor variant="message" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#7AC4A2]">
            Message
          </p>
          <h2 className="mt-6 font-[family-name:var(--font-mplus-rounded)] text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.6] text-[#3D2B1F]">
            <RevealText text="子どもが「ふしぎ」と" splitBy="char" />
            <br />
            <RevealText
              text="出会う土曜日を、"
              splitBy="char"
              delay={0.1}
            />
            <br />
            <span className="text-[#FF8FA3]">
              <RevealText
                text="親子のとなりに"
                splitBy="char"
                delay={0.22}
              />
            </span>
          </h2>
          <FadeIn delay={0.55}>
            <p className="mx-auto mt-10 max-w-xl text-sm leading-loose text-[#3D2B1F]/80 sm:text-base">
              ぽけっとラボは、3〜8歳と保護者のための実験と工作の教室。
              <wbr />
              「正解」を教えるのではなく、子ども自身が気づく時間を、
              <wbr />
              いちばん大切にしています。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 対象別 (Age-based category nav) */}
      <section className="relative overflow-hidden bg-[#FFF9F0] px-6 pb-28 sm:px-12 lg:px-20">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">
              For Each Age
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-mplus-rounded)] text-[clamp(1.8rem,3.6vw,2.4rem)] font-extrabold leading-tight text-[#3D2B1F]">
              年齢にあわせた、3つの入り口
            </h2>
          </div>

          <ul className="mt-14 grid gap-8 sm:grid-cols-3">
            {AGE_CATEGORIES.map((cat, i) => (
              <motion.li
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
              >
                <Link
                  href="/kids/program"
                  className="group block h-full rounded-[28px] bg-white px-6 pb-8 pt-4 text-center shadow-[0_18px_36px_-24px_rgba(61,43,31,0.3)] transition-transform hover:-translate-y-1 hover:shadow-[0_24px_44px_-22px_rgba(61,43,31,0.4)]"
                  style={{ border: `2px solid ${cat.color}44` }}
                >
                  <RoundPhoto
                    src={cat.image}
                    alt=""
                    accent={cat.color}
                    sizes="(min-width: 640px) 220px, 60vw"
                    badge={cat.en}
                  />
                  <p className="mt-6 font-[family-name:var(--font-mplus-rounded)] text-3xl font-extrabold text-[#3D2B1F]">
                    {cat.label}
                  </p>
                  <p className="mt-4 text-sm leading-loose text-[#3D2B1F]/75">
                    {cat.body}
                  </p>
                  <p
                    className="mt-5 inline-flex items-center gap-1 text-xs font-bold transition-transform group-hover:translate-x-1"
                    style={{ color: cat.color }}
                  >
                    この年齢のプログラム
                    <ChevronRight className="size-3.5" />
                  </p>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <WaveDivider color="#FBE9D9" />

      {/* Programs */}
      <section className="relative overflow-hidden bg-[#FBE9D9] px-6 py-32 sm:px-12 lg:px-20">
        <FloatingDecor variant="programs" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">
              Programs · 4 themes
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-mplus-rounded)] text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-[#3D2B1F]">
              4つのテーマで、毎週ちがう体験
            </h2>
          </div>

          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((p, i) => (
              <ProgramCard key={p.en} program={p} delay={i * 0.08} />
            ))}
          </ul>
        </div>
      </section>

      <WaveDivider color="#FFF9F0" flip />

      {/* How it works + Schedule wrapper — shared falling petals */}
      <div className="relative isolate overflow-hidden">
        <FallingPetals />

      {/* How it works — 4 step flow */}
      <section className="relative bg-[#FFF9F0] px-6 py-32 sm:px-12 lg:px-20">
        <FloatingDecor variant="flow" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#7AC4A2]">
              How it works
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-mplus-rounded)] text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-[#3D2B1F]">
              はじめての方へ、4つのステップ
            </h2>
          </div>

          <ol className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Dotted connector line on lg */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-12 hidden lg:block"
            >
              <svg
                viewBox="0 0 100 2"
                preserveAspectRatio="none"
                className="h-1 w-full"
              >
                <line
                  x1="12"
                  y1="1"
                  x2="88"
                  y2="1"
                  stroke="#7AC4A2"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                />
              </svg>
            </div>

            {FLOW.map((f, i) => (
              <motion.li
                key={f.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="relative rounded-[28px] border-2 border-[#7AC4A2]/30 bg-white p-7 text-center shadow-[0_14px_30px_-20px_rgba(122,196,162,0.4)]"
              >
                <div className="relative mx-auto grid size-14 place-items-center rounded-full bg-[#7AC4A2] text-2xl">
                  <span>{f.icon}</span>
                </div>
                <p className="mt-4 font-[family-name:var(--font-mplus-rounded)] text-[10px] font-bold uppercase tracking-[0.3em] text-[#7AC4A2]">
                  Step {f.step}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-mplus-rounded)] text-xl font-extrabold text-[#3D2B1F]">
                  {f.title}
                </h3>
                <p className="mt-4 text-xs leading-loose text-[#3D2B1F]/75 sm:text-sm">
                  {f.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Schedule — フィルター検索風 */}
      <section className="relative bg-[#FFF9F0] px-6 pb-32 sm:px-12 lg:px-20">
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">
              Schedule · April 2026
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-mplus-rounded)] text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-[#3D2B1F]">
              開講中のクラスをさがす
            </h2>
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SCHEDULE.map((slot, i) => {
              const full = slot.status === "満席";
              return (
                <motion.li
                  key={`${slot.day}-${slot.time}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={
                    "group relative overflow-hidden rounded-3xl border-2 bg-white p-5 transition-all " +
                    (full
                      ? "border-[#3D2B1F]/15 opacity-60"
                      : "border-[#7AC4A2]/40 hover:-translate-y-1 hover:border-[#7AC4A2] hover:shadow-[0_18px_36px_-22px_rgba(122,196,162,0.55)]")
                  }
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-[family-name:var(--font-mplus-rounded)] text-4xl font-extrabold leading-none text-[#FF8FA3]">
                      {slot.day}
                    </span>
                    <span className="font-[family-name:var(--font-mplus-rounded)] text-2xl font-extrabold leading-none text-[#3D2B1F]">
                      {slot.time}
                    </span>
                  </div>
                  <p className="mt-4 text-base font-bold text-[#3D2B1F]">
                    {slot.program}
                  </p>
                  <p className="mt-1 text-xs text-[#3D2B1F]/65">対象 {slot.age}</p>
                  <span
                    className={
                      "absolute right-4 top-4 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold " +
                      (full
                        ? "bg-[#3D2B1F]/10 text-[#3D2B1F]/60"
                        : "bg-[#7AC4A2] text-white")
                    }
                  >
                    {full ? "満席" : slot.status}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Works gallery */}
      <section className="relative bg-[#FFF9F0] px-6 pb-28 sm:px-12 lg:px-20">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">
              Works
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-mplus-rounded)] text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-[#3D2B1F]">
              子どもたちが、つくったもの
            </h2>
          </div>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORKS.map((src, i) => (
              <motion.li
                key={src}
                initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.06, type: "spring" }}
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

      </div>
      {/* End of How it works + Schedule + Works wrapper */}

      {/* Promise */}
      <section className="relative overflow-hidden bg-[#FF8FA3] px-6 py-32 text-white sm:px-12 lg:px-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <FlowerSVG className="absolute -left-10 top-10 size-40 opacity-25" />
          <FlowerSVG className="absolute -right-12 bottom-10 size-48 opacity-25" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em]">
              3つのやくそく
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-mplus-rounded)] text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight">
              親も、安心して、一緒に
            </h2>
          </div>
          <ul className="mt-14 grid gap-6 sm:grid-cols-3">
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
                className="rounded-3xl bg-white/15 p-7 backdrop-blur-sm"
              >
                <p className="font-[family-name:var(--font-mplus-rounded)] text-4xl font-extrabold">
                  {p.n}
                </p>
                <p className="mt-4 text-xl font-bold">{p.t}</p>
                <p className="mt-3 text-sm leading-loose opacity-90">{p.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Teachers */}
      <section className="bg-[#FFF9F0] px-6 py-28 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">
              Teachers
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-mplus-rounded)] text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-[#3D2B1F]">
              お迎えするのは、こんな先生
            </h2>
          </div>
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEACHERS.map((t, i) => (
              <motion.li
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-3xl bg-white px-6 pb-8 pt-4 text-center shadow-[0_8px_24px_-16px_rgba(0,0,0,0.18)]"
              >
                <RoundPhoto
                  src={t.image}
                  alt={t.name}
                  accent="#FF8FA3"
                  sizes="(min-width: 1024px) 220px, 60vw"
                />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#FF8FA3]">
                  {t.role}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-[#3D2B1F]">
                  {t.name}
                </h3>
                <p className="mt-4 text-sm leading-loose text-[#3D2B1F]/75">
                  {t.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Voice */}
      <section
        id="voice"
        className="relative overflow-hidden bg-[#FFF9F0] px-6 py-28 sm:px-12 lg:px-20"
      >
        <Image
          src="/images/kids/12-voice-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">
              Voice
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-mplus-rounded)] text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-[#3D2B1F]">
              保護者さまから
            </h2>
          </div>
          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {VOICES.map((v, i) => (
              <motion.li
                key={v.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08, type: "spring" }}
                className="relative rounded-3xl bg-white p-7 shadow-md"
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
      <section id="access" className="bg-[#FFF9F0] px-6 py-28 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">
              Access
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-mplus-rounded)] text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-[#3D2B1F]">
              <span className="inline-block">自由が丘の、</span>
              <span className="inline-block">ラボ棟2F</span>
            </h2>
            <p className="mt-7 text-sm leading-loose text-[#3D2B1F]/80">
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
          src="/images/kids/15-cta-parent-walking.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
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
            <span className="inline-block">土曜の朝に</span>
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

/* ====================================================== */
/*  Hero — Hachidori-style: carousel BG + CENTERED copy   */
/* ====================================================== */
function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#FFF9F0] pb-24 pt-32 sm:pt-40">
      {/* Carousel layer */}
      <div className="pointer-events-none absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={HERO_SLIDES[index].src}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.32, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[index].src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9F0]/30 via-[#FFF9F0]/55 to-[#FFF9F0]" />
      </div>

      {/* Soft blobs */}
      <div
        className="pointer-events-none absolute -right-20 -top-32 size-96 rounded-full bg-[#FFD166] opacity-50 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-20 size-96 rounded-full bg-[#7AC4A2] opacity-40 blur-3xl"
        aria-hidden
      />

      <FloatingClouds />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]"
        >
          For ages 3 – 8 and parents
        </motion.p>

        <h1 className="mt-6 font-[family-name:var(--font-mplus-rounded)] text-[clamp(2.2rem,6.8vw,5.4rem)] font-extrabold leading-[1.18] text-[#3D2B1F]">
          <span className="block">
            <RevealText text="つくる時間が、" splitBy="char" />
          </span>
          <span className="block">
            <RevealText text="考える力を育てる" splitBy="char" delay={0.18} />
          </span>
        </h1>

        <FadeIn delay={0.55}>
          <p className="mx-auto mt-10 max-w-xl text-sm leading-loose text-[#3D2B1F]/80 sm:text-base">
            3〜8歳と保護者のための、土曜の朝のラボ。
            <br className="hidden sm:block" />
            実験と工作で「ふしぎ」を見つけにきませんか。
          </p>
        </FadeIn>

        <FadeIn delay={0.75}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/kids/contact"
              className="rounded-full bg-[#FF8FA3] px-9 py-4 text-sm font-bold text-white shadow-[0_12px_28px_-12px_rgba(255,143,163,0.7)] transition-transform hover:scale-[1.04]"
            >
              体験を申し込む（1,500円）
            </Link>
            <Link
              href="/kids/program"
              className="rounded-full border-2 border-[#3D2B1F]/25 bg-white/90 px-9 py-4 text-sm font-bold text-[#3D2B1F] backdrop-blur transition-colors hover:border-[#3D2B1F] hover:bg-[#3D2B1F] hover:text-white"
            >
              プログラムを見る
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.95}>
          <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-[#3D2B1F]/65">
            <span>👶 対象 3〜8歳と保護者</span>
            <span className="hidden sm:inline">·</span>
            <span>🕘 土日 90分</span>
            <span className="hidden sm:inline">·</span>
            <span>👥 1コマ最大8組</span>
            <span className="hidden sm:inline">·</span>
            <span>📍 自由が丘</span>
          </div>
        </FadeIn>

        {/* Pagination dots */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`スライド ${i + 1} を表示`}
              className={
                "h-2 rounded-full transition-all " +
                (index === i
                  ? "w-8 bg-[#FF8FA3]"
                  : "w-2 bg-[#3D2B1F]/20 hover:bg-[#3D2B1F]/35")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================================================== */
/*  Floating clouds                                       */
/* ====================================================== */
function FloatingClouds() {
  const clouds = [
    { top: "8%", size: 80, dur: 32, delay: 0 },
    { top: "52%", size: 60, dur: 38, delay: 6 },
    { top: "76%", size: 100, dur: 44, delay: 12 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: c.top }}
          initial={{ x: "-20%" }}
          animate={{ x: "120%" }}
          transition={{
            duration: c.dur,
            ease: "linear",
            repeat: Infinity,
            delay: c.delay,
          }}
        >
          <CloudSVG style={{ width: c.size, height: c.size * 0.6 }} />
        </motion.div>
      ))}
    </div>
  );
}

/* ====================================================== */
/*  Section-specific decor                                */
/* ====================================================== */
type DecorVariant = "message" | "programs" | "flow";

function FloatingDecor({ variant }: { variant: DecorVariant }) {
  if (variant === "message") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[6%] top-[14%]"
          animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FlowerSVG className="size-16 text-[#FF8FA3] opacity-50" />
        </motion.div>
        <motion.div
          className="absolute right-[8%] top-[20%]"
          animate={{ y: [0, 6, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <FlowerSVG className="size-20 text-[#FFD166] opacity-55" />
        </motion.div>
        <motion.div
          className="absolute bottom-[15%] left-[12%]"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <LeafSVG className="size-14 text-[#7AC4A2] opacity-55" />
        </motion.div>
        <motion.div
          className="absolute bottom-[18%] right-[10%]"
          animate={{ y: [0, 8, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <LeafSVG className="size-12 text-[#7AC4A2] opacity-45" />
        </motion.div>
      </div>
    );
  }
  if (variant === "programs") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-6 top-12"
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FlowerSVG className="size-28 text-[#FF8FA3] opacity-30" />
        </motion.div>
        <motion.div
          className="absolute right-4 top-1/3"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <LeafSVG className="size-20 text-[#7AC4A2] opacity-30" />
        </motion.div>
        <motion.div
          className="absolute -right-8 bottom-20"
          animate={{ rotate: [0, -6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <FlowerSVG className="size-32 text-[#FFD166] opacity-30" />
        </motion.div>
      </div>
    );
  }
  // flow
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[4%] top-[8%]"
        animate={{ x: ["-5%", "5%", "-5%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <CloudSVG style={{ width: 100, height: 60 }} />
      </motion.div>
      <motion.div
        className="absolute right-[6%] bottom-[10%]"
        animate={{ x: ["5%", "-5%", "5%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <CloudSVG style={{ width: 80, height: 48 }} />
      </motion.div>
    </div>
  );
}

/* ====================================================== */
/*  ProgramCard — soft hachidori-style hover               */
/* ====================================================== */
type Program = (typeof PROGRAMS)[number];

function ProgramCard({ program, delay }: { program: Program; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group"
    >
      <motion.div
        animate={{
          y: hovered ? -8 : 0,
          boxShadow: hovered
            ? `0 30px 50px -28px ${program.color}aa, 0 14px 30px -22px rgba(61,43,31,0.22)`
            : "0 18px 40px -26px rgba(61,43,31,0.3)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 22, mass: 0.6 }}
        className="relative h-full rounded-[28px] bg-white px-6 pb-8 pt-4 text-center"
        style={{
          border: `2px solid ${hovered ? program.color : program.color + "33"}`,
          transition: "border-color 0.4s ease",
        }}
      >
        {/* Background watercolor bloom (appears on hover) */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 size-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
          style={{ background: program.color }}
          animate={{ opacity: hovered ? 0.1 : 0, scale: hovered ? 1 : 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="relative">
          <RoundPhoto
            src={program.image}
            alt={program.ja}
            accent={program.color}
            sizes="(min-width: 1024px) 200px, (min-width: 640px) 40vw, 70vw"
            badge={program.en}
          />
          <motion.div
            className="mt-5 text-3xl"
            animate={{ rotate: hovered ? [0, -10, 8, 0] : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {program.emoji}
          </motion.div>
          <h3 className="mt-2 font-[family-name:var(--font-mplus-rounded)] text-2xl font-extrabold text-[#3D2B1F]">
            {program.ja}
          </h3>
          <p className="mt-4 text-sm leading-loose text-[#3D2B1F]/80">
            {program.body}
          </p>
        </div>
      </motion.div>
    </motion.li>
  );
}

/* ====================================================== */
/*  FallingPetals — ambient confetti & leaves              */
/* ====================================================== */
type PetalKind = "leaf-green" | "leaf-yellow" | "flower-pink" | "flower-yellow" | "dot";

type Petal = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  sway: number;
  rotateDir: 1 | -1;
  kind: PetalKind;
};

function FallingPetals() {
  const petals = useMemo<Petal[]>(() => {
    const kinds: PetalKind[] = [
      "leaf-green",
      "leaf-yellow",
      "flower-pink",
      "flower-yellow",
      "dot",
    ];
    return Array.from({ length: 26 }, (_, i) => {
      // Pseudo-random but deterministic so SSR/CSR match
      const r = (n: number) => {
        const x = Math.sin(i * 999 + n * 73) * 10000;
        return x - Math.floor(x);
      };
      return {
        id: i,
        left: r(1) * 100,
        size: 14 + Math.floor(r(2) * 18), // 14-32px
        duration: 22 + r(3) * 16, // 22-38s (calm drift across 3 sections)
        delay: r(4) * 22, // 0-22s (stagger entry)
        sway: 24 + r(5) * 36, // 24-60px
        rotateDir: r(6) > 0.5 ? 1 : -1,
        kind: kinds[Math.floor(r(7) * kinds.length)] ?? "leaf-green",
      };
    });
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    >
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute block"
          style={{
            left: `${p.left}%`,
            top: "-6%",
            width: p.size,
            height: p.size,
          }}
          initial={{ y: 0, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: "320vh",
            x: [0, p.sway, -p.sway * 0.6, p.sway * 0.4, 0],
            rotate: 360 * p.rotateDir,
            opacity: [0, 0.85, 0.85, 0.85, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            },
            opacity: {
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.08, 0.5, 0.92, 1],
            },
          }}
        >
          <PetalSVG kind={p.kind} />
        </motion.span>
      ))}
    </div>
  );
}

function PetalSVG({ kind }: { kind: PetalKind }) {
  switch (kind) {
    case "leaf-green":
      return <LeafSVG className="block size-full text-[#7AC4A2]" />;
    case "leaf-yellow":
      return <LeafSVG className="block size-full text-[#FFD166]" />;
    case "flower-pink":
      return <FlowerSVG className="block size-full text-[#FF8FA3]" />;
    case "flower-yellow":
      return <FlowerSVG className="block size-full text-[#FFD166]" />;
    case "dot":
      return (
        <svg viewBox="0 0 12 12" className="block size-full" aria-hidden>
          <circle cx="6" cy="6" r="5" fill="#E89AC7" />
        </svg>
      );
    default:
      return null;
  }
}

/* ====================================================== */
/*  RoundPhoto — circular photo framed by illustrations    */
/* ====================================================== */
type RoundPhotoProps = {
  src: string;
  alt: string;
  accent: string;
  sizes: string;
  badge?: string;
};

function RoundPhoto({ src, alt, accent, sizes, badge }: RoundPhotoProps) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[220px]">
      {/* Decorative flower/leaf around the circle */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.span
          className="absolute -left-3 top-2 block"
          animate={{ rotate: [0, 8, 0], y: [0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FlowerSVG className="size-9" style={{ color: accent }} />
        </motion.span>
        <motion.span
          className="absolute -right-2 -top-1 block"
          animate={{ rotate: [0, -10, 0], y: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <LeafSVG className="size-8 text-[#7AC4A2]" />
        </motion.span>
        <motion.span
          className="absolute -bottom-1 -left-2 block"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        >
          <LeafSVG className="size-7 text-[#FFD166]" />
        </motion.span>
        <motion.span
          className="absolute -bottom-2 -right-2 block"
          animate={{ rotate: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <FlowerSVG className="size-10" style={{ color: "#FFD166" }} />
        </motion.span>
        {/* Tiny accent dots */}
        <span
          className="absolute right-6 top-0 block size-1.5 rounded-full"
          style={{ background: accent }}
        />
        <span
          className="absolute bottom-3 left-1 block size-1 rounded-full bg-[#7AC4A2]"
        />
      </div>

      {/* Circular photo */}
      <div
        className="relative size-full overflow-hidden rounded-full"
        style={{ boxShadow: `0 14px 32px -20px ${accent}99` }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: `4px solid ${accent}` }}
        />
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
        />
      </div>

      {/* Badge label */}
      {badge ? (
        <span
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D2B1F] shadow-sm"
          style={{ background: accent }}
        >
          {badge}
        </span>
      ) : null}
    </div>
  );
}

/* ====================================================== */
/*  SVG primitives                                        */
/* ====================================================== */
function CloudSVG({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 120 70"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
    >
      <path
        d="M30 50 C 14 50, 8 36, 22 30 C 18 14, 38 12, 44 22 C 50 8, 72 12, 74 26 C 90 22, 102 36, 92 48 C 96 60, 78 64, 70 56 C 60 66, 40 64, 36 54 C 32 60, 22 58, 30 50 Z"
        fill="#fff"
        opacity="0.9"
      />
    </svg>
  );
}

type SvgIconProps = {
  className?: string;
  style?: React.CSSProperties;
};

function FlowerSVG({ className, style }: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
    >
      <g fill="currentColor">
        <ellipse cx="50" cy="22" rx="14" ry="20" />
        <ellipse cx="50" cy="78" rx="14" ry="20" />
        <ellipse cx="22" cy="50" rx="20" ry="14" />
        <ellipse cx="78" cy="50" rx="20" ry="14" />
      </g>
      <circle cx="50" cy="50" r="11" fill="#FFF9F0" />
    </svg>
  );
}

function LeafSVG({ className, style }: SvgIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
    >
      <path
        d="M20 80 C 20 30, 60 10, 90 20 C 80 60, 50 90, 20 80 Z"
        fill="currentColor"
      />
      <path
        d="M30 75 C 45 50, 65 30, 85 25"
        stroke="#FFF9F0"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

/* ====================================================== */
/*  Wave divider                                          */
/* ====================================================== */
function WaveDivider({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <div aria-hidden className="-mb-px overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path
          d="M0 40 C 240 80, 480 0, 720 40 C 960 80, 1200 0, 1440 40 L 1440 80 L 0 80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
