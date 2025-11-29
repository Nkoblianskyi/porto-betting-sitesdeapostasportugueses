"use client"

import { Star, Trophy, Medal, Award, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const getPrimaryBadge = () => {
    if (site.isTopRating) return { text: "TOP RECOMENDADO", color: "bg-primary text-primary-foreground" }
    if (site.isTopLine) return { text: "MELHOR ESCOLHA", color: "bg-secondary text-secondary-foreground" }
    if (site.isPopular) return { text: "MAIS POPULAR", color: "bg-emerald-600 text-white" }
    if (site.isTrending) return { text: "EM DESTAQUE", color: "bg-orange-600 text-white" }
    return null
  }

  const calculateStars = (rating: number) => {
    const starValue = rating / 2
    const roundedStars = Math.round(starValue * 5) / 5
    const fullStars = Math.floor(roundedStars)
    const partialFill = roundedStars - fullStars
    const emptyStars = 5 - fullStars - (partialFill > 0 ? 1 : 0)
    return { fullStars, partialFill, emptyStars }
  }

  const { fullStars, partialFill, emptyStars } = calculateStars(site.rating)

  const renderStars = (size: "sm" | "md") => {
    const starClass = size === "sm" ? "w-3 h-3" : "w-4 h-4"
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className={`${starClass} fill-primary text-primary`} />)
    }

    if (partialFill > 0) {
      const fillPercentage = partialFill * 100
      stars.push(
        <div key="partial" className={`relative ${starClass}`}>
          <Star className={`absolute ${starClass} text-muted stroke-primary`} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className={`${starClass} fill-primary text-primary`} />
          </div>
        </div>,
      )
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className={`${starClass} text-muted stroke-muted-foreground`} />)
    }

    return stars
  }

  const primaryBadge = getPrimaryBadge()
  const isFirstItem = rank === 1

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className={`block relative rounded-lg p-4 md:p-5 transition-all duration-300 hover:scale-[1.01] hover:border-primary/50 cursor-pointer ${
        isFirstItem
          ? "bg-gradient-to-r from-primary/10 via-card to-primary/10 border-2 border-primary/40"
          : "bg-card/90 border border-border"
      }`}
    >
      {/* Rank Icon */}
      {rank <= 3 && (
        <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-30">
          {rank === 1 && <Trophy className="w-6 h-6 md:w-8 md:h-8 text-primary" />}
          {rank === 2 && <Medal className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />}
          {rank === 3 && <Award className="w-6 h-6 md:w-8 md:h-8 text-orange-400" />}
        </div>
      )}

      {primaryBadge && (
        <div className="absolute -top-2.5 left-4 z-20">
          <Badge
            className={`${primaryBadge.color} px-2 py-0.5 text-[10px] md:text-xs font-bold uppercase tracking-wider`}
          >
            {primaryBadge.text}
          </Badge>
        </div>
      )}

      <div className="relative z-10">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 pt-2">
          <div
            className={`w-10 h-10 lg:w-12 lg:h-12 font-heading font-bold rounded flex items-center justify-center text-lg lg:text-xl flex-shrink-0 ${
              isFirstItem ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {rank}
          </div>

          <div className="flex-shrink-0 p-2 md:p-3 rounded">
            <img
              src={site.logo || "/placeholder.svg"}
              alt={site.name}
              className="w-[120px] h-[50px] lg:w-[160px] lg:h-[70px] object-contain"
            />
          </div>

          <div className="flex-1 text-center min-w-0">
            <div className="text-primary font-heading font-bold mb-1 text-sm lg:text-base uppercase tracking-wide">
              Bónus
            </div>
            <p className="text-foreground font-semibold leading-tight text-base lg:text-xl">{site.bonus}</p>
          </div>

          <div className="text-center flex-shrink-0">
            <div className="text-xl lg:text-2xl font-heading font-bold text-primary mb-1">
              {site.rating.toFixed(1)}
              <span className="text-sm text-muted-foreground">/10</span>
            </div>
            <div className="flex items-center justify-center mb-1">{renderStars("md")}</div>
            <div className="text-muted-foreground text-xs">({site.reviews} avaliações)</div>
          </div>

          <div className="flex-shrink-0">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base">
              VISITAR SITE
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-3 pt-2">
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 font-heading font-bold rounded flex items-center justify-center text-sm flex-shrink-0 ${
                isFirstItem ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {rank}
            </div>
            <div className=" p-2 rounded flex-shrink-0">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                width={100}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="flex-1 text-right">
              <div className="text-lg font-heading font-bold text-primary">{site.rating.toFixed(1)}</div>
              <div className="flex justify-end gap-0.5">{renderStars("sm")}</div>
            </div>
          </div>

          <div className="bg-muted/30 rounded p-3 text-center border border-border">
            <div className="text-primary text-xs font-bold uppercase mb-1">Bónus</div>
            <div className="text-foreground font-semibold text-sm">{site.bonus}</div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            VISITAR SITE
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-muted-foreground text-[10px] sm:text-xs text-center">
            <span className="text-destructive font-semibold">18+</span> • Jogo Responsável • Licenciado SRIJ • T&C
            Aplicáveis
          </p>
        </div>
      </div>
    </a>
  )
}
