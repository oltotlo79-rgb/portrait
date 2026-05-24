# dental / 白水歯科クリニック — エンリッチ計画

現状: ヒーローに画像なし（円形blobのみ）、3つの安心カードはチェックマークのみ、メニュー5項目は番号のみ、Doctor節は画像あり。

## Phase A — 既存画像を活用

### 1. Hero に背景写真
- **使う画像**: `/images/dental/01-hero-light.webp`（既存・未使用）
- **差し込む場所**: `src/app/dental/_components/Top.tsx` Hero `<section>`
- **方法**: 透明感ある写真を背景にうっすらと、blob はその上に乗せる演出（明るい歯科の世界観強化）

### 2. 3つの安心カードに小写真を追加
- **使う画像**:
  - 個室診療カード → `/images/dental/04-room.webp`
  - 痛みに配慮カード → `/images/dental/02-reception.webp`
  - キッズスペースカード → `/images/dental/03-kidspace.webp`
- **差し込む場所**: Promises セクションの各カード上部
- **方法**: 角丸の small photo（aspect-[4/3]、size-full）を `✓` の代わりに表示

### 3. メニュー5項目にアイコンを差し替え
- **使う画像**:
  - 一般歯科 → `/images/dental/09-icon-general.svg`
  - 予防歯科 → `/images/dental/10-icon-prevention.svg`
  - 小児矯正 → `/images/dental/11-icon-ortho.svg`
  - ホワイトニング → `/images/dental/13-icon-whitening.svg`
  - ホームケア指導 → 既存に無いので Phase B
- **差し込む場所**: Menu セクションの各 `<li>` 左側、現在 `01` 等の数字が表示されている場所横
- **方法**: SVG を `size-12` で配置、ミントカラーで

### 4. 「親子で来院」シーンを Doctor 節の前後に
- **使う画像**: `/images/dental/06-family.webp`
- **差し込む場所**: Doctor セクションと Flow セクションの間
- **見出し**: 「お子さま連れも、おひとりさまも。」
- **本文**: ファミリー対応・キッズスペースの案内

### 5. 設備セクション新設
- **使う画像**: `/images/dental/07-equipment-01.webp`、`/images/dental/08-equipment-02.webp`
- **差し込む場所**: Flow の後、CTA の前
- **見出し**: 「設備とこだわり」
- **本文**: ダイアグノデント・滅菌器の説明

### 6. Flow セクションに図解
- **使う画像**: `/images/dental/14-flow-svg.svg`
- **差し込む場所**: Flow `<h2>` と `<ol>` の間
- **方法**: 5ステップを線で繋ぐ図解を中央配置

## Phase B — 追加生成すべき画像

### 16-icon-homecare.svg — ホームケア指導アイコン

```
Minimal SVG line icon in mint blue (#5BB7B7) stroke 2px, simple line drawing of a hand holding a toothbrush gently, friendly and approachable, 64x64, transparent background, healthcare icon style consistent with the other dental icons
```

### 17-cta-bg.webp — CTA 背景

| 項目 | 値 |
|---|---|
| **サイズ** | 2880 × 1620 (16:9) |
| **配置先** | `public/images/dental/17-cta-bg.webp` |

```
Photorealistic minimal photograph of a softly out-of-focus dental clinic interior, bright natural window light pouring in, gentle bokeh of mint accents, no specific equipment visible, abstract and atmospheric, hi-key but warm, Fuji Pro 400H, 35mm f/2.8, --ar 16:9 --style raw
```

### 18-smile-detail.webp — 小児矯正セクション用クローズアップ

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 1500 (4:5) |
| **配置先** | `public/images/dental/18-smile-detail.webp` |

```
Photorealistic close-up photograph of a child's gentle smile (lower face only, no eyes visible), healthy teeth visible, natural soft daylight, peaceful and reassuring expression, no orthodontic devices visible, Japanese pediatric clinic editorial style, Fuji Pro 400H, 85mm f/2.8, --ar 4:5 --style raw
```

## 期待される情報密度の変化

| セクション | 現状 | Phase A 後 | Phase A + B 後 |
|---|---|---|---|
| Hero | テキスト + blob | + 背景に院内写真 | 同左 |
| Promises | チェック ✓ | 3つの院内写真付きカード | 同左 |
| Menu | 番号 | 5つアイコン付き | + ホームケアアイコン |
| Doctor | 画像あり | 同左 | + 笑顔のディテール |
| (新) Family | なし | 親子来院写真 + 文 | 同左 |
| (新) Equipment | なし | 2枚の設備写真 | 同左 |
| Flow | 番号のみ | 5ステップ図解付き | 同左 |
| CTA | テキスト | 既存画像流用 | 専用CTA背景 |
