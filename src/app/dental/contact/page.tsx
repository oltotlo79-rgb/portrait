"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DentalNav, DentalFooter } from "../_components/Chrome";

export default function DentalContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden bg-white py-32 sm:py-40">
        <div className="pointer-events-none absolute -top-32 right-10 size-80 rounded-full bg-[#FFC9B3] opacity-50 blur-3xl" aria-hidden />
        <DentalNav />
        <div className="relative mx-auto max-w-4xl px-6 sm:px-12 lg:px-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#5BB7B7]">Reservation</p>
          <h1 className="mt-4 font-[family-name:var(--font-zen-kaku)] text-[clamp(2.5rem,7vw,5rem)] font-bold text-[#1F2933]">
            WEB予約フォーム
          </h1>
        </div>
      </section>
      <main className="bg-white px-6 pb-32 sm:px-12 lg:px-20">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="mx-auto max-w-2xl rounded-3xl border-2 border-[#5BB7B7]/15 bg-[#F4F8F9] p-10"
        >
          <div className="space-y-6">
            <Field label="お名前" name="name" required />
            <Field label="ご来院経験" name="visited" placeholder="初診 / 再診 / お子さまの初診" />
            <Field label="メール" name="email" type="email" required />
            <Field label="電話番号" name="tel" type="tel" required />
            <div className="grid grid-cols-2 gap-6">
              <Field label="ご希望日" name="date" type="date" required />
              <Select label="お時間" name="time" options={["09:00","10:30","13:00","15:00","17:00"]} />
            </div>
            <Select label="ご相談内容" name="topic" options={["定期検診・クリーニング","痛みがある","お子さまの相談","矯正の相談","ホワイトニング","その他"]} />
            <div>
              <label htmlFor="memo" className="text-xs font-bold uppercase tracking-[0.2em] text-[#5BB7B7]">補足（任意）</label>
              <textarea id="memo" name="memo" rows={5} className="mt-2 w-full rounded-xl border-2 border-[#5BB7B7]/25 bg-white px-4 py-3 text-sm focus:border-[#5BB7B7] focus:outline-none" />
            </div>
          </div>
          <button type="submit" disabled={submitted} className="mt-8 w-full rounded-full bg-[#5BB7B7] px-10 py-4 font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-60">
            {submitted ? "ご予約を承りました" : "予約を確定する"}
          </button>
          <p className="mt-4 text-center text-xs text-[#1F2933]/40">※ サンプル用のモックです。実際の送信は行われません。</p>
        </motion.form>
      </main>
      <DentalFooter />
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.2em] text-[#5BB7B7]">{label}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="mt-2 w-full rounded-xl border-2 border-[#5BB7B7]/25 bg-white px-4 py-3 text-sm focus:border-[#5BB7B7] focus:outline-none" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.2em] text-[#5BB7B7]">{label}</label>
      <select id={name} name={name} className="mt-2 w-full appearance-none rounded-xl border-2 border-[#5BB7B7]/25 bg-white px-4 py-3 text-sm focus:border-[#5BB7B7] focus:outline-none">
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
