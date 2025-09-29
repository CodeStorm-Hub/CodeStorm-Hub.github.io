import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Typography } from "@/components/ui/typography"
import { Grid } from "@/components/ui/grid"
import { Stack } from "@/components/ui/stack"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"

interface TeamMember {
  id: string
  name: string
  role: string
  specialization: string
  avatar: string
  bio: string
  github?: string
  linkedin?: string
  skills: string[]
  contributions: {
    commits: number
    prs: number
    reviews: number
  }
}

// Core team members and contributors
const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Chen",
    role: "Lead Engineer & Founder",
    specialization: "Full-Stack Development",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Passionate about building scalable systems and fostering open source communities. Leading the technical direction of CodeStorm Hub.",
    github: "https://github.com/alexchen-dev",
    linkedin: "https://linkedin.com/in/alexchen-dev",
    skills: ["TypeScript", "React", "Node.js", "Docker", "AWS"],
    contributions: {
      commits: 1247,
      prs: 89,
      reviews: 156
    }
  },
  {
    id: "2",
    name: "Dr. Priya Patel",
    role: "Research Lead",
    specialization: "Machine Learning & AI",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    bio: "PhD in Computer Science with expertise in machine learning algorithms. Driving research initiatives and ML infrastructure development.",
    github: "https://github.com/priyapatel-research",
    linkedin: "https://linkedin.com/in/priya-patel-ai",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Research"],
    contributions: {
      commits: 892,
      prs: 67,
      reviews: 134
    }
  },
  {
    id: "3",
    name: "Sarah Kim",
    role: "DevOps Engineer",
    specialization: "Infrastructure & Automation",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    bio: "Expert in cloud infrastructure and CI/CD pipelines. Ensuring reliable deployments and scalable architecture for all projects.",
    github: "https://github.com/sarahkim-dev",
    linkedin: "https://linkedin.com/in/sarah-kim-devops",
    skills: ["Kubernetes", "Terraform", "GitHub Actions", "AWS", "Monitoring"],
    contributions: {
      commits: 743,
      prs: 52,
      reviews: 98
    }
  },
  {
    id: "4",
    name: "Marcus Johnson",
    role: "Security Engineer",
    specialization: "Application Security",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Cybersecurity specialist focused on secure coding practices and vulnerability assessment. Protecting our community and codebases.",
    github: "https://github.com/marcusj-security",
    linkedin: "https://linkedin.com/in/marcus-johnson-security",
    skills: ["Security Auditing", "Penetration Testing", "Rust", "Go", "OWASP"],
    contributions: {
      commits: 456,
      prs: 34,
      reviews: 87
    }
  },
  {
    id: "5",
    name: "Taylor Morgan",
    role: "UX Designer",
    specialization: "Product Design & Research",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    bio: "User experience designer with a passion for accessible and inclusive design. Creating intuitive interfaces that serve our diverse community.",
    github: "https://github.com/taylormorgan-design",
    linkedin: "https://linkedin.com/in/taylor-morgan-ux",
    skills: ["Figma", "User Research", "Accessibility", "Prototyping", "Design Systems"],
    contributions: {
      commits: 234,
      prs: 28,
      reviews: 45
    }
  },
  {
    id: "6",
    name: "James Liu",
    role: "Frontend Developer",
    specialization: "React & Performance",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    bio: "Frontend specialist with expertise in modern React patterns and web performance optimization. Building fast, accessible user interfaces.",
    github: "https://github.com/jamesliu-frontend",
    linkedin: "https://linkedin.com/in/james-liu-frontend",
    skills: ["React", "Next.js", "TypeScript", "Performance", "Testing"],
    contributions: {
      commits: 687,
      prs: 45,
      reviews: 78
    }
  }
]

interface TeamMembersSectionProps {
  className?: string
}

export default function TeamMembersSection({ className }: TeamMembersSectionProps) {
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
            {teamMembers.map((member) => (
              <Card key={member.id} className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-2 border-primary/20">
                    <Image
                      src={member.avatar}
                      alt={`${member.name} profile picture`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      unoptimized={true}
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                  <Typography variant="small" className="text-muted-foreground">
                    {member.specialization}
                  </Typography>
                </CardHeader>
                
                <CardContent>
                  <Stack gap={4}>
                    {/* Bio */}
                    <Typography variant="small" className="text-center leading-relaxed">
                      {member.bio}
                    </Typography>

                    {/* Skills */}
                    <div>
                      <Typography variant="small" className="font-medium mb-2 text-foreground">
                        Skills
                      </Typography>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                            +{member.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Contributions Stats */}
                    <div>
                      <Typography variant="small" className="font-medium mb-2 text-foreground">
                        Contributions
                      </Typography>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-muted/50 rounded-md px-2 py-1">
                          <div className="text-sm font-semibold text-foreground">
                            {member.contributions.commits}
                          </div>
                          <div className="text-xs text-muted-foreground">Commits</div>
                        </div>
                        <div className="bg-muted/50 rounded-md px-2 py-1">
                          <div className="text-sm font-semibold text-foreground">
                            {member.contributions.prs}
                          </div>
                          <div className="text-xs text-muted-foreground">PRs</div>
                        </div>
                        <div className="bg-muted/50 rounded-md px-2 py-1">
                          <div className="text-sm font-semibold text-foreground">
                            {member.contributions.reviews}
                          </div>
                          <div className="text-xs text-muted-foreground">Reviews</div>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-2 pt-2">
                      {member.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} GitHub profile`}
                          >
                            <GitHubLogoIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.linkedin && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={member.linkedin}
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