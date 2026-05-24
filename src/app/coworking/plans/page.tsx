import type { Metadata } from "next";
import { CoworkingNav, CoworkingFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "プラン｜AXIS Studios",
  description: "Drop-in / Resident / Team の3プランと、よくあるご質問。",
};

const PLANS = [
  {
    code: "P01",
    name: "Drop-in",
    price: "¥3,800",
    unit: "/day",
    features: [
      "全店舗 共通利用",
      "営業時間 9:00–22:00",
      "Wifi / 電源 / コーヒー",
      "Phone Booth 1h 込み",
      "ロッカー 当日のみ",
    ],
  },
  {
    code: "P02",
    name: "Resident",
    price: "¥38,000",
    unit: "/month",
    features: [
      "24h アクセス",
      "登記住所利用 OK",
      "郵便受け取り",
      "会議室 月8h クレジット",
      "Phone Booth 月10h クレジット",
      "全店舗 利用可",
      "Slack コミュニティ",
    ],
  },
  {
    code: "P03",
    name: "Team",
    price: "¥18万",
    unit: "/月〜",
    features: [
      "専有スペース 4〜10名",
      "Zoomブース 専有 1室",
      "Resident 特典 全て込み",
      "イベント運営支援",
      "登記・採用面談ルーム",
    ],
  },
];

const FAQ = [
  {
    q: "見学はできますか？",
    a: "平日 30 分の無料ツアーを承ります。事前予約制（最短翌日）です。",
  },
  {
    q: "月の途中から契約できますか？",
    a: "日割り計算で対応可能です。即日カードで決済、当日中にカードキーをお渡しします。",
  },
  {
    q: "解約はいつでもできますか？",
    a: "翌月解約は前月末まで、即日解約は対応していません（家賃保証の都合）。",
  },
  {
    q: "法人契約・経費精算用の請求書は出ますか？",
    a: "もちろん。インボイス対応、月締めPDFをメールでお送りします。",
  },
];

export default function CoworkingPlansPage() {
  return (
    <>
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden bg-[#0A0E1A]">
        <CoworkingNav />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 70% 40%, rgba(0,229,255,0.25) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-6xl">
            <SectionLabel className="font-mono text-[#00E5FF]">Plans</SectionLabel>
            <h1 className="mt-6 font-mono text-[clamp(3rem,8vw,8rem)] uppercase leading-[0.95] text-white">
              Pick your
              <br />
              <span className="text-[#00E5FF]">tier.</span>
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#0A0E1A] px-6 py-24 text-white sm:px-12 lg:px-20">
        <ul className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <FadeIn key={p.code} delay={i * 0.08}>
              <article className="flex h-full flex-col border border-white/10 bg-[#101522] p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                    {p.code}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]">
                    {p.name}
                  </span>
                </div>
                <p className="mt-6 font-mono text-5xl">{p.price}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                  {p.unit}
                </p>
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-white/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#00E5FF]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </ul>

        <section className="mx-auto mt-32 max-w-4xl">
          <SectionLabel number="02" className="font-mono text-[#00E5FF]">
            FAQ
          </SectionLabel>
          <h2 className="mt-6 font-mono text-3xl uppercase text-white sm:text-4xl">
            よくあるご質問
          </h2>
          <dl className="mt-12 space-y-8">
            {FAQ.map((f, i) => (
              <FadeIn key={f.q} delay={i * 0.05}>
                <div className="border-b border-white/10 pb-8">
                  <dt className="font-mono text-base font-bold text-white">
                    <span className="mr-3 font-mono text-[#00E5FF]">Q.</span>
                    {f.q}
                  </dt>
                  <dd className="mt-3 text-sm leading-loose text-white/75">
                    <span className="mr-3 font-mono text-[#00E5FF]">A.</span>
                    {f.a}
                  </dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </section>
      </main>

      <CoworkingFooter />
    </>
  );
}
