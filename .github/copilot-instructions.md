# GitHub Copilot Instructions

## Project Overview
CodeStorm Hub is a modern portfolio website showcasing open source community projects and achievements. Built with Next.js 15, TypeScript, Tailwind CSS 4, and Radix UI, following design engineering principles inspired by Vercel and modern web standards.

## Development Guidelines

### Technology Stack
- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS 4 with utility-first approach
- **UI Components**: Radix UI primitives for accessibility
- **Icons**: Radix UI Icons for consistent iconography
- **Typography**: Geist Sans and Geist Mono fonts
- **Colors**: Radix Colors for semantic color usage
- **Deployment**: Vercel with automatic deployments

### Code Quality Standards

#### TypeScript Best Practices
- Use strict TypeScript configuration
- Define proper interfaces for all component props
- Avoid `any` type - use proper typing
- Export types alongside components when needed
- Use discriminated unions for complex state management

#### Component Architecture
- Prefer functional components with React hooks
- Use Radix UI primitives as foundation for custom components
- Implement compound component patterns for complex UI
- Follow atomic design methodology (atoms → molecules → organisms)
- Export components as default exports with named type exports

#### Styling Guidelines
- Use Tailwind CSS utility classes exclusively
- Follow mobile-first responsive design approach
- Implement dark/light mode using CSS custom properties
- Use Radix Colors for semantic color definitions
- Maintain consistent spacing using Tailwind's spacing scale
- Prefer composition over customization for component styling

### Accessibility Requirements
- Ensure WCAG 2.1 AA compliance for all components
- Use semantic HTML elements appropriately
- Include proper ARIA attributes where needed
- Test keyboard navigation functionality
- Provide alternative text for images and icons
- Maintain proper color contrast ratios (4.5:1 minimum)
- Support screen readers with proper markup

### Performance Optimization
- Optimize for Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Use Next.js Image component for all images
- Implement proper code splitting at route and component levels
- Leverage dynamic imports for heavy components
- Minimize JavaScript bundle size
- Use proper caching strategies for static assets

### File Organization
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable UI components organized by type
- `src/lib/` - Utility functions and configurations
- `public/` - Static assets (images, icons, etc.)
- `docs/` - Project documentation

### Naming Conventions
- **Files**: kebab-case (`component-name.tsx`, `utility-function.ts`)
- **Components**: PascalCase (`ComponentName`, `MyButton`)
- **Variables/Functions**: camelCase (`handleClick`, `userData`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINT`, `MAX_RETRY_COUNT`)
- **CSS Classes**: Tailwind utilities (no custom CSS classes preferred)

### Component Patterns

#### Basic Component Structure
```tsx
interface ComponentProps {
  title: string
  children?: React.ReactNode
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export default function Component({ 
  title, 
  children, 
  variant = 'primary',
  disabled = false 
}: ComponentProps) {
  return (
    <div className="component-classes">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </div>
  )
}

export type { ComponentProps }
```

#### Page Structure with Metadata
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title | CodeStorm Hub',
  description: 'Page description for SEO',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Page content */}
    </main>
  )
}
```

### Design System Integration

#### Color Usage
- Use Radix Colors semantic scale (gray, blue, red, green, yellow)
- Implement proper dark/light mode support
- Ensure accessible color combinations
- Use CSS custom properties for theme switching

#### Typography
- Use Geist Sans for UI text and body content
- Use Geist Mono for code blocks and technical content
- Follow consistent type scale (text-sm, text-base, text-lg, etc.)
- Maintain proper line heights for readability

#### Spacing and Layout
- Use Tailwind's spacing scale consistently (4, 8, 12, 16, 24, etc.)
- Implement proper grid systems using CSS Grid and Flexbox
- Ensure responsive design across all breakpoints
- Use container queries for component-level responsiveness

### Testing Approach
- Write tests for complex utility functions
- Test component accessibility with automated tools
- Validate responsive design across device sizes
- Test dark/light mode functionality
- Ensure keyboard navigation works correctly

### Common Patterns to Avoid
- Don't use inline styles - prefer Tailwind utilities
- Don't create custom CSS files - use Tailwind's utility system
- Don't ignore accessibility requirements
- Don't bypass Next.js optimizations (use Image, Link components)
- Don't use outdated React patterns (class components, legacy lifecycle methods)
- Don't forget to handle loading and error states
- Don't hardcode values that should be responsive or configurable

### Development Workflow
1. **Setup**: Ensure `npm install` runs successfully
2. **Development**: Use `npm run dev` for local development
3. **Linting**: Run `npm run lint` before committing
4. **Building**: Verify `npm run build` succeeds
5. **Testing**: Test functionality across different screen sizes
6. **Accessibility**: Validate with screen readers and keyboard navigation

### Integration with Existing Tools
- **Storybook**: Document components with usage examples
- **ESLint**: Follow configured linting rules
- **Prettier**: Maintain consistent code formatting
- **TypeScript**: Leverage strict type checking
- **Radix UI**: Use primitives for accessible component foundations

### Deployment Considerations
- Optimize images and assets for web delivery
- Ensure proper meta tags for SEO
- Test performance on slower networks
- Validate accessibility across different browsers
- Monitor Core Web Vitals in production

## Project-Specific Notes
- This is a community showcase project - code quality is paramount
- Components should be reusable and well-documented
- Performance and accessibility are not optional
- Follow the established design system strictly
- Consider mobile users as primary audience
- Maintain consistency with existing component patterns

## Getting Help
- Refer to `.github/INSTRUCTIONS.md` for detailed repository guidelines
- Check `.github/DESIGN_PRINCIPLES.md` for comprehensive design system documentation
- Review existing components in `src/components/` for established patterns
- Consult Radix UI documentation for primitive component usage
- Follow Tailwind CSS documentation for utility class usage