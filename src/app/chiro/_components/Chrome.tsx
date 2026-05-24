"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ChiroNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 sm:px-12 lg:px-20"
    >
      <Link href="/chiro" className="font-[family-name:var(--font-zen-maru)] text-base font-bold text-[#2E5266]">
        ことう整体院
      </Link>
      <nav className="hidden gap-8 text-xs text-[#1F2933] sm:flex">
        <Link href="/chiro/symptoms" className="hover:text-[#2E5266]">お悩み別</Link>
        <Link href="/chiro#method" className="hover:text-[#2E5266]">施術の流れ</Link>
        <Link href="/chiro#doctor" className="hover:text-[#2E5266]">院長</Link>
        <Link href="/chiro/contact" className="hover:text-[#2E5266]">ご予約</Link>
      </nav>
      <Link href="/chiro/contact" className="rounded-full bg-[#2E5266] px-5 py-2 text-xs text-white transition-transform hover:scale-[1.04]">
        WEB予約
      </Link>
    </motion.header>
  );
}

export function ChiroFooter() {
  return (
    <footer className="border-t border-[#1F2933]/10 bg-white px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-zen-maru)] text-2xl font-bold text-[#2E5266]">
          ことう整体院
        </p>
        <div className="mt-8 grid gap-8 text-xs text-[#1F2933]/80 sm:grid-cols-3">
          <div>
            <p className="font-bold text-[#2E5266]">場所</p>
            <p className="mt-2">神奈川県横浜市青葉区<br />青葉台駅 徒歩6分</p>
          </div>
          <div>
            <p className="font-bold text-[#2E5266]">営業時間</p>
            <p className="mt-2">平日 10:00 — 20:00<br />土 9:00 — 17:00 / 日祝休</p>
          </div>
          <div>
            <p className="font-bold text-[#2E5266]">ご連絡</p>
            <p className="mt-2">045-XXX-XXXX<br />kotou@example.jp</p>
          </div>
        </div>
        <p className="mt-12 border-t border-[#1F2933]/10 pt-5 text-[10px] uppercase tracking-[0.3em] text-[#1F2933]/40">
          © {new Date().getFullYear()} ことう整体院 · <Link href="/" className="underline-offset-4 hover:underline">Portfolio ←</Link>
        </p>
      </div>
    </footer>
  );
}
