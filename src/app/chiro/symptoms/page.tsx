import type { Metadata } from "next";
import { ChiroNav, ChiroFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";

export const metadata: Metadata = {
  title: "お悩み別｜ことう整体院",
  description: "腰痛・肩こり・頭痛・スポーツ障害。症状別の対応をご紹介します。",
};

const ITEMS = [
  { ja: "腰痛", en: "Back Pain", body: "ぎっくり腰の応急処置から、慢性化した腰痛まで対応します。長時間のデスクワークの方、産後・育児中の方、加齢による痛みが気になる方のご相談が多くいただいています。", check: ["朝起きるときがつらい", "中腰で物を持ち上げると痛む", "週末しか動けない"] },
  { ja: "肩こり", en: "Stiff Neck", body: "スマホ・PC作業の姿勢、ストレスからくる首肩のこり。表面の筋肉だけでなく、深部の筋膜と関節の動きから整えていきます。", check: ["夕方になると頭痛が起こる", "腕が上がりにくい", "肩のこりで眠れない夜がある"] },
  { ja: "頭痛", en: "Headache", body: "緊張性頭痛、偏頭痛、噛みしめ由来。脳神経内科の受診をおすすめする症状もあります。原因の切り分けからご一緒に。", check: ["こめかみが脈打つように痛む", "後頭部の重さが続く", "市販薬の効きが悪くなってきた"] },
  { ja: "スポーツ障害", en: "Sports", body: "膝・肘・足首の慢性障害から、骨折・捻挫後のリハビリまで。地元の中高生アスリートのコンディショニングも多く担当しています。", check: ["練習後に決まった場所が痛む", "復帰したが本調子に戻らない", "ケガを繰り返している"] },
];

export default function ChiroSymptomsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-32 sm:py-40">
        <div className="pointer-events-none absolute -top-32 right-10 size-80 rounded-full bg-[#A9C4C4]/60 blur-3xl" aria-hidden />
        <ChiroNav />
        <div className="relative mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#2E5266]">Symptoms</p>
          <h1 className="mt-4 font-[family-name:var(--font-zen-maru)] text-[clamp(2.5rem,7vw,5rem)] font-bold text-[#1F2933]">
            症状別の対応
          </h1>
        </div>
      </section>
      <main className="bg-white px-6 pb-32 sm:px-12 lg:px-20">
        <ul className="mx-auto max-w-4xl space-y-12">
          {ITEMS.map((it, i) => (
            <FadeIn key={it.en} delay={i * 0.08}>
              <article className="rounded-3xl border-2 border-[#A9C4C4]/30 p-10">
                <p className="text-xs uppercase tracking-[0.3em] text-[#2E5266]">{it.en}</p>
                <h2 className="mt-2 font-[family-name:var(--font-zen-maru)] text-3xl font-bold text-[#1F2933]">
                  {it.ja}
                </h2>
                <p className="mt-6 text-sm leading-loose text-[#1F2933]/80">{it.body}</p>
                <ul className="mt-8 grid gap-2 rounded-2xl bg-[#F4F8F9] p-6 text-sm text-[#1F2933]/80">
                  {it.check.map((c) => (
                    <li key={c} className="flex gap-3"><span className="text-[#2E5266]">✓</span>{c}</li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </ul>
      </main>
      <ChiroFooter />
    </>
  );
}
