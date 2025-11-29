import Link from "next/link"
import { Cookie, Settings, BarChart3, Target, Shield, Info, ArrowLeft } from "lucide-react"

export default function PoliticaCookiesPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=football stadium night atmosphere)",
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
        <div className="bg-secondary/10 border-b border-secondary/20 py-12">
          <div className="container mx-auto max-w-[1220px] px-4 text-center">
            <Cookie className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide mb-2">
              Política de Cookies
            </h1>
            <p className="text-muted-foreground">Última atualização: Janeiro de 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-[900px] px-4 py-12">
          <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border p-6 md:p-10 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-secondary" />
                <h2 className="font-heading text-xl font-bold text-foreground uppercase">O Que São Cookies?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website.
                Permitem que o site reconheça o seu dispositivo e memorize informações sobre a sua visita.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-xl font-bold text-foreground uppercase">Tipos de Cookies</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-500 bg-emerald-900/20 p-4 rounded-r">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-emerald-400" />
                      <h3 className="font-semibold text-foreground">Cookies Essenciais</h3>
                    </div>
                    <span className="bg-emerald-600 text-white text-xs px-2 py-0.5 rounded">Obrigatórios</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Necessários para o funcionamento básico do website.</p>
                </div>

                <div className="border-l-4 border-secondary bg-secondary/10 p-4 rounded-r">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-secondary" />
                      <h3 className="font-semibold text-foreground">Cookies Analíticos</h3>
                    </div>
                    <span className="bg-secondary text-white text-xs px-2 py-0.5 rounded">Opcionais</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Ajudam-nos a compreender como os visitantes interagem com o site.
                  </p>
                </div>

                <div className="border-l-4 border-primary bg-primary/10 p-4 rounded-r">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Cookies de Marketing</h3>
                    </div>
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded">Opcionais</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Utilizados para apresentar conteúdo personalizado.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-foreground uppercase mb-4">Como Gerir Cookies</h2>
              <div className="bg-muted/30 rounded p-4 border border-border">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Pode controlar os cookies através do banner de cookies ao visitar o site, ou através das configurações
                  do seu navegador. Desativar cookies essenciais pode afetar a funcionalidade do site.
                </p>
              </div>
            </section>

            <section className="border-t border-border pt-6">
              <p className="text-muted-foreground text-sm">
                Questões? Contacte-nos:{" "}
                <span className="text-primary font-semibold">cookies@sitesdeapostasportugueses.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
