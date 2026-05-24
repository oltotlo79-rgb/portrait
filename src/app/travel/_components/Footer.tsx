import Link from "next/link";

export function TravelFooter() {
  return (
    <footer className="border-t border-[#101820]/10 bg-[#F7F4EE] px-6 py-16 text-sm sm:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <p className="font-[family-name:var(--font-manrope)] text-2xl font-bold tracking-[0.2em] text-[#0F4C81]">
              HORIZON
            </p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-[#101820]/70">
              大人のためのオーダーメイド旅行代理店。世界中の少し非日常な目的地へお連れします。
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-xs uppercase tracking-[0.25em]">
            <li>
              <Link href="/travel/destinations" className="hover:opacity-60">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/travel/contact" className="hover:opacity-60">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:opacity-60">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-[#101820]/10 pt-8 text-[10px] uppercase tracking-[0.25em] text-[#101820]/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} HORIZON Travel</span>
          <span>Tokyo · Established 2008</span>
        </div>
      </div>
    </footer>
  );
}
