"use client"

import { useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'

interface KeyboardShortcut {
  key: string
  ctrlKey?: boolean
  altKey?: boolean
  shiftKey?: boolean
  action: () => void
  description: string
}

interface KeyboardNavigationProps {
  shortcuts?: KeyboardShortcut[]
}

export function KeyboardNavigation({ shortcuts = [] }: KeyboardNavigationProps) {
  const router = useRouter()

  // Default keyboard shortcuts for common actions
  const defaultShortcuts = useMemo<KeyboardShortcut[]>(() => [
    {
      key: 'h',
      altKey: true,
      action: () => router.push('/'),
      description: 'Go to homepage'
    },
    {
      key: 'p',
      altKey: true,
      action: () => router.push('/projects'),
      description: 'Go to projects page'
    },
    {
      key: 't',
      altKey: true,
      action: () => router.push('/team'),
      description: 'Go to team page'
    },
    {
      key: 'c',
      altKey: true,
      action: () => router.push('/contact'),
      description: 'Go to contact page'
    },
    {
      key: '/',
      action: () => {
        // Focus on search if available, otherwise skip to main content
        const searchInput = document.querySelector('input[type="search"]') as HTMLElement
        const mainContent = document.getElementById('main-content')
        if (searchInput) {
          searchInput.focus()
        } else if (mainContent) {
          mainContent.focus()
        }
      },
      description: 'Focus search or main content'
    }
  ], [router])

  // Memoize all shortcuts to prevent recreation
  const allShortcuts = useMemo(() => {
    const showHelpShortcut: KeyboardShortcut = {
      key: '?',
      shiftKey: true,
      action: () => {
        showKeyboardShortcuts([...defaultShortcuts, ...shortcuts])
      },
      description: 'Show keyboard shortcuts'
    }
    return [...defaultShortcuts, ...shortcuts, showHelpShortcut]
  }, [defaultShortcuts, shortcuts])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Don't trigger shortcuts when typing in inputs
    const target = event.target as HTMLElement
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      // Allow some shortcuts even in inputs
      if (event.key === 'Escape') {
        target.blur()
        return
      }
      return
    }

    for (const shortcut of allShortcuts) {
      if (
        event.key.toLowerCase() === shortcut.key.toLowerCase() &&
        !!event.ctrlKey === !!shortcut.ctrlKey &&
        !!event.altKey === !!shortcut.altKey &&
        !!event.shiftKey === !!shortcut.shiftKey
      ) {
        event.preventDefault()
        shortcut.action()
        break
      }
    }
  }, [allShortcuts])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return null // This is a behavior-only component
}

function showKeyboardShortcuts(shortcuts: KeyboardShortcut[]) {
  // Create a modal dialog showing keyboard shortcuts
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
  modal.setAttribute('role', 'dialog')
  modal.setAttribute('aria-modal', 'true')
  modal.setAttribute('aria-labelledby', 'shortcuts-title')
  
  const content = document.createElement('div')
  content.className = 'bg-background border border-border rounded-lg p-6 max-w-md mx-4 shadow-lg'
  
  const title = document.createElement('h2')
  title.id = 'shortcuts-title'
  title.className = 'text-lg font-semibold mb-4'
  title.textContent = 'Keyboard Shortcuts'
  
  const shortcutsList = document.createElement('div')
  shortcutsList.className = 'space-y-2 mb-4'
  
  shortcuts.forEach(shortcut => {
    const item = document.createElement('div')
    item.className = 'flex justify-between items-center text-sm'
    
    const keys = document.createElement('kbd')
    keys.className = 'px-2 py-1 bg-muted rounded text-xs font-mono'
    
    let keyText = ''
    if (shortcut.ctrlKey) keyText += 'Ctrl + '
    if (shortcut.altKey) keyText += 'Alt + '
    if (shortcut.shiftKey) keyText += 'Shift + '
    keyText += shortcut.key.toUpperCase()
    
    keys.textContent = keyText
    
    const description = document.createElement('span')
    description.className = 'text-muted-foreground'
    description.textContent = shortcut.description
    
    item.appendChild(keys)
    item.appendChild(description)
    shortcutsList.appendChild(item)
  })
  
  const closeButton = document.createElement('button')
  closeButton.className = 'w-full bg-primary text-primary-foreground px-4 py-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
  closeButton.textContent = 'Close'
  closeButton.onclick = () => document.body.removeChild(modal)
  
  // Close on escape or click outside
  const closeModal = (e: Event) => {
    if (e.target === modal || (e as KeyboardEvent).key === 'Escape') {
      document.body.removeChild(modal)
      document.removeEventListener('keydown', closeModal)
    }
  }
  
  document.addEventListener('keydown', closeModal)
  modal.onclick = closeModal
  content.onclick = (e) => e.stopPropagation()
  
  content.appendChild(title)
  content.appendChild(shortcutsList)
  content.appendChild(closeButton)
  modal.appendChild(content)
  document.body.appendChild(modal)
  
  // Focus the close button
  closeButton.focus()
}

export type { KeyboardShortcut }