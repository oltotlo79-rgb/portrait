"use client";

import { useMemo, useState } from "react";
import type { SiteCategory, SiteConfig } from "@/lib/site-config";
import { FadeIn } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { cn } from "@/lib/cn";
import { DesignRadar } from "./DesignRadar";
import { IndustryPreviewCard } from "./IndustryPreviewCard";

const CATEGORY_LABELS: Record<SiteCategory | "all", string> = {
  all: "All",
  hospitality: "宿泊・旅",
  food: "飲食",
  wellness: "健康・美容",
  professional: "士業・B2B",
  retail: "EC",
  local: "地域店舗",
  lifestyle: "暮らし",
};

const CATEGORY_ORDER: Array<SiteCategory | "all"> = [
  "all",
  "hospitality",
  "food",
  "wellness",
  "professional",
  "retail",
  "local",
  "lifestyle",
];

export function IndustryAtlas({ sites }: { sites: SiteConfig[] }) {
  const [category, setCategory] = useState<SiteCategory | "all">("all");
  const [activeSlug, setActiveSlug] = useState(sites[0]?.slug ?? "");

  const filteredSites = useMemo(
    () => (category === "all" ? sites : sites.filter((site) => site.category === category)),
    [category, sites],
  );

  const activeSite =
    filteredSites.find((site) => site.slug === activeSlug) ?? filteredSites[0] ?? sites[0];

  return (
    <section
      id="industry-atlas"
      className="relative bg-[#0e0e0e] px-6 py-28 text-[#f6f6f2] sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <SectionLabel number="02" className="opacity-70">
            Industry Atlas
          </SectionLabel>
          <h2 className="mt-8 font-[family-name:var(--font-manrope)] text-[clamp(2.4rem,5vw,5.8rem)] font-light leading-[1.05]">
            <span className="block whitespace-nowrap">業種ごとの</span>
            <span className="block whitespace-nowrap">温度差まで見せる</span>
          </h2>
          <p className="mt-8 max-w-md text-sm leading-loose text-white/62">
            サンプルを一覧するだけでなく、信頼感・高級感・行動誘導・モーション強度を比較できます。
            制作前の方向性すり合わせに使える構成です。
          </p>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.7fr)] md:gap-10 lg:gap-16">
          {activeSite && (
            <aside className="md:sticky md:top-6 md:self-start">
              <DesignRadar site={activeSite} />
            </aside>
          )}

          <div>
            <FadeIn>
              <div className="flex flex-wrap gap-2">
                {CATEGORY_ORDER.map((item) => {
                  const active = item === category;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                        active
                          ? "border-white bg-white text-black"
                          : "border-white/15 text-white/68 hover:border-white/35 hover:text-white",
                      )}
                    >
                      {CATEGORY_LABELS[item]}
                    </button>
                  );
                })}
              </div>
            </FadeIn>

            <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredSites.map((site, i) => (
                <li key={site.slug}>
                  <FadeIn delay={i * 0.04}>
                    <IndustryPreviewCard
                      site={site}
                      active={activeSite?.slug === site.slug}
                      onFocus={() => setActiveSlug(site.slug)}
                      index={sites.findIndex((item) => item.slug === site.slug)}
                    />
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
