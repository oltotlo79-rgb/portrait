import type { Metadata } from "next";
import { DentalNav, DentalFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";

export const metadata: Metadata = {
  title: "診療内容｜白水歯科クリニック",
  description: "一般歯科・予防歯科・小児矯正・ホワイトニング・ホームケア指導。",
};

const ITEMS = [
  { code: "01", name: "一般歯科", body: "むし歯・歯周病の早期発見と治療。痛みの少ない処置を心がけています。", price: "保険適用 / 自費は要相談" },
  { code: "02", name: "予防歯科", body: "クリーニング、フッ素塗布、シーラント。3か月に1度の検診をおすすめします。", price: "保険適用 / クリーニング 4,400円" },
  { code: "03", name: "小児矯正", body: "成長を見ながら、無理のない矯正計画。マウスピース・床矯正・ワイヤー。", price: "33,000円〜 / 段階制" },
  { code: "04", name: "ホワイトニング", body: "ホームとオフィスの組み合わせ。色戻りを抑えたメンテナンスまで。", price: "オフィス 22,000円〜" },
  { code: "05", name: "ホームケア指導", body: "歯ブラシ・フロス・年代別の磨き方を、お子さまにも丁寧に。", price: "保険適用" },
];

export default function DentalMenuPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-32 sm:py-40">
        <div className="pointer-events-none absolute -top-40 -right-20 size-96 rounded-full bg-[#B7E4E4] opacity-50 blur-3xl" aria-hidden />
        <DentalNav />
        <div className="relative mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#5BB7B7]">Menu</p>
          <h1 className="mt-4 font-[family-name:var(--font-zen-kaku)] text-[clamp(2.5rem,7vw,5rem)] font-bold text-[#1F2933]">
            診療内容のご案内
          </h1>
        </div>
      </section>
      <main className="bg-white px-6 pb-32 sm:px-12 lg:px-20">
        <ul className="mx-auto max-w-4xl space-y-6">
          {ITEMS.map((it, i) => (
            <FadeIn key={it.code} delay={i * 0.06}>
              <article className="grid gap-4 rounded-3xl border-2 border-[#5BB7B7]/15 p-8 lg:grid-cols-[auto_1fr_auto] lg:items-baseline lg:gap-10">
                <p className="text-3xl font-bold text-[#5BB7B7]">{it.code}</p>
                <div>
                  <h2 className="text-2xl font-bold text-[#1F2933]">{it.name}</h2>
                  <p className="mt-3 text-sm leading-loose text-[#1F2933]/75">{it.body}</p>
                </div>
                <p className="text-sm font-bold text-[#1F2933]">{it.price}</p>
              </article>
            </FadeIn>
          ))}
        </ul>
      </main>
      <DentalFooter />
    </>
  );
}
