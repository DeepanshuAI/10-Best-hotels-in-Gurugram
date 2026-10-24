export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  origin: string;
  defaultOgImage: string;
  author: string;
  contactEmail: string;
  verificationAuditDate: string;
}

export function getSiteOrigin(): string {
  if (process.env.PUBLIC_SITE_URL && process.env.PUBLIC_SITE_URL.trim() !== '') {
    return process.env.PUBLIC_SITE_URL.replace(/\/+$/, '');
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL && process.env.VERCEL_PROJECT_PRODUCTION_URL.trim() !== '') {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/+$/, '')}`;
  }
  if (process.env.VERCEL_URL && process.env.VERCEL_URL.trim() !== '') {
    return `https://${process.env.VERCEL_URL.replace(/\/+$/, '')}`;
  }
  return 'https://besthotelsingurugram.com';
}

export const SITE_ORIGIN = getSiteOrigin();

export const SITE_CONFIG: SiteConfig = {
  name: 'Best Hotels in Gurugram',
  tagline: 'The Independent, Transit-Aware Accommodation Directory',
  description: 'Independent, verified directory and comparison guide for hotels in Gurugram, Haryana. Covering DLF Cyber City, Golf Course Road, Udyog Vihar, MG Road & Sohna Road with real transit times.',
  origin: SITE_ORIGIN,
  defaultOgImage: '/images/og-gurugram-hotels.png',
  author: 'Gurugram Hotel Directory Editorial Board',
  contactEmail: 'editor@besthotelsingurugram.com',
  verificationAuditDate: 'October 2026',
};

export function getCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  const origin = getSiteOrigin();
  if (!cleanPath) {
    return `${origin}/`;
  }
  return `${origin}/${cleanPath}/`;
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
