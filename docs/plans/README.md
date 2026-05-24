# Portrait — クラウドワークス向けHP制作ポートフォリオ

クラウドワークスでホームページ制作案件を受注するための、複数業種サンプルサイト群の制作計画。

## 全体概要

- **目的**: HP制作実績ゼロからスタートしてクラウドワークスで受注できる状態にする
- **方針**: 1つのNext.jsアプリ内に12業種＋実績一覧ページを構築し、Cloudflare Pagesで一括公開
- **アピール軸**: 業種ごとの個性ある世界観 + リッチなスクロールアニメーションで「動く実績」として差別化

## ドキュメント構成

### 基盤（foundation/）
プロジェクト全体に共通する技術・設計の方針。

| ファイル | 内容 |
|---|---|
| [00_overview.md](foundation/00_overview.md) | ゴール、ターゲット、スコープ |
| [01_tech_stack.md](foundation/01_tech_stack.md) | Next.js / Tailwind / アニメーションライブラリ選定 |
| [02_directory_structure.md](foundation/02_directory_structure.md) | Next.js App Routerのディレクトリ設計 |
| [03_design_system.md](foundation/03_design_system.md) | 共通トークン、業種別カラーパレット一覧 |
| [04_animation_strategy.md](foundation/04_animation_strategy.md) | アニメーション全体方針とパターン辞書 |
| [05_deployment.md](foundation/05_deployment.md) | Cloudflare Pages静的書き出し手順 |
| [06_development_phases.md](foundation/06_development_phases.md) | フェーズ分割と着手順 |

### サイト別計画（sites/）
12業種＋実績一覧ページの個別仕様。

| ファイル | 業種 | ルート |
|---|---|---|
| [10_minpaku.md](sites/10_minpaku.md) | 民泊事業 | `/minpaku` |
| [11_travel_agency.md](sites/11_travel_agency.md) | 旅行斡旋業 | `/travel` |
| [12_restaurant.md](sites/12_restaurant.md) | 飲食店（和食割烹） | `/restaurant` |
| [13_kids_class.md](sites/13_kids_class.md) | 親子向け教室 | `/kids` |
| [14_beauty_salon.md](sites/14_beauty_salon.md) | 美容室・サロン | `/salon` |
| [15_chiropractic.md](sites/15_chiropractic.md) | 整体・治療院 | `/chiro` |
| [16_tax_accountant.md](sites/16_tax_accountant.md) | 税理士事務所 | `/tax` |
| [17_construction.md](sites/17_construction.md) | 工務店・建築 | `/construction` |
| [18_dental_clinic.md](sites/18_dental_clinic.md) | 歯科クリニック | `/dental` |
| [19_pet_salon.md](sites/19_pet_salon.md) | ペットサロン | `/pet` |
| [20_organic_ec.md](sites/20_organic_ec.md) | オーガニックEC | `/organic` |
| [21_fitness_gym.md](sites/21_fitness_gym.md) | フィットネスジム | `/fitness` |
| [90_portfolio_index.md](sites/90_portfolio_index.md) | 実績一覧（トップ） | `/` |

### 画像生成指示（images/）
各画像をCodexに生成させるための指示書。サイトごとに1ファイル。

| ファイル | 対象 |
|---|---|
| [00_image_generation_guide.md](images/00_image_generation_guide.md) | 共通の生成方針・命名規則・サイズ・避けるべき要素 |
| `10_minpaku_images.md` ～ `21_fitness_images.md` | 各サイト別の必要画像リストとプロンプト |
| `90_portfolio_images.md` | 実績一覧ページ用画像 |

## クイックリンク（重要な決定事項）

- **Next.js**: 15.x (App Router) + TypeScript
- **CSS**: Tailwind CSS v4
- **アニメーション**: Framer Motion + GSAP/ScrollTrigger + Lenis（スムーススクロール）
- **デプロイ**: Cloudflare Pages（`output: 'export'` による静的書き出し）
- **言語**: 日本語のみ
- **お問い合わせフォーム**: UIモックのみ（送信機能なし）
- **デザイン方針**: 業種ごとに個性を出す
- **ポートフォリオトップ**: 実績一覧ページのみ（自身の紹介ページは作らない）

## 次のステップ

1. `foundation/` の内容をレビュー → 承認
2. `sites/90_portfolio_index.md` から着手し、トップページの骨格を完成
3. 業種ごとに `sites/1X_*.md` を実装、対応する `images/1X_*.md` をCodexに渡して画像生成
4. 全サイト揃ったらCloudflare Pagesへデプロイ、URLをクラウドワーク提案文に貼付
