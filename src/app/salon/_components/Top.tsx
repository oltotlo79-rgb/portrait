"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";
import { FadeIn, MagneticButton, RevealText } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

const TREATMENTS = [
  {
    no: "01",
    name: "Cut",
    ja: "カット",
    price: "8,800",
    note: "120分のカウンセリングから始まる、骨格と毛流れに沿ったデザインカット。",
  },
  {
    no: "02",
    name: "Color",
    ja: "オーガニックハーブカラー",
    price: "12,000〜",
    note: "ノンジアミン処方のハーブカラー。頭皮と地毛への負担を最小限に。",
  },
  {
    no: "03",
    name: "Treatment",
    ja: "オーダーメイドケア",
    price: "6,500",
    note: "ダメージ部位ごとに配合を変える、サロン専用のトリートメント。",
  },
  {
    no: "04",
    name: "Bridal",
    ja: "ブライダルヘアメイク",
    price: "22,000",
    note: "出張可。当日朝のお仕度から、式後のアフターケアまで。",
  },
];

const LOOKBOOK = [
  {
    src: "/images/salon/02-style-01.webp",
    title: "Soft Bob",
    note: "やわらかなレイヤーで揺れる、骨格別ボブ。",
  },
  {
    src: "/images/salon/03-style-02.webp",
    title: "Ash Beige",
    note: "光の入り方で表情が変わる、透けるアッシュ。",
  },
  {
    src: "/images/salon/04-style-03.webp",
    title: "Mini Wolf",
    note: "前髪を残して輪郭を作る、現代版ウルフ。",
  },
  {
    src: "/images/salon/05-style-04.webp",
    title: "Sheer Long",
    note: "毛先まで自然に細く、軽やかなロング。",
  },
  {
    src: "/images/salon/06-style-05.webp",
    title: "Bridal Up",
    note: "首筋を見せて、横顔を引き立てる夜会巻き。",
  },
  {
    src: "/images/salon/07-style-06.webp",
    title: "French Mood",
    note: "前下がりのラインで、横顔をシャープに。",
  },
];

const INDEX_ITEMS = [
  "01 — Concept",
  "02 — Treatments",
  "03 — Look Book",
  "04 — Interview",
  "05 — Reservation",
];

const INTERVIEW = [
  {
    q: "サロン名「LUNA」に込めた意味を教えてください。",
    a: "月の満ち欠けのように、髪も気分も人それぞれリズムがあります。今日のあなたに合うかたちを、毎回手探りで見つける場所でありたかった。それで、月の名前にしました。",
  },
  {
    q: "施術で大切にしていることはなんですか。",
    a: "鏡の前で過ごす2時間を、自分のための時間に戻してあげること。会話の量も、無言の心地よさも、その日の表情を見ながら整えています。",
  },
  {
    q: "オーガニックハーブカラーにこだわる理由は？",
    a: "刺激の強い薬剤に肌が反応する方が増えてきました。色を諦めずに、頭皮の体感が変わる選択肢を、ちゃんと持っておきたかった。",
  },
];

export function SalonTop() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-salon-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(
              (e.target as HTMLElement).getAttribute("data-salon-section") ?? "0",
            );
            setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-40% 0% -50% 0%" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <IssueSpineTag />
      <PageNumberIndicator
        active={activeIndex - 1}
        total={5}
        visible={activeIndex >= 1}
      />

      <CoverHero />
      <IndexStrip />
      <ConceptEditorial />
      <TreatmentsIndex />
      <LookBookSection />
      <InterviewSection />
      <ReservationCard />
    </>
  );
}

// ---------- Fixed indicators ----------

function IssueSpineTag() {
  return (
    <aside
      aria-hidden
      className="pointer-events-none fixed left-4 top-1/2 z-20 hidden -translate-y-1/2 lg:block"
    >
      <p className="whitespace-nowrap text-[10px] uppercase tracking-[0.5em] text-[#B8896A]/70 [writing-mode:vertical-rl]">
        Issue №24 · LUNA · Spring / Summer 2026
      </p>
    </aside>
  );
}

function PageNumberIndicator({
  active,
  total,
  visible,
}: {
  active: number;
  total: number;
  visible: boolean;
}) {
  return (
    <aside
      aria-hidden
      className={`pointer-events-none fixed right-6 top-1/2 z-20 hidden -translate-y-1/2 transition-opacity duration-700 lg:block ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ul className="flex flex-col items-end gap-3 text-[10px] uppercase tracking-[0.4em]">
        {Array.from({ length: total }).map((_, i) => {
          const isActive = i === active;
          return (
            <li key={i} className="flex items-center gap-3">
              <span
                className={`tabular-nums transition-colors duration-500 ${
                  isActive ? "text-[#B8896A]" : "text-[#B8896A]/30"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`h-px transition-all duration-500 ${
                  isActive ? "w-8 bg-[#B8896A]" : "w-3 bg-[#B8896A]/30"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

// ---------- Sections ----------

function CoverHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      data-salon-section="0"
      className="relative bg-[#E8DCD0] text-[#2E2A26]"
    >
      <div className="relative px-6 pt-32 pb-16 sm:px-12 sm:pt-36 sm:pb-20 lg:px-20 lg:pt-40 lg:pb-24">
        {/* Issue meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mb-12 flex max-w-6xl items-center justify-between gap-4 border-b border-[#2E2A26]/15 pb-5 text-[10px] uppercase tracking-[0.4em] text-[#B8896A] sm:text-[11px]"
        >
          <span>Issue №24</span>
          <span className="hidden sm:inline">Spring / Summer 2026</span>
          <span>Omotesando</span>
        </motion.div>

        {/* Cover spread */}
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <motion.figure
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/salon/01-hero-back.webp"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-[#B8896A]">
              <span>Cover / Atelier</span>
              <span>Photo · Mio Tanaka</span>
            </figcaption>
          </motion.figure>

          {/* Cover content */}
          <div className="flex flex-col gap-8 sm:gap-10">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="text-[10px] uppercase tracking-[0.5em] text-[#B8896A]"
              >
                Hair &amp; Atelier · Since 2020
              </motion.p>
              <h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6.5vw,5.25rem)] italic leading-[0.95] text-[#2E2A26]">
                <RevealText text="Take your" splitBy="word" delay={0.5} />
                <br />
                <RevealText text="two hours." splitBy="word" delay={0.75} />
              </h1>
              <p className="mt-6 font-[family-name:var(--font-noto-serif-jp)] text-base leading-loose text-[#2E2A26]/80 sm:text-lg">
                <RevealText text="鏡の前の時間を、ご褒美に。" delay={1.0} />
              </p>
            </div>

            <ul className="grid gap-4 border-t border-[#2E2A26]/15 pt-6 sm:grid-cols-2 sm:gap-5">
              {[
                { no: "01", t: "Private", body: "デザイナー1名×お客様1名" },
                { no: "02", t: "Quiet 120 min", body: "平均滞在120分・ハーブティー付" },
                { no: "03", t: "Atelier", body: "表参道駅から徒歩4分・4席のみ" },
                { no: "04", t: "Organic", body: "ノンジアミンのハーブカラー" },
              ].map((m, i) => (
                <motion.li
                  key={m.no}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.08, duration: 0.6 }}
                  className="flex gap-3"
                >
                  <span className="font-[family-name:var(--font-cormorant)] text-2xl italic leading-none text-[#B8896A]">
                    {m.no}
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#B8896A]">
                      {m.t}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#2E2A26]/75 sm:text-[13px]">
                      {m.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndexStrip() {
  return (
    <section
      aria-label="Index"
      className="border-y border-[#2E2A26]/15 bg-[#E8DCD0] px-6 py-6 sm:px-12 lg:px-20"
    >
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.35em] text-[#2E2A26]/75 sm:justify-between sm:gap-x-8 sm:text-[11px] sm:tracking-[0.4em]">
        {INDEX_ITEMS.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
    </section>
  );
}

function ConceptEditorial() {
  return (
    <section
      data-salon-section="1"
      className="bg-[#E8DCD0] px-6 py-32 sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-12">
          <SectionLabel number="01" className="text-[#B8896A]">
            Concept
          </SectionLabel>
          <FadeIn>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.25rem,5vw,4rem)] italic leading-[1.05] text-[#2E2A26]">
              Personal,
              <br />
              <span className="font-[family-name:var(--font-noto-serif-jp)] not-italic text-[0.55em] tracking-[0.12em] text-[#2E2A26]/80">
                と書いて、丁寧。
              </span>
            </h2>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
          <FadeIn delay={0.1}>
            <p className="font-[family-name:var(--font-noto-serif-jp)] text-[15px] leading-[2.1] text-[#2E2A26]/85 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-[family-name:var(--font-noto-serif-jp)] first-letter:text-[5rem] first-letter:leading-[0.85] first-letter:text-[#B8896A]">
              同じ髪は、二つとありません。骨格、毛流れ、暮らしのリズム、そしてなりたい印象。鏡の前に座っていただいてから、すべてを伺ってから、はさみを入れます。
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-[family-name:var(--font-noto-serif-jp)] text-[15px] leading-[2.1] text-[#2E2A26]/85">
              ご来店からお見送りまで、平均120分。途中で淹れる季節のハーブティーと、ほんの少しの会話を挟みながら、お一人ずつのリズムで進めます。完全予約制、デザイナー1名にお客様1名。ほかのお客様とすれ違うことのない、貸切のヘアサロンです。
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <blockquote className="mx-auto mt-20 max-w-3xl border-y border-[#2E2A26]/15 py-12 text-center">
            <p className="font-[family-name:var(--font-noto-serif-jp)] text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.9] text-[#2E2A26]">
              <span className="font-[family-name:var(--font-cormorant)] italic text-[#B8896A]">
                &ldquo;
              </span>
              鏡は、自分を確かめる道具じゃない。
              <br className="hidden sm:inline" />
              自分に気づくための道具です。
              <span className="font-[family-name:var(--font-cormorant)] italic text-[#B8896A]">
                &rdquo;
              </span>
            </p>
            <p className="mt-5 text-[10px] uppercase tracking-[0.4em] text-[#B8896A]">
              — Mizuki Nogami, Owner Designer
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}

function TreatmentsIndex() {
  return (
    <section
      id="menu"
      data-salon-section="2"
      className="bg-[#2E2A26] px-6 py-32 text-[#E8DCD0] sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-12">
          <SectionLabel number="02" className="text-[#B8896A]">
            Treatments
          </SectionLabel>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,5rem)] italic leading-[0.95]">
            Index of <br className="sm:hidden" />
            <span className="text-[#B8896A]">care</span>.
          </h2>
        </div>

        <ul className="mt-16 divide-y divide-[#E8DCD0]/15 border-y border-[#E8DCD0]/15">
          {TREATMENTS.map((t, i) => (
            <motion.li
              key={t.no}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="grid grid-cols-[auto_1fr_auto] items-start gap-x-5 py-8 sm:gap-x-10"
            >
              <span className="font-[family-name:var(--font-cormorant)] text-3xl italic leading-none text-[#B8896A] sm:text-4xl">
                {t.no}
              </span>
              <div className="min-w-0">
                <p className="font-[family-name:var(--font-cormorant)] text-2xl italic leading-tight sm:text-3xl">
                  {t.name}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#E8DCD0]/55">
                  {t.ja}
                </p>
                <p className="mt-3 max-w-md font-[family-name:var(--font-noto-serif-jp)] text-[13px] leading-relaxed text-[#E8DCD0]/70">
                  {t.note}
                </p>
              </div>
              <span className="whitespace-nowrap font-[family-name:var(--font-cormorant)] text-xl italic leading-none text-[#B8896A] sm:text-2xl">
                ¥{t.price}
              </span>
            </motion.li>
          ))}
        </ul>

        <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-[#E8DCD0]/45">
          すべて税込価格 / Including tax
        </p>
      </div>
    </section>
  );
}

function LookBookSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(LOOKBOOK.length - 1) * 100}vw`],
  );

  return (
    <>
      <section
        ref={sectionRef}
        id="lookbook"
        data-salon-section="3"
        className="relative bg-[#E8DCD0]"
        style={{ height: `${LOOKBOOK.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Heading bar (overlay) */}
          <div className="pointer-events-none absolute inset-x-0 top-20 z-10 px-6 sm:top-24 sm:px-12 lg:px-20">
            <div className="mx-auto flex max-w-6xl items-end justify-between gap-4">
              <SectionLabel number="03" className="text-[#B8896A]">
                Look Book
              </SectionLabel>
              <ScrollPagination
                scrollYProgress={scrollYProgress}
                total={LOOKBOOK.length}
              />
            </div>
          </div>

          {/* Horizontal track */}
          <motion.div style={{ x }} className="flex h-full">
            {LOOKBOOK.map((look, i) => (
              <LookSlide
                key={look.src}
                look={look}
                index={i}
                total={LOOKBOOK.length}
              />
            ))}
          </motion.div>

          {/* Scroll hint */}
          <div className="pointer-events-none absolute bottom-8 right-6 z-10 text-[10px] uppercase tracking-[0.4em] text-[#2E2A26]/45 sm:right-12 lg:right-20">
            Scroll ↓ / Look →
          </div>
        </div>
      </section>

      {/* Below-fold link to full gallery */}
      <section className="bg-[#E8DCD0] px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <Link
            href="/salon/gallery"
            className="inline-block border border-[#2E2A26] px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#2E2A26] transition-colors hover:bg-[#2E2A26] hover:text-[#E8DCD0]"
          >
            See full look book
          </Link>
        </div>
      </section>
    </>
  );
}

function LookSlide({
  look,
  index,
  total,
}: {
  look: (typeof LOOKBOOK)[number];
  index: number;
  total: number;
}) {
  return (
    <div className="flex h-full w-screen shrink-0 items-center px-6 sm:px-12 lg:px-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={look.src}
              alt={look.title}
              fill
              sizes="(min-width: 1024px) 55vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#B8896A]">
            Look {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>
          <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,5.5vw,4.5rem)] italic leading-[0.95] text-[#2E2A26]">
            {look.title}
          </h3>
          <p className="max-w-md font-[family-name:var(--font-noto-serif-jp)] text-[15px] leading-loose text-[#2E2A26]/80">
            {look.note}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrollPagination({
  scrollYProgress,
  total,
}: {
  scrollYProgress: MotionValue<number>;
  total: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (latest) => {
      const clamped = Math.min(Math.max(latest, 0), 1);
      const idx = Math.min(Math.round(clamped * (total - 1)), total - 1);
      setCurrent(idx);
    });
    return () => unsub();
  }, [scrollYProgress, total]);

  return (
    <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.4em] text-[#B8896A] tabular-nums">
      Look {String(current + 1).padStart(2, "0")} /{" "}
      {String(total).padStart(2, "0")}
    </span>
  );
}

function InterviewSection() {
  return (
    <section
      id="stylist"
      data-salon-section="4"
      className="bg-[#E8DCD0] px-6 py-32 sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-12">
          <SectionLabel number="04" className="text-[#B8896A]">
            Interview
          </SectionLabel>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,5rem)] italic leading-[0.95] text-[#2E2A26]">
            Mizuki <br className="sm:hidden" />
            <span className="text-[#B8896A]">Nogami</span>.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/salon/12-stylist.webp"
                alt="スタイリスト 野上みずき"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-[#B8896A]">
              野上みずき — Owner Designer
            </p>
            <p className="mt-3 font-[family-name:var(--font-noto-serif-jp)] text-[13px] leading-loose text-[#2E2A26]/75">
              表参道の有名サロンに10年在籍ののち、2020年に独立。JHA入賞2回、雑誌『SPRiNG』ヘア企画レギュラー。オーガニックハーブカラー認定講師。
            </p>
          </motion.div>

          <dl className="space-y-12">
            {INTERVIEW.map((qa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <dt className="flex gap-4 font-[family-name:var(--font-noto-serif-jp)] text-base leading-relaxed text-[#2E2A26] sm:text-lg">
                  <span className="shrink-0 font-[family-name:var(--font-cormorant)] text-2xl italic leading-none text-[#B8896A]">
                    Q.
                  </span>
                  <span>{qa.q}</span>
                </dt>
                <dd className="mt-4 flex gap-4 font-[family-name:var(--font-noto-serif-jp)] text-[14px] leading-loose text-[#2E2A26]/75">
                  <span className="shrink-0 font-[family-name:var(--font-cormorant)] text-2xl italic leading-none text-[#2E2A26]/40">
                    A.
                  </span>
                  <span>{qa.a}</span>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function ReservationCard() {
  return (
    <section
      data-salon-section="5"
      className="relative overflow-hidden bg-[#2E2A26] px-6 py-32 text-[#E8DCD0] sm:px-12 lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 80% 30%, rgba(184, 137, 106, 0.4) 0%, transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl">
        <SectionLabel number="05" className="text-[#B8896A]">
          Reservation
        </SectionLabel>

        <div className="relative mt-10 border border-dashed border-[#B8896A]/50 p-8 sm:p-12 lg:p-16">
          {/* Corner ornaments */}
          <span
            aria-hidden
            className="absolute -left-2 -top-2 size-4 border-l border-t border-[#B8896A]"
          />
          <span
            aria-hidden
            className="absolute -right-2 -top-2 size-4 border-r border-t border-[#B8896A]"
          />
          <span
            aria-hidden
            className="absolute -bottom-2 -left-2 size-4 border-b border-l border-[#B8896A]"
          />
          <span
            aria-hidden
            className="absolute -bottom-2 -right-2 size-4 border-b border-r border-[#B8896A]"
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
            <div>
              <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#B8896A] sm:text-2xl">
                Reservation card / 予約のご案内
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,4.5rem)] italic leading-[1.0]">
                Reserve a quiet
                <br />
                two hours.
              </h2>
              <ul className="mt-8 space-y-2 font-[family-name:var(--font-noto-serif-jp)] text-[13px] leading-relaxed text-[#E8DCD0]/75 sm:text-sm">
                <li>— ご希望日の3週間前まで、オンラインで承ります。</li>
                <li>— 完全予約制 / 水曜定休 / 10:00 — 19:00</li>
                <li>— 表参道駅 A2出口から徒歩4分</li>
              </ul>
            </div>

            <div className="flex flex-col items-start gap-3 lg:items-end">
              <Link href="/salon/reservation">
                <MagneticButton className="border border-[#B8896A] bg-transparent text-[#B8896A] hover:bg-[#B8896A] hover:text-[#2E2A26]">
                  <span className="tracking-[0.3em] uppercase">Reserve now</span>
                </MagneticButton>
              </Link>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#E8DCD0]/40">
                Issue №24 · Page 32
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
