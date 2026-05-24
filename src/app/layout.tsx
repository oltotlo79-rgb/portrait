import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import { rootFontVariables } from "@/lib/fonts";
import { LenisProvider } from "@/lib/animations";
import { PortfolioBadge } from "@/components/shared/PortfolioBadge";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Webサイト制作実績｜12業種のデザインサンプル",
    template: "%s｜Portrait",
  },
  description:
    "民泊・旅行・飲食・美容・士業など12業種それぞれの世界観で制作したホームページサンプルを公開。クラウドワークス／案件のご相談はお問い合わせから。",
  metadataBase: new URL("https://portrait.pages.dev"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Portrait",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${rootFontVariables} h-full antialiased`}>
      <body className="min-h-full">
        <MotionConfig reducedMotion="user">
          <LenisProvider>{children}</LenisProvider>
          <PortfolioBadge />
        </MotionConfig>
      </body>
    </html>
  );
}
