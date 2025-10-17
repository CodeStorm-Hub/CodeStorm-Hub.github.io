import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { CalendarIcon, PersonIcon, ClockIcon, ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import type { Metadata } from "next"
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import Link from "next/link"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | CodeStorm Hub Blog`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Get all posts for navigation
  const allPosts = getAllBlogPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  // Get related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <div className="py-12">
      <Container>
        <article className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog">
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Post Header */}
          <header className="mb-12 space-y-6">
            {/* Category & Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              {post.tags?.map((tag) => (
                <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{post.title}</h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground">{post.description}</p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <PersonIcon className="h-4 w-4" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
              className="whitespace-pre-wrap"
            />
          </div>

          {/* Author Info */}
          {post.authorData && (
            <div className="mb-12 p-6 rounded-lg border border-border bg-secondary/20">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">About the Author</h3>
                  <p className="text-sm font-medium text-primary mb-2">{post.authorData.name}</p>
                  {post.authorData.role && (
                    <p className="text-sm text-muted-foreground mb-2">{post.authorData.role}</p>
                  )}
                  {post.authorData.bio && (
                    <p className="text-sm text-muted-foreground">{post.authorData.bio}</p>
                  )}
                  {post.authorData.social && (
                    <div className="flex gap-3 mt-3">
                      {post.authorData.social.github && post.authorData.social.github !== "#" && (
                        <a
                          href={post.authorData.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                      {post.authorData.social.linkedin && post.authorData.social.linkedin !== "#" && (
                        <a
                          href={post.authorData.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          LinkedIn
                        </a>
                      )}
                      {post.authorData.social.twitter && post.authorData.social.twitter !== "#" && (
                        <a
                          href={post.authorData.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          Twitter
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Post Navigation */}
          <div className="mb-12 flex flex-col sm:flex-row gap-4">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="flex-1">
                <div className="p-4 rounded-lg border border-border hover:border-primary transition-colors">
                  <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <ArrowLeftIcon className="h-3 w-3" />
                    Previous Post
                  </div>
                  <div className="font-medium">{prevPost.title}</div>
                </div>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="flex-1">
                <div className="p-4 rounded-lg border border-border hover:border-primary transition-colors text-right">
                  <div className="text-xs text-muted-foreground mb-1 flex items-center justify-end gap-1">
                    Next Post
                    <ArrowRightIcon className="h-3 w-3" />
                  </div>
                  <div className="font-medium">{nextPost.title}</div>
                </div>
              </Link>
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <div className="p-4 rounded-lg border border-border hover:border-primary transition-colors h-full">
                      <div className="text-xs text-muted-foreground mb-2">{relatedPost.category}</div>
                      <div className="font-medium mb-2 line-clamp-2">{relatedPost.title}</div>
                      <div className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center p-8 rounded-lg border border-border bg-gradient-to-r from-primary/5 to-blue-500/5">
            <h3 className="text-xl font-bold mb-2">Enjoyed this article?</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for more insights and updates
            </p>
            <Button asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </article>
      </Container>
    </div>
  )
}
