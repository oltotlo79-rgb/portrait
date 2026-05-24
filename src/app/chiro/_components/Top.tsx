"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, RevealText } from "@/lib/animations";

const SYMPTOMS = [
  { ja: "腰痛", en: "Back Pain", body: "ぎっくり腰の応急、慢性化した痛みの原因まで。" },
  { ja: "肩こり", en: "Stiff Neck", body: "デスクワーク・スマホ姿勢に。" },
  { ja: "頭痛", en: "Headache", body: "緊張性頭痛・偏頭痛・噛みしめ由来。" },
  { ja: "スポーツ障害", en: "Sports", body: "膝・肘・足首。早期復帰のために。" },
];

const METHOD = [
  { n: "01", t: "問診", body: "現在の症状、生活習慣、お仕事の動きまで丁寧にうかがいます。" },
  { n: "02", t: "可動域検査", body: "関節の動きと、姿勢のクセを目視と触診で確認。" },
  { n: "03", t: "施術", body: "原因に応じた手技を、強さを確認しながら行います。" },
  { n: "04", t: "セルフケア指導", body: "ご自宅でできるストレッチと、避けるべき姿勢をお伝えします。" },
  { n: "05", t: "次回計画", body: "回復のステップを共有。無理な通院は提案しません。" },
];

export function ChiroTop() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-24 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute -right-40 top-20 size-[480px] rounded-full" style={{ background: "radial-gradient(circle, #A9C4C4 0%, transparent 70%)" }} aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#2E5266]">Kotou Chiropractic · Aoba, Yokohama</p>
          <h1 className="mt-6 font-[family-name:var(--font-zen-maru)] text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.1] text-[#1F2933]">
            <RevealText text="痛みの「原因」を、" splitBy="word" />
            <span className="block text-[#2E5266]">
              <RevealText text="しずかに整える。" splitBy="word" delay={0.2} />
            </span>
          </h1>
          <FadeIn delay={0.5}>
            <p className="mt-10 max-w-xl text-base leading-loose text-[#1F2933]/80">
              横浜・青葉区の整体院。柔道整復師歴15年の院長が、
              一人ひとりの症状の根本にあるものを見つけ、無理のない手技でほぐしていきます。
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link href="/chiro/contact" className="rounded-full bg-[#2E5266] px-8 py-4 text-sm text-white transition-transform hover:scale-[1.04]">
                予約する
              </Link>
              <Link href="/chiro/symptoms" className="rounded-full border-2 border-[#2E5266] px-8 py-4 text-sm text-[#2E5266] transition-colors hover:bg-[#2E5266] hover:text-white">
                症状別に見る
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Symptoms */}
      <section className="bg-[#F4F8F9] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#2E5266]">Symptoms</p>
          <h2 className="mt-4 font-[family-name:var(--font-zen-maru)] text-4xl font-bold text-[#1F2933] sm:text-5xl">こんなお悩みに。</h2>
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SYMPTOMS.map((s, i) => (
              <motion.li
                key={s.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_-16px_rgba(46,82,102,0.25)]"
              >
                <div className="grid size-12 place-items-center rounded-full bg-[#A9C4C4]/30 text-[#2E5266]">
                  <span className="text-2xl">●</span>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-zen-maru)] text-2xl font-bold text-[#1F2933]">{s.ja}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#2E5266]">{s.en}</p>
                <p className="mt-4 text-sm leading-loose text-[#1F2933]/75">{s.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="bg-white px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#2E5266]">Method</p>
          <h2 className="mt-4 font-[family-name:var(--font-zen-maru)] text-4xl font-bold text-[#1F2933] sm:text-5xl">施術の流れ</h2>
          <ol className="mt-12 space-y-4">
            {METHOD.map((m, i) => (
              <motion.li
                key={m.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="grid grid-cols-[auto_1fr] items-baseline gap-6 rounded-2xl border-2 border-[#A9C4C4]/40 p-6"
              >
                <span className="font-[family-name:var(--font-zen-maru)] text-3xl font-bold text-[#2E5266]">{m.n}</span>
                <div>
                  <p className="text-xl font-bold text-[#1F2933]">{m.t}</p>
                  <p className="mt-1 text-sm leading-loose text-[#1F2933]/70">{m.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Doctor */}
      <section id="doctor" className="bg-[#F4F8F9] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/chiro/06-doctor.webp"
              alt="院長 古藤健一"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#2E5266]">Doctor</p>
            <h2 className="mt-4 font-[family-name:var(--font-zen-maru)] text-4xl font-bold text-[#1F2933]">古藤 健一</h2>
            <p className="mt-1 text-sm text-[#2E5266]">院長 / 柔道整復師（柔整歴15年）</p>
            <p className="mt-8 max-w-md text-sm leading-loose text-[#1F2933]/80">
              スポーツ専門の整骨院で10年勤務、地域密着の整体院で5年。
              「『その場の痛みを取る』だけでは戻ってしまう」を実感し、原因にアプローチする整体院を開業。
              地元のラグビー部、サッカークラブのトレーナーも兼任。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2E5266] px-6 py-32 text-white sm:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em]">Reservation</p>
          <h2 className="mt-6 font-[family-name:var(--font-zen-maru)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight">
            <span className="inline-block">まずは初回</span>
            <span className="inline-block">60分から。</span>
          </h2>
          <p className="mt-8 text-sm leading-loose opacity-90">
            初回 ¥6,000（問診＋検査＋施術＋セルフケア指導）。2回目以降 ¥4,500。
          </p>
          <Link href="/chiro/contact" className="mt-12 inline-block rounded-full bg-white px-12 py-5 font-bold text-[#2E5266] transition-transform hover:scale-[1.04]">
            予約する →
          </Link>
        </div>
      </section>
    </>
  );
}
