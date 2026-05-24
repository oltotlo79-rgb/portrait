"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function PetNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 sm:px-12 lg:px-20"
    >
      <Link href="/pet" className="flex items-center gap-2 font-[family-name:var(--font-zen-maru)] text-xl font-bold text-[#A37864]">
        <span className="text-2xl">🐾</span>
        もこもこ
      </Link>
      <nav className="hidden gap-8 text-xs font-bold text-[#3B2A1C] sm:flex">
        <Link href="/pet/menu" className="hover:text-[#A37864]">Menu</Link>
        <Link href="/pet/gallery" className="hover:text-[#A37864]">Gallery</Link>
        <Link href="/pet#staff" className="hover:text-[#A37864]">Staff</Link>
        <Link href="/pet/contact" className="hover:text-[#A37864]">予約</Link>
      </nav>
      <Link href="/pet/contact" className="rounded-full bg-[#A37864] px-5 py-2 text-xs font-bold text-white transition-transform hover:scale-[1.05]">
        予約する
      </Link>
    </motion.header>
  );
}

export function PetFooter() {
  return (
    <footer className="border-t border-[#A37864]/20 bg-[#FFF7EE] px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-zen-maru)] text-3xl font-bold text-[#A37864]">
          🐾 もこもこ Pet Salon
        </p>
        <div className="mt-8 grid gap-8 text-sm text-[#3B2A1C]/80 sm:grid-cols-3">
          <div>
            <p className="font-bold text-[#A37864]">場所</p>
            <p className="mt-2">神奈川県川崎市中原区<br />武蔵小杉駅 徒歩7分</p>
          </div>
          <div>
            <p className="font-bold text-[#A37864]">営業時間</p>
            <p className="mt-2">10:00 — 19:00<br />火曜定休</p>
          </div>
          <div>
            <p className="font-bold text-[#A37864]">ご連絡</p>
            <p className="mt-2">044-XXX-XXXX<br />mokomoko@example.jp</p>
          </div>
        </div>
        <p className="mt-12 border-t border-[#A37864]/15 pt-5 text-xs text-[#3B2A1C]/50">
          © {new Date().getFullYear()} もこもこ Pet Salon · <Link href="/" className="underline-offset-4 hover:underline">実績一覧へ ←</Link>
        </p>
      </div>
    </footer>
  );
}
