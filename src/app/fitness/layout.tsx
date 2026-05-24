import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "IGNITE 24/7｜渋谷・池袋・恵比寿のパーソナル特化24時間ジム",
  description:
    "24時間オープン、パーソナル特化。コンテスト入賞トレーナーが本気で結果にコミットします。",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default function FitnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fitness-root min-h-screen bg-[#0A0A0A] text-[#F4F4F4]">
      {children}
    </div>
  );
}
