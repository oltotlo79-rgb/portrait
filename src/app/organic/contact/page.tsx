"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { OrganicNav, OrganicFooter } from "../_components/Chrome";

export default function OrganicContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-[#3F5B36] text-[#FAF6EE]">
        <OrganicNav />
        <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 70% 60%, #d8c29d 0%, transparent 60%)" }} />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#D8C29D]">Contact</p>
            <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,7rem)] italic">
              Say hello.
            </h1>
          </div>
        </div>
      </section>
      <main className="bg-[#FAF6EE] px-6 py-24 sm:px-12 lg:px-20">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="mx-auto max-w-2xl space-y-6 border border-[#2A2520]/15 bg-white p-10"
        >
          <Field label="お名前" name="name" required />
          <Field label="メール" name="email" type="email" required />
          <Field label="電話 (任意)" name="tel" type="tel" />
          <Select label="ご相談内容" name="topic" options={["定期便について","ギフトについて","卸・取引について","その他"]} />
          <div>
            <label htmlFor="memo" className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9462C]">メッセージ</label>
            <textarea id="memo" name="memo" rows={6} required className="mt-2 w-full border-b border-[#2A2520]/25 bg-transparent py-3 text-sm focus:border-[#3F5B36] focus:outline-none" />
          </div>
          <button type="submit" disabled={submitted} className="w-full border border-[#3F5B36] bg-[#3F5B36] px-10 py-4 text-sm uppercase tracking-[0.3em] text-[#FAF6EE] transition-colors hover:bg-[#C9462C] disabled:opacity-60">
            {submitted ? "メッセージを承りました" : "送信する"}
          </button>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#2A2520]/40">※ サンプル用のモックです。実際の送信は行われません。</p>
        </motion.form>
      </main>
      <OrganicFooter />
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9462C]">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full border-b border-[#2A2520]/25 bg-transparent py-3 text-sm focus:border-[#3F5B36] focus:outline-none" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9462C]">{label}</label>
      <select id={name} name={name} className="mt-2 w-full appearance-none border-b border-[#2A2520]/25 bg-transparent py-3 text-sm focus:border-[#3F5B36] focus:outline-none">
        {options.map((o) => <option key={o} value={o} className="bg-white">{o}</option>)}
      </select>
    </div>
  );
}
