export type HotelCategory = 'luxury' | 'business' | 'budget' | 'resort' | 'boutique';

export type GurugramDistrict = 
  | 'DLF Cyber City'
  | 'Udyog Vihar'
  | 'Golf Course Road'
  | 'MG Road'
  | 'Sohna Road'
  | 'Sector 29 & City Centre'
  | 'Golf Course Extension'
  | 'Palam Vihar'
  | 'Manesar & South NCR';

export interface HotelAddress {
  street: string;
  locality: string;
  subDistrict: string;
  city: 'Gurugram';
  state: 'Haryana';
  postalCode: string;
  country: 'India';
}

export interface HotelCoordinates {
  latitude: number;
  longitude: number;
}

export interface TransitInfo {
  nearestMetroStation: string;
  metroLine: 'Delhi Metro Yellow Line' | 'Gurugram Rapid Metro' | 'Both Yellow Line & Rapid Metro';
  distanceToMetroKm: number;
  walkingTimeToMetroMin: number;
  driveTimeToCyberCityMin: number;
  driveTimeToIGI_T3Min: number;
  highwayAccess: string;
  transitTips: string;
}

export interface VerifiedRatingBenchmark {
  source: string;
  score: number;
  maxScore: number;
  observedReviewCountText: string;
  dateObserved: string;
  disclaimer: string;
}

export interface HotelRecord {
  id: string;
  slug: string;
  officialName: string;
  brand: string;
  category: HotelCategory;
  priceTier: '₹' | '₹₹' | '₹₹₹' | '₹₹₹₹' | '₹₹₹₹₹';
  indicativeStartingRateINR: number;
  rateVerificationDate: string;
  address: HotelAddress;
  coordinates: HotelCoordinates;
  districts: GurugramDistrict[];
  primaryDistrict: GurugramDistrict;
  phone: string;
  officialWebsite: string;
  officialBookingUrl: string;
  heroImage: {
    src: string;
    alt: string;
    caption: string;
  };
  summary: string;
  inDepthDescription: string;
  bestFor: string[];
  keyStrengths: string[];
  considerations: string[];
  verifiedAmenities: string[];
  businessFacilities: string[];
  diningVenues: string[];
  transit: TransitInfo;
  ratingBenchmark: VerifiedRatingBenchmark;
  editorialRationale: string;
  verificationSource: string;
  lastVerifiedDate: string;
  verificationStatus: 'verified' | 'provisional';
  isSponsored: false;
}

export interface CategoryHubInfo {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroLead: string;
  categoryFilter?: HotelCategory;
  districtFilter?: GurugramDistrict;
  introContent: string;
  buyingAdvice: {
    title: string;
    content: string;
  }[];
  faqItems: {
    question: string;
    answer: string;
  }[];
}
