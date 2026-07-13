"use client";

import { useState } from "react";
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

export function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title="Kong's Fitness 免費教學影片"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
