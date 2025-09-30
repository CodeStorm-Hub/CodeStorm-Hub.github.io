import React from 'react'
import { LightningBoltIcon, ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'full' | 'icon' | 'text'
}

const sizeClasses = {
  sm: {
    container: 'h-6',
    icon: 'h-3 w-3',
    lightning: 'h-4 w-4',
    text: 'text-lg font-bold',
    spacing: 'gap-2'
  },
  md: {
    container: 'h-8',
    icon: 'h-4 w-4',
    lightning: 'h-5 w-5', 
    text: 'text-xl font-bold',
    spacing: 'gap-2.5'
  },
  lg: {
    container: 'h-12',
    icon: 'h-6 w-6',
    lightning: 'h-7 w-7',
    text: 'text-3xl font-bold',
    spacing: 'gap-3'
  }
}

export function Logo({ className, size = 'md', variant = 'full' }: LogoProps) {
  const sizes = sizeClasses[size]
  
  const IconComponent = () => (
    <div className={cn(
      "inline-flex items-center justify-center",
      sizes.container,
      "relative"
    )}>
      {/* Left Chevron */}
      <ChevronLeftIcon 
        className={cn(
          sizes.icon,
          "text-primary/60"
        )} 
      />
      {/* Central Lightning Bolt - The main focus */}
      <LightningBoltIcon 
        className={cn(
          sizes.lightning,
          "text-primary mx-0.5 relative z-10"
        )} 
      />
      {/* Right Chevron */}
      <ChevronRightIcon 
        className={cn(
          sizes.icon,
          "text-primary/60"
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