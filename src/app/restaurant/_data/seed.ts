import type { Course, NewsItem, ShopInfo } from "./types";

export const seedCourses: Course[] = [
  {
    no: "一",
    en: "Hassun",
    ja: "八寸",
    body: "季節の小品五種、銀杏と菊の和え物、鯛の昆布〆を中央に。",
    image: "/images/restaurant/03-dish-hassun.webp",
  },
  {
    no: "二",
    en: "Wanmono",
    ja: "椀物",
    body: "蕪と鴨のすり流し。柚子の皮を香らせて、湯気のうちに。",
    image: "/images/restaurant/04-dish-wanmono.webp",
  },
  {
    no: "三",
    en: "Mukouzuke",
    ja: "向付",
    body: "本日の鮮魚、塩昆布じめ。冷酒とともに。",
    image: "/images/restaurant/05-dish-mukouzuke.webp",
  },
  {
    no: "四",
    en: "Yakimono",
    ja: "焼物",
    body: "若狭ぐじ、皮の照り。山椒塩を添えて。",
    image: "/images/restaurant/06-dish-yakimono.webp",
  },
  {
    no: "五",
    en: "Shime",
    ja: "〆",
    body: "土鍋ごはん。香の物、止め椀、季節の果実。",
    image: "/images/restaurant/07-dish-shime.webp",
  },
];

export const seedNews: NewsItem[] = [
  {
    id: "seed-1",
    title: "六月の献立を更新しました",
    publishedAt: "2026-06-01T00:00:00.000Z",
    category: "お品書き",
    body: "<p>水無月の献立をご用意しました。鮎の塩焼き、賀茂茄子の田楽など、初夏の一献をお楽しみください。</p>",
  },
  {
    id: "seed-2",
    title: "夏季の営業時間について",
    publishedAt: "2026-05-20T00:00:00.000Z",
    category: "お知らせ",
    body: "<p>八月は二部制の入店時刻を変更いたします。詳しくはお問い合わせください。</p>",
  },
  {
    id: "seed-3",
    title: "貸切のご予約を承ります",
    publishedAt: "2026-05-02T00:00:00.000Z",
    category: "ご案内",
    body: "<p>カウンター全席の貸切も承っております。記念日のご利用などお気軽にご相談ください。</p>",
  },
];

export const seedInfo: ShopInfo = {
  shopName: "黒文字",
  tagline:
    "神楽坂の路地に佇む、カウンター10席の割烹。月替わりのおまかせ仕立てで、季節の一献をお届けします。",
  hours: "18:00 / 20:30 二部制",
  closed: "日曜・第二月曜定休",
  seats: "カウンター10席",
  tel: "03-XXXX-XXXX",
  email: "kuromoji@example.jp",
  address: "東京都新宿区神楽坂◯-◯",
  access: "神楽坂駅 徒歩4分",
  heroImage: "/images/restaurant/01-hero-noren-night.webp",
  logo: "/images/restaurant/01-hero-noren-night.webp",
};
