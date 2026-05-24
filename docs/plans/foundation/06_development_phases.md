# 06 開発フェーズ

全サンプル12本を一気に作るのは非効率。段階的に立ち上げ、CWでも早めに実績アピールできる状態を作る。

## Phase 0: 基盤セットアップ（半日）

- [ ] `pnpm create next-app` で初期化（TypeScript / Tailwind / App Router / pnpm）
- [ ] Tailwind v4 設定、`globals.css` にデザイントークン
- [ ] Lenis プロバイダ実装（`src/app/providers.tsx`）
- [ ] Framer Motion / GSAP / ScrollTrigger 導入
- [ ] `src/lib/animations/` に共通レシピ実装（fadeUp, stagger, MagneticButton, SplitText）
- [ ] `<PortfolioBadge />` 共通実装
- [ ] `next.config.ts` を静的書き出し設定
- [ ] Cloudflare Pages 連携、空デプロイ成功確認

## Phase 1: ショーケース3本（最優先）

CWで「とりあえず見せられる」状態を作るため、視覚インパクトの強い3業種を最優先で完成させる。

1. **旅行斡旋（/travel）** — 水平スクロール＋写真フル背景で一番派手
2. **飲食店・割烹（/restaurant）** — 黒×金で「高級感」演出の代表サンプル
3. **フィットネス（/fitness）** — 大胆タイポと色で「動き重視」アピール

完成と同時に `/` 実績一覧トップも公開し、Cloudflare Pages URL をクラウドワークスプロフィールに貼付。

## Phase 2: 信頼系・親しみ系を追加（+5本）

提案できる業種を広げる第二弾。

4. 民泊（/minpaku）
5. 美容サロン（/salon）
6. 親子教室（/kids）
7. 歯科クリニック（/dental）
8. 税理士（/tax）

## Phase 3: 残り全業種で完成（+4本）

9. 整体・治療院（/chiro）
10. 工務店・建築（/construction）
11. ペットサロン（/pet）
12. オーガニックEC（/organic）

## 各サイト1本あたりの作業フロー

1. 該当の `sites/1X_*.md` をレビュー
2. 対応する `images/1X_*_images.md` をCodexに投げて画像生成 → `public/images/<site>/` に配置
3. 業種ルートディレクトリ作成、`layout.tsx` でテーマ・フォント定義
4. ヒーロー→主要セクション→お問い合わせの順にページ実装
5. GSAP / Framer Motion で計画書の◎アニメーションを実装
6. レスポンシブ調整（スマホでアニメ過剰にならないよう intensities を絞る）
7. Lighthouse 計測、Performance 90+ を目安に調整
8. デプロイして実機（スマホ含む）確認
9. `sites/90_portfolio_index.md` の一覧に追加

## 各サイトの目安工数

- 1サイト = 集中作業で1〜2日
- 12サイト合計 = 約3週間〜1ヶ月（Phase 1を最初の1週間で完成させる目安）

## 完成判定基準（DoD）

各サンプルが以下を満たしたら "公開可"：

- [ ] トップ・主要・お問い合わせの3ページ以上
- [ ] ヒーローを含む3箇所以上の主要アニメーション
- [ ] モバイルレイアウト崩れなし、`prefers-reduced-motion` 対応
- [ ] Lighthouse Performance 90+（モバイル）
- [ ] `<PortfolioBadge />` で一覧へ戻れる
- [ ] `/` 実績一覧からリンクされている
- [ ] OGP画像とtitle/descriptionが設定済
