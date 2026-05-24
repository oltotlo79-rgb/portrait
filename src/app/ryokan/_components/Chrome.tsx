"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function RyokanNav() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.4 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-7 text-[#F1EAD9] sm:px-12 lg:px-20"
    >
      <Link
        href="/ryokan"
        className="font-[family-name:var(--font-shippori-mincho)] text-lg tracking-[0.3em]"
      >
        湯守 月白
      </Link>
      <nav className="hidden gap-10 text-[10px] uppercase tracking-[0.4em] sm:flex">
        <Link href="/ryokan/rooms" className="hover:text-[#E8743C]">
          Rooms
        </Link>
        <Link href="/ryokan#bath" className="hover:text-[#E8743C]">
          Bath
        </Link>
        <Link href="/ryokan#kaiseki" className="hover:text-[#E8743C]">
          Kaiseki
        </Link>
        <Link href="/ryokan/contact" className="hover:text-[#E8743C]">
          Reserve
        </Link>
      </nav>
      <Link
        href="/ryokan/contact"
        className="border border-[#E8743C] px-4 py-2 text-[10px] tracking-[0.3em] text-[#E8743C] transition-colors hover:bg-[#E8743C] hover:text-[#0F141C]"
      >
        ご予約
      </Link>
    </motion.header>
  );
}

export function RyokanFooter() {
  return (
    <footer className="border-t border-[#D9D1B8]/15 bg-[#0F141C] px-6 py-16 text-[#F1EAD9] sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-shippori-mincho)] text-3xl tracking-[0.3em] text-[#D9D1B8]">
          湯守 月白
        </p>
        <p className="mt-2 font-[family-name:var(--font-cormorant)] text-sm italic text-[#D9D1B8]/70">
          Yumori Tsukishiro · est. 1894
        </p>
        <div className="mt-10 grid gap-8 text-xs text-[#F1EAD9]/80 sm:grid-cols-3">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#E8743C]">
              Address
            </p>
            <p className="mt-2">
              長野県美山温泉郷
              <br />
              （詳細はご予約後にお伝えします）
            </p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#E8743C]">
              Hours
            </p>
            <p className="mt-2">
              チェックイン 15:00
              <br />
              チェックアウト 11:00
            </p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#E8743C]">
              Contact
            </p>
            <p className="mt-2">
              0263-XX-XXXX
              <br />
              info@tsukishiro.example
            </p>
          </div>
        </div>
        <p className="mt-12 border-t border-[#D9D1B8]/15 pt-6 text-[10px] uppercase tracking-[0.3em] text-[#D9D1B8]/40">
          © {new Date().getFullYear()} 湯守 月白 ·{" "}
          <Link href="/" className="underline-offset-4 hover:underline">
            Portfolio ←
          </Link>
        </p>
      </div>
    </footer>
  );
}
