"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";

const VOICES = [
  {
    age: "60代女性",
    where: "アイスランド10日間",
    body: "夫の還暦に。観光地ではなく、誰もいない地熱の湯と苔の上で過ごせる夜を作ってもらいました。一生忘れない旅でした。",
  },
  {
    age: "40代夫婦",
    where: "モロッコ・サハラ12日間",
    body: "コンシェルジュの方が、現地の方言で挨拶できるよう小さなフレーズ集まで作ってくれて、市場で本当に役に立ちました。",
  },
  {
    age: "50代男性",
    where: "ジョージア9日間",
    body: "ワインの産地を回るプラン。ガイドブックに載らない家族経営のワイナリーをいくつも案内してもらえました。",
  },
];

export function TravelVoice() {
  return (
    <section
      id="voice"
      className="relative bg-[#0F4C81] px-6 py-32 text-white sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="05" className="text-white/80">
          Voice
        </SectionLabel>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-noto-serif-jp)] text-4xl font-bold leading-tight sm:text-5xl">
          旅から、戻ってきた人の言葉。
        </h2>

        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {VOICES.map((v, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="rounded-2xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-sm"
            >
              <span className="font-[family-name:var(--font-cormorant)] text-5xl italic text-[#F4B400]">
                “
              </span>
              <p className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-white/90">
                {v.body}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-xs uppercase tracking-[0.2em] text-white/60">
                <span>{v.age}</span>
                <span>{v.where}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
