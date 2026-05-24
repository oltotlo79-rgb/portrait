export type Program = {
  code: string;
  title: string;
  ja: string;
  body: string;
  accent: string;
  gradient: string;
};

export const PROGRAMS: Program[] = [
  {
    code: "P01",
    title: "Personal",
    ja: "パーソナル",
    body: "トレーナーと1対1。骨格・目標・生活リズムに合わせて、毎セッションをチューニング。",
    accent: "#FFE600",
    gradient: "linear-gradient(160deg, #1a1a00, #2a2a00, #FFE600)",
  },
  {
    code: "P02",
    title: "Group HIIT",
    ja: "グループ HIIT",
    body: "最大6名、45分。心拍数を上げ切る短時間集中型。火・木・土の朝晩で開催。",
    accent: "#FF2D55",
    gradient: "linear-gradient(160deg, #1a000a, #2a0015, #FF2D55)",
  },
  {
    code: "P03",
    title: "Nutrition",
    ja: "栄養指導",
    body: "登録栄養士による食事サポート。LINEで毎食フィードバック、月2回の面談。",
    accent: "#FFE600",
    gradient: "linear-gradient(160deg, #1a1a00, #0a1a1a, #FFE600)",
  },
  {
    code: "P04",
    title: "Online",
    ja: "オンライン",
    body: "出張・地方OK。週3回のZoomパーソナル＋専用アプリで進捗管理。",
    accent: "#FF2D55",
    gradient: "linear-gradient(160deg, #0a0a1a, #1a0a2a, #FF2D55)",
  },
];
