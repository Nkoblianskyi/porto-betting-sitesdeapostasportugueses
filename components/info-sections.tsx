import {
  Shield,
  Award,
  TrendingUp,
  Smartphone,
  CreditCard,
  HeadphonesIcon,
  AlertTriangle,
  Phone,
  Heart,
} from "lucide-react"

export function InfoSections() {
  return (
    <section className="py-12 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        {/* Como avaliamos os sites */}
        <div className="bg-card/95 backdrop-blur-sm rounded-lg border border-border shadow-xl mb-8">
          <div className="p-8 lg:p-12">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide mb-4">
                Metodologia de Avaliação
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                O <span className="text-primary font-semibold">sitesdeapostasportugueses.com</span> utiliza uma
                metodologia rigorosa e transparente para avaliar cada operador licenciado em Portugal. A nossa equipa de
                especialistas realiza testes práticos durante semanas antes de publicar qualquer análise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Licenciamento e Segurança */}
              <div className="bg-background/50 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground uppercase">Segurança</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    Verificação da licença SRIJ ativa e válida
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    Análise dos protocolos SSL e encriptação
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    Avaliação da proteção de dados pessoais
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    Teste dos sistemas anti-fraude implementados
                  </li>
                </ul>
              </div>

              {/* Ofertas e Promoções */}
              <div className="bg-background/50 border border-border rounded-lg p-6 hover:border-secondary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground uppercase">Promoções</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    Análise detalhada dos bónus de boas-vindas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    Revisão dos requisitos de rollover reais
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    Comparação do valor efetivo das ofertas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    Avaliação das promoções recorrentes
                  </li>
                </ul>
              </div>

              {/* Odds e Mercados */}
              <div className="bg-background/50 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground uppercase">Odds</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    Comparação de cotações na Liga Portugal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    Análise da margem aplicada pelo operador
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    Diversidade de mercados disponíveis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    Qualidade das apostas ao vivo
                  </li>
                </ul>
              </div>

              {/* Usabilidade */}
              <div className="bg-background/50 border border-border rounded-lg p-6 hover:border-secondary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground uppercase">Usabilidade</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    Teste completo da versão móvel e desktop
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    Avaliação do processo de registo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    Análise da navegação e design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    Funcionalidades cash out e estatísticas
                  </li>
                </ul>
              </div>

              {/* Pagamentos */}
              <div className="bg-background/50 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground uppercase">Pagamentos</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    Disponibilidade de MB WAY e Multibanco
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    Teste real dos tempos de levantamento
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    Verificação de taxas e comissões
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">●</span>
                    Limites mínimos e máximos aplicados
                  </li>
                </ul>
              </div>

              {/* Suporte */}
              <div className="bg-background/50 border border-border rounded-lg p-6 hover:border-secondary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <HeadphonesIcon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground uppercase">Suporte</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    Teste do atendimento em português
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    Avaliação dos tempos de resposta
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    Canais disponíveis: chat, email, telefone
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">●</span>
                    Competência na resolução de problemas
                  </li>
                </ul>
              </div>
            </div>

            {/* Sistema de Pontuação */}
            <div className="mt-10 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-foreground uppercase text-center mb-6">
                Sistema de Classificação
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">30%</div>
                  <div className="text-xs text-muted-foreground uppercase mt-1">Segurança</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-secondary">25%</div>
                  <div className="text-xs text-muted-foreground uppercase mt-1">Promoções</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">20%</div>
                  <div className="text-xs text-muted-foreground uppercase mt-1">Odds</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-secondary">15%</div>
                  <div className="text-xs text-muted-foreground uppercase mt-1">Usabilidade</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 col-span-2 md:col-span-1">
                  <div className="text-2xl font-bold text-primary">10%</div>
                  <div className="text-xs text-muted-foreground uppercase mt-1">Suporte</div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                As nossas análises são <span className="text-primary font-semibold">100% independentes</span>.
                Atualizamos os ratings mensalmente para garantir informação precisa.
              </p>
            </div>
          </div>
        </div>

        {/* Jogo Responsável */}
        <div className="bg-card/95 backdrop-blur-sm rounded-lg border border-border shadow-xl">
          <div className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide mb-4">
                Jogo Responsável
              </h2>
              <div className="w-24 h-1 bg-destructive mx-auto mb-6"></div>
            </div>

            {/* Aviso Principal */}
            <div className="bg-destructive/10 border-2 border-destructive/50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <span className="font-heading text-xl font-bold text-destructive uppercase">
                  Atenção: As apostas podem causar dependência
                </span>
              </div>
              <p className="text-center text-muted-foreground">
                As apostas desportivas devem ser encaradas exclusivamente como entretenimento. Nunca aposte valores que
                não pode perder ou que comprometam o seu orçamento familiar. Se sentir que está a perder o controlo,
                procure ajuda imediatamente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Práticas Saudáveis */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-emerald-500" />
                  <h3 className="font-heading text-lg font-bold text-emerald-500 uppercase">Práticas Recomendadas</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    Defina um orçamento mensal e respeite-o rigorosamente
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    Estabeleça limites de tempo para as suas sessões
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    Nunca tente recuperar perdas com apostas maiores
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    Mantenha outras atividades de lazer equilibradas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    Utilize as ferramentas de autoexclusão se necessário
                  </li>
                </ul>
              </div>

              {/* Sinais de Alerta */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  <h3 className="font-heading text-lg font-bold text-destructive uppercase">Sinais de Alerta</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">●</span>
                    Apostar mais dinheiro do que pode perder
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">●</span>
                    Esconder o tempo ou valores gastos em apostas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">●</span>
                    Negligenciar responsabilidades pessoais ou profissionais
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">●</span>
                    Sentir ansiedade quando não pode apostar
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">●</span>
                    Pedir dinheiro emprestado para continuar a apostar
                  </li>
                </ul>
              </div>
            </div>

            {/* Linhas de Apoio */}
            <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-foreground uppercase text-center mb-6">
                Linhas de Apoio em Portugal
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-secondary" />
                    <span className="font-semibold text-foreground">Linha SOS Jogador</span>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">213 950 840</div>
                  <p className="text-xs text-muted-foreground">Segunda a Sexta: 10h00 - 20h00</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-secondary" />
                    <span className="font-semibold text-foreground">ICAD</span>
                  </div>
                  <div className="text-lg font-bold text-primary mb-1">www.icad.pt</div>
                  <p className="text-xs text-muted-foreground">Serviço de Intervenção nos Comportamentos Aditivos</p>
                </div>
              </div>
            </div>

            {/* Aviso Final */}
            <div className="mt-8 text-center">
              <div className="inline-block bg-destructive text-destructive-foreground font-heading font-bold text-lg uppercase px-8 py-4 rounded-lg">
                Proibido para Menores de 18 Anos
              </div>
              <p className="text-sm text-muted-foreground mt-4">O jogo pode causar dependência. Jogue com moderação.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
