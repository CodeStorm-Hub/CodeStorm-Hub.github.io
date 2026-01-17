"use client"

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: React.ReactNode
}

// Helper function to get initial theme
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  
  const stored = localStorage.getItem('theme') as Theme | null
  if (stored && (stored === 'light' || stored === 'dark')) {
    return stored
  }
  
  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialize with computed value to avoid state updates in useEffect
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)
  const [mounted, setMounted] = useState(false)

  // Apply theme to DOM only - no state updates here
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])
  
  // Separate effect for setting mounted state only once
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    if (!mounted) return
    
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light'
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
  }, [theme, mounted])

  const setTheme = useCallback((newTheme: Theme) => {
    if (!mounted) return
    
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
  }, [mounted])

  const value: ThemeContextType = useMemo(() => ({
    theme,
    toggleTheme,
    setTheme,
    mounted,
  }), [theme, toggleTheme, setTheme, mounted])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}