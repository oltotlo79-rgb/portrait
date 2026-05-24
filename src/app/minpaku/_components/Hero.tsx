"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MinpakuHero() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-[#3F4A3C] text-[#F4EDE3]">
      {/* Shoji panels sliding apart */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
        className="absolute inset-y-0 left-0 z-20 w-1/2 bg-[#F4EDE3]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(63,74,60,0.06) 0 1px, transparent 1px 56px), repeating-linear-gradient(0deg, rgba(63,74,60,0.06) 0 1px, transparent 1px 56px)",
        }}
        aria-hidden
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
        className="absolute inset-y-0 right-0 z-20 w-1/2 bg-[#F4EDE3]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(63,74,60,0.06) 0 1px, transparent 1px 56px), repeating-linear-gradient(0deg, rgba(63,74,60,0.06) 0 1px, transparent 1px 56px)",
        }}
        aria-hidden
      />

      {/* Background "courtyard" image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut", delay: 1.2 }}
        className="absolute inset-0"
      >
        <Image
          src="/images/minpaku/01-hero-dusk.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(31,38,24,0.3) 0%, rgba(31,38,24,0.4) 60%, rgba(31,38,24,0.7) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="text-[10px] uppercase tracking-[0.5em] text-[#C9A063]"
        >
          Yamadori-an · Kyoto Nishijin
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
          className="mt-10 flex justify-center"
        >
          <span
            className="font-[family-name:var(--font-shippori-mincho)] text-[clamp(2.5rem,6vw,5rem)] leading-[1.3] tracking-[0.15em]"
            style={{ writingMode: "vertical-rl" }}
          >
            <motion.span
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 2.8, duration: 1.5 }}
              className="block"
            >
              静かに、町家に、
            </motion.span>
            <motion.span
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 3.2, duration: 1.5 }}
              className="block"
            >
              暮らすように泊まる。
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2, duration: 1 }}
          className="mt-16 font-[family-name:var(--font-cormorant)] italic text-lg text-[#F4EDE3]/80"
        >
          One stay, one party — a Machiya in Nishijin.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-[#F4EDE3]/60"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
