import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Typography } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Stack } from "@/components/ui/stack"
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <Container className="py-16 sm:py-24">
        <Stack align="center" gap={8} className="text-center">
          {/* Logo/Brand */}
          <Stack gap={4} align="center">
            <Typography variant="h1">
              <span className="text-foreground">Code</span>
              <span className="text-primary">Storm</span>
              <span className="text-foreground"> Hub</span>
            </Typography>
            <Typography variant="lead" className="max-w-3xl">
              A vibrant community of open source enthusiasts, researchers, and creators. 
              We collaborate on powerful open-source solutions.
            </Typography>
          </Stack>

          {/* CTA Buttons */}
          <Stack direction="row" gap={4} className="flex-col sm:flex-row max-w-md w-full">
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
          </Stack>

          {/* Features Grid */}
          <div className="mt-16 w-full max-w-5xl">
            <Grid cols={3} gap={8}>
              <Stack align="center" gap={3} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GitHubLogoIcon className="h-6 w-6 text-primary" />
                </div>
                <Typography variant="h5">Open Source</Typography>
                <Typography variant="muted">
                  Building transparent, accessible solutions for the community
                </Typography>
              </Stack>
              
              <Stack align="center" gap={3} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <Typography variant="h5">Community</Typography>
                <Typography variant="muted">
                  Connecting passionate developers and researchers worldwide
                </Typography>
              </Stack>
              
              <Stack align="center" gap={3} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <Typography variant="h5">Innovation</Typography>
                <Typography variant="muted">
                  Pushing boundaries with cutting-edge research and development
                </Typography>
              </Stack>
            </Grid>
          </div>
        </Stack>
      </Container>
    </div>
  )
}
