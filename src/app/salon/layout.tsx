import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "LUNA hair & atelier｜表参道の完全予約制ヘアサロン",
  description: "デザイナー1名×お客様1名の貸切サロン。鏡の前の時間を、ご褒美に。",
};

export const viewport: Viewport = { themeColor: "#E8DCD0" };

export default function SalonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="salon-root min-h-screen bg-[#E8DCD0] text-[#2E2A26]">
      {children}
    </div>
  );
}
