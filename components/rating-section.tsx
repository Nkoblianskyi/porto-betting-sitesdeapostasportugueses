import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"
import { ListOrdered } from "lucide-react"

export function RatingSection() {
  return (
    <section className="py-4 md:py-6 px-3 md:px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <ListOrdered className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground uppercase tracking-wide">
              Top Casas de Apostas
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm">Ranking baseado em análise especializada</p>
          </div>
        </div>

        <div className="space-y-3 md:space-y-4">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
