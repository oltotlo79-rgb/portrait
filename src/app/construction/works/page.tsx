import type { Metadata } from "next";
import Image from "next/image";
import { ConstructionNav, ConstructionFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";

export const metadata: Metadata = {
  title: "施工事例｜木下工務店",
  description: "信州松本で建てた、自然素材の住まい。最近の施工事例。",
};

const WORKS = [
  { code: "01", year: "2025", name: "松本市の平屋", body: "信州ヒノキの構造材、薪ストーブのリビング、土間玄関。", image: "/images/construction/02-case-01-exterior.webp" },
  { code: "02", year: "2024", name: "松本市の平屋・内観", body: "ローダウンリビング、家族のための広い土間。", image: "/images/construction/03-case-01-living.webp" },
  { code: "03", year: "2024", name: "安曇野の二世帯", body: "吹き抜けの共用リビング、中庭で繋がる二家族。", image: "/images/construction/05-case-02-exterior.webp" },
  { code: "04", year: "2023", name: "安曇野の二世帯・階段", body: "踏面の年輪、子どもたちの遊び場。", image: "/images/construction/07-case-02-stair.webp" },
  { code: "05", year: "2023", name: "諏訪湖畔の別荘", body: "雪景色に映える黒屋根、ヒノキ風呂、暖炉。", image: "/images/construction/08-case-03-exterior.webp" },
  { code: "06", year: "2022", name: "諏訪湖畔の別荘・浴室", body: "信州ヒノキの浴槽、湯気越しの雪。", image: "/images/construction/10-case-03-bath.webp" },
];

export default function ConstructionWorksPage() {
  return (
    <>
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden bg-[#2C2A28] text-[#F2EDE5]">
        <ConstructionNav />
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 70% 40%, rgba(196, 93, 46, 0.5) 0%, transparent 60%)" }} />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#C45D2E]">Works</p>
            <h1 className="mt-4 font-[family-name:var(--font-anton)] text-[clamp(4rem,12vw,11rem)] tracking-[0.02em] leading-none">
              ARCHIVE.
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#F2EDE5] px-6 py-24 sm:px-12 lg:px-20">
        <ul className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {WORKS.map((w, i) => (
            <FadeIn key={w.code} delay={(i % 2) * 0.06}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={w.image}
                    alt={w.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <h2 className="font-[family-name:var(--font-noto-serif-jp)] text-2xl font-bold text-[#2C2A28]">
                    {w.name}
                  </h2>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C45D2E]">{w.code} / {w.year}</span>
                </div>
                <p className="mt-3 max-w-md text-sm text-[#2C2A28]/75">{w.body}</p>
              </article>
            </FadeIn>
          ))}
        </ul>
      </main>
      <ConstructionFooter />
    </>
  );
}
