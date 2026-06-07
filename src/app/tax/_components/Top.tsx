"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, FileCheck2, Landmark, ShieldCheck } from "lucide-react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { FadeIn, KineticMarquee, RevealText } from "@/lib/animations";

const KPIS = [
  { v: 82, s: "社", l: "顧問先・IT/スタートアップ" },
  { v: 96, s: "%", l: "補助金採択率（3年平均）" },
  { v: 18, s: "年", l: "実務キャリア（監査法人含む）" },
  { v: 24, s: "h", l: "原則24h以内の一次返信" },
];

const SERVICES = [
  {
    code: "S01",
    t: "顧問契約",
    body: "月次の試算表、税務相談、年度決算まで一気通貫。クラウド会計連携。",
    icon: "/images/tax/05-icon-advisory.svg",
  },
  {
    code: "S02",
    t: "税務申告",
    body: "法人税・所得税・消費税・相続税。",
    icon: "/images/tax/06-icon-tax-return.svg",
  },
  {
    code: "S03",
    t: "補助金・助成金",
    body: "事業再構築、ものづくり、IT導入など。書類作成と面談同席まで。",
    icon: "/images/tax/07-icon-grant.svg",
  },
  {
    code: "S04",
    t: "資金調達伴走",
    body: "事業計画書作成、銀行・VC折衝。資本政策のアドバイス。",
    icon: "/images/tax/08-icon-funding.svg",
  },
];

const BLOG = [
  {
    date: "2026.04.18",
    title: "インボイス制度の落とし穴 — 中小企業がやるべき3つの整理",
    thumb: "/images/tax/10-blog-thumb-01.webp",
  },
  {
    date: "2026.03.30",
    title: "資金調達前にやるべき、株主構成と就業規則の整理",
    thumb: "/images/tax/11-blog-thumb-02.webp",
  },
  {
    date: "2026.03.12",
    title: "役員報酬の決め方 — 利益と所得のバランス",
    thumb: "/images/tax/12-blog-thumb-03.webp",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionVal = useMotionValue(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(motionVal, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent = Math.round(v).toLocaleString();
      },
    });
    return () => c.stop();
  }, [inView, motionVal, value]);
  return (
    <span className="font-[family-name:var(--font-noto-serif-jp)] text-[clamp(3.5rem,9vw,7rem)] font-bold leading-none">
      <span ref={ref}>0</span>
      <span className="ml-2 text-[0.35em] font-bold text-[#B4924C]">
        {suffix}
      </span>
    </span>
  );
}

export function TaxTop() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[640px] overflow-hidden bg-[#0E2A47] text-white">
        {/* Background photo */}
        <Image
          src="/images/tax/01-hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,42,71,0.55) 0%, rgba(14,42,71,0.85) 100%)",
          }}
          aria-hidden
        />

        {/* Gold ruling lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
          className="absolute left-6 top-24 right-6 h-px origin-left bg-[#B4924C] sm:left-12 sm:right-12 lg:left-20 lg:right-20"
          aria-hidden
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: [0.76, 0, 0.24, 1], delay: 0.7 }}
          className="absolute left-6 bottom-12 right-6 h-px origin-right bg-[#B4924C] sm:left-12 sm:right-12 lg:left-20 lg:right-20"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 pt-32 pb-20 sm:px-12 lg:px-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B4924C]">
            Matsunaga Tax Accountant Office · Yotsuya, Tokyo
          </p>
          <h1 className="mt-8 font-[family-name:var(--font-noto-serif-jp)] text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.05]">
            <RevealText text="経営者の、" splitBy="word" />
            <span className="block text-[#B4924C]">
              <RevealText text="その右隣に" splitBy="word" delay={0.2} />
            </span>
          </h1>
          <FadeIn delay={0.6}>
            <p className="mt-12 max-w-xl text-sm leading-loose text-white/85">
              監査法人出身の若手税理士による、伴走型サービス。
              中小企業・スタートアップ向けに、税務だけでなく資金調達・補助金まで一手にサポートします。
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/tax/contact"
                className="inline-flex items-center gap-2 border border-[#B4924C] px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#B4924C] transition-colors hover:bg-[#B4924C] hover:text-[#0E2A47]"
              >
                無料相談を申し込む
                <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href="/tax/services"
                className="text-xs uppercase tracking-[0.3em] text-white/80 hover:text-white"
              >
                サービス一覧 →
              </Link>
            </div>
          </FadeIn>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.9 }}
          className="absolute bottom-8 right-8 z-20 hidden w-[360px] rounded border border-[#B4924C]/35 bg-[#0B223A]/82 p-5 shadow-[0_24px_90px_-44px_rgba(0,0,0,0.7)] backdrop-blur-md lg:block"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#B4924C]">
            Advisory brief
          </p>
          <dl className="mt-5 grid gap-4 text-sm">
            {[
              { icon: Clock3, label: "初回返信", value: "24h以内" },
              { icon: FileCheck2, label: "月次資料", value: "クラウド共有" },
              { icon: Landmark, label: "資金調達", value: "金融機関連携" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <Icon className="size-5 text-[#B4924C]" />
                  <dt className="flex-1 text-white/58">{item.label}</dt>
                  <dd className="font-bold text-white">{item.value}</dd>
                </div>
              );
            })}
          </dl>
        </motion.div>
      </section>

      <KineticMarquee
        items={["monthly close", "tax filing", "funding", "subsidy", "cash flow", "cloud accounting"]}
        durationSeconds={36}
        className="border-y border-[#0E2A47]/10 bg-[#F5F2EC] py-5"
        trackClassName="font-[family-name:var(--font-noto-serif-jp)] text-[clamp(2rem,5vw,4.5rem)] font-bold text-[#0E2A47]/16"
        separator={<ShieldCheck className="size-5 text-[#B4924C]" />}
      />

      {/* KPIs */}
      <section className="relative overflow-hidden bg-[#F5F2EC] px-6 py-32 sm:px-12 lg:px-20">
        <Image
          src="/images/tax/09-kpi-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B4924C]">
            By the Numbers
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-4xl font-bold text-[#0E2A47] sm:text-5xl">
            <span className="inline-block">数字で見る、</span>
            <span className="inline-block">ご支援の実績</span>
          </h2>
          <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {KPIS.map((k, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="border-t border-[#15233A]/20 pt-6 text-[#0E2A47]"
              >
                <Counter value={k.v} suffix={k.s} />
                <p className="mt-4 text-xs text-[#15233A]/70">{k.l}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B4924C]">
            Services
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-4xl font-bold text-[#0E2A47] sm:text-5xl">
            4つのサービス領域
          </h2>
          <ul className="mt-16 grid gap-4 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <motion.li
                key={s.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group rounded border border-[#15233A]/15 p-8 transition-colors hover:border-[#B4924C] hover:bg-[#0E2A47] hover:text-white"
              >
                <div className="flex items-start justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B4924C]">
                    {s.code}
                  </p>
                  <Image
                    src={s.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="size-9 transition-opacity group-hover:opacity-80"
                  />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-2xl font-bold">
                  {s.t}
                </h3>
                <p className="mt-4 text-sm leading-loose opacity-80 group-hover:text-white/85">
                  {s.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust — 信頼の握手 */}
      <section className="relative overflow-hidden bg-[#0E2A47] px-6 py-24 text-white sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative aspect-[3/2] overflow-hidden rounded"
          >
            <Image
              src="/images/tax/14-trust-handshake.webp"
              alt="クライアントとの握手"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#B4924C]">
              Partnership
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-3xl font-bold sm:text-4xl">
              <span className="inline-block">伴走する、</span>
              <span className="inline-block">という姿勢</span>
            </h2>
            <FadeIn delay={0.15}>
              <p className="mt-8 max-w-md text-sm leading-loose text-white/80">
                税務処理だけではなく、事業の意思決定に必要な情報を、
                必要なタイミングで届ける。経営者の隣に立つパートナーであり続けます。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section
        id="profile"
        className="bg-[#F5F2EC] px-6 py-32 sm:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded"
          >
            <Image
              src="/images/tax/04-rep-portrait.webp"
              alt="代表 松永達也"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#B4924C]">
              Profile
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-4xl font-bold text-[#0E2A47]">
              松永 達也
            </h2>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#B4924C]">
              Tatsuya Matsunaga · 税理士
            </p>
            <p className="mt-8 max-w-md text-sm leading-loose text-[#15233A]/80">
              大手監査法人で6年、上場企業の監査と内部統制構築を担当。
              スタートアップへの興味から独立し、2019年に当事務所を開業。
              IT・SaaS領域に強く、資金調達伴走を通じて累計15億円超の調達支援実績。
            </p>
            <ul className="mt-8 grid gap-2 text-xs text-[#15233A]/70 sm:grid-cols-2">
              <li>· 日本税理士会連合会 所属</li>
              <li>· 公認会計士 (USCPA)</li>
              <li>· 中小企業診断士</li>
              <li>· 経営革新等支援機関 認定</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process — チームでの取り組み */}
      <section className="bg-white px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#B4924C]">
              Process
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-3xl font-bold text-[#0E2A47] sm:text-4xl">
              <span className="inline-block">チームで、</span>
              <span className="inline-block">考え続ける</span>
            </h2>
            <FadeIn delay={0.15}>
              <p className="mt-8 max-w-md text-sm leading-loose text-[#15233A]/80">
                ひとりではなく、税理士・会計士・診断士が連携。
                数字の読み方、施策の妥当性、契約条件まで、
                それぞれの視点から検討してご提案します。
              </p>
            </FadeIn>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded"
          >
            <Image
              src="/images/tax/16-team-process.webp"
              alt="チームでの検討風景"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Office — 事務所内観 */}
      <section className="bg-[#F5F2EC] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative aspect-[3/2] overflow-hidden rounded"
          >
            <Image
              src="/images/tax/02-office.webp"
              alt="事務所内観"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#B4924C]">
              Office
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-4xl font-bold text-[#0E2A47]">
              四ツ谷の、小さな事務所
            </h2>
            <FadeIn delay={0.15}>
              <p className="mt-8 max-w-md text-sm leading-loose text-[#15233A]/80">
                四ツ谷駅から徒歩3分。木のテーブルと本棚と、オリーブの木が一本。
                小規模だからこそ、ひとり一人のクライアントに向き合えます。
              </p>
            </FadeIn>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-8 aspect-[3/2] overflow-hidden rounded"
            >
              <Image
                src="/images/tax/03-meeting.webp"
                alt="打ち合わせの様子"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="bg-[#F5F2EC] px-6 py-32 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B4924C]">
            Column
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-noto-serif-jp)] text-4xl font-bold text-[#0E2A47] sm:text-5xl">
            ニュースレター
          </h2>
          <ul className="mt-12 divide-y divide-[#15233A]/15 border-y border-[#15233A]/15">
            {BLOG.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-6 py-6 transition-colors hover:bg-white"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-[#B4924C]">
                  {b.date}
                </span>
                <div className="relative hidden size-20 overflow-hidden rounded bg-white sm:block">
                  <Image
                    src={b.thumb}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <p className="font-[family-name:var(--font-noto-serif-jp)] text-base font-bold text-[#0E2A47]">
                  {b.title}
                </p>
                <span className="hidden text-xs uppercase tracking-[0.3em] text-[#15233A]/50 sm:block">
                  Read →
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0E2A47] px-6 py-32 text-white sm:px-12 lg:px-20">
        <Image
          src="/images/tax/15-cta-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,42,71,0.6) 0%, rgba(14,42,71,0.92) 100%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B4924C]">
            Consultation
          </p>
          <h2 className="mt-6 font-[family-name:var(--font-noto-serif-jp)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight">
            <span className="inline-block">無料相談、</span>
            <span className="inline-block">初回60分</span>
          </h2>
          <p className="mt-8 text-sm leading-loose text-white/80">
            来所・オンライン・お電話、いずれもお選びいただけます。
          </p>
          <Link
            href="/tax/contact"
            className="mt-12 inline-block border border-[#B4924C] px-12 py-5 text-sm uppercase tracking-[0.3em] text-[#B4924C] transition-colors hover:bg-[#B4924C] hover:text-[#0E2A47]"
          >
            ご相談を申し込む
          </Link>
        </div>
      </section>
    </>
  );
}
