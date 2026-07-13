export type VideosConfig = {
  home: string;
  unlock: string;
};

export function parseYoutubeId(input: string): string | null {
  const value = input.trim();
  if (!value) return null;

  if (/^[\w-]{11}$/.test(value)) return value;

  try {
    const url = new URL(value);
    if (url.hostname === "youtu.be") {
      const id = url.pathname.slice(1).split("/")[0];
      return id || null;
    }

    if (url.hostname.includes("youtube.com")) {
      const fromQuery = url.searchParams.get("v");
      if (fromQuery) return fromQuery;

      const parts = url.pathname.split("/").filter(Boolean);
      const embedIndex = parts.indexOf("embed");
      if (embedIndex >= 0 && parts[embedIndex + 1]) return parts[embedIndex + 1];

      const shortsIndex = parts.indexOf("shorts");
      if (shortsIndex >= 0 && parts[shortsIndex + 1]) return parts[shortsIndex + 1];
    }
  } catch {
    return null;
  }

  return null;
}

export function getVideos(): VideosConfig {
  const homeRaw = process.env.YOUTUBE_HOME?.trim();
  const unlockRaw = process.env.YOUTUBE_UNLOCK?.trim();

  const home = homeRaw ? parseYoutubeId(homeRaw) : null;
  const unlock = unlockRaw ? parseYoutubeId(unlockRaw) : null;

  if (!home || !unlock) {
    throw new Error(
      "請在 .env.local 設定 YOUTUBE_HOME 和 YOUTUBE_UNLOCK（可貼上完整 YouTube 連結或影片 ID）",
    );
  }

  return { home, unlock };
}
