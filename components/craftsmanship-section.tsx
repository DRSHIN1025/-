import { Button } from "@/components/ui/button"

export function CraftsmanshipSection() {
  return (
    <section id="craftsmanship" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/master-craftsman-working-on-luxury-leather-handbag.jpg"
                alt="Master craftsman at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">45년 경력의 명품 장인</h2>
            <h3 className="text-2xl text-accent font-medium mb-8 tracking-wide">
              Master Craftsman with 45 Years of Excellence
            </h3>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted leading-relaxed">
                Each LEREVENA handbag is a testament to decades of refined craftsmanship. Our master artisan, with 45
                years of experience, brings unparalleled skill and attention to detail to every piece.
              </p>

              <p className="text-lg text-muted leading-relaxed">
                From selecting the finest leather to the final hand-stitched details, every step is executed with
                precision and passion. This dedication to traditional techniques combined with contemporary design
                creates truly exceptional pieces.
              </p>

              <p className="text-lg text-muted leading-relaxed">
                The result is not just a handbag, but a work of art that will accompany you through life's most precious
                moments.
              </p>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 bg-transparent"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
