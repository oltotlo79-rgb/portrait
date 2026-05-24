"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function RestaurantNav() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.6 }}
      className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-7 text-[#EFE9DD] sm:px-12 lg:px-20"
    >
      <Link
        href="/restaurant"
        className="font-[family-name:var(--font-shippori-mincho)] text-lg tracking-[0.4em]"
      >
        黒 文 字
      </Link>
      <nav className="hidden gap-10 text-[10px] uppercase tracking-[0.4em] sm:flex">
        <Link href="/restaurant/menu" className="transition-opacity hover:opacity-50">
          Menu
        </Link>
        <Link href="/restaurant#chef" className="transition-opacity hover:opacity-50">
          Chef
        </Link>
        <Link href="/restaurant#space" className="transition-opacity hover:opacity-50">
          Space
        </Link>
        <Link
          href="/restaurant/reservation"
          className="transition-opacity hover:opacity-50"
        >
          Reservation
        </Link>
      </nav>
      <Link
        href="/restaurant/reservation"
        className="border border-[#B59154] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#B59154] transition-colors hover:bg-[#B59154] hover:text-[#0F0F0F]"
      >
        ご予約
      </Link>
    </motion.header>
  );
}
