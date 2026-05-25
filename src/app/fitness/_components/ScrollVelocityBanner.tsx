"use client";

import { KineticMarquee } from "@/lib/animations";

const ITEMS = [
  "NO EXCUSES",
  "PUSH HARDER",
  "BURN BRIGHT",
  "FAIL · ADJUST · WIN",
  "BUILT IN TOKYO",
];

/**
 * Canonical な無限マーキー実装。
 *
 * 仕組み:
 *  - flex 親に同じセット（ITEMS）を 2 つ並べる
 *  - 親を x: 0% → -50% にループアニメーション
 *  - -50% は「セット1個分まるごと左へ」と同じ。到達瞬間に 0% へ戻っても
 *    視覚的には完全に同じ位置にセットが並んでいるため継ぎ目が見えない
 *  - スクロール反応や速度モジュレーションは行わない（複雑性を排してまず確実な動作を優先）
 */
export function ScrollVelocityBanner({
  durationSeconds = 28,
}: {
  durationSeconds?: number;
}) {
  return (
    <KineticMarquee
      items={ITEMS}
      durationSeconds={durationSeconds}
      className="border-y border-[#FFE600]/30 bg-[#0A0A0A] py-10"
      trackClassName="font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] tracking-[0.05em] text-[#FFE600]"
      separator={<Dot />}
    />
  );
}
function Dot() {
  return (
    <span className="inline-block size-3 rounded-full bg-[#FF2D55]" aria-hidden />
  );
}
