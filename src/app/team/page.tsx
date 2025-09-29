import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the passionate individuals behind CodeStorm Hub and our open-source community.",
  openGraph: {
    title: "Team | CodeStorm Hub",
    description: "Meet the passionate individuals behind CodeStorm Hub and our open-source community.",
  },
}

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Lead Engineer & Founder",
    bio: "Passionate about building scalable systems and fostering open source communities. Leading the technical direction of CodeStorm Hub with expertise in full-stack development and cloud architecture.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    github: "https://github.com/alexchen-dev",
    linkedin: "https://linkedin.com/in/alexchen-dev",
  },
  {
    name: "Dr. Priya Patel",
    role: "Research Lead",
    bio: "PhD in Computer Science with expertise in machine learning algorithms. Driving research initiatives and ML infrastructure development across multiple open source projects.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    github: "https://github.com/priyapatel-research",
    linkedin: "https://linkedin.com/in/priya-patel-ai",
  },
  {
    name: "Sarah Kim",
    role: "DevOps Engineer", 
    bio: "Expert in cloud infrastructure and CI/CD pipelines. Ensuring reliable deployments and scalable architecture for all CodeStorm Hub projects with focus on automation.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    github: "https://github.com/sarahkim-dev",
    linkedin: "https://linkedin.com/in/sarah-kim-devops",
  },
  {
    name: "Marcus Johnson",
    role: "Security Engineer",
    bio: "Cybersecurity specialist focused on secure coding practices and vulnerability assessment. Protecting our community and codebases with comprehensive security audits.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    github: "https://github.com/marcusj-security",
    linkedin: "https://linkedin.com/in/marcus-johnson-security",
  },
  {
    name: "Taylor Morgan",
    role: "UX Designer",
    bio: "User experience designer with a passion for accessible and inclusive design. Creating intuitive interfaces that serve our diverse community with focus on usability research.",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    github: "https://github.com/taylormorgan-design",
    linkedin: "https://linkedin.com/in/taylor-morgan-ux",
  },
  {
    name: "James Liu",
    role: "Frontend Developer",
    bio: "Frontend specialist with expertise in modern React patterns and web performance optimization. Building fast, accessible user interfaces for open source projects.",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    github: "https://github.com/jamesliu-frontend",
    linkedin: "https://linkedin.com/in/james-liu-frontend",
  },
  {
    name: "Community Contributors",
    role: "Open Source Enthusiasts",
    bio: "Our extended team includes passionate contributors from around the world who believe in the power of open source collaboration and continuously contribute to our projects.",
    avatar: "https://github.com/CodeStorm-Hub.png",
    github: "https://github.com/CodeStorm-Hub",
    linkedin: null,
  },
]

export default function TeamPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CodeStorm Hub is powered by a diverse community of developers, researchers, 
              and innovators from around the world. Together, we&apos;re building the future of open source.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-2 border-primary/20">
                    <Image
                      src={member.avatar}
                      alt={`${member.name} avatar`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      unoptimized={true}
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center gap-2">
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
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Join Us Section */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Join Our Team</CardTitle>
              <CardDescription className="text-base">
                We&apos;re always looking for passionate contributors to join our community
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you&apos;re a developer, designer, writer, or just passionate about open source, 
                there&apos;s a place for you in the CodeStorm Hub community. Join us and help build 
                amazing projects together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="https://github.com/CodeStorm-Hub" target="_blank" rel="noopener noreferrer">
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                    Browse Projects
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contributing">
                    View Contributing Guide
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}