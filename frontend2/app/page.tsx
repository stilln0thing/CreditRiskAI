import { CreditRiskForm } from "@/components/credit-risk-form"
import { HeroSection } from "@/components/hero-section"
import { InfoSection } from "@/components/info-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <HeroSection />
      <InfoSection />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <CreditRiskForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
