# 05 デプロイメント（Cloudflare Pages）

## 方針

- **静的書き出し**（`output: 'export'`）でビルドし、`out/` を Cloudflare Pages に配信する
- 動的サーバー機能（SSR / Server Actions / Route Handlers）は使用しない
- 画像は `next/image` の `unoptimized: true` モードで運用、最適化はビルド前に手動またはCodexで実施

## next.config.ts

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: { typedRoutes: true },
};

export default nextConfig;
```

`trailingSlash: true` にしておくと Cloudflare Pages のリライト挙動と相性が良い。

## ビルド〜デプロイ

### 1. 初回セットアップ
```bash
pnpm install
pnpm dlx wrangler login
```

### 2. ローカルビルド確認
```bash
pnpm build
# => out/ ディレクトリが生成
pnpm dlx serve out
```

### 3. Cloudflare Pages プロジェクト作成
- Cloudflare ダッシュボードで Pages > Create project > Direct Upload もしくは GitHub 連携
- プロジェクト名 `portrait`（公開URL: `portrait.pages.dev`）
- Build command: `pnpm build`
- Build output directory: `out`
- Environment variable: なし

### 4. デプロイ
GitHub連携の場合は push で自動。Direct Upload の場合は:
```bash
pnpm dlx wrangler pages deploy out --project-name=portrait
```

## URL設計

- ルート: `https://portrait.pages.dev/` → 実績一覧トップ
- 業種別: `https://portrait.pages.dev/restaurant/` など

クラウドワークス提案文では:
- 「**実績一覧**: portrait.pages.dev」
- 「**飲食業界向け事例**: portrait.pages.dev/restaurant」
のように貼り分けられる。

## カスタムドメイン（任意・後回し）

- ポートフォリオが完成して受注感触が出てきたタイミングで独自ドメインを取得（例: `your-name.dev`）
- Cloudflare Pages の Custom Domains から接続するだけでOK
- 取得まではサブドメイン運用で問題なし

## キャッシュ／HTTPヘッダ

- 画像は `_headers` ファイルで `Cache-Control: public, max-age=31536000, immutable`
- HTML は `Cache-Control: public, max-age=0, must-revalidate`

```
# public/_headers
/*
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin

/images/*
  Cache-Control: public, max-age=31536000, immutable

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
```

## 注意点

- Cloudflare Pages のビルドイメージはNode 18デフォルト → ダッシュボードで `NODE_VERSION=20` を環境変数指定
- 静的書き出しのため `headers()` / `cookies()` / `notFound()` の使い方に制限あり。`generateStaticParams` を返さない動的ルートは作らない
- `app/sitemap.ts` と `app/robots.ts` も静的書き出しに対応しているのでSEO用に作成
