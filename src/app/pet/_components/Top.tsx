"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, Clock3, Heart, ShieldCheck } from "lucide-react";
import { FadeIn, KineticMarquee, RevealText } from "@/lib/animations";

const MENU = [
  { en: "Trim", ja: "カットコース", price: "6,500〜", body: "シャンプー・ブロー・カット・耳掃除・爪切り・足裏。" },
  { en: "Bath", ja: "シャンプーコース", price: "4,500〜", body: "オーガニックシャンプー・ブロー・ケア一式。" },
  { en: "Spa", ja: "炭酸スパ", price: "+1,800", body: "肌のキメと毛艶アップ。皮膚が弱い子にも。" },
  { en: "Senior", ja: "シニアケア", price: "+1,200", body: "10歳以上の子向け、休憩を多めに、ゆっくりと。" },
];

const STAFF = [
  { name: "Aoi", role: "店長", body: "JKC公認トリマーA級・カウンセラー資格", image: "/images/pet/12-staff-01.webp" },
  { name: "Hina", role: "トリマー", body: "JKC公認B級・小型犬とシニア犬専門", image: "/images/pet/13-staff-02.webp" },
  { name: "Kai", role: "トリマー", body: "猫専門・大型犬・大人しく取り扱い", image: "/images/pet/14-staff-03.webp" },
];

const GALLERY = [
  "/images/pet/02-dog-01.webp",
  "/images/pet/03-dog-02.webp",
  "/images/pet/04-dog-03.webp",
  "/images/pet/06-cat-01.webp",
  "/images/pet/07-cat-02.webp",
  "/images/pet/08-cat-03.webp",
];

export function PetTop() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFF7EE] pb-24 pt-32 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute -right-32 top-20 size-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, #FFC97A 0%, transparent 70%)" }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
          <div className="grid items-center gap-10 sm:grid-cols-[1fr_auto] sm:gap-10 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A37864]">
                Pet Salon · Kawasaki, Kosugi
              </p>
              <h1 className="mt-6 font-[family-name:var(--font-zen-maru)] text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] text-[#3B2A1C]">
                <RevealText text="うちの子だけの時間を、" splitBy="word" />
                <span className="block text-[#A37864]">
                  <RevealText text="いちばん大切に。" splitBy="word" delay={0.2} />
                </span>
              </h1>
              <FadeIn delay={0.5}>
                <p className="mt-8 max-w-lg text-base leading-loose text-[#3B2A1C]/80">
                  一頭ずつ、完全個別対応のトリミング。
                  他のワンちゃん・ネコちゃんと顔を合わせないので、
                  怖がりな子・シニアの子・初めての子犬も安心です。
                </p>
              </FadeIn>
              <FadeIn delay={0.7}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/pet/contact" className="rounded-full bg-[#A37864] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.05]">
                    予約する 🐾
                  </Link>
                  <Link href="/pet/menu" className="rounded-full border-2 border-[#3B2A1C] px-8 py-4 text-sm font-bold text-[#3B2A1C] transition-colors hover:bg-[#3B2A1C] hover:text-white">
                    メニュー・料金
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={0.9}>
                <div className="mt-10 grid max-w-xl gap-3 rounded-3xl border border-[#3B2A1C]/8 bg-white/76 p-4 shadow-[0_18px_70px_-40px_rgba(59,42,28,0.34)] backdrop-blur md:grid-cols-3">
                  {[
                    { icon: ShieldCheck, label: "個別", value: "1頭ずつ" },
                    { icon: Clock3, label: "休憩", value: "多めに" },
                    { icon: CalendarCheck, label: "予約", value: "WEB OK" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-2xl bg-[#FFF7EE] p-4">
                        <Icon className="size-5 text-[#A37864]" />
                        <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[#3B2A1C]/46">
                          {item.label}
                        </p>
                        <p className="mt-1 text-xl font-bold text-[#3B2A1C]">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>
            </div>

            {/* Photo: hidden on mobile (太字テキストを優先), visible sm+ as grid cell */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-none hidden justify-self-end sm:block"
            >
              <div className="relative size-56 overflow-hidden rounded-full border-4 border-white shadow-2xl md:size-64 lg:size-80 xl:size-96">
                <Image
                  src="/images/pet/01-hero-dog.webp"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1280px) 384px, (min-width: 1024px) 320px, (min-width: 768px) 256px, 224px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <KineticMarquee
        items={["trim", "bath", "spa", "senior care", "cat grooming", "private room"]}
        durationSeconds={32}
        className="border-y border-[#A37864]/16 bg-[#FFF7EE] py-5"
        trackClassName="font-[family-name:var(--font-zen-maru)] text-[clamp(2rem,5vw,4.7rem)] font-bold text-[#A37864]/22"
        separator={<Heart className="size-5 fill-[#FFC97A] text-[#FFC97A]" />}
      />

      {/* Promise */}
      <section className="bg-[#A37864] px-6 py-32 text-white sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em]">3つのお約束</p>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-zen-maru)] text-4xl font-bold sm:text-5xl">
            <span className="inline-block">一頭一頭、</span>
            <span className="inline-block">寄り添うサロンです。</span>
          </h2>
          <ul className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { e: "🛁", t: "完全個別対応", body: "他のわんちゃんと顔を合わせません。1頭ずつ。" },
              { e: "🌿", t: "オーガニック", body: "皮膚が敏感な子のために、低刺激のシャンプー。" },
              { e: "👵", t: "シニア対応", body: "10歳以上は休憩を多めに、ベテラントリマーが担当。" },
            ].map((p, i) => (
              <motion.li
                key={p.t}
                initial={{ opacity: 0, y: 24, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1, type: "spring" }}
                className="rounded-3xl bg-white/15 p-8 backdrop-blur-sm"
              >
                <div className="text-5xl">{p.e}</div>
                <h3 className="mt-4 text-2xl font-bold">{p.t}</h3>
                <p className="mt-3 text-sm leading-loose opacity-90">{p.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Menu */}
      <section className="bg-[#FFF7EE] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A37864]">Menu</p>
          <h2 className="mt-4 font-[family-name:var(--font-zen-maru)] text-4xl font-bold text-[#3B2A1C] sm:text-5xl">
            メニュー・料金
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {MENU.map((m, i) => (
              <motion.li
                key={m.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white p-8 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-baseline justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A37864]">{m.en}</p>
                  <p className="text-2xl font-bold text-[#A37864]">¥{m.price}</p>
                </div>
                <h3 className="mt-3 text-2xl font-bold text-[#3B2A1C]">{m.ja}</h3>
                <p className="mt-3 text-sm leading-loose text-[#3B2A1C]/70">{m.body}</p>
              </motion.li>
            ))}
          </ul>
          <p className="mt-8 text-center text-xs text-[#3B2A1C]/60">
            ※ 価格は小型犬の参考。中型・大型・猫種により変動します。
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#FFF7EE] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A37864]">Gallery</p>
          <h2 className="mt-4 font-[family-name:var(--font-zen-maru)] text-4xl font-bold text-[#3B2A1C] sm:text-5xl">
            ご来店の子たち。
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((src, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.06 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="bg-[#FFF7EE] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A37864]">Staff</p>
          <h2 className="mt-4 font-[family-name:var(--font-zen-maru)] text-4xl font-bold text-[#3B2A1C] sm:text-5xl">
            トリマー紹介
          </h2>
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {STAFF.map((s, i) => (
              <motion.li
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_24px_-16px_rgba(0,0,0,0.15)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`スタッフ ${s.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A37864]">{s.role}</p>
                  <h3 className="mt-1 text-2xl font-bold text-[#3B2A1C]">{s.name}</h3>
                  <p className="mt-3 text-sm text-[#3B2A1C]/70">{s.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#A37864] px-6 py-32 text-white sm:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-3xl">🐾 🐩 🐶</p>
          <h2 className="mt-6 font-[family-name:var(--font-zen-maru)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight">
            お待ちしています。
          </h2>
          <p className="mt-8 text-sm leading-loose opacity-90">
            初回ご来店は、カウンセリング30分付き。
            その子の性格に合わせたケアプランをご提案します。
          </p>
          <Link href="/pet/contact" className="mt-12 inline-block rounded-full bg-white px-12 py-5 font-bold text-[#A37864] transition-transform hover:scale-[1.05]">
            初回予約はこちら →
          </Link>
        </div>
      </section>
    </>
  );
}
