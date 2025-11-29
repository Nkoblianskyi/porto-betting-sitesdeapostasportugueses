export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  description: string
  features: string[]
  welcomeOffer: string
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Betano",
    logo: "/betano.svg",
    bonus: "10€ + 50 Rodadas Grátis",
    url: "https://www.betano.pt/",
    rating: 9.8,
    stars: 5,
    reviews: 6927,
    badges: ["SEM DEPÓSITO"],
    description: "Bónus de registo atrativo",
    features: ["Sem Depósito", "Construtor de Apostas", "App Mobile"],
    welcomeOffer: "Oferta de Registo",
    terms: "18+ | Jogo responsável | Licença SRIJ válida | Aplicam-se termos e condições",
    isTopRating: true,
  },
  {
    id: 2,
    name: "Solverde",
    logo: "/solverde.svg",
    bonus: "300% até 30€ em Aposta Grátis",
    url: "https://www.solverde.pt/",
    rating: 9.6,
    stars: 5,
    reviews: 6842,
    badges: ["MARCA NACIONAL"],
    description: "Marca portuguesa de confiança",
    features: ["Marca Nacional", "Interface Moderna", "MB Way"],
    welcomeOffer: "Bónus de Registo",
    terms: "18+ | Jogo responsável | Licença SRIJ válida | Aplicam-se termos e condições | Rollover aplicável",
    isPopular: true,
  },
  {
    id: 3,
    name: "BWIN",
    logo: "/bwin.png",
    bonus: "Aposta Grátis no Registo",
    url: "https://www.bwin.pt/pt",
    rating: 9.4,
    stars: 5,
    reviews: 5279,
    badges: ["MARCA GLOBAL"],
    description: "Marca internacional estabelecida",
    features: ["Marca Global", "Mercados Amplos", "Live Betting"],
    welcomeOffer: "Prémio de Boas-Vindas",
    terms: "18+ | Jogo responsável | Licença SRIJ válida | Aplicam-se termos e condições",
    isTrending: true,
  },
  {
    id: 4,
    name: "Luckia",
    logo: "/luckia.svg",
    bonus: "Aposta Grátis Exclusiva",
    url: "https://www.luckia.pt/",
    rating: 9.2,
    stars: 5,
    reviews: 7229,
    badges: ["OFERTA EXCLUSIVA"],
    description: "Líder do mercado português",
    features: ["Melhor Avaliação", "Odds Premium", "Streaming"],
    welcomeOffer: "Oferta de Boas-Vindas",
    terms:
      "18+ | Jogo responsável | Licença SRIJ válida | Aplicam-se termos e condições | Válido para novos utilizadores",
    isTopLine: true,
  },
  {
    id: 5,
    name: "ESC Online",
    logo: "/esc.svg",
    bonus: "Até 250€ em Freebets",
    url: "https://www.estorilsolcasinos.pt/pt",
    rating: 9.0,
    stars: 5,
    reviews: 7751,
    badges: ["GRUPO ESC"],
    description: "Estoril Sol Casinos - Tradição",
    features: ["Grupo ESC", "Live Streaming", "Cash Out"],
    welcomeOffer: "Freebets de Boas-Vindas",
    terms: "18+ | Jogo responsável | Licença SRIJ válida | Aplicam-se termos e condições",
  },
  {
    id: 6,
    name: "Betclic",
    logo: "/betclic.svg",
    bonus: "100% Até 20€",
    url: "https://www.betclic.pt/",
    rating: 8.8,
    stars: 4,
    reviews: 5701,
    badges: ["POPULAR"],
    description: "Apostas seguras e fiáveis",
    features: ["SRIJ", "Apostas Live", "Suporte PT"],
    welcomeOffer: "Bónus Primeiro Depósito",
    terms: "18+ | Jogo responsável | Licença SRIJ válida | Aplicam-se termos e condições",
    isPopular: true,
  },
  {
    id: 7,
    name: "Lebull",
    logo: "/lebull.svg",
    bonus: "250% até 400€ + 50€ Grátis",
    url: "https://www.lebull.pt/",
    rating: 8.6,
    stars: 4,
    reviews: 7257,
    badges: ["BÓNUS ALTO"],
    description: "Bónus generosos",
    features: ["Bónus Alto", "Odds Competitivas", "Cash Out"],
    welcomeOffer: "+ 50€ de Aposta Grátis",
    terms: "18+ | Jogo responsável | Licença SRIJ válida | Aplicam-se termos e condições",
  },
  {
    id: 8,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    bonus: "Aposta Grátis de 2€",
    url: "https://www.casinoportugal.pt/",
    rating: 8.4,
    stars: 4,
    reviews: 7975,
    badges: ["EM ALTA"],
    description: "Casino e desporto integrados",
    features: ["Casino + Desporto", "Pagamentos Rápidos", "App Nativa"],
    welcomeOffer: "Oferta Especial",
    terms: "18+ | Jogo responsável | Licença SRIJ válida | Aplicam-se termos e condições",
    isTrending: true,
  },
]
