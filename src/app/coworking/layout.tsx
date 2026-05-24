import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "AXIS Studios｜渋谷・丸の内のテック特化コワーキング",
  description:
    "スタートアップ・フリーランス・小規模チームのための、24時間アクセス可能なコワーキングスペース。",
};

export const viewport: Viewport = { themeColor: "#0A0E1A" };

export default function CoworkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="coworking-root min-h-screen bg-[#0A0E1A] text-[#F4F6FA]">
      {children}
    </div>
  );
}
