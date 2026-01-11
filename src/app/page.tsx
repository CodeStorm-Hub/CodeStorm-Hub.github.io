import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Typography } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Stack } from "@/components/ui/stack"
import { Logo } from "@/components/ui/logo"
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import ProjectsSection from "@/components/home/projects-section"
import TeamMembersSection from "@/components/home/team-members-section"

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-background to-muted">
        {/* Hero Section */}
        <Container className="py-16 sm:py-24">
          <Stack align="center" gap={8} className="text-center">
            {/* Logo/Brand */}
            <Stack gap={4} align="center">
              <Logo size="lg" variant="icon" className="mb-2" />
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
            <div className="mt-20 w-full max-w-5xl">
              <Grid cols={3} gap={8} className="items-start">
                <Stack align="center" gap={4} className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shadow-sm">
                    <GitHubLogoIcon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <Typography variant="h5" className="font-semibold">Open Source</Typography>
                    <Typography variant="muted" className="text-sm leading-relaxed max-w-sm">
                      Building transparent, accessible solutions for the community
                    </Typography>
                  </div>
                </Stack>
                
                <Stack align="center" gap={4} className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shadow-sm">
                    <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <Typography variant="h5" className="font-semibold">Community</Typography>
                    <Typography variant="muted" className="text-sm leading-relaxed max-w-sm">
                      Connecting passionate developers and researchers worldwide
                    </Typography>
                  </div>
                </Stack>
                
                <Stack align="center" gap={4} className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shadow-sm">
                    <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <Typography variant="h5" className="font-semibold">Innovation</Typography>
                    <Typography variant="muted" className="text-sm leading-relaxed max-w-sm">
                      Pushing boundaries with cutting-edge research and development
                    </Typography>
                  </div>
                </Stack>
              </Grid>
            </div>
          </Stack>
        </Container>
      </div>

      {/* Projects Section */}
      <ProjectsSection className="bg-background" />

      {/* Team Members Section */}
      <TeamMembersSection className="bg-muted/20" />
    </>
  )
}
