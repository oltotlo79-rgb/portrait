import Link from "next/link";

export function FitnessFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] px-6 py-16 text-[#F4F4F4] sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-bebas)] text-5xl tracking-[0.15em] sm:text-7xl">
          <span className="text-[#FFE600]">IGNITE</span> 24/7
        </p>
        <div className="mt-10 grid gap-10 text-xs sm:grid-cols-3">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#FFE600]">Locations</p>
            <ul className="mt-3 space-y-1 text-white/70">
              <li>渋谷スタジオ · 渋谷駅徒歩6分</li>
              <li>池袋スタジオ · 池袋駅徒歩4分</li>
              <li>恵比寿スタジオ · 恵比寿駅徒歩3分</li>
            </ul>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#FFE600]">Hours</p>
            <p className="mt-3 text-white/70">24時間（パーソナルは事前予約制）</p>
          </div>
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#FFE600]">Contact</p>
            <p className="mt-3 text-white/70">contact@ignite-247.example<br />03-XXXX-XXXX</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.3em] text-white/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} IGNITE 24/7</span>
          <Link href="/" className="hover:text-[#FFE600]">← Portfolio</Link>
        </div>
      </div>
    </footer>
  );
}
