"use client"

import { useThemeContext } from '@/lib/theme-context'

export type { Theme } from '@/lib/theme-context'

export function useTheme() {
  return useThemeContext()
}