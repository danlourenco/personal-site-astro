# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Spotlight", a personal portfolio/blog site template migrated from Next.js to Astro 5.x, built with TypeScript and Tailwind CSS v4. Originally a commercial template from Tailwind Plus, now converted to modern Astro architecture:

- Personal portfolio with projects, articles, and speaking pages
- Content collections-powered blog with MDX support and syntax highlighting
- Dark/light theme support with system preference detection
- RSS feed generation using @astrojs/rss
- Modern responsive design with Astro components

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run Astro CLI commands
npm run astro
```

## Environment Setup

Update `astro.config.mjs` with your site URL:
```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  // ... other config
});
```

## Architecture

### Core Structure
- **File-based Routing**: Uses Astro's file-based routing in `src/pages/`
- **Content Collections**: Articles managed via content collections API in `src/content/articles/`
- **MDX Integration**: Full MDX support with `@astrojs/mdx` integration
- **Theme System**: Astro-compatible dark/light theme with system preference detection
- **Styling**: Tailwind CSS v4 integrated via Vite plugin

### Key Components
- `BaseLayout.astro`: Main site layout with header/footer and background styling
- `ArticleLayout.astro`: Template for article pages with metadata display
- `Container.astro`: Responsive container component used throughout
- Header/Footer components converted to `.astro` format

### Content Management
- **Content Collections**: Articles stored in `src/content/articles/` as `.mdx` files
- **Schema Validation**: Frontmatter validated via `src/content.config.ts` schema
- **Dynamic Routing**: `src/pages/articles/[...slug].astro` handles article rendering
- **Collection API**: Use `getCollection('articles')` to query all articles
- **RSS Feed**: Generated at `/rss.xml` using `@astrojs/rss`

### Content Schema
Articles use this frontmatter structure:
```yaml
---
title: "Article Title"
description: "Article description"
author: "Author Name"
date: "2023-01-01"
heroImage: "../../assets/image.jpg" # Optional
---
```

### Styling Conventions
- Tailwind CSS v4 with Vite plugin integration
- Prettier configured with Tailwind plugin for class sorting
- Dark mode uses `class` strategy with proper contrast ratios
- Syntax highlighting via `@mapbox/rehype-prism`

### Key Files
- `astro.config.mjs`: Main Astro configuration
- `src/content.config.ts`: Content collections schema definition
- `src/pages/articles/[...slug].astro`: Dynamic article routing
- `src/layouts/`: Astro layout components
- `src/components/`: Reusable Astro components

## TypeScript Configuration
- Strict mode enabled with `strictNullChecks: true`
- `allowJs: true` for content collections
- Path aliases: `@/*` maps to `./src/*`
- Astro global types enabled
- Content collections provide full type safety