import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BrandPhilosophy } from "@/components/brand-philosophy"
import { FeaturedCollection } from "@/components/featured-collection"
import { CraftsmanshipSection } from "@/components/craftsmanship-section"
import { CustomOrderSection } from "@/components/custom-order-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BrandPhilosophy />
      <FeaturedCollection />
      <CraftsmanshipSection />
      <CustomOrderSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
