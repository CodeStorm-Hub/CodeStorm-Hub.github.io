# Contributing to CodeStorm Hub Portfolio

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Pull Request Process

1. Fork the repository and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Local Development

### Prerequisites

- Node.js 18.0 or later
- npm 8.0 or later

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io.git
   cd CodeStorm-Hub.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/             # Reusable UI components
│   ├── ui/                # Basic UI components (Button, Card, etc.)
│   └── layout/            # Layout components (Header, Footer)
└── lib/                   # Utilities and configurations
    └── utils.ts           # Utility functions
```

## Design System

This project uses a comprehensive design system based on:

- **Colors**: Radix Colors for consistent, accessible color palettes
- **Components**: Radix UI Primitives for accessible, unstyled components
- **Styling**: Tailwind CSS for utility-first styling
- **Typography**: Geist font family for modern, readable text

### Component Guidelines

- Use Radix UI primitives as the foundation for complex components
- Follow the established color tokens and spacing scale
- Ensure all components are accessible (ARIA labels, keyboard navigation)
- Use TypeScript for all components with proper prop types

## Code Style

We use ESLint and Prettier to maintain consistent code style:

- Use TypeScript for all new code
- Follow the established ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Keep components small and focused

## Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

## License

By contributing, you agree that your contributions will be licensed under the BSD 3-Clause License.

## References

This project is inspired by and follows best practices from:

- [Vercel Design Engineering](https://vercel.com/solutions/design-engineering)
- [Radix UI Design System](https://www.radix-ui.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)