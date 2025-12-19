import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Optima Smart Fix | Smart Upgrades, Premium Living',
  description: 'High-impact aesthetic renovations designed to maximize your property\'s value. Zero chaos, total transparency.',
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
