"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function OrganicNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 sm:px-12 lg:px-20"
    >
      <Link href="/organic" className="font-[family-name:var(--font-cormorant)] text-2xl italic text-[#3F5B36]">
        KIYORA <span className="text-base not-italic tracking-[0.3em]">FARM</span>
      </Link>
      <nav className="hidden gap-8 text-[10px] uppercase tracking-[0.4em] text-[#2A2520] sm:flex">
        <Link href="/organic/products" className="hover:text-[#C9462C]">Shop</Link>
        <Link href="/organic#story" className="hover:text-[#C9462C]">Story</Link>
        <Link href="/organic#journal" className="hover:text-[#C9462C]">Journal</Link>
        <Link href="/organic/contact" className="hover:text-[#C9462C]">Contact</Link>
      </nav>
      <Link href="/organic/products" className="border border-[#3F5B36] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#3F5B36] transition-colors hover:bg-[#3F5B36] hover:text-[#FAF6EE]">
        Shop now
      </Link>
    </motion.header>
  );
}

export function OrganicFooter() {
  return (
    <footer className="border-t border-[#2A2520]/15 bg-[#FAF6EE] px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-cormorant)] text-4xl italic text-[#3F5B36]">
          KIYORA <span className="text-2xl not-italic tracking-[0.3em]">FARM</span>
        </p>
        <p className="mt-2 font-[family-name:var(--font-noto-serif-jp)] text-xs text-[#2A2520]/70">
          信州・東御の有機JAS認証農園
        </p>
        <div className="mt-10 grid gap-8 text-xs text-[#2A2520]/80 sm:grid-cols-3">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#C9462C]">Farm</p>
            <p className="mt-2">長野県東御市◯-◯<br />標高 720m</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#C9462C]">Certification</p>
            <p className="mt-2">有機JAS（小規模生産者）<br />2018年取得</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#C9462C]">Contact</p>
            <p className="mt-2">kiyora@example.jp<br />0268-XX-XXXX</p>
          </div>
        </div>
        <p className="mt-12 border-t border-[#2A2520]/10 pt-5 text-[10px] uppercase tracking-[0.3em] text-[#2A2520]/40">
          © {new Date().getFullYear()} KIYORA FARM · <Link href="/" className="underline-offset-4 hover:underline">Portfolio ←</Link>
        </p>
      </div>
    </footer>
  );
}
