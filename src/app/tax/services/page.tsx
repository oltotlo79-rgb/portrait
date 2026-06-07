import type { Metadata } from "next";
import { TaxNav, TaxFooter } from "../_components/Chrome";
import { FadeIn } from "@/lib/animations";

export const metadata: Metadata = {
  title: "サービス一覧｜松永税理士事務所",
  description: "顧問契約、税務申告、補助金、資金調達伴走 — 中小企業向けサービス詳細。",
};

const SERVICES = [
  { code: "S01", t: "顧問契約", body: "月次の試算表確認、税務相談、年度決算まで一気通貫。クラウド会計（freee/MF）連携。", price: "月額 ¥30,000 〜" },
  { code: "S02", t: "税務申告", body: "法人税・所得税・消費税・相続税・贈与税。年末調整・法定調書まで対応。", price: "別途見積" },
  { code: "S03", t: "補助金・助成金", body: "事業再構築補助金、ものづくり補助金、IT導入補助金、小規模事業者持続化補助金。書類・面談同席。", price: "成功報酬 採択額の8%〜" },
  { code: "S04", t: "資金調達伴走", body: "事業計画書作成、銀行・VC折衝、資本政策設計。投資契約の確認も。", price: "プロジェクト見積" },
  { code: "S05", t: "経理体制構築", body: "クラウド会計の導入、業務フロー設計、経理担当者向けレクチャー。", price: "30万円〜" },
];

export default function TaxServicesPage() {
  return (
    <>
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden bg-[#0E2A47] text-white">
        <TaxNav />
        <div className="absolute left-6 top-32 right-6 h-px bg-[#B4924C] sm:left-12 sm:right-12 lg:left-20 lg:right-20" />
        <div className="absolute left-6 bottom-32 right-6 h-px bg-[#B4924C] sm:left-12 sm:right-12 lg:left-20 lg:right-20" />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-5xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#B4924C]">Services</p>
            <h1 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-[clamp(2.5rem,7vw,6rem)] font-bold">
              ご支援領域
            </h1>
          </div>
        </div>
      </section>
      <main className="bg-white px-6 py-24 sm:px-12 lg:px-20">
        <ul className="mx-auto max-w-5xl space-y-6">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.code} delay={i * 0.06}>
              <article className="grid gap-6 rounded border border-[#15233A]/15 p-8 lg:grid-cols-[auto_1fr_auto] lg:items-baseline lg:gap-10">
                <p className="text-2xl font-bold text-[#B4924C]">{s.code}</p>
                <div>
                  <h2 className="font-[family-name:var(--font-noto-serif-jp)] text-2xl font-bold text-[#0E2A47]">
                    {s.t}
                  </h2>
                  <p className="mt-3 text-sm leading-loose text-[#15233A]/75">{s.body}</p>
                </div>
                <p className="text-sm font-bold text-[#0E2A47]">{s.price}</p>
              </article>
            </FadeIn>
          ))}
        </ul>
      </main>
      <TaxFooter />
    </>
  );
}
