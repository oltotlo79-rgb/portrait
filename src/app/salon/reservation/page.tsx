"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SalonNav, SalonFooter } from "../_components/Chrome";
import { SectionLabel } from "@/components/shared/SectionLabel";

export default function SalonReservationPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-[#2E2A26] text-[#E8DCD0]">
        <SalonNav />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 70% 40%, rgba(184, 137, 106, 0.4) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <SectionLabel className="text-[#B8896A]">Reservation</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,7rem)] italic">
              Book your time.
            </h1>
          </div>
        </div>
      </section>
      <main className="bg-[#E8DCD0] px-6 py-24 sm:px-12 lg:px-20">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="mx-auto max-w-2xl space-y-7"
        >
          <Field label="お名前" name="name" required />
          <Field label="メール" name="email" type="email" required />
          <Field label="電話" name="tel" type="tel" required />
          <div className="grid grid-cols-2 gap-6">
            <Field label="ご希望日" name="date" type="date" required />
            <Select label="お時間" name="time" options={["10:00","12:00","14:00","16:00"]} />
          </div>
          <Select label="メニュー" name="menu" options={["Cut","Cut + Color","Cut + Treatment","Bridal","Other"]} />
          <div>
            <label htmlFor="memo" className="text-[10px] uppercase tracking-[0.4em] text-[#B8896A]">
              ご要望（任意）
            </label>
            <textarea id="memo" name="memo" rows={5} className="mt-2 w-full border-b border-[#2E2A26]/30 bg-transparent py-3 text-sm focus:border-[#B8896A] focus:outline-none" />
          </div>
          <button type="submit" disabled={submitted} className="inline-flex items-center gap-3 border border-[#2E2A26] px-10 py-4 text-xs uppercase tracking-[0.3em] text-[#2E2A26] transition-colors hover:bg-[#2E2A26] hover:text-[#E8DCD0] disabled:opacity-60">
            {submitted ? "Reservation received." : "Reserve now"}
          </button>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#2E2A26]/40">※ サンプル用のモックです。実際の送信は行われません。</p>
        </motion.form>
      </main>
      <SalonFooter />
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.4em] text-[#B8896A]">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full border-b border-[#2E2A26]/30 bg-transparent py-3 text-sm focus:border-[#B8896A] focus:outline-none" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.4em] text-[#B8896A]">{label}</label>
      <select id={name} name={name} className="mt-2 w-full appearance-none border-b border-[#2E2A26]/30 bg-transparent py-3 text-sm focus:border-[#B8896A] focus:outline-none">
        {options.map((o) => <option key={o} value={o} className="bg-[#E8DCD0]">{o}</option>)}
      </select>
    </div>
  );
}
