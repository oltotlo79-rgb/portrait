# 01 技術スタック

## コア

| 項目 | 採用 | 理由 |
|---|---|---|
| フレームワーク | **Next.js 15 (App Router)** | サンプル間でレイアウト共有しやすい。ルートグループで業種ごとに完結 |
| 言語 | **TypeScript (strict)** | 受注後の保守想定で実務同等 |
| パッケージマネージャ | **pnpm** | モノレポでないが将来の分割に備える＆速度 |
| Node | **20 LTS 以上** | Next.js 15要件 |

## スタイリング

| 項目 | 採用 | 用途 |
|---|---|---|
| **Tailwind CSS v4** | 全サイト共通 | ユーティリティ＋デザイントークンをCSS変数化 |
| **shadcn/ui**（必要箇所のみ） | ボタン/ダイアログ/フォーム | スクラッチでもよいが工数削減 |
| **CSS Modules** | サイト固有の凝った装飾 | Tailwindで書きにくいグラデ・clip-path等 |

## アニメーション

「リッチアニメーション」要件に対し、用途を分けて3ライブラリを併用する。

| ライブラリ | 用途 | 例 |
|---|---|---|
| **Framer Motion** | コンポーネント単位の入退場・ホバー・ステート遷移 | ボタンHover、モーダル開閉、リスト並び |
| **GSAP + ScrollTrigger** | スクロール連動の演出・タイムライン | ヒーローのピン留めズーム、横スクロール、テキストSplitアニメ |
| **Lenis** | スムーススクロール基盤 | 全サイト共通のスクロール挙動を上品に |

補助：
- **lucide-react** アイコン
- **@react-spring/parallax**（民泊・旅行など視差表現が映える業種で）
- **Lottie**（親子教室、ペットサロンなど親しみやすさ重視で）

## フォント

- **next/font/google** でロード
- 共通フォールバック: Noto Sans JP
- 業種特性に応じて見出し用に下記から選定:
  - 高級系: Shippori Mincho, Cormorant Garamond
  - モダン系: Inter, Manrope
  - 親しみ系: M PLUS Rounded 1c, Zen Maru Gothic
  - 力強い系: Bebas Neue, Anton, Noto Serif JP Black

## フォーム / バリデーション

- **react-hook-form + zod** で型安全に
- 送信はモックハンドラのみ（`/api` ルートは作らず、`onSubmit` で疑似的に成功表示）

## アイコン・装飾

- **lucide-react**
- SVG装飾はFigmaかCodex生成画像（`docs/plans/images/` の指示書経由）から取得

## 開発支援

- **ESLint + Prettier**
- **Storybook**は採用しない（サンプル群なので不要）
- **playwright**は最小限のE2E（ナビゲーションが死んでないか）のみオプショナル

## デプロイ

- **Cloudflare Pages**
- `next.config.ts` で `output: 'export'`
- ビルド成果物 `out/` を `wrangler pages deploy out` で配信
- 詳細は `05_deployment.md`
