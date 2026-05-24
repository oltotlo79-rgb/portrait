"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function YogaNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-7 sm:px-12 lg:px-20"
    >
      <Link
        href="/yoga"
        className="font-[family-name:var(--font-cormorant)] text-2xl italic tracking-wide text-[#2C3A2E]"
      >
        nagi
        <span className="ml-1 text-[10px] uppercase tracking-[0.3em] not-italic">
          · 凪
        </span>
      </Link>
      <nav className="hidden gap-8 text-[10px] uppercase tracking-[0.3em] text-[#2C3A2E] sm:flex">
        <Link href="/yoga/classes" className="hover:text-[#6B7F6F]">
          Classes
        </Link>
        <Link href="/yoga#teachers" className="hover:text-[#6B7F6F]">
          Teachers
        </Link>
        <Link href="/yoga#studio" className="hover:text-[#6B7F6F]">
          Studio
        </Link>
        <Link href="/yoga/contact" className="hover:text-[#6B7F6F]">
          Trial
        </Link>
      </nav>
      <Link
        href="/yoga/contact"
        className="rounded-full bg-[#2C3A2E] px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-[#F4F0E8] transition-transform hover:scale-[1.04]"
      >
        体験予約
      </Link>
    </motion.header>
  );
}

export function YogaFooter() {
  return (
    <footer className="border-t border-[#2C3A2E]/10 bg-[#F4F0E8] px-6 py-16 text-[#2C3A2E] sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-cormorant)] text-5xl italic">
          nagi
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.4em] text-[#6B7F6F]">
          yoga &amp; pilates · 凪
        </p>
        <div className="mt-10 grid gap-8 text-xs text-[#2C3A2E]/80 sm:grid-cols-3">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#6B7F6F]">
              Address
            </p>
            <p className="mt-2">
              東京都渋谷区上原◯-◯-◯
              <br />
              代々木上原駅 徒歩5分
            </p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#6B7F6F]">
              Hours
            </p>
            <p className="mt-2">
              06:00 — 21:30
              <br />
              年中無休
            </p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#6B7F6F]">
              Contact
            </p>
            <p className="mt-2">
              hello@nagi.example
              <br />
              03-XXXX-XXXX
            </p>
          </div>
        </div>
        <p className="mt-12 border-t border-[#2C3A2E]/10 pt-6 text-[10px] uppercase tracking-[0.3em] text-[#2C3A2E]/40">
          © {new Date().getFullYear()} nagi yoga &amp; pilates ·{" "}
          <Link href="/" className="underline-offset-4 hover:underline">
            Portfolio ←
          </Link>
        </p>
      </div>
    </footer>
  );
}
