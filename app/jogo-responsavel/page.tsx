import Link from "next/link"
import { ArrowLeft, AlertTriangle, Shield, Heart, Phone, Lock, Clock } from "lucide-react"
import { Header } from "@/components/header"

export default function ResponsibleGamingPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=football stadium green field)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90 z-0" />

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black/60 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
          <div className="container mx-auto max-w-[1220px] px-4 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <div className="bg-emerald-900/30 border-b border-emerald-700/30 py-12">
          <div className="container mx-auto max-w-[1220px] px-4">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
                Jogo Responsável
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">Apostar deve ser sempre entretenimento, nunca um problema.</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-[1220px] px-4 py-12 space-y-6">
          {/* Warning */}
          <div className="bg-destructive/20 border-2 border-destructive/50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
              <div>
                <h2 className="font-heading text-xl font-bold text-destructive uppercase mb-2">Aviso Importante</h2>
                <p className="text-foreground leading-relaxed mb-2">
                  As apostas desportivas podem ser viciantes e causar problemas financeiros e pessoais graves.
                </p>
                <p className="text-destructive font-semibold">
                  Proibido a menores de 18 anos. Se tem problemas com o jogo, procure ajuda.
                </p>
              </div>
            </div>
          </div>

          {/* What is Responsible Gaming */}
          <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-600 rounded flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground uppercase mb-3">
                  O Que é Jogo Responsável?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Jogo responsável significa apostar de forma consciente, controlada e segura, mantendo equilíbrio entre
                  entretenimento e responsabilidade pessoal e financeira.
                </p>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border p-6">
            <h2 className="font-heading text-xl font-bold text-foreground uppercase mb-4">Princípios Fundamentais</h2>
            <div className="space-y-3">
              <div className="flex gap-4 p-4 bg-muted/30 rounded border border-border">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Aposte Apenas o Que Pode Perder</h3>
                  <p className="text-muted-foreground text-sm">Nunca use dinheiro de despesas essenciais.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-muted/30 rounded border border-border">
                <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Estabeleça Limites</h3>
                  <p className="text-muted-foreground text-sm">Defina limites de tempo e dinheiro antecipadamente.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-muted/30 rounded border border-border">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Nunca Persiga Perdas</h3>
                  <p className="text-muted-foreground text-sm">Perder faz parte. Não tente recuperar apostando mais.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-muted/30 rounded border border-border">
                <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Não Aposte Sob Influência</h3>
                  <p className="text-muted-foreground text-sm">Evite apostar sob efeito de álcool ou emoções fortes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Warning Signs */}
          <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-destructive rounded flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-destructive-foreground" />
              </div>
              <h2 className="font-heading text-xl font-bold text-foreground uppercase">Sinais de Alerta</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex gap-2 items-start">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Apostar mais do que pode perder</span>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Mentir sobre quanto gasta</span>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Negligenciar responsabilidades</span>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Pedir dinheiro para apostar</span>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Sentir necessidade de apostar mais</span>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Ansiedade quando não pode apostar</span>
              </div>
            </div>
          </div>

          {/* Self-Exclusion Tools */}
          <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h2 className="font-heading text-xl font-bold text-foreground uppercase">Ferramentas de Controlo</h2>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Limites de Depósito</h3>
                  <p className="text-muted-foreground text-sm">Defina limites diários, semanais ou mensais.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Lock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">Autoexclusão</h3>
                  <p className="text-muted-foreground text-sm">Bloqueie o acesso temporária ou permanentemente.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Help Resources */}
          <div className="bg-gradient-to-r from-emerald-900/30 via-emerald-800/20 to-emerald-900/30 rounded-lg border border-emerald-700/30 p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground uppercase mb-2">Onde Procurar Ajuda</h2>
                <p className="text-muted-foreground">
                  Se você ou alguém que conhece tem problemas com o jogo, procure ajuda profissional:
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded p-4 border border-emerald-700/30">
                <h3 className="font-semibold text-foreground mb-2">ICAD</h3>
                <p className="text-primary font-bold text-xl">211 148 148</p>
                <p className="text-muted-foreground text-sm">www.icad.pt</p>
              </div>
              <div className="bg-black/30 rounded p-4 border border-emerald-700/30">
                <h3 className="font-semibold text-foreground mb-2">Linha Vida</h3>
                <p className="text-primary font-bold text-xl">808 200 204</p>
                <p className="text-muted-foreground text-sm">Apoio psicológico</p>
              </div>
              <div className="bg-black/30 rounded p-4 border border-emerald-700/30">
                <h3 className="font-semibold text-foreground mb-2">Jogadores Anónimos</h3>
                <p className="text-muted-foreground text-sm">www.jogadoresanonimos.pt</p>
              </div>
              <div className="bg-black/30 rounded p-4 border border-emerald-700/30">
                <h3 className="font-semibold text-foreground mb-2">SRIJ</h3>
                <p className="text-muted-foreground text-sm">www.srij.turismodeportugal.pt</p>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-emerald-900/20 border border-emerald-700/30 rounded p-6 text-center">
            <p className="text-foreground leading-relaxed">
              <strong>Lembre-se:</strong> Pedir ajuda é um sinal de força. Quanto mais cedo procurar apoio, mais fácil
              será recuperar o controlo da sua vida.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
