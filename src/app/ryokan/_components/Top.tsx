"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Moon, Soup, Waves } from "lucide-react";
import { FadeIn, MagneticButton, RevealText, Tilt3D } from "@/lib/animations";
import { SectionLabel } from "@/components/shared/SectionLabel";

const ROOMS = [
  {
    no: "弐拾参",
    name: "月読の間",
    en: "Tsukuyomi",
    body: "別棟・八畳二間続きに檜の露天風呂。長月から望める中庭の薄を一目に。",
    image: "/images/ryokan/03-room-tsukiyomi.webp",
  },
  {
    no: "拾壱",
    name: "宵待の間",
    en: "Yoimachi",
    body: "母屋の角部屋。夕餉の刻、西窓に沈む山並みと、行灯の灯が同時に灯ります。",
    image: "/images/ryokan/04-room-yoimachi.webp",
  },
  {
    no: "陸",
    name: "蒼月の間",
    en: "Sogetsu",
    body: "桐の本間と次の間、専用の檜風呂。お部屋食を最も気持ちよくお召し上がりいただける一室。",
    image: "/images/ryokan/05-room-sougetsu.webp",
  },
];

const KAISEKI = [
  { ja: "先附", body: "山菜の白和え、季の浸し物。" },
  { ja: "椀盛", body: "信州ぶた汁、山牛蒡。" },
  { ja: "向附", body: "信濃川の鮎、塩昆布じめ。" },
  { ja: "焼物", body: "鴨ロースの炭火焼、すりおろし山葵。" },
  { ja: "蒸物", body: "新蕎麦と松茸の蒸籠蒸し。" },
  { ja: "〆", body: "信州米の釜炊き、香の物、留椀。" },
];

export function RyokanTop() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-screen min-h-[700px] items-center overflow-hidden bg-[#0F141C] text-[#F1EAD9]">
        <Image
          src="/images/ryokan/01-hero-bridge-dusk.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,20,28,0.55) 0%, rgba(15,20,28,0.3) 50%, rgba(15,20,28,0.85) 100%)",
          }}
          aria-hidden
        />

        {/* Soft moonlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 3, delay: 1 }}
          className="pointer-events-none absolute right-[15%] top-[12%] size-40 rounded-full bg-[#D9D1B8] blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-12 lg:px-20">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="text-[10px] uppercase tracking-[0.5em] text-[#D9D1B8]"
          >
            Yumori Tsukishiro · est. 1894 · Miyama Onsen
          </motion.p>

          <h1 className="mt-10 font-[family-name:var(--font-shippori-mincho)] text-[clamp(2.5rem,7vw,6rem)] tracking-[0.1em]">
            <span className="block">
              <RevealText text="月の光と、" splitBy="word" delay={0.6} />
            </span>
            <span className="block text-[#E8743C]">
              <RevealText text="お湯の温度" splitBy="word" delay={0.9} />
            </span>
          </h1>

          <FadeIn delay={1.4}>
            <p className="mt-10 max-w-xl font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#F1EAD9]/85">
              明治二十七年創業。信州・美山温泉の谷あいに、一三〇年の灯を絶やさず守ってきた老舗。
              ひと組につき仲居が一夜寄り添う「被席」のもてなしと、月白色の名物露天風呂で、
              旅の夜を整えます。
            </p>
          </FadeIn>

          <FadeIn delay={1.7}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/ryokan/contact"
                className="inline-flex items-center gap-2 border border-[#E8743C] px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#E8743C] transition-colors hover:bg-[#E8743C] hover:text-[#0F141C]"
              >
                ご予約・お問い合わせ
                <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href="/ryokan/rooms"
                className="text-xs uppercase tracking-[0.3em] text-[#F1EAD9]/80 hover:text-white"
              >
                客室を見る →
              </Link>
            </div>
          </FadeIn>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.9 }}
          className="absolute bottom-8 right-8 z-10 hidden w-[340px] border border-[#F1EAD9]/12 bg-[#0F141C]/72 p-5 backdrop-blur-md lg:block"
        >
          <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#E8743C]">
            <Moon className="size-4" />
            Tonight
          </p>
          <dl className="mt-5 grid grid-cols-3 divide-x divide-[#F1EAD9]/12 text-center">
            {[
              { icon: Moon, label: "月齢", value: "12.4" },
              { icon: Waves, label: "湯温", value: "41℃" },
              { icon: Soup, label: "夕餉", value: "18時" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="px-3">
                  <Icon className="mx-auto mb-3 size-4 text-[#D9D1B8]" />
                  <dt className="text-[10px] tracking-[0.2em] text-[#F1EAD9]/42">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-[family-name:var(--font-cormorant)] text-2xl italic">
                    {item.value}
                  </dd>
                </div>
              );
            })}
          </dl>
        </motion.div>

      </section>

      {/* Concept */}
      <section className="bg-[#0F141C] px-6 py-40 text-[#F1EAD9] sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[1fr_1.3fr]">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            className="font-[family-name:var(--font-shippori-mincho)] text-2xl tracking-[0.1em] text-[#D9D1B8] sm:text-3xl lg:leading-[2] lg:tracking-[0.15em] lg:[writing-mode:vertical-rl]"
          >
            湯を、守る
          </motion.p>
          <div>
            <FadeIn>
              <h2 className="font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.1em] sm:text-5xl">
                <span className="inline-block">一三〇年、</span>
                <span className="inline-block">湯と灯を継ぐ</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-10 max-w-lg font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#F1EAD9]/85">
                客室は十四室。
                それぞれにお付きの仲居がつき、お着きの一服から朝の見送りまで、一夜を寄り添います。
                派手な仕掛けは、なにもありません。
                変わるのは月の満ち欠けと、廊下を渡る風の音だけ。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section
        id="rooms"
        className="bg-[#151B26] px-6 py-32 text-[#F1EAD9] sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="二" className="text-[#E8743C]">
            客室
          </SectionLabel>
          <h2 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.1em] sm:text-5xl">
            十四室、それぞれに名月
          </h2>

          <ul className="mt-16 grid gap-6 lg:grid-cols-3">
            {ROOMS.map((r, i) => (
              <motion.li
                key={r.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
              >
                <Tilt3D
                  intensity={8}
                  raise={6}
                  glare
                  className="overflow-hidden rounded-sm"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-[#0F141C] p-6">
                    <p className="font-[family-name:var(--font-shippori-mincho)] text-3xl tracking-[0.05em] text-[#D9D1B8]">
                      {r.no}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#E8743C]">
                      {r.en}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-shippori-mincho)] text-2xl tracking-[0.1em]">
                      {r.name}
                    </h3>
                    <p className="mt-4 text-sm leading-loose text-[#F1EAD9]/75">
                      {r.body}
                    </p>
                  </div>
                </Tilt3D>
              </motion.li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <Link
              href="/ryokan/rooms"
              className="inline-block border border-[#D9D1B8]/40 px-10 py-4 text-xs uppercase tracking-[0.3em] text-[#D9D1B8] transition-colors hover:border-[#E8743C] hover:text-[#E8743C]"
            >
              客室一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Bath */}
      <section
        id="bath"
        className="relative overflow-hidden bg-[#0F141C] px-6 py-32 text-[#F1EAD9] sm:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <Image
              src="/images/ryokan/06-bath-night.webp"
              alt="月白の湯"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="flex flex-col justify-center">
            <SectionLabel number="三" className="text-[#E8743C]">
              月白の湯
            </SectionLabel>
            <h2 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.1em] sm:text-5xl">
              <span className="inline-block">名物、</span>
              <span className="inline-block">月の色の露天</span>
            </h2>
            <FadeIn delay={0.15}>
              <p className="mt-10 max-w-md font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#F1EAD9]/85">
                源泉は薄く乳白色。湯気の中、湯面が月の光をやわらかく返します。
                内湯、露天、貸切の三種。夜明け前と、夕餉のあと、夜更けと、それぞれちがう顔をご覧ください。
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-[#D9D1B8]/15 pt-6 text-xs">
                <div>
                  <dt className="uppercase tracking-[0.3em] text-[#E8743C]">
                    源泉
                  </dt>
                  <dd className="mt-1 text-[#F1EAD9]">含硫黄ナトリウム泉</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.3em] text-[#E8743C]">
                    湯温
                  </dt>
                  <dd className="mt-1 text-[#F1EAD9]">42.6℃ 源泉掛け流し</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.3em] text-[#E8743C]">
                    時間
                  </dt>
                  <dd className="mt-1 text-[#F1EAD9]">24h（清掃時間を除く）</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.3em] text-[#E8743C]">
                    貸切
                  </dt>
                  <dd className="mt-1 text-[#F1EAD9]">予約制 / 50分</dd>
                </div>
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Kaiseki */}
      <section
        id="kaiseki"
        className="bg-[#151B26] px-6 py-32 text-[#F1EAD9] sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-5xl">
          <SectionLabel number="四" className="text-[#E8743C]">
            会席
          </SectionLabel>
          <h2 className="mt-6 font-[family-name:var(--font-shippori-mincho)] text-4xl tracking-[0.1em] sm:text-5xl">
            月替わりの六品
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <Image
                src="/images/ryokan/07-kaiseki-hassun.webp"
                alt="月替わりの会席"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <ul className="space-y-6">
              {KAISEKI.map((k, i) => (
                <motion.li
                  key={k.ja}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="grid grid-cols-[auto_1fr] gap-6 border-b border-[#D9D1B8]/15 pb-5"
                >
                  <span className="font-[family-name:var(--font-shippori-mincho)] text-2xl tracking-[0.1em] text-[#E8743C]">
                    {k.ja}
                  </span>
                  <span className="font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#F1EAD9]/85">
                    {k.body}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hostess */}
      <section className="bg-[#0F141C] px-6 py-32 text-[#F1EAD9] sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <Image
              src="/images/ryokan/09-okami-misao.webp"
              alt="女将ポートレート"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div>
            <SectionLabel number="五" className="text-[#E8743C]">
              女将
            </SectionLabel>
            <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl italic">
              Misao Yumori
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#D9D1B8]">
              湯守 美沙緒 · 五代目女将
            </p>
            <FadeIn delay={0.15}>
              <p className="mt-8 max-w-md font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#F1EAD9]/85">
                曽祖父、祖父、父と男系で繋いだ湯を、初の女系として継いで十五年。
                「客を選びはしない、けれど時間はゆっくり選ばせていただく」が口癖。
                料亭・酒蔵・伝統工芸の作家と組み、土地の文化を旅程に編み込んでお迎えします。
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0F141C] px-6 py-40 text-[#F1EAD9] sm:px-12 lg:px-20">
        <Image
          src="/images/ryokan/01-hero-bridge-dusk.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(15,20,28,0.45) 0%, rgba(15,20,28,0.95) 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#E8743C]">
            Reservation
          </p>
          <h2 className="mt-8 font-[family-name:var(--font-shippori-mincho)] text-[clamp(2rem,5vw,4rem)] leading-[1.4] tracking-[0.1em]">
            月を、
            <br />
            お待ちしております
          </h2>
          <p className="mt-10 font-[family-name:var(--font-noto-serif-jp)] text-sm leading-loose text-[#F1EAD9]/80">
            ご予約は六か月前より承ります。仲居の手配のため、お早めにお知らせください。
          </p>
          <div className="mt-16">
            <Link href="/ryokan/contact">
              <MagneticButton className="border border-[#E8743C] bg-transparent text-[#E8743C] hover:bg-[#E8743C] hover:text-[#0F141C]">
                <span className="tracking-[0.3em] uppercase">ご予約フォームへ</span>
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
