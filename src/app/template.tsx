"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Page transition wrapper.
 * Next.js App Router の template.tsx 規約。pathname が変わるたびに再マウントされる。
 *
 * - 入場: 下から少し浮き上がりつつフェードイン
 * - 出場: framer-motion の AnimatePresence なしで template の特性に頼る（Next.js が自動 unmount→mount するため）
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
