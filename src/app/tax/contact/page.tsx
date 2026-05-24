"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TaxNav, TaxFooter } from "../_components/Chrome";

export default function TaxContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative h-[52vh] min-h-[380px] overflow-hidden bg-[#0E2A47] text-white">
        <TaxNav />
        <div className="absolute left-6 top-32 right-6 h-px bg-[#B4924C] sm:left-12 sm:right-12 lg:left-20 lg:right-20" />
        <div className="absolute left-6 bottom-32 right-6 h-px bg-[#B4924C] sm:left-12 sm:right-12 lg:left-20 lg:right-20" />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#B4924C]">Contact</p>
            <h1 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-[clamp(2.5rem,7vw,5rem)] font-bold">
              ご相談フォーム
            </h1>
          </div>
        </div>
      </section>
      <main className="bg-white px-6 py-24 sm:px-12 lg:px-20">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="mx-auto max-w-2xl space-y-6 rounded border border-[#15233A]/15 bg-[#F5F2EC] p-10"
        >
          <Field label="貴社名" name="company" required />
          <Field label="ご担当者名" name="name" required />
          <Field label="メール" name="email" type="email" required />
          <Field label="電話" name="tel" type="tel" />
          <Select label="ご検討内容" name="topic" options={["顧問契約","税務申告のみ","補助金支援","資金調達伴走","経理体制構築","その他"]} />
          <Select label="売上規模" name="size" options={["〜1000万円","1000万〜5000万円","5000万〜1億円","1億円超","設立準備中"]} />
          <div>
            <label htmlFor="memo" className="text-xs font-bold uppercase tracking-[0.3em] text-[#B4924C]">ご相談内容（任意）</label>
            <textarea id="memo" name="memo" rows={5} className="mt-2 w-full border-b border-[#15233A]/25 bg-transparent py-3 text-sm focus:border-[#B4924C] focus:outline-none" />
          </div>
          <button type="submit" disabled={submitted} className="w-full border border-[#0E2A47] bg-[#0E2A47] px-10 py-4 text-sm uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#B4924C] hover:text-[#0E2A47] disabled:opacity-60">
            {submitted ? "ご相談を承りました。担当よりご連絡します。" : "送信する"}
          </button>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#15233A]/40">※ サンプル用のモックです。実際の送信は行われません。</p>
        </motion.form>
      </main>
      <TaxFooter />
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.3em] text-[#B4924C]">{label}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="mt-2 w-full border-b border-[#15233A]/25 bg-transparent py-3 text-sm focus:border-[#B4924C] focus:outline-none" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.3em] text-[#B4924C]">{label}</label>
      <select id={name} name={name} className="mt-2 w-full appearance-none border-b border-[#15233A]/25 bg-transparent py-3 text-sm focus:border-[#B4924C] focus:outline-none">
        {options.map((o) => <option key={o} value={o} className="bg-[#F5F2EC]">{o}</option>)}
      </select>
    </div>
  );
}
