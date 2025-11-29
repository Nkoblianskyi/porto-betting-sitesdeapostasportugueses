import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"
import { Crown } from "lucide-react"

export function OurChoiceSection() {
  const topSite = bettingSites[0]

  return (
    <section className="py-6 md:py-8 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        <div className="bg-gradient-to-r from-primary/5 via-card to-primary/5 rounded-lg border border-primary/20 p-4 md:p-6">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <Crown className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground uppercase tracking-wide">
                A Nossa Escolha
              </h2>
              <p className="text-muted-foreground text-xs md:text-sm">Melhor plataforma segundo a nossa análise</p>
            </div>
          </div>

          <BettingSiteCard site={topSite} rank={1} />
        </div>
      </div>
    </section>
  )
}
