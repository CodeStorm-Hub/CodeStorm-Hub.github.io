import Link from "next/link"
import { Container } from "@/components/ui/container"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export function Footer() {
  return (
    <footer id="footer" className="border-t bg-background">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">
                  <span className="text-foreground">Code</span>
                  <span className="text-primary">Storm</span>
                  <span className="text-foreground"> Hub</span>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-md">
                A vibrant community of open source enthusiasts, researchers, and creators. 
                We collaborate on powerful open-source solutions.
              </p>
              <div className="flex items-center space-x-4 mt-4">
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

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Navigation</h3>
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
                  <Link 
                    href="https://github.com/CodeStorm-Hub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    GitHub
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
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} CodeStorm Hub. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                Built with Next.js, Tailwind CSS, and Radix UI
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}