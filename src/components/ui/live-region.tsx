"use client"

import { useEffect, useRef } from 'react'

interface LiveRegionProps {
  children: React.ReactNode
  priority?: 'polite' | 'assertive'
  atomic?: boolean
  className?: string
}

export function LiveRegion({ 
  children, 
  priority = 'polite', 
  atomic = true,
  className = "sr-only"
}: LiveRegionProps) {
  const regionRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={regionRef}
      aria-live={priority}
      aria-atomic={atomic}
      className={className}
      role="status"
    >
      {children}
    </div>
  )
}

// Hook for announcing messages to screen readers
export function useAnnouncement() {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Create or find live region
    let liveRegion = document.getElementById('live-announcements')
    if (!liveRegion) {
      liveRegion = document.createElement('div')
      liveRegion.id = 'live-announcements'
      liveRegion.setAttribute('aria-live', priority)
      liveRegion.setAttribute('aria-atomic', 'true')
      liveRegion.className = 'sr-only'
      document.body.appendChild(liveRegion)
    }

    // Update the aria-live attribute if priority changed
    liveRegion.setAttribute('aria-live', priority)

    // Clear and then set the message
    liveRegion.textContent = ''
    
    timeoutRef.current = setTimeout(() => {
      if (liveRegion) {
        liveRegion.textContent = message
      }
    }, 100) // Small delay ensures screen readers catch the change
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return announce
}

// Component for managing theme change announcements
export function ThemeAnnouncement({ theme }: { theme: 'light' | 'dark' }) {
  const announce = useAnnouncement()

  useEffect(() => {
    announce(`Switched to ${theme} mode`, 'polite')
  }, [theme, announce])

  return null
}