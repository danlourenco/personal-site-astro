// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // Update this to your actual site URL
  integrations: [mdx(), sitemap()],
  
  vite: {
    plugins: [tailwindcss()],
  },
});