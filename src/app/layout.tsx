import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "CodeStorm Hub - Open Source Community",
  description: "CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators. We collaborate on powerful open-source solutions.",
  keywords: ["open source", "community", "developers", "collaboration", "projects"],
  authors: [{ name: "CodeStorm Hub" }],
  creator: "CodeStorm Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codestorm-hub.github.io/",
    title: "CodeStorm Hub - Open Source Community",
    description: "CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators.",
    siteName: "CodeStorm Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeStorm Hub - Open Source Community",
    description: "CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}