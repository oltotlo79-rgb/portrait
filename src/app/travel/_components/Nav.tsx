"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function TravelNav() {
  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 text-white sm:px-12 lg:px-20"
    >
      <Link
        href="/travel"
        className="font-[family-name:var(--font-manrope)] text-base font-bold tracking-[0.2em]"
      >
        HORIZON
      </Link>
      <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] sm:flex">
        <Link href="/travel/destinations" className="transition-opacity hover:opacity-60">
          Destinations
        </Link>
        <Link href="/travel#concierge" className="transition-opacity hover:opacity-60">
          Concierge
        </Link>
        <Link href="/travel#voice" className="transition-opacity hover:opacity-60">
          Voice
        </Link>
        <Link href="/travel/contact" className="transition-opacity hover:opacity-60">
          Contact
        </Link>
      </nav>
      <Link
        href="/travel/contact"
        className="rounded-full border border-white/40 px-4 py-2 text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-white hover:text-[#0F4C81]"
      >
        相談する
      </Link>
    </motion.header>
  );
}
