# Best Hotels in Gurugram: Production-Grade SEO Hotel Directory

A modern, fast, SEO-first, transit-aware local accommodation directory for **Gurugram (Gurgaon), Haryana, India**.

Built with **Astro**, **TypeScript**, and **Vanilla CSS Design Tokens**, pre-rendering 100% static HTML for instant performance (Core Web Vitals LCP < 1.5s, CLS = 0.0) and optimal search engine indexability.

---

## 🚀 Key Architectural Features

- **Static Site Generation (SSG):** All 18 verified hotel profiles, 8 category and location hubs, and 3 comprehensive area guides are generated at build time.
- **Transit-Aware Local SEO:** Addresses the "Gurugram U-Turn Reality" by replacing deceptive straight-line distances with verified driving minutes, highway access points (Shankar Chowk, IFFCO Chowk, Rajiv Chowk), and pedestrian walkability to Delhi Metro Yellow Line & Gurugram Rapid Metro stations.
- **People-First Curation:** 100% independent. No paid placements, sponsored rankings, or artificial review score inflation. Every property listing includes balanced editorial strengths and objective caveats.
- **Deep Schema.org Structured Data:** Valid JSON-LD implementations for `WebSite`, `ItemList`, `Hotel` (LodgingBusiness), `BreadcrumbList`, and `FAQPage`.
- **Zero-Dependency Vector Visuals:** High-performance architectural SVG representations for each property, delivering crisp 4K visual assets with zero network latency or external CDN bottlenecks.
- **Interactive, Accessible Discovery:** Keyboard-navigable, accessible client-side search, category filter, district filter, and price/rating sorting operating over pre-rendered HTML without generating crawl traps.

---

## 📁 Project Structure

```
├── docs/
│   ├── seo-research.md          # Competitor audit, queries, content gaps
│   ├── topical-map.md           # Page-to-keyword matrix & cannibalization prevention
│   ├── content-guidelines.md    # Editorial standards, content brief, quality checklist
│   ├── backlink-strategy.md     # White-hat outreach plan & citation assets
│   └── deployment-guide.md      # Vercel setup, environment origin, GSC workflow
├── public/
│   ├── favicon.svg              # SVG website favicon
│   └── images/hotels/           # High-resolution hotel visual representations
├── scripts/
│   ├── generate-hotel-svgs.mjs  # SVG asset generation script
│   └── validate-data.mjs        # Automated data, schema, and page integrity test
├── src/
│   ├── components/
│   │   ├── Breadcrumbs.astro    # Accessible breadcrumb trail
│   │   ├── FaqAccordion.astro   # Native HTML5 details/summary FAQ component
│   │   ├── Footer.astro         # Trust-first footer with disclosures
│   │   ├── Header.astro         # Responsive header & mobile menu drawer
│   │   ├── HotelCard.astro      # Scannable hotel card with verified facts
│   │   ├── HotelDirectory.astro # Interactive search & reactive filters
│   │   ├── RatingBadge.astro    # Verified public review benchmark indicator
│   │   └── SEOHead.astro        # Canonical URLs, OpenGraph, Twitter, JSON-LD
│   ├── data/
│   │   ├── categories.ts        # Category & corridor hub metadata
│   │   ├── faqs.ts              # Frequently asked questions dataset
│   │   ├── guides.ts            # Long-form editorial guides dataset
│   │   ├── hotels.ts            # Master dataset of 18 verified Gurugram hotels
│   │   └── types.ts             # Strict TypeScript interfaces & schemas
│   ├── layouts/
│   │   └── BaseLayout.astro     # Master layout with skip-links
│   ├── lib/
│   │   ├── seo.ts               # Schema.org JSON-LD generators
│   │   └── site-config.ts       # Origin resolution & formatters
│   ├── pages/
│   │   ├── index.astro          # Homepage directory hub
│   │   ├── 404.astro            # Custom 404 not-found page (noindex)
│   │   ├── robots.txt.ts        # Dynamic robots.txt endpoint
│   │   ├── about/index.astro
│   │   ├── contact/index.astro
│   │   ├── corrections/index.astro
│   │   ├── editorial-policy/index.astro
│   │   ├── how-we-choose-hotels/index.astro
│   │   ├── privacy-policy/index.astro
│   │   ├── luxury-hotels-in-gurugram/index.astro
│   │   ├── business-hotels-in-gurugram/index.astro
│   │   ├── budget-hotels-in-gurugram/index.astro
│   │   ├── hotels-near-cyber-city/index.astro
│   │   ├── hotels-near-golf-course-road/index.astro
│   │   ├── hotels-near-mg-road-gurugram/index.astro
│   │   ├── hotels-near-sohna-road/index.astro
│   │   ├── hotels-near-udyog-vihar/index.astro
│   │   ├── hotels/[slug].astro  # Individual hotel profile template
│   │   └── guides/
│   │       ├── where-to-stay-in-gurugram/index.astro
│   │       ├── hotels-for-business-travel-in-gurugram/index.astro
│   │       └── choosing-a-budget-hotel-in-gurugram/index.astro
│   └── styles/
│       └── global.css           # Design tokens, typography, dark/light palette
├── astro.config.mjs             # Static output, trailingSlash: always, sitemap
├── package.json
└── tsconfig.json                # TypeScript strict configuration
```

---

## 🛠️ Development & Build Commands

```bash
# Install dependencies
npm install

# Run automated data integrity & schema validation tests
npm test

# Run TypeScript & Astro diagnostic check
npm run check

# Start local development server (http://localhost:4321)
npm run dev

# Build production static bundle (dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Production Origin & Vercel Deployment

Centralize your production origin by configuring the `PUBLIC_SITE_URL` environment variable in Vercel:

```env
PUBLIC_SITE_URL=https://your-custom-domain.com
```

If left unconfigured, the directory automatically detects `VERCEL_PROJECT_PRODUCTION_URL` or `VERCEL_URL`.

For full deployment and Search Console instructions, see [docs/deployment-guide.md](docs/deployment-guide.md).
