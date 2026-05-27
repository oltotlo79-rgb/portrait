"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Heart,
  PawPrint,
  Sparkles,
  Star,
} from "lucide-react";
import { FadeIn, KineticMarquee, RevealText, Tilt3D } from "@/lib/animations";

const CATEGORIES = [
  { id: "all", label: "ALL", count: 12 },
  { id: "cut", label: "カット", count: 4 },
  { id: "bath", label: "シャンプー", count: 3 },
  { id: "spa", label: "スパ", count: 2 },
  { id: "senior", label: "シニア", count: 2 },
  { id: "cat", label: "猫", count: 1 },
];

const HERO_TILES = [
  {
    code: "C-01",
    name: "シャンプーコース",
    en: "Bath",
    price: "4,500",
    minutes: "70min",
    image: "/images/pet/11-salon-bath.webp",
  },
  {
    code: "S-01",
    name: "炭酸スパ",
    en: "Spa",
    price: "+1,800",
    minutes: "20min",
    image: "/images/pet/04-dog-03.webp",
  },
  {
    code: "S-02",
    name: "シニアケア",
    en: "Senior",
    price: "+1,200",
    minutes: "+15min",
    image: "/images/pet/06-cat-01.webp",
  },
  {
    code: "F-01",
    name: "猫グルーミング",
    en: "Cat",
    price: "5,200",
    minutes: "60min",
    image: "/images/pet/07-cat-02.webp",
  },
];

const RANKING = [
  {
    rank: 1,
    name: "プレミアムカット",
    code: "T-01",
    price: "6,500",
    rating: 4.9,
    reviews: 412,
    tag: "BEST SELLER",
    body: "シャンプー・ブロー・カット・耳掃除・爪切り・足裏。仕上げに天然オイル。",
    image: "/images/pet/10-salon-cut.webp",
  },
  {
    rank: 2,
    name: "炭酸スパ＋カット",
    code: "T-02",
    price: "8,300",
    rating: 4.8,
    reviews: 287,
    tag: "POPULAR",
    body: "微細な炭酸泡が毛穴と皮脂をクリア。毛艶アップで月1ペースの方に。",
    image: "/images/pet/03-dog-02.webp",
  },
  {
    rank: 3,
    name: "シニア専用ケア",
    code: "T-03",
    price: "7,700",
    rating: 4.9,
    reviews: 194,
    tag: "GENTLE",
    body: "10歳以上向け。低温乾燥・休憩多め・ベテランが担当します。",
    image: "/images/pet/05-dog-04.webp",
  },
];

const REVIEWS = [
  {
    name: "Mさん（トイプー / 4歳）",
    rating: 5,
    title: "他のサロンを怖がっていたのが嘘みたい",
    body: "うちの子は他のワンちゃんを見ると緊張してしまうタイプ。個室対応で本当に落ち着いて過ごせました。仕上がりも丁寧。",
  },
  {
    name: "Sさん（柴 / 12歳）",
    rating: 5,
    title: "シニアになっても続けられるサロン",
    body: "高齢で他店から断られましたが、ここでは休憩を入れながらゆっくり対応してくれます。家でもケアの相談に乗ってもらえる。",
  },
  {
    name: "Tさん（猫 / 8歳）",
    rating: 4,
    title: "猫を見てくれるサロンは貴重",
    body: "我が家のチンチラを安心して預けられる。シャンプー後の毛並みが見違えるようにふわふわになりました。",
  },
];

const GALLERY = [
  { src: "/images/pet/02-dog-01.webp", size: "tall" },
  { src: "/images/pet/06-cat-01.webp", size: "wide" },
  { src: "/images/pet/03-dog-02.webp", size: "square" },
  { src: "/images/pet/08-cat-03.webp", size: "square" },
  { src: "/images/pet/04-dog-03.webp", size: "wide" },
  { src: "/images/pet/07-cat-02.webp", size: "tall" },
];

const STAFF = [
  { name: "Aoi", role: "店長", body: "JKC公認トリマーA級・カウンセラー資格", image: "/images/pet/12-staff-01.webp" },
  { name: "Hina", role: "トリマー", body: "JKC公認B級・小型犬とシニア犬専門", image: "/images/pet/13-staff-02.webp" },
  { name: "Kai", role: "トリマー", body: "猫専門・大型犬・大人しく取り扱い", image: "/images/pet/14-staff-03.webp" },
];

const TRUST_BADGES = [
  { value: "1頭", label: "完全個別対応" },
  { value: "12年", label: "経営実績" },
  { value: "4.9", label: "★ 平均評価" },
  { value: "893", label: "Reviews" },
];

export function PetTop() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroProgress, [0, 1], ["0%", "12%"]);
  const heroBlobScale = useTransform(heroProgress, [0, 1], [1, 1.18]);

  return (
    <>
      {/* ===== HERO : BENTO CATALOG ===== */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-[#FFF7EE] pb-24 pt-28 sm:pt-32"
      >
        {/* Decor blobs */}
        <motion.div
          style={{ scale: heroBlobScale }}
          className="pointer-events-none absolute -right-40 -top-40 size-[640px] rounded-full"
          aria-hidden
        >
          <div
            className="size-full rounded-full opacity-90"
            style={{
              background:
                "radial-gradient(circle, rgba(255,201,122,0.55) 0%, transparent 65%)",
            }}
          />
        </motion.div>
        <motion.div
          style={{ scale: heroBlobScale }}
          className="pointer-events-none absolute -bottom-40 -left-40 size-[520px] rounded-full"
          aria-hidden
        >
          <div
            className="size-full rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(163,120,100,0.32) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Floating paw prints */}
        <FloatingPaws />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
          {/* Top eyebrow row */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A37864]"
          >
            <span className="inline-flex items-center gap-2">
              <PawPrint className="size-3.5" /> Menu 2026 · Spring
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#A37864]/10 px-3 py-1.5 text-[#A37864]">
              <Sparkles className="size-3" />
              初回カウンセリング 30分付き
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="mt-8 font-[family-name:var(--font-zen-maru)] text-[clamp(2rem,5.4vw,4rem)] font-bold leading-[1.12] tracking-tight text-[#3B2A1C]">
            <span className="block">
              <RevealText text="うちの子だけの時間を、" splitBy="char" />
            </span>
            <span className="block text-[#A37864]">
              <RevealText text="いちばん大切に。" splitBy="char" delay={0.2} />
            </span>
          </h1>

          <FadeIn delay={0.5}>
            <p className="mt-6 max-w-xl text-sm leading-loose text-[#3B2A1C]/75 sm:text-base">
              一頭ずつ、完全個別対応のトリミング。
              <br className="hidden sm:block" />
              怖がりな子・シニアの子・初めての子犬も安心です。
            </p>
          </FadeIn>

          {/* Bento mosaic grid */}
          <div className="mt-12 grid gap-3 sm:gap-4 lg:grid-cols-[1.45fr_1fr]">
            {/* Big feature tile */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[28px] bg-[#3B2A1C] shadow-[0_30px_80px_-40px_rgba(59,42,28,0.6)]"
            >
              <div className="relative aspect-[5/4] sm:aspect-[7/5] lg:aspect-auto lg:h-full lg:min-h-[460px]">
                <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
                  <Image
                    src="/images/pet/01-hero-dog.webp"
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A1C] via-[#3B2A1C]/30 to-transparent" />

                {/* Sticker badge */}
                <motion.div
                  initial={{ rotate: -8, scale: 0 }}
                  animate={{ rotate: -8, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1.2, type: "spring" }}
                  className="absolute right-6 top-6 grid size-24 place-items-center rounded-full bg-[#FFC97A] text-center text-[#3B2A1C] shadow-lg sm:size-28"
                >
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em]">First</p>
                    <p className="text-2xl font-black leading-none">30<span className="text-sm">min</span></p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em]">Free</p>
                  </div>
                </motion.div>

                {/* Bottom card info */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFC97A]">
                    <span className="rounded-full bg-[#FFC97A]/20 px-2 py-0.5">T-01</span>
                    <span>Trim Course</span>
                  </div>
                  <h2 className="mt-3 font-[family-name:var(--font-zen-maru)] text-2xl font-bold leading-tight sm:text-3xl">
                    プレミアム カット
                  </h2>
                  <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="inline-flex items-center gap-1">
                        <Star className="size-3.5 fill-[#FFC97A] text-[#FFC97A]" />
                        4.9
                      </span>
                      <span>·</span>
                      <span>412 reviews</span>
                      <span>·</span>
                      <span>90min</span>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">From</p>
                      <p className="font-[family-name:var(--font-zen-maru)] text-3xl font-bold leading-none">
                        ¥6,500
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4 small tiles */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {HERO_TILES.map((tile, i) => (
                <motion.div
                  key={tile.code}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.75 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Tilt3D
                    intensity={7}
                    raise={4}
                    className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_-22px_rgba(59,42,28,0.45)] transition-shadow hover:shadow-[0_18px_40px_-22px_rgba(59,42,28,0.55)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F5E6D3]">
                      <Image
                        src={tile.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 20vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#A37864] backdrop-blur">
                        {tile.code}
                      </div>
                    </div>
                    <div className="space-y-1 p-3 sm:p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A37864]">
                        {tile.en} · {tile.minutes}
                      </p>
                      <p className="text-sm font-bold text-[#3B2A1C]">{tile.name}</p>
                      <p className="font-[family-name:var(--font-zen-maru)] text-lg font-bold text-[#3B2A1C]">
                        ¥{tile.price}
                      </p>
                    </div>
                  </Tilt3D>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <FadeIn delay={1}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/pet/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#A37864] px-7 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.04]"
              >
                予約する
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pet/menu"
                className="rounded-full border-2 border-[#3B2A1C] px-7 py-4 text-sm font-bold text-[#3B2A1C] transition-colors hover:bg-[#3B2A1C] hover:text-white"
              >
                メニュー全12種を見る
              </Link>
            </div>
          </FadeIn>

          {/* Trust badges */}
          <FadeIn delay={1.15}>
            <ul className="mt-10 grid grid-cols-2 gap-3 rounded-3xl border border-[#3B2A1C]/8 bg-white/70 p-4 backdrop-blur sm:grid-cols-4 sm:gap-0">
              {TRUST_BADGES.map((badge, i) => (
                <li
                  key={badge.label}
                  className={
                    "px-4 py-3 sm:py-2" +
                    (i < TRUST_BADGES.length - 1
                      ? " sm:border-r sm:border-[#A37864]/15"
                      : "")
                  }
                >
                  <p className="font-[family-name:var(--font-zen-maru)] text-2xl font-bold leading-tight text-[#3B2A1C]">
                    {badge.value}
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A37864]">
                    {badge.label}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ===== KINETIC MARQUEE ===== */}
      <KineticMarquee
        items={["trim", "bath", "spa", "senior care", "cat grooming", "private room"]}
        durationSeconds={32}
        className="border-y border-[#A37864]/16 bg-[#FFF7EE] py-5"
        trackClassName="font-[family-name:var(--font-zen-maru)] text-[clamp(2rem,5vw,4.7rem)] font-bold text-[#A37864]/22"
        separator={<Heart className="size-5 fill-[#FFC97A] text-[#FFC97A]" />}
      />

      {/* ===== CATEGORY FILTER ===== */}
      <section className="bg-[#FFF7EE] px-6 pt-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A37864]">
                Catalog · 12 items
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-zen-maru)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-[#3B2A1C]">
                すべてのメニュー。
              </h2>
            </div>
            <Link
              href="/pet/menu"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#A37864] hover:text-[#3B2A1C]"
            >
              詳細を見る
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <ul className="scrollbar-none mt-10 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap">
            {CATEGORIES.map((cat, i) => (
              <motion.li
                key={cat.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="shrink-0"
              >
                <button
                  type="button"
                  className={
                    "inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-xs font-bold transition-all " +
                    (i === 0
                      ? "border-[#3B2A1C] bg-[#3B2A1C] text-[#FFF7EE]"
                      : "border-[#A37864]/25 bg-white text-[#3B2A1C] hover:border-[#A37864] hover:text-[#A37864]")
                  }
                >
                  {cat.label}
                  <span
                    className={
                      "rounded-full px-2 py-0.5 text-[10px] " +
                      (i === 0
                        ? "bg-[#FFF7EE] text-[#3B2A1C]"
                        : "bg-[#FFF7EE] text-[#A37864]")
                    }
                  >
                    {cat.count}
                  </span>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== RANKING (BEST SELLERS) ===== */}
      <section className="bg-[#FFF7EE] px-6 pb-24 pt-16 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <ul className="grid gap-6 lg:grid-cols-3">
            {RANKING.map((item, i) => (
              <motion.li
                key={item.code}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <Tilt3D
                  intensity={5}
                  raise={6}
                  glare
                  className="group relative h-full overflow-hidden rounded-[28px] bg-white shadow-[0_20px_50px_-30px_rgba(59,42,28,0.45)]"
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-[#F5E6D3]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Big rank number */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -bottom-6 -left-3 select-none font-[family-name:var(--font-zen-maru)] text-[10rem] font-black leading-none text-white mix-blend-overlay opacity-90"
                    >
                      {item.rank}
                    </div>
                    <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#3B2A1C] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFC97A]">
                      <Sparkles className="size-3" />
                      {item.tag}
                    </div>
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A37864]">
                      {item.code} · Rank #{item.rank}
                    </p>
                    <h3 className="font-[family-name:var(--font-zen-maru)] text-2xl font-bold leading-tight text-[#3B2A1C]">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#3B2A1C]/70">
                      <div className="inline-flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star
                            key={k}
                            className={
                              "size-3.5 " +
                              (k < Math.floor(item.rating)
                                ? "fill-[#FFC97A] text-[#FFC97A]"
                                : "text-[#FFC97A]/30")
                            }
                          />
                        ))}
                      </div>
                      <span className="font-bold text-[#3B2A1C]">{item.rating}</span>
                      <span>·</span>
                      <span>{item.reviews}件</span>
                    </div>
                    <p className="text-sm leading-loose text-[#3B2A1C]/70">{item.body}</p>
                    <div className="flex items-center justify-between border-t border-[#3B2A1C]/8 pt-4">
                      <p className="font-[family-name:var(--font-zen-maru)] text-2xl font-bold text-[#3B2A1C]">
                        ¥{item.price}
                        <span className="ml-1 text-xs font-normal text-[#3B2A1C]/50">〜</span>
                      </p>
                      <Link
                        href="/pet/menu"
                        className="inline-flex size-9 items-center justify-center rounded-full bg-[#3B2A1C] text-white transition-transform hover:scale-110"
                        aria-label={`${item.name}の詳細`}
                      >
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </Tilt3D>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== FEATURED PREMIUM COURSE (split, parallax) ===== */}
      <FeaturedSection />

      {/* ===== REVIEWS ===== */}
      <section className="bg-[#FFF7EE] px-6 py-28 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A37864]">
                Reviews · 893件 · ★4.9
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-zen-maru)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-[#3B2A1C]">
                <span className="inline-block">飼い主さんの</span>
                <span className="inline-block">声。</span>
              </h2>
            </div>
            <div className="hidden items-baseline gap-2 sm:flex">
              <span className="font-[family-name:var(--font-zen-maru)] text-5xl font-bold text-[#A37864]">
                4.9
              </span>
              <div className="text-xs text-[#3B2A1C]/60">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-3 fill-[#FFC97A] text-[#FFC97A]" />
                  ))}
                </div>
                <p className="mt-1">based on 893 reviews</p>
              </div>
            </div>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <motion.li
                key={review.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="rounded-3xl border border-[#3B2A1C]/8 bg-white p-7 shadow-[0_12px_30px_-22px_rgba(59,42,28,0.35)]"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star
                      key={k}
                      className={
                        "size-4 " +
                        (k < review.rating
                          ? "fill-[#FFC97A] text-[#FFC97A]"
                          : "text-[#FFC97A]/30")
                      }
                    />
                  ))}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-zen-maru)] text-lg font-bold leading-snug text-[#3B2A1C]">
                  「{review.title}」
                </h3>
                <p className="mt-3 text-sm leading-loose text-[#3B2A1C]/75">{review.body}</p>
                <p className="mt-6 border-t border-[#3B2A1C]/8 pt-4 text-xs font-bold text-[#A37864]">
                  — {review.name}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== GALLERY (masonry-like) ===== */}
      <section className="bg-[#FFF7EE] px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A37864]">
            Gallery
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-zen-maru)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-[#3B2A1C]">
            ご来店の子たち。
          </h2>

          <ul className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {GALLERY.map((item, i) => {
              const span =
                item.size === "tall"
                  ? "row-span-2"
                  : item.size === "wide"
                  ? "col-span-2"
                  : "";
              return (
                <motion.li
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: (i % 3) * 0.06 }}
                  className={
                    "group relative overflow-hidden rounded-2xl bg-[#F5E6D3] " + span
                  }
                >
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ===== STAFF ===== */}
      <section id="staff" className="bg-[#FFF7EE] px-6 py-28 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A37864]">
            Staff
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-zen-maru)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-[#3B2A1C]">
            トリマー紹介。
          </h2>
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {STAFF.map((s, i) => (
              <motion.li
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="overflow-hidden rounded-3xl bg-white shadow-[0_12px_30px_-22px_rgba(0,0,0,0.18)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`スタッフ ${s.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A37864]">
                    {s.role}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-[#3B2A1C]">{s.name}</h3>
                  <p className="mt-3 text-sm leading-loose text-[#3B2A1C]/70">{s.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-[#A37864] px-6 py-32 text-white sm:px-12 lg:px-20">
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.35, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="pointer-events-none absolute -top-40 left-1/2 size-[700px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,201,122,0.6) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[28px]">🐾 🐩 🐶</p>
          <h2 className="mt-6 font-[family-name:var(--font-zen-maru)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight">
            お待ちしています。
          </h2>
          <p className="mt-8 text-sm leading-loose opacity-90">
            初回ご来店は、カウンセリング30分付き。
            <br />
            その子の性格に合わせたケアプランをご提案します。
          </p>
          <Link
            href="/pet/contact"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-white px-12 py-5 font-bold text-[#A37864] transition-transform hover:scale-[1.05]"
          >
            初回予約はこちら
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------- */
/*  Featured premium course section (split, parallax) */
/* -------------------------------------------------- */
function FeaturedSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#3B2A1C] px-6 py-28 text-[#FFF7EE] sm:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative overflow-hidden rounded-[32px]">
          <div className="relative aspect-[4/5]">
            <motion.div className="absolute inset-0" style={{ y: imageY }}>
              <Image
                src="/images/pet/02-dog-01.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A37864] backdrop-blur">
              <Sparkles className="size-3.5" /> Featured
            </div>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFC97A]">
            Featured · S-01
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-zen-maru)] text-[clamp(2.2rem,4.5vw,3.6rem)] font-bold leading-[1.15]">
            <RevealText text="炭酸スパで、" splitBy="char" />
            <br />
            <span className="text-[#FFC97A]">
              <RevealText text="毛艶ふわふわ。" splitBy="char" delay={0.15} />
            </span>
          </h2>
          <p className="mt-8 max-w-md text-sm leading-loose opacity-85">
            微細な炭酸の泡が毛穴と皮脂を優しくクリア。
            <br />
            シャンプー前のひと工程で、仕上がりの毛艶が見違えます。
            <br />
            敏感肌の子・年に1〜2回のスペシャルケアにも。
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              { k: "所要時間", v: "+20min" },
              { k: "料金", v: "¥1,800〜" },
              { k: "対象", v: "全犬種・猫" },
              { k: "おすすめ", v: "月1ペース" },
            ].map((item) => (
              <li
                key={item.k}
                className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFC97A]">
                  {item.k}
                </p>
                <p className="mt-2 font-[family-name:var(--font-zen-maru)] text-xl font-bold">
                  {item.v}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href="/pet/menu"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#FFC97A] px-7 py-4 text-sm font-bold text-[#3B2A1C] transition-transform hover:scale-[1.05]"
          >
            このコースを予約
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------- */
/*  Floating paw prints (decorative) */
/* -------------------------------------------------- */
function FloatingPaws() {
  const paws = [
    { left: "8%", top: "18%", size: 28, delay: 0.2, rotate: -18 },
    { left: "84%", top: "26%", size: 22, delay: 0.5, rotate: 14 },
    { left: "18%", top: "62%", size: 18, delay: 0.8, rotate: 8 },
    { left: "92%", top: "70%", size: 24, delay: 1.1, rotate: -6 },
    { left: "46%", top: "82%", size: 20, delay: 1.4, rotate: 22 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {paws.map((p, i) => (
        <motion.div
          key={i}
          className="absolute text-[#A37864]/15"
          style={{ left: p.left, top: p.top, rotate: p.rotate }}
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: 1,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.7, delay: p.delay },
            y: {
              duration: 4 + i * 0.4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: p.delay,
            },
          }}
        >
          <PawPrint style={{ width: p.size, height: p.size }} />
        </motion.div>
      ))}
    </div>
  );
}
