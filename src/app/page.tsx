import Link from "next/link";
import Image from "next/image";
import { sites } from "@/lib/site-config";
import { FadeIn, RevealText, Tilt3D } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { NoiseOverlay } from "@/components/shared/NoiseOverlay";
import { ArrowRight } from "lucide-react";

export default function PortfolioIndexPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0e0e0e] text-[#f6f6f2]">
      <NoiseOverlay opacity={0.07} />

      <section className="relative px-6 pt-24 pb-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="01" className="opacity-70">
            Web Production for any industry
          </SectionLabel>

          <h1 className="mt-8 h-display font-[family-name:var(--font-manrope)] font-light">
            <RevealText
              text="Web sites"
              splitBy="word"
              className="block font-light"
            />
            <RevealText
              text="for any industry."
              splitBy="word"
              className="block italic font-[family-name:var(--font-cormorant)]"
              delay={0.15}
            />
          </h1>

          <FadeIn delay={0.6} className="mt-10 max-w-xl">
            <p className="text-body text-[#cfcfc8]">
              業種ごとの世界観で、選ばれるホームページを。
              ご依頼の検討にあたって、12業種それぞれの
              デザイン傾向・動き・トーンをご確認いただけます。
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#8a8a82]">
              12 Industries · Design Reference ↓
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative px-6 pb-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="02" className="opacity-70">
            Reference
          </SectionLabel>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <h2 className="h-section font-[family-name:var(--font-manrope)] font-light">
                業種別
                <br />
                デザイン
                <br />
                リファレンス
              </h2>
            </div>
            <div className="flex items-end">
              <FadeIn>
                <p className="text-body max-w-xl text-[#cfcfc8]">
                  どの業種にどんな世界観が合うか、配色・タイポグラフィ・モーションの強度はどう変えるか
                  — ご依頼前のすり合わせ資料として、業種ごとに作り分けた12のリファレンスです。
                  サムネをクリックすると個別ページが開きます。
                </p>
                <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#8a8a82]">
                  ※ 表示中の屋号・連絡先・実績数はすべて架空のサンプルです
                </p>
              </FadeIn>
            </div>
          </div>

          <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((site, i) => (
              <li key={site.slug}>
                <FadeIn delay={i * 0.06}>
                  <Link
                    href={`/${site.slug}`}
                    className="group block rounded-lg"
                  >
                    <Tilt3D intensity={8} raise={6} glare className="rounded-lg">
                      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] transition-colors group-hover:border-white/30">
                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                          <Image
                            src={site.thumb}
                            alt={`${site.name}のサムネイル`}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                        <div className="pointer-events-none absolute left-0 right-0 top-0 flex items-center justify-between px-5 py-4 text-[10px] uppercase tracking-[0.25em]">
                          <span className="opacity-80">{site.industryEn}</span>
                          <span className="rounded-full border border-white/30 px-2 py-0.5 text-[9px]">
                            {site.status === "live" ? "LIVE" : "WIP"}
                          </span>
                        </div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                          <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                            {site.industryJa}
                          </p>
                          <h3 className="mt-1 text-xl font-medium">{site.name}</h3>
                          <p className="mt-2 line-clamp-2 text-xs text-white/70">
                            {site.catch}
                          </p>
                          <div className="mt-4 inline-flex items-center gap-2 text-xs">
                            <span>サイトを見る</span>
                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </Tilt3D>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative px-6 pb-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel
            number="03"
            className="justify-center opacity-70"
          >
            Contact
          </SectionLabel>
          <h2 className="mt-8 h-section">お仕事のご相談</h2>
          <p className="mt-6 text-body text-[#cfcfc8]">
            「自分の業種にあったHPを作りたい」というご相談、歓迎しています。
            業種・予算・希望納期をお気軽にお知らせください。
          </p>
          <Link
            href="mailto:oltotlo79@gmail.com?subject=%E3%83%9B%E3%83%BC%E3%83%A0%E3%83%9A%E3%83%BC%E3%82%B8%E5%88%B6%E4%BD%9C%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm transition-colors hover:bg-white hover:text-black"
          >
            メールでお問い合わせ
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <footer className="relative border-t border-white/10 px-6 py-10 text-xs text-[#8a8a82] sm:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Portrait — Web Production Portfolio.</p>
          <p>12 Industries Sample Portfolio</p>
        </div>
      </footer>
    </main>
  );
}
