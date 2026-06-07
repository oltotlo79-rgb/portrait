import type { Metadata } from "next";
import Image from "next/image";
import { RyokanNav, RyokanFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "客室｜湯守 月白",
  description: "明治創業の老舗旅館の十四室をご紹介します。",
};

const ROOMS = [
  {
    no: "壱",
    name: "月読の間",
    en: "Tsukuyomi",
    body: "別棟・八畳二間続きに檜の露天風呂。中庭の薄を一望。",
    spec: ["二間続き 16畳", "定員 4名", "檜の露天風呂", "夕餉はお部屋食"],
    image: "/images/ryokan/03-room-tsukiyomi.webp",
  },
  {
    no: "弐",
    name: "宵待の間",
    en: "Yoimachi",
    body: "母屋の角部屋。夕餉の刻、西窓に沈む山並みと行灯の灯が同時に灯ります。",
    spec: ["12畳 + 縁側", "定員 3名", "内風呂", "夕餉はお部屋食"],
    image: "/images/ryokan/04-room-yoimachi.webp",
  },
  {
    no: "参",
    name: "蒼月の間",
    en: "Sogetsu",
    body: "桐の本間と次の間、専用の檜風呂。お部屋食を最も気持ちよくお召し上がりいただける一室。",
    spec: ["本間 10畳 + 次の間 6畳", "定員 4名", "檜の内風呂", "夕餉はお部屋食"],
    image: "/images/ryokan/05-room-sougetsu.webp",
  },
];

export default function RyokanRoomsPage() {
  return (
    <>
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden bg-[#0F141C] text-[#F1EAD9]">
        <RyokanNav />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(232,116,60,0.18) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-6xl">
            <SectionLabel className="text-[#E8743C]">Rooms</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-[clamp(2.5rem,6vw,5rem)] tracking-[0.1em]">
              十四室、それぞれに名月
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#0F141C] px-6 py-24 text-[#F1EAD9] sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl space-y-32">
          {ROOMS.map((r, i) => (
            <FadeIn key={r.name} delay={i * 0.08}>
              <article
                className={`grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
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
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#E8743C]">
                    {r.no} · {r.en}
                  </p>
                  <h2 className="mt-4 font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.1em] sm:text-5xl">
                    {r.name}
                  </h2>
                  <p className="mt-8 max-w-lg font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#F1EAD9]/85">
                    {r.body}
                  </p>
                  <ul className="mt-10 space-y-3 border-t border-[#D9D1B8]/15 pt-6 text-xs">
                    {r.spec.map((s) => (
                      <li
                        key={s}
                        className="flex gap-3 text-[#F1EAD9]/80"
                      >
                        <span className="text-[#E8743C]">·</span>
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

      <RyokanFooter />
    </>
  );
}
