"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function BakeryNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 sm:px-12 lg:px-20"
    >
      <Link
        href="/bakery"
        className="flex items-baseline gap-2 text-[#3A2A18]"
      >
        <span className="font-[family-name:var(--font-cormorant)] text-3xl italic">
          mugi
        </span>
        <span className="font-[family-name:var(--font-noto-serif-jp)] text-sm tracking-[0.3em]">
          &amp; 灯
        </span>
      </Link>
      <nav className="hidden gap-8 text-[11px] uppercase tracking-[0.3em] text-[#3A2A18] sm:flex">
        <Link href="/bakery/lineup" className="hover:text-[#D4A647]">
          Lineup
        </Link>
        <Link href="/bakery#schedule" className="hover:text-[#D4A647]">
          Schedule
        </Link>
        <Link href="/bakery#story" className="hover:text-[#D4A647]">
          Story
        </Link>
        <Link href="/bakery/contact" className="hover:text-[#D4A647]">
          Contact
        </Link>
      </nav>
      <Link
        href="/bakery/contact"
        className="rounded-full border border-[#3A2A18] px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-[#3A2A18] transition-colors hover:bg-[#3A2A18] hover:text-[#FBF6ED]"
      >
        お取り置き
      </Link>
    </motion.header>
  );
}

export function BakeryFooter() {
  return (
    <footer className="border-t border-[#3A2A18]/15 bg-[#FBF6ED] px-6 py-16 text-[#3A2A18] sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-cormorant)] text-5xl italic">
            mugi
          </span>
          <span className="font-[family-name:var(--font-noto-serif-jp)] text-lg tracking-[0.3em]">
            &amp; 灯
          </span>
        </p>
        <p className="mt-2 font-[family-name:var(--font-cormorant)] text-sm italic text-[#6B4423]">
          Boulangerie since 2019 · Musashi-Koyama
        </p>
        <div className="mt-10 grid gap-8 text-xs text-[#3A2A18]/80 sm:grid-cols-3">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#D4A647]">
              Address
            </p>
            <p className="mt-2">
              東京都品川区小山◯-◯-◯
              <br />
              武蔵小山駅 徒歩3分
            </p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#D4A647]">
              Hours
            </p>
            <p className="mt-2">
              7:30 — 18:30
              <br />
              月・火 定休
            </p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#D4A647]">
              Contact
            </p>
            <p className="mt-2">
              03-XXXX-XXXX
              <br />
              hello@mugi-akari.example
            </p>
          </div>
        </div>
        <p className="mt-12 border-t border-[#3A2A18]/15 pt-6 text-[10px] uppercase tracking-[0.3em] text-[#3A2A18]/40">
          © {new Date().getFullYear()} mugi &amp; 灯 ·{" "}
          <Link href="/" className="underline-offset-4 hover:underline">
            Portfolio ←
          </Link>
        </p>
      </div>
    </footer>
  );
}
