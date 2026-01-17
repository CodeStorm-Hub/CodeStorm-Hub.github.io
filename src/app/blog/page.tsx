import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, PersonIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay up to date with CodeStorm Hub news, updates, and technical articles from our community.",
  openGraph: {
    title: "Blog | CodeStorm Hub",
    description: "Stay up to date with CodeStorm Hub news, updates, and technical articles from our community.",
  },
}

const blogPosts = [
  {
    title: "Welcome to CodeStorm Hub",
    description: "Introducing our new community platform and what we're building together.",
    author: "CodeStorm Hub Team",
    date: "2024-01-15",
    readTime: "3 min read",
    category: "Announcement",
    slug: "welcome-to-codestorm-hub",
    featured: true,
  },
  {
    title: "Building with Next.js 16 and Radix UI",
    description: "A deep dive into our tech stack choices and why we chose these technologies.",
    author: "Development Team",
    date: "2024-01-10", 
    readTime: "8 min read",
    category: "Technical",
    slug: "building-with-nextjs-radix",
    featured: false,
  },
  {
    title: "Community Guidelines and Best Practices",
    description: "How to participate in our community and make meaningful contributions.",
    author: "Community Team",
    date: "2024-01-05",
    readTime: "5 min read", 
    category: "Community",
    slug: "community-guidelines",
    featured: false,
  },
]

const categories = ["All", "Announcement", "Technical", "Community", "Tutorial", "News"]

export default function BlogPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-12">
          {/* Hero */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Blog & News</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay up to date with the latest news, updates, and insights from the CodeStorm Hub community. 
              Discover technical articles, project announcements, and community highlights.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "All" ? "default" : "outline"} 
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts
            .filter(post => post.featured)
            .map((post, index) => (
              <Card key={index} className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                      Featured
                    </span>
                    <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <PersonIcon className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button asChild>
                    <a href={`/blog/${post.slug}`}>
                      Read Article
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}

          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter(post => !post.featured)
                .map((post, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <PersonIcon className="h-3 w-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {post.readTime}
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRightIcon className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription className="text-base">
                Subscribe to our newsletter for the latest updates and articles
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get notified when we publish new articles, announce major updates, 
                or share interesting insights from our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-md border border-input bg-background text-sm"
                />
                <Button>
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>

          {/* Archive & RSS */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="/blog/archive">
                  View Archive
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/rss.xml">
                  RSS Feed
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Looking for older posts? Check out our archive or subscribe to our RSS feed.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}