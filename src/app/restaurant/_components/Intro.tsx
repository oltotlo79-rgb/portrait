"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/lib/animations";

export function RestaurantIntro() {
  return (
    <section className="relative bg-[#0F0F0F] px-6 py-40 text-[#EFE9DD] sm:px-12 lg:px-20">
      <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.2fr]">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="font-[family-name:var(--font-shippori-mincho)] text-xl leading-[1.7] tracking-[0.08em] text-[#B59154] sm:text-2xl lg:text-3xl lg:leading-[2] lg:tracking-[0.15em] lg:[writing-mode:vertical-rl]"
        >
          季節の、一献に、はじまる夜を。
        </motion.p>

        <div>
          <FadeIn>
            <h2 className="font-[family-name:var(--font-noto-serif-jp)] text-3xl font-bold leading-tight sm:text-4xl">
              月替わりのおまかせで、
              <br />
              神楽坂の夜をしつらえます。
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-10 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#EFE9DD]/80">
              一枚板のカウンター十席。
              旬の魚、地野菜、季節の器を、その夜の客人にあわせて仕立てる。
              派手な仕掛けはありません。鍋の前で、ことばを交わしながら、八寸から〆まで一献ずつ。
              ふだんと、ちょっと違う一晩を、神楽坂の路地で。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <dl className="mt-12 grid gap-6 border-t border-[#B59154]/20 pt-8 text-xs text-[#EFE9DD]/70 sm:grid-cols-3">
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#B59154]">Course</dt>
                <dd className="mt-2 text-[#EFE9DD]">おまかせ ¥22,000〜</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#B59154]">Seats</dt>
                <dd className="mt-2 text-[#EFE9DD]">カウンター 10席</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.3em] text-[#B59154]">Open</dt>
                <dd className="mt-2 text-[#EFE9DD]">18:00 / 20:30 二部制</dd>
              </div>
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
