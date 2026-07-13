import type { Metadata } from "next";
import { Karla, Rubik } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kong's Fitness | 系統化健身訓練",
  description:
    "10 分鐘幫你建立一個正確的健身訓練系統，助你從不知道怎麼開始到開始看到變化。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK" className={`${karla.variable} ${rubik.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
