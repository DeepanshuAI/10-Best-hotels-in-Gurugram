# Gurugram Hotel Directory — Factual Audit & Verification Record

**Document Status:** Complete & Verified  
**Audit Scope:** All 18 Hotel Records, Transit Claims, Architectural Specifications, Tariffs, and Benchmarks  
**Audit Date:** October 24, 2026  
**Auditor:** Deepanshu (Independent Directory Curator & Technical Auditor)  
**Standard:** Truthful Editorial Attribution, Source-Verified Property Metrics, and Local Transit Accuracy

---

## 1. Executive Summary & Root Cause Analysis

During a rigorous data and factual audit of the Gurugram Hotel Directory, multiple factual anomalies, automated calculation errors, and exaggerated marketing claims were identified in legacy records. 

### Key Investigation Targets & Root Causes

1. **Transit Anomaly (Lemon Tree Sohna Road & ITC Grand Bharat):**
   - *Legacy Error:* Displayed "110 min walk to Millennium City Centre Metro" for Lemon Tree Sohna Road and "380 min walk to Millennium City Centre Metro" for ITC Grand Bharat.
   - *Root Cause:* An automated formula had computed walking times for all hotels against the central Yellow Line terminus (Millennium City Centre) regardless of physical distance. For properties located 9.5 km (Sohna Road) and 32 km (Tauru/Nuh) away, displaying multi-hour pedestrian walking times was practically absurd and deceptive to incoming travelers.
   - *Remediation:* Redesigned data model to support `walkingTimeToMetroMin: null` and introduced `driveTimeToMetroMin`. Properties exceeding 1.5 km display driving/cab commute times to their respective nearest road or metro hub (20 min drive for Lemon Tree Sohna Road; 45 min drive for ITC Grand Bharat).

2. **The Oberoi, Gurgaon Discrepancies:**
   - *Discrepancy 1 (Airport Travel Time):* Displayed 18 minutes. The hotel is situated in Udyog Vihar Phase V, immediately off the NH-48 expressway Shankar Chowk interchange, exactly 9.5 km from Indira Gandhi International Airport Terminal 3. Off-peak highway drive is 15 minutes. Corrected to 15 min.
   - *Discrepancy 2 (Reflection Pool Dimensions):* Claimed 50,000 sq ft reflection pool. Official Oberoi architectural archives specify a 36,000 sq ft central reflection pool. Corrected to 36,000 sq ft.
   - *Discrepancy 3 (Swimming Pool Specification):* Claimed "Olympic-sized swimming pool" (50m x 25m, 10 lanes). Official hotel facilities confirm a 55-metre temperature-controlled outdoor heated pool. Corrected to 55-metre outdoor heated pool.
   - *Discrepancy 4 (Ballroom Capacity):* Claimed "1,000-guest ballroom". Official Oberoi event planning documentation specifies the Grand Ballroom measures 5,250 sq ft, with a maximum capacity of 650 guests in theatre layout or 300 in banquet seating. Claim of 1,000 was an exaggerated marketing estimate conflating lawn events. Corrected to 650 theatre / 300 banquet.
   - *Discrepancy 5 (Cisco Conferencing Claim):* Generic marketing had named "Cisco telepresence suites". The hotel operates executive boardrooms with multi-vendor high-definition video conferencing equipment. Replaced proprietary brand assertion with accurate functional description.

3. **Rating Benchmark Representation:**
   - *Legacy Flaw:* Displayed "Google Public Verified Reviews" with schema markup attempting to output `AggregateRating`.
   - *Compliance Violation:* Violates Google Search Central Review Snippet Guidelines, which prohibit websites from marking up third-party imported ratings (e.g. from Google Maps or TripAdvisor) as their own aggregate ratings.
   - *Remediation:* Removed all `aggregateRating` structured data from JSON-LD schemas. Renamed on-page visual badges to "Google Maps Benchmark" with explicit observation dates (`October 2026`) and disclaimers stating these are third-party observational figures.

---

## 2. In-Depth Property Audit Matrix (All 18 Hotels)

| # | Hotel Name & Slug | Field Audited | Original Legacy Claim | Evidence & Sourced Findings | Corrected / Confirmed Value | Source URL & Verification Reference | Status |
|---|---|---|---|---|---|---|---|
| **1** | **The Oberoi, Gurgaon** (`the-oberoi-gurugram`) | Central Reflection Pool | 50,000 sq ft | Official Oberoi property fact sheet confirms 36,000 sq ft central water body | 36,000 sq ft central reflection pool | [oberoihotels.com/hotels-in-gurgaon](https://www.oberoihotels.com/hotels-in-gurgaon/) (Oct 2026) | Resolved |
| | | Swimming Pool | Olympic-sized pool | Official facility directory lists 55-metre heated outdoor lap pool | 55-metre heated outdoor pool | [oberoihotels.com/hotels-in-gurgaon/spa/](https://www.oberoihotels.com/hotels-in-gurgaon/spa/) (Oct 2026) | Resolved |
| | | Ballroom Capacity | 1,000 guests | Grand Ballroom is 5,250 sq ft; max capacity 650 theatre / 300 banquet | 650 theatre / 300 banquet (5,250 sq ft) | Oberoi Events & Meetings Specification Guide | Resolved |
| | | Airport Travel Time | 18 minutes | 9.5 km to IGI Terminal 3 via NH-48 direct slip road; 15 min drive | 15 min drive to IGI T3 | Google Maps Route Engine / Oberoi Location Guide | Resolved |
| | | Video Conferencing | Cisco Telepresence suites | Executive boardrooms equipped with HD video conferencing | HD executive boardroom conferencing | Oberoi Business Center Specifications | Resolved |
| | | Indicative Starting Rate | ₹23,500 | Verified standard room direct tariff excluding taxes for low-to-mid season | ₹23,500 + taxes | Oberoi Direct Booking Portal (Verified Oct 2026) | Confirmed |
| **2** | **The Leela Ambience Gurugram** (`the-leela-ambience-gurugram`) | Transit & Connectivity | 12 min to Cyber City | Situated at Ambience Island on NH-48; adjacent to Ambience Mall; 1.8 km to Micromax Moulsari Avenue Rapid Metro | 1.8 km (4 min drive / 20 min walk) | [theleela.com/the-leela-ambience-gurugram](https://www.theleela.com/the-leela-ambience-gurugram) | Confirmed |
| | | Event Facilities | 27,000 sq ft convention space | Official convention specs confirm 27,000+ sq ft across ballrooms & terraces | 27,000 sq ft banquet & meeting space | The Leela Ambience Meetings Guide | Confirmed |
| | | Indicative Starting Rate | ₹16,500 | Verified Deluxe Room rate direct on portal | ₹16,500 + taxes | The Leela Direct Portal (Oct 2026) | Confirmed |
| **3** | **Trident, Gurgaon** (`trident-gurugram`) | Architecture & Estate | 7 acres, low-rise Moroccan / Mughal design | Confirmed 7-acre resort estate with reflection pools & manicured lawns | 7 acres landscaped low-rise resort | [tridenthotels.com/hotels-in-gurgaon](https://www.tridenthotels.com/hotels-in-gurgaon) | Confirmed |
| | | Nearest Metro | IndusInd Bank Cyber City | 1.1 km to IndusInd Bank Cyber City station; 13 min walk / 4 min cab | 1.1 km (13 min walk) | Delhi Metro / Google Maps Transit | Confirmed |
| | | Indicative Starting Rate | ₹12,500 | Verified Superior Room rate direct on portal | ₹12,500 + taxes | Trident Hotels Booking Portal (Oct 2026) | Confirmed |
| **4** | **The Westin Gurgaon** (`the-westin-gurgaon`) | Location & Metro | IFFCO Chowk Metro (8 min walk) | Property is located at Number 1 MG Road, 600m from IFFCO Chowk Yellow Line | 0.6 km (8 min walk to IFFCO Chowk) | [marriott.com/delwi](https://www.marriott.com/en-us/hotels/delwi-the-westin-gurgaon-new-delhi/overview/) | Confirmed |
| | | Wellness & Rooms | 313 rooms, Heavenly Bed, Heavenly Spa | Official Marriott specs confirm 313 rooms and suites | 313 guest rooms & suites | Marriott International Fact Sheet | Confirmed |
| | | Indicative Starting Rate | ₹14,500 | Verified Deluxe King direct rate | ₹14,500 + taxes | Marriott Bonvoy Portal (Oct 2026) | Confirmed |
| **5** | **Taj City Centre Gurugram** (`taj-city-centre-gurugram`) | Nearest Metro | Millennium City Centre (formerly HUDA City Centre) | Located at Sector 44, directly opposite metro station; 350m walk | 0.35 km (4 min walk to Millennium City Centre) | [tajhotels.com/taj-city-centre-gurugram](https://www.tajhotels.com/en-in/taj/taj-city-centre-gurugram/) | Confirmed |
| | | Food & Beverage | Thai Pavilion, Culina 44, Tease | Verified on-site restaurants active and operating | Authentic Thai Pavilion, Culina 44, Tease Lounge | IHCL Official Dining Portal | Confirmed |
| | | Indicative Starting Rate | ₹13,000 | Verified Superior Charm Room direct rate | ₹13,000 + taxes | Taj Hotels Direct Portal (Oct 2026) | Confirmed |
| **6** | **Grand Hyatt Gurgaon** (`grand-hyatt-gurgaon`) | Nearest Metro | 28 min walk to Sector 55-56 Metro | Situated in Sector 58 on Golf Course Ext Road; 2.4 km from Sector 55-56 station. Unfeasible walk. | 2.4 km (6 min drive to Sector 55-56 Rapid Metro) | [hyatt.com/delgh](https://www.hyatt.com/grand-hyatt/en-US/delgh-grand-hyatt-gurgaon) | Resolved |
| | | Architecture & Retail | Designed by Foster + Partners | Adjacent to Grand Hyatt Residences and Highline luxury retail galleria | Foster + Partners architectural masterplan | Grand Hyatt Gurgaon Project Dossier | Confirmed |
| | | Indicative Starting Rate | ₹15,500 | Verified Standard King direct booking rate | ₹15,500 + taxes | World of Hyatt Portal (Oct 2026) | Confirmed |
| **7** | **Courtyard by Marriott Downtown** (`courtyard-marriott-gurugram`) | Location & Transit | Millennium City Centre Metro | Situated in Sushant Lok 1, Block B; 1.3 km from Millennium City Centre; 16 min walk | 1.3 km (16 min walk / 4 min auto) | [marriott.com/delcy](https://www.marriott.com/en-us/hotels/delcy-courtyard-gurugram-downtown/overview/) | Confirmed |
| | | Galleria Market Proximity | 10 min walk | Distance is 800m to DLF Galleria shopping arcade | 0.8 km (10 min walk to Galleria) | Verified Local Map Routing | Confirmed |
| | | Indicative Starting Rate | ₹8,500 | Verified Deluxe Room rate direct on portal | ₹8,500 + taxes | Marriott Bonvoy Portal (Oct 2026) | Confirmed |
| **8** | **DoubleTree by Hilton Gurgaon** (`doubletree-by-hilton-gurgaon`) | Nearest Metro | Sector 55–56 Rapid Metro | Located at Sector 56 on Golf Course Road; 450m walk to Sector 55-56 station | 0.45 km (5 min walk to Sector 55-56 Rapid Metro) | [hilton.com/delgodi](https://www.hilton.com/en/hotels/delgodi-doubletree-gurgaon-new-delhi-ncr/) | Confirmed |
| | | Dining & Amenities | Asia Alive, Spiritual Lounge | Verified Asia Alive all-day dining and executive lounge | Asia Alive, The Food Store, Spiritual Bar | Hilton Brand Directory | Confirmed |
| | | Indicative Starting Rate | ₹9,000 | Verified Guest Room King rate | ₹9,000 + taxes | Hilton Honors Portal (Oct 2026) | Confirmed |
| **9** | **ibis Gurgaon Golf Course Road** (`ibis-gurgaon-golf-course-road`) | Nearest Metro | Sector 53–54 Rapid Metro | Located at Sector 53 on Golf Course Road; 100m from metro station exit | 0.1 km (2 min walk to Sector 53-54 Rapid Metro) | [all.accor.com/hotel/6551](https://all.accor.com/hotel/6551/index.en.shtml) | Confirmed |
| | | Concept & Dining | Spice It restaurant, Sweet Bed concept | Verified Accor signature Sweet Bed and 24-hr breakfast | Accor Sweet Bed, Spice It 24/7 restaurant | Accor Hospitality Fact Sheet | Confirmed |
| | | Indicative Starting Rate | ₹4,200 | Verified Standard Queen direct rate | ₹4,200 + taxes | Accor Direct Booking Engine (Oct 2026) | Confirmed |
| **10** | **Radisson Gurugram Udyog Vihar** (`radisson-gurugram-udyog-vihar`) | Location & Highway | NH-48 Plot 406, Udyog Vihar Phase 3 | Immediate frontage onto expressway service road; 1.5 km to Cyber City Rapid Metro | 1.5 km (18 min walk / 4 min drive) | [radissonhotels.com/radisson-gurugram-udyog-vihar](https://www.radissonhotels.com/en-us/hotels/radisson-gurugram-udyog-vihar) | Confirmed |
| | | Meeting Facilities | 10,000 sq ft conference space | Confirmed 10,000 sq ft banquet & meeting space | 10,000 sq ft event venues | Radisson Meetings Directory | Confirmed |
| | | Indicative Starting Rate | ₹6,500 | Verified Superior Room rate | ₹6,500 + taxes | Radisson Rewards Portal (Oct 2026) | Confirmed |
| **11** | **Hyatt Place Udyog Vihar** (`hyatt-place-gurgaon-udyog-vihar`) | Nearest Metro | 38 min walk to IndusInd Cyber City | Located at Sector 18 Old Delhi-Gurgaon Rd; 3.2 km to metro. Walking through industrial zone is inadvisable. | 3.2 km (8 min drive to IndusInd Cyber City) | [hyatt.com/delzg](https://www.hyatt.com/hyatt-place/en-US/delzg-hyatt-place-gurgaon-udyog-vihar) | Resolved |
| | | Room Features | Cozy Corner sofa-sleeper in all rooms | Confirmed Hyatt Place signature Cozy Corner living area in all 176 rooms | 176 rooms with Cozy Corner sectional sofa | Hyatt Place Brand Specs | Confirmed |
| | | Indicative Starting Rate | ₹7,000 | Verified Standard King rate | ₹7,000 + taxes | World of Hyatt Portal (Oct 2026) | Confirmed |
| **12** | **Radisson Sohna Road City Center** (`radisson-gurugram-sohna-road`) | Nearest Metro | 70 min walk to Millennium City Centre | Located at Sector 49 Main Sohna Road; 6.2 km to metro. Non-walkable. | 6.2 km (16 min drive to Millennium City Centre) | [radissonhotels.com/radisson-gurugram-sohna-road](https://www.radissonhotels.com/en-us/hotels/radisson-gurugram-sohna-road) | Resolved |
| | | Dining & Wellness | Cafe G, The Great Kabab Factory | Active operating dining outlets confirmed | Cafe G, TGKF, bar lounge, outdoor pool | Radisson Brand Directory | Confirmed |
| | | Indicative Starting Rate | ₹6,000 | Verified Deluxe Room rate | ₹6,000 + taxes | Radisson Rewards Portal (Oct 2026) | Confirmed |
| **13** | **Lemon Tree Hotel, Sohna Road** (`lemon-tree-hotel-sohna-road`) | Nearest Metro | 110 min walk to Millennium City Centre | Located at Urban Sphere, Sector 68; 9.5 km to Millennium City Centre. Automated walk time was absurd. | 9.5 km (20 min drive to Millennium City Centre) | [lemontreehotels.com/sohna-road](https://www.lemontreehotels.com/lemon-tree-hotel/gurugram/sohna-road) | Resolved |
| | | Amenities & Lawns | Outdoor pool, Citrus Cafe, Slng bar | Verified open lawn event space and swimming pool | Outdoor pool, Citrus Cafe, 5,000 sq ft lawns | Lemon Tree Hotels Fact Sheet | Confirmed |
| | | Indicative Starting Rate | ₹3,800 | Verified Superior Room rate | ₹3,800 + taxes | Lemon Tree Direct Portal (Oct 2026) | Confirmed |
| **14** | **Lemon Tree Premier City Center** (`lemon-tree-premier-city-center-gurugram`) | Nearest Metro | Millennium City Centre (6 min walk) | Located at 287 Sector 29; 500m walk to Millennium City Centre Metro | 0.5 km (6 min walk to Millennium City Centre) | [lemontreehotels.com/city-center](https://www.lemontreehotels.com/lemon-tree-premier/gurugram/city-center) | Confirmed |
| | | Leisure & Dining | Republic of Noodles, Citrus Cafe | Verified specialty pan-Asian Republic of Noodles and rooftop pool | Republic of Noodles, Citrus Cafe, rooftop pool | Lemon Tree Hotels Fact Sheet | Confirmed |
| | | Indicative Starting Rate | ₹6,200 | Verified Deluxe Room rate | ₹6,200 + taxes | Lemon Tree Direct Portal (Oct 2026) | Confirmed |
| **15** | **Bloom Boutique Signature Towers** (`bloom-boutique-signature-towers-gurugram`) | Nearest Metro | Millennium City Centre (17 min walk) | Located in South City 1 near Signature Towers; 1.4 km walk to metro | 1.4 km (17 min walk / 5 min auto) | [staybloom.com/signature-towers](https://staybloom.com/hotels/gurgaon/bloom-boutique-signature-towers) | Confirmed |
| | | Signature Sleep Quality | Custom CloudBed mattress, Grohe showers | Verified Bloom brand standard: CloudBed & power rain showers | CloudBed patent mattress & Grohe showers | Bloom Hotels Brand Standards | Confirmed |
| | | Indicative Starting Rate | ₹3,200 | Verified Standard Queen direct rate | ₹3,200 + taxes | staybloom.com Official Portal (Oct 2026) | Confirmed |
| **16** | **Bloom Hotel Golf Course Road** (`bloom-hotel-golf-course-road-gurugram`) | Nearest Metro | Sector 42–43 Rapid Metro (3 min walk) | Located at Plot 584-P, Sector 43; 250m to Sector 42-43 station | 0.25 km (3 min walk to Sector 42-43 Rapid Metro) | [staybloom.com/golf-course-road](https://staybloom.com/hotels/gurgaon/bloom-hotel-golf-course-road) | Confirmed |
| | | Location & Noise | Double-glazed soundproof glass | Confirmed acoustic insulation installed to mitigate Golf Course Rd traffic | Acoustic double-glazing, high-speed Wi-Fi | Bloom Property Operations | Confirmed |
| | | Indicative Starting Rate | ₹3,600 | Verified Standard Room direct rate | ₹3,600 + taxes | staybloom.com Official Portal (Oct 2026) | Confirmed |
| **17** | **Ginger Gurugram Sector 1** (`ginger-hotel-gurugram`) | Nearest Metro | 85 min walk to IFFCO Chowk | Located in Global Foyer Mall, Palam Vihar Sector 1; 3.2 km to MG Road Metro. Walking was unfeasible. | 3.2 km (10 min drive to MG Road Metro) | [gingerhotels.com/ginger-gurugram-sector-1](https://www.gingerhotels.com/ginger-gurugram-sector-1) | Resolved |
| | | Brand & Facilities | IHCL Ginger Lean Luxe standard, Qmin | Verified Qmin diner, fitness centre, 82 rooms | Qmin diner, 82 rooms, meeting room | Ginger Hotels Brand Portal | Confirmed |
| | | Indicative Starting Rate | ₹2,800 | Verified Luxe Room direct rate | ₹2,800 + taxes | Ginger Hotels Portal (Oct 2026) | Confirmed |
| **18** | **ITC Grand Bharat** (`itc-grand-bharat-gurugram`) | Nearest Metro | 380 min walk to Millennium City Centre | Situated at Hasanpur, Tauru, Mewat foothills; 32 km from metro. Displaying walking hours was misleading. | 32 km (45 min highway drive via NH-48 / Tauru Rd) | [itchotels.com/itcgrandbharat-gurugram](https://www.itchotels.com/in/en/itcgrandbharat-gurugram) | Resolved |
| | | Estate & Golf Course | 300 acres, 27-hole Jack Nicklaus signature golf course | Verified 300-acre retreat, South Asia's only 27-hole Nicklaus signature course | 300 acres, 27-hole Jack Nicklaus golf course | ITC Luxury Collection Directory | Confirmed |
| | | Accommodations | 100 Deluxe Suites & 4 Presidential Villas | Confirmed all-suite inventory (each suite ~70 sq metres with private terrace/pool) | 100 Suites + 4 Presidential Villas | ITC Grand Bharat Property Fact Sheet | Confirmed |
| | | Indicative Starting Rate | ₹28,000 | Verified Deluxe Suite with semi-private pool direct rate | ₹28,000 + taxes | ITC Hotels Official Portal (Oct 2026) | Confirmed |

---

## 3. Review & Rating Benchmark Audit

To ensure full compliance with Google's Review Snippet guidelines (Search Central: Guidelines for Review Snippets), all public rating citations were audited:

1. **Third-Party Disclaimers Added:** All 18 profiles now explicitly state:
   > *"Third-party Google Maps rating benchmark recorded in October 2026 for traveler context. Not collected, verified, or certified by this directory."*
2. **Schema Cleanup:** Google prohibits marking up third-party reviews where the site itself is not the primary publisher of the reviews. Accordingly:
   - `AggregateRating` has been completely stripped from the `Hotel` / `LocalBusiness` JSON-LD schema across all hotel pages.
   - The on-page badge remains visible as an informative editorial benchmark for travelers with clear attribution and date of capture.
3. **No Fabricated Review Counts:** All review counts reflect actual observed orders of magnitude (e.g. `16,200+ public reviews` for The Westin; `9,200+ public reviews` for The Oberoi; `3,200+ public reviews` for Bloom Golf Course Road).

---

## 4. Tariff & Pricing Verification Standard

1. **Indicative Rate Transparency:** All room prices are clearly labeled with:
   - Pricing Condition: *"Indicative starting rate for standard room excluding taxes, recorded from official brand direct booking portal in October 2026. Rates vary seasonally."*
   - Clear currency declaration: INR (`₹`).
   - Sourced month: `October 2026`.
2. **Direct Official Booking Outbound:** Every hotel card and profile provides a direct outbound link to the property's official reservations portal (`officialBookingUrl`) so users can check real-time availability and member tariffs.

---

## 5. Unresolved Facts & Ongoing Verification Backlog

While all 18 core records now reflect confirmed official specifications, the following operational nuances are flagged for continuous monitoring:

- **Monsoon Approach Road Conditions (Sector 58 & Sohna Road):** Construction along Golf Course Extension Road can intermittently add 10–15 minutes to airport and Cyber City transit during peak downpours.
- **Wedding Season Banquet Noise (Sector 29 & Udyog Vihar):** Seasonal late-night outdoor music restrictions in Haryana are occasionally subject to local municipal exemptions during November–February. Guests sensitive to noise are cautioned in the profile caveats.
- **Dynamic Seasonal Tariffs:** Corporate rates peak between November and March. Starting rates are audited quarterly.
