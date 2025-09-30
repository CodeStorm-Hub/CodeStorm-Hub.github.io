import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Typography } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Stack } from "@/components/ui/stack"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, StarIcon, PersonIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { getFeaturedProjects } from "@/lib/project-data"

interface ProjectsSectionProps {
  className?: string
}

export default function ProjectsSection({ className }: ProjectsSectionProps) {
  const featuredProjects = getFeaturedProjects(6)

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
            {featuredProjects.map((project) => (
              <Card key={project.slug} className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <Stack gap={2}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      {project.primaryLanguage && (
                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {project.primaryLanguage}
                        </span>
                      )}
                    </div>
                    {project.techStack && project.techStack.length > 0 && (
                      <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground w-fit">
                        {project.techStack[0]}
                      </span>
                    )}
                  </Stack>
                </CardHeader>
                <CardContent>
                  <Stack gap={4}>
                    <CardDescription className="line-clamp-2">
                      {project.overview || project.description || "No description available."}
                    </CardDescription>
                    
                    {/* Project Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {project.stars !== undefined && (
                        <div className="flex items-center gap-1">
                          <StarIcon className="h-4 w-4" aria-hidden="true" />
                          <span aria-label={`${project.stars} stars`}>
                            {project.stars.toLocaleString()}
                          </span>
                        </div>
                      )}
                      {project.forks !== undefined && (
                        <div className="flex items-center gap-1">
                          <PersonIcon className="h-4 w-4" aria-hidden="true" />
                          <span aria-label={`${project.forks} forks`}>
                            {project.forks}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      {project.liveDemo && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a 
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLinkIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`View ${project.name} on GitHub`}
                          >
                            <GitHubLogoIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                            GitHub
                          </a>
                        </Button>
                      )}
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