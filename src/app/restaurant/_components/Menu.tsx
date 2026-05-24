"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { COURSE } from "./menu-data";

export function RestaurantMenu() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#0F0F0F] px-6 pb-32 text-[#EFE9DD] sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="二" className="text-[#B59154]">
          お品書き
        </SectionLabel>
        <h2 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.1em] sm:text-5xl">
          月替わりのおまかせ。
        </h2>

        <ul className="mt-20 space-y-32">
          {COURSE.map((dish, i) => (
            <motion.li
              key={dish.no}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className={`grid gap-10 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                initial={{ scale: 1.04, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] overflow-hidden rounded-md"
              >
                <Image
                  src={dish.image}
                  alt={`${dish.ja} - ${dish.body}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/40" />
                <div className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.4em] text-white/70">
                  {String(i + 1).padStart(2, "0")} / 05
                </div>
              </motion.div>

              <div className="flex flex-col justify-center">
                <p className="font-[family-name:var(--font-shippori-mincho)] text-7xl tracking-[0.05em] text-[#B59154]">
                  {dish.no}
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.5em] text-[#EFE9DD]/60">
                  {dish.en}
                </p>
                <h3 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-3xl tracking-[0.1em] sm:text-4xl">
                  {dish.ja}
                </h3>
                <p className="mt-6 max-w-md font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#EFE9DD]/80">
                  {dish.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
