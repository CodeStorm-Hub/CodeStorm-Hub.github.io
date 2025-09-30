import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import type { Metadata } from "next"
import { getAllTeamMembers } from "@/lib/team-data"

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the passionate individuals behind CodeStorm Hub and our open-source community.",
  openGraph: {
    title: "Team | CodeStorm Hub",
    description: "Meet the passionate individuals behind CodeStorm Hub and our open-source community.",
  },
}

export default function TeamPage() {
  const teamMembers = getAllTeamMembers()

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
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader className="pb-4">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted border-2 border-primary/20">
                      <Image
                        src={member.image.startsWith('/') ? member.image : `/team-members/${member.image}`}
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
                      {member.social.twitter && member.social.twitter !== '#' && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} Twitter profile`}
                          >
                            <TwitterLogoIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Team information is being updated. Please check back soon!</p>
            </div>
          )}

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