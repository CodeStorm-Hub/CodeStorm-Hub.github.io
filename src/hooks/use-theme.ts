"use client"

import { useState, useEffect } from 'react'

export type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    // Check for stored theme preference or default to system preference
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored) {
      setTheme(stored)
      document.documentElement.classList.toggle('dark', stored === 'dark')
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const systemTheme: Theme = prefersDark ? 'dark' : 'light'
      setTheme(systemTheme)
      document.documentElement.classList.toggle('dark', systemTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const setThemeValue = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return {
    theme,
    toggleTheme,
    setTheme: setThemeValue,
  }
}