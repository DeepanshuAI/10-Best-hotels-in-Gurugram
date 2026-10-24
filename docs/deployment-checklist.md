# Gurugram Hotel Directory — Deployment, Indexing & Monitoring Checklist

**Document Purpose:** Production Launch, Google Search Console Setup, URL Inspection, and Ongoing Search Operations  
**Production URL:** `https://10-best-hotels-in-gurugram.vercel.app/`  
**GitHub Repository:** `https://github.com/DeepanshuAI/10-Best-hotels-in-Gurugram.git`  
**Contact / Maintainer:** `raijin4551@gmail.com` / Deepanshu  
**Last Updated:** October 24, 2026  

---

## 1. Pre-Deployment Build & Verification Checklist

Before pushing any commit to `main` or triggering a Vercel production build, run the local quality assurance suite:

- [x] **Check 1: Static Route Build Validation**
  ```bash
  npm run build
  ```
  *Requirement:* All 37 static HTML pages build with 0 errors in under 10 seconds. Sitemaps (`sitemap-index.xml`, `sitemap-0.xml`) and `robots.txt` generated in `dist/`.

- [x] **Check 2: TypeScript & Astro Diagnostics**
  ```bash
  npm run check
  ```
  *Requirement:* 0 errors, 0 warnings across all 38 Astro and TypeScript source files.

- [x] **Check 3: Automated Data & File Integrity**
  ```bash
  npm test
  ```
  *Requirement:* `scripts/validate-data.mjs` verifies all 18 hotel slugs, mandatory data fields, image asset existence, required static routes, and audit documentation.

- [x] **Check 4: Canonical Origin Verification**
  *Requirement:* Ensure `PUBLIC_SITE_URL` in `src/lib/site-config.ts` points to `https://10-best-hotels-in-gurugram.vercel.app`.

- [x] **Check 5: Google Site Verification File**
  *Requirement:* Verify that `public/googlec5446dfb6f035a7e.html` exists and builds to `dist/googlec5446dfb6f035a7e.html` for root verification.

---

## 2. Vercel Production Deployment

### Deployment Steps:
1. Ensure all local changes are staged and committed:
   ```bash
   git add .
   git commit -m "fix(audit): remediate factual inconsistencies, editorial credibility, and technical SEO"
   ```
2. Push commits to GitHub `origin main`:
   ```bash
   git push origin main
   ```
3. Vercel automatically detects the commit on the `main` branch, executes `npm run build`, and deploys the static files to the global Edge CDN in approximately 30–60 seconds.

### Environment Variable Verification in Vercel:
In your [Vercel Dashboard](https://vercel.com) &rarr; Project Settings &rarr; Environment Variables:
- **Variable:** `PUBLIC_SITE_URL`
- **Value:** `https://10-best-hotels-in-gurugram.vercel.app`
- **Environments:** Production, Preview, Development

---

## 3. Google Search Console Setup & Ownership Verification

### Step 1: Add URL-Prefix Property
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** in the property dropdown.
3. Select the **URL prefix** method and enter:
   ```
   https://10-best-hotels-in-gurugram.vercel.app/
   ```
4. Click **Continue**.

### Step 2: Complete HTML File Verification
1. Search Console will check for the verification file:
   `googlec5446dfb6f035a7e.html`
2. Since this file is pre-rendered in `public/googlec5446dfb6f035a7e.html`, it is publicly accessible at:
   `https://10-best-hotels-in-gurugram.vercel.app/googlec5446dfb6f035a7e.html`
3. Click **Verify**. Search Console will confirm property ownership instantly.

---

## 4. XML Sitemap Submission

1. In Search Console, select the `https://10-best-hotels-in-gurugram.vercel.app/` property.
2. In the left navigation menu, click **Sitemaps** under *Indexing*.
3. In the "Add a new sitemap" input field, type:
   ```
   sitemap-index.xml
   ```
4. Click **Submit**.
5. Googlebot will fetch `sitemap-index.xml`, locate `sitemap-0.xml`, and queue all 36 indexable canonical URLs for crawling.
6. Verify that the sitemap status displays **Success** with 36 discovered pages.

---

## 5. URL Inspection & Live Test Workflow

For priority tier-1 landing pages, perform manual inspection in Google Search Console:

1. **Homepage:** `https://10-best-hotels-in-gurugram.vercel.app/`
2. **Category Hub:** `https://10-best-hotels-in-gurugram.vercel.app/luxury-hotels-in-gurugram/`
3. **Corridor Hub:** `https://10-best-hotels-in-gurugram.vercel.app/hotels-near-cyber-city/`
4. **Flagship Profile:** `https://10-best-hotels-in-gurugram.vercel.app/hotels/the-oberoi-gurugram/`

### Steps for each URL:
1. Paste the URL into the top Search Console search bar.
2. Click **Test Live URL**.
3. Confirm:
   - **Page Availability:** "URL is available to Google"
   - **Mobile Usability:** "Page is usable on mobile"
   - **User-Declared Canonical:** Matches the inspected URL exactly.
   - **Structured Data:** Confirms detection of `Hotel`, `BreadcrumbList`, and `WebSite` without errors.
4. Click **Request Indexing** to prioritize Googlebot crawling for high-impact hubs.

---

## 6. Discoverability Reality & Search Indexing Timeline

### Realistic Search Engine Behavior:
- **Fresh Domain Horizon:** For newly deployed projects on subdomains like `.vercel.app`, Googlebot typically initiates initial crawling within 24–72 hours of sitemap submission. Full indexing and ranking for competitive search terms (`best hotels in gurugram`, `luxury hotels in gurugram`) can take 1–3 weeks as Google assesses domain stability, page quality, and internal linking signals.
- **Checking Actual Discoverability:**
  Run the standard site search operator in Google:
  ```
  site:10-best-hotels-in-gurugram.vercel.app
  ```
  - *Interpreting Results:* If 0 results appear within the first 48 hours of initial launch, this is completely normal crawling queue behavior rather than a technical defect or blocking directive (as confirmed by our permissive `robots.txt` and clean 200 HTTP statuses).
  - *Do Not Claim False Indexing:* Never declare that a newly published domain is instantly indexed or permanently non-indexed without checking the real Search Console URL Inspection index status.

---

## 7. Ongoing Search Performance & Maintenance Cadence

### Weekly Monitoring Tasks:
- [ ] **Search Console Coverage:** Inspect **Pages** report. Verify 0 pages in "Crawled - currently not indexed" or "Discovered - currently not indexed".
- [ ] **Search Queries (Performance):** Identify queries driving impressions for Gurugram hotel keywords. Note average position trends.
- [ ] **Core Web Vitals:** Verify 100% of pages pass Largest Contentful Paint (LCP < 2.5s), Cumulative Layout Shift (CLS < 0.1), and Interaction to Next Paint (INP < 200ms).

### Monthly Data Freshness Protocol:
- [ ] **Corrections Intake:** Check `raijin4551@gmail.com` and GitHub Issues for hotelier or guest feedback on room rates, renovations, or transit updates.
- [ ] **Tariff Benchmark Sampling:** Randomly sample 4–5 properties on official booking portals to verify if seasonal price shifts warrant updating `indicativeStartingRateINR` and `rateVerificationDate`.
- [ ] **Transit & Infrastructure Updates:** Check for major highway infrastructure adjustments (e.g., Delhi-Jaipur Expressway flyover works, Rapid Metro station modifications) and update transit notes accordingly.
