import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, GlobeIcon, VideoIcon, PersonIcon, PinTopIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events",
  description: "Join CodeStorm Hub community events, workshops, and meetups. Connect with fellow developers.",
  openGraph: {
    title: "Events | CodeStorm Hub",
    description: "Join CodeStorm Hub community events, workshops, and meetups. Connect with fellow developers.",
  },
}

const upcomingEvents = [
  {
    title: "Open Source Contribution Workshop",
    description: "Learn how to make your first contribution to open source projects with hands-on guidance.",
    date: "2024-02-15",
    time: "18:00 UTC",
    duration: "2 hours",
    type: "Workshop",
    format: "Virtual",
    level: "Beginner",
    maxAttendees: 50,
    registrations: 23,
    link: "#",
    featured: true,
  },
  {
    title: "Next.js 15 Deep Dive",
    description: "Explore the latest features in Next.js 15 and learn how to build modern web applications.",
    date: "2024-02-22",
    time: "19:00 UTC", 
    duration: "1.5 hours",
    type: "Tech Talk",
    format: "Virtual",
    level: "Intermediate",
    maxAttendees: 100,
    registrations: 45,
    link: "#",
    featured: false,
  },
  {
    title: "Community Coffee Chat",
    description: "Casual community meetup to discuss projects, share ideas, and network with fellow developers.",
    date: "2024-03-01",
    time: "16:00 UTC",
    duration: "1 hour",
    type: "Meetup",
    format: "Virtual",
    level: "All Levels",
    maxAttendees: 30,
    registrations: 12,
    link: "#",
    featured: false,
  },
]

const pastEvents = [
  {
    title: "CodeStorm Hub Launch Event",
    description: "Official launch of the CodeStorm Hub community platform with project showcases.",
    date: "2024-01-15",
    type: "Launch",
    format: "Virtual",
    attendees: 75,
    recording: "#",
  },
  {
    title: "Building Accessible Web Components",
    description: "Workshop on creating accessible UI components using Radix UI and best practices.",
    date: "2024-01-08",
    type: "Workshop", 
    format: "Virtual",
    attendees: 42,
    recording: "#",
  },
]

const eventTypes = [
  {
    title: "Workshops",
    description: "Hands-on learning sessions with practical exercises and projects",
    icon: PersonIcon,
    examples: ["Getting Started with Open Source", "Advanced React Patterns", "DevOps for Developers"],
  },
  {
    title: "Tech Talks",
    description: "Educational presentations on latest technologies and best practices",
    icon: VideoIcon,
    examples: ["Next.js Performance Optimization", "TypeScript Advanced Types", "Modern CSS Techniques"],
  },
  {
    title: "Community Meetups",
    description: "Casual networking events to connect with fellow community members",
    icon: GlobeIcon,
    examples: ["Coffee Chats", "Project Show & Tell", "Career Discussions"],
  },
  {
    title: "Code Reviews",
    description: "Collaborative sessions to review and improve community projects",
    icon: PinTopIcon,
    examples: ["Project Architecture Review", "Code Quality Discussion", "Best Practices Session"],
  },
]

const formatConfig = {
  Virtual: {
    icon: GlobeIcon,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/20",
  },
  "In-Person": {
    icon: PinTopIcon,
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/20",
  },
  Hybrid: {
    icon: VideoIcon,
    color: "text-purple-600", 
    bg: "bg-purple-100 dark:bg-purple-900/20",
  },
}

const levelConfig = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
  Intermediate: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
  "All Levels": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
}

export default function EventsPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Community Events</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our community events, workshops, and meetups. Learn, share knowledge, 
              and connect with fellow developers from around the world.
            </p>
          </div>

          {/* Event Notifications */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle>Never Miss an Event</CardTitle>
              <CardDescription>
                Get notified about upcoming events and exclusive community activities
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a 
                    href="https://github.com/CodeStorm-Hub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/blog">
                    Subscribe to Blog
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
            
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => {
                const formatIconConfig = formatConfig[event.format as keyof typeof formatConfig]
                const FormatIcon = formatIconConfig.icon
                
                return (
                  <Card key={index} className={event.featured ? "border-2 border-primary/20 bg-primary/5" : ""}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {event.featured && (
                              <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                                Featured
                              </span>
                            )}
                            <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                              {event.type}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded ${levelConfig[event.level as keyof typeof levelConfig]}`}>
                              {event.level}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <CardDescription className="text-base mt-1">{event.description}</CardDescription>
                        </div>
                        <div className={`p-2 rounded-lg ${formatIconConfig.bg}`}>
                          <FormatIcon className={`h-5 w-5 ${formatIconConfig.color}`} />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-4 w-4 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GlobeIcon className="h-4 w-4 text-muted-foreground" />
                          <span>{event.format}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <PersonIcon className="h-4 w-4 text-muted-foreground" />
                          <span>{event.registrations}/{event.maxAttendees}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          Duration: {event.duration}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" disabled>
                            Register Soon
                          </Button>
                          <Button variant="outline" size="sm" disabled>
                            Add to Calendar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Event Types */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Types of Events</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We host various types of events to cater to different interests and skill levels in our community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eventTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{type.title}</CardTitle>
                          <CardDescription>{type.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Recent Topics:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Past Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="opacity-90">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
                        {event.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {event.attendees} attendees
                      </span>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <GlobeIcon className="h-3 w-3" />
                        {event.format}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      Recording Coming Soon
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Host an Event */}
          <Card className="bg-muted/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Host an Event</CardTitle>
              <CardDescription className="text-base">
                Want to share your knowledge with the community?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We welcome community members to host events, workshops, and talks. 
                Whether you want to share your expertise or lead a discussion, we&apos;d love to help you organize it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a 
                    href="https://github.com/orgs/CodeStorm-Hub/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Propose an Event
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact">
                    Get in Touch
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Community Calendar */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" disabled>
                View Full Calendar
              </Button>
              <Button variant="outline" disabled>
                Subscribe to Calendar
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Calendar integration coming soon. Follow us on GitHub for event updates.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}