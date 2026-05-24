"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";

const SCENES = [
  {
    title: "Counter",
    ja: "一枚板の客席",
    image: "/images/restaurant/02-counter-overview.webp",
  },
  {
    title: "Vessel",
    ja: "器のあかり",
    image: "/images/restaurant/11-vessel-bowl.webp",
  },
  {
    title: "Sake",
    ja: "酒器、徳利",
    image: "/images/restaurant/10-vessel-sake.webp",
  },
];

export function RestaurantSpace() {
  return (
    <section id="space" className="relative bg-[#0F0F0F] px-6 py-32 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="四" className="text-[#B59154]">
          Space
        </SectionLabel>
        <h2 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.1em] text-[#EFE9DD] sm:text-5xl">
          十席だけの、夜のしつらえ。
        </h2>

        <ul className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SCENES.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-md"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.ja}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#B59154]">
                  {s.title}
                </p>
                <p className="mt-2 font-[family-name:var(--font-shippori-mincho)] text-2xl tracking-[0.1em] text-[#EFE9DD]">
                  {s.ja}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
