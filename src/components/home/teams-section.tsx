import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Typography } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Stack } from "@/components/ui/stack"
import { Button } from "@/components/ui/button"

interface TeamMember {
  id: string
  name: string
  avatar: string
  role?: string
}

interface Team {
  id: string
  name: string
  focusArea: string
  mission: string
  members: TeamMember[]
  joinUrl?: string
  learnMoreUrl?: string
}

// Mock data for teams
const teams: Team[] = [
  {
    id: "1",
    name: "Core Infrastructure",
    focusArea: "Platform & DevOps",
    mission: "Building and maintaining scalable infrastructure, CI/CD pipelines, and deployment automation for all CodeStorm Hub projects.",
    members: [
      { id: "1", name: "Alex Chen", avatar: "AC", role: "Lead Engineer" },
      { id: "2", name: "Sarah Kim", avatar: "SK", role: "DevOps Specialist" },
      { id: "3", name: "Marcus Johnson", avatar: "MJ", role: "Cloud Architect" },
      { id: "4", name: "Elena Rodriguez", avatar: "ER", role: "Security Engineer" }
    ],
    joinUrl: "/teams/infrastructure/join",
    learnMoreUrl: "/teams/infrastructure"
  },
  {
    id: "2", 
    name: "Research & Innovation",
    focusArea: "ML/AI & Data Science",
    mission: "Conducting cutting-edge research in machine learning, artificial intelligence, and data science to push the boundaries of open source innovation.",
    members: [
      { id: "5", name: "Dr. Priya Patel", avatar: "PP", role: "Research Lead" },
      { id: "6", name: "James Liu", avatar: "JL", role: "ML Engineer" },
      { id: "7", name: "Sofia Andersson", avatar: "SA", role: "Data Scientist" },
      { id: "8", name: "Ahmad Hassan", avatar: "AH", role: "Research Assistant" }
    ],
    joinUrl: "/teams/research/join",
    learnMoreUrl: "/teams/research"
  },
  {
    id: "3",
    name: "Developer Experience", 
    focusArea: "Tools & Documentation",
    mission: "Creating exceptional developer tools, comprehensive documentation, and smooth onboarding experiences for our open source community.",
    members: [
      { id: "9", name: "Taylor Morgan", avatar: "TM", role: "DX Lead" },
      { id: "10", name: "Kai Nakamura", avatar: "KN", role: "Technical Writer" },
      { id: "11", name: "Zoe Williams", avatar: "ZW", role: "Developer Advocate" }
    ],
    joinUrl: "/teams/dx/join",
    learnMoreUrl: "/teams/dx"
  },
  {
    id: "4",
    name: "Community Growth",
    focusArea: "Outreach & Engagement", 
    mission: "Growing our global community through events, partnerships, mentorship programs, and inclusive engagement initiatives.",
    members: [
      { id: "12", name: "Maya Thompson", avatar: "MT", role: "Community Manager" },
      { id: "13", name: "Luis Garcia", avatar: "LG", role: "Event Coordinator" },
      { id: "14", name: "Aisha Okonkwo", avatar: "AO", role: "Diversity & Inclusion Lead" }
    ],
    joinUrl: "/teams/community/join",
    learnMoreUrl: "/teams/community"
  }
]

interface TeamsSectionProps {
  className?: string
}

export default function TeamsSection({ className }: TeamsSectionProps) {
  return (
    <section className={className} aria-labelledby="teams-heading">
      <Container className="py-16 sm:py-24">
        <Stack gap={8}>
          {/* Section Header */}
          <Stack gap={4} align="center" className="text-center">
            <Typography variant="h2" id="teams-heading">
              Our Teams
            </Typography>
            <Typography variant="lead" className="max-w-2xl">
              Meet the passionate teams driving innovation and building the future of open source collaboration
            </Typography>
          </Stack>

          {/* Teams Grid */}
          <Grid cols={2} gap={8} className="w-full">
            {teams.map((team) => (
              <Card key={team.id} className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <Stack gap={2}>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{team.name}</CardTitle>
                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary mt-1">
                          {team.focusArea}
                        </span>
                      </div>
                    </div>
                  </Stack>
                </CardHeader>
                <CardContent>
                  <Stack gap={6}>
                    <CardDescription className="text-sm leading-relaxed">
                      {team.mission}
                    </CardDescription>
                    
                    {/* Team Members */}
                    <div>
                      <Typography variant="small" className="font-medium mb-3 text-foreground">
                        Team Members ({team.members.length})
                      </Typography>
                      <div className="flex -space-x-2">
                        {team.members.slice(0, 6).map((member, index) => (
                          <div
                            key={member.id}
                            className="relative inline-flex items-center justify-center w-10 h-10 text-sm font-medium text-white bg-primary rounded-full border-2 border-background hover:z-10 focus:z-10 transition-transform hover:scale-110"
                            title={`${member.name}${member.role ? ` - ${member.role}` : ''}`}
                            style={{ zIndex: team.members.length - index }}
                          >
                            <span aria-label={member.name}>{member.avatar}</span>
                          </div>
                        ))}
                        {team.members.length > 6 && (
                          <div
                            className="relative inline-flex items-center justify-center w-10 h-10 text-xs font-medium text-primary bg-muted rounded-full border-2 border-background"
                            title={`+${team.members.length - 6} more members`}
                          >
                            <span>+{team.members.length - 6}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      {team.learnMoreUrl && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={team.learnMoreUrl}>
                            Learn More
                          </a>
                        </Button>
                      )}
                      {team.joinUrl && (
                        <Button size="sm" className="flex-1" asChild>
                          <a href={team.joinUrl}>
                            Join Team
                          </a>
                        </Button>
                      )}
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Grid>

          {/* View All Teams CTA */}
          <div className="flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <a href="/team">
                View All Teams & Contributors
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

export type { TeamsSectionProps }