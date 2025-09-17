"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Calendar, MessageCircle, Palette, Scissors, Crown, Phone, Mail, Clock } from "lucide-react"

export function CustomOrderSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [showConsultForm, setShowConsultForm] = useState(false)

  const customServices = [
    {
      id: "bespoke",
      title: "완전 맞춤 제작",
      subtitle: "Bespoke Creation",
      description: "당신만의 유일한 핸드백을 처음부터 끝까지 함께 만들어갑니다",
      features: ["개인 상담 3회", "소재 선택", "디자인 스케치", "제작 과정 공유"],
      duration: "4-6주",
      price: "₩2,500,000~",
      icon: Crown,
      gradient: "from-luxury-gold/20 to-luxury-navy/10",
    },
    {
      id: "personalization",
      title: "개인화 서비스",
      subtitle: "Personalization",
      description: "기존 컬렉션에 당신만의 개성을 더해보세요",
      features: ["이니셜 각인", "컬러 변경", "하드웨어 선택", "내부 라이닝 커스텀"],
      duration: "2-3주",
      price: "₩150,000~",
      icon: Palette,
      gradient: "from-luxury-navy/20 to-luxury-gold/10",
    },
    {
      id: "repair",
      title: "수선 & 복원",
      subtitle: "Repair & Restoration",
      description: "소중한 가방을 새것처럼 되살려드립니다",
      features: ["무료 진단", "정밀 수선", "컬러 복원", "하드웨어 교체"],
      duration: "1-2주",
      price: "₩80,000~",
      icon: Scissors,
      gradient: "from-neutral-200/30 to-luxury-navy/10",
    },
  ]

  return (
    <section id="custom-order" className="py-24 bg-gradient-to-b from-background to-neutral-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-luxury-gold" />
            <Badge variant="outline" className="border-luxury-navy text-luxury-navy font-semibold">
              EXCLUSIVE SERVICE
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-navy mb-6">
            당신만의 특별한 이야기를
            <br />
            <span className="text-luxury-navy font-bold relative">
              함께 만들어갑니다
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-luxury-gold/30 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            45년 장인 정신으로 완성되는 세상에 하나뿐인 핸드백. 당신의 라이프스타일과 취향을 완벽하게 반영한 작품을
            만나보세요.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {customServices.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br ${service.gradient} backdrop-blur-sm ${
                  selectedService === service.id ? "ring-2 ring-luxury-gold shadow-xl scale-105" : ""
                }`}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-full bg-white/80 group-hover:bg-luxury-gold/20 transition-colors">
                        <Icon className="w-6 h-6 text-luxury-navy group-hover:text-luxury-gold transition-colors" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.duration}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-luxury-navy bg-luxury-gold/20 px-3 py-1 rounded-full">
                        {service.price}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-luxury-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-luxury-charcoal font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-neutral-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={selectedService === service.id ? "default" : "outline"}
                    className="w-full group-hover:bg-luxury-navy group-hover:text-white transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowConsultForm(true)
                    }}
                  >
                    상담 신청하기
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {showConsultForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-serif text-luxury-navy">상담 신청</h3>
                  <Button variant="ghost" size="sm" onClick={() => setShowConsultForm(false)}>
                    ✕
                  </Button>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">성함 *</Label>
                      <Input id="name" placeholder="홍길동" />
                    </div>
                    <div>
                      <Label htmlFor="phone">연락처 *</Label>
                      <Input id="phone" placeholder="010-0000-0000" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" type="email" placeholder="example@email.com" />
                  </div>

                  <div>
                    <Label htmlFor="service">관심 서비스 *</Label>
                    <select className="w-full p-3 border border-input rounded-md bg-background">
                      <option value="">서비스를 선택해주세요</option>
                      <option value="bespoke">완전 맞춤 제작</option>
                      <option value="personalization">개인화 서비스</option>
                      <option value="repair">수선 & 복원</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">상세 요청사항</Label>
                    <Textarea
                      id="message"
                      placeholder="원하시는 디자인, 소재, 색상 등을 자세히 알려주세요..."
                      rows={4}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1 bg-luxury-navy hover:bg-luxury-navy/90">
                      상담 신청하기
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowConsultForm(false)}>
                      취소
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-luxury-navy to-luxury-navy/90 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/luxury-leather-texture.jpg')] opacity-10" />
          <div className="absolute inset-0 bg-luxury-navy/80 rounded-3xl" />
          <div className="relative z-10">
            <h3 className="text-3xl font-serif mb-4 text-luxury-cream font-bold">지금 바로 전문가와 상담하세요</h3>
            <p className="text-luxury-cream/90 mb-8 max-w-2xl mx-auto font-medium">
              경험 많은 장인이 직접 상담해드립니다. 당신의 꿈을 현실로 만들어보세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold px-8 py-4 rounded-full"
                onClick={() => setShowConsultForm(true)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                상담 예약하기
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-luxury-cream text-luxury-cream hover:bg-luxury-cream hover:text-luxury-navy px-8 py-4 rounded-full font-semibold bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                카카오톡 문의
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm text-luxury-cream/90 font-medium">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>consult@lerevena.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                <span>평일 10:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
