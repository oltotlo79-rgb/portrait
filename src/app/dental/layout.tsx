import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "白水歯科クリニック｜さいたま浦和の予防型歯科・小児矯正",
  description: "痛みの少ない予防型歯科。お子さま連れも安心の個室診療・キッズスペース。",
};

export const viewport: Viewport = { themeColor: "#5BB7B7" };

export default function DentalLayout({ children }: { children: React.ReactNode }) {
  return <div className="dental-root min-h-screen bg-white text-[#1F2933]">{children}</div>;
}
