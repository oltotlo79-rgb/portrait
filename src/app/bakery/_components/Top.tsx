"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, RevealText, Tilt3D } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

const LINEUP = [
  {
    name: "クロワッサン",
    en: "Croissant",
    body: "発酵バターを27層に折り込み、二日かけて焼成。",
    price: "¥380",
    image: "/images/bakery/03-croissant.webp",
  },
  {
    name: "カンパーニュ",
    en: "Pain de Campagne",
    body: "自家培養のルヴァン種で長時間発酵。皮はパリッと、中はもっちり。",
    price: "¥780（1/2）",
    image: "/images/bakery/04-campagne.webp",
  },
  {
    name: "あんバター",
    en: "Anbatā",
    body: "自家炊きの小倉あんと、北海道発酵バター。塩バンに挟みます。",
    price: "¥420",
    image: "/images/bakery/05-anbutter.webp",
  },
  {
    name: "季節のデニッシュ",
    en: "Seasonal Danish",
    body: "5月はいちじく。6月は桃と紅茶のクレーム。",
    price: "¥520",
    image: "/images/bakery/06-danish.webp",
  },
];

const SCHEDULE = [
  { time: "05:00", body: "火入れ、生地を冷蔵庫から出す" },
  { time: "06:00", body: "クロワッサン焼成開始" },
  { time: "07:00", body: "ハード系（カンパーニュ・バゲット）焼成" },
  { time: "07:30", body: "OPEN" },
  { time: "11:00", body: "デニッシュ・菓子パン焼き上がり" },
  { time: "14:00", body: "夕方分の追加焼成" },
  { time: "18:30", body: "CLOSE" },
];

export function BakeryTop() {
  return (
    <>
      {/* Hero — 朝の光がオーブンから差し込むイメージ */}
      <section className="relative h-screen min-h-[680px] overflow-hidden bg-[#FBF6ED]">
        <Image
          src="/images/bakery/01-hero-shopfront.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Warm light overlay — pulses like oven warmth */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 40%, rgba(212,166,71,0.35) 0%, transparent 55%)",
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(251,246,237,0.2) 0%, rgba(251,246,237,0.55) 60%, rgba(251,246,237,0.85) 100%)",
          }}
          aria-hidden
        />

        {/* Floating flour particles */}
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="pointer-events-none absolute size-1 rounded-full bg-[#3A2A18]/30"
            initial={{
              x: `${(i * 73) % 100}vw`,
              y: "100vh",
              opacity: 0,
            }}
            animate={{
              y: "-10vh",
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 12 + (i % 5),
              delay: i * 0.7,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-24 sm:px-12 lg:px-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-[#6B4423]"
          >
            Boulangerie · Musashi-Koyama
          </motion.p>
          <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,9vw,8rem)] italic leading-[0.95] text-[#3A2A18]">
            <RevealText text="bread &" splitBy="word" />
            <span className="block font-[family-name:var(--font-noto-serif-jp)] not-italic text-[0.45em] tracking-[0.2em] text-[#3A2A18]/85">
              <RevealText text="朝の小さな灯。" splitBy="word" delay={0.3} />
            </span>
          </h1>

          <FadeIn delay={0.9}>
            <p className="mt-10 max-w-md text-sm leading-loose text-[#3A2A18]/80">
              武蔵小山の路地で、朝5時に火を入れます。
              粉と水と塩。仕掛けはありません、
              ただ生地の声に耳をすませる時間だけ。
            </p>
          </FadeIn>
          <FadeIn delay={1.1}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/bakery/lineup"
                className="rounded-full bg-[#3A2A18] px-8 py-4 text-sm text-[#FBF6ED] transition-transform hover:scale-[1.04]"
              >
                ラインナップ
              </Link>
              <Link
                href="/bakery/contact"
                className="rounded-full border-2 border-[#3A2A18] px-8 py-4 text-sm text-[#3A2A18] transition-colors hover:bg-[#3A2A18] hover:text-[#FBF6ED]"
              >
                お取り置き
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lineup — Tilt3D cards */}
      <section className="bg-[#FBF6ED] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="01" className="text-[#D4A647]">
            Lineup
          </SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl italic text-[#3A2A18]">
            Today&apos;s breads
          </h2>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LINEUP.map((p, i) => (
              <motion.li
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <Tilt3D
                  intensity={8}
                  raise={6}
                  glare
                  className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_-16px_rgba(0,0,0,0.15)]"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4A647]">
                      {p.en}
                    </p>
                    <h3 className="mt-1 font-[family-name:var(--font-noto-serif-jp)] text-lg font-bold text-[#3A2A18]">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#3A2A18]/70">
                      {p.body}
                    </p>
                    <p className="mt-3 text-sm font-bold text-[#6B4423]">
                      {p.price}
                    </p>
                  </div>
                </Tilt3D>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Schedule — Timeline */}
      <section
        id="schedule"
        className="bg-[#3A2A18] px-6 py-32 text-[#FBF6ED] sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-5xl">
          <SectionLabel number="02" className="text-[#D4A647]">
            Daily Schedule
          </SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl italic">
            A day at the oven
          </h2>

          <ol className="mt-16 space-y-2">
            {SCHEDULE.map((s, i) => (
              <motion.li
                key={s.time}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="grid grid-cols-[auto_auto_1fr] items-baseline gap-6 border-b border-[#FBF6ED]/15 py-5"
              >
                <span className="font-[family-name:var(--font-cormorant)] text-3xl italic text-[#D4A647]">
                  {s.time}
                </span>
                <span className="size-1 rounded-full bg-[#D4A647]" />
                <span className="text-sm leading-loose text-[#FBF6ED]/85">
                  {s.body}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Story — Baker portrait */}
      <section id="story" className="bg-[#FBF6ED] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/bakery/09-baker-portrait.webp"
              alt="店主の手元"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div>
            <SectionLabel number="03" className="text-[#D4A647]">
              Story
            </SectionLabel>
            <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl italic text-[#3A2A18]">
              From Lyon, to a corner of Tokyo.
            </h2>
            <FadeIn delay={0.15}>
              <p className="mt-8 max-w-md font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#3A2A18]/80">
                リヨンの小さなパティスリーで7年。
                帰国後、ホテルの厨房で5年。
                自分の朝の温度で生地を焼きたくなって、武蔵小山の路地に店を持ちました。
                <br />
                <br />
                派手な品揃えはありません。基本のものを、毎日少しずつ良くしていきます。
              </p>
              <p className="mt-8 font-[family-name:var(--font-cormorant)] text-2xl italic text-[#6B4423]">
                — Sho Hayashi, owner-baker
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#FBF6ED] px-6 py-40 sm:px-12 lg:px-20">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at center, rgba(212,166,71,0.5) 0%, transparent 60%)",
          }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#D4A647]">
            Reserve
          </p>
          <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,5rem)] italic leading-tight text-[#3A2A18]">
            <span className="inline-block">朝、温かいうちに。</span>
          </h2>
          <p className="mt-8 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#3A2A18]/80">
            人気のクロワッサンとカンパーニュは、前日までのお取り置きを承ります。
          </p>
          <Link
            href="/bakery/contact"
            className="mt-12 inline-block rounded-full bg-[#3A2A18] px-12 py-5 text-sm text-[#FBF6ED] transition-transform hover:scale-[1.04]"
          >
            お取り置きする →
          </Link>
        </div>
      </section>
    </>
  );
}
