# CodeStorm Hub - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.13-38B2AC)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix%20UI-Latest-8B5CF6)](https://www.radix-ui.com/)

CodeStorm Hub is a vibrant community of open source enthusiasts, researchers, and creators. We collaborate on powerful open-source solutions that make a difference.

This repository contains the source code for our official portfolio website, built with modern web technologies and following industry best practices.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by Vercel's design principles
- **Responsive Layout**: Fully responsive design that works on all devices
- **Accessibility First**: Built with accessibility in mind using Radix UI components
- **Fast Performance**: Optimized for speed with Next.js 15 and static export
- **Type Safety**: Full TypeScript support for better development experience
- **SEO Optimized**: Proper meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) by Vercel
- **Deployment**: GitHub Pages (static export)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── layout/            # Layout components
│   │   ├── navigation.tsx # Main navigation
│   │   └── footer.tsx     # Footer component
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Hero section
│   │   ├── projects.tsx   # Projects showcase
│   │   ├── team.tsx       # Team section
│   │   └── contact.tsx    # Contact form
│   └── ui/                # Reusable UI components
│       ├── button.tsx     # Button component
│       ├── card.tsx       # Card component
│       ├── input.tsx      # Input component
│       └── textarea.tsx   # Textarea component
├── lib/                   # Utility functions
│   └── utils.ts           # Common utilities
└── styles/                # Global styles
    └── globals.css        # Base styles and CSS variables
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

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

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

The website follows a consistent design system based on:

- **Colors**: Semantic color system with CSS custom properties for light/dark mode support
- **Typography**: Geist font family for clean, modern typography
- **Spacing**: Consistent spacing scale based on Tailwind CSS
- **Components**: Reusable components built with Radix UI primitives
- **Responsive Design**: Mobile-first responsive design approach

## 🚢 Deployment

The website is automatically deployed to GitHub Pages using Next.js static export:

1. The `next.config.js` is configured for static export
2. GitHub Actions builds and deploys the site on every push to main
3. The site is available at `https://codestorm-hub.github.io`

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test them thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and patterns
- Write meaningful commit messages
- Test your changes across different screen sizes
- Ensure accessibility standards are maintained
- Update documentation as needed

## 📄 License

This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [https://codestorm-hub.github.io](https://codestorm-hub.github.io)
- **GitHub Organization**: [https://github.com/CodeStorm-Hub](https://github.com/CodeStorm-Hub)
- **Issues**: [https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io/issues](https://github.com/CodeStorm-Hub/CodeStorm-Hub.github.io/issues)

## 🙏 Acknowledgments

- Design inspiration from [Vercel](https://vercel.com/design)
- Component primitives by [Radix UI](https://www.radix-ui.com/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Vercel (Geist)](https://vercel.com/font)

---

Built with ❤️ by the CodeStorm Hub community
