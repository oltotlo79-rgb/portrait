"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function SalonNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-7 sm:px-12 lg:px-20"
    >
      <Link
        href="/salon"
        className="font-[family-name:var(--font-cormorant)] text-2xl italic tracking-wide text-[#2E2A26]"
      >
        LUNA
      </Link>
      <nav className="hidden gap-10 text-[10px] uppercase tracking-[0.4em] text-[#2E2A26] sm:flex">
        <Link href="/salon/gallery" className="hover:text-[#B8896A]">Gallery</Link>
        <Link href="/salon#menu" className="hover:text-[#B8896A]">Menu</Link>
        <Link href="/salon#stylist" className="hover:text-[#B8896A]">Stylist</Link>
        <Link href="/salon/reservation" className="hover:text-[#B8896A]">Reserve</Link>
      </nav>
      <Link
        href="/salon/reservation"
        className="border border-[#2E2A26] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#2E2A26] transition-colors hover:bg-[#2E2A26] hover:text-[#E8DCD0]"
      >
        Reserve
      </Link>
    </motion.header>
  );
}

export function SalonFooter() {
  return (
    <footer className="border-t border-[#2E2A26]/15 bg-[#E8DCD0] px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-cormorant)] text-5xl italic">LUNA</p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-[#B8896A]">
          hair &amp; atelier
        </p>
        <div className="mt-10 grid gap-8 text-xs text-[#2E2A26]/80 sm:grid-cols-3">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#B8896A]">Address</p>
            <p className="mt-2">東京都港区南青山◯-◯<br />表参道駅 徒歩4分</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-[#B8896A]">Hours</p>
            <p className="mt-2">10:00 — 19:00<br />完全予約制 / 水曜定休</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-[#B8896A]">Contact</p>
            <p className="mt-2">luna@example.jp<br />03-XXXX-XXXX</p>
          </div>
        </div>
        <p className="mt-14 border-t border-[#2E2A26]/10 pt-6 text-[10px] uppercase tracking-[0.3em] text-[#2E2A26]/40">
          © {new Date().getFullYear()} LUNA hair &amp; atelier · <Link href="/" className="underline-offset-4 hover:underline">Portfolio ←</Link>
        </p>
      </div>
    </footer>
  );
}
