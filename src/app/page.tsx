import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { sites } from "@/lib/site-config";
import { FadeIn } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { NoiseOverlay } from "@/components/shared/NoiseOverlay";
import { PortfolioHero } from "./_components/PortfolioHero";
import { IndustryAtlas } from "./_components/IndustryAtlas";

const contactSubject = encodeURIComponent("ホームページ制作のご相談");
const contactHref = `mailto:oltotlo79@gmail.com?subject=${contactSubject}`;

export default function PortfolioIndexPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#0e0e0e] text-[#f6f6f2]">
      <NoiseOverlay opacity={0.07} />
      <PortfolioHero sites={sites} />
      <IndustryAtlas sites={sites} />

      <section className="relative overflow-hidden border-t border-white/10 bg-[#12120f] px-6 py-28 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-end">
          <div>
            <SectionLabel number="03" className="opacity-70">
              Contact
            </SectionLabel>
            <h2 className="mt-8 max-w-[8em] font-[family-name:var(--font-manrope)] text-[clamp(2.25rem,4.6vw,4.6rem)] font-light leading-[1.08]">
              <span className="block whitespace-nowrap">あなたの事業に</span>
              <span className="block whitespace-nowrap">合う見せ方を</span>
              <span className="block whitespace-nowrap">相談する</span>
            </h2>
          </div>
          <FadeIn className="max-w-xl">
            <p className="text-body text-[#cfcfc8]">
              サンプルに近い方向性でも、まったく別の業種でも対応できます。
              業種・目的・希望納期・参考にしたいサンプルを添えてご相談ください。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={contactHref}
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
              >
                <Mail className="size-4" />
                メールで相談する
              </Link>
              <Link
                href="#industry-atlas"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm transition-colors hover:bg-white hover:text-black"
              >
                サンプルを見直す
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/38">
              掲載中の屋号・連絡先・数値はすべて架空のサンプルです
            </p>
          </FadeIn>
        </div>
      </section>

      <footer className="relative border-t border-white/10 px-6 py-10 text-xs text-[#8a8a82] sm:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Portrait / Web Production Portfolio.</p>
          <p>{sites.length} Industries Sample Portfolio</p>
        </div>
      </footer>
    </main>
  );
}
