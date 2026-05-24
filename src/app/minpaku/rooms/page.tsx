import type { Metadata } from "next";
import Image from "next/image";
import { MinpakuNav } from "../_components/Nav";
import { MinpakuFooter } from "../_components/Footer";
import { FadeIn } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "客室紹介｜やまどり庵",
  description: "梅の間と桐の間、それぞれの設えと過ごし方をご紹介します。",
};

const ROOMS = [
  {
    name: "梅 の 間",
    en: "Ume",
    body: "二畳の床の間と縁側を備えた、朝の光がいちばん早く届く部屋。椿、寒椿、もみじと、季節の花を一輪生けてお迎えします。",
    spec: ["広さ: 12畳 + 縁側", "定員: 2名", "設備: 文机, 茶道具, ハロゲンライト, 床暖房"],
    image: "/images/minpaku/03-room-ume.webp",
  },
  {
    name: "桐 の 間",
    en: "Kiri",
    body: "欄間越しに坪庭を望む二間続き。西陽が床に長く伸びる夕方の景色を、ぜひ。",
    spec: ["広さ: 8畳 + 6畳", "定員: 4名", "設備: 二段ベッド可, 観賞用蓄音機, 床暖房"],
    image: "/images/minpaku/04-room-kiri.webp",
  },
];

export default function RoomsPage() {
  return (
    <>
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden bg-[#1f2618] text-[#F4EDE3]">
        <MinpakuNav />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201, 160, 99, 0.3) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-6xl">
            <SectionLabel className="text-[#C9A063]">Rooms</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-[clamp(2.5rem,6vw,5rem)] tracking-[0.1em]">
              <span className="inline-block">二室、</span>
              <span className="inline-block">それぞれに。</span>
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#F4EDE3] px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl space-y-32">
          {ROOMS.map((r, i) => (
            <FadeIn key={r.name} delay={i * 0.1}>
              <article className={`grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#C9A063]">
                    {String(i + 1).padStart(2, "0")} · {r.en}
                  </p>
                  <h2 className="mt-4 font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.2em] text-[#1A1A1A] sm:text-5xl">
                    {r.name}
                  </h2>
                  <p className="mt-8 max-w-lg font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#1A1A1A]/80">
                    {r.body}
                  </p>
                  <ul className="mt-10 space-y-3 border-t border-[#3F4A3C]/15 pt-6 text-xs">
                    {r.spec.map((s) => (
                      <li key={s} className="flex gap-3 text-[#1A1A1A]/80">
                        <span className="text-[#C9A063]">·</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </main>

      <MinpakuFooter />
    </>
  );
}
