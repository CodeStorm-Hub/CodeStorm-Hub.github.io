import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { getImageWithFallback } from "@/lib/image-utils"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  size?: number
  fallback?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, size = 40, fallback, ...props }, ref) => {
    const [imageSrc, setImageSrc] = React.useState(src)
    const { src: optimizedSrc, fallbackSrc } = getImageWithFallback(src, alt)

    const handleError = React.useCallback(() => {
      if (fallback) {
        setImageSrc(fallback)
      } else if (fallbackSrc && imageSrc !== fallbackSrc) {
        setImageSrc(fallbackSrc)
      }
    }, [fallback, fallbackSrc, imageSrc])

    React.useEffect(() => {
      setImageSrc(optimizedSrc)
    }, [optimizedSrc])

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted overflow-hidden",
          className
        )}
        style={{ width: size, height: size }}
        {...props}
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full object-cover"
          onError={handleError}
          unoptimized={true}
        />
      </div>
    )
  }
)

Avatar.displayName = "Avatar"

export { Avatar }