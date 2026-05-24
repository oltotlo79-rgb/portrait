"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FadeIn, Tilt3D } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

const PLANS = [
  {
    code: "P01",
    name: "Drop-in",
    price: "¥3,800",
    unit: "/day",
    body: "本日だけ使いたい方に。Wifi・電源・コーヒー込み、ロッカーレンタル無料。",
    features: ["全店舗 共通利用", "営業時間内のみ", "会議室は別途課金"],
    accent: "#F4F6FA",
  },
  {
    code: "P02",
    name: "Resident",
    price: "¥38,000",
    unit: "/month",
    body: "毎日の自席として。24時間アクセス、会議室クレジット月8時間、住所利用可。",
    features: [
      "24h アクセス",
      "登記住所利用 OK",
      "会議室 月8h 込み",
      "全店舗 利用可",
    ],
    accent: "#00E5FF",
    highlight: true,
  },
  {
    code: "P03",
    name: "Team",
    price: "¥18万",
    unit: "/月〜",
    body: "4〜10名チーム向けの専有スペース。専用Slack、Zoomブース無料、会員企業ネットワーク。",
    features: ["専有スペース 4〜10名", "Zoomブース無料", "イベント運営支援"],
    accent: "#FFB100",
  },
];

const FACILITIES = [
  { icon: "WIFI", label: "Gigabit Wifi", body: "実測 800Mbps の専用回線" },
  { icon: "BOOTH", label: "Zoom ブース", body: "全店舗 6 室、防音設計" },
  { icon: "MEET", label: "会議室", body: "2〜12名、TV 会議システム付き" },
  { icon: "COFFEE", label: "ハンドドリップ", body: "毎日 3 種の豆を自家焙煎" },
  { icon: "SLEEP", label: "仮眠室", body: "リクライニング 2 席、24h 利用可" },
  { icon: "EVENT", label: "イベントスペース", body: "夜間貸切、定員 80 名" },
];

export function CoworkingTop() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Velocity grid stats */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#0A0E1A] px-6 py-16 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            { v: "24/7", l: "ACCESS" },
            { v: "800", l: "MBPS WIFI" },
            { v: "2", l: "LOCATIONS" },
            { v: "420+", l: "MEMBERS" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-l-2 border-[#00E5FF] pl-6"
            >
              <p className="font-mono text-3xl text-white sm:text-4xl">{s.v}</p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.3em] text-white/50">
                {s.l}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="bg-[#0A0E1A] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="01" className="font-mono text-[#00E5FF]">
            Plans
          </SectionLabel>
          <h2 className="mt-6 font-mono text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.95] tracking-[0.02em] text-white">
            Pick how
            <br />
            <span className="text-[#00E5FF]">you work.</span>
          </h2>

          <ul className="mt-16 grid gap-6 lg:grid-cols-3">
            {PLANS.map((p, i) => (
              <motion.li
                key={p.code}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <Tilt3D
                  intensity={6}
                  raise={4}
                  glare
                  className={`relative flex h-full flex-col border bg-[#101522] p-8 ${
                    p.highlight ? "border-[#00E5FF]" : "border-white/10"
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-8 bg-[#00E5FF] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-[#0A0E1A]">
                      Recommended
                    </span>
                  )}
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                      {p.code}
                    </span>
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.3em]"
                      style={{ color: p.accent }}
                    >
                      {p.name}
                    </span>
                  </div>
                  <p className="mt-6 font-mono text-5xl text-white">{p.price}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                    {p.unit}
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-white/75">
                    {p.body}
                  </p>
                  <ul className="mt-8 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-white/80">
                        <span
                          className="mt-1 size-1.5 shrink-0 rounded-full"
                          style={{ background: p.accent }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Tilt3D>
              </motion.li>
            ))}
          </ul>
          <p className="mt-12 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            All plans include · Coffee · Lockers · Print/Scan
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section
        id="facilities"
        className="bg-[#101522] px-6 py-32 sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="02" className="font-mono text-[#00E5FF]">
            Facilities
          </SectionLabel>
          <h2 className="mt-6 font-mono text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.95] tracking-[0.02em] text-white">
            Built for
            <br />
            <span className="text-[#00E5FF]">deep work.</span>
          </h2>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f, i) => (
              <motion.li
                key={f.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group relative border border-white/10 p-8 transition-colors hover:border-[#00E5FF]"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#00E5FF]">
                  {f.icon}
                </p>
                <h3 className="mt-4 font-mono text-xl uppercase tracking-[0.05em] text-white">
                  {f.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {f.body}
                </p>
                <span className="pointer-events-none absolute right-4 top-4 font-mono text-[10px] tracking-[0.2em] text-white/30">
                  / {String(i + 1).padStart(2, "0")}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Studio image */}
      <section className="relative overflow-hidden bg-[#0A0E1A]">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[60vh] min-h-[420px]"
        >
          <Image
            src="/images/coworking/02-studio.webp"
            alt="AXIS スタジオ内観"
            fill
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,14,26,0.4) 0%, rgba(10,14,26,0.7) 100%)",
            }}
          />
        </motion.div>
      </section>

      {/* Community */}
      <section
        id="community"
        className="bg-[#0A0E1A] px-6 py-32 sm:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionLabel number="03" className="font-mono text-[#00E5FF]">
              Community
            </SectionLabel>
            <h2 className="mt-6 font-mono text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.95] tracking-[0.02em] text-white">
              420 makers
              <br />
              <span className="text-[#00E5FF]">building today.</span>
            </h2>
          </div>
          <div>
            <FadeIn>
              <p className="text-sm leading-loose text-white/80">
                エンジニア、デザイナー、プロダクトマネージャー、PR、ファウンダー。
                平均会員数は 420 名。毎月数件の Demo Day、毎週水曜の「co-coding」、月一の「Founder
                Office Hour」など、自然に手が動くイベントを設計しています。
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 font-mono text-xs">
                <div>
                  <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Slack</dt>
                  <dd className="mt-1 text-white">会員専用、3500+ posts/mo</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Events</dt>
                  <dd className="mt-1 text-white">月平均 6 回</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Funding</dt>
                  <dd className="mt-1 text-white">VC・エンジェル紹介</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Hiring</dt>
                  <dd className="mt-1 text-white">会員間求人 30+/mo</dd>
                </div>
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section
        id="locations"
        className="bg-[#101522] px-6 py-32 sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="04" className="font-mono text-[#00E5FF]">
            Locations
          </SectionLabel>
          <h2 className="mt-6 font-mono text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.95] tracking-[0.02em] text-white">
            Two studios.
          </h2>

          <ul className="mt-16 grid gap-6 lg:grid-cols-2">
            {[
              {
                en: "Shibuya",
                ja: "渋谷スタジオ",
                addr: "渋谷区桜丘町◯-◯ · 渋谷駅 徒歩6分",
                cap: "席数 180 / 会議室 6",
                image: "/images/coworking/03-shibuya.webp",
              },
              {
                en: "Marunouchi",
                ja: "丸の内スタジオ",
                addr: "千代田区丸の内◯-◯ · 東京駅 徒歩3分",
                cap: "席数 240 / 会議室 8",
                image: "/images/coworking/04-marunouchi.webp",
              },
            ].map((l, i) => (
              <motion.li
                key={l.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group overflow-hidden border border-white/10 transition-colors hover:border-[#00E5FF]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={l.image}
                    alt={l.ja}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="bg-[#0A0E1A] p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#00E5FF]">
                    {l.en}
                  </p>
                  <h3 className="mt-2 font-mono text-2xl uppercase text-white">
                    {l.ja}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">{l.addr}</p>
                  <p className="mt-1 font-mono text-xs text-white/50">{l.cap}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0A0E1A] px-6 py-32 text-white sm:px-12 lg:px-20">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,229,255,0.12) 0%, transparent 50%)",
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#00E5FF]">
            Book a Tour
          </p>
          <h2 className="mt-8 font-mono text-[clamp(2.5rem,8vw,7rem)] uppercase leading-[0.95] tracking-[0.02em]">
            See the
            <br />
            <span className="text-[#00E5FF]">space.</span>
          </h2>
          <p className="mx-auto mt-10 max-w-xl text-sm leading-loose text-white/70">
            両店舗とも、平日 30 分の無料ツアーを承ります。
            空席状況や雰囲気を実際に確かめてからご検討ください。
          </p>
          <Link
            href="/coworking/contact"
            className="mt-14 inline-block border border-[#00E5FF] bg-[#00E5FF]/10 px-12 py-5 font-mono text-sm uppercase tracking-[0.3em] text-[#00E5FF] transition-colors hover:bg-[#00E5FF] hover:text-[#0A0E1A]"
          >
            Book a Tour →
          </Link>
        </div>
      </section>
    </>
  );
}

function HeroSection() {
  const glitchRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = glitchRef.current;
    if (!el) return;
    let count = 0;
    const id = setInterval(() => {
      count++;
      if (count > 8) {
        clearInterval(id);
        el.style.transform = "translate(0,0)";
        return;
      }
      const dx = (Math.random() - 0.5) * 6;
      const dy = (Math.random() - 0.5) * 3;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex h-screen min-h-[720px] items-center overflow-hidden bg-[#0A0E1A] text-white">
      <Image
        src="/images/coworking/01-hero-floor.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0 2px, white 2px 3px)",
        }}
        aria-hidden
      />

      {/* Neon corner accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 90% 10%, rgba(0,229,255,0.18) 0%, transparent 35%), radial-gradient(circle at 5% 95%, rgba(255,177,0,0.12) 0%, transparent 40%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dark vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,14,26,0.45) 0%, rgba(10,14,26,0.2) 50%, rgba(10,14,26,0.85) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-20">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#00E5FF]"
        >
          AXIS / Coworking Studios · Tokyo
        </motion.p>

        <h1 className="mt-8 font-mono uppercase leading-[0.88] tracking-[-0.01em]">
          <span
            ref={glitchRef}
            className="block text-[clamp(4rem,15vw,13rem)] text-white"
            style={{ transition: "transform 0.04s" }}
          >
            DEEP WORK,
          </span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="block text-[clamp(4rem,15vw,13rem)] text-[#00E5FF]"
          >
            ON-DEMAND.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-12 flex flex-wrap items-end gap-8"
        >
          <p className="max-w-md text-sm leading-loose text-white/80">
            スタートアップ・フリーランス・小規模チームのための、
            24時間アクセス可能なコワーキング。
            <br />
            渋谷と丸の内、二拠点を共通利用。
          </p>
          <div className="flex gap-3">
            <Link
              href="/coworking/contact"
              className="border border-[#00E5FF] bg-[#00E5FF]/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-[#00E5FF] transition-colors hover:bg-[#00E5FF] hover:text-[#0A0E1A]"
            >
              Book Tour
            </Link>
            <Link
              href="/coworking/plans"
              className="border border-white/30 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-white transition-colors hover:border-white"
            >
              See Plans
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-6 right-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 sm:left-12 sm:right-12 lg:left-20 lg:right-20"
        >
          <span>EST. 2020</span>
          <span className="text-[#00E5FF]">SCROLL ↓</span>
          <span>2 STUDIOS · TOKYO</span>
        </motion.div>
      </div>
    </section>
  );
}
