import type { Metadata } from "next";
import Image from "next/image";
import { OrganicNav, OrganicFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Shop｜KIYORA FARM",
  description: "季節の野菜・ハーブ・自家製ドレッシングのオンラインショップ。",
};

const ITEMS = [
  { code: "P01", en: "Vegetable Box (L)", ja: "季節の野菜セット 大", price: "¥3,800", body: "8〜10種・1.5kg目安", image: "/images/organic/11-product-set.webp" },
  { code: "P02", en: "Vegetable Box (M)", ja: "季節の野菜セット 中", price: "¥2,800", body: "6〜8種・1.0kg目安", image: "/images/organic/02-veg-spring.webp" },
  { code: "P03", en: "Herb Mix Dry", ja: "ハーブミックス・乾燥", price: "¥1,200", body: "バジル・タイム・ローズマリー 30g", image: "/images/organic/12-product-herb.webp" },
  { code: "P04", en: "Herb Mix Fresh", ja: "ハーブミックス・生", price: "¥1,500", body: "畑摘み、収穫日発送 50g", image: "/images/organic/03-veg-summer.webp" },
  { code: "P05", en: "Herb Dressing", ja: "ハーブドレッシング", price: "¥1,800", body: "180ml、地元米油・米酢ベース", image: "/images/organic/13-product-dressing.webp" },
  { code: "P06", en: "Seasonal Roots", ja: "秋・冬の根菜セット", price: "¥3,400", body: "さつまいも・大根・人参 1.2kg", image: "/images/organic/04-veg-autumn.webp" },
];

export default function OrganicProductsPage() {
  return (
    <>
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden bg-[#3F5B36] text-[#FAF6EE]">
        <OrganicNav />
        <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 70% 60%, #d8c29d 0%, transparent 60%)" }} />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-5xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#D8C29D]">Shop</p>
            <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,7rem)] italic">
              In season today.
            </h1>
          </div>
        </div>
      </section>
      <main className="bg-[#FAF6EE] px-6 py-24 sm:px-12 lg:px-20">
        <ul className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <FadeIn key={it.code} delay={(i % 3) * 0.06}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={it.image}
                    alt={it.ja}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <p className="font-[family-name:var(--font-noto-serif-jp)] text-lg font-bold text-[#3F5B36]">{it.ja}</p>
                  <p className="text-sm font-bold text-[#C9462C]">{it.price}</p>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#2A2520]/60">{it.en}</p>
                <p className="mt-2 text-sm text-[#2A2520]/75">{it.body}</p>
                <button type="button" className="mt-4 w-full border border-[#3F5B36] py-2 text-xs uppercase tracking-[0.3em] text-[#3F5B36] transition-colors hover:bg-[#3F5B36] hover:text-[#FAF6EE]">
                  Add to cart
                </button>
              </article>
            </FadeIn>
          ))}
        </ul>
        <p className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-[#2A2520]/40">
          ※ サンプル用のモックです。実際の決済は行われません。
        </p>
      </main>
      <OrganicFooter />
    </>
  );
}
