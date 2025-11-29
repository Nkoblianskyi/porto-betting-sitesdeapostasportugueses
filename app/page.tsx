"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { OurChoiceSection } from "@/components/our-choice-section"
import { InfoSections } from "@/components/info-sections"

export default function HomePage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/soccer-team-celebrating-championship-victory-with-.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95 z-0" />

      <div className="relative z-10">
        <Header />
        <Hero />
        <RatingSection />
        <InfoSections />
        <OurChoiceSection />
      </div>
    </div>
  )
}
