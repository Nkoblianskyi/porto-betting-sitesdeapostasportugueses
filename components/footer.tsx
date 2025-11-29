import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-border py-8 w-full">
      <div className="container mx-auto max-w-[1220px] px-4">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
            <div>
              <h2 className="font-heading text-lg font-bold uppercase">
                <span className="text-green-600">SITES</span>
                <span className="text-foreground">DEAPOSTAS</span>
                <span className="text-red-600">PORTUGUESES</span>
              </h2>
            </div>
          </Link>

          <nav className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
            <Link href="/politica-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
              Privacidade
            </Link>
            <Link href="/politica-cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
            <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
              Sobre Nós
            </Link>
            <Link href="/jogo-responsavel" className="text-muted-foreground hover:text-primary transition-colors">
              Jogo Responsável
            </Link>
          </nav>

          <div className="w-10 h-10 bg-destructive rounded-full flex items-center justify-center">
            <span className="text-destructive-foreground font-bold text-sm">18+</span>
          </div>
        </div>

        {/* Organizations */}
        <div className="border-t border-border pt-6 mb-6">
          <h4 className="text-muted-foreground font-semibold mb-4 text-center text-sm uppercase tracking-wide">
            Organizações
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <Link
              href="https://www.icad.pt/"
              target="_blank"
              className="bg-white  rounded p-3 transition-colors"
            >
              <img src="/icad.png" alt="SICAD" className="h-8 w-auto object-contain opacity-90 hover:opacity-100" />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              className="bg-white  rounded p-3 transition-colors"
            >
              <img
                src="/gamecare.svg"
                alt="GamCare"
                className="h-8 w-auto object-contain opacity-90 hover:opacity-100"
              />
            </Link>
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              className="bg-muted/30 hover:bg-muted/50 rounded p-3 transition-colors"
            >
              <img src="/srij.svg" alt="SRIJ" className="h-8 w-auto object-contain opacity-90 hover:opacity-100" />
            </Link>
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              className="bg-white  rounded p-3 transition-colors"
            >
              <img
                src="/gamble.webp"
                alt="GambleAware"
                className="h-8 w-auto object-contain opacity-90 hover:opacity-100"
              />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              className="bg-muted/30 hover:bg-muted/50 rounded p-3 transition-colors"
            >
              <img
                src="/jogo2.png"
                alt="Jogo Responsável"
                className="h-8 w-auto object-contain opacity-90 hover:opacity-100"
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 <span className="text-green-600">SITES</span>
            <span className="text-foreground">DEAPOSTAS</span>
            <span className="text-red-600">PORTUGUESES</span>.COM - Todos os direitos reservados
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Ranking independente de sites de apostas desportivas em Portugal
          </p>
        </div>
      </div>
    </footer>
  )
}
