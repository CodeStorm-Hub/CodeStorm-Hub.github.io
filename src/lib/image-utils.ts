/**
 * Image utilities for handling external images and fallbacks
 */

export interface ImageFallbackProps {
  src: string
  alt: string
  fallbackSrc?: string
}

/**
 * Generate a fallback avatar using GitHub's avatar API or a placeholder
 */
export function generateFallbackAvatar(name: string): string {
  // Create a simple avatar using the first letter of the name
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  // Return a GitHub-style avatar URL or placeholder
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=171717&color=fff&size=200`
}

/**
 * Validate image URL and provide fallbacks
 */
export function getImageWithFallback(src: string, alt: string): ImageFallbackProps {
  // If it's already a fallback avatar, return as is
  if (src.includes('ui-avatars.com') || src.includes('github.com')) {
    return { src, alt }
  }

  // For Unsplash images, provide a fallback
  const fallbackSrc = generateFallbackAvatar(alt.replace(' profile picture', '').replace(' avatar', ''))
  
  return {
    src,
    alt,
    fallbackSrc
  }
}

/**
 * Handle image load errors by updating src to fallback
 */
export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>, fallbackSrc?: string) {
  const img = event.target as HTMLImageElement
  if (fallbackSrc && img.src !== fallbackSrc) {
    img.src = fallbackSrc
  }
}

/**
 * Optimize external image URLs for better loading
 */
export function optimizeImageUrl(src: string, width: number, height: number): string {
  // For Unsplash images, add optimization parameters
  if (src.includes('unsplash.com')) {
    const url = new URL(src)
    url.searchParams.set('w', width.toString())
    url.searchParams.set('h', height.toString()) 
    url.searchParams.set('fit', 'crop')
    url.searchParams.set('crop', 'face')
    url.searchParams.set('auto', 'format')
    url.searchParams.set('q', '80')
    return url.toString()
  }
  
  return src
}