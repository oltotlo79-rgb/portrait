"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPinned, Plane } from "lucide-react";
import { RevealText, motionTimings } from "@/lib/animations";

const SCENES = [
  {
    title: "Iceland",
    subtitle: "氷河と苔の地平線へ",
    image: "/images/travel/01-hero-horizon.webp",
    route: "Reykjavik / Vik / Jokulsarlon",
  },
  {
    title: "Europe",
    subtitle: "夜行列車の窓越しに",
    image: "/images/travel/02-hero-train.webp",
    route: "Paris / Zurich / Venezia",
  },
  {
    title: "Morocco",
    subtitle: "古都の路地の夕陽",
    image: "/images/travel/03-hero-oldtown.webp",
    route: "Marrakech / Atlas / Essaouira",
  },
];

const HERO_FACTS = [
  { label: "Trips", value: "42" },
  { label: "Avg. stay", value: "9 days" },
  { label: "Private plan", value: "100%" },
];

export function TravelHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SCENES.length);
    }, motionTimings.defaultSceneIntervalMs);
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

      <motion.svg
        aria-hidden
        className="pointer-events-none absolute right-8 top-24 z-10 hidden h-[42vh] w-[34vw] text-white/45 lg:block"
        viewBox="0 0 420 520"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.path
          d="M54 422 C126 330 92 216 188 184 C282 152 264 72 370 48"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.5, duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        />
        {[{ x: 54, y: 422 }, { x: 188, y: 184 }, { x: 370, y: 48 }].map((p, i) => (
          <motion.circle
            key={`${p.x}-${p.y}`}
            cx={p.x}
            cy={p.y}
            r="5"
            fill="currentColor"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.9 + i * 0.2, duration: 0.5 }}
          />
        ))}
      </motion.svg>

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-28 sm:px-12 lg:px-20">
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

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.65, duration: 0.8 }}
            className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto]"
          >
            <div className="grid max-w-xl grid-cols-3 divide-x divide-white/15 border-y border-white/15 py-5">
              {HERO_FACTS.map((fact) => (
                <div key={fact.label} className="px-4 first:pl-0 last:pr-0">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                    {fact.label}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl italic">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md lg:w-[320px]">
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/60">
                <MapPinned className="size-3.5" />
                Sample route
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={scene.route}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="mt-3 text-sm text-white/82"
                >
                  {scene.route}
                </motion.p>
              </AnimatePresence>
              <div className="mt-5 flex gap-3">
                <Link
                  href="/travel/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-[#101820]"
                >
                  相談する
                  <ArrowUpRight className="size-3.5" />
                </Link>
                <Link
                  href="/travel/destinations"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs text-white"
                >
                  <Plane className="size-3.5" />
                  行き先
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
