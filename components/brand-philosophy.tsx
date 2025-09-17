import { Card, CardContent } from "@/components/ui/card"
import { Hammer, Clock, Heart } from "lucide-react"

export function BrandPhilosophy() {
  const philosophies = [
    {
      icon: Hammer,
      title: "장인정신",
      subtitle: "Craftsmanship",
      description: "45년간 축적된 전통 기법과 현대적 감각이 만나 완성되는 완벽한 핸드메이드",
    },
    {
      icon: Clock,
      title: "클래식 가치",
      subtitle: "Timeless Value",
      description: "시대를 초월한 디자인과 변하지 않는 품질로 평생 함께할 수 있는 가치",
    },
    {
      icon: Heart,
      title: "합리적 럭셔리",
      subtitle: "Accessible Luxury",
      description: "진정한 럭셔리의 본질을 담으면서도 합리적인 가격으로 만나는 프리미엄",
    },
  ]

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Our Philosophy</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Three pillars that define our commitment to exceptional craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {philosophies.map((item, index) => (
            <Card key={index} className="border-border/50 hover:border-accent/50 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-accent font-medium mb-4 tracking-wide">{item.subtitle}</p>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
