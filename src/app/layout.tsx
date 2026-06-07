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
  title: "Lumora AI | AI Automation & Websites in Nepal",
  description:
    "Lumora AI helps Nepal businesses grow with modern websites, AI chatbots, lead capture, and business automation.",
  keywords: [
    "AI Automation Nepal",
    "AI Chatbots Nepal",
    "Website Development Nepal",
    "Business Automation Nepal",
    "Lead Generation Nepal",
  ],
  openGraph: {
    title: "Lumora AI | AI Automation, Chatbots & Websites in Nepal",
    description:
      "Helping businesses in Nepal generate more leads, respond faster, and grow with modern websites, AI chatbots, and smart automation.",
    type: "website",
    locale: "en_US",
  },
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
