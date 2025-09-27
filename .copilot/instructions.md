# GitHub Copilot Custom Instructions

## Project Context
You are working on CodeStorm Hub's portfolio website - a modern Next.js 15 application showcasing open source community projects. The codebase emphasizes clean architecture, accessibility, and performance.

## Key Development Principles

### Code Style & Architecture
- **Always use TypeScript**: Every file should be properly typed
- **Functional Components**: Prefer React functional components with hooks
- **App Router**: Use Next.js 15 App Router patterns (not Pages Router)
- **Component Composition**: Build reusable components following established patterns
- **Utility-First CSS**: Use Tailwind CSS classes, avoid custom CSS when possible

### Technology Preferences
- **UI Components**: Use Radix UI primitives for accessibility and consistency
- **Icons**: Use Lucide React icons following existing patterns
- **State Management**: Use React hooks and context when needed
- **Styling**: Tailwind CSS 4 with design tokens and Radix Colors
- **Performance**: Leverage Next.js optimizations (Image, Link, etc.)

### File and Folder Conventions
- **Components**: Place in `src/components/[category]/component-name.tsx`
- **Pages**: Use App Router in `src/app/[route]/page.tsx`
- **Utilities**: Add to `src/lib/utils.ts` or create specific utility files
- **Types**: Define in component files or separate `.types.ts` files
- **Naming**: kebab-case for files, PascalCase for components, camelCase for variables

### Quality Standards
- **Accessibility**: Always consider ARIA attributes and semantic HTML
- **Performance**: Optimize images, use proper loading strategies
- **SEO**: Include proper metadata and OpenGraph tags
- **Mobile-First**: Design responsive components from mobile up
- **Error Handling**: Include proper error boundaries and loading states

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
- **Design System**: Follow Radix UI and Vercel design principles
- **Brand**: Maintain CodeStorm Hub's visual identity and tone
- **Community Focus**: Remember this showcases open source community work
- **Performance**: Optimize for fast loading and great UX

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