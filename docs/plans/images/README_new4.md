# 追加4サイトの画像生成（Codex 向け まとめ）

既存12サイトに加え、以下4サイトを追加実装した。
各指示書を読み込んで、`public/images/<slug>/` に画像を書き出すこと。
共通ルールは [`00_image_generation_guide.md`](./00_image_generation_guide.md) を参照。

| # | サイト | スラッグ | 指示書 |
|---|---|---|---|
| 22 | 温泉旅館「湯守 月白」 | `/ryokan` | [`22_ryokan_images.md`](./22_ryokan_images.md) |
| 23 | ベーカリー「麦と灯」 | `/bakery` | [`23_bakery_images.md`](./23_bakery_images.md) |
| 24 | ヨガ「NAGI」 | `/yoga` | [`24_yoga_images.md`](./24_yoga_images.md) |
| 25 | コワーキング「AXIS Studios」 | `/coworking` | [`25_coworking_images.md`](./25_coworking_images.md) |

## ポートフォリオサムネ（必須）

各サイト指示書の `16-thumb.webp` を、合わせて `public/images/portfolio/` にもコピーして配置。
ファイル名はそれぞれ：

- `public/images/portfolio/thumb-ryokan.webp`
- `public/images/portfolio/thumb-bakery.webp`
- `public/images/portfolio/thumb-yoga.webp`
- `public/images/portfolio/thumb-coworking.webp`

## 生成優先順位

1. 各サイトの **hero**（`01-*.webp`）→ 最初のスクロール印象
2. **thumb**（`16-*.webp`）→ ポートフォリオ一覧で表示される
3. メインビジュアル系（`02-*`, `06-*`, `09-*` あたり）
4. ディテール系（小物・道具）

hero と thumb が揃えば最低限ページとして見られる状態になる。
