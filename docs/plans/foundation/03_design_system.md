# 03 デザインシステム

## 共通トークン（root変数）

`src/app/globals.css` で以下を定義し、各業種layoutで上書きする。

```css
:root {
  --site-bg: 255 255 255;
  --site-fg: 17 17 17;
  --site-muted: 107 114 128;
  --site-accent: 0 0 0;          /* 業種でoverride */
  --site-accent-soft: 0 0 0;     /* 業種でoverride */
  --site-radius: 12px;
  --site-shadow: 0 12px 32px -16px rgb(0 0 0 / 0.15);
  --font-display: var(--font-noto-sans-jp);
  --font-body: var(--font-noto-sans-jp);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
}
```

Tailwind v4は `@theme` ブロックでCSS変数をユーティリティ化する。

## 業種別パレット一覧

| 業種 | プライマリ | アクセント | 背景傾向 | フォント方向 |
|---|---|---|---|---|
| 民泊 | `#3F4A3C`（深緑） | `#C9A063`（真鍮） | オフホワイト+和紙テクスチャ | Shippori Mincho × Cormorant |
| 旅行斡旋 | `#0F4C81`（深ブルー） | `#F4B400`（陽光） | 写真フル背景の上に乗せる | Manrope × Noto Sans JP |
| 飲食店（割烹） | `#1A1A1A`（黒） | `#B59154`（古銅） | 漆塗りの黒＋木目 | Shippori Mincho |
| 親子教室 | `#FF8FA3`（コーラル） | `#FFD166`（マスタード） | クリーム＋手書き要素 | M PLUS Rounded 1c |
| 美容サロン | `#E8DCD0`（生成り） | `#B8896A`（テラコッタ） | ミニマル白＋上品グレージュ | Cormorant × Noto Serif JP |
| 整体・治療院 | `#2E5266`（深い青緑） | `#A9C4C4`（淡水） | 清潔感のある白 | Zen Maru Gothic |
| 税理士 | `#0E2A47`（紺） | `#B4924C`（ゴールド） | 白＋細い線 | Noto Serif JP × Inter |
| 工務店 | `#2C2A28`（炭黒） | `#C45D2E`（錆オレンジ） | 木目・コンクリート | Anton × Noto Sans JP |
| 歯科 | `#FFFFFF` + `#5BB7B7`（ミントブルー） | `#FFC9B3`（コーラル淡） | 白＋大胆な余白 | Inter × Zen Kaku Gothic New |
| ペットサロン | `#A37864`（ココアブラウン） | `#FFC97A`（マロン） | クリームベージュ | Zen Maru Gothic |
| オーガニックEC | `#3F5B36`（モスグリーン） | `#D8C29D`（リネン） | クラフト紙風 | Cormorant × Noto Serif JP |
| フィットネス | `#0A0A0A`（漆黒） | `#FFE600`（ネオンイエロー） | 黒背景＋大胆タイポ | Bebas Neue × Noto Sans JP Black |

色の具体値は各サイト計画書（sites/）と一致させる。

## タイポグラフィ規則

- `<h1>` はサイトごとに最大100〜140pxまで許容（クランプ）
- 行間は本文1.8、見出し1.15を基本
- 和文の字間は `letter-spacing: 0.02em`、欧文見出しは `-0.02em` でタイト

```css
.h-display { font-size: clamp(2.5rem, 6vw, 7rem); line-height: 1.1; }
.h-section { font-size: clamp(1.75rem, 3vw, 3rem); line-height: 1.2; }
.text-body { font-size: clamp(0.95rem, 1.1vw, 1.05rem); line-height: 1.8; }
```

## グリッド・スペーシング

- コンテナ幅: max 1280px（記事系業種）／ 1440px（ビジュアル系）／ フル幅（旅行・フィットネス）
- セクション縦パディング: `clamp(80px, 12vw, 200px)`

## 共通コンポーネント設計

| 名前 | 用途 |
|---|---|
| `<SectionLabel>` | セクション上部の小見出し（02 / SERVICE 等） |
| `<RevealText>` | 単語/文字単位で出現するテキスト |
| `<ParallaxImage>` | スクロール連動の画像視差 |
| `<MagneticButton>` | カーソルに吸い寄せられるCTA |
| `<Marquee>` | テキスト・画像の無限横スクロール |
| `<NoiseOverlay>` | 上品なノイズテクスチャ全面オーバーレイ |
| `<PortfolioBadge>` | 右下固定の「← 実績一覧へ戻る」ピル |

これらは `src/components/shared/` または `components/motion/` に置き、各業種で配色のみ差し替えて再利用する。
