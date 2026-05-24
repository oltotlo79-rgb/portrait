"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RestaurantNav } from "../_components/Nav";
import { RestaurantFooter } from "../_components/Footer";
import { SectionLabel } from "@/components/shared/SectionLabel";

export default function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-[#0F0F0F] text-[#EFE9DD]">
        <RestaurantNav />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(181, 145, 84, 0.2) 0%, rgba(15,15,15,1) 70%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-4xl">
            <SectionLabel number="五" className="text-[#B59154]">
              Reservation
            </SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-[clamp(2.5rem,6vw,5rem)] tracking-[0.1em]">
              ご予約
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#0F0F0F] px-6 py-24 text-[#EFE9DD] sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.4fr]">
          <aside className="font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#EFE9DD]/75">
            <p>
              ご予約は二か月前より承ります。お時間は18:00／20:30の二部制、約2時間30分です。
            </p>
            <dl className="mt-12 space-y-6 text-xs">
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#B59154]">電話</dt>
                <dd className="mt-2 text-[#EFE9DD]">03-XXXX-XXXX（16:00以降）</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#B59154]">メール</dt>
                <dd className="mt-2 text-[#EFE9DD]">kuromoji@example.jp</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#B59154]">アレルギー</dt>
                <dd className="mt-2 text-[#EFE9DD]">
                  当日変更を避けるため、事前にお知らせください。
                </dd>
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
            <Field label="ご連絡先メール" name="email" type="email" required />
            <Field label="お電話番号" name="tel" type="tel" required />
            <div className="grid grid-cols-2 gap-6">
              <Field label="ご希望日" name="date" type="date" required />
              <SelectField
                label="お時間"
                name="time"
                options={["18:00", "20:30"]}
              />
            </div>
            <SelectField
              label="お人数"
              name="party"
              options={["1名", "2名", "3名", "4名 ※カウンター間隔のため"]}
            />
            <div>
              <label
                htmlFor="memo"
                className="text-[10px] uppercase tracking-[0.4em] text-[#B59154]"
              >
                ご要望・アレルギー（任意）
              </label>
              <textarea
                id="memo"
                name="memo"
                rows={5}
                className="mt-2 w-full border-b border-[#B59154]/30 bg-transparent py-3 text-sm focus:border-[#B59154] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center gap-3 border border-[#B59154] px-12 py-4 text-sm tracking-[0.3em] text-[#B59154] transition-colors hover:bg-[#B59154] hover:text-[#0F0F0F] disabled:opacity-60"
            >
              {submitted ? "承りました。改めてご連絡いたします。" : "ご予約を申し込む"}
            </button>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#EFE9DD]/40">
              ※ サンプル用のモックです。実際の送信は行われません。
            </p>
          </motion.form>
        </div>
      </main>

      <RestaurantFooter />
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
        className="text-[10px] uppercase tracking-[0.4em] text-[#B59154]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-[#B59154]/30 bg-transparent py-3 text-sm focus:border-[#B59154] focus:outline-none"
      />
    </div>
  );
}

function SelectField({
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
        className="text-[10px] uppercase tracking-[0.4em] text-[#B59154]"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full appearance-none border-b border-[#B59154]/30 bg-transparent py-3 text-sm focus:border-[#B59154] focus:outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0F0F0F]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
