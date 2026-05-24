"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";
import Link from "next/link";
import { MagneticButton } from "@/lib/animations";

const ROOMS = [
  {
    name: "梅 の 間",
    en: "Ume — Plum Room",
    body: "床の間に椿一輪、二畳の縁側。朝の光が障子越しに落ちる、いちばん静かな部屋。",
    image: "/images/minpaku/03-room-ume.webp",
  },
  {
    name: "桐 の 間",
    en: "Kiri — Paulownia Room",
    body: "欄間越しに坪庭を望む、二間続き。西日が床に長く伸びる夕方が、いちばん。",
    image: "/images/minpaku/04-room-kiri.webp",
  },
];

const SEASONS = [
  { ja: "春", en: "Spring", body: "格子越しに桜", image: "/images/minpaku/06-season-spring.webp" },
  { ja: "夏", en: "Summer", body: "簾と風鈴", image: "/images/minpaku/07-season-summer.webp" },
  { ja: "秋", en: "Autumn", body: "苔と紅葉", image: "/images/minpaku/08-season-autumn.webp" },
  { ja: "冬", en: "Winter", body: "夜更けの障子", image: "/images/minpaku/09-season-winter.webp" },
];

const EXPERIENCES = [
  { ja: "朝の坐禅", en: "Zazen", body: "近隣の禅寺で、朝の30分。" },
  { ja: "町家ごはん", en: "Machiya Dinner", body: "料理人を呼んで、ふだんの夕餉を。" },
  { ja: "路地散歩ガイド", en: "Alley Walk", body: "西陣の路地を90分、案内付きで。" },
];

export function MinpakuAbout() {
  return (
    <section className="bg-[#F4EDE3] px-6 py-40 sm:px-12 lg:px-20">
      <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.4fr]">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="font-[family-name:var(--font-shippori-mincho)] text-2xl tracking-[0.1em] text-[#3F4A3C] sm:text-3xl lg:leading-[2] lg:tracking-[0.15em] lg:[writing-mode:vertical-rl]"
        >
          路地に、灯る。
        </motion.p>
        <div>
          <FadeIn>
            <h2 className="font-[family-name:var(--font-shippori-mincho)] text-4xl leading-tight tracking-[0.05em] text-[#1A1A1A] sm:text-5xl">
              西陣の路地に、
              <br />
              一棟だけの宿。
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-10 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#1A1A1A]/80">
              築120年の町家を、半年かけて手入れしました。
              漆喰、土壁、坪庭、欄間。残せるものを残し、暮らしの動線だけを今のかたちに。
              1日1組だけのお迎えだから、足音にも、湯の音にも、気がねがいりません。
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function MinpakuRooms() {
  return (
    <section id="rooms" className="bg-[#1f2618] px-6 py-32 text-[#F4EDE3] sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="二" className="text-[#C9A063]">
          客室
        </SectionLabel>
        <h2 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.1em] sm:text-5xl">
          <span className="inline-block">二室、</span>
          <span className="inline-block">それぞれに。</span>
        </h2>
        <ul className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {ROOMS.map((r, i) => (
            <motion.li
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={r.image}
                  alt={r.name}
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-8 font-[family-name:var(--font-shippori-mincho)] text-3xl tracking-[0.2em]">
                {r.name}
              </h3>
              <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-[#C9A063]">
                {r.en}
              </p>
              <p className="mt-6 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#F4EDE3]/80">
                {r.body}
              </p>
            </motion.li>
          ))}
        </ul>
        <div className="mt-16 text-center">
          <Link
            href="/minpaku/rooms"
            className="inline-block border border-[#C9A063] px-10 py-4 text-xs tracking-[0.3em] text-[#C9A063] transition-colors hover:bg-[#C9A063] hover:text-[#1f2618]"
          >
            部屋の詳細を見る
          </Link>
        </div>
      </div>
    </section>
  );
}

export function MinpakuSeasons() {
  return (
    <section className="bg-[#F4EDE3] px-6 py-32 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="三" className="text-[#3F4A3C]">
          季 の 庭
        </SectionLabel>
        <h2 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.1em] text-[#1A1A1A] sm:text-5xl">
          四つの顔をもつ坪庭。
        </h2>
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SEASONS.map((s, i) => (
            <motion.li
              key={s.ja}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={s.image}
                  alt={`${s.ja}の坪庭`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-[#F4EDE3]">
                <p className="font-[family-name:var(--font-shippori-mincho)] text-4xl">{s.ja}</p>
                <p className="text-[10px] uppercase tracking-[0.4em]">{s.en}</p>
                <p className="mt-2 text-xs">{s.body}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function MinpakuExperience() {
  return (
    <section
      id="experience"
      className="bg-[#3F4A3C] px-6 py-32 text-[#F4EDE3] sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="四" className="text-[#C9A063]">
          体験
        </SectionLabel>
        <h2 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.1em] sm:text-5xl">
          <span className="inline-block">滞在に、</span>
          <span className="inline-block">もう一筆。</span>
        </h2>
        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {EXPERIENCES.map((e, i) => (
            <motion.li
              key={e.ja}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border-t border-[#C9A063]/40 pt-8"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#C9A063]">
                {String(i + 1).padStart(2, "0")} · {e.en}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-shippori-mincho)] text-2xl tracking-[0.1em]">
                {e.ja}
              </h3>
              <p className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#F4EDE3]/80">
                {e.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function MinpakuAccess() {
  return (
    <section id="access" className="bg-[#F4EDE3] px-6 py-32 sm:px-12 lg:px-20">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionLabel number="五" className="text-[#3F4A3C]">
            アクセス
          </SectionLabel>
          <h2 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.1em] text-[#1A1A1A] sm:text-5xl">
            西陣の、奥の路地へ。
          </h2>
          <dl className="mt-12 space-y-6 text-sm">
            <Row label="所在地" value="京都市上京区（詳細はご予約後にお伝えします）" />
            <Row label="最寄り" value="今出川駅 徒歩12分 / 京都駅からタクシー約20分" />
            <Row label="チェックイン" value="15:00 — 19:00（前後相談可）" />
            <Row label="チェックアウト" value="11:00" />
          </dl>
        </div>
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/minpaku/13-access-map.png"
              alt="アクセスマップ"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-6 border-b border-[#3F4A3C]/15 pb-4">
      <dt className="text-[10px] uppercase tracking-[0.3em] text-[#C9A063]">{label}</dt>
      <dd className="font-[family-name:var(--font-noto-serif-jp)] text-[#1A1A1A]">{value}</dd>
    </div>
  );
}

export function MinpakuCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1f2618] px-6 py-40 text-[#F4EDE3] sm:px-12 lg:px-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(201, 160, 99, 0.18) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#C9A063]">
          Reservation
        </p>
        <h2 className="mt-8 font-[family-name:var(--font-shippori-mincho)] text-[clamp(2.5rem,6vw,5rem)] tracking-[0.1em]">
          おひとり様、
          <br />
          おひと組ずつ。
        </h2>
        <p className="mt-10 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#F4EDE3]/75">
          ご予約は三か月前より承ります。下記より、お気軽にお問い合わせください。
        </p>
        <div className="mt-16">
          <Link href="/minpaku/contact">
            <MagneticButton className="border border-[#C9A063] bg-transparent text-[#C9A063] hover:bg-[#C9A063] hover:text-[#1f2618]">
              <span className="tracking-[0.3em]">ご予約フォームへ</span>
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
