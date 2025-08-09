# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Dan Lourenço's personal portfolio website, built on the "Spotlight" template migrated from Next.js to Astro 5.x. Built with TypeScript and Tailwind CSS v4, originally a commercial template from Tailwind Plus, now converted to modern Astro architecture and customized for Dan's content:

- Personal portfolio with projects, articles, and speaking pages
- Content collections-powered blog with MDX support and syntax highlighting
- Dark/light theme support with system preference detection and FOUC prevention
- RSS feed generation using @astrojs/rss
- Modern responsive design with Astro components
- Site configuration system for easy content management
- Configurable photo gallery component with rotation effects

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

## Current Site Configuration

The site is configured for Dan Lourenço's domain:
- **Site URL**: https://www.danlouren.co (configured in `astro.config.mjs`)
- **Site Config**: Centralized configuration in `src/config/site.ts` with author info, social links, and metadata
- **Content**: Personalized for Dan's consulting work at Slalom and development background

## Architecture

### Core Structure
- **File-based Routing**: Uses Astro's file-based routing in `src/pages/`
- **Content Collections**: Articles managed via content collections API in `src/content/articles/`
- **MDX Integration**: Full MDX support with `@astrojs/mdx` integration
- **Theme System**: Astro-compatible dark/light theme with system preference detection
- **Styling**: Tailwind CSS v4 integrated via Vite plugin

### Key Components
- `BaseLayout.astro`: Main site layout with header/footer, background styling, and FOUC prevention
- `ArticleLayout.astro`: Template for article pages with metadata display
- `Container.astro`: Responsive container component used throughout
- `PhotoGallery.astro`: Configurable photo gallery with rotation effects and image ordering
- `SocialMediaIcons.astro` / `SocialMediaList.astro`: Reusable social media components
- `ThemeToggle.astro`: Dark/light mode toggle with system preference detection
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
- `astro.config.mjs`: Main Astro configuration with site URL and integrations
- `src/config/site.ts`: Centralized site configuration with author info and metadata
- `src/content.config.ts`: Content collections schema definition
- `src/pages/articles/[...slug].astro`: Dynamic article routing
- `src/layouts/`: Astro layout components
- `src/components/`: Reusable Astro components including photo gallery and social media
- `src/styles/global.css`: Global styles with custom scrollbar and dark mode support

## Recent Improvements

Based on recent commits, the following enhancements have been made:

### Theme System Enhancements
- **FOUC Prevention**: Theme is initialized immediately in `<head>` to prevent flash of unstyled content
- **View Transitions Support**: Theme toggle works properly with Astro's client-side routing
- **System Preference Detection**: Respects user's OS dark mode preference

### Component Modularity
- **PhotoGallery Component**: Made configurable with props for custom image ordering and rotation
- **Social Media Components**: Extracted About page social media section into reusable components
- **Page Components**: Refactored index page into modular, reusable components

### Content Personalization
- **Author Content**: Ported Dan Lourenço's personal content and work history
- **Branding Updates**: Updated with crisp logos and improved image quality
- **Work History**: Reflects current Slalom consulting role
- **Blog Content**: Added Dan's blog posts and updated site branding

## Commit Message Convention

**IMPORTANT**: Use [Conventional Commits](https://www.conventionalcommits.org/) format for all commits:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Examples:
```
feat(navigation): add mobile navigation menu
fix(safari): resolve portrait image flash during view transitions
docs(readme): update installation instructions
style(header): improve code formatting and spacing
```

## TypeScript Configuration
- Strict mode enabled with `strictNullChecks: true`
- `allowJs: true` for content collections
- Path aliases: `@/*` maps to `./src/*`
- Astro global types enabled
- Content collections provide full type safety