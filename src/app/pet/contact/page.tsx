"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PetNav, PetFooter } from "../_components/Chrome";

export default function PetContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden bg-[#FFF7EE] py-32 sm:py-40">
        <div className="pointer-events-none absolute -top-32 right-10 size-72 rounded-full bg-[#FFC97A]/60 blur-3xl" aria-hidden />
        <PetNav />
        <div className="relative mx-auto max-w-4xl px-6 sm:px-12 lg:px-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A37864]">Reservation</p>
          <h1 className="mt-4 font-[family-name:var(--font-zen-maru)] text-[clamp(2.5rem,7vw,5rem)] font-bold text-[#3B2A1C]">
            🐾 ご予約フォーム
          </h1>
        </div>
      </section>
      <main className="bg-[#FFF7EE] px-6 pb-32 sm:px-12 lg:px-20">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="mx-auto max-w-2xl rounded-3xl bg-white p-10 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.15)]"
        >
          <div className="space-y-6">
            <Field label="飼い主さまのお名前" name="owner" required />
            <Field label="メール" name="email" type="email" required />
            <Field label="電話" name="tel" type="tel" required />
            <div className="grid grid-cols-2 gap-6">
              <Field label="わんちゃん・ねこちゃんのお名前" name="pet" required />
              <Select label="種類" name="kind" options={["小型犬","中型犬","大型犬","猫"]} />
            </div>
            <Select label="ご希望コース" name="course" options={["カット","シャンプー","炭酸スパ","シニアケア","おまかせ"]} />
            <div className="grid grid-cols-2 gap-6">
              <Field label="ご希望日" name="date" type="date" required />
              <Select label="お時間" name="time" options={["10:00","12:00","14:00","16:00"]} />
            </div>
            <div>
              <label htmlFor="memo" className="text-xs font-bold uppercase tracking-[0.2em] text-[#A37864]">気をつけてほしいこと（任意）</label>
              <textarea id="memo" name="memo" rows={4} className="mt-2 w-full rounded-xl border-2 border-[#A37864]/30 bg-[#FFF7EE] px-4 py-3 text-sm focus:border-[#A37864] focus:outline-none" />
            </div>
          </div>
          <button type="submit" disabled={submitted} className="mt-8 w-full rounded-full bg-[#A37864] px-10 py-4 font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-60">
            {submitted ? "ご予約ありがとうございます 🐾" : "予約する"}
          </button>
          <p className="mt-4 text-center text-xs text-[#3B2A1C]/40">※ サンプル用のモックです。実際の送信は行われません。</p>
        </motion.form>
      </main>
      <PetFooter />
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.2em] text-[#A37864]">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full rounded-xl border-2 border-[#A37864]/30 bg-[#FFF7EE] px-4 py-3 text-sm focus:border-[#A37864] focus:outline-none" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.2em] text-[#A37864]">{label}</label>
      <select id={name} name={name} className="mt-2 w-full appearance-none rounded-xl border-2 border-[#A37864]/30 bg-[#FFF7EE] px-4 py-3 text-sm focus:border-[#A37864] focus:outline-none">
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
