"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function DentalNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 sm:px-12 lg:px-20"
    >
      <Link href="/dental" className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-full bg-[#5BB7B7] text-white">
          <span className="size-3 rounded-full bg-white" />
        </span>
        <span className="font-[family-name:var(--font-zen-kaku)] text-base font-bold text-[#1F2933]">
          白水歯科クリニック
        </span>
      </Link>
      <nav className="hidden gap-8 text-[11px] uppercase tracking-[0.25em] text-[#1F2933] sm:flex">
        <Link href="/dental/menu" className="hover:text-[#5BB7B7]">Menu</Link>
        <Link href="/dental#doctor" className="hover:text-[#5BB7B7]">Doctor</Link>
        <Link href="/dental#flow" className="hover:text-[#5BB7B7]">Flow</Link>
        <Link href="/dental/contact" className="hover:text-[#5BB7B7]">Contact</Link>
      </nav>
      <Link
        href="/dental/contact"
        className="rounded-full bg-[#5BB7B7] px-5 py-2 text-[11px] font-bold text-white transition-transform hover:scale-[1.04]"
      >
        WEB予約
      </Link>
    </motion.header>
  );
}

export function DentalFooter() {
  return (
    <footer className="border-t border-[#1F2933]/10 bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-zen-kaku)] text-2xl font-bold text-[#1F2933]">
          白水歯科クリニック
        </p>
        <p className="mt-2 text-xs text-[#5BB7B7]">SHIROMIZU DENTAL CLINIC</p>
        <div className="mt-10 grid gap-8 text-xs text-[#1F2933]/80 sm:grid-cols-3">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#5BB7B7]">Address</p>
            <p className="mt-2">埼玉県さいたま市浦和区<br />浦和駅 徒歩5分</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#5BB7B7]">Hours</p>
            <p className="mt-2">平日 9:00 — 19:00<br />土 9:00 — 17:00 / 日祝 休</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#5BB7B7]">Contact</p>
            <p className="mt-2">048-XXX-XXXX<br />shiromizu@example.jp</p>
          </div>
        </div>
        <p className="mt-12 border-t border-[#1F2933]/10 pt-5 text-[10px] uppercase tracking-[0.3em] text-[#1F2933]/40">
          © {new Date().getFullYear()} 白水歯科クリニック · <Link href="/" className="underline-offset-4 hover:underline">Portfolio ←</Link>
        </p>
      </div>
    </footer>
  );
}
