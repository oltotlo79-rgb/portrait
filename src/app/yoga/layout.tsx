import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "NAGI yoga & pilates｜代々木上原のスタジオ",
  description:
    "朝6時の太陽礼拝から、夜のリストラクティブまで。少人数制、グループ8名／プライベートあり。",
};

export const viewport: Viewport = { themeColor: "#6B7F6F" };

export default function YogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="yoga-root min-h-screen bg-[#F4F0E8] text-[#2C3A2E]">
      {children}
    </div>
  );
}
