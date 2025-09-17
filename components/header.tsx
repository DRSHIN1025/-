"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-2xl font-serif font-bold text-luxury-navy tracking-wide hover:text-luxury-gold transition-colors"
            >
              LEREVENA
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-neutral-600 hover:text-luxury-gold transition-colors font-medium">
              About
            </a>
            <a href="#collections" className="text-neutral-600 hover:text-luxury-gold transition-colors font-medium">
              Collections
            </a>
            <a href="#craftsmanship" className="text-neutral-600 hover:text-luxury-gold transition-colors font-medium">
              Craftsmanship
            </a>
            <a
              href="#custom-order"
              className="text-neutral-600 hover:text-luxury-gold transition-colors font-medium relative"
            >
              Custom Order
              <Badge className="absolute -top-2 -right-8 bg-luxury-gold text-luxury-navy text-xs px-1.5 py-0.5">
                NEW
              </Badge>
            </a>
            <a href="#contact" className="text-neutral-600 hover:text-luxury-gold transition-colors font-medium">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="relative text-luxury-navy hover:text-luxury-gold">
              <ShoppingBag className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 bg-luxury-gold text-luxury-navy text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                2
              </Badge>
            </Button>

            <Link href="/checkout">
              <Button className="bg-luxury-navy hover:bg-luxury-navy/80 text-luxury-cream border-0 font-semibold">
                Shop Now
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#about" className="text-neutral-600 hover:text-luxury-gold transition-colors font-medium">
                About
              </a>
              <a href="#collections" className="text-neutral-600 hover:text-luxury-gold transition-colors font-medium">
                Collections
              </a>
              <a
                href="#craftsmanship"
                className="text-neutral-600 hover:text-luxury-gold transition-colors font-medium"
              >
                Craftsmanship
              </a>
              <a
                href="#custom-order"
                className="text-neutral-600 hover:text-luxury-gold transition-colors font-medium flex items-center gap-2"
              >
                Custom Order
                <Badge className="bg-luxury-gold text-luxury-navy text-xs px-1.5 py-0.5">NEW</Badge>
              </a>
              <a href="#contact" className="text-neutral-600 hover:text-luxury-gold transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
