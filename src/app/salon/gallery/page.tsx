import type { Metadata } from "next";
import Image from "next/image";
import { SalonNav, SalonFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "Gallery｜LUNA hair & atelier",
  description: "完全予約制サロン LUNA のスタイル事例ギャラリー。",
};

const STYLE_IMAGES = [
  "/images/salon/02-style-01.webp",
  "/images/salon/03-style-02.webp",
  "/images/salon/04-style-03.webp",
  "/images/salon/05-style-04.webp",
  "/images/salon/06-style-05.webp",
  "/images/salon/07-style-06.webp",
  "/images/salon/08-style-07.webp",
  "/images/salon/09-style-08.webp",
  "/images/salon/10-interior-01.webp",
  "/images/salon/11-interior-02.webp",
  "/images/salon/13-tool-01.webp",
  "/images/salon/14-tool-02.webp",
];

export default function SalonGalleryPage() {
  return (
    <>
      <section className="relative h-[52vh] min-h-[400px] overflow-hidden bg-[#2E2A26] text-[#E8DCD0]">
        <SalonNav />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 60% 50%, rgba(184, 137, 106, 0.45) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-6xl">
            <SectionLabel className="text-[#B8896A]">Gallery</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,7rem)] italic">
              Style works.
            </h1>
          </div>
        </div>
      </section>
      <main className="bg-[#E8DCD0] px-6 py-24 sm:px-12 lg:px-20">
        <ul className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {STYLE_IMAGES.map((src, i) => (
            <FadeIn key={i} delay={(i % 6) * 0.05}>
              <div className="group relative overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={src}
                    alt={`Style ${String(i + 1).padStart(2, "0")}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.3em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Style {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </FadeIn>
          ))}
        </ul>
      </main>
      <SalonFooter />
    </>
  );
}
