"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { YogaNav, YogaFooter } from "../_components/Chrome";
import { SectionLabel } from "@/components/shared/SectionLabel";

export default function YogaContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-[#F4F0E8]">
        <YogaNav />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 50% 60%, rgba(232,213,183,0.6) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <SectionLabel className="text-[#6B7F6F]">Trial</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,7rem)] italic text-[#2C3A2E]">
              Begin with one breath.
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#F4F0E8] px-6 py-24 sm:px-12 lg:px-20">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mx-auto max-w-2xl space-y-6 rounded-2xl bg-white p-10 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.1)]"
        >
          <Field label="お名前" name="name" required />
          <Field label="メール" name="email" type="email" required />
          <Field label="電話番号" name="tel" type="tel" required />
          <Select
            label="ご希望クラス"
            name="class"
            options={[
              "Sunrise Flow",
              "Power Yoga",
              "Pilates Reformer",
              "Restorative",
              "おまかせ",
            ]}
          />
          <div className="grid grid-cols-2 gap-6">
            <Field label="ご希望日" name="date" type="date" required />
            <Select
              label="ヨガ経験"
              name="exp"
              options={["はじめて", "1年未満", "1〜3年", "3年以上"]}
            />
          </div>
          <div>
            <label
              htmlFor="memo"
              className="text-[10px] uppercase tracking-[0.3em] text-[#6B7F6F]"
            >
              ご質問・体の気になるところ（任意）
            </label>
            <textarea
              id="memo"
              name="memo"
              rows={5}
              className="mt-2 w-full rounded-lg border border-[#2C3A2E]/20 bg-[#F4F0E8]/50 px-4 py-3 text-sm focus:border-[#6B7F6F] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitted}
            className="w-full rounded-full bg-[#2C3A2E] py-4 text-sm text-[#F4F0E8] transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {submitted
              ? "ご予約を承りました。当日お待ちしております。"
              : "体験を予約する（¥2,200）"}
          </button>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#2C3A2E]/40">
            ※ サンプル用のモックです。実際の送信は行われません。
          </p>
        </motion.form>
      </main>

      <YogaFooter />
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
        className="text-[10px] uppercase tracking-[0.3em] text-[#6B7F6F]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-[#2C3A2E]/20 bg-[#F4F0E8]/50 px-4 py-3 text-sm focus:border-[#6B7F6F] focus:outline-none"
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
        className="text-[10px] uppercase tracking-[0.3em] text-[#6B7F6F]"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full appearance-none rounded-lg border border-[#2C3A2E]/20 bg-[#F4F0E8]/50 px-4 py-3 text-sm focus:border-[#6B7F6F] focus:outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
