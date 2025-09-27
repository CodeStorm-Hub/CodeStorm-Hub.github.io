/**
 * Design Tokens
 * 
 * Centralized design system tokens for consistent spacing, typography, and styling
 * Based on 8px grid system and modular scale principles
 */

export const spacing = {
  1: 'var(--space-1)',   // 4px
  2: 'var(--space-2)',   // 8px  
  3: 'var(--space-3)',   // 12px
  4: 'var(--space-4)',   // 16px
  5: 'var(--space-5)',   // 20px
  6: 'var(--space-6)',   // 24px
  8: 'var(--space-8)',   // 32px
  10: 'var(--space-10)', // 40px
  12: 'var(--space-12)', // 48px
  16: 'var(--space-16)', // 64px
  20: 'var(--space-20)', // 80px
  24: 'var(--space-24)', // 96px
} as const;

export const typography = {
  sizes: {
    xs: 'var(--text-xs)',     // 12px
    sm: 'var(--text-sm)',     // 14px
    base: 'var(--text-base)', // 16px
    lg: 'var(--text-lg)',     // 18px
    xl: 'var(--text-xl)',     // 20px
    '2xl': 'var(--text-2xl)', // 24px
    '3xl': 'var(--text-3xl)', // 30px
    '4xl': 'var(--text-4xl)', // 36px
    '5xl': 'var(--text-5xl)', // 48px
    '6xl': 'var(--text-6xl)', // 60px
  },
  lineHeights: {
    tight: 'var(--leading-tight)',     // 1.25
    normal: 'var(--leading-normal)',   // 1.5
    relaxed: 'var(--leading-relaxed)', // 1.75
  },
} as const;

export const radius = {
  sm: 'var(--radius-sm)',     // 4px
  md: 'var(--radius-md)',     // 6px
  lg: 'var(--radius-lg)',     // 8px
  xl: 'var(--radius-xl)',     // 12px
  '2xl': 'var(--radius-2xl)', // 16px
  full: 'var(--radius-full)', // 9999px
} as const;

export const shadows = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)', 
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
} as const;

/**
 * Breakpoints for responsive design
 * Mobile-first approach
 */
export const breakpoints = {
  sm: '640px',   // Small tablets
  md: '768px',   // Large tablets  
  lg: '1024px',  // Laptops
  xl: '1280px',  // Desktops
  '2xl': '1536px', // Large desktops
} as const;

/**
 * Container max-widths for different breakpoints
 */
export const containers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px',
} as const;

/**
 * Z-index scale for consistent layering
 */
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

/**
 * Animation duration tokens
 */
export const duration = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

/**
 * Common easing functions
 */
export const easing = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;