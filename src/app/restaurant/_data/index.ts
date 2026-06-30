import { getClient, hasMicroCMS } from "@/lib/microcms";
import { normalizeImage } from "./normalize";
import { loadImageMap, toLocalImage } from "./images";
import { seedCourses, seedNews, seedInfo } from "./seed";
import type {
  Course,
  NewsItem,
  ShopInfo,
  RawCourse,
  RawNews,
  RawInfo,
} from "./types";

export async function getCourses(): Promise<Course[]> {
  if (!hasMicroCMS()) return seedCourses;
  const map = loadImageMap();
  const res = await getClient().getList<RawCourse>({
    endpoint: "courses",
    queries: { limit: 100, orders: "order" },
  });
  return res.contents.map((c, i) => ({
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
  if (!hasMicroCMS()) return seedNews;
  const res = await getClient().getList<RawNews>({
    endpoint: "news",
    queries: { limit: 20, orders: "-publishedAt" },
  });
  return res.contents.map((n) => ({
    id: n.id,
    title: n.title,
    publishedAt: n.publishedAt,
    category: n.category,
    body: n.body,
  }));
}

export async function getInfo(): Promise<ShopInfo> {
  if (!hasMicroCMS()) return seedInfo;
  const map = loadImageMap();
  const i = await getClient().getObject<RawInfo>({ endpoint: "info" });
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
