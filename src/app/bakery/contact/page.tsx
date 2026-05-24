"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BakeryNav, BakeryFooter } from "../_components/Chrome";
import { SectionLabel } from "@/components/shared/SectionLabel";

export default function BakeryContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-[#FBF6ED]">
        <BakeryNav />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 60% 50%, rgba(212,166,71,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <SectionLabel className="text-[#D4A647]">Reserve</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,7rem)] italic text-[#3A2A18]">
              Hold for you.
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#FBF6ED] px-6 py-24 sm:px-12 lg:px-20">
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
          <Field label="電話" name="tel" type="tel" required />
          <Field label="お取り置き希望日" name="date" type="date" required />
          <div>
            <label
              htmlFor="items"
              className="text-[10px] uppercase tracking-[0.3em] text-[#D4A647]"
            >
              お取り置き内容
            </label>
            <textarea
              id="items"
              name="items"
              rows={6}
              placeholder="例：クロワッサン 4個 / カンパーニュ 1/2"
              required
              className="mt-2 w-full rounded-lg border border-[#3A2A18]/20 bg-[#FBF6ED]/50 px-4 py-3 text-sm focus:border-[#D4A647] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitted}
            className="w-full rounded-full bg-[#3A2A18] py-4 text-sm text-[#FBF6ED] transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {submitted ? "承りました。当日お待ちしております。" : "お取り置きを送信"}
          </button>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#3A2A18]/40">
            ※ サンプル用のモックです。実際の送信は行われません。
          </p>
        </motion.form>
      </main>

      <BakeryFooter />
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
        className="text-[10px] uppercase tracking-[0.3em] text-[#D4A647]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-[#3A2A18]/20 bg-[#FBF6ED]/50 px-4 py-3 text-sm focus:border-[#D4A647] focus:outline-none"
      />
    </div>
  );
}
