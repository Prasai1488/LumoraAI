import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LumoraAI — Intelligent AI Solutions for the Future",
  description:
    "LumoraAI builds cutting-edge artificial intelligence products that transform how businesses automate, analyze, and innovate.",
  keywords: ["AI", "machine learning", "automation", "LumoraAI", "artificial intelligence"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
