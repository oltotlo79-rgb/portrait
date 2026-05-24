"use client";

import Link from "next/link";
import { MagneticButton } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function TravelCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] px-6 py-40 text-[#101820] sm:px-12 lg:px-20">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.08 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -right-32 -top-32 size-[640px] rounded-full bg-[#0F4C81]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-[family-name:var(--font-cormorant)] text-2xl italic text-[#0F4C81]">
          Let’s begin.
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight">
          まだ知らない場所で
          <br />
          過ごす夜を、ご一緒に。
        </h2>
        <p className="mt-8 text-sm leading-loose text-[#101820]/70">
          無料の初回相談は60分。お電話／オンラインのどちらでも対応します。
        </p>
        <div className="mt-12">
          <Link href="/travel/contact" className="inline-block">
            <MagneticButton className="bg-[#0F4C81] text-white hover:bg-[#101820]">
              <span className="mr-3">相談を始める</span>
              <ArrowRight className="size-4" />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
