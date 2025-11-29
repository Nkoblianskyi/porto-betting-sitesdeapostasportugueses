import Link from "next/link"
import { Shield, Eye, Lock, Database, UserCheck, Mail, FileText, ArrowLeft } from "lucide-react"

export default function PoliticaPrivacidadePage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=football stadium night lights)",
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
          <div className="container mx-auto max-w-[1220px] px-4 text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide mb-2">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">Última atualização: Janeiro de 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-[900px] px-4 py-12">
          <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border p-6 md:p-10 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-xl font-bold text-foreground uppercase">Introdução</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                O sitesdeapostasportugueses.com está comprometido em proteger a privacidade dos nossos visitantes. Esta
                política explica como recolhemos, utilizamos e protegemos as suas informações pessoais.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-secondary" />
                <h2 className="font-heading text-xl font-bold text-foreground uppercase">Dados Recolhidos</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-muted/30 border-l-4 border-primary p-4 rounded-r">
                  <h3 className="font-semibold text-foreground mb-2">Informações Automáticas</h3>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Endereço IP e localização aproximada</li>
                    <li>• Tipo de navegador e sistema operativo</li>
                    <li>• Páginas visitadas e tempo de permanência</li>
                  </ul>
                </div>
                <div className="bg-muted/30 border-l-4 border-secondary p-4 rounded-r">
                  <h3 className="font-semibold text-foreground mb-2">Informações Voluntárias</h3>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Dados em formulários de contacto</li>
                    <li>• Preferências de cookies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-emerald-400" />
                <h2 className="font-heading text-xl font-bold text-foreground uppercase">Utilização dos Dados</h2>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Personalizar conteúdo e recomendações</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Analisar padrões de navegação</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Responder a pedidos de contacto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Cumprir obrigações legais</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-xl font-bold text-foreground uppercase">Proteção de Dados</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para proteger os seus dados contra acesso
                não autorizado, perda ou alteração, incluindo encriptação SSL/TLS e firewalls.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-secondary" />
                <h2 className="font-heading text-xl font-bold text-foreground uppercase">Os Seus Direitos</h2>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded p-4">
                <p className="text-muted-foreground mb-3">Ao abrigo do RGPD, tem direito a:</p>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-primary">→</span> Acesso aos seus dados
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-primary">→</span> Retificação
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-primary">→</span> Apagamento
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-primary">→</span> Portabilidade
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-primary">→</span> Oposição
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-primary">→</span> Limitação
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-xl font-bold text-foreground uppercase">Contacto</h2>
              </div>
              <div className="bg-muted/30 rounded p-4 border border-border">
                <p className="text-muted-foreground text-sm mb-2">
                  Para exercer os seus direitos ou esclarecer dúvidas:
                </p>
                <p className="text-foreground font-semibold">privacidade@sitesdeapostasportugueses.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
