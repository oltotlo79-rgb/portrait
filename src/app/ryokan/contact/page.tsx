"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RyokanNav, RyokanFooter } from "../_components/Chrome";
import { SectionLabel } from "@/components/shared/SectionLabel";

export default function RyokanContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-[#0F141C] text-[#F1EAD9]">
        <RyokanNav />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(232,116,60,0.2) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <SectionLabel className="text-[#E8743C]">Reservation</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-[clamp(2.5rem,6vw,5rem)] tracking-[0.1em]">
              ご予約
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#0F141C] px-6 py-24 text-[#F1EAD9] sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.5fr]">
          <aside className="font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#F1EAD9]/75">
            <p>
              ご予約は六か月前より承ります。仲居の手配と季節食材のご準備のため、可能な限りお早めにお知らせください。
            </p>
            <dl className="mt-12 space-y-6 text-xs">
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#E8743C]">電話</dt>
                <dd className="mt-2 text-[#F1EAD9]">0263-XX-XXXX（9:00–20:00）</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#E8743C]">メール</dt>
                <dd className="mt-2 text-[#F1EAD9]">info@tsukishiro.example</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#E8743C]">お食事のご相談</dt>
                <dd className="mt-2 text-[#F1EAD9]">アレルギーは事前にお知らせください。</dd>
              </div>
            </dl>
          </aside>
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-7"
          >
            <Field label="お名前" name="name" required />
            <Field label="メール" name="email" type="email" required />
            <Field label="お電話番号" name="tel" type="tel" required />
            <div className="grid grid-cols-2 gap-6">
              <Field label="ご希望日" name="date" type="date" required />
              <Select
                label="ご人数"
                name="party"
                options={["1名", "2名", "3名", "4名以上"]}
              />
            </div>
            <Select
              label="ご希望の部屋"
              name="room"
              options={["月読の間", "宵待の間", "蒼月の間", "おまかせ"]}
            />
            <div>
              <label
                htmlFor="memo"
                className="text-[10px] uppercase tracking-[0.4em] text-[#E8743C]"
              >
                ご要望・お食事の相談（任意）
              </label>
              <textarea
                id="memo"
                name="memo"
                rows={5}
                className="mt-2 w-full border-b border-[#D9D1B8]/30 bg-transparent py-3 text-sm focus:border-[#E8743C] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center gap-3 border border-[#E8743C] px-12 py-4 text-sm tracking-[0.3em] text-[#E8743C] transition-colors hover:bg-[#E8743C] hover:text-[#0F141C] disabled:opacity-60"
            >
              {submitted ? "承りました。改めてご連絡いたします。" : "ご予約を申し込む"}
            </button>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#F1EAD9]/40">
              ※ サンプル用のモックです。実際の送信は行われません。
            </p>
          </motion.form>
        </div>
      </main>

      <RyokanFooter />
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
        className="text-[10px] uppercase tracking-[0.4em] text-[#E8743C]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-[#D9D1B8]/30 bg-transparent py-3 text-sm focus:border-[#E8743C] focus:outline-none"
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
        className="text-[10px] uppercase tracking-[0.4em] text-[#E8743C]"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full appearance-none border-b border-[#D9D1B8]/30 bg-transparent py-3 text-sm focus:border-[#E8743C] focus:outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0F141C]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
