import Link from "next/link"
import { ArrowLeft, Target, Users, Shield, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=football fans celebrating stadium)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90 z-0" />

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black/60 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
          <div className="container mx-auto max-w-[1220px] px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-heading text-lg font-bold text-foreground">sitesdeapostasportugueses</span>
              </Link>
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
        <div className="bg-primary/10 border-b border-primary/20 py-12">
          <div className="container mx-auto max-w-[1220px] px-4">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide mb-2">
              Sobre Nós
            </h1>
            <p className="text-muted-foreground text-lg">
              A sua fonte confiável de informação sobre apostas desportivas em Portugal
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-[1220px] px-4 py-12 space-y-6">
          {/* Mission */}
          <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground uppercase mb-3">A Nossa Missão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O <strong className="text-foreground">sitesdeapostasportugueses.com</strong> nasceu com o objetivo de
                  ajudar os apostadores portugueses a encontrar as melhores plataformas de apostas desportivas de forma
                  transparente, informada e segura.
                </p>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground uppercase mb-3">O Que Fazemos</h2>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Análises Detalhadas:</strong> Testamos cada casa de apostas
                      com critérios rigorosos.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Comparações Transparentes:</strong> Rankings atualizados para
                      fácil comparação.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Jogo Responsável:</strong> Promovemos práticas de apostas
                      seguras e conscientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-heading text-xl font-bold text-foreground uppercase">Os Nossos Valores</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/30 rounded p-4 border border-border">
                <h3 className="font-semibold text-primary mb-2">Transparência</h3>
                <p className="text-muted-foreground text-sm">
                  Avaliações baseadas em critérios objetivos e claramente definidos.
                </p>
              </div>
              <div className="bg-muted/30 rounded p-4 border border-border">
                <h3 className="font-semibold text-secondary mb-2">Independência</h3>
                <p className="text-muted-foreground text-sm">
                  Análises imparciais sem influência de interesses comerciais.
                </p>
              </div>
              <div className="bg-muted/30 rounded p-4 border border-border">
                <h3 className="font-semibold text-emerald-400 mb-2">Responsabilidade</h3>
                <p className="text-muted-foreground text-sm">
                  Promovemos o jogo responsável e alertamos para os riscos.
                </p>
              </div>
              <div className="bg-muted/30 rounded p-4 border border-border">
                <h3 className="font-semibold text-primary mb-2">Atualização</h3>
                <p className="text-muted-foreground text-sm">
                  Conteúdo constantemente atualizado para informação precisa.
                </p>
              </div>
            </div>
          </div>

          {/* Why Trust Us */}
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg border border-primary/30 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground uppercase mb-3">
                  Porque Confiar em Nós?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Somos uma equipa de especialistas com anos de experiência no mercado português. Testamos pessoalmente
                  cada plataforma que recomendamos, garantindo informação honesta, precisa e útil.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-muted/30 border border-border rounded p-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Aviso:</strong> O sitesdeapostasportugueses.com é um site informativo.
              Não somos uma casa de apostas. Recomendamos sempre o jogo responsável. Se sentir que tem problemas com o
              jogo, procure ajuda profissional.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
