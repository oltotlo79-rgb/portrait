"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, PackageCheck, Sprout, Truck } from "lucide-react";
import { FadeIn, KineticMarquee, RevealText } from "@/lib/animations";

const PRODUCTS = [
  { code: "P01", en: "Vegetable Box", ja: "季節の野菜セット (L)", price: "¥3,800", body: "8〜10種・1.5kg目安。配送日に収穫。", image: "/images/organic/11-product-set.webp" },
  { code: "P02", en: "Herb Mix", ja: "ハーブミックス", price: "¥1,200", body: "バジル・タイム・ローズマリーの乾燥ミックス。", image: "/images/organic/12-product-herb.webp" },
  { code: "P03", en: "Dressing", ja: "自家製ハーブドレッシング", price: "¥1,800", body: "畑のハーブと、地元米油・米酢。180ml。", image: "/images/organic/13-product-dressing.webp" },
];

const JOURNAL = [
  { date: "2026.04.20", title: "春のセットの楽しみ方 — 新玉ねぎは生で。" },
  { date: "2026.04.05", title: "ハーブのある食卓 — 5分でできる3つのアイデア。" },
  { date: "2026.03.18", title: "土の話 — KIYORAの畑がやっている、おだやかな農法。" },
];

const HARVEST = [
  { label: "Altitude", value: "720m", icon: Sprout },
  { label: "Harvest", value: "当日", icon: Leaf },
  { label: "Delivery", value: "翌日〜", icon: Truck },
];

export function OrganicTop() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] overflow-hidden bg-[#FAF6EE]">
        <motion.div
          initial={{ scale: 1.1, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/organic/01-hero-drone.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(42,58,24,0.3) 0%, rgba(63,91,54,0.15) 50%, rgba(42,42,24,0.6) 100%)",
          }}
          aria-hidden
        />
        {/* Crafts texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
          aria-hidden
        />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 text-white sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-6xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs uppercase tracking-[0.4em]"
            >
              KIYORA · Organic Farm · Tomi, Nagano
            </motion.p>

            <h1 className="mt-8 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,9vw,9rem)] italic leading-[0.95]">
              <RevealText text="From the soil," splitBy="word" delay={0.4} />
              <span className="block font-[family-name:var(--font-noto-serif-jp)] not-italic text-[0.45em] tracking-[0.15em]">
                <RevealText text="土から、食卓まで。" splitBy="word" delay={0.7} />
              </span>
            </h1>

            <FadeIn delay={1.1}>
              <p className="mt-12 max-w-xl text-sm leading-loose text-white/85">
                長野・東御の標高720m。
                土と空気の通り道を整え、ゆっくり育てた季節の野菜とハーブを、収穫日に発送します。
              </p>
            </FadeIn>
            <FadeIn delay={1.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/organic/products" className="inline-flex items-center gap-2 border border-white px-8 py-4 text-xs uppercase tracking-[0.3em] text-white transition-colors hover:bg-white hover:text-[#3F5B36]">
                  Shop now
                  <ArrowUpRight className="size-3.5" />
                </Link>
                <Link href="#story" className="text-xs uppercase tracking-[0.3em] text-white/80 hover:text-white">
                  Story →
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={1.45}>
              <dl className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-white/16 border-y border-white/16 py-5">
                {HARVEST.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="px-4 first:pl-0 last:pr-0">
                      <Icon className="mb-3 size-4 text-[#D8C29D]" />
                      <dt className="text-[10px] uppercase tracking-[0.28em] text-white/56">
                        {item.label}
                      </dt>
                      <dd className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl italic">
                        {item.value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      <KineticMarquee
        items={["root vegetables", "fresh herbs", "organic box", "field notes", "seasonal recipes"]}
        durationSeconds={38}
        className="border-y border-[#3F5B36]/12 bg-[#FAF6EE] py-5"
        trackClassName="font-[family-name:var(--font-cormorant)] text-[clamp(2.4rem,6vw,5.4rem)] italic text-[#3F5B36]/24"
        separator={<span className="inline-block size-2 rounded-full bg-[#C9462C]/60" />}
      />

      {/* Story */}
      <section id="story" className="bg-[#FAF6EE] px-6 py-40 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#C9462C]">Story</p>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl italic leading-tight text-[#3F5B36] sm:text-6xl">
              Slow,
              <br />
              & seasonal.
            </h2>
          </div>
          <div>
            <FadeIn>
              <p className="font-[family-name:var(--font-noto-serif-jp)] text-base leading-loose text-[#2A2520]/85">
                耕運機をできるだけ使わず、不耕起栽培と緑肥で土を育てる。
                農薬・化学肥料はゼロ。
                収穫量は決して多くないけれど、土の中で寝かせた根菜は、皮ごとかじっても甘い。
                春から冬まで、季節の野菜とハーブを、その日の朝に収穫してお送りします。
              </p>
              <ul className="mt-10 grid gap-4 text-sm">
                {["有機JAS認証 2018年", "農薬・化学肥料 不使用", "収穫日に発送、最短翌日到着"].map((t) => (
                  <li key={t} className="flex gap-3 border-l-2 border-[#C9462C] pl-4 text-[#2A2520]/85">
                    <span>·</span>{t}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-[#E9DDC7] px-6 py-28 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "/images/organic/06-farmer-hands-01.webp",
              "/images/organic/07-farmer-hands-02.webp",
              "/images/organic/08-farmer-hands-03.webp",
            ].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={src}
                  alt="畑での手仕事"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-[#C9462C]">
              <PackageCheck className="size-4" />
              From field to box
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,5.5rem)] italic leading-none text-[#3F5B36]">
              Packed
              <br />
              the same day.
            </h2>
            <p className="mt-8 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#2A2520]/76">
              収穫、選別、箱詰め、発送までを同じ日に。EC でも畑の温度が伝わるよう、
              商品ページだけでなく工程と鮮度の理由を前面に出します。
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#FAF6EE] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#C9462C]">Products</p>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl italic text-[#3F5B36]">Today’s shop</h2>
            </div>
            <Link href="/organic/products" className="hidden text-xs uppercase tracking-[0.3em] text-[#2A2520] sm:block hover:text-[#C9462C]">
              See all →
            </Link>
          </div>
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <motion.li
                key={p.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.ja}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <p className="font-[family-name:var(--font-noto-serif-jp)] text-lg font-bold text-[#3F5B36]">{p.ja}</p>
                  <p className="text-sm font-bold text-[#C9462C]">{p.price}</p>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#2A2520]/60">{p.en}</p>
                <p className="mt-2 text-sm text-[#2A2520]/75">{p.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="bg-[#3F5B36] px-6 py-32 text-[#FAF6EE] sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#D8C29D]">Journal</p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl italic">
            Recipes & field notes.
          </h2>
          <ul className="mt-12 divide-y divide-[#FAF6EE]/15 border-y border-[#FAF6EE]/15">
            {JOURNAL.map((j, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-6 transition-colors hover:bg-[#FAF6EE]/5"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-[#D8C29D]">{j.date}</span>
                <p className="font-[family-name:var(--font-noto-serif-jp)] text-base font-bold">{j.title}</p>
                <span className="hidden text-xs uppercase tracking-[0.3em] text-[#FAF6EE]/60 sm:block">Read →</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF6EE] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C9462C]">Subscribe</p>
          <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,5rem)] italic leading-tight text-[#3F5B36]">
            Bring the field
            <br />
            to your table.
          </h2>
          <p className="mt-8 text-sm leading-loose text-[#2A2520]/80">
            季節の野菜セット、隔週・月一・気が向いたとき。
            お好きなペースでお届けします。
          </p>
          <Link href="/organic/contact" className="mt-12 inline-block border border-[#3F5B36] bg-[#3F5B36] px-12 py-5 text-sm uppercase tracking-[0.3em] text-[#FAF6EE] transition-colors hover:bg-[#C9462C]">
            お問い合わせ →
          </Link>
        </div>
      </section>
    </>
  );
}
