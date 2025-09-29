# GitHub Copilot Custom Instructions

## Project Context
You are working on CodeStorm Hub's portfolio website - a modern Next.js 15 application showcasing open source community projects. The codebase emphasizes clean architecture, accessibility, and performance following Vercel's design engineering principles and Radix UI's design system philosophy.

## Design Engineering Principles

### Vercel-Inspired Design Engineering
- **Systems Thinking**: Every component is part of a larger design system
- **Performance-First Design**: Visual excellence never compromises performance
- **Progressive Enhancement**: Build accessible foundations, enhance with advanced features
- **Content-First Approach**: Design serves content and user goals
- **Atomic Design**: Build from atoms → molecules → organisms → templates → pages

### Radix UI Philosophy
- **Unstyled Primitives**: Use Radix UI primitives as accessible foundations
- **Composition over Configuration**: Build complex components by composing simpler ones
- **Polymorphic Design**: Components adapt to different contexts and use cases
- **Accessible by Default**: Every component meets WCAG 2.1 AA standards
- **Compound Components**: Related components work together seamlessly

## Key Development Principles

### Code Style & Architecture
- **Always use TypeScript**: Every file should be properly typed
- **Functional Components**: Prefer React functional components with hooks
- **App Router**: Use Next.js 15 App Router patterns (not Pages Router)
- **Component Composition**: Build reusable components following established patterns
- **Utility-First CSS**: Use Tailwind CSS classes, avoid custom CSS when possible

### Technology Preferences
- **UI Foundation**: Radix UI primitives for accessible, unstyled components
- **Styling System**: Tailwind CSS 4 with design tokens and utility-first approach
- **Typography**: Geist Sans and Geist Mono font families for optimal readability
- **Color System**: Radix Colors for semantic, accessible color palettes
- **Icons**: Lucide React icons with consistent sizing and styling
- **State Management**: React hooks, Context API, and Zustand for complex state
- **Animation**: Framer Motion for smooth, purposeful animations
- **Layout**: CSS Grid and Flexbox with container queries for responsive design
- **Performance**: Next.js optimizations (Image, Link, dynamic imports)
- **Testing**: Component testing with accessibility validation

### File and Folder Conventions
- **Components**: Place in `src/components/[category]/component-name.tsx`
- **Pages**: Use App Router in `src/app/[route]/page.tsx`
- **Utilities**: Add to `src/lib/utils.ts` or create specific utility files
- **Types**: Define in component files or separate `.types.ts` files
- **Naming**: kebab-case for files, PascalCase for components, camelCase for variables

### Quality Standards
- **Accessibility**: WCAG 2.1 AA compliance with proper ARIA attributes and semantic HTML
- **Performance**: Core Web Vitals optimization (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **SEO**: Comprehensive metadata, OpenGraph tags, and structured data
- **Mobile-First**: Responsive design starting from 320px viewport width
- **Cross-Browser**: Support for modern browsers with graceful degradation
- **Error Handling**: Comprehensive error boundaries and loading states
- **Type Safety**: Strict TypeScript with proper interface definitions
- **Code Quality**: ESLint, Prettier, and Husky for consistent code standards
- **Documentation**: Storybook stories for components with usage examples
- **Testing**: Unit tests for utilities, integration tests for user flows

### Common Patterns to Follow

#### Component Structure
```tsx
interface ComponentProps {
  // Define props with proper TypeScript
}

export default function Component({ ...props }: ComponentProps) {
  // Component logic
  return (
    // JSX with proper accessibility
  )
}
```

#### Page Structure
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
}

export default function Page() {
  return (
    // Page content
  )
}
```

### Development Workflow
1. **Before coding**: Understand existing patterns in the codebase
2. **While coding**: Follow TypeScript strict mode, use proper typing
3. **Testing**: Run `npm run lint` and `npm run build` before committing
4. **Documentation**: Update relevant docs if adding new patterns

### Specific to This Project
- **Design System**: Follow Radix UI and Vercel design engineering principles
- **Brand Identity**: CodeStorm Hub's technical, modern, and community-focused aesthetic
- **Content Strategy**: Showcase open source projects and community achievements
- **Performance Goals**: Fast loading, smooth interactions, excellent Core Web Vitals
- **Accessibility Priority**: Ensure all users can access and navigate the content
- **Developer Experience**: Clean, maintainable code that's easy to contribute to

## UI Patterns & Design Guidelines

### Layout Patterns
- **Hero Sections**: Full-width with compelling visuals and clear CTAs
- **Card Grids**: Consistent spacing, hover effects, and responsive layouts
- **Navigation**: Clean, accessible navigation with proper focus management
- **Footer**: Organized links, social media, and legal information
- **Content Sections**: Proper spacing, typography hierarchy, and readability

### Component Design Patterns
- **Button Variants**: Primary, secondary, ghost, and destructive styles
- **Form Components**: Accessible inputs with proper validation states
- **Modal Dialogs**: Radix Dialog with proper focus trapping and escape handling
- **Dropdown Menus**: Radix DropdownMenu with keyboard navigation
- **Toast Notifications**: Non-intrusive feedback with appropriate timing
- **Loading States**: Skeleton loaders and progress indicators
- **Empty States**: Helpful messaging with clear next steps

### Animation & Interaction
- **Micro-interactions**: Subtle feedback for user actions
- **Page Transitions**: Smooth navigation between routes
- **Hover Effects**: Consistent hover states across interactive elements
- **Loading Animations**: Non-distracting progress indicators
- **Scroll Animations**: Progressive disclosure and parallax effects
- **Gesture Support**: Touch-friendly interactions for mobile devices

## Avoid These Common Mistakes
- Don't use `any` type in TypeScript
- Don't create custom CSS when Tailwind utilities exist
- Don't ignore accessibility requirements
- Don't bypass Next.js optimizations (use Image, Link components)
- Don't create components without proper TypeScript interfaces
- Don't forget to handle loading and error states
- Don't use outdated Next.js patterns (Pages Router style)

## When Suggesting Code Changes
1. **Maintain consistency** with existing codebase patterns
2. **Provide complete examples** that can be directly used
3. **Include proper TypeScript types** in all suggestions
4. **Consider accessibility** in component suggestions
5. **Optimize for performance** using Next.js best practices
6. **Follow the established file structure** and naming conventions

Remember: This is a showcase project for a developer community, so code quality, accessibility, and performance are paramount.