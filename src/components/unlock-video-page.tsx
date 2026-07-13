"use client";

import { useCallback, useEffect, useState } from "react";
import { UnlockCountdown, UnlockReveal, UnlockYouTubeEmbed } from "@/components/unlock-video";
import { Container } from "@/components/ui";
import { whatsappBusinessNumber } from "@/data/content";
import { unlockVideoContent } from "@/data/unlock-video-content";

const LEGACY_COUNTDOWN_STORAGE_KEY = "kongs-unlock-countdown-end";

export function UnlockVideoPageClient({ youtubeId }: { youtubeId: string }) {
  const content = unlockVideoContent;
  const [timerStarted, setTimerStarted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    localStorage.removeItem(LEGACY_COUNTDOWN_STORAGE_KEY);
  }, []);

  const handleVideoStart = useCallback(() => {
    setTimerStarted(true);
    setUnlocked(false);
  }, []);

  const handleComplete = useCallback(() => {
    setUnlocked(true);
    window.setTimeout(() => {
      document.getElementById("unlock-content")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, []);

  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappBusinessNumber}?text=${encodeURIComponent(content.unlock.whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Container className="max-w-3xl">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
            {content.intro.line1}
          </h1>
          <p className="mt-2 font-heading text-2xl text-neutral-700 md:text-3xl">
            {content.intro.line2}
          </p>
          <h2 className="mt-8 font-heading text-3xl font-bold leading-tight text-neutral-900 md:text-5xl">
            {content.intro.title}
          </h2>
          <p className="mt-4 text-xl text-neutral-800 md:text-2xl">
            助你從
            <strong className="text-brand-red">「不知道怎麼開始」</strong>
            到開始看到變化
          </p>
        </div>

        <div className="mt-8 rounded-2xl border-2 border-dashed border-red-200 bg-red-50 px-5 py-4">
          <p className="flex items-start gap-3 text-left text-base font-semibold text-red-700 md:text-lg">
            <span className="mt-0.5 shrink-0">⚠️</span>
            <span>{content.warning}</span>
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <UnlockYouTubeEmbed
            videoId={youtubeId}
            overlayText={content.videoOverlay}
            onStart={handleVideoStart}
          />
        </div>

        <div className="mt-10">
          <UnlockCountdown
            minutes={content.countdownMinutes}
            started={timerStarted}
            waitingText={content.countdownWaiting}
            onComplete={handleComplete}
          />
        </div>
      </Container>

      <Container className="mt-14 max-w-3xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-center font-heading text-2xl font-bold text-neutral-900 md:text-3xl">
            {content.explanation.title}
          </h2>
          <div className="mx-auto mt-6 max-w-2xl rounded-2xl bg-[#b6465f]/10 px-6 py-5 text-center">
            <p className="font-heading text-xl italic text-[#b6465f] md:text-2xl">
              {content.explanation.quote}
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-neutral-700">
            {content.explanation.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph.startsWith("這邊也不瞞你說") ? (
                  <>
                    這邊也不瞞你說，
                    <strong className="text-brand-burgundy">
                      我希望能夠用計時器的方式來找到真正想要學習健身的人，並過濾掉哪些只想要來拿工具的免費仔。
                    </strong>
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
          <p className="mt-10 text-center font-heading text-lg font-bold text-brand-burgundy md:text-xl">
            {content.explanation.hint}
          </p>
        </div>
      </Container>

      <section id="unlock-content" className="mt-14 scroll-mt-24 px-5 md:px-8">
        <UnlockReveal
          unlocked={unlocked}
          placeholder={content.unlock.placeholder}
        >
          <div className="mx-auto max-w-3xl rounded-3xl border-2 border-dashed border-[#b6465f] bg-brand-burgundy px-6 py-10 text-center text-white shadow-xl md:px-10 md:py-12">
            <h2 className="font-heading text-2xl font-bold md:text-3xl">{content.unlock.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-neutral-200">
              {content.unlock.description}
            </p>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-[#b6465f] px-8 py-4 text-lg font-medium text-white shadow-lg transition hover:bg-[#9a3a52] md:w-auto"
            >
              {content.unlock.cta}
            </button>
          </div>
        </UnlockReveal>
      </section>

      <footer className="mt-14 bg-[#1d0502] py-12 text-neutral-400">
        <Container className="max-w-3xl">
          <p className="text-center text-sm font-semibold text-white">{content.disclaimer.title}</p>
          <p className="mx-auto mt-4 text-center text-sm leading-relaxed">
            {content.disclaimer.body}{" "}
            <a
              href={`mailto:${content.disclaimer.email}`}
              className="text-white/80 underline hover:text-white"
            >
              {content.disclaimer.email}
            </a>
          </p>
          <p className="mt-6 text-center text-sm text-white/60">{content.disclaimer.copyright}</p>
        </Container>
      </footer>
    </>
  );
}
