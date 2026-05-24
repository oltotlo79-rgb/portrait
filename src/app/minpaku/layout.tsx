import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "やまどり庵｜京都西陣の1日1組町家ステイ",
  description:
    "西陣の路地に佇む町家を一棟貸し。静かに、暮らすように京都を過ごす1日1組限定の宿。",
};

export const viewport: Viewport = { themeColor: "#3F4A3C" };

export default function MinpakuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="minpaku-root min-h-screen bg-[#F4EDE3] text-[#1A1A1A]">
      {children}
    </div>
  );
}
