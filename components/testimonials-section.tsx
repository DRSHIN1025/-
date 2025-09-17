import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "김서연",
      location: "서울, 대한민국",
      text: "레레베나 가방의 품질과 장인정신은 정말 뛰어납니다. 2년 넘게 매일 사용하고 있는데도 새것처럼 보여요. 투자할 가치가 충분한 명품이에요.",
      image: "/professional-woman-with-handbag.jpg",
    },
    {
      name: "박지혜",
      location: "부산, 대한민국",
      text: "여러 명품 가방을 소유해봤지만, 레레베나만큼 세심한 디테일과 우아함을 갖춘 브랜드는 없었어요. 정말 만족스러운 구매였습니다.",
      image: "/elegant-woman-with-luxury-handbag.jpg",
    },
    {
      name: "이민정",
      location: "제주도, 대한민국",
      text: "전통적인 장인정신과 현대적인 디자인이 완벽하게 조화된 가방이에요. 어디를 가든 칭찬을 받고, 소장하는 기쁨이 큽니다.",
      image: "/stylish-woman-carrying-designer-handbag.jpg",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">고객 후기</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            전국의 고객들이 레레베나를 선택하는 이유를 확인해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:border-accent/50 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                <p className="text-muted leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
