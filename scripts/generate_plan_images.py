from __future__ import annotations

import json
import math
import os
import random
import re
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
DOC_DIR = ROOT / "docs" / "plans" / "images"
OUT_DIR = ROOT / "public" / "images"

IMAGEGEN_RUN_ID = "019e5430-a9cf-7ca2-8338-9ffc992ec02f"
CODEX_HOME = Path(os.environ.get("CODEX_HOME", Path.home() / ".codex"))
IMAGEGEN_DIR = CODEX_HOME / "generated_images" / IMAGEGEN_RUN_ID

HERO_ORDER = [
    ("minpaku", "01-hero-dusk.webp"),
    ("travel", "01-hero-horizon.webp"),
    ("restaurant", "01-hero-noren-night.webp"),
    ("kids", "01-hero-classroom.webp"),
    ("salon", "01-hero-back.webp"),
    ("chiro", "01-hero-reception.webp"),
    ("tax", "01-hero-bg.webp"),
    ("construction", "01-hero-house.webp"),
    ("dental", "01-hero-light.webp"),
    ("pet", "01-hero-dog.webp"),
    ("organic", "01-hero-drone.webp"),
    ("fitness", "01-hero-bg.webp"),
]

PALETTES = {
    "minpaku": ("#1f2e25", "#40513f", "#c6a15b", "#efe2c7"),
    "travel": ("#0e2438", "#145b7a", "#d1a34f", "#dfe8ee"),
    "restaurant": ("#090806", "#251b14", "#b68245", "#f1d6a5"),
    "kids": ("#fff3df", "#ff8fa3", "#f3c94d", "#8ccbb3"),
    "salon": ("#eadfd1", "#b8896a", "#f6efe7", "#3b2f2a"),
    "chiro": ("#edf6f5", "#7daead", "#2e5266", "#d9e8e6"),
    "tax": ("#07172a", "#0e2a47", "#b4924c", "#f4efe5"),
    "construction": ("#2c2a28", "#6b4d34", "#c45d2e", "#d3c1a2"),
    "dental": ("#f7fbf8", "#8ed3cf", "#ffc9b3", "#5bb7b7"),
    "pet": ("#f4ded2", "#a37864", "#ffc97a", "#f08d84"),
    "organic": ("#293d25", "#5f7d42", "#d8c29d", "#b64c32"),
    "fitness": ("#050505", "#151515", "#ffe600", "#ff2b8a"),
    "portfolio": ("#0e0e0e", "#252525", "#f6f6f2", "#7a6f5d"),
}


@dataclass(frozen=True)
class Asset:
    site: str
    base_dir: Path
    filename: str
    size_text: str
    prompt: str

    @property
    def path(self) -> Path:
        return self.base_dir / self.filename

    @property
    def ext(self) -> str:
        return self.path.suffix.lower()


def parse_color(hex_color: str) -> tuple[int, int, int]:
    hex_color = hex_color.strip("#")
    return tuple(int(hex_color[i : i + 2], 16) for i in (0, 2, 4))


def mix(a: tuple[int, int, int], b: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    return tuple(int(a[i] * (1 - t) + b[i] * t) for i in range(3))


def rgba(hex_color: str, alpha: int = 255) -> tuple[int, int, int, int]:
    r, g, b = parse_color(hex_color)
    return (r, g, b, alpha)


def seed_for(*parts: str) -> int:
    value = 2166136261
    for part in parts:
        for ch in part:
            value ^= ord(ch)
            value = (value * 16777619) & 0xFFFFFFFF
    return value


def parse_size(size_text: str) -> tuple[int, int] | None:
    match = re.search(r"(\d+)\s*(?:x|\u00d7)\s*(\d+)", size_text, re.IGNORECASE)
    if not match:
        return None
    return int(match.group(1)), int(match.group(2))


def gradient(size: tuple[int, int], top: str, bottom: str, horizontal: bool = False) -> Image.Image:
    w, h = size
    a, b = parse_color(top), parse_color(bottom)
    if horizontal:
        strip = Image.new("RGB", (w, 1))
        px = strip.load()
        for x in range(w):
            px[x, 0] = mix(a, b, x / max(1, w - 1))
        return strip.resize((w, h))
    strip = Image.new("RGB", (1, h))
    px = strip.load()
    for y in range(h):
        px[0, y] = mix(a, b, y / max(1, h - 1))
    return strip.resize((w, h))


def add_noise(img: Image.Image, amount: float = 0.08, blur: float = 0.0) -> Image.Image:
    if amount <= 0:
        return img
    base = img.convert("RGBA")
    noise = Image.effect_noise(base.size, 28).convert("L")
    if blur:
        noise = noise.filter(ImageFilter.GaussianBlur(blur))
    alpha = ImageEnhance.Contrast(noise).enhance(1.5).point(lambda p: int(amount * 255))
    grain = Image.merge("RGBA", (noise, noise, noise, alpha))
    return Image.alpha_composite(base, grain).convert("RGBA")


def add_vignette(img: Image.Image, opacity: float = 0.3) -> Image.Image:
    w, h = img.size
    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    steps = 18
    for i in range(steps):
        alpha = int(opacity * 255 * (i / steps) ** 2)
        inset_x = int(w * i / steps / 2)
        inset_y = int(h * i / steps / 2)
        draw.rectangle((inset_x, inset_y, w - inset_x, h - inset_y), outline=(0, 0, 0, alpha), width=max(1, int(max(w, h) * 0.012)))
    return Image.alpha_composite(img.convert("RGBA"), layer)


def cover_resize(img: Image.Image, size: tuple[int, int]) -> Image.Image:
    w, h = size
    source = img.convert("RGB")
    scale = max(w / source.width, h / source.height)
    resized = source.resize((math.ceil(source.width * scale), math.ceil(source.height * scale)), Image.Resampling.LANCZOS)
    left = (resized.width - w) // 2
    top = (resized.height - h) // 2
    return resized.crop((left, top, left + w, top + h))


def save_image(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    ext = path.suffix.lower()
    if ext == ".webp":
        img.convert("RGB").save(path, "WEBP", quality=86, method=6)
    elif ext in {".jpg", ".jpeg"}:
        img.convert("RGB").save(path, "JPEG", quality=88, optimize=True, progressive=True)
    elif ext == ".png":
        img.save(path, "PNG", optimize=True)
    else:
        raise ValueError(f"Unsupported image extension: {path}")


def load_hero_sources() -> dict[tuple[str, str], Path]:
    mapping: dict[tuple[str, str], Path] = {}
    if IMAGEGEN_DIR.exists():
        generated = sorted(IMAGEGEN_DIR.glob("*.png"), key=lambda p: p.stat().st_mtime)
        recent = generated[-len(HERO_ORDER) :]
        if len(recent) == len(HERO_ORDER):
            mapping = {key: path for key, path in zip(HERO_ORDER, recent)}
    return mapping


def parse_assets() -> list[Asset]:
    assets: list[Asset] = []
    for md in sorted(DOC_DIR.glob("[12][0-9]_*_images.md")):
        if md.name.startswith("90_"):
            continue
        text = md.read_text(encoding="utf-8")
        dest_match = re.search(r"\u914d\u7f6e\u5148:\s*`([^`]+)`", text)
        if not dest_match:
            continue
        base_dir = ROOT / dest_match.group(1).replace("/", os.sep)
        site = base_dir.name
        seen: set[str] = set()
        for line in text.splitlines():
            if not line.startswith("|"):
                continue
            cols = [c.strip() for c in line.strip().strip("|").split("|")]
            if len(cols) < 6:
                continue
            if not re.fullmatch(r"\d+", cols[0]):
                continue
            name_match = re.search(r"`([^`]+)`", cols[1])
            if not name_match:
                continue
            filename = name_match.group(1)
            assets.append(Asset(site, base_dir, filename, cols[3], cols[5]))
            seen.add(filename)
        for filename, prompt in re.findall(r"-\s*`([^`]+\.(?:svg|json))`:\s*([^\n]+)", text):
            if filename not in seen:
                assets.append(Asset(site, base_dir, filename, "SVG", prompt))
                seen.add(filename)
    return assets


def draw_mountains(draw: ImageDraw.ImageDraw, w: int, h: int, palette: tuple[str, ...], rng: random.Random) -> None:
    for i in range(4):
        y = int(h * (0.42 + i * 0.08))
        points = [(0, h)]
        step = max(80, w // 8)
        for x in range(-step, w + step, step):
            points.append((x, y - rng.randint(20, int(h * 0.16))))
        points.append((w, h))
        col = parse_color(palette[min(i + 1, len(palette) - 1)])
        shade = tuple(max(0, c - i * 18) for c in col)
        draw.polygon(points, fill=shade)


def draw_bokeh(draw: ImageDraw.ImageDraw, w: int, h: int, colors: list[str], rng: random.Random, count: int = 36) -> None:
    for _ in range(count):
        r = rng.randint(max(8, w // 130), max(18, w // 45))
        x = rng.randint(-r, w + r)
        y = rng.randint(int(h * 0.2), h + r)
        draw.ellipse((x - r, y - r, x + r, y + r), fill=rgba(rng.choice(colors), rng.randint(28, 90)))


def draw_grid_floor(draw: ImageDraw.ImageDraw, w: int, h: int, color: str, alpha: int = 90) -> None:
    horizon = int(h * 0.45)
    for i in range(9):
        x = int(w * i / 8)
        draw.line((w // 2, horizon, x, h), fill=rgba(color, alpha), width=max(1, w // 420))
    for j in range(1, 9):
        y = int(horizon + (h - horizon) * (j / 9) ** 1.5)
        draw.line((0, y, w, y), fill=rgba(color, alpha), width=max(1, w // 520))


def draw_house(draw: ImageDraw.ImageDraw, w: int, h: int, palette: tuple[str, ...], rng: random.Random) -> None:
    ground = int(h * 0.72)
    draw.rectangle((0, ground, w, h), fill=rgba(palette[1], 190))
    x0, x1 = int(w * 0.18), int(w * 0.82)
    y0, y1 = int(h * 0.34), ground
    draw.rectangle((x0, y0, x1, y1), fill=rgba(palette[3], 210))
    roof = [(int(w * 0.12), y0), (int(w * 0.5), int(h * 0.2)), (int(w * 0.88), y0)]
    draw.polygon(roof, fill=rgba(palette[0], 240))
    for i in range(7):
        x = int(x0 + (x1 - x0) * (i + 0.5) / 7)
        draw.rectangle((x - w // 110, y0 + h // 25, x + w // 110, y1), fill=rgba(palette[1], 160))
    draw.rectangle((int(w * 0.44), int(h * 0.48), int(w * 0.56), y1), fill=rgba("#17120d", 190))


def draw_plate(draw: ImageDraw.ImageDraw, w: int, h: int, rng: random.Random, dark: bool = False) -> None:
    cx, cy = w // 2, h // 2
    r = int(min(w, h) * 0.32)
    plate = "#efe8dc" if not dark else "#17130f"
    rim = "#b59154" if dark else "#d0b98b"
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=rgba(plate, 245), outline=rgba(rim, 210), width=max(3, w // 160))
    for _ in range(22):
        rr = rng.randint(max(6, r // 20), max(12, r // 10))
        a = rng.random() * math.tau
        dist = rng.random() * r * 0.64
        x, y = int(cx + math.cos(a) * dist), int(cy + math.sin(a) * dist)
        color = rng.choice(["#8d2f1d", "#e8c66c", "#2f5f3e", "#f2ead1", "#4b2d22"])
        draw.ellipse((x - rr, y - rr, x + rr, y + rr), fill=rgba(color, 220))


def draw_person(draw: ImageDraw.ImageDraw, w: int, h: int, x: int, y: int, scale: float, color: str, alpha: int = 210) -> None:
    head = int(26 * scale)
    body_w = int(54 * scale)
    body_h = int(140 * scale)
    draw.ellipse((x - head, y - body_h - head * 2, x + head, y - body_h), fill=rgba(color, alpha))
    draw.rounded_rectangle((x - body_w, y - body_h, x + body_w, y), radius=max(4, body_w // 3), fill=rgba(color, alpha))


def draw_tools(draw: ImageDraw.ImageDraw, w: int, h: int, palette: tuple[str, ...], rng: random.Random) -> None:
    for i in range(7):
        x = int(w * (0.18 + 0.1 * i))
        draw.rounded_rectangle((x, int(h * 0.3), x + w // 34, int(h * 0.76)), radius=w // 70, fill=rgba(palette[2], 150))
    draw.line((int(w * 0.2), int(h * 0.72), int(w * 0.82), int(h * 0.24)), fill=rgba(palette[3], 210), width=max(4, w // 90))
    for _ in range(12):
        x = rng.randint(int(w * 0.12), int(w * 0.88))
        y = rng.randint(int(h * 0.22), int(h * 0.82))
        draw.ellipse((x - w // 55, y - w // 55, x + w // 55, y + w // 55), outline=rgba(palette[2], 160), width=max(2, w // 260))


def render_map(w: int, h: int, site: str, prompt: str) -> Image.Image:
    img = gradient((w, h), "#efe4cf", "#d8c39e")
    draw = ImageDraw.Draw(img, "RGBA")
    rng = random.Random(seed_for(site, prompt))
    for _ in range(16):
        pts = []
        y = rng.randint(0, h)
        for x in range(-100, w + 120, max(90, w // 8)):
            pts.append((x, y + rng.randint(-h // 8, h // 8)))
        draw.line(pts, fill=rgba("#4e4030", 130), width=max(3, w // 170), joint="curve")
    for _ in range(20):
        x, y = rng.randint(0, w), rng.randint(0, h)
        r = rng.randint(max(7, w // 110), max(18, w // 45))
        draw.rectangle((x - r, y - r, x + r, y + r), outline=rgba("#4e4030", 90), width=max(2, w // 420))
    draw.ellipse((int(w * 0.45), int(h * 0.42), int(w * 0.55), int(h * 0.56)), fill=rgba("#254032", 190))
    return add_noise(img, 0.07)


def render_texture(w: int, h: int, site: str, filename: str) -> Image.Image:
    if "concrete" in filename:
        img = gradient((w, h), "#8c8780", "#bbb4aa", horizontal=True)
        return add_noise(img.filter(ImageFilter.GaussianBlur(0.3)), 0.18)
    if "wood" in filename:
        img = gradient((w, h), "#a7794d", "#d3b17f", horizontal=True)
        draw = ImageDraw.Draw(img, "RGBA")
        rng = random.Random(seed_for(site, filename))
        for _ in range(85):
            y = rng.randint(0, h)
            draw.arc((-w // 4, y - h // 8, w + w // 4, y + h // 8), 0, 180, fill=rgba("#5d351d", 55), width=max(1, w // 600))
        return add_noise(img, 0.08)
    if "craft-bg" in filename:
        return add_noise(gradient((w, h), "#b8905f", "#cfad7a"), 0.14)
    if "grain" in filename or "texture" in filename:
        return add_noise(gradient((w, h), "#272727", "#141414"), 0.22)
    return add_noise(gradient((w, h), "#d7d0c6", "#a9a096"), 0.15)


def render_scene(site: str, filename: str, prompt: str, size: tuple[int, int]) -> Image.Image:
    w, h = size
    palette = PALETTES.get(site, PALETTES["portfolio"])
    rng = random.Random(seed_for(site, filename, prompt))

    if filename.endswith(".png") and ("map" in filename or "access" in filename):
        return render_map(w, h, site, prompt)
    if any(k in filename for k in ("texture", "grain", "craft-bg")):
        return render_texture(w, h, site, filename)
    if "scanline" in filename:
        return render_scanline(w, h)
    if "noise" in filename:
        return render_transparent_noise(w, h, 0.22)

    img = gradient((w, h), palette[0], palette[1], horizontal=site in {"tax", "fitness"})
    draw = ImageDraw.Draw(img, "RGBA")

    if site in {"travel", "organic", "construction"} and any(k in filename for k in ("hero", "dest", "case", "drone", "veg")):
        if "drone" in filename:
            for row in range(6):
                for col in range(8):
                    x0 = int(col * w / 8)
                    y0 = int(row * h / 6)
                    colr = rng.choice([palette[1], palette[2], "#3f5b36", "#7d8f54", "#5d703d"])
                    draw.polygon([(x0, y0), (x0 + w // 8, y0 + rng.randint(-20, 20)), (x0 + w // 8, y0 + h // 6), (x0, y0 + h // 6)], fill=rgba(colr, 190))
            draw.line((0, int(h * 0.58), w, int(h * 0.42)), fill=rgba("#5d4a31", 120), width=max(8, w // 80))
        elif any(k in filename for k in ("house", "exterior")):
            draw_mountains(draw, w, h, palette, rng)
            draw_house(draw, w, h, palette, rng)
        elif any(k in filename for k in ("living", "kitchen", "bedroom", "bath")):
            draw_grid_floor(draw, w, h, palette[2], 80)
            draw.rectangle((int(w * 0.08), int(h * 0.18), int(w * 0.92), int(h * 0.78)), outline=rgba(palette[3], 80), width=w // 100)
            draw.rectangle((int(w * 0.62), int(h * 0.2), int(w * 0.86), int(h * 0.52)), fill=rgba("#e8d6b3", 70))
            draw.rounded_rectangle((int(w * 0.18), int(h * 0.56), int(w * 0.54), int(h * 0.75)), radius=w // 50, fill=rgba(palette[2], 120))
        else:
            draw_mountains(draw, w, h, palette, rng)
            draw.rectangle((0, int(h * 0.72), w, h), fill=rgba(palette[2], 85))
            for _ in range(30):
                x = rng.randint(0, w)
                y = rng.randint(int(h * 0.52), h)
                r = rng.randint(max(5, w // 220), max(18, w // 70))
                draw.ellipse((x - r, y - r, x + r, y + r), fill=rgba(rng.choice([palette[1], palette[2], palette[3], "#d24d35"]), 160))

    elif site == "minpaku":
        if any(k in filename for k in ("courtyard", "season-autumn")):
            draw.rectangle((0, int(h * 0.18), w, h), fill=rgba("#1d3329", 210))
            for _ in range(95):
                x, y = rng.randint(0, w), rng.randint(int(h * 0.25), h)
                r = rng.randint(max(5, w // 300), max(22, w // 80))
                draw.ellipse((x - r, y - r, x + r, y + r), fill=rgba(rng.choice(["#2c4c35", "#3c643f", "#6f1f1b", "#b24a32"]), rng.randint(70, 180)))
            draw.ellipse((int(w * 0.42), int(h * 0.42), int(w * 0.58), int(h * 0.58)), fill=rgba("#6b6b60", 200))
        elif "breakfast" in filename:
            draw.rectangle((int(w * 0.08), int(h * 0.18), int(w * 0.92), int(h * 0.82)), fill=rgba("#1a110d", 225))
            for i in range(8):
                cx = int(w * (0.25 + (i % 4) * 0.17))
                cy = int(h * (0.34 + (i // 4) * 0.24))
                r = int(min(w, h) * 0.07)
                draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=rgba("#f2ead6", 230), outline=rgba("#c9a063", 160), width=max(2, w // 300))
        elif any(k in filename for k in ("room", "tea")):
            draw_grid_floor(draw, w, h, "#d9c28a", 120)
            for i in range(5):
                x = int(w * (0.18 + i * 0.14))
                draw.rectangle((x, int(h * 0.15), x + w // 11, int(h * 0.52)), fill=rgba("#f3ecd7", 85), outline=rgba("#8b714d", 95))
            draw.ellipse((int(w * 0.66), int(h * 0.58), int(w * 0.72), int(h * 0.64)), fill=rgba("#23211d", 190))
            draw.line((int(w * 0.68), int(h * 0.5), int(w * 0.69), int(h * 0.62)), fill=rgba("#51392b", 210), width=max(2, w // 240))
        elif "walk" in filename:
            draw_grid_floor(draw, w, h, "#c6a15b", 80)
            for i in range(2):
                x0 = i * int(w * 0.58) - int(w * 0.08)
                draw.rectangle((x0, int(h * 0.1), x0 + int(w * 0.42), h), fill=rgba("#2f382d", 150))
                for j in range(8):
                    draw.line((x0 + j * w // 18, int(h * 0.1), x0 + j * w // 18, h), fill=rgba("#c6a15b", 50), width=2)
            draw_person(draw, w, h, w // 2, int(h * 0.82), w / 1600, "#1e1a16", 210)
        else:
            draw_house(draw, w, h, palette, rng)

    elif site == "travel":
        if "train" in filename:
            draw.rectangle((int(w * 0.08), int(h * 0.1), int(w * 0.92), int(h * 0.9)), outline=rgba("#dfe8ee", 120), width=w // 70)
            draw_bokeh(draw, w, h, ["#f4b400", "#8ecae6", "#ffffff"], rng, 60)
            for _ in range(20):
                y = rng.randint(int(h * 0.3), int(h * 0.85))
                draw.line((rng.randint(0, w // 2), y, rng.randint(w // 2, w), y + rng.randint(-40, 40)), fill=rgba("#f4b400", 80), width=max(2, w // 260))
        elif any(k in filename for k in ("oldtown", "morocco")):
            draw_grid_floor(draw, w, h, "#d1a34f", 70)
            draw.rectangle((0, 0, int(w * 0.36), h), fill=rgba("#7a4d34", 190))
            draw.rectangle((int(w * 0.64), 0, w, h), fill=rgba("#845537", 190))
            draw_person(draw, w, h, w // 2, int(h * 0.82), w / 1500, "#17120e", 190)
        elif "concierge" in filename:
            draw.rectangle((0, int(h * 0.25), w, h), fill=rgba("#6f5337", 210))
            for i in range(3):
                x = int(w * (0.22 + i * 0.18))
                draw.rounded_rectangle((x, int(h * 0.34), x + int(w * 0.18), int(h * 0.64)), radius=w // 60, fill=rgba("#e3d4bd", 190))
            draw.ellipse((int(w * 0.68), int(h * 0.38), int(w * 0.78), int(h * 0.5)), fill=rgba("#2a1e17", 180))
        elif "portrait" in filename or "voice" in filename:
            draw_mountains(draw, w, h, palette, rng)
            draw_person(draw, w, h, int(w * 0.5), int(h * 0.78), w / 1200, "#06111d", 220)
        else:
            draw_mountains(draw, w, h, palette, rng)

    elif site == "restaurant":
        draw.rectangle((0, 0, w, h), fill=rgba("#080604", 255))
        if "counter" in filename:
            draw.polygon([(0, int(h * 0.64)), (w, int(h * 0.48)), (w, h), (0, h)], fill=rgba("#5a341d", 230))
            for i in range(10):
                x = int(w * (0.12 + i * 0.08))
                draw.ellipse((x, int(h * 0.54), x + w // 25, int(h * 0.62)), fill=rgba("#16100b", 210))
        elif "dish" in filename or "vessel" in filename:
            draw_plate(draw, w, h, rng, dark=True)
        elif "chef" in filename:
            draw.rectangle((int(w * 0.18), int(h * 0.56), int(w * 0.82), int(h * 0.7)), fill=rgba("#d8c6ab", 180))
            draw.line((int(w * 0.36), int(h * 0.48), int(w * 0.7), int(h * 0.6)), fill=rgba("#dedbd5", 210), width=w // 60)
            draw_person(draw, w, h, int(w * 0.52), int(h * 0.76), w / 1300, "#e9e2d5", 170)
        elif "interior" in filename:
            for i in range(8):
                y = int(h * (0.15 + i * 0.09))
                draw.line((0, y, w, y + rng.randint(-20, 20)), fill=rgba("#6b4429", 110), width=max(3, w // 180))
            draw.ellipse((int(w * 0.46), int(h * 0.28), int(w * 0.54), int(h * 0.42)), fill=rgba("#b68245", 120))
        else:
            draw.rectangle((int(w * 0.25), 0, int(w * 0.75), int(h * 0.56)), fill=rgba("#24170f", 240))
            for i in range(4):
                x = int(w * (0.28 + i * 0.12))
                draw.rectangle((x, int(h * 0.07), x + int(w * 0.09), int(h * 0.5)), fill=rgba("#c7b08c", 150))
            draw.ellipse((int(w * 0.42), int(h * 0.52), int(w * 0.58), int(h * 0.76)), fill=rgba("#b68245", 75))

    elif site == "kids":
        draw.rectangle((0, int(h * 0.55), w, h), fill=rgba("#d6aa77", 170))
        if "teacher" in filename:
            draw_person(draw, w, h, w // 2, int(h * 0.82), w / 1000, "#6f5a45", 210)
            draw.ellipse((int(w * 0.42), int(h * 0.2), int(w * 0.58), int(h * 0.34)), fill=rgba("#ead0b6", 230))
        elif "work" in filename:
            for _ in range(18):
                x, y = rng.randint(int(w * 0.15), int(w * 0.85)), rng.randint(int(h * 0.28), int(h * 0.7))
                r = rng.randint(w // 32, w // 14)
                draw.rounded_rectangle((x - r, y - r, x + r, y + r), radius=r // 3, fill=rgba(rng.choice([palette[1], palette[2], palette[3], "#6fb3d2"]), 190))
        elif "voice" in filename:
            for _ in range(22):
                x, y = rng.randint(0, w), rng.randint(0, h)
                r = rng.randint(w // 60, w // 25)
                draw.arc((x - r, y - r, x + r, y + r), 0, 280, fill=rgba(rng.choice([palette[1], palette[2], palette[3]]), 130), width=max(3, w // 250))
        else:
            for _ in range(24):
                x, y = rng.randint(int(w * 0.08), int(w * 0.92)), rng.randint(int(h * 0.35), int(h * 0.86))
                draw.ellipse((x - w // 45, y - w // 45, x + w // 45, y + w // 45), fill=rgba(rng.choice([palette[1], palette[2], palette[3], "#ffffff"]), 160))
            draw.rectangle((int(w * 0.12), int(h * 0.42), int(w * 0.88), int(h * 0.62)), fill=rgba("#b9835c", 180))

    elif site == "salon":
        if "interior" in filename:
            draw.rectangle((int(w * 0.1), int(h * 0.15), int(w * 0.9), int(h * 0.82)), fill=rgba("#f6efe7", 150))
            for i in range(3):
                x = int(w * (0.2 + i * 0.22))
                draw.rounded_rectangle((x, int(h * 0.34), x + w // 9, int(h * 0.68)), radius=w // 36, fill=rgba("#c8aa92", 180))
                draw.rectangle((x - w // 40, int(h * 0.18), x + w // 7, int(h * 0.34)), outline=rgba("#8f6a55", 100), width=w // 180)
        elif "tool" in filename:
            draw_tools(draw, w, h, palette, rng)
        elif "noise" in filename:
            return render_transparent_noise(w, h, 0.2)
        else:
            draw_person(draw, w, h, w // 2, int(h * 0.84), w / 1150, "#3b2f2a", 170)
            for i in range(9):
                x0 = int(w * 0.42 + i * w * 0.02)
                draw.arc((x0 - w // 6, int(h * 0.18), x0 + w // 7, int(h * 0.68)), 70, 280, fill=rgba("#5d4034", 150), width=max(2, w // 140))

    elif site == "chiro":
        if "doctor" in filename:
            draw_person(draw, w, h, w // 2, int(h * 0.82), w / 1050, "#2e5266", 210)
        elif "before-after" in filename:
            draw.line((int(w * 0.5), int(h * 0.18), int(w * 0.5), int(h * 0.82)), fill=rgba(palette[2], 90), width=w // 180)
            draw.arc((int(w * 0.2), int(h * 0.22), int(w * 0.42), int(h * 0.78)), 80, 280, fill=rgba(palette[2], 210), width=w // 70)
            draw.line((int(w * 0.68), int(h * 0.22), int(w * 0.68), int(h * 0.78)), fill=rgba(palette[2], 210), width=w // 70)
        elif "treatment" in filename:
            draw.rounded_rectangle((int(w * 0.12), int(h * 0.52), int(w * 0.88), int(h * 0.7)), radius=w // 40, fill=rgba("#ffffff", 230))
            draw.line((int(w * 0.28), int(h * 0.38), int(w * 0.64), int(h * 0.56)), fill=rgba(palette[2], 170), width=w // 60)
        else:
            draw.rectangle((int(w * 0.14), int(h * 0.36), int(w * 0.86), int(h * 0.64)), fill=rgba("#ffffff", 220))
            draw.ellipse((int(w * 0.68), int(h * 0.18), int(w * 0.82), int(h * 0.38)), fill=rgba("#7daead", 120))

    elif site == "tax":
        if any(k in filename for k in ("hero", "kpi", "blog")):
            for _ in range(14):
                x = rng.randint(0, w)
                draw.line((x, 0, x + rng.randint(-w // 5, w // 5), h), fill=rgba(palette[2], rng.randint(35, 90)), width=max(1, w // 450))
            for _ in range(5):
                y = rng.randint(0, h)
                draw.line((0, y, w, y + rng.randint(-20, 20)), fill=rgba("#f4efe5", 25), width=1)
        elif "meeting" in filename:
            draw.rectangle((0, int(h * 0.25), w, h), fill=rgba("#6f5a43", 150))
            for x in (0.24, 0.48, 0.64):
                draw.rounded_rectangle((int(w * x), int(h * 0.38), int(w * (x + 0.16)), int(h * 0.58)), radius=w // 70, fill=rgba("#f1eadc", 180))
            draw.ellipse((int(w * 0.75), int(h * 0.38), int(w * 0.86), int(h * 0.51)), fill=rgba("#24160d", 190))
        elif "office" in filename:
            draw.rectangle((int(w * 0.1), int(h * 0.22), int(w * 0.9), int(h * 0.75)), fill=rgba("#d5c0a0", 140))
            for i in range(9):
                draw.rectangle((int(w * (0.14 + i * 0.08)), int(h * 0.18), int(w * (0.18 + i * 0.08)), int(h * 0.5)), fill=rgba("#0e2a47", 100))
        else:
            draw_person(draw, w, h, w // 2, int(h * 0.82), w / 1100, "#f4efe5", 190)

    elif site == "dental":
        if "doctor" in filename:
            draw_person(draw, w, h, w // 2, int(h * 0.82), w / 1050, "#5bb7b7", 190)
        elif "family" in filename:
            draw_person(draw, w, h, int(w * 0.42), int(h * 0.82), w / 1450, "#5bb7b7", 180)
            draw_person(draw, w, h, int(w * 0.55), int(h * 0.82), w / 1900, "#ffc9b3", 180)
        elif "equipment" in filename:
            draw.rounded_rectangle((int(w * 0.24), int(h * 0.24), int(w * 0.76), int(h * 0.7)), radius=w // 30, fill=rgba("#ffffff", 220), outline=rgba(palette[3], 150), width=w // 120)
            draw.ellipse((int(w * 0.44), int(h * 0.38), int(w * 0.56), int(h * 0.5)), fill=rgba(palette[1], 120))
        else:
            draw.rectangle((int(w * 0.1), int(h * 0.22), int(w * 0.9), int(h * 0.78)), fill=rgba("#ffffff", 210))
            draw.ellipse((int(w * 0.64), int(h * 0.34), int(w * 0.86), int(h * 0.6)), fill=rgba(palette[1], 90))

    elif site == "pet":
        if "salon" in filename:
            draw.rounded_rectangle((int(w * 0.18), int(h * 0.52), int(w * 0.82), int(h * 0.68)), radius=w // 32, fill=rgba("#ffffff", 210))
            draw.ellipse((int(w * 0.38), int(h * 0.28), int(w * 0.62), int(h * 0.55)), fill=rgba("#a37864", 190))
        elif "staff" in filename:
            draw_person(draw, w, h, w // 2, int(h * 0.82), w / 1050, "#6b4b3d", 190)
            draw.ellipse((int(w * 0.56), int(h * 0.46), int(w * 0.72), int(h * 0.62)), fill=rgba("#f4ded2", 210))
        else:
            body = rng.choice(["#f0d5c6", "#d9b59f", "#3b302d", "#ffffff"])
            draw.ellipse((int(w * 0.26), int(h * 0.26), int(w * 0.74), int(h * 0.72)), fill=rgba(body, 225))
            draw.ellipse((int(w * 0.2), int(h * 0.22), int(w * 0.38), int(h * 0.42)), fill=rgba(body, 210))
            draw.ellipse((int(w * 0.62), int(h * 0.22), int(w * 0.8), int(h * 0.42)), fill=rgba(body, 210))

    elif site == "organic":
        if "farmer" in filename:
            if "hands" in filename:
                draw.rounded_rectangle((int(w * 0.18), int(h * 0.42), int(w * 0.82), int(h * 0.64)), radius=w // 30, fill=rgba("#8b6042", 210))
                for _ in range(90):
                    x, y = rng.randint(0, w), rng.randint(int(h * 0.52), h)
                    draw.ellipse((x - 3, y - 3, x + 3, y + 3), fill=rgba("#4b3728", 150))
            else:
                draw_person(draw, w, h, w // 2, int(h * 0.84), w / 1100, "#6b5a3c", 210)
        elif any(k in filename for k in ("product", "recipe", "veg")):
            draw.rectangle((int(w * 0.16), int(h * 0.24), int(w * 0.84), int(h * 0.76)), fill=rgba("#c7a776", 140))
            for _ in range(28):
                x, y = rng.randint(int(w * 0.22), int(w * 0.78)), rng.randint(int(h * 0.3), int(h * 0.7))
                r = rng.randint(w // 38, w // 16)
                draw.ellipse((x - r, y - r, x + r, y + r), fill=rgba(rng.choice([palette[1], palette[2], palette[3], "#82381f", "#f3ead4"]), 200))
        else:
            draw_mountains(draw, w, h, palette, rng)

    elif site == "fitness":
        draw.rectangle((0, 0, w, h), fill=rgba("#050505", 255))
        for _ in range(10):
            x0 = rng.randint(0, w)
            draw.line((x0, 0, rng.randint(0, w), h), fill=rgba(rng.choice([palette[2], palette[3]]), rng.randint(45, 110)), width=max(2, w // 240))
        if "tool" in filename:
            cx, cy = w // 2, h // 2
            draw.ellipse((cx - w // 5, cy - h // 10, cx + w // 5, cy + h // 10), fill=rgba("#151515", 230), outline=rgba(palette[2], 130), width=w // 90)
            draw.rectangle((cx - w // 3, cy - h // 35, cx + w // 3, cy + h // 35), fill=rgba("#333333", 220))
        elif "trainer" in filename:
            draw_person(draw, w, h, w // 2, int(h * 0.86), w / 1050, "#202020", 240)
            draw.line((int(w * 0.34), int(h * 0.2), int(w * 0.7), int(h * 0.76)), fill=rgba(palette[2], 120), width=w // 80)
        elif "training" in filename:
            draw_person(draw, w, h, int(w * 0.45), int(h * 0.78), w / 1200, "#202020", 240)
            draw.line((int(w * 0.16), int(h * 0.55), int(w * 0.84), int(h * 0.55)), fill=rgba("#444444", 220), width=w // 70)
        else:
            for i in range(6):
                x = int(w * (0.12 + i * 0.13))
                draw.rounded_rectangle((x, int(h * 0.28), x + w // 16, int(h * 0.72)), radius=w // 50, fill=rgba("#181818", 230), outline=rgba(palette[2], 80))

    else:
        draw_bokeh(draw, w, h, list(palette), rng, 26)

    img = add_noise(img, 0.055 if site not in {"fitness", "restaurant"} else 0.09)
    return add_vignette(img, 0.2 if site not in {"kids", "dental", "chiro"} else 0.08)


def render_transparent_noise(w: int, h: int, strength: float) -> Image.Image:
    noise = Image.effect_noise((w, h), 30).convert("L")
    alpha = noise.point(lambda p: int(max(0, p - 115) * strength))
    return Image.merge("RGBA", (noise, noise, noise, alpha))


def render_scanline(w: int, h: int) -> Image.Image:
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img, "RGBA")
    step = max(3, h // 220)
    for y in range(0, h, step):
        draw.rectangle((0, y, w, y + max(1, step // 3)), fill=(0, 0, 0, 70))
    return img


def svg_color(site: str, index: int = 2) -> str:
    palette = PALETTES.get(site, PALETTES["portfolio"])
    return palette[min(index, len(palette) - 1)]


def svg_wrap(content: str, viewbox: str = "0 0 512 512") -> str:
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="'
        + viewbox
        + '" fill="none" stroke-linecap="round" stroke-linejoin="round">'
        + content
        + "</svg>\n"
    )


def write_svg(path: Path, site: str, prompt: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    name = path.name
    stroke = svg_color(site, 2)
    fill = svg_color(site, 1)
    if name == "14-logo-mock.svg":
        body = (
            '<rect width="512" height="256" fill="#050505"/>'
            '<text x="256" y="150" text-anchor="middle" font-family="Impact, Arial Black, sans-serif" '
            'font-size="86" letter-spacing="2" fill="#ffe600" stroke="none">IGNITE 24/7</text>'
            '<path d="M70 188H442" stroke="#ff2b8a" stroke-width="10"/>'
        )
        path.write_text(svg_wrap(body, "0 0 512 256"), encoding="utf-8")
        return
    if "cursor" in name:
        body = '<circle cx="16" cy="16" r="7" fill="#f6f6f2" stroke="none"/>'
        path.write_text(svg_wrap(body, "0 0 32 32"), encoding="utf-8")
        return
    if "favicon" in name:
        body = '<rect width="512" height="512" rx="112" fill="#0e0e0e" stroke="none"/><path d="M156 352V144h118c70 0 112 38 112 98s-43 96-112 96h-58" stroke="#f6f6f2" stroke-width="38"/><circle cx="356" cy="356" r="24" fill="#f6f6f2" stroke="none"/>'
        path.write_text(svg_wrap(body), encoding="utf-8")
        return
    if "icon" in name or "symptom" in name:
        body = (
            f'<circle cx="256" cy="256" r="196" stroke="{stroke}" stroke-width="24"/>'
            f'<path d="M178 282c42-84 114-84 156 0M210 344h92M256 134v96" stroke="{stroke}" stroke-width="26"/>'
            f'<circle cx="320" cy="196" r="28" fill="{fill}" stroke="none" opacity=".28"/>'
        )
    elif "paw" in name:
        body = f'<circle cx="256" cy="300" r="92" fill="{fill}" stroke="none"/><circle cx="150" cy="194" r="45" fill="{fill}" stroke="none"/><circle cx="236" cy="156" r="45" fill="{fill}" stroke="none"/><circle cx="322" cy="156" r="45" fill="{fill}" stroke="none"/><circle cx="402" cy="194" r="45" fill="{fill}" stroke="none"/>'
    elif "bone" in name:
        body = f'<path d="M150 188c-34-44 22-100 66-66 26-36 86-16 82 28l64 64c44-4 64 56 28 82 34 44-22 100-66 66-26 36-86 16-82-28l-64-64c-44 4-64-56-28-82Z" fill="{fill}" stroke="none"/>'
    elif "ribbon" in name:
        body = f'<path d="M256 256 96 150v212l160-106Zm0 0 160-106v212L256 256Z" fill="{fill}" stroke="none"/><circle cx="256" cy="256" r="42" fill="{stroke}" stroke="none"/>'
    elif "flow" in name or "step" in name:
        body = "".join(
            f'<circle cx="{74 + i * 91}" cy="256" r="34" stroke="{stroke}" stroke-width="18"/>'
            for i in range(5)
        )
        body += f'<path d="M108 256H438" stroke="{stroke}" stroke-width="14" opacity=".55"/>'
    elif "dot" in name:
        body = "".join(
            f'<circle cx="{x}" cy="{y}" r="9" fill="{fill}" stroke="none" opacity=".45"/>'
            for y in range(48, 512, 72)
            for x in range(48, 512, 72)
        )
    elif "deco" in name or "line" in name or "stripe" in name or "arc" in name:
        if "arc" in name:
            body = f'<path d="M96 382C112 210 224 116 410 104" stroke="{stroke}" stroke-width="34"/>'
        elif "stripe" in name:
            body = "".join(
                f'<path d="M{-120 + i * 90} 520 520 {-120 + i * 90}" stroke="{stroke}" stroke-width="28" opacity=".7"/>'
                for i in range(10)
            )
        elif "compass" in name:
            body = f'<circle cx="256" cy="256" r="180" stroke="{stroke}" stroke-width="18"/><path d="M256 94 300 300 94 256Z" fill="{fill}" stroke="none" opacity=".55"/>'
        elif "blueprint" in name:
            body = f'<rect x="94" y="112" width="324" height="248" stroke="{stroke}" stroke-width="14"/><path d="M94 220h324M226 112v248M320 220v140" stroke="{stroke}" stroke-width="10" opacity=".75"/>'
        else:
            body = f'<path d="M42 294C126 178 184 382 270 256S390 146 470 246" stroke="{stroke}" stroke-width="26"/><path d="M74 368C186 320 282 394 430 334" stroke="{fill}" stroke-width="18" opacity=".55"/>'
    else:
        body = f'<circle cx="256" cy="256" r="150" stroke="{stroke}" stroke-width="26"/><path d="M170 280c64-84 118-84 172 0" stroke="{stroke}" stroke-width="26"/>'
    path.write_text(svg_wrap(body), encoding="utf-8")


def write_lottie(path: Path, site: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    palette = PALETTES.get(site, PALETTES["portfolio"])
    data = {
        "v": "5.12.2",
        "fr": 24,
        "ip": 0,
        "op": 72,
        "w": 512,
        "h": 512,
        "nm": path.stem,
        "ddd": 0,
        "assets": [],
        "layers": [
            {
                "ddd": 0,
                "ind": i + 1,
                "ty": 4,
                "nm": f"shape-{i}",
                "ks": {
                    "o": {"a": 0, "k": 80},
                    "r": {"a": 1, "k": [{"t": 0, "s": [0]}, {"t": 72, "s": [360]}]},
                    "p": {"a": 0, "k": [120 + i * 58, 150 + (i % 3) * 72, 0]},
                    "a": {"a": 0, "k": [0, 0, 0]},
                    "s": {"a": 1, "k": [{"t": 0, "s": [70, 70, 100]}, {"t": 36, "s": [110, 110, 100]}, {"t": 72, "s": [70, 70, 100]}]},
                },
                "shapes": [
                    {"ty": "el", "p": {"a": 0, "k": [0, 0]}, "s": {"a": 0, "k": [28, 28]}},
                    {"ty": "fl", "c": {"a": 0, "k": [c / 255 for c in parse_color(palette[(i % 3) + 1])] + [1]}, "o": {"a": 0, "k": 100}},
                ],
                "ip": 0,
                "op": 72,
                "st": 0,
                "bm": 0,
            }
            for i in range(6)
        ],
    }
    path.write_text(json.dumps(data, separators=(",", ":")), encoding="utf-8")


def generate_site_assets() -> list[Path]:
    hero_sources = load_hero_sources()
    written: list[Path] = []
    for asset in parse_assets():
        path = asset.path
        if asset.ext == ".svg":
            write_svg(path, asset.site, asset.prompt)
            written.append(path)
            continue
        if asset.ext == ".json":
            write_lottie(path, asset.site)
            written.append(path)
            continue
        size = parse_size(asset.size_text)
        if size is None:
            continue
        source = hero_sources.get((asset.site, asset.filename))
        if source and source.exists():
            img = cover_resize(Image.open(source), size)
        elif "ogp" in asset.filename:
            hero_path = next(
                (asset.base_dir / filename for site, filename in HERO_ORDER if site == asset.site),
                None,
            )
            if hero_path and hero_path.exists():
                img = cover_resize(Image.open(hero_path), size)
                overlay = Image.new("RGBA", size, (0, 0, 0, 42))
                img = Image.alpha_composite(img.convert("RGBA"), overlay)
                img = add_noise(img, 0.04)
            else:
                img = render_scene(asset.site, asset.filename, asset.prompt, size)
        else:
            img = render_scene(asset.site, asset.filename, asset.prompt, size)
        save_image(img, path)
        written.append(path)
    return written


def generate_common_assets() -> list[Path]:
    written: list[Path] = []
    common = OUT_DIR / "common"
    portfolio = OUT_DIR / "portfolio"
    common.mkdir(parents=True, exist_ok=True)
    portfolio.mkdir(parents=True, exist_ok=True)

    save_image(render_transparent_noise(1024, 1024, 0.16), common / "noise-overlay.png")
    written.append(common / "noise-overlay.png")
    write_svg(common / "cursor-dot.svg", "portfolio", "")
    written.append(common / "cursor-dot.svg")
    write_svg(common / "favicon.svg", "portfolio", "")
    written.append(common / "favicon.svg")

    for size, name in [(32, "favicon-32.png"), (180, "favicon-180.png")]:
        img = Image.new("RGBA", (size, size), (14, 14, 14, 255))
        draw = ImageDraw.Draw(img, "RGBA")
        pad = max(5, size // 6)
        draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=size // 5, fill=(14, 14, 14, 255))
        draw.arc((pad, pad, size - pad, size - pad), 200, 510, fill=(246, 246, 242, 255), width=max(2, size // 8))
        draw.ellipse((int(size * 0.66), int(size * 0.66), int(size * 0.82), int(size * 0.82)), fill=(246, 246, 242, 255))
        save_image(img, common / name)
        written.append(common / name)

    ogp = render_scene("portfolio", "ogp-default.webp", "", (1200, 630))
    draw = ImageDraw.Draw(ogp, "RGBA")
    for i in range(12):
        x = 70 + (i % 6) * 175
        y = 105 + (i // 6) * 225
        draw.rounded_rectangle((x, y, x + 120, y + 160), radius=8, fill=rgba(PALETTES["portfolio"][2], 32), outline=rgba("#f6f6f2", 35))
    save_image(add_noise(ogp, 0.09), common / "ogp-default.webp")
    written.append(common / "ogp-default.webp")

    save_image(render_texture(1920, 1080, "portfolio", "hero-bg-grain.webp"), portfolio / "hero-bg-grain.webp")
    written.append(portfolio / "hero-bg-grain.webp")
    deco = '<path d="M152 370c84-68 132-142 132-216 0-58-38-94-98-94-42 0-80 18-112 54" stroke="#f6f6f2" stroke-width="28"/><path d="M332 82v310M262 134l70-52 70 52" stroke="#7a6f5d" stroke-width="28"/>'
    (portfolio / "hero-deco-12.svg").write_text(svg_wrap(deco), encoding="utf-8")
    written.append(portfolio / "hero-deco-12.svg")

    thumb_sources = [
        ("thumb-minpaku.webp", "minpaku", "01-hero-dusk.webp"),
        ("thumb-travel.webp", "travel", "01-hero-horizon.webp"),
        ("thumb-restaurant.webp", "restaurant", "01-hero-noren-night.webp"),
        ("thumb-kids.webp", "kids", "01-hero-classroom.webp"),
        ("thumb-salon.webp", "salon", "01-hero-back.webp"),
        ("thumb-chiro.webp", "chiro", "01-hero-reception.webp"),
        ("thumb-tax.webp", "tax", "01-hero-bg.webp"),
        ("thumb-construction.webp", "construction", "01-hero-house.webp"),
        ("thumb-dental.webp", "dental", "01-hero-light.webp"),
        ("thumb-pet.webp", "pet", "01-hero-dog.webp"),
        ("thumb-organic.webp", "organic", "01-hero-drone.webp"),
        ("thumb-fitness.webp", "fitness", "01-hero-bg.webp"),
    ]
    for name, site, source_name in thumb_sources:
        source = OUT_DIR / site / source_name
        if source.exists():
            img = cover_resize(Image.open(source), (1000, 1250)).convert("RGBA")
        else:
            img = render_scene(site, source_name, "", (1000, 1250)).convert("RGBA")
        img = Image.alpha_composite(img, Image.new("RGBA", img.size, (0, 0, 0, 44)))
        img = add_noise(img, 0.08)
        save_image(img, portfolio / name)
        written.append(portfolio / name)

    return written


def main() -> None:
    written = generate_site_assets()
    written += generate_common_assets()
    print(f"wrote {len(written)} assets")
    for group in sorted(p for p in OUT_DIR.iterdir() if p.is_dir()):
        count = len([p for p in group.iterdir() if p.is_file()])
        print(f"{group.relative_to(ROOT)}: {count}")


if __name__ == "__main__":
    main()
