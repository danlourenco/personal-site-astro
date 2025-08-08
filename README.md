# Dan Lourenço's Personal Website

This is Dan Lourenço's personal portfolio website, built on the "Spotlight" template originally from [Tailwind Plus](https://tailwindcss.com/plus). The site has been migrated from Next.js to [Astro](https://astro.build) and customized with Dan's content, work history, and personal branding.

## Tech Stack

- **[Astro 5.x](https://astro.build)** - Modern static site generator with content collections
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe development
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first CSS framework
- **[MDX](https://mdxjs.com)** - Markdown with React components for blog posts
- **Content Collections** - Type-safe content management

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser to view the website.

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run astro    # Run Astro CLI commands
```

## Project Structure

```
/
├── public/           # Static assets (images, icons, etc.)
├── src/
│   ├── components/   # Reusable Astro components
│   ├── config/       # Site configuration and metadata
│   ├── content/      # Content collections (blog articles)
│   ├── images/       # Optimized images and assets
│   ├── layouts/      # Page layout templates
│   ├── pages/        # File-based routing
│   └── styles/       # Global CSS and styling
├── astro.config.mjs  # Astro configuration
└── CLAUDE.md         # Development guidance for Claude Code
```

## Features

- 📝 **Content Collections** - Type-safe blog with MDX support
- 🎨 **Dark/Light Theme** - System preference detection with FOUC prevention
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🖼️ **Photo Gallery** - Configurable image gallery with rotation effects
- 🔗 **Social Media Integration** - Reusable social media components
- 📊 **RSS Feed** - Automatically generated at `/rss.xml`
- ⚡ **Performance** - Optimized images and fast loading times

## Content Management

Articles are stored in `src/content/articles/` as MDX files with frontmatter:

```yaml
---
title: "Article Title"
description: "Article description"
author: "Dan Lourenço"
date: "2024-01-01"
heroImage: "../../assets/image.jpg"
---
```

The site configuration is centralized in `src/config/site.ts` for easy customization.

## Learn More

- [Astro Documentation](https://docs.astro.build) - Learn about Astro's features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [MDX](https://mdxjs.com) - Markdown with components
- [TypeScript](https://www.typescriptlang.org/docs) - JavaScript with static types

## Original Template

This site is based on the "Spotlight" template from [Tailwind Plus](https://tailwindcss.com/plus), migrated from Next.js to Astro and customized for personal use.
