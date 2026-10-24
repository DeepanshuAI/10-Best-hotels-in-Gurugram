# Gurugram Hotel Directory: Content Guidelines & Quality Standards

**Standard:** E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) & People-First Content  
**Scope:** All Published Hotel Profiles, Category Hubs, Area Guides, and Trust Documentation  
**Version:** 1.0 (Production Standard)  

---

## 1. Editorial Mission & Guiding Principles

The Best Hotels in Gurugram Directory exists to provide **unbiased, technically accurate, transit-aware, and verified accommodation intelligence** for visitors travelling to Gurugram, Haryana. 

We do not accept payment for inclusion, numerical rankings, or positive editorial characterizations. Every published property must earn its place based on verifiable amenities, reliable location suitability, verified public reputation, and objective value for specific traveler types.

---

## 2. Core Content Standards

### A. Credibility & Factual Integrity
1. **Source Every Concrete Claim:** Property addresses, contact phone numbers, metro station proximities, official website links, and facility offerings must be corroborated against official hotel documentation or verified mapping data.
2. **Never Fabricate First-Hand Inspections:** Do not claim an editorial team member stayed overnight, slept on the bed, or dined in the restaurant unless that event was an actual, verified first-hand visit. Describe facilities accurately using confirmed specifications.
3. **Explicit Verification Dates:** Every listing displays a `lastVerified` timestamp indicating when the profile was audited against active hotel operations.
4. **Correction Mechanism:** Every listing includes a direct pathway to `/corrections/` allowing hoteliers, guests, and local operators to flag discrepancies.

### B. Transit & Location Precision (The Gurugram Standard)
1. **No Straight-Line Distances:** Radial "as-the-crow-flies" measurements are prohibited. In Gurugram, a 1 km physical distance can entail a 5 km circuitous drive via highway underpasses (e.g., Shankar Chowk, IFFCO Chowk, Rajiv Chowk).
2. **Transit Nuance Requirement:** Descriptions must explicitly clarify:
   - Walkability vs. motorized transit requirement.
   - Metro connectivity: Specify whether the station is **Delhi Metro Yellow Line** (direct to Central/South Delhi, Connaught Place) or **Gurugram Rapid Metro** (internal loop connecting Cyber City, DLF Phase 2/3, and Golf Course Road).
   - Proximity to key corporate centers: DLF Cyber City, Udyog Vihar, Golf Course Road, Candor TechSpace, Unitech Cyber Park.

### C. Tone, Readability & Style
1. **Clear, Direct, Active Voice:** Avoid breathless promotional prose ("an oasis of unbridled luxury nestled in the shimmering heart..."). Use crisp, informative language ("Located 5 minutes from Shankar Chowk, this property offers 24-hour meeting facilities, soundproofed executive rooms, and direct access to Udyog Vihar").
2. **Objective Balance:** Every hotel profile must feature balanced analysis, highlighting both **Key Strengths** ("Best For") and **Important Considerations** ("Things to Keep in Mind" — e.g., highway traffic noise, valet delays during wedding season, compact budget room dimensions).
3. **Typography & Structure:** Use scannable formatting: descriptive H2/H3 subheadings, bulleted amenity matrices, comparison tables, and highlighted key takeaway callouts.

---

## 3. Reusable Content Brief: Hotel Profile

When preparing a new hotel profile for publication, the writer/editor must gather and verify the following minimum required data schema:

```yaml
id: "unique-slug-gurugram"
officialName: "Official Property Name"
brand: "Parent Hospitality Group (e.g., The Oberoi Group, IHCL Taj, Accor, Marriott, Lemon Tree, Bloom)"
propertyType: "Luxury Hotel | Business Hotel | Smart Budget | Extended Stay | Boutique Stay"
address:
  street: "Detailed street address and plot number"
  locality: "Specific sector or commercial sub-district (e.g., DLF Phase 2, Udyog Vihar Phase V, Sector 29)"
  city: "Gurugram"
  state: "Haryana"
  postalCode: "1220XX"
  country: "India"
coordinates:
  latitude: 28.4XXXXX
  longitude: 77.0XXXXX
phone: "+91 124 XXXXXXX"
officialWebsite: "https://www.officialhotelurl.com"
officialBookingUrl: "https://www.officialhotelurl.com/reservations"
indicativePriceTier: "₹₹₹₹₹ (Luxury) | ₹₹₹₹ (Premium) | ₹₹₹ (Upper Mid-scale) | ₹₹ (Mid-scale) | ₹ (Budget)"
indicativeStartingRateINR: 6500
rateVerificationDate: "2026-10"
nearestTransit:
  metroStation: "Station Name"
  metroLine: "Rapid Metro | Yellow Line"
  distanceMinutes: "X min walk / Y min drive"
  highwayAccess: "Immediate NH-48 / Golf Course Road / Mehrauli-Gurgaon Road access"
bestFor:
  - "Target traveler profile 1 (e.g., C-suite executives working in DLF Cyber City)"
  - "Target traveler profile 2 (e.g., International travelers prioritizing resort quietude near IGI Airport)"
editorialStrengths:
  - "Distinct verified advantage 1"
  - "Distinct verified advantage 2"
considerations:
  - "Objective operational or location constraint 1"
verifiedAmenities:
  - "High-speed Wi-Fi (complimentary in business rooms)"
  - "Ergonomic work desk"
  - "24-hour business centre"
  - "Swimming pool"
  - "Fitness centre"
  - "Multiple on-site dining venues"
  - "Meeting / conference rooms"
editorialRationale: "Concise 2-3 sentence explanation of why this property meets the directory's standard."
verificationSource: "Official Hotel Portal & Public Municipal Directory"
lastVerified: "2026-10-24"
```

---

## 4. Content Quality & SEO Pre-Publishing Checklist

Before any route is set to published status, it must pass all 10 checkpoints:

- [ ] **Check 1: Single Intent Focus.** Does this page answer one specific, non-cannibalizing user query?
- [ ] **Check 2: Unique Metadata.** Are the `<title>` and `<meta name="description">` 100% unique across the site?
- [ ] **Check 3: Clean Canonical URL.** Does the canonical tag point to the absolute production URL with consistent trailing slash handling?
- [ ] **Check 4: Verified Contact Data.** Are the phone number, address, and official website link verified and live?
- [ ] **Check 5: Realistic Transit Notes.** Are walk times and transit options accurate to local road geometry?
- [ ] **Check 6: Balanced Editorial Review.** Are both pros and objective caveats included?
- [ ] **Check 7: Structured Data Validation.** Does the JSON-LD parse without syntax errors and reflect only on-page content?
- [ ] **Check 8: Accessible Markup.** Do images have descriptive alt text? Do interactive controls have keyboard accessibility and ARIA labels?
- [ ] **Check 9: Static Pre-rendering.** Is the entire page content available in the initial server-rendered HTML without requiring client-side JS to load?
- [ ] **Check 10: Freshness Timestamp.** Is the `lastVerified` date clearly visible on the page?
