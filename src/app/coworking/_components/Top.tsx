"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Coffee,
  Cpu,
  Headphones,
  Mic,
  Moon,
  Quote,
  Signal,
  Sparkles,
  Terminal,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import {
  AmbientParticles,
  FadeIn,
  KineticMarquee,
  Tilt3D,
  Typewriter,
} from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

const PLANS = [
  {
    code: "P01",
    name: "Drop-in",
    price: "¥3,800",
    unit: "/day",
    body: "本日だけ使いたい方に。Wifi・電源・コーヒー込み、ロッカーレンタル無料。",
    features: ["全店舗 共通利用", "営業時間内のみ", "会議室は別途課金"],
    accent: "#F4F6FA",
  },
  {
    code: "P02",
    name: "Resident",
    price: "¥38,000",
    unit: "/month",
    body: "毎日の自席として。24時間アクセス、会議室クレジット月8時間、住所利用可。",
    features: [
      "24h アクセス",
      "登記住所利用 OK",
      "会議室 月8h 込み",
      "全店舗 利用可",
    ],
    accent: "#00E5FF",
    highlight: true,
  },
  {
    code: "P03",
    name: "Team",
    price: "¥18万",
    unit: "/月〜",
    body: "4〜10名チーム向けの専有スペース。専用Slack、Zoomブース無料、会員企業ネットワーク。",
    features: ["専有スペース 4〜10名", "Zoomブース無料", "イベント運営支援"],
    accent: "#FFB100",
  },
];

const FACILITIES = [
  {
    icon: Wifi,
    label: "Gigabit Wifi",
    body: "実測 800Mbps の専用回線。VPN・固定IPもオプション提供。",
    image: "/images/coworking/09-desk-detail.webp",
  },
  {
    icon: Headphones,
    label: "Zoom ブース",
    body: "全店舗 6 室、防音設計。NDA対応、片手予約。",
    image: "/images/coworking/05-zoom-booth.webp",
  },
  {
    icon: Users,
    label: "会議室",
    body: "2〜12名、4K TV会議システム、ホワイトボード壁。",
    image: "/images/coworking/06-meeting-room.webp",
  },
  {
    icon: Coffee,
    label: "ハンドドリップ",
    body: "毎日 3 種の豆を自家焙煎、専属バリスタ常駐。",
    image: "/images/coworking/07-coffee-bar.webp",
  },
  {
    icon: Moon,
    label: "仮眠室",
    body: "リクライニング 2 席、暗室管理、24h 利用可。",
    image: "/images/coworking/10-nap-room.webp",
  },
  {
    icon: Mic,
    label: "イベントスペース",
    body: "夜間貸切、定員 80 名、配信機材レンタル可。",
    image: "/images/coworking/08-event-space.webp",
  },
];

const DAY_TIMELINE = [
  { time: "06:00", label: "First entry", body: "最初の Resident が解錠。コーヒーマシン起動。" },
  { time: "09:00", label: "Visitor open", body: "Drop-in 受付開始、フロントスタッフ在館。" },
  { time: "12:30", label: "Lunch peak", body: "1階バー混雑のピーク。Zoom ブース予約推奨。" },
  { time: "15:00", label: "Demo Day", body: "月 2 回、会員のプロダクト発表会（30 分）。" },
  { time: "19:00", label: "Co-coding", body: "毎週水曜、もくもく + ペアプロ枠（無料）。" },
  { time: "22:00", label: "Visitor close", body: "Drop-in 退館。以降は Resident のみ。" },
  { time: "02:00", label: "Quiet hours", body: "仮眠室・電話ブース利用可、会話は休憩室で。" },
];

const VOICES = [
  {
    name: "M. Tanaka",
    role: "Founder · Series B SaaS",
    body: "資金調達の前後 1 年間、自宅でも自社オフィスでもなく AXIS で過ごしました。決定の質が変わった気がします。",
    image: "/images/coworking/11-people-coding.webp",
    company: "@ Shibuya",
  },
  {
    name: "K. Saito",
    role: "Solo · iOS Engineer",
    body: "Zoom ブースの予約のしやすさで決めました。クライアントとの面談で席を取られない安心感が大きいです。",
    image: "/images/coworking/12-meet-discuss.webp",
    company: "@ Marunouchi",
  },
  {
    name: "Y. Mori",
    role: "PM · 3-person startup",
    body: "Team プランで会議室込み 18 万。借りずに済むものが多く、結果として家賃の半分で済んでいます。",
    image: "/images/coworking/06-meeting-room.webp",
    company: "@ Both",
  },
];

const PARTNERS = [
  { label: "Wifi", body: "NURO Biz / 専用回線" },
  { label: "Coffee", body: "Onibus Coffee 焙煎豆" },
  { label: "Furniture", body: "Herman Miller / Vitra" },
  { label: "Lock", body: "BitLock Pro · IC + Face" },
  { label: "Mail", body: "登記住所 + 郵便保管" },
  { label: "Security", body: "Secom 24h 緊急対応" },
];

const STANCE = [
  {
    icon: Cpu,
    label: "Deep work first",
    body: "通知ではなく集中時間を中心に設計。共有スペースより専有時間の体験を優先します。",
  },
  {
    icon: Activity,
    label: "Signal over noise",
    body: "イベントは月 6 件まで。数より、参加して帰ったあとに残るものを選びます。",
  },
  {
    icon: Sparkles,
    label: "Quietly tech",
    body: "ネオンを多用しない。質感の良いコンクリート、ガラス、間接照明で長時間でも疲れない場所に。",
  },
];

const KINETIC_PHRASES = [
  "Deep work",
  "Quiet rooms",
  "On-demand",
  "Stay focused",
  "Build today",
  "Ship faster",
  "Coffee bar",
  "Phone booth",
];

export function CoworkingTop() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Live status strip — animated stats */}
      <LiveStatusStrip />

      <KineticMarquee
        items={KINETIC_PHRASES}
        durationSeconds={32}
        className="border-y border-white/8 bg-[#0A0E1A] py-6 text-[#00E5FF]/30"
        trackClassName="font-mono text-[clamp(2rem,5vw,4rem)] tracking-[0.05em] uppercase"
        separator={<span className="inline-block h-px w-12 bg-[#00E5FF]/40" />}
      />

      {/* Plans */}
      <section className="relative bg-[#0A0E1A] px-6 py-32 sm:px-12 lg:px-20">
        {/* Subtle grid pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <SectionLabel number="01" className="font-mono text-[#00E5FF]">
            Plans
          </SectionLabel>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-mono text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.95] tracking-[0.02em] text-white">
              Pick how
              <br />
              <span className="text-[#00E5FF]">you work.</span>
            </h2>
            <p className="max-w-xs font-mono text-xs uppercase tracking-[0.25em] text-white/40">
              {"// 3 plans · 0 lock-in"}
              <br />
              switch anytime, day-of
            </p>
          </div>

          <ul className="mt-16 grid gap-6 lg:grid-cols-3">
            {PLANS.map((p, i) => (
              <motion.li
                key={p.code}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <Tilt3D
                  intensity={6}
                  raise={4}
                  glare
                  className={`relative flex h-full flex-col border bg-[#101522] p-8 ${
                    p.highlight
                      ? "border-[#00E5FF] shadow-[0_0_60px_-20px_rgba(0,229,255,0.4)]"
                      : "border-white/10"
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-8 bg-[#00E5FF] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-[#0A0E1A]">
                      Recommended
                    </span>
                  )}
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                      {p.code}
                    </span>
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.3em]"
                      style={{ color: p.accent }}
                    >
                      {p.name}
                    </span>
                  </div>
                  <p className="mt-6 font-mono text-5xl text-white">{p.price}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                    {p.unit}
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-white/75">
                    {p.body}
                  </p>
                  <ul className="mt-8 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-white/80">
                        <span
                          className="mt-1 size-1.5 shrink-0 rounded-full"
                          style={{ background: p.accent }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/coworking/plans"
                    className="mt-10 flex items-center justify-between border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.3em] transition-colors"
                    style={{ color: p.accent }}
                  >
                    詳細を見る
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </Tilt3D>
              </motion.li>
            ))}
          </ul>
          <p className="mt-12 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            All plans include · Coffee · Lockers · Print/Scan
          </p>
        </div>
      </section>

      {/* Facilities — now with image cards */}
      <section
        id="facilities"
        className="bg-[#101522] px-6 py-32 sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="02" className="font-mono text-[#00E5FF]">
            Facilities
          </SectionLabel>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-mono text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.95] tracking-[0.02em] text-white">
              Built for
              <br />
              <span className="text-[#00E5FF]">deep work.</span>
            </h2>
            <p className="max-w-xs font-mono text-xs uppercase tracking-[0.25em] text-white/40">
              {"// 6 amenities"}
              <br />
              tested, not advertised
            </p>
          </div>

          <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.li
                  key={f.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="group relative overflow-hidden border border-white/10 transition-colors hover:border-[#00E5FF]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.label}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101522] via-[#101522]/30 to-transparent" />
                    <span className="absolute right-3 top-3 font-mono text-[10px] tracking-[0.2em] text-[#00E5FF]/70">
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <Icon className="size-4 text-[#00E5FF]" />
                      <h3 className="font-mono text-lg uppercase tracking-[0.05em] text-white">
                        {f.label}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {f.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* A Day at AXIS — 24h timeline */}
      <section className="relative overflow-hidden bg-[#0A0E1A] px-6 py-32 sm:px-12 lg:px-20">
        <Image
          src="/images/coworking/01-hero-floor.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E1A] via-[#0A0E1A]/80 to-[#0A0E1A]" />

        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <SectionLabel number="03" className="font-mono text-[#00E5FF]">
              Day Loop
            </SectionLabel>
            <h2 className="mt-6 font-mono text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.95] tracking-[0.02em] text-white">
              A day,
              <br />
              <span className="text-[#00E5FF]">24h.</span>
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-loose text-white/70">
              朝の解錠から深夜の静寂まで、AXIS の一日は止まりません。
              下のタイムラインは平日の典型的なリズムです。
              夜の濃さも雰囲気の一部としてご確認ください。
            </p>
          </div>

          <ol className="space-y-1">
            {DAY_TIMELINE.map((item, i) => (
              <motion.li
                key={item.time}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="grid grid-cols-[100px_1fr] items-baseline gap-6 border-b border-white/8 py-5"
              >
                <span className="font-mono text-2xl text-[#00E5FF]">
                  {item.time}
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white">
                    {item.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Community + Voices */}
      <section
        id="community"
        className="bg-[#101522] px-6 py-32 sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <SectionLabel number="04" className="font-mono text-[#00E5FF]">
                Community
              </SectionLabel>
              <h2 className="mt-6 font-mono text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.95] tracking-[0.02em] text-white">
                420 makers
                <br />
                <span className="text-[#00E5FF]">building today.</span>
              </h2>
            </div>
            <div>
              <FadeIn>
                <p className="text-sm leading-loose text-white/80">
                  エンジニア、デザイナー、プロダクトマネージャー、PR、ファウンダー。
                  平均会員数は 420 名。毎月数件の Demo Day、毎週水曜の「co-coding」、月一の「Founder
                  Office Hour」など、自然に手が動くイベントを設計しています。
                </p>
                <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 font-mono text-xs sm:grid-cols-4">
                  <div>
                    <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Slack</dt>
                    <dd className="mt-1 text-white">3500+ posts/mo</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Events</dt>
                    <dd className="mt-1 text-white">月平均 6 回</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Funding</dt>
                    <dd className="mt-1 text-white">VC・エンジェル紹介</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Hiring</dt>
                    <dd className="mt-1 text-white">会員間求人 30+/mo</dd>
                  </div>
                </dl>
              </FadeIn>
            </div>
          </div>

          {/* Voices */}
          <ul className="mt-20 grid gap-6 lg:grid-cols-3">
            {VOICES.map((v, i) => (
              <motion.li
                key={v.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <Tilt3D
                  intensity={5}
                  raise={3}
                  glare
                  className="flex h-full flex-col border border-white/10 bg-[#0A0E1A]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={v.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <Quote className="size-5 text-[#00E5FF]/40" />
                    <p className="mt-4 flex-1 text-sm leading-loose text-white/85">
                      {v.body}
                    </p>
                    <div className="mt-6 flex items-baseline justify-between border-t border-white/8 pt-4">
                      <div>
                        <p className="font-mono text-sm text-white">{v.name}</p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                          {v.role}
                        </p>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]">
                        {v.company}
                      </span>
                    </div>
                  </div>
                </Tilt3D>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Partners / Stack */}
      <section className="border-y border-white/8 bg-[#0A0E1A] px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#00E5FF]">
              {"// Stack & Partners"}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              ぶれない品質のために、揃えたもの
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((p, i) => (
              <motion.li
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="border-t border-white/10 pt-4"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]">
                  {p.label}
                </p>
                <p className="mt-2 text-xs text-white/70">{p.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Design Stance */}
      <section className="bg-[#101522] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
          <div>
            <SectionLabel number="05" className="font-mono text-[#00E5FF]">
              Design Stance
            </SectionLabel>
            <h2 className="mt-6 font-mono text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.95] tracking-[0.02em] text-white">
              Tech,
              <br />
              <span className="text-[#00E5FF]">not loud.</span>
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-loose text-white/70">
              「テック特化」と謳いつつ、ネオン爆発系のサイトにはしない。
              長くいたくなる空間にこそ集中は宿る、という主張をデザインに通します。
            </p>
          </div>

          <ul className="grid gap-6 md:grid-cols-3">
            {STANCE.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="border border-white/10 bg-[#0A0E1A] p-6"
                >
                  <Icon className="size-5 text-[#00E5FF]" />
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.3em] text-[#00E5FF]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-loose text-white/75">
                    {item.body}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Locations — richer */}
      <section
        id="locations"
        className="bg-[#0A0E1A] px-6 py-32 sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="06" className="font-mono text-[#00E5FF]">
            Locations
          </SectionLabel>
          <h2 className="mt-6 font-mono text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.95] tracking-[0.02em] text-white">
            Two studios.
          </h2>

          <ul className="mt-16 grid gap-8 lg:grid-cols-2">
            {[
              {
                en: "Shibuya",
                ja: "渋谷スタジオ",
                tagline: "桜丘の坂、ガラス壁の四階",
                addr: "東京都渋谷区桜丘町◯-◯",
                station: "渋谷駅 徒歩6分",
                cap: "席数 180",
                rooms: "会議室 6 / Zoomブース 6",
                hours: "Members 24h / Visitors 09:00–22:00",
                image: "/images/coworking/03-shibuya.webp",
                detail: "/images/coworking/13-night-exterior.webp",
              },
              {
                en: "Marunouchi",
                ja: "丸の内スタジオ",
                tagline: "オフィス街の真ん中、ガラス天井のテラス",
                addr: "東京都千代田区丸の内◯-◯",
                station: "東京駅 徒歩3分",
                cap: "席数 240",
                rooms: "会議室 8 / Zoomブース 6",
                hours: "Members 24h / Visitors 09:00–22:00",
                image: "/images/coworking/04-marunouchi.webp",
                detail: "/images/coworking/15-print-area.webp",
              },
            ].map((l, i) => (
              <motion.li
                key={l.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group overflow-hidden border border-white/10 transition-colors hover:border-[#00E5FF]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={l.image}
                    alt={l.ja}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.4em] text-[#00E5FF]">
                    / {String(i + 1).padStart(2, "0")} · {l.en}
                  </span>
                </div>
                <div className="bg-[#101522] p-8">
                  <h3 className="font-mono text-3xl uppercase text-white">
                    {l.ja}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{l.tagline}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-5 font-mono text-xs">
                    <div>
                      <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Address</dt>
                      <dd className="mt-1 text-white/80">{l.addr}</dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Access</dt>
                      <dd className="mt-1 text-white/80">{l.station}</dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Seats</dt>
                      <dd className="mt-1 text-white/80">{l.cap}</dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Rooms</dt>
                      <dd className="mt-1 text-white/80">{l.rooms}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="uppercase tracking-[0.3em] text-[#00E5FF]">Hours</dt>
                      <dd className="mt-1 text-white/80">{l.hours}</dd>
                    </div>
                  </dl>
                  <Link
                    href="/coworking/contact"
                    className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#00E5FF] transition-colors hover:text-white"
                  >
                    Book a Tour
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[760px] items-center overflow-hidden bg-[#0A0E1A] text-white">
      <Image
        src="/images/coworking/01-hero-floor.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0 2px, white 2px 3px)",
        }}
        aria-hidden
      />

      {/* Neon corner accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 90% 10%, rgba(0,229,255,0.22) 0%, transparent 35%), radial-gradient(circle at 5% 95%, rgba(255,177,0,0.14) 0%, transparent 40%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dark vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,14,26,0.45) 0%, rgba(10,14,26,0.2) 50%, rgba(10,14,26,0.92) 100%)",
        }}
        aria-hidden
      />

      <AmbientParticles
        count={18}
        seed={414}
        className="z-[1]"
        particleClassName="bg-[#00E5FF]/50"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#00E5FF] opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-[#00E5FF]" />
          </span>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#00E5FF]">
            AXIS / Coworking Studios · Live
          </p>
        </motion.div>

        <h1 className="mt-8 font-mono uppercase leading-[0.88] tracking-[-0.01em]">
          <Typewriter
            text="DEEP WORK,"
            initialDelayMs={600}
            charDelayMs={95}
            className="block text-[clamp(2.5rem,10vw,7.5rem)] text-white"
            cursorClassName="text-[#00E5FF]"
            cursorPersists={false}
          />
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75, duration: 0.7 }}
            className="block text-[clamp(2.5rem,10vw,7.5rem)] text-[#00E5FF]"
          >
            ON-DEMAND.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-12 flex flex-wrap items-end gap-8"
        >
          <p className="max-w-md text-sm leading-loose text-white/80">
            スタートアップ・フリーランス・小規模チームのための、
            24時間アクセス可能なコワーキング。
            <br />
            渋谷と丸の内、二拠点を共通利用。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/coworking/contact"
              className="border border-[#00E5FF] bg-[#00E5FF]/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-[#00E5FF] transition-colors hover:bg-[#00E5FF] hover:text-[#0A0E1A]"
            >
              Book Tour
            </Link>
            <Link
              href="/coworking/plans"
              className="border border-white/30 px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] text-white transition-colors hover:border-white"
            >
              See Plans
            </Link>
          </div>
        </motion.div>

        {/* Live status overlay strip in hero bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="mt-16 grid max-w-3xl grid-cols-3 divide-x divide-white/10 border border-white/10 bg-black/40 backdrop-blur-md"
        >
          {[
            { l: "Occupancy", v: "62%", sub: "Shibuya · 14:22" },
            { l: "Booth free", v: "4 / 12", sub: "All studios" },
            { l: "Next event", v: "Co-coding", sub: "Wed 19:00" },
          ].map((s) => (
            <div key={s.l} className="px-5 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]">
                {s.l}
              </p>
              <p className="mt-2 font-mono text-xl text-white">{s.v}</p>
              <p className="mt-1 font-mono text-[10px] text-white/40">{s.sub}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function LiveStatusStrip() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0A0E1A] px-6 py-14 sm:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
        {[
          { v: "24/7", l: "Access", icon: Signal },
          { v: "800", l: "Mbps Wifi", icon: Wifi },
          { v: "2", l: "Locations", icon: Zap },
          { v: "420+", l: "Members", icon: Users },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-l-2 border-[#00E5FF] pl-6"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#00E5FF]/70">
                <Icon className="size-3.5" />
                <span>{s.l}</span>
              </div>
              <p className="mt-3 font-mono text-3xl text-white sm:text-4xl">{s.v}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0E1A] px-6 py-32 text-white sm:px-12 lg:px-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,229,255,0.14) 0%, transparent 50%)",
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-[#00E5FF]">
          <Terminal className="size-3.5" />
          axis:~ $ book --tour
        </p>
        <h2 className="mt-10 font-mono text-[clamp(2.5rem,8vw,7rem)] uppercase leading-[0.95] tracking-[0.02em]">
          See the
          <br />
          <span className="text-[#00E5FF]">
            space
            <motion.span
              aria-hidden
              className="inline-block w-[0.6ch] text-[#00E5FF]"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            >
              _
            </motion.span>
          </span>
        </h2>
        <p className="mx-auto mt-10 max-w-xl text-sm leading-loose text-white/70">
          両店舗とも、平日 30 分の無料ツアーを承ります。
          空席状況や雰囲気を実際に確かめてからご検討ください。
        </p>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/coworking/contact"
            className="inline-flex items-center gap-3 border border-[#00E5FF] bg-[#00E5FF]/10 px-12 py-5 font-mono text-sm uppercase tracking-[0.3em] text-[#00E5FF] transition-colors hover:bg-[#00E5FF] hover:text-[#0A0E1A]"
          >
            Book a Tour
            <ArrowUpRight className="size-4" />
          </Link>
          <Link
            href="/coworking/plans"
            className="inline-flex items-center gap-3 border border-white/20 px-12 py-5 font-mono text-sm uppercase tracking-[0.3em] text-white transition-colors hover:border-white"
          >
            See Plans
          </Link>
        </div>
        <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
          {"// No card needed for tour · No lock-in"}
        </p>
      </div>

      {/* Decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,229,255,0.4) 1px, transparent 1px), linear-gradient(to right, rgba(0,229,255,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

    </section>
  );
}
