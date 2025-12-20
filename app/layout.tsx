import type { Metadata, Viewport } from 'next'
import './globals.css'
import SEOHead from '@/components/SEOHead'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://smartfix.optimaservicegroup.com'


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark light',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Optima Smart Fix | Premium Home Renovation Management | High-Impact Renovations',
  description: 'Premium project management and branding for home renovations. Designer kitchens, luxury bathrooms, and flooring. Managed by certified affiliates. Get a budget estimate today.',
  keywords: 'home renovation, kitchen remodeling, bathroom renovation, luxury flooring, property value increase, home improvement',
  authors: [{ name: 'Optima Service Group' }],
  creator: 'Optima Smart Fix',
  publisher: 'Optima Service Group LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Optima Smart Fix',
    title: 'Optima Smart Fix | High-Impact Renovations. Managed Intelligence.',
    description: 'Premium project management for home renovations. Designer kitchens, luxury bathrooms, and more. Maximize your property value with Optima Smart Fix.',
    images: [
      {
        url: `${SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Optima Smart Fix — High-Impact Renovations. Managed Intelligence.',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optima Smart Fix | High-Impact Renovations. Managed Intelligence.',
    description: 'Premium project management for home renovations. Get a budget estimate today.',
    images: [`${SITE_URL}/twitter-image.png`],
    creator: '@OptimaSmartFix',
  },
  icons: {
    icon: '/smart-fix-logo.png',
    shortcut: '/smart-fix-logo.png',
    apple: '/smart-fix-logo.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Smart Fix" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <SEOHead />
      </head>
      <body>{children}</body>
    </html>
  )
}
