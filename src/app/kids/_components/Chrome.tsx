"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function KidsNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 sm:px-12 lg:px-20"
    >
      <Link
        href="/kids"
        className="flex items-center gap-2 font-[family-name:var(--font-mplus-rounded)] text-xl font-extrabold text-[#FF8FA3]"
      >
        <span className="inline-block size-5 rounded-full bg-[#FFD166]" />
        ぽけっとラボ
      </Link>
      <nav className="hidden gap-8 text-[11px] font-bold uppercase tracking-[0.25em] text-[#3D2B1F] sm:flex">
        <Link href="/kids/program" className="hover:text-[#FF8FA3]">Program</Link>
        <Link href="/kids#voice" className="hover:text-[#FF8FA3]">Voice</Link>
        <Link href="/kids#access" className="hover:text-[#FF8FA3]">Access</Link>
        <Link href="/kids/contact" className="hover:text-[#FF8FA3]">Contact</Link>
      </nav>
      <Link
        href="/kids/contact"
        className="rounded-full bg-[#FF8FA3] px-5 py-2 text-[11px] font-bold text-white transition-transform hover:scale-[1.05]"
      >
        体験申込
      </Link>
    </motion.header>
  );
}

export function KidsFooter() {
  return (
    <footer className="border-t border-[#3D2B1F]/15 bg-[#FFF9F0] px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-mplus-rounded)] text-3xl font-extrabold text-[#FF8FA3]">
          ぽけっとラボ
        </p>
        <div className="mt-8 grid gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8FA3]">場所</p>
            <p className="mt-1 text-[#3D2B1F]/80">東京都目黒区自由が丘<br />ラボ棟2F</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8FA3]">日時</p>
            <p className="mt-1 text-[#3D2B1F]/80">土日 9:30 / 13:30 / 15:30</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8FA3]">連絡</p>
            <p className="mt-1 text-[#3D2B1F]/80">pocket-lab@example.jp</p>
          </div>
        </div>
        <p className="mt-10 border-t border-[#3D2B1F]/10 pt-5 text-xs text-[#3D2B1F]/50">
          © {new Date().getFullYear()} ぽけっとラボ · <Link href="/" className="underline-offset-4 hover:underline">実績一覧へ ←</Link>
        </p>
      </div>
    </footer>
  );
}
