# Gurugram Hotel Directory: Deployment & Production Guide

**Platform:** Vercel (Static Site Generation / SSG)  
**Framework:** Astro 5+ / TypeScript Strict  
**Origin Standard:** Centralized Environment-Aware Origin Handling  
**Compliance:** Vercel Hobby Plan Non-Commercial & Personal Use Guidelines  
**Last Updated:** October 2026  

---

## 1. Architectural & Hosting Overview

The Best Hotels in Gurugram Directory is engineered as a **100% pre-rendered static site (SSG)**. It requires zero server-side databases, zero background serverless execution, and zero paid API keys, providing:
- **Instant Global TTFB:** Content served from Vercel’s global Edge CDN network.
- **Zero Operating Costs:** Free hosting within personal non-commercial parameters.
- **Flawless Crawlability:** All 18 hotel profiles, 8 category and location hubs, 3 comprehensive guides, and trust pages are pre-compiled into static HTML files directly indexable by Googlebot without client-side rendering delays.

---

## 2. Environment Variables & Origin Configuration

Canonical URLs, OpenGraph image paths, and XML sitemaps must reflect the actual live production domain rather than hard-coded placeholders.

The application automatically resolves the site origin in `src/lib/site-config.ts` using this hierarchy:
1. `process.env.PUBLIC_SITE_URL` (Explicit custom domain or Vercel subdomain)
2. `process.env.VERCEL_PROJECT_PRODUCTION_URL` (Automatic Vercel production branch URL)
3. `process.env.VERCEL_URL` (Automatic Vercel preview/deployment URL)
4. Fallback: `https://besthotelsingurugram.com`

### Setting Up Environment Variables in Vercel:
1. In your Vercel Project Dashboard, navigate to **Settings &rarr; Environment Variables**.
2. Add:
   - **Key:** `PUBLIC_SITE_URL`
   - **Value:** `https://your-custom-domain.com` (or `https://your-project.vercel.app`)
   - **Environments:** Production, Preview, Development.
3. Redeploy your project. The XML sitemap (`/sitemap-index.xml`), `robots.txt`, and `<link rel="canonical">` tags will automatically update across all pages.

---

## 3. Step-by-Step Vercel Deployment Instructions

### Method A: Deploy via GitHub (Recommended)
1. Initialize git and commit the codebase:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Gurugram hotel directory with verified dataset and SEO architecture"
   ```
2. Push the repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/your-username/best-hotels-in-gurugram.git
   git branch -M main
   git push -u origin main
   ```
3. Log into [vercel.com](https://vercel.com) and click **"Add New... &rarr; Project"**.
4. Import the `best-hotels-in-gurugram` repository.
5. Vercel automatically detects the **Astro** framework:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build` (or `astro build`)
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click **Deploy**. Your site will build and be live worldwide in under 60 seconds.

### Method B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 4. Vercel Plan Compliance Notice

Before deploying to Vercel's free **Hobby plan**:
- Ensure the project complies with Vercel's Terms of Service regarding non-commercial personal projects.
- This directory is published as an independent, non-commercial public research directory with zero paid advertisements, affiliate tracking pixels, or monetized paywalls.
- If commercial partnerships, direct hotel advertising, or monetized booking transactions are integrated in the future, upgrade the hosting account to **Vercel Pro**.

---

## 5. Google Search Console & Search Monitoring Setup

### Step 1: Property Verification
1. Open [Google Search Console](https://search.google.com/search-console).
2. Choose **URL prefix** and input your production URL (e.g., `https://your-domain.vercel.app/`).
3. Verify ownership via the **HTML Tag** method (paste the verification meta tag into `src/components/SEOHead.astro`) or DNS TXT record.

### Step 2: Sitemap Submission
1. In Search Console, navigate to **Sitemaps** in the left menu.
2. In the "Add a new sitemap" box, input:
   ```
   sitemap-index.xml
   ```
3. Click **Submit**. Googlebot will discover the sitemap index, crawl `sitemap-0.xml`, and index all 21 static canonical routes.

### Step 3: Ongoing Search Monitoring Workflow
Set a recurring bi-weekly review checklist:
- [ ] **Pages / Index Coverage:** Confirm zero 4xx/5xx errors and verify all hotel pages are categorized as "Indexed".
- [ ] **Search Performance / Queries:** Monitor impressions and average position for high-intent queries:
  - `best hotels in gurugram`
  - `luxury hotels in gurugram`
  - `hotels near cyber city gurugram`
  - `hotels near golf course road`
  - Branded queries (e.g., `the oberoi gurgaon address`, `the leela ambience gurugram review`)
- [ ] **Core Web Vitals:** Verify all mobile and desktop URLs maintain **Good** status (LCP < 2.5s, CLS < 0.1, INP < 200ms).
- [ ] **Data Freshness Audit:** Audit 2–3 hotel profiles monthly using `/corrections/` submissions to keep room tariffs and transit notes updated.
