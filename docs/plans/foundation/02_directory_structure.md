# 02 ディレクトリ構造

## ルート

```
portrait/
├── docs/
│   └── plans/                   # この計画ドキュメント群
├── public/
│   ├── images/
│   │   ├── common/              # 共通画像（OGP、favicon）
│   │   ├── minpaku/             # 民泊用（Codex生成）
│   │   ├── travel/
│   │   ├── restaurant/
│   │   ├── kids/
│   │   ├── salon/
│   │   ├── chiro/
│   │   ├── tax/
│   │   ├── construction/
│   │   ├── dental/
│   │   ├── pet/
│   │   ├── organic/
│   │   └── fitness/
│   └── fonts/                   # ローカル配置するwebフォント（必要時のみ）
├── src/
│   ├── app/
│   │   ├── layout.tsx           # ルートレイアウト（Lenisプロバイダ等）
│   │   ├── page.tsx             # 実績一覧トップ（90_portfolio_index）
│   │   ├── globals.css
│   │   ├── minpaku/             # 業種ごとに完結したルートグループ
│   │   │   ├── layout.tsx       # 民泊専用ヘッダー/フッター、フォント
│   │   │   ├── page.tsx
│   │   │   ├── rooms/page.tsx
│   │   │   ├── access/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── travel/              # 同上パターン
│   │   ├── restaurant/
│   │   ├── kids/
│   │   ├── salon/
│   │   ├── chiro/
│   │   ├── tax/
│   │   ├── construction/
│   │   ├── dental/
│   │   ├── pet/
│   │   ├── organic/
│   │   └── fitness/
│   ├── components/
│   │   ├── shared/              # 全サイト共通（PortfolioBadge等）
│   │   ├── motion/              # アニメ用ラッパー（FadeIn, SplitText等）
│   │   └── sites/
│   │       ├── minpaku/         # 業種専用コンポーネント
│   │       ├── travel/
│   │       └── ...
│   ├── lib/
│   │   ├── animations/          # GSAP timeline factory、Framer variants辞書
│   │   ├── fonts.ts             # next/font 一括定義
│   │   └── site-config.ts       # 各サイトのメタ（name, themeColor, links）
│   └── styles/
│       └── tokens/              # サイトごとのCSS変数（テーマ切替）
├── next.config.ts
├── tsconfig.json
├── package.json
├── tailwind.config.ts
└── wrangler.toml                # Cloudflare Pages（任意）
```

## ルートグループ命名規則

各業種は **トップレベルセグメント**（`/minpaku`, `/restaurant` ...）として配置。
ルートグループ `(group)` は使わない理由：
- URLに業種名が出ていた方が、CW提案文で「`/restaurant` を見てください」と指せて伝わりやすい
- 各サイトに独自レイアウト（ヘッダーのロゴ・配色・スクロール挙動）を持たせやすい

## 共通レイアウトの扱い

`src/app/layout.tsx`（ルート）には:
- Lenisプロバイダ
- グローバルCSS変数のリセット
- フォント変数の宣言（業種別フォントは各業種layoutで上書き）
- 「ポートフォリオ一覧へ戻る」フローティングバッジ（`<PortfolioBadge />`、各サイト共通で右下に常時表示）

各業種 `layout.tsx` でその業種のテーマ色・フォント・ヘッダー・フッターを定義する。

## サイト間の独立性

業種フォルダ間でコンポーネントを直接importすることは**禁止**。共通化したいものは必ず `components/shared/` か `components/motion/` に切り出してから使う。
→ 後で1業種だけ別リポジトリに切り出して納品しやすくする。
