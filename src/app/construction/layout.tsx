import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "木下工務店｜長野・松本の注文住宅・自然素材の家",
  description: "創業1948年。自社大工8名で建てる、長く住める家。施工事例・構造見学会のご案内はこちら。",
};

export const viewport: Viewport = { themeColor: "#2C2A28" };

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return <div className="construction-root min-h-screen bg-[#F2EDE5] text-[#1A1A1A]">{children}</div>;
}
