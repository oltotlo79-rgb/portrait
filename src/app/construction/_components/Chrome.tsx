"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ConstructionNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 text-[#F2EDE5] sm:px-12 lg:px-20"
    >
      <Link href="/construction" className="font-[family-name:var(--font-noto-serif-jp)] text-base font-bold tracking-[0.2em]">
        木下工務店
      </Link>
      <nav className="hidden gap-8 text-[10px] uppercase tracking-[0.3em] sm:flex">
        <Link href="/construction/works" className="hover:text-[#C45D2E]">Works</Link>
        <Link href="/construction#concept" className="hover:text-[#C45D2E]">Concept</Link>
        <Link href="/construction#team" className="hover:text-[#C45D2E]">Team</Link>
        <Link href="/construction/contact" className="hover:text-[#C45D2E]">Contact</Link>
      </nav>
      <Link href="/construction/contact" className="border border-[#C45D2E] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#C45D2E] transition-colors hover:bg-[#C45D2E] hover:text-[#2C2A28]">
        Inquiry
      </Link>
    </motion.header>
  );
}

export function ConstructionFooter() {
  return (
    <footer className="border-t border-[#2C2A28]/15 bg-[#F2EDE5] px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-noto-serif-jp)] text-3xl font-bold text-[#2C2A28]">
          木下工務店
        </p>
        <p className="mt-1 font-[family-name:var(--font-anton)] text-sm tracking-[0.3em] text-[#C45D2E]">
          KINOSHITA · EST. 1948
        </p>
        <div className="mt-10 grid gap-8 text-xs text-[#2C2A28]/80 sm:grid-cols-3">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#C45D2E]">本社</p>
            <p className="mt-2">長野県松本市◯-◯<br />松本駅 車で15分</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#C45D2E]">事業</p>
            <p className="mt-2">注文住宅 / 自然素材<br />リフォーム / 古民家再生</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#C45D2E]">ご連絡</p>
            <p className="mt-2">0263-XX-XXXX<br />info@kinoshita.example.jp</p>
          </div>
        </div>
        <p className="mt-12 border-t border-[#2C2A28]/10 pt-5 text-[10px] uppercase tracking-[0.3em] text-[#2C2A28]/40">
          © {new Date().getFullYear()} 木下工務店 · <Link href="/" className="underline-offset-4 hover:underline">Portfolio ←</Link>
        </p>
      </div>
    </footer>
  );
}
