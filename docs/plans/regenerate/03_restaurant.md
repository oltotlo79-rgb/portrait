# 03 飲食「割烹 黒文字」画像再生成プロンプト

対応サイト: `/restaurant`
配置先: `public/images/restaurant/`
ブランド: 割烹 黒文字 — 神楽坂のカウンター割烹（夜のみ営業）
カラーパレット: メイン `#0F0F0F`（漆黒）／アクセント `#B59154`（古銅）／文字 `#EFE9DD`

## 共通トーン

- **写真**: 高級和食誌（『Casa BRUTUS』『料理通信』）スタイル
- **フィルム参照**: Fuji Pro 400H pushed +1、Kodak Portra 800
- **レンズ**: 50mm マクロ（料理）／85mm（人物・空間）
- **光**: 暖色のスポットライト、ローキー、深い影
- **雰囲気**: 漆黒、シズル感、職人の手仕事、夜の静寂
- **避ける**: 明るいカジュアル感、若いキャッキャ感、西洋皿、看板POP

---

### 01-hero-noren-night.webp — ヒーロー：夜の暖簾

| 項目 | 値 |
|---|---|
| **サイズ** | 2880 × 1620 (16:9) |
| **使用場所** | トップヒーロー背景 |
| **被写体** | 暗い路地に灯る黒い暖簾、提灯 |

```
Photorealistic cinematic photograph of a small intimate kappo restaurant entrance at night in a Kagurazaka alley, Tokyo, a single dark indigo noren curtain hanging at the doorway with subtle off-white kanji characters faintly visible (slightly out of focus), a warm orange paper lantern glowing softly above, dark wooden facade, wet cobblestone alley reflecting the lantern light, deep shadows surrounding, only the entrance area illuminated, no people, mysterious and refined atmosphere, Cinestill 800T, 35mm lens f/2, --ar 16:9 --style raw
```

---

### 02-counter-overview.webp — カウンター全景

| 項目 | 値 |
|---|---|
| **サイズ** | 1920 × 1280 (3:2) |
| **被写体** | 一枚板の檜カウンター、10席、暖色照明 |

```
Photorealistic editorial photograph of an empty traditional Japanese kappo counter, a long single piece of polished hinoki cypress wood counter (over 4 meters), ten dark wooden bar stools, three small individual warm pendant lights hanging from above the counter, the open kitchen area in the background with the silhouette of glass jars and ceramic bowls on shelves, deep black background, soft glowing pools of light on the counter, no people, atmospheric and refined, Kodak Portra 800, 35mm lens, low warm key lighting, --ar 3:2 --style raw
```

---

### 03-dish-hassun.webp — 料理：八寸 ★ 最重要：現状CG画像

| 項目 | 値 |
|---|---|
| **サイズ** | 1440 × 1800 (4:5) |
| **被写体** | 八寸盛り合わせ、季節の小品5種 |
| **構図** | 真俯瞰、漆器、影濃いめ |

```
Photorealistic top-down food photograph of a traditional Japanese kaiseki hassun course on a black lacquer (urushi) rectangular tray, beautifully arranged seasonal appetizers: simmered ginkgo nuts with chrysanthemum greens in a small white ceramic dish, thin slices of sea bream marinated in kombu kelp on a fan-shaped leaf, a single grilled crab claw, autumn persimmon and goma tofu, a small mound of salted ikura on a perilla leaf, garnished with a tiny maple leaf and pine needle, dramatic warm side lighting creating deep shadows, dark wooden table surface visible at edges, food photography by Yumi Yamashita / Casa Brutus magazine style, shot on a 50mm macro lens f/4, Fuji Pro 400H pushed, --ar 4:5 --style raw
```

**Negative追加**: `abstract dots, circles, geometric, modernist plating, western fine dining, microgreens, pretentious foam, dry ice smoke`

---

### 04-dish-wanmono.webp — 料理：椀物

| 項目 | 値 |
|---|---|
| **サイズ** | 1440 × 1800 (4:5) |

```
Photorealistic close-up food photograph of a traditional Japanese suimono soup served in a black lacquer bowl with gold inner lining, the lid (slightly tilted) revealing a clear dashi broth with a steamed turnip "snowball" in the center, a small piece of duck breast, a julienned yuzu citrus rind on top releasing visible steam, dark moody background, single warm spotlight from above-side, top-down 3/4 angle, hands of a chef just retracting from frame (only forearm visible), shot on 50mm macro, Fuji Pro 400H, deep blacks, --ar 4:5 --style raw
```

---

### 05-dish-mukouzuke.webp — 料理：向付（お造り）

| 項目 | 値 |
|---|---|
| **サイズ** | 1440 × 1800 (4:5) |

```
Photorealistic close-up food photograph of fresh sashimi (mukouzuke) arrangement: five thin slices of glistening akami tuna, three slices of pearly white squid scored with delicate knife marks, a single piece of bright orange salmon roe nigiri, a small mound of grated daikon and shiso leaf, served on a hand-formed white Hagi-yaki ceramic plate, top-down view, dark wooden table, warm side lighting, glistening freshness, top food magazine quality, 50mm macro lens, Fuji Pro 400H, --ar 4:5 --style raw
```

---

### 06-dish-yakimono.webp — 料理：焼物

| 項目 | 値 |
|---|---|
| **サイズ** | 1440 × 1800 (4:5) |

```
Photorealistic close-up food photograph of a perfectly grilled whole young yellowtail fish (wakasa-guji) with golden-crisp scales and skin, glistening with rendered fat, served on a small dark earthenware plate with a few grains of pink Himalayan salt, a tiny pile of crushed sansho pepper and a slice of charred sudachi citrus, a side angle showing the perfect Maillard crust, deep warm lighting, dark background, professional food magazine quality, 85mm lens f/2.8, Fuji Pro 400H, --ar 4:5 --style raw
```

---

### 07-dish-shime.webp — 料理：〆（土鍋ごはん）

| 項目 | 値 |
|---|---|
| **サイズ** | 1440 × 1800 (4:5) |

```
Photorealistic overhead food photograph of a small donabe clay rice pot with the wooden lid lifted off to one side, revealing perfectly cooked glistening white koshihikari rice topped with tiny chirimen-jako baby anchovies and shiso flowers, visible steam rising, a black bamboo rice paddle (shamoji) resting on the side, a small ceramic bowl of pickles (kō no mono) and a black lacquer bowl of clear soup partially in frame, dark wooden table, warm directional light, 50mm macro, Fuji Pro 400H, --ar 4:5 --style raw
```

---

### 08-chef-hands.webp — 大将の手元

| 項目 | 値 |
|---|---|
| **サイズ** | 1920 × 1280 (3:2) |
| **被写体** | 包丁で魚を捌く手元 |

```
Photorealistic editorial photograph of the hands of a Japanese chef in a traditional white double-breasted chef coat, mid-action of expertly slicing a fresh fish with a yanagiba sashimi knife on a hinoki wood cutting board, the knife mid-cut catching the warm overhead light, partial view of the cutting board and a small bowl of ice with prepared sashimi, the chef's white sleeve and a glimpse of forearm visible, no face shown, deep warm spotlight, dark blurred kitchen background, intense focus and craft, Kodak Portra 800, 50mm lens f/2.8, slight motion blur on the knife edge, --ar 3:2 --style raw
```

---

### 09-chef-portrait.webp — 大将ポートレート

| 項目 | 値 |
|---|---|
| **サイズ** | 1200 × 1500 (4:5) |
| **被写体** | 50代男性、白衣、横顔、モノクロ寄り |

```
Photorealistic editorial portrait of a Japanese chef in his early 50s, side profile facing right, wearing a crisp white double-breasted chef coat, short salt-and-pepper hair, calm focused expression looking down at his work just out of frame, weathered hands with subtle scars and calluses (faintly visible at bottom), single overhead warm spotlight creating dramatic chiaroscuro shadows, deep black background, no smile, dignified and serious, Japanese craft mastery, Kodak Portra 800 pushed, 85mm lens f/2, desaturated warm tones (semi-monochrome), --ar 4:5 --style raw
```

---

### 10-vessel-sake.webp — 酒器・徳利

| 項目 | 値 |
|---|---|
| **サイズ** | 1000 × 1000 (1:1) |

```
Photorealistic still life photograph of a traditional Japanese sake set: a small ceramic flask (tokkuri) with a subtle blue-grey glaze, two small ochoko cups (one half-filled with clear sake catching the light), placed on a polished black lacquer (urushi) tray, warm directional spotlight from upper right, deep black background, glistening reflections on the lacquer, single perfect droplet of sake on the rim of one cup, refined still-life food photography, Kodak Portra 400, 85mm macro f/2.8, --ar 1:1 --style raw
```

---

### 11-vessel-bowl.webp — 器・小鉢

| 項目 | 値 |
|---|---|
| **サイズ** | 1000 × 1000 (1:1) |

```
Photorealistic still life photograph of a single hand-formed Mashiko-yaki ceramic small bowl with a soft beige and rust-brown ash glaze, the natural imperfections of the rim visible, placed on a dark weathered wooden surface, deep warm spotlight casting one side in glow and the other in shadow, intimate scale, no food inside (empty bowl), textural close-up showing the clay grain, Kodak Portra 400, 85mm macro f/4, dark background, --ar 1:1 --style raw
```

---

### 12-vessel-chopsticks.webp — 器・箸置き

| 項目 | 値 |
|---|---|
| **サイズ** | 1000 × 1000 (1:1) |

```
Photorealistic still life close-up photograph of a single pair of black lacquer chopsticks (hashi) resting on a small natural pebble chopstick rest (hashi-oki), placed on a clean black lacquer surface, warm directional light from one side, deep black background, minimal and refined still-life, slight reflection on the lacquer surface, Kodak Portra 400, 85mm macro f/4, --ar 1:1 --style raw
```

---

### 13-interior-detail.webp — 内装ディテール

| 項目 | 値 |
|---|---|
| **サイズ** | 1920 × 1280 (3:2) |

```
Photorealistic interior architecture photograph of a refined Japanese kappo restaurant detail: a section of an aged wooden ceiling with exposed beams, a small recessed alcove (tokonoma) with a single hanging scroll of black calligraphy and a simple ikebana arrangement of one branch, warm low light from a paper-shaded lamp casting soft shadows, dark wooden walls, atmospheric and quiet, no people, no signs, Kodak Portra 800, 35mm lens, --ar 3:2 --style raw
```

---

### 14-ogp.webp — OGP

```
Cinematic photograph of a dark indigo noren curtain at the entrance of a small Japanese kappo restaurant at night, warm orange paper lantern glow, atmospheric and refined, no text, no logo, --ar 1200:630 --style raw
```

---

## SVG装飾

### deco-noren-curtain.svg

```
Minimal SVG vector graphic of a Japanese noren curtain seen from below, three vertical fabric panels with gentle hand-drawn fold lines, deep indigo to black gradient, ink-bleed edges at the bottom, transparent background, --ar 720:300
```

### deco-brushword.svg

毛筆風の太い縦書きストローク2本（実テキストは入れず、書の「あたり」のみ）。
古銅色 `#B59154`。
