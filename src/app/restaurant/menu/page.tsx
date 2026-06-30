import type { Metadata } from "next";
import { RestaurantNav } from "../_components/Nav";
import { RestaurantFooter } from "../_components/Footer";
import { getCourses, getInfo } from "../_data";
import { FadeIn } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

export const metadata: Metadata = {
  title: "お品書き｜割烹 黒文字",
  description:
    "月替わりのおまかせコース。八寸、椀物、向付、焼物、〆まで、季節の一献を一席ずつ。",
};

const SAKE = [
  { name: "雨後の月 純米吟醸", area: "広島", price: "¥1,400 / 一合" },
  { name: "風の森 ALPHA TYPE1", area: "奈良", price: "¥1,600 / 一合" },
  { name: "獺祭 純米大吟醸 39", area: "山口", price: "¥2,200 / 一合" },
  { name: "新政 No.6 S-type", area: "秋田", price: "¥2,800 / 一合" },
];

export default async function MenuPage() {
  const [courses, info] = await Promise.all([getCourses(), getInfo()]);
  return (
    <>
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden bg-[#0F0F0F] text-[#EFE9DD]">
        <RestaurantNav />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(181, 145, 84, 0.25) 0%, rgba(15,15,15,1) 65%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-6xl">
            <SectionLabel number="二" className="text-[#B59154]">
              Menu
            </SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-[clamp(2.5rem,6vw,5rem)] tracking-[0.1em]">
              お品書き
            </h1>
          </div>
        </div>
      </section>

      <main className="bg-[#0F0F0F] px-6 py-32 text-[#EFE9DD] sm:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#EFE9DD]/80">
              月のはじめに大将がしつらえる、おまかせ五品。素材の入荷により内容は変わります。
            </p>
          </FadeIn>

          <ul className="mt-20 divide-y divide-[#B59154]/15 border-y border-[#B59154]/15">
            {courses.map((c, i) => (
              <FadeIn key={c.no} delay={i * 0.04}>
                <li className="grid grid-cols-[auto_1fr_auto] items-baseline gap-8 py-8">
                  <span className="font-[family-name:var(--font-shippori-mincho)] text-3xl text-[#B59154]">
                    {c.no}
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-shippori-mincho)] text-2xl tracking-[0.1em]">
                      {c.ja}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#EFE9DD]/65">
                      {c.body}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#EFE9DD]/40">
                    {c.en}
                  </span>
                </li>
              </FadeIn>
            ))}
          </ul>

          <p className="mt-12 text-center font-[family-name:var(--font-shippori-mincho)] text-xl tracking-[0.2em] text-[#B59154]">
            おまかせ コース ¥22,000
          </p>

          <div className="mt-32">
            <SectionLabel number="三" className="text-[#B59154]">
              Sake
            </SectionLabel>
            <h2 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-3xl tracking-[0.1em] sm:text-4xl">
              本日のお酒
            </h2>
            <ul className="mt-12 space-y-5">
              {SAKE.map((s, i) => (
                <FadeIn key={s.name} delay={i * 0.05}>
                  <li className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#B59154]/15 pb-5">
                    <div>
                      <p className="font-[family-name:var(--font-shippori-mincho)] text-lg">
                        {s.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#EFE9DD]/50">
                        {s.area}
                      </p>
                    </div>
                    <p className="text-sm tracking-[0.1em] text-[#B59154]">{s.price}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <RestaurantFooter info={info} />
    </>
  );
}
