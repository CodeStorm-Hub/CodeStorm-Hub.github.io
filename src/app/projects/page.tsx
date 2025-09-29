import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons"

export const metadata = {
  title: "Projects",
  description: "Explore our open-source projects and contributions to the community.",
}

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the open-source projects we&apos;re building to solve real-world problems 
              and empower developers worldwide.
            </p>
          </div>

          {/* Featured Project */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">CodeStorm Hub Portfolio</CardTitle>
                  <CardDescription className="text-base mt-2">
                    A modern, accessible portfolio website built with Next.js, Tailwind CSS, and Radix UI
                  </CardDescription>
                </div>
                <div className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                  Featured
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                This portfolio website showcases modern web development practices using cutting-edge 
                technologies and design systems. It serves as both our community hub and a reference 
                implementation for best practices in web development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">Next.js</span>
                <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">Tailwind CSS</span>
                <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">Radix UI</span>
                <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">TypeScript</span>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button asChild>
                <a href="https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className="mr-2 h-4 w-4" />
                  View Source
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://codestorm-hub.github.io" target="_blank" rel="noopener noreferrer">
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl font-bold mb-6">More Projects Coming Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="opacity-60">
                <CardHeader>
                  <CardTitle>Community Tools</CardTitle>
                  <CardDescription>
                    Developer tools and utilities for the open-source community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A collection of tools to help developers contribute to open-source projects more effectively.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-sm text-muted-foreground">Coming Soon</span>
                </CardFooter>
              </Card>

              <Card className="opacity-60">
                <CardHeader>
                  <CardTitle>Research Platform</CardTitle>
                  <CardDescription>
                    Platform for collaborative research and knowledge sharing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A platform to facilitate research collaboration and share findings with the community.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-sm text-muted-foreground">Coming Soon</span>
                </CardFooter>
              </Card>

              <Card className="opacity-60">
                <CardHeader>
                  <CardTitle>Learning Resources</CardTitle>
                  <CardDescription>
                    Educational content and tutorials for developers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive learning materials to help developers grow their skills.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-sm text-muted-foreground">Coming Soon</span>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}