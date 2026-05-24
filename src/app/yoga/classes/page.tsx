import type { Metadata } from "next";
import { YogaNav, YogaFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "クラス一覧｜NAGI yoga & pilates",
  description: "週ごとの開講スケジュールとクラス内容。",
};

const SCHEDULE = [
  { day: "Mon", times: ["06:00 Sunrise Flow", "12:15 Power", "18:30 Hatha", "20:15 Restorative"] },
  { day: "Tue", times: ["07:15 Sunrise Flow", "11:00 Pilates", "19:00 Pilates", "20:15 Yin"] },
  { day: "Wed", times: ["06:00 Sunrise Flow", "12:15 Vinyasa", "18:30 Power", "20:15 Restorative"] },
  { day: "Thu", times: ["07:15 Sunrise Flow", "11:00 Pilates", "19:00 Pilates", "20:15 Yin"] },
  { day: "Fri", times: ["06:00 Sunrise Flow", "12:15 Power", "18:30 Hatha", "20:15 Restorative"] },
  { day: "Sat", times: ["08:00 Vinyasa 90", "10:30 Pilates", "13:00 Beginner", "16:00 Workshop"] },
  { day: "Sun", times: ["08:00 Mindful Flow", "10:30 Pilates", "13:00 Restorative"] },
];

export default function YogaClassesPage() {
  return (
    <>
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden bg-[#F4F0E8]">
        <YogaNav />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 60% 50%, rgba(232,213,183,0.6) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-5xl">
            <SectionLabel className="text-[#6B7F6F]">Classes</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,7rem)] italic text-[#2C3A2E]">
              Weekly schedule
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#F4F0E8] px-6 py-24 sm:px-12 lg:px-20">
        <ul className="mx-auto max-w-5xl space-y-3">
          {SCHEDULE.map((d, i) => (
            <FadeIn key={d.day} delay={i * 0.04}>
              <article className="grid gap-4 rounded-2xl bg-white p-6 lg:grid-cols-[120px_1fr] lg:items-center">
                <p className="font-[family-name:var(--font-cormorant)] text-3xl italic text-[#6B7F6F]">
                  {d.day}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {d.times.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-[#F4F0E8] px-4 py-2 text-xs text-[#2C3A2E]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </ul>

        <p className="mx-auto mt-12 max-w-3xl text-center text-xs uppercase tracking-[0.3em] text-[#2C3A2E]/50">
          ※ 祝日や講師都合により変更の場合があります。最新情報はアプリで配信中
        </p>
      </main>

      <YogaFooter />
    </>
  );
}
