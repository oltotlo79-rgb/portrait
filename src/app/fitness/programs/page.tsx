import type { Metadata } from "next";
import { FitnessNav } from "../_components/Nav";
import { FitnessFooter } from "../_components/Footer";
import { PROGRAMS } from "../_components/programs-data";
import { FadeIn } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "プログラム｜IGNITE 24/7",
  description: "パーソナル、グループHIIT、栄養指導、オンライン。4つのトラックから選ぶ。",
};

const DETAILS = [
  { label: "セッション", value: "60分 × 月4〜8回" },
  { label: "対象", value: "初心者〜上級者" },
  { label: "場所", value: "全店舗利用可" },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden bg-[#0A0A0A] text-white">
        <FitnessNav />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(255, 230, 0, 0.35) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(255, 45, 85, 0.25) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-6xl">
            <SectionLabel className="text-[#FFE600]">Programs</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-bebas)] text-[clamp(3rem,9vw,8rem)] leading-[0.9]">
              Pick your
              <br />
              <span className="text-[#FFE600]">fight.</span>
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#0A0A0A] px-6 py-24 text-white sm:px-12 lg:px-20">
        <ul className="mx-auto max-w-5xl space-y-20">
          {PROGRAMS.map((p, i) => (
            <FadeIn key={p.code} delay={i * 0.06}>
              <article className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
                <div className="relative overflow-hidden">
                  <div
                    className="aspect-[4/5]"
                    style={{ background: p.gradient }}
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 border-2"
                    style={{ borderColor: p.accent + "40" }}
                  />
                </div>
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-[0.3em]"
                    style={{ color: p.accent }}
                  >
                    {p.code} · {p.ja}
                  </span>
                  <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-7xl tracking-[0.01em]">
                    {p.title}
                  </h2>
                  <p className="mt-6 max-w-lg leading-loose text-white/75">{p.body}</p>
                  <dl className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-xs sm:grid-cols-3">
                    {DETAILS.map((d) => (
                      <div key={d.label}>
                        <dt className="font-bold uppercase tracking-[0.3em] text-[#FFE600]">
                          {d.label}
                        </dt>
                        <dd className="mt-1 text-white/80">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </FadeIn>
          ))}
        </ul>
      </main>

      <FitnessFooter />
    </>
  );
}
