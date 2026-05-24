import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "割烹 黒文字｜神楽坂のカウンター割烹",
  description:
    "東京・神楽坂、夜のみ営業のカウンター10席。月替わりのおまかせコースで季節の一献をお届けします。",
};

export const viewport: Viewport = {
  themeColor: "#0F0F0F",
};

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="restaurant-root min-h-screen bg-[#0F0F0F] text-[#EFE9DD]">
      {children}
    </div>
  );
}
