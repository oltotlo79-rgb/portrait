import type { Metadata } from "next";
import { KidsNav, KidsFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";

export const metadata: Metadata = {
  title: "プログラム｜ぽけっとラボ",
  description: "毎月のテーマと開講スケジュール。",
};

const SCHEDULE = [
  { date: "4月 第1週", title: "色のふしぎ実験", category: "実験", color: "#FF8FA3" },
  { date: "4月 第2週", title: "ペットボトル水族館", category: "工作", color: "#FFD166" },
  { date: "4月 第3週", title: "絵本でつくる紙芝居", category: "絵本", color: "#7AC4A2" },
  { date: "4月 第4週", title: "春のいちごジャム", category: "季節", color: "#E89AC7" },
  { date: "5月 第1週", title: "電気のしくみ実験", category: "実験", color: "#FF8FA3" },
  { date: "5月 第2週", title: "紙ねんどで動物園", category: "工作", color: "#FFD166" },
  { date: "5月 第3週", title: "宇宙の絵本ワーク", category: "絵本", color: "#7AC4A2" },
  { date: "5月 第4週", title: "新茶のかりんとう", category: "季節", color: "#E89AC7" },
];

export default function KidsProgramPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FFF9F0] py-32 sm:py-40">
        <div className="pointer-events-none absolute -top-32 right-10 size-72 rounded-full bg-[#FFD166] opacity-50 blur-3xl" aria-hidden />
        <KidsNav />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-12 lg:px-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">Program</p>
          <h1 className="mt-4 font-[family-name:var(--font-mplus-rounded)] text-[clamp(2.5rem,8vw,6rem)] font-extrabold leading-[1] text-[#3D2B1F]">
            毎週、ちがう
            <br />
            ふしぎを。
          </h1>
        </div>
      </section>

      <main className="bg-[#FFF9F0] px-6 pb-32 sm:px-12 lg:px-20">
        <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {SCHEDULE.map((s, i) => (
            <FadeIn key={i} delay={(i % 4) * 0.05}>
              <article
                className="rounded-2xl p-6 transition-transform hover:-translate-y-1"
                style={{ background: s.color + "22", border: `2px solid ${s.color}` }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: s.color }}>
                  {s.category}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-mplus-rounded)] text-2xl font-extrabold text-[#3D2B1F]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[#3D2B1F]/70">{s.date}</p>
              </article>
            </FadeIn>
          ))}
        </ul>
      </main>
      <KidsFooter />
    </>
  );
}
