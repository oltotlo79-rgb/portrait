import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "湯守 月白｜美山の古湯、被席型の老舗旅館",
  description:
    "明治創業、信州・美山温泉の老舗旅館。仲居が一夜お付き添う「被席」型のおもてなしと、月白色の名物露天風呂。",
};

export const viewport: Viewport = { themeColor: "#1A2230" };

export default function RyokanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ryokan-root min-h-screen bg-[#0F141C] text-[#F1EAD9]">
      {children}
    </div>
  );
}
