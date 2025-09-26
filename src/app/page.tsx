import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <Container className="py-16 sm:py-24">
        <div className="text-center space-y-8">
          {/* Logo/Brand */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Code</span>
              <span className="text-primary">Storm</span>
              <span className="text-foreground"> Hub</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A vibrant community of open source enthusiasts, researchers, and creators. 
              We collaborate on powerful open-source solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://github.com/CodeStorm-Hub" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="mr-2 h-4 w-4" />
                View Projects
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Join Community
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <GitHubLogoIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Open Source</h3>
              <p className="text-muted-foreground">
                Building transparent, accessible solutions for the community
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Community</h3>
              <p className="text-muted-foreground">
                Connecting passionate developers and researchers worldwide
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing boundaries with cutting-edge research and development
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
