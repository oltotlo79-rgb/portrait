# kids / ぽけっとラボ — エンリッチ計画

現状: ヒーローは blob＋絵文字、プログラム4種は絵文字のみ、保護者の声は文字のみ、Access は教室画像あり、CTA はblobのみ。

## Phase A — 既存画像を活用

### 1. Hero に教室の様子を背景に
- **使う画像**: `/images/kids/01-hero-classroom.webp`（Access で使用中、Hero でも使う）
- **差し込む場所**: Hero `<section>`
- **方法**: 既存 blob の下に教室写真を opacity-30 で薄く配置（活気を演出）

### 2. プログラム4種に活動写真
- **使う画像**:
  - 実験カード → `/images/kids/02-kid-experiment.webp`
  - 工作カード → `/images/kids/03-kid-craft.webp`
  - 絵本ワークカード → `/images/kids/04-kid-picture.webp`
  - 季節のお菓子カード → Phase B（新規）or `/images/kids/05-parent-child.webp`
- **差し込む場所**: Programs セクションの各カード上部、絵文字 🛁/🌿/👵 等の代わり
- **方法**: aspect-[4/3] の角丸大きめ画像を絵文字の代わりに、絵文字は写真の下に小さくサブ表示

### 3. 保護者の声セクションに背景
- **使う画像**: `/images/kids/12-voice-bg.webp`（クリーム壁にチョーク絵）
- **差し込む場所**: Voice セクション全体背景
- **方法**: `absolute inset-0` で薄くオーバーレイ、3つのカードを前面に

### 4. 講師紹介セクションを新設
- **使う画像**: `/images/kids/10-teacher-01.webp`、`/images/kids/11-teacher-02.webp`
- **差し込む場所**: 3つのお約束セクション後 or Voice の前
- **見出し**: 「お迎えするのは、こんな先生」
- **本文**: 保育士と理系学生 2 名のプロフィール

### 5. 子どもたちの作品ギャラリーセクション新設
- **使う画像**: `/images/kids/06-work-01.webp` 〜 `/images/kids/09-work-04.webp`
- **差し込む場所**: プログラムセクションと 3つのお約束 の間 or 独立した新セクション
- **見出し**: 「子どもたちが、つくったもの」
- **本文**: 4 枚の作品写真をグリッドで

### 6. CTA に親子のシルエット
- **使う画像**: `/images/kids/05-parent-child.webp`
- **差し込む場所**: CTA 背景
- **方法**: 薄くオーバーレイ＋大きめタイトル

## Phase B — 追加生成すべき画像

### 13-program-season.webp — 季節のお菓子カード用

| 項目 | 値 |
|---|---|
| **サイズ** | 1440 × 1800 (4:5) |
| **配置先** | `public/images/kids/13-program-season.webp` |
| **使用場所** | Programs セクション「季節のお菓子」カード |

```
Photorealistic close-up photograph of a child's small hands using a wooden spoon to stir a glass bowl of bright red strawberry jam being prepared, fresh whole strawberries scattered on a marble countertop, soft morning natural light from a window, the child wearing a small mustard-yellow apron (only torso visible, no face), warm and cozy home-cooking moment, Kodak Gold 200, 50mm macro f/2.8, --ar 4:5 --style raw
```

### 14-teacher-03.webp — 講師3人目（オプション）

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 1500 (4:5) |
| **配置先** | `public/images/kids/14-teacher-03.webp` |

```
Photorealistic editorial portrait of a Japanese woman in her early 30s, gentle warm smile, holding a stack of children's picture books, wearing a soft sage-green linen apron over a cream long-sleeve, short bob hair, soft natural window light, kind early-childhood educator vibe, Fuji Pro 400H, 85mm f/2, --ar 4:5 --style raw
```

### 15-cta-parent-walking.webp — CTA 背景

| 項目 | 値 |
|---|---|
| **サイズ** | 2880 × 1620 (16:9) |
| **配置先** | `public/images/kids/15-cta-parent-walking.webp` |

```
Photorealistic photograph from behind of a parent and small child walking hand-in-hand toward a bright building entrance, soft morning sunlight, the parent in a soft beige coat carrying a small craft bag, no faces visible (rear angle), warm and welcoming, Fuji Pro 400H, 50mm f/4, --ar 16:9 --style raw
```

## 期待される情報密度の変化

| セクション | 現状 | Phase A 後 | Phase A + B 後 |
|---|---|---|---|
| Hero | テキスト + blob + 絵文字 | + 教室背景 | 同左 |
| Programs | 4 × 絵文字カード | 4 × 写真付きカード | + 季節お菓子写真 |
| 3つのお約束 | 絵文字＋テキスト | 同左 | 同左 |
| (新) Teachers | なし | 2 講師カード | + 3 人目（オプション） |
| (新) Works | なし | 4 作品ギャラリー | 同左 |
| Voice | 3 文字カード | + クリーム壁背景 | 同左 |
| Access | 写真あり | 同左 | 同左 |
| CTA | テキスト + blob | + 親子背景 | 専用CTA背景 |
