import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Typography } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Stack } from "@/components/ui/stack"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, StarIcon, PersonIcon } from "@radix-ui/react-icons"

interface Project {
  id: string
  name: string
  description: string
  stars: number
  contributors: number
  primaryTech: string
  category: string
  repoUrl: string
  projectUrl?: string
}

// Mock data for projects
const projects: Project[] = [
  {
    id: "1",
    name: "DataStorm Analytics",
    description: "Real-time data processing and visualization platform built for scalability",
    stars: 2847,
    contributors: 18,
    primaryTech: "Python",
    category: "Data Science",
    repoUrl: "https://github.com/CodeStorm-Hub/datastorm-analytics",
    projectUrl: "/projects/datastorm-analytics"
  },
  {
    id: "2", 
    name: "CloudNative Toolkit",
    description: "Container orchestration and microservices deployment automation tools",
    stars: 1523,
    contributors: 12,
    primaryTech: "Go",
    category: "Infrastructure",
    repoUrl: "https://github.com/CodeStorm-Hub/cloudnative-toolkit",
    projectUrl: "/projects/cloudnative-toolkit"
  },
  {
    id: "3",
    name: "ML Research Hub",
    description: "Open source machine learning algorithms and research implementations", 
    stars: 3241,
    contributors: 25,
    primaryTech: "Python",
    category: "Research",
    repoUrl: "https://github.com/CodeStorm-Hub/ml-research-hub",
    projectUrl: "/projects/ml-research-hub"
  },
  {
    id: "4",
    name: "DevTools Suite",
    description: "Developer productivity tools and utilities for modern web development",
    stars: 892,
    contributors: 8,
    primaryTech: "TypeScript",
    category: "Dev Tools", 
    repoUrl: "https://github.com/CodeStorm-Hub/devtools-suite",
    projectUrl: "/projects/devtools-suite"
  },
  {
    id: "5",
    name: "Security Scanner",
    description: "Automated security vulnerability scanner for open source dependencies",
    stars: 1687,
    contributors: 14,
    primaryTech: "Rust",
    category: "Security",
    repoUrl: "https://github.com/CodeStorm-Hub/security-scanner", 
    projectUrl: "/projects/security-scanner"
  },
  {
    id: "6",
    name: "API Gateway",
    description: "High-performance API gateway with rate limiting and authentication",
    stars: 2156,
    contributors: 16,
    primaryTech: "Node.js",
    category: "Infrastructure",
    repoUrl: "https://github.com/CodeStorm-Hub/api-gateway",
    projectUrl: "/projects/api-gateway"
  }
]

interface ProjectsSectionProps {
  className?: string
}

export default function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <section className={className} aria-labelledby="projects-heading">
      <Container className="py-16 sm:py-24">
        <Stack gap={8}>
          {/* Section Header */}
          <Stack gap={4} align="center" className="text-center">
            <Typography variant="h2" id="projects-heading">
              Featured Projects
            </Typography>
            <Typography variant="lead" className="max-w-2xl">
              Explore our open source initiatives that are making a real impact in the developer community
            </Typography>
          </Stack>

          {/* Projects Grid */}
          <Grid cols={3} gap={6} className="w-full">
            {projects.map((project) => (
              <Card key={project.id} className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <Stack gap={2}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {project.primaryTech}
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground w-fit">
                      {project.category}
                    </span>
                  </Stack>
                </CardHeader>
                <CardContent>
                  <Stack gap={4}>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                    
                    {/* Project Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <StarIcon className="h-4 w-4" aria-hidden="true" />
                        <span aria-label={`${project.stars} stars`}>
                          {project.stars.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <PersonIcon className="h-4 w-4" aria-hidden="true" />
                        <span aria-label={`${project.contributors} contributors`}>
                          {project.contributors}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      {project.projectUrl ? (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={project.projectUrl}>
                            View Project
                          </a>
                        </Button>
                      ) : null}
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`View ${project.name} on GitHub`}
                        >
                          <GitHubLogoIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Grid>

          {/* View All Projects CTA */}
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <a href="/projects">
                View All Projects
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </Button>
          </div>
        </Stack>
      </Container>
    </section>
  )
}

export type { ProjectsSectionProps }