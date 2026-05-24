export type Destination = {
  en: string;
  ja: string;
  body: string;
  image: string;
};

export const DESTINATIONS: Destination[] = [
  {
    en: "Iceland",
    ja: "アイスランド",
    body: "苔の上を走るリングロード、地熱の湯気、白夜のあわい光。",
    image: "/images/travel/04-dest-iceland.webp",
  },
  {
    en: "Georgia",
    ja: "ジョージア",
    body: "コーカサスの石造りの村、葡萄畑、骨太なワインの香り。",
    image: "/images/travel/05-dest-georgia.webp",
  },
  {
    en: "Morocco",
    ja: "モロッコ",
    body: "迷路のような旧市街と、砂丘に長く伸びるラクダの影。",
    image: "/images/travel/06-dest-morocco.webp",
  },
  {
    en: "Peru",
    ja: "ペルー",
    body: "霧に隠れたマチュピチュ、空中都市の朝。リャマの足音。",
    image: "/images/travel/07-dest-peru.webp",
  },
  {
    en: "Portugal",
    ja: "ポルトガル",
    body: "アズレージョのタイル、ファドの音色、ドウロ川を渡る橋。",
    image: "/images/travel/08-dest-portugal.webp",
  },
  {
    en: "Sri Lanka",
    ja: "スリランカ",
    body: "高地の紅茶畑、列車の窓から見える緑のグラデーション。",
    image: "/images/travel/09-dest-srilanka.webp",
  },
];
