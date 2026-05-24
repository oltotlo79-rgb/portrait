# 90 実績一覧トップ画像生成指示

対応サイト計画: [`sites/90_portfolio_index.md`](../sites/90_portfolio_index.md)
配置先: `public/images/common/` および `public/images/portfolio/`

## トーン

- ニュートラル、洗練、夜の美術館のような静けさ
- 黒背景 `#0E0E0E` × オフホワイト `#F6F6F2`
- 12業種の世界観のカードが並ぶショーケース

## 必要画像

### サムネ（業種カードに使用） — `public/images/portfolio/`

各業種のヒーロー画像を 4:5（1000×1250）にクロップした派生バージョン。**サイトのヒーローをそのまま使うのではなく、上品なノイズオーバーレイ＋わずかな黒コーティング**を載せ、12枚で統一感を出す。

| # | ファイル名 | 元画像 |
|---|---|---|
| 01 | `thumb-minpaku.webp` | `minpaku/01-hero-dusk.webp` |
| 02 | `thumb-travel.webp` | `travel/01-hero-horizon.webp` |
| 03 | `thumb-restaurant.webp` | `restaurant/01-hero-noren-night.webp` |
| 04 | `thumb-kids.webp` | `kids/01-hero-classroom.webp` |
| 05 | `thumb-salon.webp` | `salon/01-hero-back.webp` |
| 06 | `thumb-chiro.webp` | `chiro/01-hero-reception.webp` |
| 07 | `thumb-tax.webp` | `tax/01-hero-bg.webp` |
| 08 | `thumb-construction.webp` | `construction/01-hero-house.webp` |
| 09 | `thumb-dental.webp` | `dental/01-hero-light.webp` |
| 10 | `thumb-pet.webp` | `pet/01-hero-dog.webp` |
| 11 | `thumb-organic.webp` | `organic/01-hero-drone.webp` |
| 12 | `thumb-fitness.webp` | `fitness/01-hero-bg.webp` |

### 共通素材 — `public/images/common/`

| # | ファイル名 | 用途 | サイズ |
|---|---|---|---|
| 01 | `noise-overlay.png` | 全サイトで使うノイズ（透過） | 1024×1024 シームレス |
| 02 | `cursor-dot.svg` | カスタムカーソル | 32×32 |
| 03 | `favicon.svg` | ファビコン | 512×512 |
| 04 | `favicon-32.png` | ファビコンPNG | 32×32 |
| 05 | `favicon-180.png` | apple-touch-icon | 180×180 |
| 06 | `ogp-default.webp` | デフォルトOGP（実績一覧用） | 1200×630 |

### ヒーロー装飾 — `public/images/portfolio/`

| # | ファイル名 | 用途 |
|---|---|---|
| 13 | `hero-bg-grain.webp` | ヒーロー背景に重ねる粒子テクスチャ |
| 14 | `hero-deco-12.svg` | "12"の数字を抽象化したストローク装飾 |

## OGP指示

- `ogp-default.webp` には**画像のみ**を入れ、文字はNext.js側で `<OpenGraphImage>` 風に重ねる
- もしくはCanvas/SVGで動的に生成する場合、生成元データは下記:
  - title: 「Webサイト制作実績」
  - subtitle: 「12 Industries Sample Portfolio」

## 入れない要素

- 制作者個人の顔写真（このページではしない方針）
- 派手なクライアントロゴ（架空ブランド名のみ）
- 「実績○件」など仰々しい数字バナー
