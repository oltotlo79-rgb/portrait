import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "麦と灯｜街の小さなブーランジェリー",
  description:
    "朝5時に火を入れ、6時から焼き始める。武蔵小山の小さなブーランジェリー。粉と水と塩、ただそれだけの時間。",
};

export const viewport: Viewport = { themeColor: "#6B4423" };

export default function BakeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bakery-root min-h-screen bg-[#FBF6ED] text-[#3A2A18]">
      {children}
    </div>
  );
}
