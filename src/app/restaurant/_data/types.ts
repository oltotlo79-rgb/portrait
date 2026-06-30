// microCMS 画像フィールドの生形状
export type MicroCMSImage = { url: string; width?: number; height?: number };

// ---- 正規化済み（コンポーネントが使う）型 ----
export type Course = {
  no: string; // 表示用の漢数字（例: 一）
  en: string;
  ja: string;
  body: string;
  image: string; // 正規化済みURL
};

export type NewsItem = {
  id: string;
  title: string;
  publishedAt: string; // ISO文字列
  category: string;
  body: string; // リッチエディタHTML
};

export type ShopInfo = {
  shopName: string;
  tagline: string;
  hours: string;
  closed: string;
  seats: string;
  tel: string;
  email: string;
  address: string;
  access: string;
  heroImage: string; // 正規化済みURL
  logo: string; // 正規化済みURL
};

// ---- microCMS 生レスポンス型 ----
export type RawCourse = {
  order: number;
  no: string;
  en: string;
  ja: string;
  body: string;
  image: MicroCMSImage;
};

export type RawNews = {
  id: string;
  title: string;
  publishedAt: string;
  category: string;
  body: string;
};

export type RawInfo = {
  shopName: string;
  tagline: string;
  hours: string;
  closed: string;
  seats: string;
  tel: string;
  email: string;
  address: string;
  access: string;
  heroImage: MicroCMSImage;
  logo: MicroCMSImage;
};
