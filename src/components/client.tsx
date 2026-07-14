"use client";

import { useEffect, useId, useRef, useState } from "react";
import { whatsappBusinessNumber } from "@/data/content";
import { CtaButton } from "./ui";

export function RegisterForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();

    const message = `你好，我係 ${name}，想請問可以索取免費 10 分鐘 K.O.N.G 健身系統攻略嗎？`;

    const url = `https://wa.me/${whatsappBusinessNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-600">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-lg outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
          placeholder="你的名字"
        />
      </div>

      <CtaButton type="submit">立即獲取免費 10 分鐘教學 + WhatsApp 跟進</CtaButton>
    </form>
  );
}

export function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition hover:bg-neutral-50"
            >
              <span className="font-heading text-lg font-semibold text-neutral-900">
                {item.question}
              </span>
              <span
                className={`mt-1 shrink-0 text-brand-red transition-transform ${isOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-base leading-relaxed text-neutral-600">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

type YTPlayer = {
  pauseVideo: () => void;
  destroy: () => void;
};

type YTNamespace = {
  Player: new (
    elementId: string,
    options: {
      videoId: string;
      width?: string | number;
      height?: string | number;
      playerVars?: Record<string, string | number>;
      events?: {
        onStateChange?: (event: { data: number; target: YTPlayer }) => void;
        onReady?: (event: { target: YTPlayer }) => void;
      };
    },
  ) => YTPlayer;
  PlayerState: { PLAYING: number };
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const youtubePlayers = new Map<string, YTPlayer>();
let youtubeApiPromise: Promise<void> | null = null;

function loadYouTubeApi() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.YT?.Player) return Promise.resolve();

  if (!youtubeApiPromise) {
    youtubeApiPromise = new Promise((resolve) => {
      const done = () => {
        if (window.YT?.Player) resolve();
      };

      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        done();
      };

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }

      // API may already be mid-load; poll briefly until ready
      const interval = window.setInterval(() => {
        if (window.YT?.Player) {
          window.clearInterval(interval);
          done();
        }
      }, 50);
    });
  }

  return youtubeApiPromise;
}

function pauseOtherPlayers(activeId: string) {
  youtubePlayers.forEach((player, id) => {
    if (id !== activeId) {
      try {
        player.pauseVideo();
      } catch {
        // player may already be destroyed
      }
    }
  });
}

export function YouTubeEmbed({
  videoId,
  variant = "horizontal",
}: {
  videoId: string;
  variant?: "horizontal" | "vertical";
}) {
  const isVertical = variant === "vertical";
  const reactId = useId().replace(/:/g, "");
  const containerId = `yt-${reactId}`;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !window.YT?.Player) return;

      const player = new window.YT.Player(containerId, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: {
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: (event) => {
            playerRef.current = event.target;
            youtubePlayers.set(containerId, event.target);
          },
          onStateChange: (event) => {
            if (event.data === window.YT?.PlayerState.PLAYING) {
              pauseOtherPlayers(containerId);
            }
          },
        },
      });

      playerRef.current = player;
      youtubePlayers.set(containerId, player);
    });

    return () => {
      cancelled = true;
      youtubePlayers.delete(containerId);
      try {
        playerRef.current?.destroy();
      } catch {
        // ignore
      }
      playerRef.current = null;
    };
  }, [containerId, videoId]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          try {
            playerRef.current?.pauseVideo();
          } catch {
            // ignore
          }
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative overflow-hidden rounded-2xl bg-black shadow-2xl ${
        isVertical ? "mx-auto aspect-[9/16] w-full max-w-sm" : "aspect-video"
      }`}
    >
      <div id={containerId} className="absolute inset-0 h-full w-full [&>iframe]:h-full [&>iframe]:w-full" />
    </div>
  );
}
