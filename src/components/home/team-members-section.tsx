import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Typography } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Stack } from "@/components/ui/stack"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import { getAllTeamMembers } from "@/lib/team-data"

interface TeamMembersSectionProps {
  className?: string
}

export default function TeamMembersSection({ className }: TeamMembersSectionProps) {
  const teamMembers = getAllTeamMembers().slice(0, 6) // Show first 6 members on homepage

  return (
    <section className={className} aria-labelledby="team-members-heading">
      <Container className="py-16 sm:py-24">
        <Stack gap={8}>
          {/* Section Header */}
          <Stack gap={4} align="center" className="text-center">
            <Typography variant="h2" id="team-members-heading">
              Meet Our Contributors
            </Typography>
            <Typography variant="lead" className="max-w-2xl">
              Talented individuals from around the world who are building the future of open source collaboration
            </Typography>
          </Stack>

          {/* Team Members Grid */}
          <Grid cols={3} gap={8} className="w-full">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-2 border-primary/20">
                    <Image
                      src={member.image}
                      alt={`${member.name} profile picture`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      unoptimized={true}
                      priority={index < 3}
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Stack gap={4}>
                    {/* Bio */}
                    <Typography variant="small" className="text-center leading-relaxed line-clamp-3">
                      {member.bio}
                    </Typography>

                    {/* Social Links */}
                    <div className="flex justify-center gap-2 pt-2">
                      {member.social.github && member.social.github !== '#' && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} GitHub profile`}
                          >
                            <GitHubLogoIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.social.linkedin && member.social.linkedin !== '#' && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} LinkedIn profile`}
                          >
                            <LinkedInLogoIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Grid>

          {/* View All Team CTA */}
          <div className="flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <a href="/team">
                View All Team Members
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

export type { TeamMembersSectionProps }