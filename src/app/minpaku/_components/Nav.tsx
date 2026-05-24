"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function MinpakuNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 text-[#F4EDE3] sm:px-12 lg:px-20"
    >
      <Link
        href="/minpaku"
        className="font-[family-name:var(--font-shippori-mincho)] text-lg tracking-[0.3em]"
      >
        やまどり庵
      </Link>
      <nav className="hidden gap-10 text-[10px] uppercase tracking-[0.4em] sm:flex">
        <Link href="/minpaku/rooms" className="hover:opacity-60">
          Rooms
        </Link>
        <Link href="/minpaku#experience" className="hover:opacity-60">
          Experience
        </Link>
        <Link href="/minpaku#access" className="hover:opacity-60">
          Access
        </Link>
        <Link href="/minpaku/contact" className="hover:opacity-60">
          Contact
        </Link>
      </nav>
      <Link
        href="/minpaku/contact"
        className="border border-[#C9A063] px-4 py-2 text-[10px] tracking-[0.3em] text-[#C9A063] transition-colors hover:bg-[#C9A063] hover:text-[#1A1A1A]"
      >
        ご予約
      </Link>
    </motion.header>
  );
}
