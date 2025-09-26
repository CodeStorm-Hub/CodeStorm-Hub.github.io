import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { ContactSection } from "@/components/sections/contact"

export const metadata = {
  title: "Contact - CodeStorm Hub",
  description: "Get in touch with the CodeStorm Hub team. We'd love to hear from you and answer any questions.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}