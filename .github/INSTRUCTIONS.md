# Repository Instructions for GitHub Copilot

## Project Overview
CodeStorm Hub is a vibrant community portfolio website built with modern web technologies. This is a Next.js 15 application showcasing open source projects and community work.

## Tech Stack
- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Icons**: Radix UI Icons
- **Deployment**: Vercel

## Development Environment

### Prerequisites
- Node.js (version specified in package.json engines or latest LTS)
- npm (comes with Node.js)

### Setup
```bash
npm install
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Standards

### File Organization
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable UI components
- `src/lib/` - Utilities, configurations, and helper functions
- `public/` - Static assets
- `docs/` - Project documentation

### Naming Conventions
- **Files**: Use kebab-case for file names (`my-component.tsx`)
- **Components**: Use PascalCase for React components (`MyComponent`)
- **Variables/Functions**: Use camelCase (`myFunction`, `myVariable`)
- **Constants**: Use UPPER_SNAKE_CASE (`MY_CONSTANT`)

### Component Structure
- Use TypeScript for all components with proper interface definitions
- Prefer functional components with hooks following React best practices
- Use Radix UI primitives as foundation for accessible components
- Implement compound component patterns for complex UI elements
- Follow polymorphic component design for flexible APIs
- Export components as default exports with named type exports
- Use composition over inheritance for component architecture
- Implement proper error boundaries and loading states
- Follow Storybook documentation patterns for component stories
- Ensure components are responsive and mobile-first

### Styling Guidelines
- Use Tailwind CSS utility classes following the design system
- Implement Radix Colors for semantic color usage
- Follow Vercel's design engineering principles for component composition
- Use Geist font family for typography (sans and mono variants)
- Maintain consistent spacing using Tailwind's spacing scale
- Ensure responsive design with mobile-first approach
- Implement proper dark/light mode support
- Use CSS Grid and Flexbox for modern layout patterns
- Apply container queries for component-level responsiveness
- Optimize for accessibility with proper contrast ratios

## Testing and Quality

### Before Committing
1. Run `npm run lint` to check for linting errors
2. Run `npm run build` to ensure the project builds successfully
3. Test functionality in development mode with `npm run dev`

### Code Quality
- Follow TypeScript best practices
- Use proper typing, avoid `any` type
- Write self-documenting code with clear variable names
- Add comments for complex logic only

## Common Patterns

### Creating New Pages
1. Add new page in `src/app/[page-name]/page.tsx`
2. Follow existing layout patterns
3. Use proper TypeScript typing
4. Include metadata for SEO

### Adding Components
1. Create in `src/components/[component-type]/`
2. Use TypeScript interfaces for props
3. Follow existing component structure
4. Export from component index if needed

### Utilities
- Add shared utilities to `src/lib/`
- Use proper TypeScript typing
- Follow existing utility patterns

## Design System & Principles

This project follows a comprehensive design system inspired by modern design engineering practices:

### Design Engineering Principles (Vercel-Inspired)
- **Design-Engineering Fusion**: Components are built with both design and engineering considerations
- **System Thinking**: Every component contributes to a cohesive design system
- **Progressive Enhancement**: Start with accessible basics, enhance with advanced features
- **Performance-First**: Visual design never compromises core web vitals
- **Consistency**: Unified patterns across all user interface elements

### Typography System (Geist Font)
- **Primary Font**: Geist Sans for body text and interfaces
- **Monospace Font**: Geist Mono for code and technical content
- **Type Scale**: Use consistent spacing and sizing ratios
- **Hierarchy**: Clear visual hierarchy with proper heading levels
- **Readability**: Optimal line-height and contrast ratios

### Color System (Radix Colors)
- **Semantic Colors**: Colors convey meaning and state
- **Accessibility**: WCAG AA compliant color combinations
- **Dark/Light Modes**: Automatic theme switching support
- **Brand Consistency**: CodeStorm Hub brand colors integrated
- **Functional Colors**: Error, success, warning, and info states

### Component Architecture
- **Radix UI Primitives**: Unstyled, accessible foundation components
- **Composition Pattern**: Build complex components from simpler ones
- **Prop-based API**: Consistent interface patterns across components
- **Polymorphic Components**: Components adapt to different HTML elements
- **Compound Components**: Related components work together seamlessly

### Layout & Spacing
- **Grid Systems**: CSS Grid and Flexbox for complex layouts
- **Container Queries**: Responsive components based on container size
- **Spacing Scale**: Consistent spacing using Tailwind's spacing system
- **Breakpoint Strategy**: Mobile-first responsive design
- **Content-First**: Layout serves content, not vice versa

### Accessibility Standards
- **WCAG 2.1 AA**: Minimum accessibility compliance
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical flow
- **Color Independence**: Information not conveyed by color alone

### Performance Optimization
- **Core Web Vitals**: Optimize for LCP, FID, and CLS
- **Progressive Loading**: Critical content loads first
- **Image Optimization**: Next.js Image component with proper sizing
- **Bundle Splitting**: Code splitting at component and route levels
- **Caching Strategy**: Efficient caching for static and dynamic content

## Performance Considerations
- Leverage Next.js built-in optimizations (Image, Link components)
- Use dynamic imports for code splitting when appropriate
- Optimize images and assets
- Follow React performance best practices

## Accessibility
- Use semantic HTML elements
- Leverage Radix UI primitives for accessibility
- Ensure proper keyboard navigation
- Test with screen readers when possible

## Common Issues and Solutions

### Build Errors
- Check TypeScript errors first
- Verify all imports are correct
- Ensure Tailwind classes are valid

### Development Server Issues
- Clear Next.js cache: `rm -rf .next`
- Restart development server
- Check for port conflicts

## Contributing Guidelines
Please follow the patterns established in this codebase and refer to CONTRIBUTING.md for detailed contribution guidelines.