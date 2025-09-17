import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted-foreground/5" />

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight text-balance">
          A Shining Value in Your Dream
        </h1>

        <p className="text-xl md:text-2xl text-muted mb-4 font-light leading-relaxed">
          45년 장인의 손길로 완성한 시대를 초월한 핸드메이드 럭셔리
        </p>

        <p className="text-lg text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Timeless handmade luxury crafted by master artisans with 45 years of heritage
        </p>

        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-6 text-lg font-medium tracking-wide"
        >
          DISCOVER LEREVENA
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-accent/20 rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-accent/30 rounded-full" />
    </section>
  )
}
