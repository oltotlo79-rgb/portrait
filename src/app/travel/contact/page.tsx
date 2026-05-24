"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TravelNav } from "../_components/Nav";
import { TravelFooter } from "../_components/Footer";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { RevealText } from "@/lib/animations";

export default function TravelContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative h-[52vh] min-h-[360px] overflow-hidden bg-[#0F4C81] text-white">
        <TravelNav />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, #F4B400 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <SectionLabel className="text-white/70">Contact</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-manrope)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight">
              <RevealText text="Let's begin" splitBy="word" />
              <span className="block font-[family-name:var(--font-cormorant)] italic">
                <RevealText text="your journey." splitBy="word" delay={0.2} />
              </span>
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#F7F4EE] px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.5fr]">
          <aside className="text-sm leading-loose text-[#101820]/80">
            <p className="font-[family-name:var(--font-noto-serif-jp)] text-base">
              はじめての方は、初回60分の無料相談から。
              フォームにご記入いただくと、48時間以内に担当コンシェルジュからご連絡します。
            </p>
            <dl className="mt-12 space-y-6 text-xs">
              <div>
                <dt className="uppercase tracking-[0.25em] text-[#101820]/50">
                  営業時間
                </dt>
                <dd className="mt-1 text-[#101820]">平日 10:00–19:00 / 土 11:00–17:00</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.25em] text-[#101820]/50">電話</dt>
                <dd className="mt-1 text-[#101820]">03-1234-5678</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.25em] text-[#101820]/50">所在地</dt>
                <dd className="mt-1 text-[#101820]">東京都港区南青山◯-◯-◯</dd>
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
            <Field label="電話番号（任意）" name="tel" type="tel" />
            <Field label="ご興味のある目的地" name="dest" placeholder="例：アイスランド、未定でも可" />
            <div>
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-[0.25em] text-[#101820]/60"
              >
                ご相談内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-2 w-full border-b border-[#101820]/30 bg-transparent py-3 text-sm focus:border-[#0F4C81] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center gap-3 rounded-full bg-[#0F4C81] px-10 py-4 text-sm text-white transition-colors hover:bg-[#101820] disabled:opacity-60"
            >
              {submitted ? "送信しました。担当者からご連絡します。" : "送信する"}
            </button>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#101820]/40">
              ※ このフォームはサンプル用のモックです。実際の送信は行われません。
            </p>
          </motion.form>
        </div>
      </main>

      <TravelFooter />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-[0.25em] text-[#101820]/60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-[#101820]/30 bg-transparent py-3 text-sm focus:border-[#0F4C81] focus:outline-none"
      />
    </div>
  );
}
