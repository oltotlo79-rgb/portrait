import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "松永税理士事務所｜スタートアップ・中小企業の経営パートナー",
  description: "四ツ谷の税理士事務所。顧問・税務申告・補助金支援を伴走型でサポート。",
};

export const viewport: Viewport = { themeColor: "#0E2A47" };

export default function TaxLayout({ children }: { children: React.ReactNode }) {
  return <div className="tax-root min-h-screen bg-white text-[#15233A]">{children}</div>;
}
