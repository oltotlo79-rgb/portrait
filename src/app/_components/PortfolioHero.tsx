"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Layers3, MousePointer2 } from "lucide-react";
import type { SiteConfig } from "@/lib/site-config";
import { FadeIn, RevealText, motionTimings } from "@/lib/animations";

export function PortfolioHero({ sites }: { sites: SiteConfig[] }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const active = sites[index] ?? sites[0];
  const featured = useMemo(() => sites.slice(0, 6), [sites]);

  useEffect(() => {
    if (reduceMotion || sites.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % featured.length);
    }, motionTimings.defaultSceneIntervalMs);
    return () => window.clearInterval(id);
  }, [featured.length, reduceMotion, sites.length]);

  if (!active) return null;

  const style = {
    "--atlas-primary": active.primary,
    "--atlas-accent": active.accent,
    "--atlas-bg": active.background,
  } as CSSProperties;

  return (
    <section
      className="relative min-h-[88svh] overflow-hidden bg-[#111] px-6 pb-24 pt-24 text-white sm:px-12 lg:px-20"
      style={style}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={active.slug}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={active.thumb}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.58)_42%,rgba(0,0,0,0.16)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.1)_52%,rgba(0,0,0,0.78)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(88svh-12rem)] max-w-7xl flex-col justify-between gap-20">
        <div className="max-w-4xl">
          <FadeIn className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/75 backdrop-blur">
            <Layers3 className="size-3.5 text-[var(--atlas-accent)]" />
            Interactive Design Atlas
          </FadeIn>

          <h1 className="mt-8 font-[family-name:var(--font-manrope)] text-[clamp(2.4rem,9vw,8.6rem)] font-light leading-[1]">
            <RevealText
              text="業種ごとの"
              splitBy="word"
              className="block whitespace-nowrap"
            />
            <RevealText
              text="選ばれ方を"
              splitBy="word"
              className="block whitespace-nowrap font-[family-name:var(--font-noto-serif-jp)]"
              delay={0.12}
            />
            <RevealText
              text="デザインする"
              splitBy="word"
              className="block whitespace-nowrap pb-[0.1em] font-[family-name:var(--font-shippori-mincho)] leading-[1.08] tracking-[0.05em] text-[var(--atlas-accent)]"
              delay={0.24}
            />
          </h1>

          <FadeIn delay={0.55} className="mt-10 max-w-2xl">
            <p className="text-body text-white/76">
              民泊、士業、美容、飲食、EC、ジムまで。見た目だけでなく、
              導線・信頼感・予約行動まで設計した Web 制作サンプル集です。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#industry-atlas"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
              >
                業種を比較する
                <MousePointer2 className="size-4" />
              </Link>
              <Link
                href={`/${active.slug}`}
                className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white hover:text-black"
              >
                表示中のサイトを見る
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <FadeIn delay={0.75} className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/48">
              Now showing
            </p>
            <div className="mt-3 flex flex-wrap items-end gap-x-5 gap-y-2">
              <span className="text-3xl font-medium">{active.name}</span>
              <span className="pb-1 text-sm text-white/62">
                {active.industryJa} / {active.catch}
              </span>
            </div>
          </FadeIn>

          <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
            {featured.map((site, i) => (
              <button
                key={site.slug}
                type="button"
                onClick={() => setIndex(i)}
                className="group relative h-20 w-32 shrink-0 overflow-hidden rounded-lg border border-white/15 text-left transition-colors hover:border-white/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label={`${site.name}を表示`}
                aria-pressed={site.slug === active.slug}
              >
                <Image
                  src={site.thumb}
                  alt=""
                  fill
                  sizes="128px"
                  className="object-cover"
                />
                <span
                  className={`absolute inset-0 ${
                    site.slug === active.slug ? "bg-black/10" : "bg-black/40"
                  }`}
                />
                <span className="absolute bottom-2 left-2 right-2 truncate text-[10px] font-medium uppercase tracking-[0.16em] text-white">
                  {site.industryEn}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
