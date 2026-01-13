import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ProjectData {
  name: string
  slug: string
  overview?: string
  description?: string
  github?: string
  primaryLanguage?: string
  languages?: string[]
  stars?: number
  forks?: number
  lastUpdated?: string
  status?: 'Active' | 'Archived' | 'Maintenance' | 'In Development' | 'Under Construction'
  visibility?: 'Public' | 'Private'
  liveDemo?: string
  techStack?: string[]
  architecture?: string
  repositorySize?: string
  content: string
  keyFeatures?: string[]
  category?: string
  tags?: string[]
  prerequisites?: string[]
  contributors?: string[]
}

let cachedProjectsData: ProjectData[] | null = null

export function getAllProjects(): ProjectData[] {
  if (cachedProjectsData) {
    return cachedProjectsData
  }

  try {
    const projectsDir = path.join(process.cwd(), 'docs', 'projects')
    const filenames = fs.readdirSync(projectsDir)
    
    cachedProjectsData = filenames
      .filter(name => name.endsWith('.md'))
      .map(filename => {
        const filePath = path.join(projectsDir, filename)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)
        const slug = filename.replace(/\.md$/, '')
        
        // Parse the markdown content to extract structured data
        const parsedData = parseProjectMarkdown(content, slug)
        
        return {
          ...data,
          ...parsedData,
          slug,
          content,
        } as ProjectData
      })
      .sort((a, b) => {
        // Sort by status (Active first), then by stars, then by last updated
        if (a.status === 'Active' && b.status !== 'Active') return -1
        if (b.status === 'Active' && a.status !== 'Active') return 1
        if (a.stars && b.stars) return b.stars - a.stars
        return (b.lastUpdated || '').localeCompare(a.lastUpdated || '')
      })

    return cachedProjectsData
  } catch (error) {
    console.warn('Failed to load projects data from docs/projects:', error)
    cachedProjectsData = []
    return cachedProjectsData
  }
}

function parseProjectMarkdown(content: string, slug: string): Partial<ProjectData> {
  const lines = content.split('\n')
  const data: Partial<ProjectData> = { name: slug.replace(/-/g, ' ') }
  
  // Extract title
  const titleMatch = lines.find(line => line.startsWith('# '))
  if (titleMatch) {
    data.name = titleMatch.replace('# ', '').trim()
  }
  
  // Extract overview/description - Look for the first paragraph after ## Overview
  const overviewIndex = lines.findIndex(line => line.includes('## Overview'))
  if (overviewIndex > -1) {
    // Find the first non-empty line after ## Overview (skip empty lines)
    for (let i = overviewIndex + 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (line && !line.startsWith('#') && !line.startsWith('##')) {
        data.overview = line
        break
      }
    }
  }
  
  // Extract key features - Look for ## ✨ Key Features section
  const featuresIndex = lines.findIndex(line => line.includes('## ✨ Key Features') || line.includes('## Key Features'))
  if (featuresIndex > -1) {
    const features: string[] = []
    for (let i = featuresIndex + 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (line.startsWith('##')) break // Stop at next section
      if (line.startsWith('- **') && line.includes(':**')) {
        // Extract feature name and description
        const featureMatch = line.match(/- \*\*([^*]+):\*\* (.+)/)
        if (featureMatch) {
          features.push(`${featureMatch[1]}: ${featureMatch[2]}`)
        }
      }
    }
    data.keyFeatures = features
  }
  
  // Extract GitHub URL
  const githubMatch = content.match(/- \*\*GitHub:\*\* (https:\/\/github\.com\/[^\s\n\]]+)/)
  if (githubMatch) {
    data.github = githubMatch[1]
  }
  
  // Extract primary language
  const langMatch = content.match(/- \*\*Primary Language:\*\* (.+)/)
  if (langMatch) {
    data.primaryLanguage = langMatch[1].trim()
  }
  
  // Extract languages with percentages
  const languagesMatch = content.match(/- \*\*Languages:\*\* (.+)/)
  if (languagesMatch) {
    const languagesStr = languagesMatch[1]
    data.languages = languagesStr.split(',').map(lang => lang.trim().split('(')[0].trim())
  }
  
  // Extract stars and forks
  const starsMatch = content.match(/⭐ (\d+) stars?/)
  if (starsMatch) {
    data.stars = parseInt(starsMatch[1])
  }
  
  const forksMatch = content.match(/🍴 (\d+) forks?/)
  if (forksMatch) {
    data.forks = parseInt(forksMatch[1])
  }
  
  // Extract last updated
  const updateMatch = content.match(/- \*\*Last Updated:\*\* (.+)/)
  if (updateMatch) {
    data.lastUpdated = updateMatch[1].trim()
  }
  
  // Extract status - Enhanced to handle more status types
  const statusMatch = content.match(/- \*\*Status:\*\* (?:✅|🔄|📦|🏗️|🚧) (Active|Archived|Maintenance|In Development|Under Construction)/)
  if (statusMatch) {
    data.status = statusMatch[1] as ProjectData['status']
  }
  
  // Extract visibility
  const visibilityMatch = content.match(/- \*\*Visibility:\*\* (?:🌐|🔐) (Public|Private)/)
  if (visibilityMatch) {
    data.visibility = visibilityMatch[1] as 'Public' | 'Private'
  }
  
  // Extract live demo
  const demoMatch = content.match(/- \*\*Live Demo:\*\* \[([^\]]+)\]\(([^)]+)\)/)
  if (demoMatch) {
    data.liveDemo = demoMatch[2]
  }
  
  // Extract category
  const categoryMatch = content.match(/- \*\*Category:\*\* (.+)/)
  if (categoryMatch) {
    data.category = categoryMatch[1].trim()
  }
  
  // Extract tags
  const tagsMatch = content.match(/- \*\*Tags:\*\* (.+)/)
  if (tagsMatch) {
    data.tags = tagsMatch[1].split(' ').map(tag => tag.replace('#', '').trim()).filter(tag => tag.length > 0)
  }
  
  // Extract tech stack from multiple possible locations
  const techMatch = content.match(/- \*\*Technology Stack:\*\* (.+)/) || 
                   content.match(/- \*\*Framework:\*\* (.+)/)
  if (techMatch) {
    data.techStack = techMatch[1].split(/[,/]/).map(tech => tech.trim())
  } else {
    // Fallback: extract from Primary Technologies section
    const primaryTechIndex = lines.findIndex(line => line.includes('### Primary Technologies'))
    if (primaryTechIndex > -1) {
      const techStack: string[] = []
      for (let i = primaryTechIndex + 1; i < lines.length; i++) {
        const line = lines[i].trim()
        if (line.startsWith('###') || line.startsWith('##')) break
        if (line.startsWith('- **') && line.includes(':**')) {
          const techMatch = line.match(/- \*\*([^*]+):\*\*/)
          if (techMatch) {
            techStack.push(techMatch[1])
          }
        }
      }
      data.techStack = techStack
    }
  }
  
  // Extract architecture
  const archMatch = content.match(/- \*\*Architecture:\*\* (.+)/)
  if (archMatch) {
    data.architecture = archMatch[1].trim()
  }
  
  // Extract repository size
  const sizeMatch = content.match(/- \*\*Repository Size:\*\* (.+)/)
  if (sizeMatch) {
    data.repositorySize = sizeMatch[1].trim()
  }
  
  // Extract prerequisites from Getting Started section
  const prerequisitesIndex = lines.findIndex(line => line.includes('### Prerequisites'))
  if (prerequisitesIndex > -1) {
    const prerequisites: string[] = []
    for (let i = prerequisitesIndex + 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (line.startsWith('###') || line.startsWith('##')) break
      if (line.startsWith('-') && !line.startsWith('- **')) {
        prerequisites.push(line.replace(/^- /, '').trim())
      }
    }
    data.prerequisites = prerequisites
  }
  
  // Extract contributors
  const contributorsMatch = content.match(/- \*\*Lead Developer:\*\* \[([^\]]+)\]/)
  if (contributorsMatch) {
    data.contributors = [contributorsMatch[1]]
  }
  
  return data
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return getAllProjects().find(project => project.slug === slug)
}

export function getFeaturedProjects(limit: number = 6): ProjectData[] {
  return getAllProjects()
    .filter(project => project.status === 'Active' && project.visibility === 'Public')
    .slice(0, limit)
}

export function getProjectsByTechnology(tech: string): ProjectData[] {
  return getAllProjects().filter(project => 
    project.techStack?.some(t => t.toLowerCase().includes(tech.toLowerCase())) ||
    project.primaryLanguage?.toLowerCase().includes(tech.toLowerCase())
  )
}

export function getProjectsByCategory(category: string): ProjectData[] {
  return getAllProjects().filter(project => 
    project.category?.toLowerCase().includes(category.toLowerCase())
  )
}

export function getAllCategories(): string[] {
  const categories = getAllProjects()
    .map(project => project.category)
    .filter((category): category is string => Boolean(category))
  return Array.from(new Set(categories)).sort()
}

export function getAllTags(): string[] {
  const tags = getAllProjects()
    .flatMap(project => project.tags || [])
  return Array.from(new Set(tags)).sort()
}