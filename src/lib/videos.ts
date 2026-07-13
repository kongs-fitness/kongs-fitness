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

const DEFAULT_VIDEO_ID = "h-bsynFzWjA";

function readVideoEnv(name: string): string {
  const raw = process.env[name]?.trim();
  return (raw ? parseYoutubeId(raw) : null) ?? DEFAULT_VIDEO_ID;
}

export function getVideos(): VideosConfig {
  return {
    home: readVideoEnv("YOUTUBE_HOME"),
    register: readVideoEnv("YOUTUBE_REGISTER"),
    unlock: readVideoEnv("YOUTUBE_UNLOCK"),
  };
}
