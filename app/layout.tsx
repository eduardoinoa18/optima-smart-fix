import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Optima Smart Fix | High-Impact Renovations. Managed Intelligence.',
  description: 'Premium project management and branding for home renovations. We manage the vision, the builders, and the results.',
  icons: {
    icon: '/smart-fix-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
