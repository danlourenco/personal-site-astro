import type { ImageMetadata } from 'astro';
import momaScreenshot from '../images/projects/moma.jpg';
import blueskyGuideScreenshot from '../images/projects/bsky-guide.png';
export interface Project {
  id: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  linkType?: 'website' | 'github';
  screenshot?: ImageMetadata; // Optional imported image
}

export const projects: Project[] = [
  {
    id: 'moma',
    title: 'MoMA',
    description: 'AI-Enhanced virtual art gallery inspired by my toddler son\'s daycare artwork.',
    href: 'https://moma-boston.netlify.app',
    linkText: 'moma-boston.netlify.app',
    linkType: 'website',
    screenshot: momaScreenshot
  },
   {
    id: 'bluesky-guide',
    title: 'Bluesky Guide',
    description: 'An exploration of ATProtocol and Bluesky, exploring the API via a retro Prevue Channel interface.',
    href: 'https://bsky-guide.nuxt.dev',
    linkText: 'bsky-guide.nuxt.dev',
    linkType: 'website',
    screenshot: blueskyGuideScreenshot
  },
];