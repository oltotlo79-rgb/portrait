# tax / 松永税理士事務所 — エンリッチ計画

現状: ヒーローは紺色グラデと金線のみ、KPIは数字だけ、サービス4種は文字のみ、Profile は画像あり、Column は文字リンクのみ。

## Phase A — 既存画像を活用

### 1. Hero に背景画像
- **使う画像**: `/images/tax/01-hero-bg.webp`（既存・未使用、紺地に金線の抽象写真）
- **差し込む場所**: Hero `<section>` 内、現在金線アニメだけが描かれている部分
- **方法**: `next/image fill` で背景に置き、その上に既存の金線アニメを重ねる

### 2. KPI セクションに背景
- **使う画像**: `/images/tax/09-kpi-bg.webp`
- **差し込む場所**: 「数字で見る」KPI セクション
- **方法**: セクション背景にフル幅で配置、KPI数字を上に重ねる

### 3. サービス4種にアイコン
- **使う画像**:
  - 顧問契約 → `/images/tax/05-icon-advisory.svg`
  - 税務申告 → `/images/tax/06-icon-tax-return.svg`
  - 補助金 → `/images/tax/07-icon-grant.svg`
  - 資金調達 → `/images/tax/08-icon-funding.svg`
- **差し込む場所**: Services セクション、各カードの S01-S04 ラベルの近く
- **方法**: SVG を `size-10` で右上に配置、金色で

### 4. Column 各記事にサムネ
- **使う画像**:
  - 1記事目 → `/images/tax/10-blog-thumb-01.webp`
  - 2記事目 → `/images/tax/11-blog-thumb-02.webp`
  - 3記事目 → `/images/tax/12-blog-thumb-03.webp`
- **差し込む場所**: Column セクションのリスト、各 `<li>` 左端に小さなサムネ画像
- **方法**: `size-20` の正方形サムネを日付の左に配置

### 5. 「事務所」セクション新設
- **使う画像**: `/images/tax/02-office.webp`（事務所内観）
- **差し込む場所**: Profile セクションと Column の間
- **見出し**: 「四ツ谷の、小さな事務所」
- **本文**: 立地・雰囲気の説明

### 6. 打ち合わせ風景を Profile に追加
- **使う画像**: `/images/tax/03-meeting.webp`（手元のみの打ち合わせ）
- **差し込む場所**: Profile 右側の Portrait の下、または Profile セクション自体を 2 写真構成にする

## Phase B — 追加生成すべき画像

### 14-trust-handshake.webp — 信頼の握手シーン

| 項目 | 値 |
|---|---|
| **サイズ** | 1920 × 1280 (3:2) |
| **配置先** | `public/images/tax/14-trust-handshake.webp` |
| **使用場所** | CTA セクション or Services 上部のキービジュアル |

```
Photorealistic editorial photograph of two business professionals shaking hands across a wooden desk, only hands and lower forearms visible (no faces), one wearing a crisp white shirt cuff with subtle silver watch, the other in soft blue dress shirt, soft natural side light, refined and trustworthy atmosphere, navy notebook visible at edge, Japanese business publication style, Kodak Portra 160, 50mm f/2.8, --ar 3:2 --style raw
```

### 15-cta-bg.webp — CTA セクション背景

| 項目 | 値 |
|---|---|
| **サイズ** | 2880 × 1620 (16:9) |
| **配置先** | `public/images/tax/15-cta-bg.webp` |

```
Photorealistic deep navy blue refined office background, a single brass desk lamp casting warm soft light onto an open notebook with a fountain pen and a glass of water, soft directional light from the right, no people, no text, contemplative late evening business atmosphere, Kodak Portra 160, 50mm f/4, --ar 16:9 --style raw
```

### 16-team-process.webp — チーム・プロセス写真

| 項目 | 値 |
|---|---|
| **サイズ** | 1440 × 1800 (4:5) |
| **配置先** | `public/images/tax/16-team-process.webp` |
| **使用場所** | 新規「ご支援の流れ」セクション、または Services の補強 |

```
Photorealistic editorial photograph from a high angle of three pairs of hands collaborating around a large wooden table: a tablet showing graphs (intentionally blurred so no readable numbers), an open notebook with handwritten Japanese notes, scattered documents, two coffee cups, soft natural daylight from a large window, sense of professional teamwork, no faces visible, Kodak Portra 160, 35mm f/4, --ar 4:5 --style raw
```

## 期待される情報密度の変化

| セクション | 現状 | Phase A 後 | Phase A + B 後 |
|---|---|---|---|
| Hero | 紺地+金線アニメ | + 背景写真 | 同左 |
| KPI | 数字のみ | + 紺地背景写真 | 同左 |
| Services | 文字＋ホバー反転 | + 4つ金色アイコン | 同左 |
| Profile | 画像あり | + 打ち合わせ手元写真 | 同左 |
| (新) Office | なし | 事務所内観カット | 同左 |
| Column | 文字リンク | 各記事に小サムネ | 同左 |
| (新) Process | なし | なし | チーム手元の俯瞰 |
| CTA | 紺地テキスト | 流用 | 専用CTA背景 |
