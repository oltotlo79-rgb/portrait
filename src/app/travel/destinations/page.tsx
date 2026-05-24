import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { TravelNav } from "../_components/Nav";
import { TravelFooter } from "../_components/Footer";
import { DESTINATIONS } from "../_components/destinations-data";
import { FadeIn, RevealText } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "目的地一覧｜HORIZON Travel",
  description:
    "アイスランド、ジョージア、モロッコ、ペルー、ポルトガル、スリランカ — HORIZONがご案内する世界の6地域。",
};

export default function DestinationsPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden bg-[#0F4C81] text-white">
        <TravelNav />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, #F4B400 0%, transparent 50%), radial-gradient(circle at 70% 70%, #1f8a99 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-6xl">
            <SectionLabel className="text-white/70">Destinations</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-manrope)] text-[clamp(3rem,7vw,7rem)] font-bold leading-none">
              <RevealText text="6 places," splitBy="word" />
              <span className="block font-[family-name:var(--font-cormorant)] italic">
                <RevealText text="one journey." splitBy="word" delay={0.2} />
              </span>
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#F7F4EE] px-6 py-32 sm:px-12 lg:px-20">
        <ul className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d, i) => (
            <li key={d.en}>
              <FadeIn delay={i * 0.06}>
                <article className="group relative overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={d.image}
                      alt={`${d.ja}の風景`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 text-white">
                    <span className="text-[10px] uppercase tracking-[0.3em] opacity-80">
                      {String(i + 1).padStart(2, "0")} / 06 · {d.ja}
                    </span>
                    <div>
                      <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-bold">
                        {d.en}
                      </h2>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/85">
                        {d.body}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-24 max-w-6xl text-center">
          <Link
            href="/travel/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#0F4C81] px-8 py-4 text-sm text-white transition-colors hover:bg-[#101820]"
          >
            気になる目的地を相談する
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </main>

      <TravelFooter />
    </>
  );
}
