"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { PROGRAMS } from "./programs-data";

export function Programs() {
  return (
    <section
      id="programs"
      className="relative bg-[#0A0A0A] px-6 py-32 text-white sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <SectionLabel number="02" className="text-[#FFE600]">
            Programs
          </SectionLabel>
          <p className="hidden text-xs font-bold uppercase tracking-[0.3em] text-white/40 sm:block">
            4 Tracks · Choose your fight
          </p>
        </div>
        <h2 className="mt-6 max-w-3xl font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[0.02em]">
          Train like
          <br />
          <span className="text-[#FFE600]">you mean it.</span>
        </h2>

        <ul className="mt-20 grid gap-6 sm:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <motion.li
              key={p.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="group relative overflow-hidden border border-white/10 bg-[#101010] p-8 transition-colors hover:border-[var(--accent)]"
              style={{ "--accent": p.accent } as React.CSSProperties}
            >
              <div
                className="pointer-events-none absolute -right-32 -top-32 size-72 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                style={{ background: p.accent }}
                aria-hidden
              />

              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.3em]"
                    style={{ color: p.accent }}
                  >
                    {p.code}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                    {p.ja}
                  </span>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-bebas)] text-6xl tracking-[0.02em]">
                  {p.title}
                </h3>
                <p className="mt-6 max-w-md text-sm leading-loose text-white/70">
                  {p.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
