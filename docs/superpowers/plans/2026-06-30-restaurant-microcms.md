# 割烹 黒文字 × microCMS 連携 実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 飲食1業種（割烹 黒文字）のコース料理・お知らせ・店舗情報・主要画像を microCMS から取得し、お客様が管理画面でテキストも画像も差し替えられる状態にする。静的書き出しは維持。

**Architecture:** `output: 'export'` を維持し、ビルド時に microCMS API からコンテンツを取得して静的HTMLに焼き込む（SSG）。環境変数が無ければシードJSONにフォールバックしビルドが壊れない。コンテンツ編集は microCMS Webhook → Cloudflare Deploy Hook で自動再ビルド。

**Tech Stack:** Next.js 16 (App Router) / TypeScript strict / microcms-js-sdk / Vitest（データ層の単体テスト）

設計の元: `docs/superpowers/specs/2026-06-30-restaurant-microcms-design.md`

---

## ファイル構成

新規作成:
- `src/lib/microcms.ts` — microCMS クライアント生成 + 環境変数ガード `hasMicroCMS()`
- `src/app/restaurant/_data/types.ts` — 正規化済み型（`Course` / `NewsItem` / `ShopInfo`）と microCMS 生レスポンス型
- `src/app/restaurant/_data/normalize.ts` — 画像URL正規化 `normalizeImage()`
- `src/app/restaurant/_data/normalize.test.ts` — 正規化の単体テスト
- `src/app/restaurant/_data/seed.ts` — シードデータ（courses/news/info）
- `src/app/restaurant/_data/index.ts` — `getCourses()` / `getNews()` / `getInfo()`（フォールバック付き）
- `src/app/restaurant/_data/index.test.ts` — フォールバックの単体テスト
- `src/app/restaurant/_components/News.tsx` — お知らせセクション
- `vitest.config.ts` — テスト設定（`@` エイリアス）
- `.env.example` — 環境変数の見本
- `docs/microcms-setup.md` — microCMSスキーマ/Cloudflare環境変数/Webhook手順

修正:
- `next.config.ts` — `images.remotePatterns` に microCMS CDN を追加
- `package.json` — 依存・テストスクリプト追加
- `src/app/restaurant/_components/Menu.tsx` — `courses` を props で受け取る
- `src/app/restaurant/_components/Hero.tsx` — `info` を props で受け取る
- `src/app/restaurant/_components/Footer.tsx` — `info` を props で受け取る
- `src/app/restaurant/page.tsx` — async化しビルド時にデータ取得して props を渡す

削除:
- `src/app/restaurant/_components/menu-data.ts` — `seed.ts` に統合

---

## Task 1: 依存・設定・環境変数の足場

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Modify: `next.config.ts`
- Create: `.env.example`

- [ ] **Step 1: 依存をインストール**

Run:
```bash
pnpm add microcms-js-sdk
pnpm add -D vitest
```
Expected: `package.json` の dependencies に `microcms-js-sdk`、devDependencies に `vitest` が追加される。

- [ ] **Step 2: test スクリプトを追加**

`package.json` の `scripts` に追加:
```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 3: Vitest 設定を作成**

Create `vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "node",
  },
});
```

- [ ] **Step 4: next.config.ts に microCMS CDN ドメインを許可**

`next.config.ts` を以下に変更（`images` ブロックを差し替え）:
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.microcms-assets.io" },
    ],
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
```

- [ ] **Step 5: .env.example を作成**

Create `.env.example`:
```bash
# microCMS（割烹 黒文字サイトのコンテンツ取得用）
# 未設定でもビルドは成功し、シードデータで表示されます。
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```
※ `.env*` は既に `.gitignore` 済み。実キーはコミットしない。

- [ ] **Step 6: 動作確認（型エラーが無いこと）**

Run: `pnpm test`
Expected: テストファイルがまだ無いため "No test files found" 等で正常終了（exit 0 または "no tests")。エラーが出ないこと。

- [ ] **Step 7: Commit**

```bash
git add package.json pnpm-lock.yaml vitest.config.ts next.config.ts .env.example
git commit -m "chore: add microcms-js-sdk, vitest, and microCMS image domain"
```

---

## Task 2: ドメイン型の定義

**Files:**
- Create: `src/app/restaurant/_data/types.ts`

- [ ] **Step 1: 型を定義**

Create `src/app/restaurant/_data/types.ts`:
```ts
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
```

- [ ] **Step 2: 型チェック**

Run: `pnpm exec tsc --noEmit`
Expected: エラーなし（新規型のみ。未使用は問題なし）。

- [ ] **Step 3: Commit**

```bash
git add src/app/restaurant/_data/types.ts
git commit -m "feat: add restaurant CMS domain types"
```

---

## Task 3: 画像URL正規化（TDD）

**Files:**
- Create: `src/app/restaurant/_data/normalize.ts`
- Test: `src/app/restaurant/_data/normalize.test.ts`

- [ ] **Step 1: 失敗するテストを書く**

Create `src/app/restaurant/_data/normalize.test.ts`:
```ts
import { describe, it, expect } from "vitest";
import { normalizeImage } from "./normalize";

describe("normalizeImage", () => {
  it("文字列パスはそのまま返す", () => {
    expect(normalizeImage("/images/restaurant/x.webp")).toBe(
      "/images/restaurant/x.webp",
    );
  });

  it("microCMS画像オブジェクトからurlを取り出す", () => {
    expect(
      normalizeImage({
        url: "https://images.microcms-assets.io/x.png",
        width: 1,
        height: 1,
      }),
    ).toBe("https://images.microcms-assets.io/x.png");
  });

  it("null/undefinedはフォールバックを返す", () => {
    expect(normalizeImage(null, "/fallback.webp")).toBe("/fallback.webp");
    expect(normalizeImage(undefined)).toBe("");
  });
});
```

- [ ] **Step 2: 失敗を確認**

Run: `pnpm exec vitest run src/app/restaurant/_data/normalize.test.ts`
Expected: FAIL（`normalizeImage` が存在しない）。

- [ ] **Step 3: 実装する**

Create `src/app/restaurant/_data/normalize.ts`:
```ts
import type { MicroCMSImage } from "./types";

export function normalizeImage(
  input: string | MicroCMSImage | null | undefined,
  fallback = "",
): string {
  if (!input) return fallback;
  if (typeof input === "string") return input;
  return input.url ?? fallback;
}
```

- [ ] **Step 4: テスト成功を確認**

Run: `pnpm exec vitest run src/app/restaurant/_data/normalize.test.ts`
Expected: PASS（3件）。

- [ ] **Step 5: Commit**

```bash
git add src/app/restaurant/_data/normalize.ts src/app/restaurant/_data/normalize.test.ts
git commit -m "feat: add microCMS image URL normalization"
```

---

## Task 4: シードデータ

**Files:**
- Create: `src/app/restaurant/_data/seed.ts`

既存 `menu-data.ts` の COURSE をシードへ移植し、news/info の初期値を追加する。

- [ ] **Step 1: seed.ts を作成**

Create `src/app/restaurant/_data/seed.ts`:
```ts
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
```

- [ ] **Step 2: 型チェック**

Run: `pnpm exec tsc --noEmit`
Expected: エラーなし。

- [ ] **Step 3: Commit**

```bash
git add src/app/restaurant/_data/seed.ts
git commit -m "feat: add restaurant CMS seed data"
```

---

## Task 5: microCMS クライアントとガード

**Files:**
- Create: `src/lib/microcms.ts`

- [ ] **Step 1: クライアントを実装**

Create `src/lib/microcms.ts`:
```ts
import { createClient } from "microcms-js-sdk";

/** 環境変数が両方そろっていれば true */
export function hasMicroCMS(): boolean {
  return Boolean(
    process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY,
  );
}

/** microCMS クライアント。hasMicroCMS() が true のときだけ呼ぶこと。 */
export function getClient() {
  return createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
    apiKey: process.env.MICROCMS_API_KEY as string,
  });
}
```

- [ ] **Step 2: 型チェック**

Run: `pnpm exec tsc --noEmit`
Expected: エラーなし。

- [ ] **Step 3: Commit**

```bash
git add src/lib/microcms.ts
git commit -m "feat: add microCMS client factory and env guard"
```

---

## Task 6: データ取得関数とフォールバック（TDD）

**Files:**
- Create: `src/app/restaurant/_data/index.ts`
- Test: `src/app/restaurant/_data/index.test.ts`

- [ ] **Step 1: 失敗するテストを書く**

Create `src/app/restaurant/_data/index.test.ts`:
```ts
import { describe, it, expect, beforeEach } from "vitest";
import { getCourses, getNews, getInfo } from "./index";
import { seedCourses, seedNews, seedInfo } from "./seed";

describe("データ取得フォールバック（microCMS環境変数なし）", () => {
  beforeEach(() => {
    delete process.env.MICROCMS_SERVICE_DOMAIN;
    delete process.env.MICROCMS_API_KEY;
  });

  it("envが無ければ courses はシードを返す", async () => {
    expect(await getCourses()).toEqual(seedCourses);
  });

  it("envが無ければ news はシードを返す", async () => {
    expect(await getNews()).toEqual(seedNews);
  });

  it("envが無ければ info はシードを返す", async () => {
    expect(await getInfo()).toEqual(seedInfo);
  });
});
```

- [ ] **Step 2: 失敗を確認**

Run: `pnpm exec vitest run src/app/restaurant/_data/index.test.ts`
Expected: FAIL（`./index` が存在しない）。

- [ ] **Step 3: 実装する**

Create `src/app/restaurant/_data/index.ts`:
```ts
import { getClient, hasMicroCMS } from "@/lib/microcms";
import { normalizeImage } from "./normalize";
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
  const res = await getClient().getList<RawCourse>({
    endpoint: "courses",
    queries: { limit: 100, orders: "order" },
  });
  return res.contents.map((c) => ({
    no: c.no,
    en: c.en,
    ja: c.ja,
    body: c.body,
    image: normalizeImage(c.image),
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
    heroImage: normalizeImage(i.heroImage, seedInfo.heroImage),
    logo: normalizeImage(i.logo, seedInfo.logo),
  };
}
```

- [ ] **Step 4: テスト成功を確認**

Run: `pnpm exec vitest run src/app/restaurant/_data/index.test.ts`
Expected: PASS（3件）。

- [ ] **Step 5: Commit**

```bash
git add src/app/restaurant/_data/index.ts src/app/restaurant/_data/index.test.ts
git commit -m "feat: add restaurant CMS data access with seed fallback"
```

---

## Task 6b: ビルド時画像ローカル化（microCMS 20GB転送量対策）

**背景:** microCMS Hobby は月20GB転送で超過するとAPI停止。訪問者に microCMS CDN の画像URLを直リンクさせず、ビルド時に1回だけ画像を取得して `public/` に保存→Cloudflareから配信する。詳細は spec §2.1。

**Files:**
- Create: `scripts/sync-cms.mjs`
- Create: `src/app/restaurant/_data/images.ts`
- Test: `src/app/restaurant/_data/images.test.ts`
- Modify: `src/app/restaurant/_data/index.ts`
- Modify: `package.json`（build スクリプト）
- Modify: `.gitignore`

- [ ] **Step 1: 画像変換ユーティリティの失敗テストを書く（TDD）**

Create `src/app/restaurant/_data/images.test.ts`:
```ts
import { describe, it, expect } from "vitest";
import { toLocalImage } from "./images";

const MAP = {
  "https://images.microcms-assets.io/assets/x/y/dish.webp":
    "/images/restaurant/cms/y-dish.webp",
};

describe("toLocalImage", () => {
  it("対応表にあればローカルパスを返す", () => {
    expect(
      toLocalImage(
        "https://images.microcms-assets.io/assets/x/y/dish.webp",
        MAP,
        "/fallback.webp",
      ),
    ).toBe("/images/restaurant/cms/y-dish.webp");
  });

  it("対応表に無いmicroCMS直URLは絶対に返さずfallback", () => {
    expect(
      toLocalImage(
        "https://images.microcms-assets.io/assets/x/z/other.webp",
        MAP,
        "/fallback.webp",
      ),
    ).toBe("/fallback.webp");
  });

  it("シードのローカルパスはそのまま", () => {
    expect(
      toLocalImage("/images/restaurant/03-dish-hassun.webp", MAP, "/fallback.webp"),
    ).toBe("/images/restaurant/03-dish-hassun.webp");
  });

  it("空文字はfallback", () => {
    expect(toLocalImage("", MAP, "/fallback.webp")).toBe("/fallback.webp");
  });
});
```

- [ ] **Step 2: 失敗を確認**

Run: `pnpm exec vitest run src/app/restaurant/_data/images.test.ts`
Expected: FAIL（`toLocalImage` 未定義）。

- [ ] **Step 3: images.ts を実装**

Create `src/app/restaurant/_data/images.ts`:
```ts
import fs from "node:fs";
import path from "node:path";

const MAP_PATH = path.join(
  process.cwd(),
  "src/app/restaurant/_data/cms-image-map.json",
);

const MICROCMS_HOST = "https://images.microcms-assets.io/";

/** prebuild スクリプトが出力した url→ローカルパス対応表を読む。無ければ空。 */
export function loadImageMap(): Record<string, string> {
  try {
    return JSON.parse(fs.readFileSync(MAP_PATH, "utf-8")) as Record<
      string,
      string
    >;
  } catch {
    return {};
  }
}

/**
 * 画像URLを「訪問者に配信して良いパス」へ変換する。
 * - 対応表にあれば Cloudflare 配信のローカルパス
 * - microCMS CDN の直URLは絶対に返さない（転送量対策）→ fallback
 * - それ以外（シードのローカルパス等）はそのまま
 */
export function toLocalImage(
  url: string,
  map: Record<string, string>,
  fallback: string,
): string {
  if (!url) return fallback;
  if (map[url]) return map[url];
  if (url.startsWith(MICROCMS_HOST)) return fallback;
  return url;
}
```

- [ ] **Step 4: テスト成功を確認**

Run: `pnpm exec vitest run src/app/restaurant/_data/images.test.ts`
Expected: PASS（4件）。

- [ ] **Step 5: index.ts を画像ローカル化に対応**

`src/app/restaurant/_data/index.ts` を以下に全置換（getCourses/getInfo の image を `toLocalImage` 経由に。news は画像フィールド無しのため変更なし）:
```ts
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
```

- [ ] **Step 6: prebuild 同期スクリプトを作成**

Create `scripts/sync-cms.mjs`:
```js
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

  const [courses, info] = await Promise.all([
    client
      .getList({ endpoint: "courses", queries: { limit: 100 } })
      .then((r) => r.contents)
      .catch(() => []),
    client.getObject({ endpoint: "info" }).catch(() => ({})),
  ]);

  const imageUrls = [];
  for (const c of courses) if (c.image?.url) imageUrls.push(c.image.url);
  if (info?.heroImage?.url) imageUrls.push(info.heroImage.url);
  if (info?.logo?.url) imageUrls.push(info.logo.url);

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
  console.log(`[sync-cms] ${Object.keys(map).length} 枚の画像をローカル化しました`);
}

main().catch((e) => {
  console.error("[sync-cms] エラー:", e);
  process.exit(1);
});
```

- [ ] **Step 7: build スクリプトに同期を組み込む**

`package.json` の `scripts.build` を変更:
```json
"build": "node scripts/sync-cms.mjs && next build"
```

- [ ] **Step 8: 生成物を .gitignore に追加**

`.gitignore` の末尾に追記:
```
# microCMS ビルド時生成物
/public/images/restaurant/cms/
/src/app/restaurant/_data/cms-image-map.json
```

- [ ] **Step 9: 全テスト＋env無しビルド検証**

Run: `pnpm test`
Expected: PASS（normalize 3 + index 3 + images 4 = 10件）。

Run: `pnpm exec node scripts/sync-cms.mjs`
Expected: env未設定なのでスキップのログのみ、exit 0。

Run: `pnpm build`
Expected: 成功（同期スキップ→next build成功、`out/restaurant/index.html` 生成。env無しなのでシード表示）。

- [ ] **Step 10: Commit**

```bash
git add scripts/sync-cms.mjs src/app/restaurant/_data/images.ts src/app/restaurant/_data/images.test.ts src/app/restaurant/_data/index.ts package.json .gitignore
git commit -m "feat: localize microCMS images at build time (20GB transfer safeguard)"
```

---

## Task 7: Menu.tsx を props 化

**Files:**
- Modify: `src/app/restaurant/_components/Menu.tsx`
- Delete: `src/app/restaurant/_components/menu-data.ts`

- [ ] **Step 1: import を差し替え**

`Menu.tsx` の7行目を変更:
```ts
// 変更前
import { COURSE } from "./menu-data";
// 変更後
import type { Course } from "../_data/types";
```

- [ ] **Step 2: 関数シグネチャを props 受け取りに変更**

`export function RestaurantMenu() {` を以下に変更:
```ts
export function RestaurantMenu({ courses }: { courses: Course[] }) {
```

- [ ] **Step 3: 本文中の `COURSE` を `courses` に置換**

`Menu.tsx` 内の残り全ての `COURSE` を `courses` に置換（`COURSE.length` ×3、`COURSE.map` ×3）。

- [ ] **Step 4: ハードコードの「/ 05」を件数連動に**

`{String(i + 1).padStart(2, "0")} / 05` を以下に変更:
```tsx
{String(i + 1).padStart(2, "0")} / {String(courses.length).padStart(2, "0")}
```

- [ ] **Step 5: 旧データファイルを削除**

```bash
git rm src/app/restaurant/_components/menu-data.ts
```

- [ ] **Step 6: 型チェック**

Run: `pnpm exec tsc --noEmit`
Expected: `Menu.tsx` 自体はOK。`page.tsx` で `RestaurantMenu` に props 未指定のエラーが出る（Task 11で解消）。それ以外のエラーが無いこと。

- [ ] **Step 7: Commit**

```bash
git add src/app/restaurant/_components/Menu.tsx
git commit -m "refactor: RestaurantMenu receives courses via props"
```

---

## Task 8: お知らせセクション（News.tsx）

**Files:**
- Create: `src/app/restaurant/_components/News.tsx`

- [ ] **Step 1: News コンポーネントを作成**

Create `src/app/restaurant/_components/News.tsx`:
```tsx
import { SectionLabel } from "@/components/shared/SectionLabel";
import type { NewsItem } from "../_data/types";

function formatDate(iso: string): string {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export function RestaurantNews({ news }: { news: NewsItem[] }) {
  if (news.length === 0) return null;

  return (
    <section
      id="news"
      className="bg-[#0F0F0F] px-6 py-24 text-[#EFE9DD] sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        <SectionLabel number="六" className="text-[#B59154]">
          お知らせ
        </SectionLabel>
        <h2 className="mt-4 font-[family-name:var(--font-shippori-mincho)] text-3xl tracking-[0.1em] sm:text-4xl">
          黒文字より
        </h2>

        <ul className="mt-12 divide-y divide-[#EFE9DD]/12 border-t border-[#EFE9DD]/12">
          {news.map((item) => (
            <li key={item.id} className="py-8">
              <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#B59154]">
                <time>{formatDate(item.publishedAt)}</time>
                <span className="border border-[#B59154]/40 px-2 py-1">
                  {item.category}
                </span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-shippori-mincho)] text-xl tracking-[0.08em]">
                {item.title}
              </h3>
              <div
                className="mt-3 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#EFE9DD]/75 [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 型チェック**

Run: `pnpm exec tsc --noEmit`
Expected: News.tsx 由来の新規エラーは無いこと（page.tsx の既存エラーは残る）。

- [ ] **Step 3: Commit**

```bash
git add src/app/restaurant/_components/News.tsx
git commit -m "feat: add restaurant news section"
```

---

## Task 9: Hero.tsx を info 化

**Files:**
- Modify: `src/app/restaurant/_components/Hero.tsx`

- [ ] **Step 1: import に型を追加**

`Hero.tsx` の import 群（`EASE_OUT_EXPO` の行の下）に追加:
```ts
import type { ShopInfo } from "../_data/types";
```

- [ ] **Step 2: 関数シグネチャを props 化**

`export function RestaurantHero() {` を以下に変更:
```ts
export function RestaurantHero({ info }: { info: ShopInfo }) {
```

- [ ] **Step 3: ヒーロー画像を info から取得**

背景画像の `src` を変更:
```tsx
// 変更前
src="/images/restaurant/01-hero-noren-night.webp"
// 変更後
src={info.heroImage}
```

- [ ] **Step 4: 営業情報テキストを info から取得**

「Tonight's counter」の説明文を変更:
```tsx
// 変更前
18:00 / 20:30 の二部制。八席のみ、季節のおまかせ。
// 変更後
{info.hours}。{info.seats}、季節のおまかせ。
```

- [ ] **Step 5: 型チェック**

Run: `pnpm exec tsc --noEmit`
Expected: Hero.tsx 由来の新規エラーは無いこと（page.tsx の既存エラーは残る）。

- [ ] **Step 6: Commit**

```bash
git add src/app/restaurant/_components/Hero.tsx
git commit -m "refactor: RestaurantHero receives shop info via props"
```

---

## Task 10: Footer.tsx を info 化

**Files:**
- Modify: `src/app/restaurant/_components/Footer.tsx`

- [ ] **Step 1: import に型を追加**

`Footer.tsx` の1行目（`import Link from "next/link";`）の下に追加:
```ts
import type { ShopInfo } from "../_data/types";
```

- [ ] **Step 2: 関数シグネチャを props 化**

`export function RestaurantFooter() {` を以下に変更:
```ts
export function RestaurantFooter({ info }: { info: ShopInfo }) {
```

- [ ] **Step 3: ハードコード値を info に差し替え**

該当箇所を順に変更:

tagline（紹介文）:
```tsx
// 変更前
神楽坂の路地に佇む、カウンター10席の割烹。
月替わりのおまかせ仕立てで、季節の一献をお届けします。
// 変更後
{info.tagline}
```

Hours の dd:
```tsx
// 変更前
18:00 / 20:30 二部制<br />
日曜・第二月曜定休
// 変更後
{info.hours}<br />
{info.closed}
```

Address の dd:
```tsx
// 変更前
東京都新宿区神楽坂◯-◯<br />
神楽坂駅 徒歩4分
// 変更後
{info.address}<br />
{info.access}
```

Reserve の dd:
```tsx
// 変更前
03-XXXX-XXXX<br />kuromoji@example.jp
// 変更後
{info.tel}<br />{info.email}
```

- [ ] **Step 4: 型チェック**

Run: `pnpm exec tsc --noEmit`
Expected: Footer.tsx 由来の新規エラーは無いこと（page.tsx の既存エラーは残る）。

- [ ] **Step 5: Commit**

```bash
git add src/app/restaurant/_components/Footer.tsx
git commit -m "refactor: RestaurantFooter receives shop info via props"
```

---

## Task 11: page.tsx でビルド時取得・配線・ビルド検証

**Files:**
- Modify: `src/app/restaurant/page.tsx`

- [ ] **Step 1: page.tsx を async 化しデータを取得・配線**

`src/app/restaurant/page.tsx` を全置換:
```tsx
import { RestaurantNav } from "./_components/Nav";
import { RestaurantFooter } from "./_components/Footer";
import { RestaurantHero } from "./_components/Hero";
import { RestaurantIntro } from "./_components/Intro";
import { RestaurantMenu } from "./_components/Menu";
import { RestaurantChef } from "./_components/Chef";
import { RestaurantSpace } from "./_components/Space";
import { RestaurantNews } from "./_components/News";
import { RestaurantCTA } from "./_components/CTA";
import { getCourses, getInfo, getNews } from "./_data";

export default async function RestaurantTopPage() {
  const [courses, info, news] = await Promise.all([
    getCourses(),
    getInfo(),
    getNews(),
  ]);

  return (
    <>
      <RestaurantNav />
      <RestaurantHero info={info} />
      <RestaurantIntro />
      <RestaurantMenu courses={courses} />
      <RestaurantChef />
      <RestaurantSpace />
      <RestaurantNews news={news} />
      <RestaurantCTA />
      <RestaurantFooter info={info} />
    </>
  );
}
```

- [ ] **Step 2: 全テストを実行**

Run: `pnpm test`
Expected: PASS（normalize 3件 + index 3件）。

- [ ] **Step 3: 型チェック**

Run: `pnpm exec tsc --noEmit`
Expected: エラーなし（props配線が解消）。

- [ ] **Step 4: 環境変数なしでビルド検証（フォールバック確認）**

Run: `pnpm build`
Expected: 成功。`out/restaurant/index.html` が生成される。

- [ ] **Step 5: ビルド出力にシード内容が反映されているか確認**

Run:
```bash
grep -c "黒文字より" out/restaurant/index.html
grep -c "六月の献立" out/restaurant/index.html
```
Expected: それぞれ 1 以上（お知らせセクション・シードニュースが出力されている）。

- [ ] **Step 6: Commit**

```bash
git add src/app/restaurant/page.tsx
git commit -m "feat: fetch restaurant content at build time with microCMS fallback"
```

---

## Task 12: セットアップ手順ドキュメント

**Files:**
- Create: `docs/microcms-setup.md`

コードは完成。microCMS側の手動セットアップ（スキーマ作成・環境変数・Webhook）を手順化する。

- [ ] **Step 1: 手順書を作成**

Create `docs/microcms-setup.md`:
```markdown
# microCMS セットアップ手順（割烹 黒文字）

コードは環境変数が無ければシードデータで動く。実データに切り替える手順。

## 1. microCMS でサービス作成
1. https://microcms.io でアカウント作成・サービス作成（サービスドメインを控える）
2. APIキー（GET権限）を控える

## 2. API スキーマを作成

### courses（リスト形式 / API ID: `courses`）
| フィールドID | 種類 |
|---|---|
| order | 数値 |
| no | テキスト |
| en | テキスト |
| ja | テキスト |
| body | テキストエリア |
| image | 画像 |

### news（リスト形式 / API ID: `news`）
| フィールドID | 種類 |
|---|---|
| title | テキスト |
| category | テキスト（またはセレクト） |
| body | リッチエディタ |
※ publishedAt は microCMS 標準の公開日時を使用。

### info（オブジェクト形式 / API ID: `info`）
| フィールドID | 種類 |
|---|---|
| shopName / tagline / hours / closed / seats / tel / email / address / access | テキスト/テキストエリア |
| heroImage / logo | 画像 |

初期値は `src/app/restaurant/_data/seed.ts` の内容を投入する。

## 3. 環境変数を設定
- ローカル: `.env.local` に `MICROCMS_SERVICE_DOMAIN` と `MICROCMS_API_KEY`
- Cloudflare: Workers Builds の環境変数に同じ2つを設定

## 3.5. ビルドコマンドと転送量対策（重要）

microCMS Hobby は月20GB転送で超過するとAPIが停止する。本サイトは画像をビルド時に1回だけ取得して `public/images/restaurant/cms/` に保存し、訪問者へは Cloudflare から配信する（microCMS CDN を直リンクしない）。この処理は build スクリプト `node scripts/sync-cms.mjs && next build` の前段で走る。

- **Cloudflare Workers Builds のビルドコマンドは必ず `pnpm build`（= 上記チェーン）にすること。** `next build` を直接呼ぶ設定だと画像同期が走らず、CDN直リンクになって転送量対策が効かない。
- env が未設定だと同期はスキップされ、シード画像で表示される（壊れない）。
- **既知の制約:** お知らせ本文（リッチエディタ）に貼った画像は今回ローカル化対象外。お知らせのアイキャッチ的な画像が必要になったら news スキーマに画像フィールドを足して同期対象に追加する。

## 4. 自動再ビルド（Webhook）
1. Cloudflare 側で Deploy Hook（再ビルド用URL）を発行
2. microCMS の各API設定 → Webhook → 「カスタム通知」に Deploy Hook URL を登録
3. コンテンツ更新 → 自動で再ビルド・再デプロイされる

## 動作確認
- 環境変数を設定して `pnpm build` → microCMS の内容が反映される
- 環境変数を外して `pnpm build` → シードデータで成功する（壊れない）
```

- [ ] **Step 2: Commit**

```bash
git add docs/microcms-setup.md
git commit -m "docs: add microCMS setup guide for restaurant site"
```

---

## 完了条件（受け入れ基準）

- [ ] `pnpm test` が全件PASS（normalize / fallback）
- [ ] 環境変数なしで `pnpm build` 成功、`out/restaurant/` が生成され、コース・お知らせ・店舗情報がシードで出力される
- [ ] microCMS環境変数を設定すると同じビルドで実データに切り替わる（手順書どおり）
- [ ] 画像（コース画像・ヒーロー画像）が microCMS 画像フィールドから差し替え可能
- [ ] 他15業種に影響がない（差分は restaurant 配下・lib・設定・docsのみ）
```
