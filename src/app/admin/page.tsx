import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { getVideos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "影片管理 | Kong's Fitness",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function AdminPage() {
  const videos = getVideos();

  return (
    <main className="min-h-screen bg-neutral-100 py-12">
      <Container className="max-w-2xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h1 className="font-heading text-3xl font-bold text-neutral-900">YouTube 影片設定</h1>
          <p className="mt-3 text-neutral-600">
            影片連結由環境變數管理。請編輯 <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm">.env.local</code>{" "}
            （本機）或 Vercel 環境變數（正式環境）。
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-sm font-medium text-neutral-500">首頁影片 ID</p>
              <p className="mt-1 font-mono text-lg text-neutral-900">{videos.home}</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-sm font-medium text-neutral-500">解鎖頁影片 ID</p>
              <p className="mt-1 font-mono text-lg text-neutral-900">{videos.unlock}</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-neutral-50 p-5 text-sm leading-relaxed text-neutral-600">
            <p className="font-semibold text-neutral-800">.env.local 範例</p>
            <pre className="mt-3 overflow-x-auto rounded-xl bg-white p-4 text-xs text-neutral-800">{`YOUTUBE_HOME=https://www.youtube.com/watch?v=YOUR_HOME_VIDEO
YOUTUBE_UNLOCK=https://www.youtube.com/watch?v=YOUR_UNLOCK_VIDEO`}</pre>
            <p className="mt-4">
              修改後請重新啟動 <code className="rounded bg-white px-1">npm run dev</code>。在 Vercel 上修改環境變數後需重新部署。
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
