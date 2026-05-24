"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CoworkingNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 text-[#F4F6FA] sm:px-12 lg:px-20"
    >
      <Link href="/coworking" className="font-mono text-sm tracking-[0.3em]">
        <span className="text-[#00E5FF]">AXIS</span>
        <span className="ml-2">/ STUDIOS</span>
      </Link>
      <nav className="hidden gap-8 font-mono text-[10px] uppercase tracking-[0.3em] sm:flex">
        <Link href="/coworking/plans" className="hover:text-[#00E5FF]">
          Plans
        </Link>
        <Link href="/coworking#facilities" className="hover:text-[#00E5FF]">
          Facilities
        </Link>
        <Link href="/coworking#community" className="hover:text-[#00E5FF]">
          Community
        </Link>
        <Link href="/coworking#locations" className="hover:text-[#00E5FF]">
          Locations
        </Link>
      </nav>
      <Link
        href="/coworking/contact"
        className="border border-[#00E5FF] px-5 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#00E5FF] transition-colors hover:bg-[#00E5FF] hover:text-[#0A0E1A]"
      >
        Book a Tour
      </Link>
    </motion.header>
  );
}

export function CoworkingFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0E1A] px-6 py-16 text-[#F4F6FA] sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-3xl tracking-[0.2em]">
          <span className="text-[#00E5FF]">AXIS</span>
          <span className="ml-3">/ STUDIOS</span>
        </p>
        <div className="mt-10 grid gap-8 text-xs sm:grid-cols-4">
          <div>
            <p className="font-mono uppercase tracking-[0.3em] text-[#00E5FF]">
              Shibuya
            </p>
            <p className="mt-2 text-white/70">
              東京都渋谷区桜丘町◯-◯
              <br />
              渋谷駅 徒歩6分
            </p>
          </div>
          <div>
            <p className="font-mono uppercase tracking-[0.3em] text-[#00E5FF]">
              Marunouchi
            </p>
            <p className="mt-2 text-white/70">
              東京都千代田区丸の内◯-◯
              <br />
              東京駅 徒歩3分
            </p>
          </div>
          <div>
            <p className="font-mono uppercase tracking-[0.3em] text-[#00E5FF]">
              Hours
            </p>
            <p className="mt-2 text-white/70">
              24h / Members
              <br />
              09:00 — 22:00 / Visitors
            </p>
          </div>
          <div>
            <p className="font-mono uppercase tracking-[0.3em] text-[#00E5FF]">
              Contact
            </p>
            <p className="mt-2 text-white/70">
              hello@axis.example
              <br />
              03-XXXX-XXXX
            </p>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          © {new Date().getFullYear()} AXIS Studios ·{" "}
          <Link href="/" className="underline-offset-4 hover:underline">
            Portfolio ←
          </Link>
        </p>
      </div>
    </footer>
  );
}
