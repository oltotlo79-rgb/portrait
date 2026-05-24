import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "ぽけっとラボ｜3〜8歳と親のための創作・実験教室",
  description: "土曜の朝、親子でちょっと不思議な実験と工作を。色のふしぎ・季節のお菓子・絵本ワークまで。",
};

export const viewport: Viewport = { themeColor: "#FF8FA3" };

export default function KidsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="kids-root min-h-screen bg-[#FFF9F0] text-[#3D2B1F]">
      {children}
    </div>
  );
}
