import {
  Manrope,
  Noto_Sans_JP,
  Noto_Serif_JP,
  Shippori_Mincho,
  Cormorant_Garamond,
  Bebas_Neue,
  M_PLUS_Rounded_1c,
  Zen_Maru_Gothic,
  Zen_Kaku_Gothic_New,
  Anton,
  Inter,
} from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  display: "swap",
  weight: ["400", "700", "900"],
});

export const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
  display: "swap",
  weight: ["400", "500", "700", "800"],
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  weight: ["400"],
});

export const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-mplus-rounded",
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  variable: "--font-zen-maru",
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  variable: "--font-zen-kaku",
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: ["400"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const rootFontVariables = [
  manrope.variable,
  notoSansJp.variable,
  notoSerifJp.variable,
  shipporiMincho.variable,
  cormorant.variable,
  bebasNeue.variable,
  mPlusRounded.variable,
  zenMaruGothic.variable,
  zenKakuGothicNew.variable,
  anton.variable,
  inter.variable,
].join(" ");
