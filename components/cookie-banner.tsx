"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkCookieConsent = () => {
      try {
        if (typeof window !== "undefined" && window.localStorage) {
          const cookieConsent = localStorage.getItem("cookieConsent")
          if (!cookieConsent) {
            setIsVisible(true)
          }
        }
      } catch (error) {
        setIsVisible(true)
      }
    }
    checkCookieConsent()
  }, [])

  const handleCookieChoice = (choice: "accepted" | "rejected") => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("cookieConsent", choice)
        localStorage.setItem("cookieConsentDate", new Date().toISOString())
      }
    } catch (error) {
      console.warn("Não foi possível salvar as preferências de cookies")
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border p-4 z-50">
      <div className="container mx-auto max-w-[1220px] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-foreground text-sm">
            Este site utiliza cookies para melhorar a sua experiência. Consulte a nossa{" "}
            <Link href="/politica-cookies" className="text-primary hover:underline font-medium">
              Política de Cookies
            </Link>{" "}
            para mais informações.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => handleCookieChoice("rejected")}
            variant="outline"
            size="sm"
            className="border-border text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Essenciais
          </Button>
          <Button
            onClick={() => handleCookieChoice("accepted")}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Aceitar Todos
          </Button>
        </div>
      </div>
    </div>
  )
}
