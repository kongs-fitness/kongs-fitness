import type { Metadata } from "next";
import Link from "next/link";
import { UnlockVideoPageClient } from "@/components/unlock-video-page";
import { Container, SiteLogo } from "@/components/ui";
import { unlockVideoContent } from "@/data/unlock-video-content";
import { getVideos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "解鎖教學影片 | Kong's Fitness",
  description: unlockVideoContent.intro.title,
};

export const dynamic = "force-dynamic";

export default function UnlockVideoPage() {
  const content = unlockVideoContent;
  const { unlock: unlockYoutubeId } = getVideos();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-white/95 backdrop-blur-md">
        <Container className="flex items-center justify-between py-4">
          <Link href="/">
            <SiteLogo priority />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-brand-red transition hover:text-[#a81927]"
          >
            返回主頁
          </Link>
        </Container>
      </header>

      <main className="bg-neutral-100">
        <section className="bg-[#ebd4cb] py-4 text-center">
          <Container>
            <p className="font-heading text-lg font-bold text-brand-burgundy md:text-xl">
              {content.banner}
            </p>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <UnlockVideoPageClient youtubeId={unlockYoutubeId} />
        </section>
      </main>
    </>
  );
}
