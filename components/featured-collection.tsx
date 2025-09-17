import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FeaturedCollection() {
  const products = [
    {
      name: "Classic Tote",
      price: "₩890,000",
      image: "/luxury-leather-tote-bag-in-deep-navy.jpg",
    },
    {
      name: "Evening Clutch",
      price: "₩650,000",
      image: "/elegant-gold-evening-clutch-handbag.jpg",
    },
    {
      name: "Crossbody Bag",
      price: "₩720,000",
      image: "/premium-leather-crossbody-bag-in-cream.jpg",
    },
    {
      name: "Structured Satchel",
      price: "₩950,000",
      image: "/luxury-structured-leather-satchel-bag.jpg",
    },
  ]

  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Featured Collection</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Discover our signature pieces, each meticulously crafted with 45 years of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-accent font-medium text-lg">{product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-12 py-6 text-lg bg-transparent"
          >
            VIEW COLLECTION
          </Button>
        </div>
      </div>
    </section>
  )
}
