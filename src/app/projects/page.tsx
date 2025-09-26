import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { ProjectsSection } from "@/components/sections/projects"

export const metadata = {
  title: "Projects - CodeStorm Hub",
  description: "Explore our open-source projects and contribute to innovative solutions built by the CodeStorm Hub community.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  )
}