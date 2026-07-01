// microCMS のコンテンツ画像をビルド時に取得し public/ へ保存、url→ローカルパス対応表を出力する。
// env 未設定なら何もしない（シードデータで動作）。
import { createClient } from "microcms-js-sdk";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const KEY = process.env.MICROCMS_API_KEY;

const IMG_DIR = path.join(
  process.cwd(),
  "public",
  "images",
  "restaurant",
  "cms",
);
const MAP_FILE = path.join(
  process.cwd(),
  "src",
  "app",
  "restaurant",
  "_data",
  "cms-image-map.json",
);
const CONTENT_FILE = path.join(
  process.cwd(),
  "src",
  "app",
  "restaurant",
  "_data",
  "cms-content.json",
);

const CDN_URL_RE = /https:\/\/images\.microcms-assets\.io\/[^\s"')]+/g;

function localName(url) {
  const clean = url.split("?")[0];
  const parts = clean.split("/").filter(Boolean);
  return parts
    .slice(-2)
    .join("-")
    .replace(/[^a-zA-Z0-9._-]/g, "_");
}

async function main() {
  if (!DOMAIN || !KEY) {
    console.log("[sync-cms] microCMS env 未設定のためスキップ（シードデータを使用）");
    return;
  }

  const client = createClient({ serviceDomain: DOMAIN, apiKey: KEY });

  const [courses, info, news] = await Promise.all([
    client
      .getList({ endpoint: "courses", queries: { limit: 100, orders: "order" } })
      .then((r) => r.contents)
      .catch(() => []),
    client.getObject({ endpoint: "info" }).catch(() => ({})),
    client
      .getList({
        endpoint: "news",
        queries: { limit: 100, orders: "-publishedAt" },
      })
      .then((r) => r.contents)
      .catch(() => []),
  ]);

  const imageUrls = [];
  for (const c of courses) if (c.image?.url) imageUrls.push(c.image.url);
  if (info?.heroImage?.url) imageUrls.push(info.heroImage.url);
  if (info?.logo?.url) imageUrls.push(info.logo.url);
  for (const n of news) {
    if (typeof n.body === "string") {
      const found = n.body.match(CDN_URL_RE);
      if (found) imageUrls.push(...found);
    }
  }

  await mkdir(IMG_DIR, { recursive: true });
  const map = {};
  for (const url of imageUrls) {
    if (map[url]) continue;
    const name = localName(url);
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[sync-cms] 取得失敗 ${url}: ${res.status}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(path.join(IMG_DIR, name), buf);
    map[url] = `/images/restaurant/cms/${name}`;
  }

  await mkdir(path.dirname(MAP_FILE), { recursive: true });
  await writeFile(MAP_FILE, JSON.stringify(map, null, 2));

  // コンテンツ本体をJSONに書き出す（サイトはこのファイルを読む＝ビルド毎に最新）
  await writeFile(
    CONTENT_FILE,
    JSON.stringify({ courses, news, info }, null, 2),
  );

  console.log(
    `[sync-cms] 画像 ${Object.keys(map).length} 枚 / コンテンツ courses:${courses.length} news:${news.length} を同期しました`,
  );
}

main().catch((e) => {
  console.error("[sync-cms] エラー:", e);
  process.exit(1);
});
