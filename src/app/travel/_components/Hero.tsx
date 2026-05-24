"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealText } from "@/lib/animations";

const SCENES = [
  {
    title: "Iceland",
    subtitle: "氷河と苔の地平線へ",
    image: "/images/travel/01-hero-horizon.webp",
  },
  {
    title: "Europe",
    subtitle: "夜行列車の窓越しに",
    image: "/images/travel/02-hero-train.webp",
  },
  {
    title: "Morocco",
    subtitle: "古都の路地の夕陽",
    image: "/images/travel/03-hero-oldtown.webp",
  },
];

export function TravelHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SCENES.length);
    }, 5400);
    return () => clearInterval(id);
  }, []);

  const scene = SCENES[index];

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-black text-white">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={scene.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 sm:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-6xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.4em] opacity-80"
          >
            For grown-up travelers
          </motion.p>

          <h1 className="mt-6 font-[family-name:var(--font-manrope)] text-[clamp(3rem,9vw,9rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            <RevealText
              text="The world,"
              splitBy="word"
              className="block"
              delay={0.4}
            />
            <RevealText
              text="quietly."
              splitBy="word"
              className="block font-[family-name:var(--font-cormorant)] italic font-medium"
              delay={0.7}
            />
          </h1>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={scene.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6 }}
                className="flex items-baseline gap-4"
              >
                <span className="text-xs uppercase tracking-[0.4em] opacity-70">
                  Now showing
                </span>
                <span className="text-2xl font-[family-name:var(--font-manrope)]">
                  {scene.title}
                </span>
                <span className="font-[family-name:var(--font-noto-serif-jp)] text-sm opacity-80">
                  — {scene.subtitle}
                </span>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-2">
              {SCENES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-px w-12 transition-all ${
                    i === index ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Scene ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] opacity-70"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
