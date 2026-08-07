/**
 * Reusable Schema.org structured data generators.
 */

import { SITE } from "../data/config";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

export interface FAQItem {
  q: string;
  a: string;
}

export function faqPage(faqs: FAQItem[]) {
  return {
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  imageUrl?: string;
}) {
  return {
    "@type": "Article",
    "headline": opts.headline,
    "description": opts.description,
    "author": { "@type": "Person", "name": SITE.author.name },
    "datePublished": opts.datePublished || "2026-04-01",
    "dateModified": opts.dateModified || "2026-08-07",
    ...(opts.imageUrl ? { "image": opts.imageUrl } : {}),
  };
}

export function touristDestination(opts: {
  name: string;
  description: string;
  touristType?: string[];
}) {
  return {
    "@type": "TouristDestination",
    "name": opts.name,
    "description": opts.description,
    "touristType": opts.touristType || ["Nature Lovers", "Cultural Travelers", "Adventure Seekers", "Photographers"],
    "containedInPlace": { "@type": "Country", "name": "China" },
  };
}
