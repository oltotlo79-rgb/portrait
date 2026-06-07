"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function RestaurantCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0F0F0F] px-6 py-40 text-[#EFE9DD] sm:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(181, 145, 84, 0.15) 0%, rgba(15,15,15,1) 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#B59154]">
          Reservation
        </p>
        <h2 className="mt-8 whitespace-nowrap font-[family-name:var(--font-shippori-mincho)] text-[clamp(1rem,4.8vw,2.75rem)] leading-tight tracking-[0.1em]">
          今宵、一席お待ちしております
        </h2>
        <p className="mt-10 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#EFE9DD]/70">
          ご予約は二か月前より承ります。お電話、またはご予約フォームから。
        </p>
        <Link
          href="/restaurant/reservation"
          className="mt-16 inline-flex items-center gap-4 border border-[#B59154] px-12 py-5 text-sm tracking-[0.3em] text-[#B59154] transition-colors hover:bg-[#B59154] hover:text-[#0F0F0F]"
        >
          ご予約フォームへ
        </Link>
      </div>
    </section>
  );
}
