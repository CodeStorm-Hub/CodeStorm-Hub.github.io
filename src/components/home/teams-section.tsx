import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Typography } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Stack } from "@/components/ui/stack"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface TeamMember {
  id: string
  name: string
  avatar: string
  role?: string
  github?: string
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

// Mock data for teams with @CodeStorm-Hub/dev team members
const teams: Team[] = [
  {
    id: "1",
    name: "Core Infrastructure",
    focusArea: "Platform & DevOps",
    mission: "Building and maintaining scalable infrastructure, CI/CD pipelines, and deployment automation for all CodeStorm Hub projects.",
    members: [
      { 
        id: "1", 
        name: "Alex Chen", 
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", 
        role: "Lead Engineer",
        github: "alexchen-dev"
      },
      { 
        id: "2", 
        name: "Sarah Kim", 
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face", 
        role: "DevOps Specialist",
        github: "sarahkim-dev"
      },
      { 
        id: "3", 
        name: "Marcus Johnson", 
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", 
        role: "Cloud Architect",
        github: "marcusj-dev"
      },
      { 
        id: "4", 
        name: "Elena Rodriguez", 
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
        role: "Security Engineer",
        github: "elenarod-dev"
      }
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
      { 
        id: "5", 
        name: "Dr. Priya Patel", 
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face", 
        role: "Research Lead",
        github: "priyapatel-research"
      },
      { 
        id: "6", 
        name: "James Liu", 
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face", 
        role: "ML Engineer",
        github: "jamesliu-ml"
      },
      { 
        id: "7", 
        name: "Sofia Andersson", 
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face", 
        role: "Data Scientist",
        github: "sofiaand-data"
      },
      { 
        id: "8", 
        name: "Ahmad Hassan", 
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face", 
        role: "Research Assistant",
        github: "ahmadh-research"
      }
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
      { 
        id: "9", 
        name: "Taylor Morgan", 
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face", 
        role: "DX Lead",
        github: "taylormorgan-dx"
      },
      { 
        id: "10", 
        name: "Kai Nakamura", 
        avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face", 
        role: "Technical Writer",
        github: "kainakamura-docs"
      },
      { 
        id: "11", 
        name: "Zoe Williams", 
        avatar: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=150&h=150&fit=crop&crop=face", 
        role: "Developer Advocate",
        github: "zoew-advocate"
      }
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
      { 
        id: "12", 
        name: "Maya Thompson", 
        avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&h=150&fit=crop&crop=face", 
        role: "Community Manager",
        github: "mayat-community"
      },
      { 
        id: "13", 
        name: "Luis Garcia", 
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", 
        role: "Event Coordinator",
        github: "luisgarcia-events"
      },
      { 
        id: "14", 
        name: "Aisha Okonkwo", 
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face", 
        role: "Diversity & Inclusion Lead",
        github: "aishaoko-inclusion"
      }
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
                            className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-background hover:z-10 focus:z-10 transition-transform hover:scale-110 overflow-hidden bg-muted"
                            title={`${member.name}${member.role ? ` - ${member.role}` : ''}`}
                            style={{ zIndex: team.members.length - index }}
                          >
                            <Image
                              src={member.avatar}
                              alt={member.name}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                              unoptimized={true}
                            />
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