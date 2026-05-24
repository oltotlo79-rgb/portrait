# 13 実績一覧トップ（ポートフォリオ）画像再生成プロンプト

対応サイト: `/`
配置先: `public/images/portfolio/` および `public/images/common/`

## サムネ運用

実績一覧 (`/`) のカードに使う **サムネ12枚** は、各業種のヒーロー画像を 4:5 にクロップした派生バリエーション。**業種ごとのヒーローを再生成した後、その派生として制作するのが基本**。

ただし「サムネだけ別にエレガントなクロップ・若干暗めにオーバーレイ」した方が一覧として揃って見えるため、**個別生成**もアリ。

| ファイル | 元になる画像 | クロップ方針 |
|---|---|---|
| thumb-minpaku.webp | `minpaku/01-hero-dusk.webp` | 暖簾を中央に寄せて 4:5 |
| thumb-travel.webp | `travel/01-hero-horizon.webp` | 地平線を画面下1/3に |
| thumb-restaurant.webp | `restaurant/01-hero-noren-night.webp` | 暖簾と提灯を画面中央に |
| thumb-kids.webp | `kids/01-hero-classroom.webp` | 教室の窓側を中央に |
| thumb-salon.webp | `salon/01-hero-back.webp` | ロングヘアの後ろ姿を縦長に |
| thumb-chiro.webp | `chiro/01-hero-reception.webp` | 植物と受付を中央に |
| thumb-tax.webp | `tax/01-hero-bg.webp` | 細い金線を中央に |
| thumb-construction.webp | `construction/01-hero-house.webp` | 家全景を画面中央に |
| thumb-dental.webp | `dental/01-hero-light.webp` | オリーブの木と窓光を中央に |
| thumb-pet.webp | `pet/01-hero-dog.webp` | プードルの顔を中央に |
| thumb-organic.webp | `organic/01-hero-drone.webp` | 畑のパッチワークを中央に |
| thumb-fitness.webp | `fitness/01-hero-bg.webp` | ネオン光を中央に |

### サムネ共通の後処理

1. 各ヒーローを 1000 × 1250 (4:5) にクロップ
2. 上から下にかけて **黒 0% → 20% → 50%** の縦グラデオーバーレイをかける（Next.js側でもCSSで重ねているが、画像にも軽くベイク）
3. WebP quality 80 で書き出し

## 共通画像（`public/images/common/`）

### noise-overlay.png

| 項目 | 値 |
|---|---|
| **サイズ** | 1024 × 1024 シームレス |
| **形式** | PNG 透過 |

```
Subtle film grain texture overlay PNG, semi-transparent (opacity 50%), neutral grey base with organic monochrome noise pattern, Kodak Portra 400 grain emulation, seamless tileable, designed for use as a multiply/overlay blend layer on UI, --ar 1:1
```

### cursor-dot.svg

```
Minimal SVG cursor element, a single small solid circle 8px in diameter, soft off-white color (#F6F6F2), centered in a 32x32 viewbox, transparent background
```

### favicon.svg

```
Minimal SVG favicon design: a single bold letter "P" in geometric sans-serif (suggesting "Portrait"), warm off-white on transparent background, or alternatively a stylized abstract mark consisting of 3 small dots arranged in a triangular formation, simple and recognizable at 16x16, transparent background
```

### favicon-32.png

faviconの32×32 PNG ラスタライズ版（同デザイン）。

### favicon-180.png

apple-touch-icon用 180×180 PNG（同デザイン、背景は `#0E0E0E`）。

### ogp-default.webp

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 630 (1.91:1) |

```
Photorealistic dark moody photograph showing an abstract composition of 12 small colored color-block tiles arranged in a 3x4 grid against a deep black background (#0E0E0E), each tile a different industry color (deep green, navy, black, coral, beige, teal, navy gold, charcoal, mint, cocoa, moss green, neon yellow), soft subtle shadow under each tile, sense of curated industry portfolio, no text, --ar 1200:630
```

---

## ヒーロー装飾（`public/images/portfolio/`）

### hero-bg-grain.webp

| 項目 | 値 |
|---|---|
| **サイズ** | 2400 × 1600 |

```
Photorealistic close-up texture of deep matte black surface with fine film grain noise, slight warm grey speckles, no patterns, no shapes, designed as a subtle overlay background for the portfolio hero, --ar 3:2
```

### hero-deco-12.svg

```
Minimal SVG vector graphic of a very large stylized number "12" rendered in elegant ultra-thin grey stroke (single-line geometric design suggesting industries), almost watermark-like in opacity, sense of "twelve industries", transparent background, --ar 1:1
```

---

## 運用フロー（サムネ12枚生成）

1. **先に各業種のヒーロー (01-hero-*.webp) を再生成する**
2. ヒーローが完成したら、4:5 にクロップしてサムネとして書き出す
3. 上下にダークグラデオーバーレイをかける（Photoshop / Figma で `Black, alpha 0→50%` のグラデを上に乗せて統合）
4. WebP quality 80 で書き出して `public/images/portfolio/thumb-*.webp` に配置
5. `src/lib/site-config.ts` の `thumb` パスは変更不要（既存ファイル名のまま）

---

## サムネバリアント（個別生成する場合のプロンプト）

各業種ヒーローを元に、エレガントな縦長 4:5 構図で **やや暗めに統一** する場合は、ヒーローのプロンプト末尾に以下を付加して再生成：

```
... composed for 4:5 vertical thumbnail with subject in the upper two-thirds and darker tones in the lower third for text overlay, slight black gradient overlay from top to bottom, refined museum-quality presentation, deep blacks, --ar 4:5 --style raw
```

これを各業種に適用して、業種別 thumb-*.webp を一括生成すれば統一感のある12枚が揃います。
