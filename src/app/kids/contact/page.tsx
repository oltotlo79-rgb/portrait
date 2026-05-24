"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { KidsNav, KidsFooter } from "../_components/Chrome";

export default function KidsContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden bg-[#FFF9F0] py-32 sm:py-40">
        <div className="pointer-events-none absolute -top-32 right-10 size-72 rounded-full bg-[#FF8FA3] opacity-40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-32 left-10 size-72 rounded-full bg-[#7AC4A2] opacity-40 blur-3xl" aria-hidden />
        <KidsNav />
        <div className="relative mx-auto max-w-4xl px-6 sm:px-12 lg:px-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF8FA3]">Contact</p>
          <h1 className="mt-4 font-[family-name:var(--font-mplus-rounded)] text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-tight text-[#3D2B1F]">
            体験のお申し込み。
          </h1>
        </div>
      </section>

      <main className="bg-[#FFF9F0] px-6 pb-32 sm:px-12 lg:px-20">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="mx-auto max-w-2xl rounded-3xl bg-white p-10 shadow-lg"
        >
          <div className="space-y-6">
            <Field label="お子さまのお名前" name="kid" required />
            <div className="grid grid-cols-2 gap-6">
              <Field label="年齢" name="age" type="number" placeholder="3〜8" required />
              <Field label="保護者のお名前" name="parent" required />
            </div>
            <Field label="メール" name="email" type="email" required />
            <Field label="電話" name="tel" type="tel" required />
            <Select label="ご希望の体験" name="program" options={["色のふしぎ実験","ペットボトル水族館","絵本でつくる紙芝居","季節のお菓子","おまかせ"]} />
            <Field label="ご希望日" name="date" type="date" required />
            <div>
              <label htmlFor="memo" className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8FA3]">アレルギー・配慮事項（任意）</label>
              <textarea id="memo" name="memo" rows={4} className="mt-2 w-full rounded-xl border-2 border-[#FFD166]/40 bg-[#FFF9F0] px-4 py-3 text-sm focus:border-[#FF8FA3] focus:outline-none" />
            </div>
          </div>
          <button type="submit" disabled={submitted} className="mt-8 w-full rounded-full bg-[#FF8FA3] px-10 py-4 font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-60">
            {submitted ? "お申し込みありがとうございます！" : "体験を申し込む（1,500円）"}
          </button>
          <p className="mt-4 text-center text-xs text-[#3D2B1F]/40">※ サンプル用のモックです。実際の送信は行われません。</p>
        </motion.form>
      </main>
      <KidsFooter />
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8FA3]">{label}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="mt-2 w-full rounded-xl border-2 border-[#FFD166]/40 bg-[#FFF9F0] px-4 py-3 text-sm focus:border-[#FF8FA3] focus:outline-none" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8FA3]">{label}</label>
      <select id={name} name={name} className="mt-2 w-full appearance-none rounded-xl border-2 border-[#FFD166]/40 bg-[#FFF9F0] px-4 py-3 text-sm focus:border-[#FF8FA3] focus:outline-none">
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
