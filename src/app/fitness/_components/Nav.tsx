"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function FitnessNav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 sm:px-12 lg:px-20"
    >
      <Link
        href="/fitness"
        className="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.15em]"
      >
        <span className="text-[#FFE600]">IGNITE</span>{" "}
        <span className="text-white">24/7</span>
      </Link>
      <nav className="hidden gap-8 text-[11px] font-bold uppercase tracking-[0.25em] sm:flex">
        <Link href="/fitness/programs" className="transition-colors hover:text-[#FFE600]">
          Programs
        </Link>
        <Link href="/fitness#trainers" className="transition-colors hover:text-[#FFE600]">
          Trainers
        </Link>
        <Link href="/fitness#pricing" className="transition-colors hover:text-[#FFE600]">
          Pricing
        </Link>
        <Link href="/fitness/contact" className="transition-colors hover:text-[#FFE600]">
          Contact
        </Link>
      </nav>
      <Link
        href="/fitness/contact"
        className="bg-[#FFE600] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition-transform hover:scale-[1.03]"
      >
        Free Trial
      </Link>
    </motion.header>
  );
}
