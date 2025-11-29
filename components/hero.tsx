import { Shield, CheckCircle, Clock, Award, TrendingUp } from "lucide-react"

export function Hero() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="w-full py-4 md:py-6 px-3 md:px-4 relative">
      {/* Dark Overlay for readability */}


      <div className="container mx-auto max-w-[1220px] relative z-10">
        <div className="bg-card/80 backdrop-blur-md rounded-lg border border-border overflow-hidden">
          {/* Top Bar with update date */}
          <div className="bg-muted/50 px-4 py-2 flex items-center justify-between border-b border-border">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">
                Ranking atualizado: <span className="text-foreground font-medium">{formattedDate}</span>
              </span>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Title Section */}
              <div className="flex-1">
                <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2">
                  <span className="text-primary">RANKING</span>{" "}
                  <span className="text-foreground">APOSTAS DESPORTIVAS</span>
                </h1>
                <p className="text-muted-foreground text-sm md:text-base max-w-xl">
                  Análises independentes das melhores casas de apostas licenciadas em Portugal
                </p>
              </div>

              {/* Trust Indicators Grid */}
              <div className="flex md:grid md:grid-cols-4 gap-2 md:gap-3 overflow-x-auto pb-2 md:pb-0 -mx-1 px-1 md:mx-0 md:px-0">
                <div className="bg-muted/30 rounded px-2 md:px-3 py-1.5 md:py-2 flex items-center md:flex-col gap-1.5 md:gap-0 md:items-center md:justify-center border border-border flex-shrink-0 min-w-fit">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary md:mb-1" />
                  <span className="text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">Licença SRIJ</span>
                </div>
                <div className="bg-muted/30 rounded px-2 md:px-3 py-1.5 md:py-2 flex items-center md:flex-col gap-1.5 md:gap-0 md:items-center md:justify-center border border-border flex-shrink-0 min-w-fit">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 md:mb-1" />
                  <span className="text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">100% Seguro</span>
                </div>
                <div className="bg-muted/30 rounded px-2 md:px-3 py-1.5 md:py-2 flex items-center md:flex-col gap-1.5 md:gap-0 md:items-center md:justify-center border border-border flex-shrink-0 min-w-fit">
                  <Award className="w-4 h-4 md:w-5 md:h-5 text-secondary md:mb-1" />
                  <span className="text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">Análise Expert</span>
                </div>
                <div className="hidden md:block bg-muted/30 rounded px-2 md:px-3 py-1.5 md:py-2 flex items-center md:flex-col gap-1.5 md:gap-0 md:items-center md:justify-center border border-border flex-shrink-0 min-w-fit">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary md:mb-1" />
                  <span className="text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">Odds Atuais</span>
                </div>
              </div>
            </div>

            {/* Bottom Trust Bar */}
            <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center justify-center gap-3 md:gap-6">
              <div className="flex items-center gap-2">
                <img src="/srij.svg" alt="SRIJ" className="w-6 h-6 md:w-8 md:h-8 opacity-80" />
                <span className="text-xs text-muted-foreground">Licenciado SRIJ</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/flag.png" alt="Portugal" className="w-5 h-5 md:w-6 md:h-6 opacity-80" />
                <span className="text-xs text-muted-foreground">Jogo Seguro PT</span>
              </div>
              <div className="flex items-center gap-2 text-destructive">
                <span className="font-bold text-sm">18+</span>
                <span className="text-xs text-muted-foreground">Apenas Maiores</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
