"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  minutes: number;
  started: boolean;
  waitingText: string;
  onComplete?: () => void;
};

function createEndTime(minutes: number) {
  return Date.now() + minutes * 60 * 1000;
}

function getRemaining(endTime: number) {
  const diff = Math.max(0, endTime - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    done: diff <= 0,
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="font-heading text-3xl font-bold text-[#b6465f] md:text-4xl">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-sm text-neutral-500">{label}</div>
    </div>
  );
}

export function UnlockCountdown({ minutes, started, waitingText, onComplete }: CountdownProps) {
  const [endTime, setEndTime] = useState<number | null>(null);
  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    done: false,
  });

  useEffect(() => {
    if (!started) {
      setEndTime(null);
      setRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0, done: false });
      return;
    }

    const end = createEndTime(minutes);
    setEndTime(end);
    setRemaining(getRemaining(end));
  }, [minutes, started]);

  useEffect(() => {
    if (!endTime) return;

    const timer = window.setInterval(() => {
      const next = getRemaining(endTime);
      setRemaining(next);
      if (next.done) {
        window.clearInterval(timer);
        onComplete?.();
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [endTime, onComplete]);

  if (!started) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-300 bg-white px-6 py-5 text-center text-neutral-600">
        {waitingText}
      </div>
    );
  }

  if (!endTime) return null;

  if (remaining.done) {
    return (
      <div className="rounded-2xl border border-[#b6465f]/20 bg-[#b6465f]/5 px-6 py-5 text-center">
        <p className="font-heading text-xl font-bold text-[#b6465f]">計時器已結束</p>
        <p className="mt-2 text-neutral-600">請向下查看解鎖內容</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 md:gap-4">
      <TimeBlock value={remaining.days} label="days" />
      <span className="font-heading text-2xl font-bold text-[#b6465f]">:</span>
      <TimeBlock value={remaining.hours} label="hours" />
      <span className="font-heading text-2xl font-bold text-[#b6465f]">:</span>
      <TimeBlock value={remaining.minutes} label="minutes" />
      <span className="font-heading text-2xl font-bold text-[#b6465f]">:</span>
      <TimeBlock value={remaining.seconds} label="seconds" />
    </div>
  );
}

export function UnlockYouTubeEmbed({
  videoId,
  overlayText,
  onStart,
}: {
  videoId: string;
  overlayText: string;
  onStart: () => void;
}) {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if (started) return;
    setStarted(true);
    onStart();
  };

  const src = started
    ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`
    : `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
      <iframe
        src={src}
        title="Kong's Fitness 免費教學影片"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`absolute inset-0 h-full w-full border-0 ${started ? "" : "pointer-events-none"}`}
      />
      {!started && (
        <button
          type="button"
          onClick={handleStart}
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/50 transition hover:bg-black/40"
        >
          <span className="rounded-full bg-white/95 px-6 py-3 font-heading text-lg font-bold text-brand-burgundy shadow-lg">
            {overlayText}
          </span>
        </button>
      )}
    </div>
  );
}

export function UnlockReveal({
  children,
  unlocked,
  placeholder,
}: {
  children: React.ReactNode;
  unlocked: boolean;
  placeholder: string;
}) {
  if (!unlocked) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-300 bg-white/70 px-6 py-10 text-center text-neutral-500">
        {placeholder}
      </div>
    );
  }

  return <div className="transition-opacity duration-700">{children}</div>;
}
