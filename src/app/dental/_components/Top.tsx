"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, RevealText, Tilt3D } from "@/lib/animations";

const MENU = [
  {
    code: "01",
    name: "一般歯科",
    body: "むし歯・歯周病の治療、定期検診。",
    icon: "/images/dental/09-icon-general.svg",
  },
  {
    code: "02",
    name: "予防歯科",
    body: "クリーニング、フッ素、シーラント。",
    icon: "/images/dental/10-icon-prevention.svg",
  },
  {
    code: "03",
    name: "小児矯正",
    body: "成長期の歯並び。マウスピース・床矯正・ワイヤー。",
    icon: "/images/dental/11-icon-ortho.svg",
  },
  {
    code: "04",
    name: "ホワイトニング",
    body: "ホーム＋オフィスの組み合わせ。",
    icon: "/images/dental/13-icon-whitening.svg",
  },
  {
    code: "05",
    name: "ホームケア指導",
    body: "歯ブラシ・フロス・年代別ケアのレッスン。",
    icon: "/images/dental/16-icon-homecare.svg",
  },
];

const PROMISES = [
  {
    t: "個室診療",
    body: "周りを気にせず、お話しください。",
    image: "/images/dental/04-room.webp",
  },
  {
    t: "痛みに配慮",
    body: "表面麻酔と細い針で、できる限り痛みを減らします。",
    image: "/images/dental/02-reception.webp",
  },
  {
    t: "キッズスペース",
    body: "絵本と木のおもちゃ。保育士資格のスタッフ常駐。",
    image: "/images/dental/03-kidspace.webp",
  },
];

const FLOW = [
  { n: "01", t: "WEB予約", body: "ご都合の日時を選択（来院・オンライン)" },
  { n: "02", t: "カウンセリング 30分", body: "お困りごとと、ご希望を伺います" },
  { n: "03", t: "検査・撮影", body: "デジタルレントゲン＋口腔内スキャン" },
  { n: "04", t: "治療計画のご提案", body: "費用と期間まで明確にお伝えします" },
  { n: "05", t: "ご納得後、治療開始", body: "計画通りに、無理なく進めます" },
];

export function DentalTop() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pb-24 pt-36 sm:pt-40">
        {/* Background photo (very subtle) */}
        <Image
          src="/images/dental/01-hero-light.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        {/* Soft shapes */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute -right-32 top-20 size-[420px] rounded-full"
          style={{
            background: "radial-gradient(circle, #B7E4E4 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute -left-32 -bottom-32 size-[420px] rounded-full"
          style={{
            background: "radial-gradient(circle, #FFC9B3 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#5BB7B7]">
            Shiromizu Dental · Urawa
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-zen-kaku)] text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[1.05] text-[#1F2933]">
            <RevealText text="歯医者さん、" splitBy="word" />
            <span className="block text-[#5BB7B7]">
              <RevealText text="苦手じゃなくなる。" splitBy="word" delay={0.2} />
            </span>
          </h1>
          <FadeIn delay={0.5}>
            <p className="mt-10 max-w-xl text-base leading-loose text-[#1F2933]/80">
              さいたま浦和の予防型歯科。
              個室診療、キッズスペース完備。お子さま連れも、痛みが苦手な方も、安心してお越しください。
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/dental/contact"
                className="rounded-full bg-[#5BB7B7] px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.04]"
              >
                WEB予約する
              </Link>
              <Link
                href="/dental/menu"
                className="rounded-full border-2 border-[#1F2933] px-8 py-4 text-sm font-bold text-[#1F2933] transition-colors hover:bg-[#1F2933] hover:text-white"
              >
                診療内容
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Promises */}
      <section className="bg-[#F4F8F9] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#5BB7B7]">
            3つの安心
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-zen-kaku)] text-4xl font-bold text-[#1F2933] sm:text-5xl">
            <span className="inline-block">やわらかい、</span>
            <span className="inline-block">医療を。</span>
          </h2>
          <ul className="mt-16 grid gap-6 sm:grid-cols-3">
            {PROMISES.map((p, i) => (
              <motion.li
                key={p.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <Tilt3D
                  intensity={8}
                  raise={6}
                  glare
                  className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_24px_-16px_rgba(31,41,51,0.2)]"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={p.image}
                      alt={p.t}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#1F2933]">{p.t}</h3>
                    <p className="mt-3 text-sm leading-loose text-[#1F2933]/70">
                      {p.body}
                    </p>
                  </div>
                </Tilt3D>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Menu */}
      <section className="bg-white px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#5BB7B7]">Menu</p>
          <h2 className="mt-4 font-[family-name:var(--font-zen-kaku)] text-4xl font-bold text-[#1F2933] sm:text-5xl">
            診療内容
          </h2>
          <ul className="mt-12 divide-y divide-[#1F2933]/10 border-y border-[#1F2933]/10">
            {MENU.map((m, i) => (
              <motion.li
                key={m.code}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-6 py-6"
              >
                <span className="text-2xl font-bold text-[#5BB7B7]">{m.code}</span>
                <div className="grid size-12 place-items-center rounded-full bg-[#5BB7B7]/10">
                  <Image
                    src={m.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="size-7"
                  />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#1F2933]">{m.name}</p>
                  <p className="mt-1 text-sm text-[#1F2933]/65">{m.body}</p>
                </div>
                <Link
                  href="/dental/menu"
                  className="hidden text-xs uppercase tracking-[0.25em] text-[#5BB7B7] sm:block"
                >
                  Detail →
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Family — 親子で来院 */}
      <section className="bg-[#F4F8F9] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/dental/06-family.webp"
              alt="親子で来院されるシーン"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#5BB7B7]">
              For Families
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-zen-kaku)] text-4xl font-bold text-[#1F2933] sm:text-5xl">
              <span className="inline-block">お子さま連れも、</span>
              <span className="inline-block">おひとりさまも。</span>
            </h2>
            <FadeIn delay={0.15}>
              <p className="mt-8 max-w-md text-sm leading-loose text-[#1F2933]/80">
                ベビーカーのまま入れる広い通路。診療中はキッズスペースで保育士資格のスタッフがお預かりします。
                ご夫婦や親子で連続して受診される方も多いです。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Smile — 目指したい笑顔 */}
      <section className="bg-white px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#5BB7B7]">
              Smile
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-zen-kaku)] text-4xl font-bold text-[#1F2933] sm:text-5xl">
              <span className="inline-block">めざすのは、</span>
              <span className="inline-block">自然な笑顔。</span>
            </h2>
            <FadeIn delay={0.15}>
              <p className="mt-8 max-w-md text-sm leading-loose text-[#1F2933]/80">
                小児矯正は「歯並びを整える」だけではなく、
                その先の何十年を、自分の歯で気持ちよく笑えるように。
                成長を見ながら、無理のない段階で進めていきます。
              </p>
            </FadeIn>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/dental/18-smile-detail.webp"
              alt="子どもの自然な笑顔"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Doctor */}
      <section
        id="doctor"
        className="bg-[#F4F8F9] px-6 py-32 sm:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/images/dental/05-doctor.webp"
              alt="院長 白水由貴"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#5BB7B7]">
              Doctor
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-zen-kaku)] text-4xl font-bold text-[#1F2933]">
              白水 由貴
            </h2>
            <p className="mt-1 text-sm text-[#5BB7B7]">院長 / 歯学博士</p>
            <p className="mt-8 max-w-md text-sm leading-loose text-[#1F2933]/80">
              「予防にちからを入れた歯科にしたい」と、地元浦和で開業。
              小児・矯正の経験を活かし、お子さまも大人もまるごとケアする院を目指しています。子育て中の母でもあります。
            </p>
          </div>
        </div>
      </section>

      {/* Equipment — 設備とこだわり */}
      <section className="bg-[#F4F8F9] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#5BB7B7]">
            Equipment
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-zen-kaku)] text-4xl font-bold text-[#1F2933] sm:text-5xl">
            設備とこだわり
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                src: "/images/dental/07-equipment-01.webp",
                t: "ダイアグノデント",
                body: "むし歯の初期段階を、痛みなく光で診断します。",
              },
              {
                src: "/images/dental/08-equipment-02.webp",
                t: "クラスB滅菌器",
                body: "ヨーロッパ規格・最上位クラスの滅菌で器具を一本ずつ管理。",
              },
            ].map((e, i) => (
              <motion.li
                key={e.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_24px_-16px_rgba(31,41,51,0.15)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={e.src}
                    alt={e.t}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1F2933]">{e.t}</h3>
                  <p className="mt-2 text-sm text-[#1F2933]/70">{e.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="bg-white px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#5BB7B7]">Flow</p>
          <h2 className="mt-4 font-[family-name:var(--font-zen-kaku)] text-4xl font-bold text-[#1F2933] sm:text-5xl">
            ご来院から治療まで
          </h2>

          <FadeIn delay={0.1}>
            <div className="mx-auto mt-10 max-w-3xl">
              <Image
                src="/images/dental/14-flow-svg.svg"
                alt="5ステップの流れ図"
                width={1200}
                height={200}
                className="h-auto w-full opacity-80"
              />
            </div>
          </FadeIn>

          <ol className="mt-12 space-y-6">
            {FLOW.map((f, i) => (
              <motion.li
                key={f.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="grid grid-cols-[auto_1fr] gap-6 rounded-2xl border-2 border-[#5BB7B7]/15 p-6"
              >
                <span className="font-[family-name:var(--font-zen-kaku)] text-4xl font-bold text-[#5BB7B7]">
                  {f.n}
                </span>
                <div>
                  <p className="text-xl font-bold text-[#1F2933]">{f.t}</p>
                  <p className="mt-1 text-sm text-[#1F2933]/70">{f.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#5BB7B7] px-6 py-32 text-white sm:px-12 lg:px-20">
        <Image
          src="/images/dental/17-cta-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#FFC9B3] opacity-50 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em]">Web Reservation</p>
          <h2 className="mt-6 font-[family-name:var(--font-zen-kaku)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight">
            次の検診、
            <br />
            今からどうぞ。
          </h2>
          <p className="mt-8 text-sm leading-loose opacity-90">
            24時間WEB予約。お電話でも承ります。
          </p>
          <Link
            href="/dental/contact"
            className="mt-12 inline-block rounded-full bg-white px-12 py-5 font-bold text-[#5BB7B7] transition-transform hover:scale-[1.04]"
          >
            WEB予約する →
          </Link>
        </div>
      </section>
    </>
  );
}
