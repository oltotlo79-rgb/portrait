import type { Metadata } from "next";
import Image from "next/image";
import { BakeryNav, BakeryFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "ラインナップ｜麦と灯",
  description: "毎日焼き上がるパンの一覧と価格。",
};

const HARD = [
  { name: "クロワッサン", body: "発酵バター27層、二日仕込み", price: "¥380" },
  { name: "パン・オ・ショコラ", body: "ヴァローナのカカオ", price: "¥420" },
  { name: "カンパーニュ（1/2）", body: "自家ルヴァン、長時間発酵", price: "¥780" },
  { name: "バゲット", body: "国産小麦と天然塩", price: "¥420" },
  { name: "ライ麦パン", body: "ドイツ産ライ麦40%", price: "¥680" },
];

const SOFT = [
  { name: "あんバター", body: "自家炊き小倉あん×発酵バター", price: "¥420" },
  { name: "季節のデニッシュ", body: "月替わりの果実", price: "¥520" },
  { name: "クリームパン", body: "卵黄たっぷりのカスタード", price: "¥320" },
  { name: "塩バターロール", body: "ゲランドの塩", price: "¥280" },
  { name: "メロンパン", body: "もちもち生地、ザクッとビス", price: "¥320" },
];

export default function BakeryLineupPage() {
  return (
    <>
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden bg-[#FBF6ED]">
        <BakeryNav />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 60% 50%, rgba(212,166,71,0.4) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-5xl">
            <SectionLabel className="text-[#D4A647]">Lineup</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,7rem)] italic text-[#3A2A18]">
              Today&apos;s breads
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#FBF6ED] px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl space-y-20">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl italic text-[#6B4423]">
              Hard breads
            </h2>
            <ul className="mt-8 divide-y divide-[#3A2A18]/15 border-y border-[#3A2A18]/15">
              {HARD.map((b, i) => (
                <FadeIn key={b.name} delay={i * 0.04}>
                  <li className="grid grid-cols-[1fr_auto] items-baseline gap-6 py-5">
                    <div>
                      <p className="font-[family-name:var(--font-noto-serif-jp)] text-lg font-bold text-[#3A2A18]">
                        {b.name}
                      </p>
                      <p className="mt-1 text-xs text-[#3A2A18]/65">{b.body}</p>
                    </div>
                    <p className="text-base font-bold text-[#6B4423]">{b.price}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl italic text-[#6B4423]">
              Soft &amp; sweet
            </h2>
            <ul className="mt-8 divide-y divide-[#3A2A18]/15 border-y border-[#3A2A18]/15">
              {SOFT.map((b, i) => (
                <FadeIn key={b.name} delay={i * 0.04}>
                  <li className="grid grid-cols-[1fr_auto] items-baseline gap-6 py-5">
                    <div>
                      <p className="font-[family-name:var(--font-noto-serif-jp)] text-lg font-bold text-[#3A2A18]">
                        {b.name}
                      </p>
                      <p className="mt-1 text-xs text-[#3A2A18]/65">{b.body}</p>
                    </div>
                    <p className="text-base font-bold text-[#6B4423]">{b.price}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          <p className="text-center text-xs uppercase tracking-[0.3em] text-[#3A2A18]/50">
            ※ 焼き上がり時間と数量は日によって変動します
          </p>
        </div>
      </main>

      <BakeryFooter />
    </>
  );
}
