---
title: "Getting Started with Next.js 15 and Radix UI: A Modern Web Development Stack"
description: "Learn how to build accessible, performant web applications using Next.js 15 and Radix UI - the stack powering CodeStorm Hub."
author: "Development Team"
date: "2025-10-13"
category: "Technical"
tags: ["nextjs", "radix-ui", "tutorial", "react", "web-development", "accessibility"]
featured: false
published: true
---

# Getting Started with Next.js 15 and Radix UI

At CodeStorm Hub, we're always exploring modern technologies that help us build better applications. For our portfolio website, we chose Next.js 15 and Radix UI - a powerful combination that delivers excellent performance, developer experience, and accessibility.

In this guide, we'll walk you through why we chose this stack and how to get started with it.

## Why Next.js 15?

Next.js has become the go-to framework for React applications, and version 15 brings significant improvements:

### 1. App Router (Stable)
The App Router provides a new way to build applications with:
- Server Components by default for better performance
- Improved routing with layouts and templates
- Built-in loading and error states
- Streaming and Suspense support

### 2. Turbopack
Next.js 15 includes Turbopack, a new bundler that's:
- Significantly faster than Webpack
- Optimized for both development and production
- Compatible with the existing Next.js ecosystem

### 3. Enhanced Performance
- Improved image optimization
- Better font loading strategies
- Automatic static optimization
- Enhanced caching mechanisms

### 4. Server Actions
Built-in support for server mutations without API routes:
```typescript
async function submitForm(formData: FormData) {
  'use server'
  // Handle form submission
}
```

## Why Radix UI?

Radix UI is a low-level UI component library that provides:

### Unstyled Components
Components come without styling, giving you complete control over the design while maintaining excellent functionality and accessibility.

### Accessibility Built-In
Every component follows WCAG guidelines and includes:
- Proper ARIA attributes
- Keyboard navigation
- Screen reader support
- Focus management

### Composability
Build complex components by composing primitives:
```tsx
<Dialog.Root>
  <Dialog.Trigger />
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title />
      <Dialog.Description />
      <Dialog.Close />
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

### TypeScript Support
Full TypeScript support with excellent type definitions.

## Setting Up Your Project

Let's create a new project with Next.js 15 and Radix UI:

### Step 1: Create a Next.js Application

```bash
npx create-next-app@latest my-app
```

Select these options:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- App Router: Yes
- Import alias: Yes (@/*)

### Step 2: Install Radix UI

Install the Radix UI components you need:

```bash
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-navigation-menu
npm install @radix-ui/react-toast
```

### Step 3: Set Up Tailwind CSS

Configure Tailwind for optimal styling:

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}
export default config
```

## Building Components with Radix UI

Let's build a reusable dialog component:

### Dialog Component

```tsx
// components/ui/dialog.tsx
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'

export function Dialog({ children, ...props }: DialogPrimitive.DialogProps) {
  return (
    <DialogPrimitive.Root {...props}>
      {children}
    </DialogPrimitive.Root>
  )
}

export function DialogTrigger({ className, ...props }: DialogPrimitive.DialogTriggerProps) {
  return (
    <DialogPrimitive.Trigger
      className={cn(
        'inline-flex items-center justify-center rounded-md',
        'px-4 py-2 text-sm font-medium',
        'bg-primary text-primary-foreground',
        'hover:bg-primary/90',
        className
      )}
      {...props}
    />
  )
}

export function DialogContent({ className, children, ...props }: DialogPrimitive.DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <DialogPrimitive.Content
        className={cn(
          'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
          'w-full max-w-lg rounded-lg bg-background p-6',
          'shadow-lg border border-border',
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}
```

### Using the Dialog

```tsx
// app/page.tsx
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'

export default function Home() {
  return (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <h2 className="text-2xl font-bold">Welcome</h2>
        <p>This is an accessible dialog built with Radix UI</p>
      </DialogContent>
    </Dialog>
  )
}
```

## Best Practices

### 1. Server Components First
Use Server Components by default and only add 'use client' when needed:

```tsx
// Server Component (default)
export default async function Page() {
  const data = await fetchData()
  return <div>{data}</div>
}

// Client Component (when needed)
'use client'
export default function InteractiveComponent() {
  const [state, setState] = useState()
  return <button onClick={() => setState(...)}>Click</button>
}
```

### 2. Optimize Images

Always use the Next.js Image component:

```tsx
import Image from 'next/image'

export function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority
      quality={90}
    />
  )
}
```

### 3. Implement Proper Loading States

Use Suspense and loading.tsx for better UX:

```tsx
// app/posts/loading.tsx
export default function Loading() {
  return <div>Loading posts...</div>
}

// app/posts/page.tsx
import { Suspense } from 'react'

export default function PostsPage() {
  return (
    <Suspense fallback={<PostsSkeleton />}>
      <Posts />
    </Suspense>
  )
}
```

### 4. Accessibility Checkers

Add accessibility testing to your development workflow:

```tsx
// Always provide meaningful alt text
<Image src="/logo.png" alt="CodeStorm Hub logo" />

// Use semantic HTML
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

// Ensure proper focus management
<button aria-label="Close dialog" onClick={closeDialog}>
  ×
</button>
```

## Performance Optimization Tips

### 1. Dynamic Imports

Split large components:

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable SSR for this component if needed
})
```

### 2. Metadata API

Optimize SEO with the Metadata API:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page',
  description: 'Page description',
  openGraph: {
    title: 'My Page',
    description: 'Page description',
    images: ['/og-image.jpg'],
  },
}
```

### 3. Font Optimization

Use next/font for optimal font loading:

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

## Common Patterns

### Form Handling with Server Actions

```tsx
async function createPost(formData: FormData) {
  'use server'
  
  const title = formData.get('title')
  const content = formData.get('content')
  
  // Save to database
  await db.posts.create({ title, content })
  
  revalidatePath('/posts')
  redirect('/posts')
}

export function NewPostForm() {
  return (
    <form action={createPost}>
      <input name="title" required />
      <textarea name="content" required />
      <button type="submit">Create Post</button>
    </form>
  )
}
```

### Data Fetching

```tsx
// Server Component with async/await
export default async function PostsPage() {
  const posts = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 } // Cache for 1 hour
  }).then(res => res.json())
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
```

## Deployment

Deploy to Vercel for the best Next.js experience:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the Vercel GitHub integration for automatic deployments on push.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Radix UI Documentation](https://www.radix-ui.com)
- [Next.js App Router Guide](https://nextjs.org/docs/app)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)

## Conclusion

Next.js 15 and Radix UI provide a powerful foundation for building modern web applications. The combination offers:

- Excellent performance out of the box
- Built-in accessibility
- Great developer experience
- Production-ready features
- Active communities and documentation

At CodeStorm Hub, this stack has enabled us to build a fast, accessible, and maintainable website. We encourage you to explore these technologies and see how they can improve your projects.

---

*Have questions about Next.js or Radix UI? Join the discussion on our [GitHub repository](https://github.com/CodeStorm-Hub) or check out our other [technical articles](/blog).*
