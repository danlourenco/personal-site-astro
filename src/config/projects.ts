import type { ImageMetadata } from 'astro';
import momaScreenshot from '../images/projects/moma.jpg';

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
  // {
  //   id: 'animaginary',
  //   title: 'Animaginary',
  //   description: 'High performance web animation library built from the ground up with WebAssembly. Capable of 60fps animations even on lower-end devices.',
  //   href: '#',
  //   linkText: 'github.com',
  //   linkType: 'github'
  // },
  // {
  //   id: 'heliostream',
  //   title: 'HelioStream',
  //   description: 'Real-time video streaming library optimized for low-latency communication in space. Built for our ground control to spacecraft communication systems.',
  //   href: '#',
  //   linkText: 'heliostream.com',
  //   linkType: 'website'
  // }
];