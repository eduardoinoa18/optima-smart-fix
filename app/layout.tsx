import type { Metadata, Viewport } from 'next'
import './globals.css'
import SEOHead from '@/components/SEOHead'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark light',
}

export const metadata: Metadata = {
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
    url: 'https://smartfix.optimaservicegroup.com',
    siteName: 'Optima Smart Fix',
    title: 'Optima Smart Fix | High-Impact Renovations. Managed Intelligence.',
    description: 'Premium project management for home renovations. Designer kitchens, luxury bathrooms, and more. Maximize your property value with Optima Smart Fix.',
    images: [
      {
        url: 'https://smartfix.optimaservicegroup.com/smart-fix-logo.png',
        width: 1200,
        height: 630,
        alt: 'Smart Fix Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optima Smart Fix | High-Impact Renovations. Managed Intelligence.',
    description: 'Premium project management for home renovations. Get a budget estimate today.',
    images: ['https://smartfix.optimaservicegroup.com/smart-fix-logo.png'],
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
        <meta name="theme-color" content="#0A192F" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Smart Fix" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/smart-fix-logo.png" />
        <link rel="canonical" href="https://smartfix.optimaservicegroup.com" />
        <link rel="alternate" hrefLang="en" href="https://smartfix.optimaservicegroup.com" />
        <SEOHead />
      </head>
      <body>{children}</body>
    </html>
  )
}
