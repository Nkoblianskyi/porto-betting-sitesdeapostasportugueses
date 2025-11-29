import type React from "react"
import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { TopSitesModal } from "@/components/top-sites-modal"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })

export const metadata: Metadata = {
  title: "SitesDeApostasPortugueses.com - Melhores Sites de Apostas em Portugal 2025",
  description:
    "Ranking independente dos melhores sites de apostas desportivas em Portugal. Análises especializadas, bónus exclusivos e avaliações imparciais para apostadores portugueses.",
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#0a0f1a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full bg-background">
          {children}
          <Footer />
          <CookieBanner />
          <TopSitesModal />
        </div>
      </body>
    </html>
  )
}
