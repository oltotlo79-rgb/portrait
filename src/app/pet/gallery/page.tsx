import type { Metadata } from "next";
import Image from "next/image";
import { PetNav, PetFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Gallery｜もこもこ Pet Salon",
  description: "ご来店のわんちゃん・ねこちゃんのカット前後ギャラリー。",
};

const ITEMS = [
  "/images/pet/02-dog-01.webp",
  "/images/pet/03-dog-02.webp",
  "/images/pet/04-dog-03.webp",
  "/images/pet/05-dog-04.webp",
  "/images/pet/06-cat-01.webp",
  "/images/pet/07-cat-02.webp",
  "/images/pet/08-cat-03.webp",
  "/images/pet/09-cat-04.webp",
  "/images/pet/10-salon-cut.webp",
  "/images/pet/11-salon-bath.webp",
  "/images/pet/01-hero-dog.webp",
  "/images/pet/12-staff-01.webp",
];

export default function PetGalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FFF7EE] py-32 sm:py-40">
        <div className="pointer-events-none absolute -top-32 right-10 size-72 rounded-full bg-[#FFC97A]/60 blur-3xl" aria-hidden />
        <PetNav />
        <div className="relative mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A37864]">Gallery</p>
          <h1 className="mt-4 font-[family-name:var(--font-zen-maru)] text-[clamp(2.5rem,7vw,5rem)] font-bold text-[#3B2A1C]">
            ご来店ギャラリー 🐾
          </h1>
        </div>
      </section>
      <main className="bg-[#FFF7EE] px-6 pb-32 sm:px-12 lg:px-20">
        <ul className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((src, i) => (
            <FadeIn key={i} delay={(i % 6) * 0.04}>
              <div className="group relative overflow-hidden rounded-3xl">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </ul>
      </main>
      <PetFooter />
    </>
  );
}
