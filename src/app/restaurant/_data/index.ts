import fs from "node:fs";
import path from "node:path";
import { normalizeImage } from "./normalize";
import { loadImageMap, toLocalImage, localizeHtml } from "./images";
import { seedCourses, seedNews, seedInfo } from "./seed";
import type {
  Course,
  NewsItem,
  ShopInfo,
  RawCourse,
  RawNews,
  RawInfo,
} from "./types";

const CONTENT_PATH = path.join(
  process.cwd(),
  "src/app/restaurant/_data/cms-content.json",
);

type CmsContent = {
  courses?: RawCourse[];
  news?: RawNews[];
  info?: RawInfo;
};

/**
 * prebuild スクリプト（scripts/sync-cms.mjs）が書き出した microCMS コンテンツを読む。
 * スクリプトはビルド毎にまっさら実行されるため、Next のビルドキャッシュに凍結されない。
 * ファイルが無い（env未設定など）場合は null → 各取得関数はシードにフォールバック。
 */
function loadContent(): CmsContent | null {
  try {
    return JSON.parse(fs.readFileSync(CONTENT_PATH, "utf-8")) as CmsContent;
  } catch {
    return null;
  }
}

export async function getCourses(): Promise<Course[]> {
  const content = loadContent();
  if (!content?.courses?.length) return seedCourses;
  const map = loadImageMap();
  return content.courses.map((c, i) => ({
    no: c.no,
    en: c.en,
    ja: c.ja,
    body: c.body,
    image: toLocalImage(
      normalizeImage(c.image),
      map,
      seedCourses[i]?.image ?? seedInfo.heroImage,
    ),
  }));
}

export async function getNews(): Promise<NewsItem[]> {
  const content = loadContent();
  if (!content?.news?.length) return seedNews;
  const map = loadImageMap();
  return content.news.map((n) => ({
    id: n.id,
    title: n.title,
    publishedAt: n.publishedAt,
    category: n.category,
    body: localizeHtml(n.body, map, seedInfo.heroImage),
  }));
}

export async function getInfo(): Promise<ShopInfo> {
  const content = loadContent();
  if (!content?.info?.shopName) return seedInfo;
  const map = loadImageMap();
  const i = content.info;
  return {
    shopName: i.shopName,
    tagline: i.tagline,
    hours: i.hours,
    closed: i.closed,
    seats: i.seats,
    tel: i.tel,
    email: i.email,
    address: i.address,
    access: i.access,
    heroImage: toLocalImage(
      normalizeImage(i.heroImage, seedInfo.heroImage),
      map,
      seedInfo.heroImage,
    ),
    logo: toLocalImage(
      normalizeImage(i.logo, seedInfo.logo),
      map,
      seedInfo.logo,
    ),
  };
}
