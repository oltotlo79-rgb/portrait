export type CourseItem = {
  no: string;
  en: string;
  ja: string;
  body: string;
  image: string;
};

export const COURSE: CourseItem[] = [
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
