"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";

export function PortfolioBadge() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "") return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-50 print:hidden"
    >
      <Link
        href="/"
        className="group flex items-center gap-2 rounded-full bg-black/85 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-black"
      >
        <ArrowUpLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
        実績一覧へ戻る
      </Link>
    </motion.div>
  );
}
