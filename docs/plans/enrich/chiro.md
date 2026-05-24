# chiro / ことう整体院 — エンリッチ計画

現状: ヒーローに画像なし（青緑グラデのblobのみ）、症状カードは丸印のみ、施術の流れは数字のみ。Doctor節と CTA を除いて**ほぼテキストだけ**で密度が低い。

## Phase A — 既存画像を活用

### 1. Hero に背景写真を追加
- **使う画像**: `/images/chiro/01-hero-reception.webp`（既存・未使用）
- **差し込む場所**: `src/app/chiro/_components/Top.tsx` の Hero `<section>` 内
- **方法**: blob の代わりに `next/image fill` で右側に配置（pet hero のパターンと同じ grid レイアウト）
  - text: left column / image: right column（角丸大きめでソフトな印象）

### 2. 症状カード4種にアイコンを差し替え
- **使う画像**: 既存 SVG 4枚
  - `/images/chiro/07-symptom-back.svg` → 腰痛カード
  - `/images/chiro/08-symptom-shoulder.svg` → 肩こりカード
  - `/images/chiro/09-symptom-head.svg` → 頭痛カード
  - `/images/chiro/10-symptom-sports.svg` → スポーツ障害カード
- **差し込む場所**: SYMPTOMS map の各カード内、現在 `●` 文字を表示している `<span className="text-2xl">●</span>` の場所
- **方法**: `<img src={...} className="size-8" alt="" />` で置換

### 3. 施術の流れに図解SVGを追加
- **使う画像**: `/images/chiro/11-step-diagram.svg`（5ステップの線図）
- **差し込む場所**: Method セクションの `<h2>施術の流れ</h2>` と `<ol>` の間
- **方法**: 中央配置で 1 行追加

### 4. 「結果のイメージ」セクションを新設
- **使う画像**: `/images/chiro/12-before-after.webp`（姿勢の Before/After 模式図）
- **差し込む場所**: Method の後、Doctor の前に新セクション追加
- **見出し**: 「整える、ということ。」
- **本文**: 「姿勢が整うと、体の使い方が変わります。」など短文＋画像

### 5. 「院内のしつらえ」セクションを新設
- **使う画像**: `/images/chiro/02-room.webp`（個室の施術ベッド）
- **差し込む場所**: Doctor の後、CTA の前
- **見出し**: 「白い、ひと部屋で。」など
- **本文**: 個室の設備や雰囲気を一言

### 6. CTA に背景写真
- **使う画像**: 既存ヒーロー画像のディフォーカス版でもよいし、`02-room.webp` のシャドウ強めバージョン
- **差し込む場所**: CTA セクション
- **方法**: `next/image fill` 背景＋暗いオーバーレイで文字を強調

## Phase B — 追加生成すべき画像

Phase A で既存画像を活用しても、以下があるとさらに「物語」が立ち上がります。

### 14-treatment-detail.webp — 施術中の手元クローズアップ

| 項目 | 値 |
|---|---|
| **サイズ** | 1920 × 1280 (3:2) |
| **配置先** | `public/images/chiro/14-treatment-detail.webp` |
| **使用場所**（提案） | 既存 `03-treatment-01.webp` を使う or 同種のディテールカット |
| **被写体** | 院長の親指が患者の肩甲骨周辺をピンポイントで押している瞬間 |
| **構図** | 横アングル、手と肩のみのフレーミング |
| **光** | 北窓の柔らかい昼光 |
| **避ける** | 顔・体の露出が多すぎる構図、医療器具 |

```
Photorealistic editorial close-up photograph of a chiropractor's experienced hands applying precise thumb pressure on a client's upper back / shoulder blade area, the client lying face down on a treatment table draped tastefully with a soft pale teal towel, only the therapist's hands and forearms visible (white linen sleeve), focused and gentle craft, soft north-facing window light from above, Japanese clinical magazine aesthetic, Fuji Pro 400H, 85mm f/4, --ar 3:2 --style raw
```

### 15-self-care.webp — セルフケア指導の図解風写真

| 項目 | 値 |
|---|---|
| **サイズ** | 1440 × 1800 (4:5) |
| **配置先** | `public/images/chiro/15-self-care.webp` |
| **使用場所** | 新規「セルフケア」セクション or Method ステップ 4 のアクセント |
| **被写体** | 院長の手元と、模式図が描かれた A5 ノート |
| **光** | デスクの自然光、影柔らかく |

```
Photorealistic photograph from above of an open A5 notebook with neatly hand-drawn anatomical diagrams of stretches (small line drawings of human silhouettes in different yoga poses), a chiropractor's hand holding a wooden pencil mid-explanation, a clear glass of water nearby, soft natural light from a window, intimate consultation atmosphere, no readable text other than minimal labels, Japanese clinic editorial style, Fuji Pro 400H, 50mm f/4, --ar 4:5 --style raw
```

### 16-cta-bg.webp — CTA セクション用の引きカット

| 項目 | 値 |
|---|---|
| **サイズ** | 2880 × 1620 (16:9) |
| **配置先** | `public/images/chiro/16-cta-bg.webp` |
| **使用場所** | CTA セクションの背景フル幅 |
| **被写体** | 院長と患者の対話シーン（後ろ姿の患者と、笑顔の院長の横顔） |

```
Photorealistic editorial photograph of a chiropractor in a navy crewneck sweater (not white coat) sitting on a wooden chair, leaning forward warmly toward a client whose back is to the camera, both engaged in calm conversation in a softly lit consultation room with green plants in the background, soft natural side light, sense of trust and listening, no full face visible from the client side, Fuji Pro 400H, 50mm f/2.8, --ar 16:9 --style raw
```

## 期待される情報密度の変化

| セクション | 現状 | Phase A 後 | Phase A + B 後 |
|---|---|---|---|
| Hero | テキスト + blob | テキスト + 右に院内写真 | 同左 |
| Symptoms | 4 × 円アイコン | 4 × SVG 線画アイコン | 同左 |
| Method | 番号のみ | 番号 + 5ステップ図解 | + ステップ4 にセルフケア写真 |
| Result / Space | なし | Before/After 図解 + 個室写真 | 同左 |
| Doctor | 画像あり（変更なし） | 同左 | 同左 |
| CTA | テキストのみ | 既存画像の流用 | 専用カット背景 |

実質、画像なしの 6 セクションが画像付き 6 セクションになり、密度は約 2 倍に上がります。
