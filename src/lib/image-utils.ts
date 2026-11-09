/**
 * Image utilities for handling external images, fallbacks, and GitHub Pages subpath routing
 */

/**
 * Automatically prepends the base path (e.g. /CodeStorm-Hub) for static assets when deployed on GitHub Pages.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  // Leave external or data URLs intact
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("//")
  ) {
    return path;
  }

  // Obtain base path from environment or default to /CodeStorm-Hub in production
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.NODE_ENV === "production" ? "/CodeStorm-Hub" : "");

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // If already prefixed, don't duplicate
  if (basePath && (cleanPath === basePath || cleanPath.startsWith(`${basePath}/`))) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
}

export interface ImageFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

/**
 * Generate a fallback avatar using GitHub's avatar API or a placeholder
 */
export function generateFallbackAvatar(name: string): string {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=171717&color=fff&size=200`;
}

/**
 * Validate image URL and provide fallbacks
 */
export function getImageWithFallback(src: string, alt: string): ImageFallbackProps {
  if (src.includes("ui-avatars.com") || src.includes("github.com")) {
    return { src: getAssetPath(src), alt };
  }

  const fallbackSrc = generateFallbackAvatar(alt.replace(" profile picture", "").replace(" avatar", ""));

  return {
    src: getAssetPath(src),
    alt,
    fallbackSrc,
  };
}

/**
 * Handle image load errors by updating src to fallback
 */
export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>, fallbackSrc?: string) {
  const img = event.target as HTMLImageElement;
  if (fallbackSrc && img.src !== fallbackSrc) {
    img.src = fallbackSrc;
  }
}

/**
 * Optimize external image URLs for better loading
 */
export function optimizeImageUrl(src: string, width: number, height: number): string {
  if (src.includes("unsplash.com")) {
    const url = new URL(src);
    url.searchParams.set("w", width.toString());
    url.searchParams.set("h", height.toString());
    url.searchParams.set("fit", "crop");
    url.searchParams.set("auto", "format");
    url.searchParams.set("q", "80");
    return url.toString();
  }
  return getAssetPath(src);
}
