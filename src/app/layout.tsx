import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
