import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "KIYORA Farm｜信州の有機野菜とハーブ｜オンラインショップ",
  description: "長野・東御の有機JAS認証農園。季節の野菜セットとハーブを、土から食卓へ。",
};

export const viewport: Viewport = { themeColor: "#3F5B36" };

export default function OrganicLayout({ children }: { children: React.ReactNode }) {
  return <div className="organic-root min-h-screen bg-[#FAF6EE] text-[#2A2520]">{children}</div>;
}
