import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://besthotelsingurugram.com'));

export default defineConfig({
  site,
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/drafts/'),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date('2026-10-24'),
    }),
  ],
});
