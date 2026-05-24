"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MinpakuNav } from "../_components/Nav";
import { MinpakuFooter } from "../_components/Footer";
import { SectionLabel } from "@/components/shared/SectionLabel";

export default function MinpakuContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="relative h-[52vh] min-h-[380px] overflow-hidden bg-[#1f2618] text-[#F4EDE3]">
        <MinpakuNav />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201, 160, 99, 0.3) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <SectionLabel className="text-[#C9A063]">Reservation</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-[clamp(2.5rem,6vw,5rem)] tracking-[0.1em]">
              ご予約
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#F4EDE3] px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.5fr]">
          <aside className="text-sm leading-loose text-[#1A1A1A]/80">
            <p className="font-[family-name:var(--font-noto-serif-jp)]">
              ご予約は三か月前より承ります。お部屋・人数・お食事の有無をお知らせください。
            </p>
            <dl className="mt-12 space-y-6 text-xs">
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#C9A063]">電話</dt>
                <dd className="mt-1 text-[#1A1A1A]">075-XXX-XXXX</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#C9A063]">メール</dt>
                <dd className="mt-1 text-[#1A1A1A]">yamadori@example.jp</dd>
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
            <Field label="メールアドレス" name="email" type="email" required />
            <Field label="お電話番号" name="tel" type="tel" required />
            <div className="grid grid-cols-2 gap-6">
              <Field label="ご希望日" name="date" type="date" required />
              <Select
                label="お部屋"
                name="room"
                options={["梅の間（2名まで）", "桐の間（4名まで）", "ご相談"]}
              />
            </div>
            <Select
              label="ご人数"
              name="party"
              options={["1名", "2名", "3名", "4名"]}
            />
            <div>
              <label
                htmlFor="memo"
                className="text-[10px] uppercase tracking-[0.4em] text-[#C9A063]"
              >
                ご要望・お食事の有無（任意）
              </label>
              <textarea
                id="memo"
                name="memo"
                rows={5}
                className="mt-2 w-full border-b border-[#3F4A3C]/30 bg-transparent py-3 text-sm focus:border-[#C9A063] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center gap-3 border border-[#3F4A3C] px-12 py-4 text-sm tracking-[0.3em] text-[#3F4A3C] transition-colors hover:bg-[#3F4A3C] hover:text-[#F4EDE3] disabled:opacity-60"
            >
              {submitted ? "お問い合わせを承りました" : "予約を申し込む"}
            </button>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/40">
              ※ サンプル用のモックです。実際の送信は行われません。
            </p>
          </motion.form>
        </div>
      </main>

      <MinpakuFooter />
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
        className="text-[10px] uppercase tracking-[0.4em] text-[#C9A063]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-[#3F4A3C]/30 bg-transparent py-3 text-sm focus:border-[#C9A063] focus:outline-none"
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
        className="text-[10px] uppercase tracking-[0.4em] text-[#C9A063]"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full appearance-none border-b border-[#3F4A3C]/30 bg-transparent py-3 text-sm focus:border-[#C9A063] focus:outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#F4EDE3]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
