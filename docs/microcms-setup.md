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
- お知らせ本文（リッチエディタ）に貼った microCMS 画像も同期対象（`sync-cms.mjs` が本文HTMLを走査し、`localizeHtml` がローカルパスへ置換）。本文・画像フィールドいずれも CDN 直URLは訪問者へ出力されない。

## 4. 自動再ビルド（Webhook）
1. Cloudflare 側で Deploy Hook（再ビルド用URL）を発行
2. microCMS の各API設定 → Webhook → 「カスタム通知」に Deploy Hook URL を登録
3. コンテンツ更新 → 自動で再ビルド・再デプロイされる

## 動作確認
- 環境変数を設定して `pnpm build` → microCMS の内容が反映される
- 環境変数を外して `pnpm build` → シードデータで成功する（壊れない）
- ビルド後、`grep -rc "images.microcms-assets.io" out/` が **0件** であること（CDN直リンクが残っていない＝転送量対策が効いている証拠）
