"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    code: "M01",
    price: "9,800",
    unit: "/月",
    body: "ジム会員。マシン使い放題。",
    features: [
      "24時間使い放題",
      "全3店舗利用可",
      "プロテインバー込み",
      "オンライン栄養レポ閲覧",
    ],
    accent: "#F4F4F4",
  },
  {
    name: "Personal",
    code: "M02",
    price: "29,800",
    unit: "/月",
    body: "月4回パーソナル＋ジム会員。",
    features: [
      "パーソナル 月4回 (60分)",
      "ジム使い放題",
      "栄養LINEサポート",
      "ボディスキャン月1回",
    ],
    accent: "#FFE600",
    highlight: true,
  },
  {
    name: "Pro",
    code: "M03",
    price: "59,800",
    unit: "/月",
    body: "週2パーソナル＋栄養面談。",
    features: [
      "パーソナル 月8回",
      "栄養士面談 月2回",
      "コンテスト出場サポート",
      "全店舗 + サウナ無料",
    ],
    accent: "#FF2D55",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-[#0A0A0A] px-6 py-32 text-white sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel number="04" className="text-[#FFE600]">
          Pricing
        </SectionLabel>
        <h2 className="mt-6 font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[0.02em]">
          Pick your
          <br />
          <span className="text-[#FFE600]">commitment.</span>
        </h2>

        <ul className="mt-20 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <motion.li
              key={p.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className={`relative flex flex-col border p-8 transition-colors ${
                p.highlight
                  ? "border-[#FFE600] bg-[#161600]"
                  : "border-white/10 bg-[#101010]"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 bg-[#FFE600] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-black">
                  Recommended
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                  {p.code}
                </span>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.3em]"
                  style={{ color: p.accent }}
                >
                  {p.name}
                </span>
              </div>
              <p className="mt-6 font-[family-name:var(--font-bebas)] text-7xl leading-none">
                ¥{p.price}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/40">
                {p.unit}
              </p>
              <p className="mt-6 text-sm text-white/70">{p.body}</p>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 size-4 shrink-0"
                      style={{ color: p.accent }}
                    />
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
        <p className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-white/50">
          表示は税込。入会金 ¥10,000（無料体験経由で半額）。
        </p>
      </div>
    </section>
  );
}
