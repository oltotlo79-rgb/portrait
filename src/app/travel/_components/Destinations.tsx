"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Compass } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { DESTINATIONS } from "./destinations-data";

export function TravelDestinations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // 6 cards, slide horizontally across the visible area
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="relative bg-[#0F4C81] text-white"
      style={{ height: `${DESTINATIONS.length * 90}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="px-6 pt-20 pb-10 sm:px-12 lg:px-20">
          <div className="mx-auto flex max-w-6xl items-end justify-between">
            <SectionLabel number="02" className="text-white/80">
              Destinations
            </SectionLabel>
            <p className="hidden text-xs uppercase tracking-[0.3em] text-white/60 sm:block">
              Scroll horizontally · 6 places
            </p>
          </div>
        </div>

        <div ref={trackRef} className="relative flex flex-1 items-center">
          <motion.ul style={{ x }} className="flex gap-8 px-6 sm:px-12 lg:px-20">
            {DESTINATIONS.map((d, i) => (
              <li
                key={d.en}
                className="relative w-[78vw] max-w-[560px] shrink-0 overflow-hidden rounded-2xl sm:w-[60vw] lg:w-[44vw]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={d.image}
                    alt={`${d.ja}の風景`}
                    fill
                    sizes="(min-width: 1024px) 44vw, (min-width: 640px) 60vw, 78vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
                    <span className="opacity-70">
                      {String(i + 1).padStart(2, "0")} / 06
                    </span>
                    <span className="rounded-full border border-white/30 px-3 py-1">
                      {d.ja}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-manrope)] text-5xl font-bold leading-none tracking-tight sm:text-6xl">
                      {d.en}
                    </h3>
                    <p className="mt-4 max-w-xs font-[family-name:var(--font-noto-serif-jp)] text-sm leading-relaxed text-white/85">
                      {d.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>

        <JourneyMap scrollProgress={scrollYProgress} />
      </div>
    </section>
  );
}

/* ====================================================== */
/*  JourneyMap — scroll-linked route line + waypoints     */
/* ====================================================== */
function JourneyMap({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  // Path stroke length — draws left-to-right as user scrolls
  const pathLength = useTransform(scrollProgress, [0, 1], [0, 1]);

  // Traveling compass marker position (0% → 100%)
  const markerLeft = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);
  const markerRotate = useTransform(scrollProgress, [0, 1], [0, 540]);

  // Each waypoint dot fills as scroll passes its slot.
  // 6 cards → 6 thresholds evenly distributed.
  const dot0 = useTransform(scrollProgress, [0, 0.04], [0, 1]);
  const dot1 = useTransform(scrollProgress, [0.16, 0.24], [0, 1]);
  const dot2 = useTransform(scrollProgress, [0.36, 0.44], [0, 1]);
  const dot3 = useTransform(scrollProgress, [0.56, 0.64], [0, 1]);
  const dot4 = useTransform(scrollProgress, [0.76, 0.84], [0, 1]);
  const dot5 = useTransform(scrollProgress, [0.92, 1], [0, 1]);
  const dotProgresses = [dot0, dot1, dot2, dot3, dot4, dot5];

  const last = DESTINATIONS.length - 1;

  return (
    <div className="relative shrink-0 px-6 pb-7 pt-3 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Hint text */}
        <div className="mb-3 flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-white/45">
          <span>Route Map</span>
          <span className="hidden sm:inline">Scroll to travel →</span>
        </div>

        <div className="relative h-16">
          {/* Labels */}
          <ul className="absolute inset-x-0 top-0">
            {DESTINATIONS.map((d, i) => {
              const leftPct = (100 / last) * i;
              const transform =
                i === 0
                  ? undefined
                  : i === last
                  ? "translateX(-100%)"
                  : "translateX(-50%)";
              return (
                <li
                  key={d.en}
                  className="absolute top-0"
                  style={{ left: `${leftPct}%`, transform }}
                >
                  <span className="block whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-white/70">
                    {d.en}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Route line + dots */}
          <svg
            className="absolute inset-x-0 top-8 h-3 w-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 12"
            style={{ overflow: "visible" }}
            aria-hidden
          >
            {/* Background dashed line */}
            <line
              x1="0"
              y1="6"
              x2="1000"
              y2="6"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="1"
              strokeDasharray="4 4"
              vectorEffect="non-scaling-stroke"
            />
            {/* Animated foreground (drawn) */}
            <motion.line
              x1="0"
              y1="6"
              x2="1000"
              y2="6"
              stroke="#FFC97A"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
            />
            {/* Waypoint dots */}
            {DESTINATIONS.map((_, i) => {
              const cx = (1000 / last) * i;
              return (
                <g key={i}>
                  {/* Base ring */}
                  <circle
                    cx={cx}
                    cy={6}
                    r="5"
                    fill="#0F4C81"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.2"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Filled inner */}
                  <motion.circle
                    cx={cx}
                    cy={6}
                    r="3.5"
                    fill="#FFC97A"
                    style={{ opacity: dotProgresses[i] }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Traveling compass */}
          <motion.div
            className="absolute top-[26px] z-10"
            style={{ left: markerLeft, x: "-50%" }}
          >
            <motion.div
              style={{ rotate: markerRotate }}
              className="grid size-7 place-items-center rounded-full bg-[#FFC97A] text-[#0F4C81] shadow-[0_4px_14px_-2px_rgba(255,201,122,0.7)]"
            >
              <Compass className="size-4" strokeWidth={2.2} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
