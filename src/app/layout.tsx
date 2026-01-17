import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLinks } from "@/components/ui/skip-links";
import { ThemeProvider } from "@/lib/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Better font loading performance
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload primary font
  fallback: ['ui-monospace', 'monaco'],
});

export const metadata: Metadata = {
  title: {
    default: "CodeStorm Hub",
    template: "%s | CodeStorm Hub",
  },
  description: "A vibrant community of open source enthusiasts, researchers, and creators. We collaborate on powerful open-source solutions.",
  keywords: ["open source", "community", "collaboration", "development", "research"],
  authors: [{ name: "CodeStorm Hub Team" }],
  creator: "CodeStorm Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestorm-hub.github.io",
    title: "CodeStorm Hub",
    description: "A vibrant community of open source enthusiasts, researchers, and creators.",
    siteName: "CodeStorm Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeStorm Hub",
    description: "A vibrant community of open source enthusiasts, researchers, and creators.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SkipLinks />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
