import Image from "next/image";
import {
  caseStudy,
  coaches,
  faqItems,
  images,
  problems,
  targetAudience,
  testimonials,
} from "@/data/content";
import { FaqAccordion, RegisterForm, YouTubeEmbed } from "@/components/client";
import { Container, CtaButton, Section, SectionHeading } from "@/components/ui";
import { getVideos } from "@/lib/videos";

export const dynamic = "force-dynamic";

export default function Home() {
  const { home: homeYoutubeId, register: registerYoutubeId } = getVideos();
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-white/95 backdrop-blur-md">
        <Container className="flex items-center justify-between py-4">
          <Image
            src={images.logo}
            alt="Kong's Fitness"
            width={200}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <CtaButton href="#register" className="!px-5 !py-2.5 !text-base">
            立即解鎖免費影片
          </CtaButton>
        </Container>
      </header>

      <main>
        {/* Hero */}
        <Section className="relative overflow-hidden bg-brand-dark py-16 text-white md:py-24">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{ backgroundImage: `url("${images.heroBg}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark/35 to-brand-dark/55" />
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-heading text-xl font-medium leading-relaxed text-neutral-100 md:text-2xl">
                如果每星期都努力付出時間健身，但身形幾乎沒有變化？
              </p>
              <p className="mt-3 font-heading text-xl font-medium leading-relaxed text-neutral-100 md:text-2xl">
                可能是你還未建立「屬於自己的健身模式」。
              </p>
              <h1 className="mt-8 font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
                10 分鐘幫你建立一個
                <br />
                正確的健身訓練系統
              </h1>
              <p className="mt-4 text-xl text-neutral-200 md:text-2xl">
                助你從「不知道怎麼開始」到開始看到變化
              </p>
              <div className="mt-8 flex justify-center">
                <CtaButton href="#register">立即解鎖免費影片</CtaButton>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-4xl">
              <YouTubeEmbed videoId={homeYoutubeId} />
            </div>
          </Container>
        </Section>

        {/* Problems */}
        <Section className="bg-white">
          <Container>
            <SectionHeading className="text-center">你可能會經歷的健身難題</SectionHeading>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {problems.map((problem) => (
                <article
                  key={problem.title}
                  className="flex flex-col items-center rounded-2xl border border-neutral-100 bg-neutral-50 p-8 text-center shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-6 flex h-28 w-28 items-center justify-center">
                    <Image
                      src={problem.image}
                      alt={problem.title}
                      width={112}
                      height={112}
                      className="h-auto max-h-28 w-auto object-contain"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-neutral-900">
                    {problem.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-neutral-600">{problem.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* What you'll learn */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="mx-auto max-w-2xl rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:p-12">
              <SectionHeading className="text-center">你將在免費教學影片學會</SectionHeading>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3 text-lg text-neutral-800">
                  <span className="mt-1 text-brand-pink">💡</span>
                  <span>
                    拆解幾個常見動作的<strong className="text-brand-red">關鍵之處</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg text-neutral-800">
                  <span className="mt-1 text-brand-pink">💡</span>
                  <span>
                    指出其<strong className="text-brand-red">容易出錯</strong>的部份
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg text-neutral-800">
                  <span className="mt-1 text-brand-pink">💡</span>
                  <span>
                    說明如何規劃<strong className="text-brand-red">高效有系統性</strong>
                    的訓練內容
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg text-neutral-800">
                  <span className="mt-1 text-brand-pink">💡</span>
                  <span>
                    說明健身運動融入生活應有的<strong className="text-brand-red">心態</strong>
                  </span>
                </li>
              </ul>
              <div className="mt-10 flex justify-center">
                <CtaButton href="#register">立即解鎖免費影片</CtaButton>
              </div>
            </div>
          </Container>
        </Section>

        {/* Coaches */}
        <Section className="bg-black text-white">
          <Container>
            <SectionHeading light className="text-center">
              教練團隊
            </SectionHeading>
            <div className="mt-14 space-y-20">
              {coaches.map((coach) => (
                <article
                  key={coach.name}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div>
                    <h3 className="font-heading text-2xl font-bold md:text-3xl">
                      {coach.name}{" "}
                      <span className="text-brand-red">{coach.role}</span>
                    </h3>
                    {coach.bio.map((paragraph) => (
                      <p key={paragraph} className="mt-5 leading-relaxed text-neutral-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div
                    className={`grid gap-4 ${coach.images.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}
                  >
                    {coach.images.map((src, i) => (
                      <div
                        key={src}
                        className="relative aspect-[3/4] overflow-hidden rounded-2xl"
                      >
                        <Image
                          src={src}
                          alt={`${coach.name} ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-14 flex justify-center">
              <CtaButton href="#register">立即報名觀看 10 分鐘免費教學</CtaButton>
            </div>
          </Container>
        </Section>

        {/* Registration */}
        <Section id="register" className="bg-white scroll-mt-20">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionHeading>立即報名觀看 10 分鐘免費教學</SectionHeading>
                <p className="mt-4 text-lg text-neutral-600">
                  請輸入你的名字，我們會透過 WhatsApp 為你發送教學。
                </p>
                <div className="mt-8">
                  <RegisterForm />
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl bg-brand-purple/5 p-8 text-center">
                  <p className="font-heading text-xl font-bold text-brand-purple">
                    如果你希望真正改善體態，
                  </p>
                  <p className="mt-2 font-heading text-xl font-bold text-brand-purple">
                    請停止無效訓練，
                  </p>
                  <p className="mt-2 font-heading text-xl font-bold text-brand-red">
                    從建立正確基礎開始！
                  </p>
                </div>
                <YouTubeEmbed videoId={registerYoutubeId} variant="vertical" />
              </div>
            </div>
          </Container>
        </Section>

        {/* Case study */}
        <Section className="bg-black text-white">
          <Container>
            <SectionHeading light className="text-center">
              學員個案分享
            </SectionHeading>
            <div className="mt-10 overflow-hidden rounded-2xl">
              <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
                <Image
                  src={images.caseStudy}
                  alt="學員個案分享"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-neutral-300">
              {caseStudy.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-10 text-center font-heading text-2xl font-bold text-brand-red md:text-3xl">
              讓我們用短短 5 個月的數據說話！
            </p>
            <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
              <ul className="space-y-4">
                {caseStudy.stats.map((stat) => (
                  <li
                    key={stat.label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4"
                  >
                    <span className="text-brand-pink">✓</span>
                    <span>
                      {stat.label}{" "}
                      <strong className="text-brand-red">{stat.value}</strong>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={images.beforeAfter}
                  alt="學員前後對比"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <CtaButton href="#register">立即解鎖免費影片</CtaButton>
            </div>
          </Container>
        </Section>

        {/* Testimonials */}
        <Section className="bg-brand-burgundy text-white">
          <Container>
            <h3 className="text-center font-heading text-2xl font-bold md:text-3xl">學員評價</h3>
            <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-300">
              每一則來自學員的正面評價，都是對我們專業與理念最真實的肯定！
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <p className="font-heading text-lg font-bold">{t.name}</p>
                      <p className="text-sm text-neutral-400">{t.role}</p>
                    </div>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-neutral-200">{t.quote}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Target audience */}
        <Section className="bg-white">
          <Container>
            <SectionHeading className="text-center">
              「Kong&apos;s Fitness 系統化訓練」適合以下人士：
            </SectionHeading>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {targetAudience.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-neutral-100 bg-neutral-50 p-6 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-brand-red">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <CtaButton href="#register">立即解鎖免費影片</CtaButton>
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section className="bg-neutral-50">
          <Container>
            <SectionHeading className="text-center">
              「Kong&apos;s Fitness 系統化訓練」常見問題 FAQ
            </SectionHeading>
            <div className="mx-auto mt-10 max-w-3xl">
              <FaqAccordion items={faqItems} />
            </div>
          </Container>
        </Section>

        {/* Footer */}
        <footer className="bg-brand-dark py-12 text-neutral-400">
          <Container>
            <p className="text-center text-sm font-semibold text-white">注意：收益免責聲明！</p>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed">
              我們不相信快速達到目標，我們相信向著正確的方向持之以恆，這就是我們的課程初衷。正如法律規定，我們不能也不會提供你任何成果與收益保證。所有數字僅為說明用途，如果你有任何疑問，請發送電子郵件至{" "}
              <a
                href="mailto:info@kongsfitness.com"
                className="text-white/80 underline hover:text-white"
              >
                info@kongsfitness.com
              </a>
            </p>
            <p className="mt-6 text-center text-sm text-white/60">
              Copyright © Kong&apos;s Fitness，版權所有。
            </p>
          </Container>
        </footer>
      </main>
    </>
  );
}
