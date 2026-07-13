export type VideosConfig = {
  home: string;
  register: string;
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

function readVideoEnv(name: string): string | null {
  const raw = process.env[name]?.trim();
  return raw ? parseYoutubeId(raw) : null;
}

export function getVideos(): VideosConfig {
  const home = readVideoEnv("YOUTUBE_HOME");
  const register = readVideoEnv("YOUTUBE_REGISTER");
  const unlock = readVideoEnv("YOUTUBE_UNLOCK");

  if (!home || !register || !unlock) {
    throw new Error(
      "請在 .env.local 設定 YOUTUBE_HOME、YOUTUBE_REGISTER 和 YOUTUBE_UNLOCK（可貼上完整 YouTube 連結或影片 ID）",
    );
  }

  return { home, register, unlock };
}
