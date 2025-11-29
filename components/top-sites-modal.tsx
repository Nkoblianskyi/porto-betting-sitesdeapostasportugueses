"use client"

import { Button } from "@/components/ui/button"
import { Star, X, ExternalLink, Shield } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"
import { useEffect, useState } from "react"

export function TopSitesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topSite = bettingSites[0]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 9000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleClose = () => setIsOpen(false)

  if (!isOpen || !topSite) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-card rounded-lg border border-border w-full max-w-sm relative overflow-hidden">
        {/* Header */}
        <div className="bg-primary p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary-foreground" />
            <h2 className="font-heading text-lg font-bold text-primary-foreground uppercase">Top Escolha</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-primary-foreground hover:bg-black/20 rounded-full p-1.5 transition-all"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className=" rounded p-4 mb-4">
            <img
              src={topSite.logo || "/placeholder.svg"}
              alt={topSite.name}
              className="w-32 h-16 object-contain mx-auto"
            />
          </div>

          <div className="bg-muted/30 rounded p-4 mb-4 text-center border border-border">
            <div className="text-primary text-xs font-bold uppercase mb-1">Bónus de Boas-Vindas</div>
            <p className="text-foreground font-bold text-lg">{topSite.bonus}</p>
          </div>

          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < topSite.stars ? "text-primary fill-primary" : "text-muted"}`} />
              ))}
            </div>
            <div className="text-2xl font-heading font-bold text-primary">
              {(topSite.rating * 1).toFixed(1)}
              <span className="text-sm text-muted-foreground">/10</span>
            </div>
            <div className="text-muted-foreground text-xs">({topSite.reviews} avaliações)</div>
          </div>

          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5">
            <a href={topSite.url} target="_blank" rel="noopener noreferrer nofollow sponsored">
              APOSTAR AGORA
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>

          <p className="text-center text-muted-foreground text-xs mt-3">
            <span className="text-destructive font-semibold">18+</span> • Jogo Responsável • T&C Aplicáveis
          </p>
        </div>
      </div>
    </div>
  )
}
