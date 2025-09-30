import React from 'react'
import { LightningBoltIcon, CubeIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'full' | 'icon' | 'text'
}

const sizeClasses = {
  sm: {
    container: 'h-6',
    icon: 'h-4 w-4',
    text: 'text-lg font-bold',
    spacing: 'gap-1.5'
  },
  md: {
    container: 'h-8',
    icon: 'h-5 w-5', 
    text: 'text-xl font-bold',
    spacing: 'gap-2'
  },
  lg: {
    container: 'h-12',
    icon: 'h-8 w-8',
    text: 'text-3xl font-bold',
    spacing: 'gap-3'
  }
}

export function Logo({ className, size = 'md', variant = 'full' }: LogoProps) {
  const sizes = sizeClasses[size]
  
  const IconComponent = () => (
    <div className={cn(
      "relative inline-flex items-center justify-center",
      sizes.container,
      "bg-gradient-to-br from-primary via-primary/80 to-primary/60",
      "rounded-lg shadow-sm"
    )}>
      {/* Lightning bolt as main icon */}
      <LightningBoltIcon 
        className={cn(
          sizes.icon,
          "text-primary-foreground drop-shadow-sm z-10"
        )} 
      />
      {/* Subtle cube in background for "Hub" concept */}
      <CubeIcon 
        className={cn(
          "absolute top-0 right-0 h-2 w-2",
          size === 'lg' ? 'h-3 w-3' : 'h-2 w-2',
          "text-primary-foreground/40"
        )}
      />
    </div>
  )

  const TextComponent = () => (
    <span className={cn(sizes.text, "tracking-tight")}>
      <span className="text-foreground">Code</span>
      <span className="text-primary">Storm</span>
      <span className="text-foreground"> Hub</span>
    </span>
  )

  if (variant === 'icon') {
    return (
      <div className={className}>
        <IconComponent />
      </div>
    )
  }

  if (variant === 'text') {
    return (
      <div className={className}>
        <TextComponent />
      </div>
    )
  }

  return (
    <div className={cn("flex items-center", sizes.spacing, className)}>
      <IconComponent />
      <TextComponent />
    </div>
  )
}

// Export individual components for flexibility
export const LogoIcon = ({ className, size = 'md' }: Omit<LogoProps, 'variant'>) => (
  <Logo variant="icon" size={size} className={className} />
)

export const LogoText = ({ className, size = 'md' }: Omit<LogoProps, 'variant'>) => (
  <Logo variant="text" size={size} className={className} />
)