"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ConstructionNav, ConstructionFooter } from "../_components/Chrome";

export default function ConstructionContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-[#2C2A28] text-[#F2EDE5]">
        <ConstructionNav />
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 70% 40%, rgba(196, 93, 46, 0.5) 0%, transparent 60%)" }} />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#C45D2E]">Contact</p>
            <h1 className="mt-4 font-[family-name:var(--font-anton)] text-[clamp(3rem,8vw,7rem)] tracking-[0.02em]">
              GET IN TOUCH.
            </h1>
          </div>
        </div>
      </section>
      <main className="bg-[#F2EDE5] px-6 py-24 sm:px-12 lg:px-20">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="mx-auto max-w-2xl space-y-6 border border-[#2C2A28]/20 bg-white p-10"
        >
          <Field label="お名前" name="name" required />
          <Field label="メール" name="email" type="email" required />
          <Field label="電話" name="tel" type="tel" />
          <Select label="ご相談内容" name="topic" options={["注文住宅","リフォーム","古民家再生","構造見学会の申込","資料請求","その他"]} />
          <Field label="ご希望地域" name="area" placeholder="松本市・安曇野市 など" />
          <div>
            <label htmlFor="memo" className="text-xs font-bold uppercase tracking-[0.3em] text-[#C45D2E]">ご相談内容（任意）</label>
            <textarea id="memo" name="memo" rows={5} className="mt-2 w-full border-b border-[#2C2A28]/25 bg-transparent py-3 text-sm focus:border-[#C45D2E] focus:outline-none" />
          </div>
          <button type="submit" disabled={submitted} className="w-full border border-[#2C2A28] bg-[#2C2A28] px-10 py-4 text-sm uppercase tracking-[0.3em] text-[#F2EDE5] transition-colors hover:bg-[#C45D2E] disabled:opacity-60">
            {submitted ? "ご相談を承りました" : "送信する"}
          </button>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#2C2A28]/40">※ サンプル用のモックです。実際の送信は行われません。</p>
        </motion.form>
      </main>
      <ConstructionFooter />
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.3em] text-[#C45D2E]">{label}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="mt-2 w-full border-b border-[#2C2A28]/25 bg-transparent py-3 text-sm focus:border-[#C45D2E] focus:outline-none" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.3em] text-[#C45D2E]">{label}</label>
      <select id={name} name={name} className="mt-2 w-full appearance-none border-b border-[#2C2A28]/25 bg-transparent py-3 text-sm focus:border-[#C45D2E] focus:outline-none">
        {options.map((o) => <option key={o} value={o} className="bg-white">{o}</option>)}
      </select>
    </div>
  );
}
