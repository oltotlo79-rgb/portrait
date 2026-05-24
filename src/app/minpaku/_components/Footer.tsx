import Link from "next/link";

export function MinpakuFooter() {
  return (
    <footer className="border-t border-[#3F4A3C]/15 bg-[#F4EDE3] px-6 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <p className="font-[family-name:var(--font-shippori-mincho)] text-3xl tracking-[0.3em] text-[#3F4A3C]">
              やまどり庵
            </p>
            <p className="mt-6 max-w-xs font-[family-name:var(--font-noto-serif-jp)] text-xs leading-relaxed text-[#1A1A1A]/70">
              京都・西陣の路地、町家を一棟貸し。1日1組限定の、暮らすような滞在を。
            </p>
          </div>
          <dl className="grid gap-6 text-xs text-[#1A1A1A]/80 sm:grid-cols-2 sm:gap-x-12">
            <div>
              <dt className="uppercase tracking-[0.3em] text-[#C9A063]">Address</dt>
              <dd className="mt-2">京都市上京区<br />西陣エリア（詳細はご予約後）</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.3em] text-[#C9A063]">Stay</dt>
              <dd className="mt-2">1日1組（最大4名）<br />1泊 ¥68,000〜</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.3em] text-[#C9A063]">Contact</dt>
              <dd className="mt-2">yamadori@example.jp</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.3em] text-[#C9A063]">Portfolio</dt>
              <dd className="mt-2">
                <Link href="/" className="underline decoration-[#C9A063]/40 underline-offset-4">
                  ← 実績一覧
                </Link>
              </dd>
            </div>
          </dl>
        </div>
        <p className="mt-12 border-t border-[#3F4A3C]/10 pt-6 text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/40">
          © {new Date().getFullYear()} やまどり庵 — Nishijin, Kyoto
        </p>
      </div>
    </footer>
  );
}
