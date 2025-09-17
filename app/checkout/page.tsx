"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Shield, Truck, CreditCard } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-luxury-navy hover:text-luxury-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            쇼핑 계속하기
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-luxury-navy">주문 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sample Product */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <img
                      src="/luxury-handbag.png"
                      alt="Product"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-luxury-navy">클래식 토트백</h3>
                    <p className="text-sm text-neutral-600">블랙 레더 / 골드 하드웨어</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-neutral-600">수량: 1</span>
                      <span className="font-semibold text-luxury-navy">₩890,000</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>상품 금액</span>
                    <span>₩890,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>배송비</span>
                    <span className="text-luxury-gold">무료</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold text-luxury-navy">
                    <span>총 결제 금액</span>
                    <span>₩890,000</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-luxury-gold/10 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-luxury-gold" />
                    <span>평생 A/S 보장</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Truck className="w-4 h-4 text-luxury-gold" />
                    <span>전국 무료배송</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Shipping Info */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-luxury-navy">배송 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">성</Label>
                      <Input id="firstName" placeholder="홍" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">이름</Label>
                      <Input id="lastName" placeholder="길동" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">연락처</Label>
                    <Input id="phone" placeholder="010-0000-0000" />
                  </div>
                  <div>
                    <Label htmlFor="address">주소</Label>
                    <Input id="address" placeholder="서울시 강남구..." />
                  </div>
                  <div>
                    <Label htmlFor="detailAddress">상세주소</Label>
                    <Input id="detailAddress" placeholder="아파트, 동/호수" />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-luxury-navy">결제 방법</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant={paymentMethod === "card" ? "default" : "outline"}
                      className="h-16 flex-col gap-2"
                      onClick={() => setPaymentMethod("card")}
                    >
                      <CreditCard className="w-5 h-5" />
                      신용카드
                    </Button>
                    <Button
                      variant={paymentMethod === "bank" ? "default" : "outline"}
                      className="h-16 flex-col gap-2"
                      onClick={() => setPaymentMethod("bank")}
                    >
                      <Shield className="w-5 h-5" />
                      무통장입금
                    </Button>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor="cardNumber">카드번호</Label>
                        <Input id="cardNumber" placeholder="0000-0000-0000-0000" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">유효기간</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="000" />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Final CTA */}
              <Button
                size="lg"
                className="w-full bg-luxury-navy hover:bg-luxury-navy/90 text-white py-6 text-lg font-semibold rounded-xl"
              >
                ₩890,000 결제하기
              </Button>

              <div className="text-center text-sm text-neutral-600">
                결제 시{" "}
                <Link href="#" className="text-luxury-gold hover:underline">
                  이용약관
                </Link>{" "}
                및{" "}
                <Link href="#" className="text-luxury-gold hover:underline">
                  개인정보처리방침
                </Link>
                에 동의하게 됩니다.
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
