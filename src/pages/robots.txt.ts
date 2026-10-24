import type { APIRoute } from 'astro';
import { getSiteOrigin } from '../lib/site-config';

export const GET: APIRoute = () => {
  const origin = getSiteOrigin();

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /404/
Disallow: /drafts/

# XML Sitemaps
Sitemap: ${origin}/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
