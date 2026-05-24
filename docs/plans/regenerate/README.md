# 画像再生成ガイド（Regenerate）

`docs/plans/images/` の初回指示で生成された画像は **抽象的なミニマルアート（CG）**になってしまい、写真として使えるものではありませんでした。本ディレクトリではそれらを**フォトリアルな写真品質**で差し替えるための詳細プロンプトを業種別にまとめます。

## 推奨する画像生成サービス

写真クオリティが必要なので、テキスト→画像生成は以下を推奨します（精度順）。

| 用途 | サービス | 理由 |
|---|---|---|
| **第一候補** | **Flux 1.1 Pro / FLUX.1 [dev]** | フォトリアル写真に強い。人物・建築・料理ともバランス◎、現状最強クラス |
| 次点 | Midjourney v6.1（`--style raw` 必須） | 雰囲気のある写真表現が得意。`--ar` でアスペクト制御 |
| 補助 | DALL·E 3（GPT-4o経由） | プロンプトの忠実度が高く、細かい指定が効く |
| 大量バッチ | Stable Diffusion XL + Photo系LoRA | コスト最小、ローカル可。要LoRA選定 |

**SVG（線画アイコン）** は別系統。GPT-4o の Vector / Recraft.ai か、Figma 手動仕上げを推奨。

## ファイル命名・配置の原則

| 項目 | 仕様 |
|---|---|
| 配置先 | `public/images/<site>/<連番-用途>.webp` |
| 主形式 | **WebP** quality 85（写真）／ **SVG**（アイコン・装飾） |
| サイズ | アスペクト比厳守。生成後、tinypng/squoosh で WebP 変換 |
| 命名 | 業種別 MD に明記された **既存ファイル名と完全一致** で差し替え（ソース側のパスは変更不要） |
| カラー | EXIFカラープロファイルは sRGB に統一 |

## 撮影品質トーン（全業種共通）

- **Photorealistic / Editorial photography** を必ず明記
- **35mm / 50mm / 85mm full-frame** カメラ感のレンズパースを指定
- **Natural light**（業種により例外あり：割烹／フィットネスはスタジオ照明）
- **Film grain（軽め）**、**Kodak Portra 400 / Fuji Pro 400H** のフィルムトーン参照
- **No watermark, no text, no logo, no signature** を強く指示
- **人物は顔出ししすぎない**（横顔・後ろ姿・手元中心）

## プロンプト書式テンプレート

各業種MDでは次の構成で各画像を記述します。

```markdown
### NN-filename.webp — 短い和名

| 項目 | 値 |
|---|---|
| **サイズ** | 横 × 縦 (アスペクト) |
| **配置先** | `public/images/<site>/NN-filename.webp` |
| **使用場所** | コンポーネントのどの位置 |
| **被写体** | 何を中心に写すか |
| **構図・カメラ** | アングル、焦点距離、被写界深度 |
| **光・時間帯** | ライティング、時間、温度感 |
| **スタイル** | フィルム参照、トーン、雰囲気 |
| **避ける** | NG 要素 |

**プロンプト (EN, copy-paste 用):**
```
Photorealistic editorial photograph of ... , 35mm lens, Kodak Portra 400 film grain, natural side light, shallow depth of field, no people / human shown from behind, no text, no watermark, no logo, no signage, --ar 16:9 --style raw
```

**Negative prompt (SDXL等):**
```
illustration, cartoon, 3d render, cgi, vector, abstract, low quality, blurry, watermark, text, logo, oversaturated, deformed hands
```
```

## ネガティブプロンプト（全業種共通の最低限）

```
illustration, cartoon, anime, 3d render, cgi, vector graphic, abstract geometric, minimalist art, low resolution, blurry, soft focus on whole image, watermark, text, logo, signature, brand name, oversaturated, plastic skin, deformed hands, extra fingers, distorted face, cluttered, busy background
```

## アスペクト比早見表

| 用途 | 比率 | 推奨ピクセル |
|---|---|---|
| ヒーロー（フル幅） | 16:9 | 2880×1620 |
| ヒーロー（縦長スマホ重視） | 4:5 | 1440×1800 |
| ギャラリー・カード | 4:5 or 1:1 | 1200×1500 or 1200×1200 |
| 横長セクション | 3:2 | 1920×1280 |
| OGP | 1.91:1 | 1200×630 |

## 業種別 MD インデックス

| ファイル | 業種 | 主要トーン |
|---|---|---|
| [01_minpaku.md](01_minpaku.md) | 民泊・町家ステイ | 静謐・和・深緑×真鍮 |
| [02_travel.md](02_travel.md) | 旅行斡旋 | シネマティック・地平線 |
| [03_restaurant.md](03_restaurant.md) | 和食割烹 | 漆黒×金・暖色シズル |
| [04_kids.md](04_kids.md) | 親子教室 | 明るい・自然光・温かみ |
| [05_salon.md](05_salon.md) | 美容サロン | 上品・生成り×テラコッタ |
| [06_chiro.md](06_chiro.md) | 整体院 | 清潔・青緑・安心 |
| [07_tax.md](07_tax.md) | 税理士事務所 | 端正・紺×金 |
| [08_construction.md](08_construction.md) | 工務店 | 重厚・木目×錆 |
| [09_dental.md](09_dental.md) | 歯科クリニック | 白・ミント・余白 |
| [10_pet.md](10_pet.md) | ペットサロン | 親しみ・ココアブラウン |
| [11_organic.md](11_organic.md) | オーガニックEC | クラフト・モスグリーン |
| [12_fitness.md](12_fitness.md) | フィットネスジム | 黒×ネオン・力強い |
| [13_portfolio.md](13_portfolio.md) | 実績一覧トップ | サムネ12枚＋共通 |

## 運用フロー

1. 業種MDを参照し、上記プロンプトを画像生成サービスに投入
2. 生成画像を tinypng/squoosh で WebP（quality 85）に変換
3. **既存と同じファイル名**で `public/images/<site>/` に上書き保存
4. ブラウザリロードで反映確認（Next.jsは `unoptimized: true` なので即時反映）
5. ビルド `pnpm exec next build` で 404 がないことを確認

## 一括差し替え時の注意

- 各業種で **ヒーロー1枚 → 主要セクション → カード** の順で優先生成
- 1業種完成 → ブラウザ確認 → 次の業種 のループが安全
- 画像生成サービスでクレジット切れに注意（特に Midjourney/Flux）
