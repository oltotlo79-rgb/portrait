"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChiroNav, ChiroFooter } from "../_components/Chrome";

export default function ChiroContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden bg-white py-32 sm:py-40">
        <div className="pointer-events-none absolute -top-32 right-10 size-80 rounded-full bg-[#A9C4C4]/60 blur-3xl" aria-hidden />
        <ChiroNav />
        <div className="relative mx-auto max-w-4xl px-6 sm:px-12 lg:px-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#2E5266]">Reservation</p>
          <h1 className="mt-4 font-[family-name:var(--font-zen-maru)] text-[clamp(2.5rem,7vw,5rem)] font-bold text-[#1F2933]">
            WEB予約
          </h1>
        </div>
      </section>
      <main className="bg-white px-6 pb-32 sm:px-12 lg:px-20">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="mx-auto max-w-2xl space-y-6 rounded-3xl border-2 border-[#A9C4C4]/40 bg-[#F4F8F9] p-10"
        >
          <Field label="お名前" name="name" required />
          <Select label="ご来院" name="visited" options={["初診","再診","お子さま"]} />
          <Field label="メール" name="email" type="email" required />
          <Field label="電話" name="tel" type="tel" required />
          <div className="grid grid-cols-2 gap-6">
            <Field label="ご希望日" name="date" type="date" required />
            <Select label="お時間" name="time" options={["10:00","12:00","14:00","16:00","18:00"]} />
          </div>
          <Select label="主なお悩み" name="topic" options={["腰痛","肩こり","頭痛","スポーツ障害","産後ケア","その他"]} />
          <div>
            <label htmlFor="memo" className="text-xs font-bold uppercase tracking-[0.3em] text-[#2E5266]">補足（任意）</label>
            <textarea id="memo" name="memo" rows={5} className="mt-2 w-full rounded-xl border-2 border-[#A9C4C4]/40 bg-white px-4 py-3 text-sm focus:border-[#2E5266] focus:outline-none" />
          </div>
          <button type="submit" disabled={submitted} className="w-full rounded-full bg-[#2E5266] px-10 py-4 font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-60">
            {submitted ? "ご予約を承りました" : "予約を確定する"}
          </button>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#1F2933]/40">※ サンプル用のモックです。実際の送信は行われません。</p>
        </motion.form>
      </main>
      <ChiroFooter />
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.3em] text-[#2E5266]">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full rounded-xl border-2 border-[#A9C4C4]/40 bg-white px-4 py-3 text-sm focus:border-[#2E5266] focus:outline-none" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.3em] text-[#2E5266]">{label}</label>
      <select id={name} name={name} className="mt-2 w-full appearance-none rounded-xl border-2 border-[#A9C4C4]/40 bg-white px-4 py-3 text-sm focus:border-[#2E5266] focus:outline-none">
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
