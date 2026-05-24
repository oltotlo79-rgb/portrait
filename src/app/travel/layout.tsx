import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "HORIZON Travel｜大人のためのオーダーメイド旅行",
  description:
    "世界中の少し非日常な目的地へ。経験豊富なコンシェルジュが、あなただけの旅を3回の相談で組み立てます。",
};

export const viewport: Viewport = {
  themeColor: "#0F4C81",
};

export default function TravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="travel-root min-h-screen bg-[#F7F4EE] text-[#101820]"
      style={
        {
          "--travel-primary": "#0F4C81",
          "--travel-accent": "#F4B400",
          "--travel-bg": "#F7F4EE",
          "--travel-fg": "#101820",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
