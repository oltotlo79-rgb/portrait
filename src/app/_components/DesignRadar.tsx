import type { DesignScores, SiteConfig } from "@/lib/site-config";

const AXES: Array<{ key: keyof DesignScores; label: string }> = [
  { key: "trust", label: "Trust" },
  { key: "warmth", label: "Warmth" },
  { key: "luxury", label: "Luxury" },
  { key: "energy", label: "Energy" },
  { key: "craft", label: "Craft" },
  { key: "conversion", label: "Action" },
];

function point(index: number, value: number, radius: number, center: number) {
  const angle = (Math.PI * 2 * index) / AXES.length - Math.PI / 2;
  const distance = radius * (value / 5);
  return {
    x: center + Math.cos(angle) * distance,
    y: center + Math.sin(angle) * distance,
  };
}

export function DesignRadar({ site }: { site: SiteConfig }) {
  const center = 90;
  const radius = 64;
  const polygon = AXES.map((axis, i) => {
    const p = point(i, site.designScores[axis.key], radius, center);
    return `${p.x},${p.y}`;
  }).join(" ");

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
            Design Radar
          </p>
          <h3 className="mt-2 text-lg font-medium">{site.name}</h3>
        </div>
        <div className="flex gap-1.5" aria-hidden>
          {[site.background, site.primary, site.accent].map((color, colorIndex) => (
            <span
              key={`${site.slug}-radar-chip-${colorIndex}-${color}`}
              className="size-5 rounded-full border border-white/20"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <svg
        viewBox="0 0 180 180"
        className="mx-auto mt-5 aspect-square w-full max-w-[280px]"
        role="img"
        aria-label={`${site.name}のデザイン傾向`}
      >
        {[1, 2, 3, 4, 5].map((level) => {
          const points = AXES.map((_, i) => {
            const p = point(i, level, radius, center);
            return `${p.x},${p.y}`;
          }).join(" ");
          return (
            <polygon
              key={level}
              points={points}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
          );
        })}
        {AXES.map((axis, i) => {
          const end = point(i, 5, radius, center);
          const label = point(i, 5.85, radius, center);
          return (
            <g key={axis.key}>
              <line
                x1={center}
                y1={center}
                x2={end.x}
                y2={end.y}
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1"
              />
              <text
                x={label.x}
                y={label.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="rgba(255,255,255,0.58)"
                fontSize="8"
                letterSpacing="0.08em"
              >
                {axis.label}
              </text>
            </g>
          );
        })}
        <polygon
          points={polygon}
          fill={site.accent}
          fillOpacity="0.28"
          stroke={site.accent}
          strokeWidth="2"
        />
      </svg>

      <p className="mt-4 text-xs leading-relaxed text-white/62">
        {site.designKeywords.join(" / ")} を軸に、{site.industryJa}
        向けの信頼感と行動導線を調整したサンプルです。
      </p>
    </div>
  );
}
