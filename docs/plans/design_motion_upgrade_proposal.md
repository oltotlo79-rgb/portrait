# デザイン / モーション強化 改修提案

作成日: 2026-05-25

対象: Next.js App Router で構築された Web 制作サンプル集（`/` と各業種ページ）

## 目的

現状のサイトは、16 業種のサンプルを一通り閲覧できる構成と、Framer Motion / GSAP / Lenis による基本的なリッチ表現を備えている。一方で、以下の点を強化すると「Claude で作ったサンプル」から「制作依頼前に品質を想像できるポートフォリオ」へ引き上げられる。

- 業種ごとの世界観を、色・写真・書体だけでなく「動きの文法」で差別化する
- トップページを単なるカード一覧ではなく、制作力を体験できるインタラクティブな索引にする
- アニメーションを派手に増やすのではなく、意味・導線・パフォーマンスを保ったままリッチ化する
- ハードコードされた数値、色、配列、タイミングを整理し、今後サイト追加しても破綻しない設計にする
- サンプルフォームや外部リンク、画像、メタ情報の安全性と保守性を上げる

## 現状の主な観察

### 良い点

- `src/lib/animations/` に `FadeIn`, `RevealText`, `Tilt3D`, `MagneticButton`, `LenisProvider` があり、共通化の土台がある。
- `MotionConfig reducedMotion="user"` と `prefers-reduced-motion` CSS があり、モーション低減への配慮が始まっている。
- `site-config.ts` に業種ごとの `primary`, `accent`, `thumb`, `status` が集約され、トップページのカード生成には向いている。
- 各業種ページに写真素材が十分あり、視覚表現の伸びしろが大きい。
- `next.config.ts` は静的 export 前提でシンプル。Cloudflare Pages で扱いやすい。

### 課題

- トップページの体験が「ヒーロー + カード一覧」に留まり、制作会社ポートフォリオとしての独自性が弱い。
- 業種ページごとの実装が `Top.tsx` / `Hero.tsx` に大きく寄り、配列データ・色・余白・タイミングがコンポーネント内に散在している。
- `FitnessHero` と `CoworkingTop` のグリッチ演出など、似たロジックが重複している。
- アニメーション値の多くが `0.7`, `1.6`, `5400`, `i * 0.06`, `clamp(...)`, `rgba(...)` などとして直接書かれており、意図や再利用単位が読み取りにくい。
- フォームはモックとしては十分だが、実装拡張時に備えた `zod` スキーマ、入力長制限、送信先の抽象化、スパム対策の計画がまだ薄い。
- `Image` は `unoptimized: true` で静的 export しやすいが、画像枚数が多いため LCP / CLS / decode 負荷の管理方針が必要。

## 改修コンセプト

### 全体コンセプト: Interactive Design Atlas

トップページを「業種別サンプル一覧」ではなく、「業種ごとの世界観を比較できるデザイン地図」にする。

- サンプルカードをただ並べるのではなく、業種を `Hospitality`, `Lifestyle`, `Professional`, `Local Business`, `Wellness`, `Retail` などのクラスターで見せる。
- ホバー / フォーカス時に、配色チップ、使用フォント、モーション強度、制作目的を即座に見せる。
- スクロールするほど、業種ごとのトーンが連続的に変わるようにする。
- 依頼者が「自分の業種はどの方向性が合うか」を直感的に判断できる UI にする。

### モーション方針: Motion With Intent

リッチ化の対象を 4 種類に分け、乱用を避ける。

| 種類 | 用途 | 例 |
|---|---|---|
| Narrative motion | 世界観を作る | 旅サイトの背景切替、旅館の障子影、ベーカリーの粉塵 |
| Structural motion | 情報構造を伝える | カード展開、セクション遷移、横スクロール比較 |
| Feedback motion | 操作に反応する | ボタン吸着、カード傾き、フィルター切替 |
| Ambient motion | 雰囲気を足す | 粒子、光、ノイズ、微細なパララックス |

原則として、重要 CTA と本文可読性を邪魔する常時アニメーションは避ける。常時動く要素は 1 ビューにつき 1〜2 種類までに制限する。

## 具体的なデザイン改修案

### 1. トップページ `/` の全面強化

対象ファイル:

- `src/app/page.tsx`
- `src/lib/site-config.ts`
- `src/components/shared/`
- 新規: `src/app/_components/PortfolioHero.tsx`
- 新規: `src/app/_components/IndustryAtlas.tsx`
- 新規: `src/app/_components/IndustryPreviewCard.tsx`
- 新規: `src/app/_components/DesignRadar.tsx`

#### 1-1. ヒーローを「制作サンプルの入り口」から「比較体験」に変える

現在:

- 黒背景
- 英文見出し
- 短い説明文

提案:

- 左側に大きなコピー、右側に選択中業種のライブプレビューを重ねる。
- 背景は固定色ではなく、選択中の業種 `primary` / `accent` から CSS 変数で変化させる。
- マウス移動に合わせて、業種サムネイルの小さな断片が奥行きを持って浮遊する。
- CTA は `サイトを見る` だけでなく `業種を比較する`, `制作相談する` の 2 系統にする。

具体 UI:

- H1: `業種ごとの「選ばれ方」をデザインする。`
- Sub: `民泊、士業、美容、飲食、EC、ジムまで。見た目だけでなく、導線・信頼感・予約行動まで設計したサンプル集。`
- 右側: 3 枚の業種プレビューを `position: absolute` で重ね、スクロールまたは自動で主役が入れ替わる。
- 下部: `16 industries / static export / motion-rich / mock forms` のような制作仕様バッジ。

実装方針:

- `sites` に `category`, `motionProfile`, `tone`, `features` を追加する。
- ヒーローの選択状態はクライアントコンポーネントに閉じ込め、データ自体は `site-config.ts` から読む。
- 色変更は style 直書きではなく CSS カスタムプロパティ `--atlas-primary`, `--atlas-accent` に流す。

#### 1-2. カード一覧を「Industry Atlas」にする

現在:

- 1 カラム / 2 カラム / 3 カラムのカードグリッド
- `Tilt3D` と画像拡大

提案:

- 上部にカテゴリフィルターを置く。
- 各カードに以下を表示する。
  - 業種名
  - サイト名
  - 制作意図
  - Motion intensity: `Quiet`, `Medium`, `Bold`, `Experimental`
  - CTA type: `予約`, `問い合わせ`, `購入`, `来店`, `資料請求`
  - Color chips: primary / accent / background
- ホバー時はカードが少し開き、サムネイル上に「導線設計」「世界観」「フォーム種別」が 3 行で出る。
- キーボードフォーカス時にも同じ情報が見えるようにし、hover 依存にしない。

`site-config.ts` 拡張案:

```ts
export type SiteCategory =
  | "hospitality"
  | "food"
  | "wellness"
  | "professional"
  | "retail"
  | "local";

export type MotionIntensity = "quiet" | "medium" | "bold" | "experimental";

export type ConversionGoal =
  | "booking"
  | "contact"
  | "purchase"
  | "visit"
  | "lead";

export type SiteConfig = {
  slug: string;
  name: string;
  industryEn: string;
  industryJa: string;
  catch: string;
  primary: string;
  accent: string;
  background: string;
  thumb: string;
  status: SiteStatus;
  category: SiteCategory;
  motionIntensity: MotionIntensity;
  conversionGoal: ConversionGoal;
  designKeywords: readonly string[];
};
```

#### 1-3. 「Design Radar」で各業種の違いを見える化

トップページに、各サイトの方向性を比較する小さなチャートを追加する。

評価軸:

- Trust: 信頼感
- Warmth: 親しみ
- Luxury: 高級感
- Energy: 躍動感
- Craft: 手仕事感
- Conversion: 行動誘導の強さ

実装:

- SVG で 6 軸レーダーを描画する。
- 外部 chart ライブラリは追加しない。表現が小さいため、SVG コンポーネントで十分。
- 数値は `0..5` の整数に限定し、`site-config.ts` の `designScores` に格納する。
- 色は選択中サイトの `accent` を使う。
- `aria-hidden` にせず、近くにテキストの要約も置く。

### 2. 業種ページの独自性強化

全ページに同じ派手さを足すのではなく、業種ごとに「1 つの記憶に残る演出」を設計する。

| ルート | 現状傾向 | 追加する象徴演出 | 実装方針 |
|---|---|---|---|
| `/minpaku` | 和・町家 | 暖簾をくぐるページ入場 | CSS mask + `clip-path`。初回表示のみ。 |
| `/travel` | 写真切替 | 旅程カードが地図線上を進む | `motion.path` と `stroke-dashoffset`。画像は現状維持。 |
| `/restaurant` | 黒・割烹 | カウンター照明が料理に落ちる | CSS radial gradient を section ごとに変化。 |
| `/kids` | ポップ | 手描きステッカーが弾む | deterministic な座標配列。ランダム生成は禁止。 |
| `/salon` | 上品・美容 | ヘアラインのような流線 | SVG path + CSS variable で低負荷に動かす。 |
| `/chiro` | 清潔・治療 | 姿勢ラインの before/after | スクロールで線が整う SVG。医療表現は誇大にしない。 |
| `/tax` | 信頼・士業 | 書類の罫線が整列する | 細線の reveal。数字は実績ではなくサンプル明記。 |
| `/construction` | 職人・住宅 | 図面線から写真へ変わる | blueprint SVG overlay を opacity で切替。 |
| `/dental` | 明るい歯科 | 診療フローの曲線ナビ | `position: sticky` のステップ表示。 |
| `/pet` | やわらかい | 予約ステップで小さな足跡が進む | SVG アイコンを CSS offset-path で移動。 |
| `/organic` | クラフト EC | 商品カードの紙ラベル感 | hover でラベルがめくれる。ただし購入導線は固定。 |
| `/fitness` | ネオン・強さ | スクロール速度に反応するタイポ | 既存 `ScrollVelocityBanner` を拡張。 |
| `/ryokan` | 静謐・月 | 月相と湯気のアンビエント | CSS gradients + opacity。常時動作は弱く。 |
| `/bakery` | 朝・温度 | 焼き上がり時間に沿うタイムライン | 既存 schedule を sticky timeline 化。 |
| `/yoga` | 呼吸 | 呼吸サイクルに同期する余白 | CTA 周辺のみゆっくり scale / opacity。 |
| `/coworking` | テック | グリッド UI と稼働状況パネル | 数字カードに軽い counter。実績はサンプル表記。 |

### 3. 写真 / ビジュアル表現の増強

#### 3-1. サムネイルの統一品質

トップページのカードは、現状 `thumb-*.webp` を使用している。以下のルールで品質を揃える。

- 全サムネイルを同じアスペクト比 `4/5` で統一。
- 主役が中央 60% に収まる構図にする。
- テキストをサムネイル画像内に焼き込まない。
- 黒オーバーレイ前提の暗い写真に偏らせず、業種ごとの明度差を残す。

#### 3-2. 画像ロード方針

- 各ページの hero 画像のみ `priority`。
- hero 以外は `loading="lazy"` のデフォルトに任せる。
- ファーストビュー内の重ね画像は 3 枚まで。
- アンビエント用の粒子やテクスチャは CSS / SVG を優先し、動画は使わない。
- 静的 export のため、画像最適化はビルド前生成または `public/images` の手動最適化で管理する。

## アニメーション設計の改修案

### 1. モーション値をトークン化する

新規ファイル:

- `src/lib/animations/tokens.ts`

案:

```ts
export const motionDurations = {
  instant: 0.15,
  fast: 0.35,
  normal: 0.7,
  slow: 1.1,
  scene: 1.6,
} as const;

export const motionStaggers = {
  tight: 0.035,
  normal: 0.08,
  loose: 0.16,
} as const;

export const motionViewport = {
  early: { once: true, amount: 0.2 },
  normal: { once: true, amount: 0.35 },
  late: { once: true, amount: 0.55 },
} as const;

export const motionSpring = {
  soft: { damping: 28, stiffness: 220, mass: 0.5 },
  snappy: { damping: 24, stiffness: 420, mass: 0.35 },
  cursor: { damping: 28, stiffness: 320, mass: 0.4 },
} as const;
```

移行対象:

- `FadeIn.tsx` の `amount = 0.3`, `delay = 0`
- `RevealText.tsx` の `staggerChildren: 0.035`, `duration: 0.9`
- `Tilt3D.tsx` の `perspective: 1000`, spring 値
- `CustomCursor.tsx` の spring 値
- 各 `Top.tsx` の `duration`, `delay`, `clamp` 値

### 2. 重複演出を共通コンポーネント化する

新規:

- `src/lib/animations/GlitchText.tsx`
- `src/lib/animations/AmbientParticles.tsx`
- `src/lib/animations/KineticMarquee.tsx`
- `src/lib/animations/ScrollProgressPath.tsx`
- `src/components/shared/FormField.tsx`

#### `GlitchText`

既存の `FitnessHero` と `CoworkingTop` の `Math.random()` ベースのグリッチを統合する。

要件:

- `seed`, `amplitudeX`, `amplitudeY`, `steps`, `intervalMs` を props 化。
- `prefers-reduced-motion` 時は実行しない。
- `Math.random()` ではなく、固定 seed から座標配列を生成する。
- 初回表示だけ動かす。常時点滅させない。

#### `AmbientParticles`

ベーカリーの粉塵、旅館の湯気、キッズのステッカーなどを統一的に扱う。

要件:

- `count` は最大 24。
- 座標は `seed` で決定。
- `aria-hidden` と `pointer-events-none` を固定。
- reduced motion では opacity の静止表示か非表示にする。
- 粒子 DOM が多くなりすぎないよう、ページごと 1 インスタンスまで。

#### `KineticMarquee`

既存 `ScrollVelocityBanner` を汎用化する。

要件:

- 配列 `items`
- `durationSeconds`
- `direction`
- `pauseOnHover`
- `ariaHidden`
- 2 セット複製による無限ループの構造は維持する。

### 3. GSAP の責務を限定する

Framer Motion と GSAP が混在しているため、責務を明確にする。

- Framer Motion: 表示 / 非表示、hover、tap、レイアウト遷移、React state と連動する表現。
- GSAP: scroll scrub、pin、SVG path drawing、複数要素の時間軸制御。
- CSS animation: 常時ゆっくり動く light / noise / background。

禁止方針:

- 同じ要素の `transform` を Framer Motion と GSAP の両方から同時に触らない。
- ScrollTrigger の対象要素に Tailwind hover transform を重ねない。
- `will-change` を常時付けっぱなしにしない。hover 中、または animation 中の対象に限定する。

## コード品質 / アーキテクチャ改善

### 1. データと表示の分離

現状、`Top.tsx` 内に `LINEUP`, `SCHEDULE`, `PLANS`, `FACILITIES` などの配列が混在している。小規模なら問題ないが、今後の品質向上ではデータを分離する。

推奨構成:

```text
src/app/[site]/_data/
  content.ts
  navigation.ts
  forms.ts
src/app/[site]/_components/
  Hero.tsx
  Sections.tsx
  ContactForm.tsx
```

ただし一括移行は不要。修正対象ページから順に移す。

優先:

1. `fitness`
2. `coworking`
3. `bakery`
4. `yoga`
5. `travel`

理由:

- モーションが強い
- 配列データが多い
- 改修時の破綻リスクが高い

### 2. サイト共通型の強化

`site-config.ts` は現在トップページ表示に必要な最小情報のみ。トップページ強化のため、以下を追加する。

```ts
type HexColor = `#${string}`;

type DesignScores = {
  trust: 0 | 1 | 2 | 3 | 4 | 5;
  warmth: 0 | 1 | 2 | 3 | 4 | 5;
  luxury: 0 | 1 | 2 | 3 | 4 | 5;
  energy: 0 | 1 | 2 | 3 | 4 | 5;
  craft: 0 | 1 | 2 | 3 | 4 | 5;
  conversion: 0 | 1 | 2 | 3 | 4 | 5;
};
```

`primary` / `accent` は `HexColor` にする。ただし完全な HEX バリデーションは TypeScript 型だけでは不十分なので、必要なら `scripts/validate-site-config.ts` を追加する。

### 3. CSS 変数を業種 layout で使い切る

`globals.css` には `--site-bg`, `--site-fg`, `--site-muted`, `--site-accent` があるが、各ページでは直接 HEX が多い。

改善:

- 各 `layout.tsx` でページ単位の CSS 変数を定義する。
- コンポーネントでは `bg-site-bg`, `text-site-fg`, `text-site-accent` を優先する。
- 業種固有で必要な色だけ `--site-accent-2`, `--site-surface`, `--site-line` のように追加する。

例:

```tsx
<body
  style={{
    "--site-bg": "#0A0E1A",
    "--site-fg": "#FFFFFF",
    "--site-accent": "#00E5FF",
    "--site-surface": "#101522",
  } as React.CSSProperties}
>
```

注意:

- App Router の nested layout では `body` を複数持てないため、実際にはページ root の `<main>` または最上位 wrapper に CSS 変数を流す。
- 型安全にするなら `SiteThemeVars` 型を作る。

### 4. コンポーネント粒度

以下の粒度を基準にする。

- `Hero`: 1 ページに 1 つ。ページ固有でよい。
- `Section`: 業種固有の見せ場。データ配列は外へ逃がす。
- `Motion primitive`: 汎用化する。`src/lib/animations`。
- `UI primitive`: フォーム、ラベル、ボタン、チップ。`src/components/shared`。
- `One-off visual`: ページ固有 SVG / overlay。無理に共通化しない。

共通化しすぎると独創性が落ちるため、汎用化は「同じロジックが 2 回以上出たもの」に限定する。

## マジックナンバー取り扱い

### トークン化する数値

| 種類 | 現状例 | 移行先 |
|---|---|---|
| アニメーション duration | `0.7`, `1.6`, `2` | `motionDurations` |
| stagger | `i * 0.06`, `0.08` | `motionStaggers` |
| viewport amount | `0.3`, `0.5` | `motionViewport` |
| spring | `damping: 18`, `stiffness: 200` | `motionSpring` |
| z-index | `9999`, `10000` | `src/lib/styles/layers.ts` |
| container width | `max-w-6xl`, `max-w-7xl` | Tailwind は許容。ただし方針を docs に明記 |
| repeated min-height | `min-h-[680px]`, `min-h-[720px]` | `heroMinHeight` 定数または CSS class |
| interval | `5400`, `80`, `90` | `motionTimings` |

### 直接書いてよい数値

- Tailwind の一般的な spacing: `px-6`, `py-24`, `gap-6`
- 個別ビジュアルの一回限りの構図調整: `object-position`, `top-[12%]`
- CSS `clamp()` のページ固有タイトルサイズ。ただし複数箇所で繰り返すなら class 化する。

### 命名例

```ts
export const heroMotion = {
  sceneIntervalMs: 5400,
  imageCrossfadeSeconds: 1.6,
  titleDelaySeconds: 0.4,
} as const;

export const cursorLayers = {
  ring: 9999,
  dot: 10000,
} as const;
```

## セキュリティ / 安全性

### 1. フォーム

現在はモックで実送信しない。今後送信機能を入れる場合は以下を必須にする。

- `zod` で入力値を検証する。
- `name`, `email`, `tel`, `memo` に最大長を設定する。
- `memo` は HTML として描画しない。
- 送信 API を作る場合、Cloudflare Pages Functions か外部フォームサービスを使う。
- Bot 対策として honeypot field と送信間隔制限を入れる。
- 送信完了メッセージに、入力内容をそのまま反映しない。
- サンプルサイトでは「実際の送信は行われません」の表示を維持する。

共通スキーマ案:

```ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(120),
  tel: z.string().trim().max(30).optional(),
  memo: z.string().trim().max(1000).optional(),
  website: z.string().max(0).optional(), // honeypot
});
```

### 2. リンク

- 外部リンクを追加する場合は `target="_blank"` と `rel="noopener noreferrer"` をセットにする。
- `mailto:` の subject は `encodeURIComponent` した値を使う。
- `href` をユーザー入力から組み立てない。

### 3. 画像 / SVG

- 外部 SVG をそのまま `dangerouslySetInnerHTML` で挿入しない。
- `public/images` に置く SVG は信頼できるものだけにする。
- AI 生成画像や外部素材を追加する場合は、ライセンスと人物表現の使用可否を `docs/plans/images/` に記録する。
- `next/image` の `alt` は装飾なら空文字、意味があるなら具体名にする。

### 4. 依存関係

- 新しいアニメーションライブラリは原則追加しない。既存の Framer Motion / GSAP で足りる。
- 追加が必要な場合は、bundle size、メンテナンス状況、ライセンス、SSR 対応を確認する。
- `pnpm audit` は定期的に実行する。ただし false positive は issue 化して判断する。

## パフォーマンス / アクセシビリティ

### パフォーマンス予算

目標:

- Lighthouse Performance: 90+
- LCP: 2.5s 未満
- CLS: 0.05 未満
- INP: 200ms 未満
- JS の増加: 1 改修フェーズあたり +30KB gzip 未満を目安

方針:

- hero 以外の画像に `priority` を付けない。
- 無限ループアニメーションは transform / opacity のみ。
- particle DOM は 24 個以下。
- ScrollTrigger はページごとに必要最小限。未使用ページでは読み込まない。
- `ResizeObserver`, `mousemove`, `scroll` イベントは throttle / requestAnimationFrame で制御する。

### アクセシビリティ

- `prefers-reduced-motion` では、Lenis、粒子、グリッチ、長い marquee を停止する。
- カード hover 情報は focus でも表示する。
- CTA は icon-only にしない。アイコンを使う場合もテキストラベルを併記する。
- 背景画像上のテキストは contrast ratio 4.5:1 を基準にする。
- `button` と `a` の役割を混同しない。ページ遷移は `Link`、フォーム送信は `button`。
- `aria-hidden` は装飾要素だけに使う。
- カスタムカーソルがあっても標準フォーカスリングは消さない。

## 実装フェーズ

### Phase 1: 基盤整理

目的: リッチ化前に破綻しやすい値と重複を整理する。

作業:

- `src/lib/animations/tokens.ts` を追加。
- `FadeIn`, `RevealText`, `Tilt3D`, `CustomCursor`, `LenisProvider` の数値を token 参照へ移行。
- `GlitchText`, `KineticMarquee`, `AmbientParticles` を追加。
- `FitnessHero`, `CoworkingTop`, `ScrollVelocityBanner`, `BakeryTop` の該当箇所だけ置き換える。
- `pnpm lint` と `pnpm build` を通す。

完了条件:

- 既存 UI の見た目が大きく崩れない。
- reduced motion で常時アニメーションが止まる。
- 重複グリッチ処理が消える。

### Phase 2: トップページ刷新

目的: ポートフォリオ全体の第一印象を上げる。

作業:

- `site-config.ts` に `category`, `motionIntensity`, `conversionGoal`, `designKeywords`, `designScores`, `background` を追加。
- `PortfolioHero`, `IndustryAtlas`, `IndustryPreviewCard`, `DesignRadar` を実装。
- 既存 `/` の section を差し替える。
- カテゴリフィルターとキーボード操作を実装。
- `aria-live` は使いすぎず、選択中カードの視覚更新を中心にする。

完了条件:

- ファーストビューで「業種別サンプル集」だと即座に分かる。
- 3 秒以内に少なくとも 3 業種の個性が見える。
- マウスなしでも全カードにアクセスできる。

### Phase 3: 代表 5 ページの演出強化

対象:

1. `/travel`
2. `/fitness`
3. `/bakery`
4. `/coworking`
5. `/ryokan`

理由:

- 写真・モーションとの相性が高い。
- ポートフォリオで印象に残りやすい。
- 宿泊 / 旅行 / 飲食 / テック / 健康系の見本として幅が出る。

作業:

- 各ページに象徴演出を 1 つ追加。
- 既存 CTA とフォーム導線を動きで邪魔しない。
- 表示確認は desktop 1440px / tablet 768px / mobile 390px で行う。

### Phase 4: 残りページの整合

対象:

- `/minpaku`
- `/restaurant`
- `/kids`
- `/salon`
- `/chiro`
- `/tax`
- `/construction`
- `/dental`
- `/pet`
- `/organic`
- `/yoga`

作業:

- 業種ごとの象徴演出を追加。
- 色の CSS 変数化を進める。
- data 配列の分離を必要なページから実施。
- 画像 alt / CTA / フォーム表記を見直す。

### Phase 5: 品質確認

作業:

- `pnpm lint`
- `pnpm build`
- Lighthouse 計測
- モバイル表示確認
- reduced motion 確認
- キーボード操作確認
- 画像の missing / alt 確認

チェックリスト:

- ファーストビューに主役がある。
- CTA が見つけやすい。
- 文字が画像に埋もれていない。
- モーションが多すぎて本文が読みにくくない。
- hover だけに重要情報を置いていない。
- サンプルの架空情報が実在情報に見えない。

## 具体タスク一覧

### 共通

- [ ] `src/lib/animations/tokens.ts` を作成する。
- [ ] `src/lib/styles/layers.ts` を作成し、カスタムカーソルの z-index を移す。
- [ ] `src/lib/animations/GlitchText.tsx` を作成する。
- [ ] `src/lib/animations/AmbientParticles.tsx` を作成する。
- [ ] `src/lib/animations/KineticMarquee.tsx` を作成する。
- [ ] `src/lib/animations/index.ts` の export を更新する。
- [ ] `site-config.ts` の型を拡張する。
- [ ] `docs/plans/foundation/03_design_system.md` に新しい design scores と motion intensity を追記する。
- [ ] `docs/plans/foundation/04_animation_strategy.md` に token 方針を追記する。

### トップページ

- [ ] `PortfolioHero` を追加する。
- [ ] `IndustryAtlas` を追加する。
- [ ] `IndustryPreviewCard` を追加する。
- [ ] `DesignRadar` を追加する。
- [ ] 既存カード一覧を Atlas へ置き換える。
- [ ] `mailto:` CTA の subject を定数化する。
- [ ] 画像 priority を hero preview のみに制限する。

### 代表ページ

- [ ] `/travel`: SVG route line と scene 切替を連動させる。
- [ ] `/fitness`: `GlitchText` と `KineticMarquee` に置き換える。
- [ ] `/bakery`: `AmbientParticles` と sticky schedule を導入する。
- [ ] `/coworking`: `GlitchText`、数字 counter、稼働状況パネルを追加する。
- [ ] `/ryokan`: 月相 / 湯気の控えめな ambient motion を追加する。

### フォーム / セキュリティ

- [ ] `src/lib/forms/contactSchema.ts` を作成する。
- [ ] 共通 `FormField`, `FormSelect`, `FormTextarea` を作成する。
- [ ] mock submit の完了表示を共通化する。
- [ ] honeypot field をフォーム構造に入れる。ただし現段階では送信しない。
- [ ] サンプル表記を全 contact ページに統一する。

## 受け入れ基準

### デザイン

- トップページを開いた瞬間に、現在より明確に「制作力の見本」だと分かる。
- 16 業種の差が、色と写真だけでなくレイアウト / モーション / 導線で分かる。
- 代表 5 ページに、それぞれ記憶に残る象徴演出がある。
- 派手なだけでなく、問い合わせや予約への導線が読み取りやすい。

### コード品質

- 同じアニメーションロジックがページ間で重複していない。
- 共通 animation token を使っている。
- data 配列が肥大化したコンポーネントは順次分離されている。
- TypeScript 型で site config の欠落に気づける。
- `pnpm lint` と `pnpm build` が通る。

### 保守性

- 新しい業種を追加する時、`site-config.ts` と該当 route 追加でトップページに反映できる。
- モーション強度やカテゴリをデータで変えられる。
- 画像や CTA の扱いが docs と一致している。

### セキュリティ

- ユーザー入力を HTML として描画しない。
- 外部リンクの `rel` が適切。
- フォーム送信を追加しても zod schema を通す設計になっている。
- サンプル情報と実在情報の誤認を避ける表記がある。

## 実装時の注意

- まずトップページを作り直す前に、animation token と共通部品を整える。
- 一度に全ページを変えない。代表 5 ページで表現と実装の型を固める。
- 「カードを増やす」「装飾を足す」方向ではなく、スクロール体験と比較体験を作る。
- `use client` は必要なコンポーネントだけに付ける。ページ全体をクライアント化しない。
- 画像・粒子・SVG を増やす時は、LCP と DOM 数を確認する。
- motion の数値を変更する時は、必ず `tokens.ts` かページ固有定数に名前を付ける。
- 見た目のためにフォームやリンクの semantic HTML を崩さない。

