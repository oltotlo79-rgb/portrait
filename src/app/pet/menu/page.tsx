import type { Metadata } from "next";
import { PetNav, PetFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";

export const metadata: Metadata = {
  title: "メニュー・料金｜もこもこ Pet Salon",
  description: "カット・シャンプー・炭酸スパ・シニアケア・オプションメニューの料金一覧。",
};

const COURSES = [
  { en: "Trim", ja: "カットコース", body: "シャンプー・ブロー・カット・耳掃除・爪切り・足裏・肛門腺", small: "¥6,500", medium: "¥9,000", large: "¥13,000" },
  { en: "Bath", ja: "シャンプーコース", body: "シャンプー・ブロー・耳掃除・爪切り・足裏・肛門腺", small: "¥4,500", medium: "¥6,500", large: "¥9,500" },
  { en: "Cat", ja: "猫トリミング", body: "シャンプー・部分カット・爪切り", small: "¥8,000", medium: "—", large: "—" },
];
const OPTIONS = [
  { name: "炭酸スパ", price: "+¥1,800" },
  { name: "ホイップシャンプー", price: "+¥1,500" },
  { name: "シニアケア（10歳以上）", price: "+¥1,200" },
  { name: "デンタルケア", price: "+¥1,200" },
  { name: "肉球パック", price: "+¥800" },
];

export default function PetMenuPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FFF7EE] py-32 sm:py-40">
        <div className="pointer-events-none absolute -top-32 right-10 size-72 rounded-full bg-[#FFC97A]/60 blur-3xl" aria-hidden />
        <PetNav />
        <div className="relative mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A37864]">Menu</p>
          <h1 className="mt-4 font-[family-name:var(--font-zen-maru)] text-[clamp(2.5rem,7vw,5rem)] font-bold text-[#3B2A1C]">
            メニュー・料金
          </h1>
        </div>
      </section>
      <main className="bg-[#FFF7EE] px-6 pb-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl space-y-20">
          <ul className="space-y-6">
            {COURSES.map((c, i) => (
              <FadeIn key={c.en} delay={i * 0.08}>
                <article className="rounded-3xl bg-white p-8 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.15)]">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A37864]">{c.en}</p>
                  <h2 className="mt-2 text-2xl font-bold text-[#3B2A1C]">{c.ja}</h2>
                  <p className="mt-3 text-sm text-[#3B2A1C]/70">{c.body}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                    {[["小型犬", c.small], ["中型犬", c.medium], ["大型犬", c.large]].map(([k, v]) => (
                      <li key={k} className="rounded-xl bg-[#FFF7EE] p-4 text-center">
                        <p className="text-xs text-[#A37864]">{k}</p>
                        <p className="mt-1 text-xl font-bold text-[#3B2A1C]">{v}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </ul>

          <FadeIn>
            <section className="rounded-3xl bg-[#A37864] p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.3em]">Options</p>
              <h2 className="mt-2 text-2xl font-bold">追加オプション</h2>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {OPTIONS.map((o) => (
                  <li key={o.name} className="flex items-center justify-between rounded-xl bg-white/15 px-4 py-3 backdrop-blur-sm">
                    <span className="text-sm">{o.name}</span>
                    <span className="text-sm font-bold">{o.price}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>
        </div>
      </main>
      <PetFooter />
    </>
  );
}
