import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4">LEREVENA</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              45년 장인의 손길로 완성한 시대를 초월한 핸드메이드 럭셔리. Timeless handmade luxury crafted with 45 years
              of expertise.
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-accent">Stay Connected</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Collections</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Tote Bags
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Evening Bags
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Crossbody Bags
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Satchels
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Seoul, South Korea</p>
              <p>+82 2-1234-5678</p>
              <p>info@lerevena.com</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 LEREVENA. All rights reserved. Crafted with passion in Seoul.
          </p>
        </div>
      </div>
    </footer>
  )
}
