import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Tilt3D } from "@/lib/animations";
import type { SiteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

const MOTION_LABELS: Record<SiteConfig["motionIntensity"], string> = {
  quiet: "Quiet",
  medium: "Medium",
  bold: "Bold",
  experimental: "Experimental",
};

const GOAL_LABELS: Record<SiteConfig["conversionGoal"], string> = {
  booking: "予約",
  contact: "問い合わせ",
  purchase: "購入",
  visit: "来店",
  lead: "相談",
};

export function IndustryPreviewCard({
  site,
  active,
  onFocus,
  index,
}: {
  site: SiteConfig;
  active: boolean;
  onFocus: () => void;
  index: number;
}) {
  return (
    <Link
      href={`/${site.slug}`}
      onFocus={onFocus}
      onMouseEnter={onFocus}
      className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      aria-label={`${site.name}のサンプルサイトを見る`}
    >
      <Tilt3D intensity={active ? 8 : 5} raise={active ? 6 : 3} glare className="rounded-lg">
        <article
          className={cn(
            "relative overflow-hidden rounded-lg border bg-white/[0.035] transition-colors duration-300",
            active ? "border-white/35" : "border-white/10 group-hover:border-white/25",
          )}
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={site.thumb}
              alt={`${site.name}のデザインサンプル`}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/28 to-black/10" />
          </div>

          <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-4">
            <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/80 backdrop-blur">
              {String(index + 1).padStart(2, "0")} / {site.industryEn}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-black">
              {site.status}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="flex gap-1.5" aria-hidden>
              {[site.background, site.primary, site.accent].map((color, colorIndex) => (
                <span
                  key={`${site.slug}-chip-${colorIndex}-${color}`}
                  className="size-4 rounded-full border border-white/25"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-white/55">
              {site.industryJa} / {MOTION_LABELS[site.motionIntensity]} motion
            </p>
            <h3 className="mt-1 text-xl font-medium text-white">{site.name}</h3>
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/70">
              {site.catch}
            </p>
            <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/12 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {site.designKeywords.slice(0, 2).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-white/16 px-2.5 py-1 text-[10px] text-white/70"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-white">
                {GOAL_LABELS[site.conversionGoal]}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </article>
      </Tilt3D>
    </Link>
  );
}
