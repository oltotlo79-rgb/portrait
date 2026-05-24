"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { DESTINATIONS } from "./destinations-data";

export function TravelDestinations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // 6 cards, slide horizontally across the visible area
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="relative bg-[#0F4C81] text-white"
      style={{ height: `${DESTINATIONS.length * 90}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="px-6 pt-16 sm:px-12 lg:px-20">
          <div className="mx-auto flex max-w-6xl items-end justify-between">
            <SectionLabel number="02" className="text-white/80">
              Destinations
            </SectionLabel>
            <p className="hidden text-xs uppercase tracking-[0.3em] text-white/60 sm:block">
              Scroll horizontally · 6 places
            </p>
          </div>
        </div>

        <div ref={trackRef} className="relative flex flex-1 items-center">
          <motion.ul style={{ x }} className="flex gap-8 px-6 sm:px-12 lg:px-20">
            {DESTINATIONS.map((d, i) => (
              <li
                key={d.en}
                className="relative w-[78vw] max-w-[560px] shrink-0 overflow-hidden rounded-2xl sm:w-[60vw] lg:w-[44vw]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={d.image}
                    alt={`${d.ja}の風景`}
                    fill
                    sizes="(min-width: 1024px) 44vw, (min-width: 640px) 60vw, 78vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
                    <span className="opacity-70">
                      {String(i + 1).padStart(2, "0")} / 06
                    </span>
                    <span className="rounded-full border border-white/30 px-3 py-1">
                      {d.ja}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-manrope)] text-5xl font-bold leading-none tracking-tight sm:text-6xl">
                      {d.en}
                    </h3>
                    <p className="mt-4 max-w-xs font-[family-name:var(--font-noto-serif-jp)] text-sm leading-relaxed text-white/85">
                      {d.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
