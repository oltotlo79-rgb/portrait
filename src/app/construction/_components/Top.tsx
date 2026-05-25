"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Hammer, Ruler, TreePine } from "lucide-react";
import { FadeIn, KineticMarquee } from "@/lib/animations";

const WORKS = [
  { code: "01", name: "松本市の平屋", year: "2025", body: "信州ヒノキの構造材、薪ストーブの大窓リビング。", image: "/images/construction/02-case-01-exterior.webp" },
  { code: "02", name: "安曇野の二世帯", year: "2024", body: "吹き抜けと中庭を共有する、二家族の家。", image: "/images/construction/05-case-02-exterior.webp" },
  { code: "03", name: "諏訪湖畔の別荘", year: "2024", body: "雪景色に映える黒い屋根と、ヒノキ風呂。", image: "/images/construction/08-case-03-exterior.webp" },
];

const KPIS = [
  { v: "1,200+", s: "棟", l: "創業からの建築実績" },
  { v: "77", s: "年", l: "信州松本での歩み" },
  { v: "8", s: "名", l: "自社大工チーム" },
];

export function ConstructionTop() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[680px] overflow-hidden bg-[#2C2A28] text-[#F2EDE5]">
        <Image
          src="/images/construction/01-hero-house.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(circle at 30% 50%, rgba(196, 93, 46, 0.5) 0%, transparent 55%), linear-gradient(180deg, rgba(44,42,40,0.5) 0%, rgba(44,42,40,0.4) 60%, rgba(44,42,40,0.7) 100%)" }}
          aria-hidden
        />

        <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-7xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs uppercase tracking-[0.4em] text-[#C45D2E]"
            >
              Kinoshita · Builders since 1948 · Matsumoto, Nagano
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="mt-12 font-[family-name:var(--font-anton)] text-[clamp(8rem,28vw,22rem)] leading-[0.78] tracking-[-0.01em]"
            >
              <span className="block">100</span>
              <span className="block text-[0.18em] font-[family-name:var(--font-noto-serif-jp)] tracking-[0.2em] text-[#C45D2E]">
                YEARS — 100年もつ家を、手で建てる。
              </span>
            </motion.h1>

            <FadeIn delay={1.4}>
              <p className="mt-16 max-w-xl text-sm leading-loose text-[#F2EDE5]/80">
                信州松本で77年。地元産の木材と、自社大工8名の手仕事で、
                親子三代で住み継げる家を建てています。
              </p>
            </FadeIn>
            <FadeIn delay={1.6}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link href="/construction/works" className="inline-flex items-center gap-2 border border-[#C45D2E] px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#C45D2E] transition-colors hover:bg-[#C45D2E] hover:text-[#2C2A28]">
                  施工事例を見る
                  <ArrowUpRight className="size-3.5" />
                </Link>
                <Link href="/construction/contact" className="text-xs uppercase tracking-[0.3em] text-[#F2EDE5]/80 hover:text-white">
                  構造見学会を予約 →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={1.75}>
              <div className="mt-12 grid max-w-3xl gap-3 border border-[#F2EDE5]/14 bg-[#2C2A28]/58 p-4 backdrop-blur-md md:grid-cols-3">
                {[
                  { icon: TreePine, label: "Local wood", value: "信州ヒノキ" },
                  { icon: Hammer, label: "Craft team", value: "自社大工8名" },
                  { icon: Ruler, label: "Open house", value: "構造見学可" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="border-l border-[#C45D2E]/60 pl-4 first:border-l-0">
                      <Icon className="mb-3 size-5 text-[#C45D2E]" />
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#F2EDE5]/48">
                        {item.label}
                      </p>
                      <p className="mt-1 font-[family-name:var(--font-noto-serif-jp)] text-sm font-bold text-[#F2EDE5]">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <KineticMarquee
        items={["structure", "hinoki", "craftsman", "open house", "100 years", "matsumoto"]}
        durationSeconds={34}
        className="border-y border-[#C45D2E]/20 bg-[#2C2A28] py-5"
        trackClassName="font-[family-name:var(--font-anton)] text-[clamp(2.6rem,7vw,6rem)] tracking-[0.08em] text-[#F2EDE5]/18"
        separator={<CalendarCheck className="size-5 text-[#C45D2E]" />}
      />

      {/* Concept */}
      <section id="concept" className="bg-[#F2EDE5] px-6 py-40 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.3fr]">
          <p className="font-[family-name:var(--font-anton)] text-6xl tracking-[0.1em] text-[#C45D2E] sm:text-7xl">
            BUILT
            <br />
            BY HAND.
          </p>
          <div>
            <FadeIn>
              <h2 className="font-[family-name:var(--font-noto-serif-jp)] text-3xl font-bold leading-tight text-[#2C2A28] sm:text-4xl">
                木と、人と、時間を、
                <br />
                ひとつずつ。
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-10 max-w-lg text-sm leading-loose text-[#2C2A28]/80">
                標準化された工程はありません。土地に合わせ、家族に合わせ、
                棟梁と若手で図面を引き、木を選び、墨を打ち、組み上げる。
                住み始めてからのお付き合いも、地元の工務店だから続けられます。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="bg-[#2C2A28] px-6 py-32 text-[#F2EDE5] sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <ul className="grid gap-12 sm:grid-cols-3">
            {KPIS.map((k, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border-t border-[#C45D2E] pt-6"
              >
                <p className="font-[family-name:var(--font-anton)] text-7xl leading-none">
                  {k.v}
                  <span className="ml-2 text-3xl text-[#C45D2E]">{k.s}</span>
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#F2EDE5]/70">{k.l}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Works */}
      <section className="bg-[#F2EDE5] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C45D2E]">Works</p>
          <h2 className="mt-4 font-[family-name:var(--font-anton)] text-5xl tracking-[0.05em] text-[#2C2A28] sm:text-7xl">
            RECENT BUILDS.
          </h2>
          <ul className="mt-16 space-y-20">
            {WORKS.map((w, i) => (
              <motion.li
                key={w.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: i * 0.08 }}
                className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={w.image}
                    alt={w.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-[#C45D2E]">
                    {w.code} / {w.year}
                  </p>
                  <h3 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-3xl font-bold text-[#2C2A28] sm:text-4xl">
                    {w.name}
                  </h3>
                  <p className="mt-6 max-w-md text-sm leading-loose text-[#2C2A28]/80">{w.body}</p>
                  <Link href="/construction/works" className="mt-8 inline-block text-xs uppercase tracking-[0.3em] text-[#C45D2E] hover:text-[#2C2A28]">
                    Read more →
                  </Link>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-[#2C2A28] px-6 py-32 text-[#F2EDE5] sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/images/construction/15-master.webp"
              alt="棟梁 木下利夫"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#C45D2E]">Master</p>
            <h2 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-4xl font-bold">
              木下 利夫
            </h2>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#F2EDE5]/70">
              四代目棟梁 · 大工歴 42年
            </p>
            <p className="mt-8 max-w-md text-sm leading-loose text-[#F2EDE5]/80">
              祖父・父・伯父と続く家業を、四代目として継ぐ。
              30代の若手大工4名、ベテラン3名と、プレカットに頼らない墨付け・刻みを続けています。
              「100年もつ家」は、目の前のお客さまだけでなく、孫の代までを見据える仕事です。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F2EDE5] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C45D2E]">Tours</p>
          <h2 className="mt-6 font-[family-name:var(--font-anton)] text-[clamp(2.5rem,7vw,6rem)] tracking-[0.02em] text-[#2C2A28]">
            CONSTRUCTION TOURS, MONTHLY.
          </h2>
          <p className="mt-8 text-sm leading-loose text-[#2C2A28]/80">
            建築中の現場を、棟梁がご案内します。
            毎月第2土曜開催・参加無料・お子さま連れOK。
          </p>
          <Link href="/construction/contact" className="mt-12 inline-block border border-[#2C2A28] bg-[#2C2A28] px-12 py-5 text-sm uppercase tracking-[0.3em] text-[#F2EDE5] transition-colors hover:bg-[#C45D2E]">
            見学会を予約する →
          </Link>
        </div>
      </section>
    </>
  );
}
