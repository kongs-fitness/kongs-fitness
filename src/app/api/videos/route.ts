import { NextResponse } from "next/server";
import { getVideos } from "@/lib/videos";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json({ videos: getVideos(), source: "env" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "無法讀取影片設定";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
