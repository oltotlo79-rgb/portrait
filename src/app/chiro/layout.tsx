import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "ことう整体院｜横浜・青葉区の慢性腰痛・肩こり改善",
  description: "症状の原因を見極めて整える。柔道整復師15年の院長が、施術の流れを丁寧にご説明します。",
};

export const viewport: Viewport = { themeColor: "#2E5266" };

export default function ChiroLayout({ children }: { children: React.ReactNode }) {
  return <div className="chiro-root min-h-screen bg-white text-[#1F2933]">{children}</div>;
}
