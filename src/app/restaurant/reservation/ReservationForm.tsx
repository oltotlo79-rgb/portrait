"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
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
        <SelectField label="お時間" name="time" options={["18:00", "20:30"]} />
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
