import Link from "next/link";

export function RestaurantFooter() {
  return (
    <footer className="border-t border-[#B59154]/20 bg-[#0F0F0F] px-6 py-20 text-[#EFE9DD] sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div>
            <p className="font-[family-name:var(--font-shippori-mincho)] text-3xl tracking-[0.3em] text-[#B59154]">
              黒 文 字
            </p>
            <p className="mt-6 max-w-xs font-[family-name:var(--font-noto-serif-jp)] text-xs leading-relaxed text-[#EFE9DD]/70">
              神楽坂の路地に佇む、カウンター10席の割烹。
              月替わりのおまかせ仕立てで、季節の一献をお届けします。
            </p>
          </div>
          <dl className="grid gap-6 text-xs text-[#EFE9DD]/80 sm:grid-cols-2 sm:gap-x-16">
            <div>
              <dt className="uppercase tracking-[0.3em] text-[#B59154]">Hours</dt>
              <dd className="mt-2">
                18:00 / 20:30 二部制<br />
                日曜・第二月曜定休
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.3em] text-[#B59154]">Address</dt>
              <dd className="mt-2">
                東京都新宿区神楽坂◯-◯<br />
                神楽坂駅 徒歩4分
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.3em] text-[#B59154]">Reserve</dt>
              <dd className="mt-2">03-XXXX-XXXX<br />kuromoji@example.jp</dd>
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
