import type { ImageMetadata } from 'astro';
import momaScreenshot from '../images/projects/moma.jpg';
import blueskyGuideScreenshot from '../images/projects/bsky-guide.png';
import personalSiteScreenshot from '../images/projects/personal-site.png';
import weatherScreenshot from '../images/projects/weather.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  linkType?: 'website' | 'github';
  screenshot?: ImageMetadata; // Optional imported image
  technologies?: string[]; // Optional array of tech tags
}

export const projects: Project[] = [
  {
    id: 'moma',
    title: 'MoMA',
    description: 'AI-Enhanced virtual art gallery inspired by my toddler son\'s daycare artwork.',
    href: 'https://moma-boston.netlify.app',
    linkText: 'moma-boston.netlify.app',
    linkType: 'website',
    screenshot: momaScreenshot,
    technologies: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind CSS', 'FormKit', 'OpenAI API', 'Eleven Labs']
  },
  {
    id: 'bluesky-guide',
    title: 'Bluesky Guide',
    description: 'Experimenting with ATProtocol and Bluesky APIs through a retro Prevue Channel interface. A fun fusion of nostalgia and modern tech.',
    href: 'https://bsky-guide.nuxt.dev',
    linkText: 'bsky-guide.nuxt.dev',
    linkType: 'website',
    screenshot: blueskyGuideScreenshot,
    technologies: ['Vue 3', 'Nuxt 3', 'ATProtocol', 'TypeScript', 'CSS3']
  },
  {
    id: 'retro-weather',
    title: 'Retro Weather',
    description: 'Recreating The Weather Channel\'s retro interface using modern web technologies.',
    href: 'https://b5057a0d.svelte-weather-8qu.pages.dev/',
    linkText: 'b5057a0d.svelte-weather-8qu.pages.dev',
    linkType: 'website',
    screenshot: weatherScreenshot,
    technologies: ['SvelteKit', 'Tailwind CSS v4',  'Cloudflare', 'Claude Code', 'Weather.gov API' ]
  },
   {
    id: 'personal-site-astro',
    title: 'This Here Site (How Meta!)',
    description: 'My personal website built with Astro, showcasing my projects and blog posts.',
    href: 'https://www.danlouren.co',
    linkText: 'www.danlouren.co ',
    linkType: 'website',
    screenshot: personalSiteScreenshot,
    technologies: ['Astro 5', 'TypeScript', 'Tailwind CSS v4', 'MDX', 'Playwright', 'Cloudflare', 'Claude Code']
  },
];