"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Tilt3D } from "@/lib/animations";

const TRAINERS = [
  {
    name: "RYU",
    full: "Ryutaro Sakai",
    spec: "Hypertrophy · Powerlifting",
    award: "JBBF 2024 入賞",
    image: "/images/fitness/07-trainer-01.webp",
  },
  {
    name: "MIO",
    full: "Mio Takagi",
    spec: "Bikini · Nutrition",
    award: "WBFF Tokyo 2024 5位",
    image: "/images/fitness/08-trainer-02.webp",
  },
  {
    name: "KEN",
    full: "Kenta Aoki",
    spec: "Functional · HIIT",
    award: "NSCA-CPT",
    image: "/images/fitness/09-trainer-03.webp",
  },
  {
    name: "NAO",
    full: "Nao Higuchi",
    spec: "Rehab · Mobility",
    award: "理学療法士 / NASM-PES",
    image: "/images/fitness/10-trainer-04.webp",
  },
];

export function Trainers() {
  return (
    <section
      id="trainers"
      className="relative bg-[#0A0A0A] px-6 py-32 text-white sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel number="03" className="text-[#FFE600]">
          Trainers
        </SectionLabel>
        <h2 className="mt-6 font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[0.02em]">
          People who push
          <br />
          <span className="text-[#FFE600]">you, harder.</span>
        </h2>

        <ul className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
            >
              <Tilt3D intensity={12} raise={8} className="group relative overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={`${t.full} - ${t.spec}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-[family-name:var(--font-bebas)] text-5xl text-white">
                    {t.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                    {t.full}
                  </p>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFE600]">
                    {t.spec}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/50">
                    {t.award}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-[#FFE600]" />
              </Tilt3D>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
