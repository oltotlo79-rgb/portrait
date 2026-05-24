"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FitnessNav } from "../_components/Nav";
import { FitnessFooter } from "../_components/Footer";
import { SectionLabel } from "@/components/shared/SectionLabel";

export default function FitnessContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative h-[52vh] min-h-[380px] overflow-hidden bg-[#0A0A0A] text-white">
        <FitnessNav />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(255, 230, 0, 0.4) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <SectionLabel className="text-[#FFE600]">Free Trial</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-bebas)] text-[clamp(3rem,9vw,8rem)] leading-[0.9]">
              Light it up.
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#0A0A0A] px-6 py-24 text-white sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.5fr]">
          <aside className="text-sm leading-loose text-white/75">
            <p>無料体験 60分。カウンセリング 30分＋トレーニング 30分。</p>
            <dl className="mt-12 space-y-6 text-xs">
              <div>
                <dt className="font-bold uppercase tracking-[0.3em] text-[#FFE600]">
                  Hours
                </dt>
                <dd className="mt-1">24時間（体験予約は10:00–22:00）</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-[0.3em] text-[#FFE600]">
                  Studios
                </dt>
                <dd className="mt-1">渋谷 · 池袋 · 恵比寿</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-[0.3em] text-[#FFE600]">
                  Contact
                </dt>
                <dd className="mt-1">03-XXXX-XXXX / contact@ignite-247.example</dd>
              </div>
            </dl>
          </aside>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-7"
          >
            <Field label="お名前" name="name" required />
            <Field label="メールアドレス" name="email" type="email" required />
            <Field label="電話番号" name="tel" type="tel" required />
            <Select
              label="ご希望スタジオ"
              name="studio"
              options={["渋谷", "池袋", "恵比寿"]}
            />
            <Select
              label="目的"
              name="goal"
              options={["減量", "増量", "コンテスト出場", "健康維持", "未定"]}
            />
            <div>
              <label
                htmlFor="memo"
                className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#FFE600]"
              >
                その他ご質問（任意）
              </label>
              <textarea
                id="memo"
                name="memo"
                rows={5}
                className="mt-2 w-full border-b border-white/30 bg-transparent py-3 text-sm focus:border-[#FFE600] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center gap-3 bg-[#FFE600] px-10 py-4 font-[family-name:var(--font-bebas)] text-xl tracking-[0.2em] text-black transition-colors hover:bg-white disabled:opacity-60"
            >
              {submitted ? "RECEIVED. WE'LL BE IN TOUCH." : "BOOK FREE TRIAL"}
            </button>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              ※ サンプル用のモックです。実際の送信は行われません。
            </p>
          </motion.form>
        </div>
      </main>

      <FitnessFooter />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#FFE600]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-white/30 bg-transparent py-3 text-sm focus:border-[#FFE600] focus:outline-none"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#FFE600]"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full appearance-none border-b border-white/30 bg-transparent py-3 text-sm focus:border-[#FFE600] focus:outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0A0A0A]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
