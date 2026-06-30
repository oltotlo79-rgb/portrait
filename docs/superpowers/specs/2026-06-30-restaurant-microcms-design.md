# 設計: 割烹 黒文字 × microCMS ヘッドレスCMS連携ショーケース

- 日付: 2026-06-30
- 対象業種: 飲食（割烹 黒文字 / `src/app/restaurant`）
- 目的: クラウドワークス受注の**営業材料**。「ヘッドレスCMSを導入し、お客様自身が文章も画像も更新できるサイトを作れる」ことを1業種で深く実演する。

## 1. 背景・前提

- 本リポジトリは12〜16業種のHPサンプルを**単一Next.jsアプリ**で構築し、`output: 'export'` で静的書き出し → Cloudflare（Workers Builds）に配信している。
- コンテンツは現状 TSX と `*-data.ts`（例: `src/app/restaurant/_components/menu-data.ts`）に**ハードコード**。
- 今回は飲食1業種のみをCMS化する。他業種は現状維持。

## 2. アーキテクチャ方針

現行の **`output: 'export'`（完全静的書き出し）を維持**する。

- **ビルド時に microCMS API からコンテンツを取得**し、静的HTMLへ焼き込む（SSG / Jamstack）。
- コンテンツ編集 → **microCMS Webhook → Cloudflare Deploy Hook** で自動再ビルド・再デプロイ。
- 「管理画面で編集 → 1〜2分で本番反映」のループを提案デモとして見せる。再ビルドのタイムラグはJamstackの正常仕様として説明可能。

### 不採用案

- **CSR（ブラウザから直接API取得）**: APIキー露出・SEO低下・静的書き出しの強みを捨てるため不採用。
- **下書きプレビュー**: サーバーエンドポイントが必要で `output: 'export'` では不可。スコープ外。

## 2.1. データ転送量対策（microCMS Hobby 20GB/月 制約）★必須

microCMS Hobby プランは**データ転送量が月20GB**で、超過すると当月いっぱい API が停止する（課金での即時解除は不可）。転送量を主に消費するのは**画像配信**。対策として、**訪問者に microCMS の画像CDN URLを直リンクさせない**。

- **画像はビルド時に1回だけ microCMS から取得**し、`public/images/restaurant/cms/` に保存 → Cloudflare から配信する。
- 訪問者のページ閲覧は 100% Cloudflare 配信となり、microCMS の転送量を消費しない。microCMS へのアクセスは「ビルド1回あたり画像取得1回」のみ。
- 実装は prebuild スクリプト `scripts/sync-cms.mjs`（env-gated・env無しなら no-op）でコンテンツ取得＋画像ダウンロード＋`url→ローカルパス`の対応表JSONを出力。`package.json` の build を `node scripts/sync-cms.mjs && next build` にする。
- レンダリング側（`<img>` / `next/image` の `src`）は**必ずローカルパス**を指す。microCMS CDN URL をそのまま出力しない（これが本対策の肝）。

> Next.js は `output: 'export'` ＋ `images: { unoptimized: true }` のため `next/image` の自動最適化/ローカル化は使えない。上記スクリプトで等価の「ビルド時ローカル化」を行う。

## 3. コンテンツモデル（microCMS スキーマ）

| API ID | 形式 | 主なフィールド | 置き換え元 |
|---|---|---|---|
| `courses` | リスト | `no`(順序) / `en` / `ja` / `body` / `image`(画像) | `menu-data.ts` |
| `news` | リスト | `title` / `publishedAt` / `category` / `body`(リッチエディタ) | 新規 |
| `info` | オブジェクト | `shopName` / `hours` / `closed` / `seats` / `tel` / `address` / `access` / `heroImage`(画像) / `logo`(画像) | Hero / Footer のハードコード |

- **画像は全フィールドでお客様が差し替え可能**（管理画面でドラッグ&ドロップ、microCMS CDN 配信）。ヒーロー画像・ロゴも `info` に含めて差し替え対象にする。
- 既存の WebP 画像資産は microCMS の初期データとして投入。

## 4. データ取得層とフォールバック（堅牢性）

ビルドが「microCMSアカウント/キー未設定でも壊れない」ことを保証する。

- `src/lib/microcms.ts` … 公式 SDK `microcms-js-sdk` のクライアント。`MICROCMS_SERVICE_DOMAIN` / `MICROCMS_API_KEY` を環境変数から読む。
- `src/app/restaurant/_data/` に**シードJSON**（現行 `menu-data.ts` 相当＋news/infoの初期値）を保持。
- 各取得関数（`getCourses` / `getNews` / `getInfo`）は **環境変数があれば microCMS、なければシードJSONにフォールバック**。ローカル/CIでキーが無くてもビルド成功。
- **画像URLの正規化＋ローカル化**: microCMS は画像を `{ url, width, height }` で返し、シードはローカルパス文字列。正規化関数で `image: string` に揃えた上で、microCMS 由来の画像は prebuild スクリプトが出力した**対応表経由でローカルパスに差し替える**（§2.1）。CDN URL を素通しにしない。env無しのフォールバック時はシードのローカルパスがそのまま使われる。

## 5. 再デプロイ・環境変数フロー

- 環境変数 `MICROCMS_SERVICE_DOMAIN` / `MICROCMS_API_KEY` を **Cloudflare Workers Builds** とローカル `.env.local` に設定（**キーはコミットしない**。`.gitignore` 確認）。
- microCMS の **Webhook → Cloudflare Deploy Hook** を接続し、コンテンツ更新で自動再ビルド。
- 依存追加: `microcms-js-sdk`。

## 6. スコープ境界（YAGNI）

- **やる**: 飲食1業種（`courses` / `news` / `info`）のCMS化。画像差し替え対応。フォールバック。Webhook自動再ビルド。**ビルド時画像ローカル化（20GB転送量対策、§2.1）**。
- **やらない**: 下書きプレビュー、全業種展開、お問い合わせ送信機能、他業種の改修。

## 7. テスト・検証

1. **フォールバック**: 環境変数なしで `next build` が成功し、シードデータで料理/お知らせ/店舗情報が出力される。
2. **正規化ロジック**: 画像正規化・データ整形関数の単体テスト（microCMS形状とシード形状の両方）。
3. **取得結果反映**: ダミー/実キーで取得 → ビルド出力HTMLに courses・news・info（画像含む）が反映されることを確認。
4. **静的書き出し維持**: `output: 'export'` のまま `out/` が生成されることを確認。

## 8. 受け入れ基準

- 割烹 黒文字サイトのコース・お知らせ・店舗情報・主要画像が microCMS から取得・表示される。
- microCMS管理画面でテキスト/画像を編集 → 再ビルドで本番反映される。
- microCMSキーが無い環境でもビルドが壊れず、シードデータで表示される。
- 他15業種に影響がない。
