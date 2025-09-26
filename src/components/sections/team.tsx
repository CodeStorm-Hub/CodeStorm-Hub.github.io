import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Mock team data - in a real app, this would come from an API or database
const teamMembers = [
  {
    id: 1,
    name: "Alex Rodriguez",
    role: "Lead Developer & Founder",
    bio: "Full-stack developer with 8+ years of experience in building scalable web applications. Passionate about open source and community building.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    github: "https://github.com/alexrodriguez",
    linkedin: "https://linkedin.com/in/alexrodriguez",
    twitter: "https://twitter.com/alexrodriguez",
    email: "alex@codestorm-hub.dev",
    contributions: 127,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Frontend Architect",
    bio: "UI/UX enthusiast and React expert. Focuses on creating beautiful, accessible user interfaces and design systems.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    github: "https://github.com/sarahchen",
    linkedin: "https://linkedin.com/in/sarahchen",
    twitter: "https://twitter.com/sarahchen",
    email: "sarah@codestorm-hub.dev",
    contributions: 98,
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "DevOps Engineer",
    bio: "Infrastructure and automation specialist. Ensures our projects are scalable, secure, and maintainable through modern DevOps practices.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    github: "https://github.com/marcusjohnson",
    linkedin: "https://linkedin.com/in/marcusjohnson",
    twitter: "https://twitter.com/marcusjohnson",
    email: "marcus@codestorm-hub.dev",
    contributions: 89,
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Machine Learning Researcher",
    bio: "PhD in Computer Science with expertise in machine learning and AI. Leads our ML initiatives and research projects.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    github: "https://github.com/emilywatson",
    linkedin: "https://linkedin.com/in/emilywatson",
    twitter: "https://twitter.com/emilywatson",
    email: "emily@codestorm-hub.dev",
    contributions: 76,
  },
  {
    id: 5,
    name: "David Park",
    role: "Backend Developer",
    bio: "Distributed systems expert with a focus on API design and database optimization. Passionate about performance and scalability.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    github: "https://github.com/davidpark",
    linkedin: "https://linkedin.com/in/davidpark",
    twitter: "https://twitter.com/davidpark",
    email: "david@codestorm-hub.dev",
    contributions: 112,
  },
  {
    id: 6,
    name: "Lisa Kim",
    role: "Technical Writer",
    bio: "Former software engineer turned technical writer. Ensures our documentation is clear, comprehensive, and developer-friendly.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    github: "https://github.com/lisakim",
    linkedin: "https://linkedin.com/in/lisakim",
    twitter: "https://twitter.com/lisakim",
    email: "lisa@codestorm-hub.dev",
    contributions: 54,
  },
]

const contributors = [
  { name: "John Doe", contributions: 23 },
  { name: "Jane Smith", contributions: 19 },
  { name: "Bob Wilson", contributions: 15 },
  { name: "Alice Brown", contributions: 12 },
  { name: "Charlie Davis", contributions: 8 },
]

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re a diverse group of passionate developers, researchers, and creators 
            from around the world, united by our love for open source and innovation.
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center h-full">
                <CardContent className="p-6">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Basic Info */}
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Contribution Count */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {member.contributions} contributions
                    </span>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-5 h-5" />
                    </Link>
                    <Link
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Contributors */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Community Contributors</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We&apos;re grateful to all our community contributors who help make our projects better. 
            Here are some of our top contributors from the past year.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {contributors.map((contributor, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {contributor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-medium text-sm mb-1">{contributor.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {contributor.contributions} contributions
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Us */}
        <div className="text-center bg-muted/50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate developers, designers, and researchers 
            to join our community. Whether you&apos;re a seasoned professional or just starting out, 
            there&apos;s a place for you at CodeStorm Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/CodeStorm-Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              <Github className="mr-2 w-5 h-5" />
              Start Contributing
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-input text-base font-medium rounded-md text-foreground bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}