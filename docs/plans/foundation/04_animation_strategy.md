# 04 アニメーション戦略

「リッチアニメーション」を全サイトに搭載する。ただし統一感のために共通レシピを持ち、業種ごとに**強度と性格**を変える。

## レイヤー構造

```
1. グローバル
   ├ Lenis スムーススクロール（全サイト共通）
   └ NoiseOverlay / カーソル追従 dot（採用業種のみ）

2. ページ遷移
   └ App Router の `template.tsx` でFramer Motionによるフェード/スライド

3. セクション登場
   ├ GSAP ScrollTrigger でセクションごとにタイムライン
   └ 視差/ピン留め/水平スクロール

4. 要素単位
   ├ Framer Motion variants（FadeUp, StaggerChildren）
   ├ SplitText（GSAP）で文字単位入場
   └ MagneticButton, ホバーマイクロ

5. 状態遷移
   └ モーダル、ドロワー、アコーディオン
```

## 共通レシピ（再利用ライブラリ）

`src/lib/animations/` に下記を置き、各業種から呼ぶ。

### Framer Motion variants
```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16,1,0.3,1] } },
};
export const stagger = {
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
```

### GSAP factory
- `createHeroPinTimeline(ref)`: ヒーローをピン留めしながら背景画像をズーム＋テキストSplit解除
- `createHorizontalSection(ref, items)`: セクション全体を横スクロールに転用
- `createMarqueeLoop(ref)`: 自動横流れ
- `createScrollVelocityText(ref)`: スクロール速度で歪む文字

## 業種ごとの「強度プロファイル」

| 業種 | スクロール演出 | 入場アニメ | ホバー演出 | キャラクター |
|---|:-:|:-:|:-:|---|
| 民泊 | ◎ 視差・写真ピン | ○ Split | ○ 控えめ | 静謐・余韻 |
| 旅行 | ◎◎ 水平スクロール＋写真ズーム | ◎ Split＋マスク | ○ | 開放感・スピード |
| 飲食（割烹） | ◎ 暗転からじわり | ◎ 縦書きSplit | ○ | 重厚・余白美 |
| 親子教室 | ○ バウンス | ◎ ポップ＋Lottie | ◎ 弾む | 楽しい・温かい |
| 美容サロン | ◎ ピン＋スライド | ◎ Split | ◎ マグネット | 上品・滑らか |
| 整体・治療院 | ○ フェード中心 | ○ シンプル | ○ | 安心・清潔 |
| 税理士 | ○ 控えめ | ○ 直線的 | ○ | 信頼・端正 |
| 工務店 | ◎ 水平スクロール＋画像クリップ | ◎ 大胆Split | ○ | 力強い・職人 |
| 歯科 | ○ 余白＋スライド | ○ シンプル | ○ | 清潔・洗練 |
| ペットサロン | ○ バウンス＋Lottie | ◎ かわいい | ◎ | 親しみ・かわいい |
| オーガニックEC | ◎ 商品ピン＋パララックス | ◎ Split＋手書き線 | ◎ | クラフト・素朴 |
| フィットネス | ◎◎ スクロール速度連動 | ◎◎ 巨大タイポSplit | ◎ | 力強い・刺激的 |

◎◎ = 看板演出、◎ = 主軸、○ = 控えめ

## パフォーマンス指針

- ヒーローのバックグラウンド画像は `priority` + AVIF/WebP
- アニメーションする要素には `will-change` を**JSで動的に付け外し**
- ScrollTriggerの `markers: false`、`fastScrollEnd: true`
- 動画背景は使用しない（容量・Cloudflare Pagesの制約）
- `prefers-reduced-motion: reduce` を尊重し、Framer Motion `MotionConfig reducedMotion="user"` を全サイト適用
- Lighthouse Performance スコア 90+ を目安

## 各サイトでの記載

各 `sites/1X_*.md` には「このサイトで実装する具体アニメ」を3〜6個リストする（このファイルの共通レシピを参照してOK）。
