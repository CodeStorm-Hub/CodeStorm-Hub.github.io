import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  title: {
    default: "CodeStorm Hub // Cybernetic Software Engineering Forge",
    template: "%s | CodeStorm Hub",
  },
  description:
    "An elite collective of open-source software engineers, researchers, and systems architects forging resilient SaaS platforms and high-throughput software.",
  keywords: [
    "CodeStorm",
    "Open Source",
    "StormCom",
    "StormERP",
    "Creative Developer",
    "Systems Architecture",
    "Software Engineering",
  ],
  authors: [{ name: "CodeStorm Engineering Team" }],
  creator: "CodeStorm Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestorm-hub.github.io",
    title: "CodeStorm Hub // Cybernetic Software Forge",
    description:
      "An elite collective forging resilient open-source SaaS platforms and high-throughput software.",
    siteName: "CodeStorm Hub",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#07080b] text-[#f3f4f6] selection:bg-[#00f0ff] selection:text-[#07080b] min-h-screen flex flex-col`}
      >
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
