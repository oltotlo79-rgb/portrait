"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CoworkingNav, CoworkingFooter } from "../_components/Chrome";
import { SectionLabel } from "@/components/shared/SectionLabel";

export default function CoworkingContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-[#0A0E1A]">
        <CoworkingNav />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 60% 50%, rgba(0,229,255,0.3) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <SectionLabel className="font-mono text-[#00E5FF]">Tour</SectionLabel>
            <h1 className="mt-6 font-mono text-[clamp(3rem,8vw,7rem)] uppercase text-white">
              Book a tour
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#0A0E1A] px-6 py-24 text-white sm:px-12 lg:px-20">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mx-auto max-w-2xl space-y-6 border border-white/10 bg-[#101522] p-10"
        >
          <Field label="お名前" name="name" required />
          <Field label="所属（任意）" name="company" />
          <Field label="メール" name="email" type="email" required />
          <Field label="電話" name="tel" type="tel" />
          <Select
            label="ご希望スタジオ"
            name="studio"
            options={["渋谷", "丸の内", "両方見たい"]}
          />
          <Select
            label="検討中のプラン"
            name="plan"
            options={["Drop-in", "Resident", "Team", "未定"]}
          />
          <Field label="ご希望日" name="date" type="date" required />
          <div>
            <label
              htmlFor="memo"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]"
            >
              ご質問・希望条件（任意）
            </label>
            <textarea
              id="memo"
              name="memo"
              rows={5}
              className="mt-2 w-full border border-white/20 bg-[#0A0E1A] px-4 py-3 text-sm focus:border-[#00E5FF] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitted}
            className="w-full border border-[#00E5FF] bg-[#00E5FF]/10 py-4 font-mono text-sm uppercase tracking-[0.3em] text-[#00E5FF] transition-colors hover:bg-[#00E5FF] hover:text-[#0A0E1A] disabled:opacity-60"
          >
            {submitted ? "Received. We'll contact you within 24h." : "Submit Tour Request"}
          </button>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            ※ サンプル用のモックです。実際の送信は行われません。
          </p>
        </motion.form>
      </main>

      <CoworkingFooter />
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
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-white/20 bg-[#0A0E1A] px-4 py-3 text-sm focus:border-[#00E5FF] focus:outline-none"
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
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full appearance-none border border-white/20 bg-[#0A0E1A] px-4 py-3 text-sm focus:border-[#00E5FF] focus:outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0A0E1A]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
