import Link from "next/link";
import type { ShopInfo } from "../_data/types";

export function RestaurantFooter({ info }: { info: ShopInfo }) {
  return (
    <footer className="border-t border-[#B59154]/20 bg-[#0F0F0F] px-6 py-20 text-[#EFE9DD] sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div>
            <p className="font-[family-name:var(--font-shippori-mincho)] text-3xl tracking-[0.3em] text-[#B59154]">
              黒 文 字
            </p>
            <p className="mt-6 max-w-xs font-[family-name:var(--font-noto-serif-jp)] text-xs leading-relaxed text-[#EFE9DD]/70">
              {info.tagline}
            </p>
          </div>
          <dl className="grid gap-6 text-xs text-[#EFE9DD]/80 sm:grid-cols-2 sm:gap-x-16">
            <div>
              <dt className="uppercase tracking-[0.3em] text-[#B59154]">Hours</dt>
              <dd className="mt-2">
                {info.hours}<br />
                {info.closed}
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.3em] text-[#B59154]">Address</dt>
              <dd className="mt-2">
                {info.address}<br />
                {info.access}
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.3em] text-[#B59154]">Reserve</dt>
              <dd className="mt-2">{info.tel}<br />{info.email}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.3em] text-[#B59154]">Portfolio</dt>
              <dd className="mt-2">
                <Link href="/" className="underline decoration-[#B59154]/40 underline-offset-4">
                  ← 実績一覧へ戻る
                </Link>
              </dd>
            </div>
          </dl>
        </div>
        <p className="mt-16 border-t border-[#B59154]/15 pt-8 text-[10px] uppercase tracking-[0.3em] text-[#EFE9DD]/40">
          © {new Date().getFullYear()} 割烹 黒文字 — Kagurazaka, Tokyo
        </p>
      </div>
    </footer>
  );
}
