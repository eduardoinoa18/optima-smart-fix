'use client'

export default function SEOHead() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://smartfix.optimaservicegroup.com'
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Optima Smart Fix',
    url: base,
    logo: `${base}/smart-fix-logo.png`,
    description:
      'Premium project management and branding for home renovations. Designer kitchens, luxury bathrooms, and flooring solutions.',
    sameAs: [
      'https://www.facebook.com/optimasmartfix',
      'https://www.instagram.com/optimasmartfix',
      'https://www.linkedin.com/company/optima-service-group',
    ],
    foundingDate: '2025',
    founder: {
      '@type': 'Organization',
      name: 'Optima Service Group LLC',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Contact for location',
      addressLocality: 'United States',
      postalCode: '',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['en'],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
