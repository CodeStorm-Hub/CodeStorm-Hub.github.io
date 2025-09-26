import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { TeamSection } from "@/components/sections/team"

export const metadata = {
  title: "Team - CodeStorm Hub",
  description: "Meet the passionate developers, researchers, and creators who make CodeStorm Hub possible.",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1">
        <TeamSection />
      </div>
      <Footer />
    </main>
  )
}