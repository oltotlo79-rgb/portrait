"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import type { Course } from "../_data/types";

/**
 * Pinned-scroll の献立。
 * - section の高さ = COURSE.length × 100vh で長いコンテナを作る
 * - 内側に sticky top-0 で 100vh の固定パネル
 * - スクロール進捗で active index を更新、画像と文字をクロスフェード
 * - 下部に細い進捗バーを 5 本並べ、献立の流れを示す
 */
export function RestaurantMenu({ courses }: { courses: Course[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const next = Math.min(
        courses.length - 1,
        Math.floor(v * courses.length * 1.02),
      );
      setActive(next);
    });
  }, [scrollYProgress]);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative bg-[#0F0F0F]"
      style={{ height: `${courses.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 py-16 text-[#EFE9DD] sm:px-12 lg:px-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col">
          <SectionLabel number="二" className="text-[#B59154]">
            お品書き
          </SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-shippori-mincho)] text-3xl tracking-[0.1em] sm:text-4xl">
            月替わりのおまかせ
          </h2>

          <div className="mt-10 grid flex-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            {/* Image stack — crossfade */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md">
              {courses.map((dish, i) => (
                <motion.div
                  key={dish.no}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    scale: active === i ? 1 : 1.04,
                  }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={dish.image}
                    alt={`${dish.ja} - ${dish.body}`}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40"
                    aria-hidden
                  />
                  <div className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.4em] text-white/70">
                    {String(i + 1).padStart(2, "0")} / {String(courses.length).padStart(2, "0")}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Text stack — crossfade with slight y */}
            <div className="relative min-h-[320px]">
              {courses.map((dish, i) => (
                <motion.div
                  key={dish.no}
                  className="absolute inset-0 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    y: active === i ? 0 : active > i ? -24 : 24,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-[family-name:var(--font-shippori-mincho)] text-7xl tracking-[0.05em] text-[#B59154]">
                    {dish.no}
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.5em] text-[#EFE9DD]/60">
                    {dish.en}
                  </p>
                  <h3 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-3xl tracking-[0.1em] sm:text-4xl">
                    {dish.ja}
                  </h3>
                  <p className="mt-6 max-w-md font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#EFE9DD]/80">
                    {dish.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress bars */}
          <div className="mt-10 flex gap-3">
            {courses.map((dish, i) => (
              <div key={dish.no} className="flex-1">
                <div className="relative h-px bg-[#EFE9DD]/15">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-[#B59154]"
                    animate={{ width: active >= i ? "100%" : "0%" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </div>
                <p
                  className={`mt-2 text-[10px] uppercase tracking-[0.3em] transition-colors ${
                    active === i ? "text-[#B59154]" : "text-[#EFE9DD]/40"
                  }`}
                >
                  {dish.no} · {dish.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
