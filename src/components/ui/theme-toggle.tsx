"use client"

import React from 'react'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/use-theme'
import { useAnnouncement } from '@/components/ui/live-region'

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()
  const announce = useAnnouncement()

  const handleToggle = () => {
    toggleTheme()
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    announce(`Switched to ${newTheme} mode`)
  }

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        aria-label="Toggle theme"
        className="h-9 w-9 px-0"
        disabled
      >
        <SunIcon className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="h-9 w-9 px-0"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </Button>
  )
}