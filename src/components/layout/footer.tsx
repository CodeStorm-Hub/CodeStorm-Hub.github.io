import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Logo } from "@/components/ui/logo"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export function Footer() {
  return (
    <footer id="footer" className="border-t bg-background">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Logo size="sm" />
              </Link>
              <p className="text-sm text-muted-foreground max-w-md mb-4">
                A vibrant community of open source enthusiasts, researchers, and creators. 
                We collaborate on powerful open-source solutions.
              </p>
              <div className="flex items-center space-x-4">
                <Link 
                  href="https://github.com/CodeStorm-Hub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  aria-label="CodeStorm Hub on GitHub"
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Main Navigation */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Main</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/community" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/showcase" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Showcase
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/resources" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/contributing" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Contributing
                  </Link>
                </li>
                <li>
                  <Link href="/code-of-conduct" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Developer */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link href="/style-guide" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Style Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} CodeStorm Hub. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
                <p className="text-sm text-muted-foreground">
                  Built with Next.js, Tailwind CSS, and Radix UI
                </p>
                <Link 
                  href="https://github.com/CodeStorm-Hub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Open Source
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}