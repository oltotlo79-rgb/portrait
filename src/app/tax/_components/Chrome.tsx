"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function TaxNav() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-7 text-white sm:px-12 lg:px-20"
    >
      <Link href="/tax" className="font-[family-name:var(--font-noto-serif-jp)] text-base font-bold tracking-[0.2em]">
        松永税理士事務所
      </Link>
      <nav className="hidden gap-8 text-[10px] uppercase tracking-[0.3em] sm:flex">
        <Link href="/tax/services" className="hover:text-[#B4924C]">Services</Link>
        <Link href="/tax#profile" className="hover:text-[#B4924C]">Profile</Link>
        <Link href="/tax#blog" className="hover:text-[#B4924C]">Column</Link>
        <Link href="/tax/contact" className="hover:text-[#B4924C]">Contact</Link>
      </nav>
      <Link href="/tax/contact" className="border border-[#B4924C] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#B4924C] transition-colors hover:bg-[#B4924C] hover:text-[#0E2A47]">
        Contact
      </Link>
    </motion.header>
  );
}

export function TaxFooter() {
  return (
    <footer className="border-t border-[#15233A]/15 bg-[#F5F2EC] px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-noto-serif-jp)] text-2xl font-bold text-[#0E2A47]">
          松永税理士事務所
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#B4924C]">
          Matsunaga Tax Accountant Office
        </p>
        <div className="mt-10 grid gap-8 text-xs text-[#15233A]/80 sm:grid-cols-3">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#B4924C]">Office</p>
            <p className="mt-2">東京都新宿区四谷◯-◯<br />四ツ谷駅 徒歩3分</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#B4924C]">Hours</p>
            <p className="mt-2">平日 9:00 — 18:00<br />（土日・夜間も応相談）</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#B4924C]">Contact</p>
            <p className="mt-2">03-XXXX-XXXX<br />matsunaga@example.jp</p>
          </div>
        </div>
        <p className="mt-12 border-t border-[#15233A]/10 pt-5 text-[10px] uppercase tracking-[0.3em] text-[#15233A]/40">
          © {new Date().getFullYear()} 松永税理士事務所 · <Link href="/" className="underline-offset-4 hover:underline">Portfolio ←</Link>
        </p>
      </div>
    </footer>
  );
}
