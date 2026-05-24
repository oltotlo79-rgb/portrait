"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export function FitnessCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] px-6 py-40 text-white sm:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 230, 0, 0.18) 0%, transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#FFE600]">
          Free 60-min trial
        </p>
        <h2 className="mt-8 font-[family-name:var(--font-bebas)] text-[clamp(4rem,12vw,11rem)] leading-[0.85] tracking-[0.01em]">
          BURNT OUT?
          <br />
          <span className="text-[#FFE600]">LIGHT UP AGAIN.</span>
        </h2>
        <p className="mx-auto mt-10 max-w-xl text-sm leading-loose text-white/70">
          まずは60分の無料体験。カウンセリングと、トレーニングを少しだけ。
          今日のあなたの状態から、最初の一歩を組み立てます。
        </p>
        <div className="mt-16">
          <Link href="/fitness/contact">
            <MagneticButton className="bg-[#FFE600] px-12 py-5 text-black hover:bg-white">
              <span className="font-[family-name:var(--font-bebas)] text-xl tracking-[0.2em]">
                BOOK FREE TRIAL
              </span>
              <ArrowRight className="ml-3 size-5" />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
