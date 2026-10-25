import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('--- Starting Automated Data & SEO Quality Validation ---');

let errors = [];
let warnings = [];

// 1. Validate Hotels Data
const hotelsFilePath = path.join(rootDir, 'src/data/hotels.ts');
if (!fs.existsSync(hotelsFilePath)) {
  errors.push(`Hotels file does not exist: ${hotelsFilePath}`);
}

const hotelsFileContent = fs.readFileSync(hotelsFilePath, 'utf-8');

// Basic parse tests on hotels.ts
const slugMatches = [...hotelsFileContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
console.log(`Checking ${slugMatches.length} hotel records...`);

const slugSet = new Set();
for (const slug of slugMatches) {
  if (slugSet.has(slug)) {
    errors.push(`Duplicate hotel slug detected: "${slug}"`);
  }
  slugSet.add(slug);

  if (!/^[a-z0-9-]+$/.test(slug)) {
    errors.push(`Invalid slug format (must be lowercase alphanumeric + hyphens): "${slug}"`);
  }
}

// Check required fields presence
const requiredFields = [
  'id', 'slug', 'officialName', 'brand', 'category', 'priceTier',
  'indicativeStartingRateINR', 'rateVerificationDate', 'address', 'coordinates',
  'phone', 'officialWebsite', 'officialBookingUrl', 'heroImage', 'summary',
  'inDepthDescription', 'bestFor', 'keyStrengths', 'considerations',
  'verifiedAmenities', 'businessFacilities', 'diningVenues', 'transit',
  'ratingBenchmark', 'editorialRationale', 'verificationSource', 'lastVerifiedDate'
];

for (const field of requiredFields) {
  const count = (hotelsFileContent.match(new RegExp(`${field}:`, 'g')) || []).length;
  if (count < slugMatches.length) {
    errors.push(`Field "${field}" appears only ${count} times, expected ${slugMatches.length}`);
  }
}

// 2. Validate Image Assets Exist
const imageSrcMatches = [...hotelsFileContent.matchAll(/heroImage:\s*\{[^}]*src:\s*['"]([^'"]+)['"]/gs)].map((m) => m[1]);
for (const imgSrc of imageSrcMatches) {
  const localRelative = imgSrc.replace(/^\//, '');
  const fullImgPath = path.join(rootDir, 'public', localRelative);
  if (!fs.existsSync(fullImgPath)) {
    errors.push(`Missing referenced hotel image asset: "${imgSrc}" (${fullImgPath})`);
  }
}

// 3. Validate Categories Data
const catFilePath = path.join(rootDir, 'src/data/categories.ts');
if (!fs.existsSync(catFilePath)) {
  errors.push(`Categories file not found: ${catFilePath}`);
}

// 4. Validate Static Pages Existence
const expectedStaticPages = [
  'src/pages/index.astro',
  'src/pages/luxury-hotels-in-gurugram/index.astro',
  'src/pages/business-hotels-in-gurugram/index.astro',
  'src/pages/budget-hotels-in-gurugram/index.astro',
  'src/pages/hotels-near-cyber-city/index.astro',
  'src/pages/hotels-near-udyog-vihar/index.astro',
  'src/pages/hotels-near-golf-course-road/index.astro',
  'src/pages/hotels-near-mg-road-gurugram/index.astro',
  'src/pages/hotels-near-sohna-road/index.astro',
  'src/pages/hotels/[slug].astro',
  'src/pages/guides/where-to-stay-in-gurugram/index.astro',
  'src/pages/guides/hotels-for-business-travel-in-gurugram/index.astro',
  'src/pages/guides/choosing-a-budget-hotel-in-gurugram/index.astro',
  'src/pages/how-we-choose-hotels/index.astro',
  'src/pages/about/index.astro',
  'src/pages/contact/index.astro',
  'src/pages/corrections/index.astro',
  'src/pages/editorial-policy/index.astro',
  'src/pages/privacy-policy/index.astro',
  'src/pages/compare/index.astro',
  'src/pages/404.astro',
  'src/pages/robots.txt.ts',
];

for (const pagePath of expectedStaticPages) {
  const fullPath = path.join(rootDir, pagePath);
  if (!fs.existsSync(fullPath)) {
    errors.push(`Expected page missing: ${pagePath}`);
  }
}

// 5. Validate Documentation Existence
const expectedDocs = [
  'docs/seo-research.md',
  'docs/topical-map.md',
  'docs/content-guidelines.md',
  'docs/backlink-strategy.md',
  'docs/factual-audit.md',
  'docs/seo-technical-audit.md',
  'docs/deployment-checklist.md',
];

for (const docPath of expectedDocs) {
  const fullDocPath = path.join(rootDir, docPath);
  if (!fs.existsSync(fullDocPath)) {
    errors.push(`Expected documentation missing: ${docPath}`);
  }
}

// 6. Validate SEO & Transit Invariants
const seoFilePath = path.join(rootDir, 'src/lib/seo.ts');
const seoContent = fs.readFileSync(seoFilePath, 'utf-8');
if (seoContent.includes("aggregateRating: {")) {
  errors.push('Disallowed AggregateRating detected in generateHotelSchema (violates Google Review Snippet guidelines for third-party reviews).');
}

const gscVerificationPath = path.join(rootDir, 'public/googlec5446dfb6f035a7e.html');
if (!fs.existsSync(gscVerificationPath)) {
  errors.push('Missing Google Search Console verification file in public root.');
}

// Output summary
console.log(`\nValidation Summary:`);
console.log(`- Verified Unique Hotel Slugs: ${slugSet.size}`);
console.log(`- Total Checked Pages: ${expectedStaticPages.length}`);
console.log(`- Total Documentation Files: ${expectedDocs.length}`);

if (warnings.length > 0) {
  console.log(`\nWarnings (${warnings.length}):`);
  warnings.forEach((w) => console.log(` [WARN] ${w}`));
}

if (errors.length > 0) {
  console.error(`\nErrors Found (${errors.length}):`);
  errors.forEach((e) => console.error(` [ERROR] ${e}`));
  process.exit(1);
} else {
  console.log('\nSUCCESS: All data, schema, image, and page integrity checks passed with 0 errors!\n');
}
