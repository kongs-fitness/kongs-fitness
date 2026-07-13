"use client";

import Image from "next/image";
import { useCallback } from "react";
import { images } from "@/data/content";

type CtaButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

function scrollToSection(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
}

export function CtaButton({
  href = "#register",
  children,
  className = "",
  type = "button",
  onClick,
}: CtaButtonProps) {
  const styles =
    "inline-flex items-center justify-center rounded-2xl bg-brand-red px-8 py-4 text-lg font-medium text-white shadow-lg shadow-brand-red/25 transition hover:scale-[1.02] hover:bg-[#a81927] active:scale-[0.98]";

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      scrollToSection(href);
    },
    [href],
  );

  if (type === "submit") {
    return (
      <button type="submit" onClick={onClick} className={`${styles} w-full ${className}`}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} onClick={handleAnchorClick} className={`${styles} ${className}`}>
      {children}
    </a>
  );
}

export function SectionHeading({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem] ${
        light ? "text-white" : "text-brand-red"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-14 md:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function SiteLogo({ priority = false }: { priority?: boolean }) {
  return (
    <>
      <Image
        src={images.logoSquare}
        alt="Kong's Fitness"
        width={48}
        height={48}
        className="h-10 w-10 rounded-full md:hidden"
        priority={priority}
      />
      <Image
        src={images.logo}
        alt="Kong's Fitness"
        width={200}
        height={36}
        className="hidden h-9 w-auto md:block"
        priority={priority}
      />
    </>
  );
}
