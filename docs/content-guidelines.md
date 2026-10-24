# Gurugram Hotel Directory: Content Guidelines & Quality Standards

**Standard:** E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) & People-First Content  
**Scope:** All Published Hotel Profiles, Category Hubs, Area Guides, and Trust Documentation  
**Version:** 2.0 (Post-Audit Remediation Standard)  
**Publisher:** Deepanshu (Independent Directory Curator & Technical Maintainer)  
**Production Origin:** `https://10-best-hotels-in-gurugram.vercel.app`  

---

## 1. Editorial Mission & Publisher Identity

The Best Hotels in Gurugram Directory is an **independent, transit-aware, non-commercial local accommodation resource** maintained by a single independent researcher and software developer (Deepanshu) based in the National Capital Region (NCR).

Our objective is to provide travelers with:
- **Verified property facts** (official addresses, confirmed room counts, banquet hall capacities, direct phone lines, and official booking portals).
- **Realistic transit intelligence** reflecting actual Gurugram highway underpasses, U-turns, and metro line connections.
- **Transparent review benchmarks** and seasonal price conditions without deceptive claims of proprietary audits or paid sponsorships.

---

## 2. Prohibited Claims & Editorial Truthfulness

To preserve unwavering credibility and comply with Google's search quality evaluator guidelines:

1. **No Fictional Personas or Desks:**
   - Prohibited: Referring to "our editorial board", "a team of hospitality inspectors", or "field researchers".
   - Required: Acknowledge the single-curator model honestly: *"Researched and curated independently by Deepanshu"*.

2. **No False Audit or Verification Assertions:**
   - Prohibited phrases: `"100% Verified"`, `"independently audited"`, `"physical audit"`, `"on-site inspection team"`.
   - Permitted phrases: `"Editorially Researched"`, `"Specifications Verified"`, `"Verified via Official Channels"`.
   - Rule: Never claim an on-site stay, mattress test, or restaurant inspection unless an actual first-hand visit was conducted and documented.

3. **No Commercial or Placement Deception:**
   - Prohibited: `"Zero Paid Placements"` when used as marketing hype.
   - Permitted: Transparent non-commercial disclosure: *"This directory does not sell listings, featured placements, or ranking positions. All properties are curated based on public specifications and location value."*

4. **No Self-Serving Review Schema:**
   - Prohibited: Labeling imported ratings as `"Google Public Verified Reviews"` or generating `AggregateRating` / `Review` structured data in JSON-LD for third-party platforms.
   - Required: Display as `"Google Maps Benchmark"`, state the observation date (`October 2026`), and include the standard disclaimer: *"Third-party rating benchmark recorded for traveler context. Not collected, verified, or certified by this directory."*

---

## 3. Transit & Location Precision (The Gurugram Standard)

Gurugram's urban layout presents severe pedestrian obstacles due to the NH-48 expressway, grade-separated flyovers, and arterial service lanes. Content writers and contributors must follow these strict transit rules:

1. **No Radial Distances:** Never calculate straight-line distances. A property 500 metres across NH-48 may require a 4.5 km motorized circuit via Shankar Chowk or IFFCO Chowk.
2. **Walk vs. Drive Thresholds:**
   - **Walkable (< 1.5 km with safe footpath access):** Specify walking time in minutes (e.g., *"4 min walk to Millennium City Centre Metro"*).
   - **Non-Walkable (> 1.5 km or across expressways):** Set `walkingTimeToMetroMin: null` and specify driving time via cab/auto (e.g., *"16 min drive to Millennium City Centre Metro"* for Radisson Sohna Road; *"45 min drive"* for ITC Grand Bharat).
3. **Metro Line Differentiation:** Always explicitly identify the metro network:
   - **Delhi Metro Yellow Line:** Direct rapid transit to South/Central Delhi (Connaught Place, New Delhi Railway Station). Terminates at Millennium City Centre Gurugram.
   - **Gurugram Rapid Metro:** Elevated loop connecting Cyber City, DLF Phase 2/3, Sector 42/43, and Sector 55/56.
4. **Airport Transit Clarity:** State drive time to Indira Gandhi International Airport Terminal 3 (DEL T3) under normal traffic conditions, and advise travelers regarding peak morning/evening highway congestion.

---

## 4. Reusable Content Brief: Hotel Profile Schema

Every property record published in `src/data/hotels.ts` must provide the following verified attributes:

```yaml
id: "unique-slug-gurugram"
slug: "unique-slug-gurugram"
officialName: "Official Property Name"
brand: "Parent Hospitality Brand"
category: "luxury | business | budget | resort"
priceTier: "₹₹₹₹₹ | ₹₹₹₹ | ₹₹₹ | ₹₹ | ₹"
indicativeStartingRateINR: 6500
rateVerificationDate: "October 2026"
pricingConditions: "Indicative starting rate for standard room excluding taxes, recorded from official brand direct booking portal in October 2026. Rates vary seasonally."
address:
  street: "Physical street and plot number"
  locality: "Specific sector or commercial enclave"
  subDistrict: "Neighborhood or corridor (e.g., DLF Cyber City)"
  city: "Gurugram"
  state: "Haryana"
  postalCode: "1220XX"
  country: "India"
coordinates:
  latitude: 28.XXXXXX
  longitude: 77.XXXXXX
phone: "+91 124 XXXXXXX"
officialWebsite: "https://www.officialhotelwebsite.com"
officialBookingUrl: "https://www.officialhotelwebsite.com/booking"
heroImage:
  src: "/images/hotels/slug.webp"
  alt: "Descriptive alt text of property exterior or key amenity"
  caption: "Official property facade and key architectural highlight"
summary: "Single-sentence executive summary emphasizing location and core target profile"
inDepthDescription: "2-3 paragraphs detailing architecture, room standards, business capabilities, and dining venues"
bestFor:
  - "Target traveler profile 1"
  - "Target traveler profile 2"
  - "Target traveler profile 3"
keyStrengths:
  - "Verified advantage 1"
  - "Verified advantage 2"
  - "Verified advantage 3"
considerations:
  - "Objective operational caveat 1 (e.g., peak-hour service road bottleneck)"
  - "Objective operational caveat 2 (e.g., compact bathroom dimensions)"
verifiedAmenities:
  - "High-Speed Wi-Fi"
  - "Outdoor Swimming Pool"
  - "Fitness Centre"
businessFacilities:
  - "24-Hour Business Centre"
  - "Executive Boardrooms with Video Conferencing"
  - "Grand Ballroom with verified dimensions and theatre/banquet capacity"
diningVenues:
  - "Verified restaurant name (cuisine specialty)"
transit:
  nearestMetroStation: "Official Station Name"
  metroLine: "Delhi Metro Yellow Line | Gurugram Rapid Metro"
  distanceToMetroKm: 1.2
  walkingTimeToMetroMin: 14 # null if > 1.5 km
  driveTimeToMetroMin: 5    # required if walkingTimeToMetroMin is null
  driveTimeToCyberCityMin: 8
  driveTimeToIGI_T3Min: 18
  highwayAccess: "Specific road or flyover junction"
  transitTips: "Nuanced local transit tip"
ratingBenchmark:
  source: "Google Maps Benchmark"
  score: 4.6
  maxScore: 5.0
  observedReviewCountText: "14,800+ public reviews"
  dateObserved: "October 2026"
  disclaimer: "Third-party Google Maps rating benchmark recorded in October 2026 for traveler context. Not collected, verified, or certified by this directory."
editorialRationale: "Objective explanation of why this property merits inclusion in this category"
verificationSource: "Official Hotel Portal & Municipal Directory"
lastVerifiedDate: "2026-10-24"
verificationStatus: "verified"
isSponsored: false
```

---

## 5. Contact & Data Correction Protocol

1. **Truthful Interaction Mechanisms:** The site operates as a pre-rendered static site without a persistent database backend. Correction forms must never claim to submit into an internal database or ticketing queue.
2. **Implementation Standard:** Forms generate pre-formatted `mailto:` client actions directed to the maintainer (`raijin4551@gmail.com`) and provide a direct fallback link to public GitHub Issues (`https://github.com/DeepanshuAI/10-Best-hotels-in-Gurugram/issues`).
3. **Turnaround & Review:** Sourced corrections submitted by hoteliers or travelers are investigated against official brand documentation within 5 business days and incorporated in the subsequent repository commit.
