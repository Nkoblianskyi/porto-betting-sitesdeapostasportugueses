import Link from "next/link"
import { Shield, CheckCircle } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-black/60 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 w-full">
      <div className="container mx-auto max-w-[1220px] px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
            <div className="hidden sm:block">
              <h1 className="font-heading text-lg md:text-xl font-bold tracking-wide uppercase">
                <span className="text-green-600">SITES</span>
                <span className="text-foreground">DEAPOSTAS</span>
                <span className="text-red-600">PORTUGUESES</span>
              </h1>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Ranking Independente de Apostas
              </p>
            </div>
          </Link>

          {/* Trust Badges */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* SRIJ Badge */}
            <div className="flex items-center gap-1.5 bg-muted/50 px-2 py-1.5 rounded border border-border">
              <img src="/srij.svg" alt="SRIJ" className="w-5 h-5 md:w-6 md:h-6" />
            
            </div>

            {/* Secure Badge */}
            <div className="flex items-center gap-1.5 bg-emerald-900/50 px-2 py-1.5 rounded border border-emerald-700/50">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] md:text-xs text-emerald-400 font-medium hidden sm:inline">SEGURO</span>
            </div>

            {/* 18+ Badge */}
            <div className="w-9 h-9 md:w-10 md:h-10 bg-destructive rounded-full flex items-center justify-center border-2 border-destructive/50">
              <span className="text-destructive-foreground font-bold text-xs md:text-sm">18+</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
