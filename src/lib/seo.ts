import type { HotelRecord } from '../data/types';
import type { FaqItem } from '../data/faqs';
import type { GuideArticle } from '../data/guides';
import { getSiteOrigin, getCanonicalUrl, SITE_CONFIG } from './site-config';

export function generateWebSiteSchema() {
  const origin = getSiteOrigin();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    alternateName: ['Gurugram Hotel Directory', 'Best Gurgaon Hotels Guide'],
    url: `${origin}/`,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${origin}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: `${origin}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${origin}/favicon.svg`,
      },
    },
  };
}

export function generateItemListSchema(title: string, hotels: HotelRecord[], path: string) {
  const origin = getSiteOrigin();
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    url: getCanonicalUrl(path),
    numberOfItems: hotels.length,
    itemListElement: hotels.map((hotel, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Hotel',
        name: hotel.officialName,
        url: getCanonicalUrl(`hotels/${hotel.slug}`),
        image: hotel.heroImage.src.startsWith('http') ? hotel.heroImage.src : `${origin}${hotel.heroImage.src}`,
        priceRange: hotel.priceTier,
        address: {
          '@type': 'PostalAddress',
          streetAddress: hotel.address.street,
          addressLocality: hotel.address.locality,
          addressRegion: hotel.address.state,
          postalCode: hotel.address.postalCode,
          addressCountry: 'IN',
        },
      },
    })),
  };
}

export function generateHotelSchema(hotel: HotelRecord) {
  const origin = getSiteOrigin();
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': getCanonicalUrl(`hotels/${hotel.slug}`),
    name: hotel.officialName,
    description: hotel.summary,
    url: hotel.officialWebsite,
    telephone: hotel.phone,
    priceRange: hotel.priceTier,
    image: hotel.heroImage.src.startsWith('http') ? hotel.heroImage.src : `${origin}${hotel.heroImage.src}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: hotel.address.street,
      addressLocality: hotel.address.locality,
      addressRegion: hotel.address.state,
      postalCode: hotel.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: hotel.coordinates.latitude,
      longitude: hotel.coordinates.longitude,
    },
    amenityFeature: hotel.verifiedAmenities.map((amenity) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity,
      value: true,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: hotel.ratingBenchmark.score,
      bestRating: hotel.ratingBenchmark.maxScore,
      ratingCount: parseInt(hotel.ratingBenchmark.observedReviewCountText.replace(/\D/g, ''), 10) || 1000,
      reviewCount: parseInt(hotel.ratingBenchmark.observedReviewCountText.replace(/\D/g, ''), 10) || 1000,
    },
    containedInPlace: {
      '@type': 'Place',
      name: `${hotel.primaryDistrict}, Gurugram`,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : getCanonicalUrl(item.url),
    })),
  };
}

export function generateFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: GuideArticle) {
  const origin = getSiteOrigin();
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    url: getCanonicalUrl(`guides/${article.slug}`),
    datePublished: article.publishDate,
    dateModified: article.lastUpdated,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: `${origin}/about/`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: `${origin}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${origin}/favicon.svg`,
      },
    },
  };
}
