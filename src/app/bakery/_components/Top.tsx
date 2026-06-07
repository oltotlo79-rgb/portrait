"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Coffee, Flame, Wheat } from "lucide-react";
import {
  AmbientParticles,
  FadeIn,
  KineticMarquee,
  RevealText,
  Tilt3D,
} from "@/lib/animations";
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

const HERO_STATS = [
  { label: "First bake", value: "06:00" },
  { label: "Open", value: "07:30" },
  { label: "Sold out", value: "15:00頃" },
];

const CRAFT_STEPS = [
  {
    number: "01",
    title: "粉を選ぶ",
    body: "北海道産小麦とライ麦を、その日の湿度に合わせて配合します。",
    image: "/images/bakery/07-flour-light.webp",
  },
  {
    number: "02",
    title: "生地を見る",
    body: "温度計だけに頼らず、手触りと香りで発酵の進みを確かめます。",
    image: "/images/bakery/08-hands-knead.webp",
  },
  {
    number: "03",
    title: "火を入れる",
    body: "朝の一番窯はクロワッサン。層が立つ温度だけを狙います。",
    image: "/images/bakery/02-oven-morning.webp",
  },
];

const PAIRINGS = [
  { bread: "クロワッサン", drink: "深煎りブレンド", note: "バターの甘さを苦味で締める" },
  { bread: "カンパーニュ", drink: "季節のスープ", note: "酸味と野菜の甘みを合わせる" },
  { bread: "あんバター", drink: "ミルクコーヒー", note: "塩気と小倉あんをやわらげる" },
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

        <AmbientParticles
          count={14}
          seed={603}
          className="z-[1]"
          particleClassName="bg-[#3A2A18]/30"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-16 pt-32 sm:px-12 lg:px-20">
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
              <RevealText text="朝の小さな灯" splitBy="word" delay={0.3} />
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

        <div className="absolute bottom-6 right-6 z-20 hidden w-[320px] rounded-2xl border border-[#3A2A18]/12 bg-[#FBF6ED]/82 p-4 text-[#3A2A18] shadow-[0_24px_80px_-36px_rgba(58,42,24,0.45)] backdrop-blur-md lg:block">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/bakery/11-bread-stack.webp"
              alt="焼き上がったパン"
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
          <div className="mt-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4A647]">
                Morning batch
              </p>
              <p className="mt-1 font-[family-name:var(--font-noto-serif-jp)] text-sm font-bold">
                11:00 デニッシュ焼き上がり
              </p>
            </div>
            <Flame className="mt-1 size-5 text-[#C8793B]" />
          </div>
        </div>
      </section>

      <KineticMarquee
        items={["croissant", "levain", "butter", "morning coffee", "baguette", "sold out"]}
        durationSeconds={36}
        className="border-y border-[#3A2A18]/10 bg-[#3A2A18] py-5"
        trackClassName="font-[family-name:var(--font-cormorant)] text-[clamp(2.6rem,6vw,5.8rem)] italic text-[#FBF6ED]/24"
        separator={<span className="inline-block h-px w-16 bg-[#D4A647]/80" />}
      />

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

      {/* Craft */}
      <section className="bg-[#F2E7D6] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:items-end">
            <div>
              <SectionLabel number="02" className="text-[#C8793B]">
                Craft
              </SectionLabel>
              <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,6rem)] italic leading-none text-[#3A2A18]">
                Flour,
                <br />
                hands,
                <br />
                fire.
              </h2>
              <p className="mt-8 max-w-sm font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#3A2A18]/72">
                ベーカリーサイトは、商品写真だけでは少し弱い。
                工程の温度と手触りを見せることで、価格以上の理由を伝えます。
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {CRAFT_STEPS.map((step, i) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="group bg-[#FBF6ED]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#FBF6ED]/86 px-3 py-1 font-[family-name:var(--font-cormorant)] text-2xl italic text-[#3A2A18] backdrop-blur">
                      {step.number}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-noto-serif-jp)] text-lg font-bold text-[#3A2A18]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#3A2A18]/68">
                      {step.body}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule — Timeline */}
      <section
        id="schedule"
        className="bg-[#3A2A18] px-6 py-32 text-[#FBF6ED] sm:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <SectionLabel number="03" className="text-[#D4A647]">
              Daily Schedule
            </SectionLabel>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,6rem)] italic leading-none">
              A day
              <br />
              at the oven
            </h2>
            <div className="mt-10 overflow-hidden rounded-2xl border border-[#FBF6ED]/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/bakery/02-oven-morning.webp"
                  alt="朝のオーブン"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 divide-x divide-[#FBF6ED]/10 bg-[#27190E] text-xs">
                <div className="p-4">
                  <Clock3 className="mb-3 size-4 text-[#D4A647]" />
                  月・火 定休
                </div>
                <div className="p-4">
                  <Wheat className="mb-3 size-4 text-[#D4A647]" />
                  なくなり次第終了
                </div>
              </div>
            </div>
          </div>

          <ol className="space-y-2">
            {SCHEDULE.map((s, i) => (
              <motion.li
                key={s.time}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="grid grid-cols-[auto_auto_1fr] items-baseline gap-6 border-b border-[#FBF6ED]/15 py-6"
              >
                <span className="font-[family-name:var(--font-cormorant)] text-4xl italic text-[#D4A647]">
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

      {/* Pairing */}
      <section className="bg-[#FBF6ED] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
          <div className="relative min-h-[520px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
              className="absolute left-0 top-0 h-[58%] w-[72%] overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/bakery/12-coffee-pair.webp"
                alt="パンとコーヒー"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.12 }}
              className="absolute bottom-0 right-0 h-[56%] w-[58%] overflow-hidden rounded-2xl border-[10px] border-[#FBF6ED]"
            >
              <Image
                src="/images/bakery/10-counter.webp"
                alt="店内カウンター"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div>
            <SectionLabel number="04" className="text-[#D4A647]">
              Pairing
            </SectionLabel>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,5.5rem)] italic leading-none text-[#3A2A18]">
              Take a seat,
              <br />
              while warm.
            </h2>
            <p className="mt-8 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#3A2A18]/72">
              焼き立てを持ち帰るだけでなく、店内の小さなカウンターで一息。
              パンに合わせて、コーヒーとスープを日替わりで用意しています。
            </p>
            <ul className="mt-8 divide-y divide-[#3A2A18]/12 border-y border-[#3A2A18]/12">
              {PAIRINGS.map((item) => (
                <li key={item.bread} className="grid grid-cols-[auto_1fr] gap-4 py-4">
                  <Coffee className="mt-1 size-4 text-[#C8793B]" />
                  <div>
                    <p className="text-sm font-bold text-[#3A2A18]">
                      {item.bread} / {item.drink}
                    </p>
                    <p className="mt-1 text-xs text-[#3A2A18]/62">{item.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
            <SectionLabel number="05" className="text-[#D4A647]">
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
            <span className="inline-block">朝、温かいうちに</span>
          </h2>
          <p className="mt-8 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#3A2A18]/80">
            人気のクロワッサンとカンパーニュは、前日までのお取り置きを承ります。
          </p>
          <Link
            href="/bakery/contact"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-[#3A2A18] px-12 py-5 text-sm text-[#FBF6ED] transition-transform hover:scale-[1.04]"
          >
            お取り置きする
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
