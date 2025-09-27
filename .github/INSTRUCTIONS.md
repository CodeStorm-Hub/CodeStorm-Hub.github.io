# Repository Instructions for GitHub Copilot

## Project Overview
CodeStorm Hub is a vibrant community portfolio website built with modern web technologies. This is a Next.js 15 application showcasing open source projects and community work.

## Tech Stack
- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
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
- Use TypeScript for all components
- Prefer functional components with hooks
- Use Radix UI primitives when possible
- Follow the existing component patterns in the codebase
- Export components as default exports

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow the design system established in the project
- Utilize Radix Colors for consistent color schemes
- Prefer composition over customization for UI components

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

## Design System
This project uses a design system based on:
- Radix UI primitives for accessibility
- Radix Colors for consistent theming
- Tailwind CSS for utility-first styling
- Vercel design principles

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