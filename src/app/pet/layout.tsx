import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "もこもこ Pet Salon｜川崎の完全個別対応トリミングサロン",
  description: "怖がりな子・シニア犬・初めての子犬も安心。1頭ずつ個別ケアのトリミングサロン。",
};

export const viewport: Viewport = { themeColor: "#A37864" };

export default function PetLayout({ children }: { children: React.ReactNode }) {
  return <div className="pet-root min-h-screen bg-[#FFF7EE] text-[#3B2A1C]">{children}</div>;
}
