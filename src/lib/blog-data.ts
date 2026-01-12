import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Author {
  name: string
  role?: string
  bio?: string
  avatar?: string
  social?: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  author: string
  authorData?: Author
  date: string
  readTime?: string
  category: string
  tags?: string[]
  featured?: boolean
  image?: string
  published?: boolean
}

let cachedBlogPosts: BlogPost[] | null = null
let cachedAuthors: Author[] | null = null

export function getAllAuthors(): Author[] {
  if (cachedAuthors !== null) {
    return cachedAuthors
  }

  try {
    const authorsJsonPath = path.join(process.cwd(), 'docs', 'blog', 'authors.json')
    const authorsJsonContent = fs.readFileSync(authorsJsonPath, 'utf8')
    const data = JSON.parse(authorsJsonContent)
    const authors: Author[] = data.authors || []
    cachedAuthors = authors
    return authors
  } catch (error) {
    console.warn('Failed to load authors data:', error)
    const emptyAuthors: Author[] = []
    cachedAuthors = emptyAuthors
    return emptyAuthors
  }
}

export function getAuthorByName(name: string): Author | undefined {
  return getAllAuthors().find(author => 
    author.name.toLowerCase() === name.toLowerCase()
  )
}

export function getAllBlogPosts(): BlogPost[] {
  if (cachedBlogPosts !== null) {
    return cachedBlogPosts
  }

  try {
    const blogDir = path.join(process.cwd(), 'docs', 'blog', 'posts')
    
    if (!fs.existsSync(blogDir)) {
      console.warn('Blog posts directory does not exist:', blogDir)
      cachedBlogPosts = []
      return cachedBlogPosts
    }

    const filenames = fs.readdirSync(blogDir)
    
    cachedBlogPosts = filenames
      .filter(name => name.endsWith('.md'))
      .map(filename => {
        const filePath = path.join(blogDir, filename)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)
        const slug = filename.replace(/\.md$/, '')
        
        // Calculate read time (rough estimate: 200 words per minute)
        const wordCount = content.trim().split(/\s+/).length
        const readTime = Math.ceil(wordCount / 200)
        
        const post: BlogPost = {
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          content,
          author: data.author || 'CodeStorm Hub Team',
          date: data.date || new Date().toISOString().split('T')[0],
          readTime: data.readTime || `${readTime} min read`,
          category: data.category || 'General',
          tags: data.tags || [],
          featured: data.featured || false,
          image: data.image || undefined,
          published: data.published !== false, // Default to published unless explicitly false
        }

        // Add author data if available
        const authorData = getAuthorByName(post.author)
        if (authorData) {
          post.authorData = authorData
        }

        return post
      })
      .filter(post => post.published) // Only return published posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date, newest first

    return cachedBlogPosts
  } catch (error) {
    console.warn('Failed to load blog posts:', error)
    cachedBlogPosts = []
    return cachedBlogPosts
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find(post => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getAllBlogPosts().filter(post => 
    post.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

export function getAllCategories(): string[] {
  const posts = getAllBlogPosts()
  const categories = new Set(posts.map(post => post.category))
  return Array.from(categories).sort()
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts()
  const tags = new Set(posts.flatMap(post => post.tags || []))
  return Array.from(tags).sort()
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllBlogPosts().filter(post => post.featured)
}
