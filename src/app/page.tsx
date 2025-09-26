import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1">
        <Hero />
      </div>
      <Footer />
    </main>
  )
}