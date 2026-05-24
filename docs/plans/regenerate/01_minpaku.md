# 01 民泊「やまどり庵」画像再生成プロンプト

対応サイト: `/minpaku`
配置先: `public/images/minpaku/`
ブランド: やまどり庵 — 京都西陣の1日1組町家ステイ
カラーパレット: メイン `#3F4A3C`（深緑）／アクセント `#C9A063`（真鍮）／背景 `#F4EDE3`（生成り）

## 共通トーン

- **写真**: Photorealistic editorial photography / Travel magazine style
- **フィルム参照**: Kodak Portra 400 もしくは Fuji Pro 400H
- **レンズ**: 35mm / 50mm full-frame、絞り f/2.8 〜 f/4
- **時間帯**: 早朝・夕暮れ・日中の柔らかい時間
- **雰囲気**: 静謐、和、人の気配なし or 後ろ姿、シニア向け上質感
- **避ける**: 観光客、英語の派手な看板、ネオン、現代的な車両、CG感

---

### 01-hero-dusk.webp — ヒーロー外観

| 項目 | 値 |
|---|---|
| **サイズ** | 2880 × 1620 (16:9) |
| **使用場所** | トップヒーロー背景 |
| **被写体** | 京都・西陣の二階建て町家、夕暮れの正面 |
| **構図** | 路地の中央から町家正面を仰ぎ気味に、格子と暖簾 |
| **光** | マジックアワーの橙色、暖簾内側からほのかな提灯あかり |
| **スタイル** | フィルム写真、シネマティック、低彩度 |
| **避ける** | 観光客、英語看板、自販機、エアコン室外機の目立つ写り込み |

```
Photorealistic editorial photograph of a traditional Kyoto Nishijin machiya townhouse exterior at twilight, two stories, dark cedar wood lattice (kōshi) facade, deep indigo noren curtain hanging at the entrance, soft warm glow of paper lanterns from inside, narrow stone-paved alleyway, soft magic-hour orange sky, no people visible, atmospheric and quiet, shot on Kodak Portra 400 with a 35mm lens, shallow depth of field, cinematic, muted color palette of deep green and brass tones, --ar 16:9 --style raw
```

---

### 02-courtyard-moss.webp — 中庭（坪庭）

| 項目 | 値 |
|---|---|
| **サイズ** | 1920 × 1280 (3:2) |
| **使用場所** | サブセクション・季節カードの参照 |
| **被写体** | 苔むした坪庭、つくばい、紅葉の枝 |
| **構図** | 縁側から坪庭を見下ろす自然な視点 |
| **光** | 朝の柔らかい斜光、こもれび |
| **スタイル** | 和の静謐、Wabi-sabi、軽い湿気感 |

```
Photorealistic editorial photograph of a small Japanese inner courtyard garden (tsubo-niwa) covered in lush green moss, a single stone water basin (tsukubai) with bamboo ladle, a delicate red maple branch overhead, soft morning side light, gentle dew on the moss, viewed from the wooden veranda (engawa), wabi-sabi atmosphere, no people, shot on Fuji Pro 400H with a 50mm lens, --ar 3:2 --style raw
```

---

### 03-room-ume.webp — 客室「梅の間」 ★ 最重要：現状CG画像

| 項目 | 値 |
|---|---|
| **サイズ** | 1920 × 1280 (3:2) |
| **使用場所** | トップ「客室」セクション、rooms ページ |
| **被写体** | 12畳和室、床の間に椿一輪、障子、畳 |
| **構図** | 部屋の入口から斜め、床の間が右奥に見える |
| **光** | 障子越しの朝の拡散光、畳の縞模様が見える程度 |
| **スタイル** | 旅館写真誌『家庭画報』風、静的、整いすぎず生活感あり |

```
Photorealistic editorial photograph of a serene 12-tatami traditional Japanese guest room in a Kyoto machiya, golden tatami floor with visible weave, off-white shoji paper sliding doors filtering soft morning light, a tokonoma alcove on the right with a single red camellia (tsubaki) in a simple ceramic ikebana vase and a hanging calligraphy scroll, low wooden writing desk (bun-zukue), futon bedding folded neatly, no people, viewed diagonally from the entrance, calm and contemplative, shot on Kodak Portra 400 with a 35mm lens, f/4, soft diffused window light, magazine quality, --ar 3:2 --style raw
```

---

### 04-room-kiri.webp — 客室「桐の間」 ★ 最重要：現状CG画像

| 項目 | 値 |
|---|---|
| **サイズ** | 1920 × 1280 (3:2) |
| **使用場所** | トップ「客室」セクション、rooms ページ |
| **被写体** | 二間続きの和室、欄間越しに坪庭、西日 |
| **構図** | 手前の8畳から奥の6畳を見通す、欄間が画面上部 |
| **光** | 夕方の西日が畳に長く伸びる |
| **スタイル** | 余韻のある夕方の光景、影を活かす |

```
Photorealistic editorial photograph of a two-room connected traditional Japanese guest room in a Kyoto townhouse, viewed from an 8-tatami front room looking through to a 6-tatami back room, ornate openwork transom (ramma) above the doorway, low-angle warm western afternoon sunlight streaming across the tatami floor creating long shadows, glimpse of a moss courtyard through an open shoji at the back, no people, peaceful and contemplative, shot on Fuji Pro 400H with a 35mm lens, f/4, golden hour mood, --ar 3:2 --style raw
```

---

### 05-breakfast.webp — 朝食膳

| 項目 | 値 |
|---|---|
| **サイズ** | 1440 × 1800 (4:5) |
| **使用場所** | 体験／食事セクション |
| **被写体** | 漆塗りの黒盆に小鉢5点、湯豆腐、土鍋ごはん |
| **構図** | 真俯瞰、ナチュラルなずらし配置 |
| **光** | 朝の柔らかい自然光、白い湯気 |
| **スタイル** | 和食フードフォト、小料理店ブログ風 |

```
Photorealistic overhead food photograph of a traditional Kyoto-style breakfast tray on a black lacquer base, featuring a small donabe clay pot of steamed rice with wooden lid slightly ajar showing steam, five small ceramic dishes containing yudofu tofu in dashi broth, grilled salted salmon, marinated daikon, miso soup in a black bowl, pickled plums, and seasonal greens, soft morning natural light from the side, wooden table surface visible, top-down view, no people, no text, shot on a 50mm macro lens, --ar 4:5 --style raw
```

---

### 06-season-spring.webp — 春・桜

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 1500 (4:5) |
| **使用場所** | 季節ギャラリー |
| **被写体** | 町家の格子越しに見える桜、花びらが舞う |

```
Photorealistic close-up photograph of soft pink cherry blossom (sakura) branches seen through a traditional dark wooden kōshi lattice window of a Kyoto machiya, gentle petals falling, slightly out of focus pink bokeh, natural daylight, dreamy and quiet, no people, Kodak Portra 400 film grain, 50mm f/2.8, --ar 4:5 --style raw
```

---

### 07-season-summer.webp — 夏・風鈴と簾

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 1500 (4:5) |

```
Photorealistic photograph of a traditional Japanese summer scene: a single clear glass wind chime (furin) hanging from the eaves of a machiya, a bamboo blind (sudare) lowered in the background, deep green courtyard visible behind, soft evening light, gentle motion blur on the wind chime tongue, atmospheric and humid summer feel, no people, Fuji Pro 400H, 85mm lens, --ar 4:5 --style raw
```

---

### 08-season-autumn.webp — 秋・苔と紅葉

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 1500 (4:5) |

```
Photorealistic close-up photograph of bright red Japanese maple (momiji) leaves resting on a deep green moss-covered ground in a Kyoto tsubo-niwa courtyard garden, low evening sun casting warm amber light, single fallen leaf in focus center, shallow depth of field, no people, Kodak Portra 400, 50mm f/2, --ar 4:5 --style raw
```

---

### 09-season-winter.webp — 冬・雪の夜

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 1500 (4:5) |

```
Photorealistic photograph of a Kyoto machiya at night during light snowfall, soft snow on the tiled roof, the warm orange glow of a paper lantern by the entrance, shoji screen glowing yellow from inside, quiet snow-dampened street with a dusting of white, no people, cinematic, Kodak Portra 800 pushed +1, 35mm lens, --ar 4:5 --style raw
```

---

### 10-experience-tea.webp — 体験：朝の茶

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 1500 (4:5) |
| **被写体** | 抹茶を点てる手元、茶釜、茶筅 |

```
Photorealistic close-up photograph of hands whisking matcha green tea in a black raku tea bowl using a bamboo whisk (chasen), iron tea kettle (chagama) and bamboo ladle visible in background, soft side morning light from a shoji window, hands only visible from forearm down, calm and focused atmosphere, no full face, Fuji Pro 400H, 85mm macro, f/2.8, --ar 4:5 --style raw
```

---

### 11-experience-walk.webp — 体験：路地散歩

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 1500 (4:5) |
| **被写体** | 西陣の路地を歩く後ろ姿（顔は写らない） |

```
Photorealistic photograph of a single person from behind, wearing a soft beige kimono, walking down a narrow stone-paved Kyoto Nishijin alleyway between wooden machiya townhouses, warm late afternoon sunlight on the alley walls, no face visible, peaceful and contemplative, Kodak Portra 400, 35mm f/4, --ar 4:5 --style raw
```

---

### 12-experience-textile.webp — 体験：西陣織

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 1500 (4:5) |
| **被写体** | 機織り機の手元、糸の質感 |

```
Photorealistic close-up photograph of weathered hands operating a traditional Nishijin-ori wooden floor loom, brightly colored silk threads in deep red, gold and indigo on the loom, fine textile texture visible, soft natural light from a side window, only hands visible from the wrist, hands of an experienced craftsperson with subtle wrinkles, no full body, Kodak Portra 400, 85mm f/4, --ar 4:5 --style raw
```

---

### 13-access-map.png — アクセスマップ装飾

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 900 (4:3) |
| **形式** | PNG（透過不要） |
| **被写体** | 京都中心部の手描き風マップ |
| **スタイル** | 墨色の細線、和紙テクスチャ、装飾的 |

```
Hand-drawn illustrated map of central Kyoto in Japanese ink (sumi) wash style, soft beige washi paper background, thin elegant black brush-line streets, small mountain icons for the northern hills, traditional landmark icons (temples, gates) in minimal silhouette style, a single small red dot indicating the Nishijin area, no text labels, parchment aesthetic, hand-drawn imperfect lines, vintage cartographic feel, --ar 4:3
```

---

### 14-ogp.webp — OGP

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 630 (1.91:1) |
| **被写体** | 01のクロップ、暖簾を中心に |
| **メモ** | 文字は焼き込まない（Next.js側で重ねる場合あり） |

```
Photorealistic photograph of a deep indigo noren curtain hanging at the entrance of a Kyoto machiya at dusk, warm lantern glow on either side, dark wooden lattice visible, atmospheric and quiet, no people, no text, no logo, cinematic, Kodak Portra 400, 50mm, --ar 1200:630 --style raw
```

---

## SVG装飾（GPT-4o Vector / Recraft / 手描き）

### deco-brushline.svg

深緑 `#3F4A3C` の太い筆ストローク 1 本。横長 600 × 80 pt。墨が滲んだ毛筆風。

### deco-noren-stroke.svg

暖簾の上端カーブ（波線 3 本）。横幅 720pt、左右に滲み。

```
Minimal SVG vector graphic in deep green ink color (#3F4A3C), a single brush stroke depicting the soft curving top edge of a traditional Japanese noren curtain with subtle ink bleed on the ends, three gentle horizontal wave lines below to indicate folds, hand-drawn calligraphy ink texture, transparent background, --ar 720:80
```
