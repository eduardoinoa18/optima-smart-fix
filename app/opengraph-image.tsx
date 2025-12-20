/* eslint-disable */
import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'

export const runtime = 'nodejs'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'
export const dynamic = 'force-dynamic'

export default async function OGImage() {
  const logoPath = path.join(process.cwd(), 'public', 'smart-fix-logo.png')
  const logoBase64 = readFileSync(logoPath).toString('base64')
  const logoSrc = `data:image/png;base64,${logoBase64}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          backgroundColor: '#0A192F',
          color: '#E5E7EB',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 60,
            fontSize: 44,
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: -0.5,
          }}
        >
          Optima Smart Fix
        </div>

        <div
          style={{
            width: 260,
            height: 260,
            borderRadius: 9999,
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 80px rgba(0,0,0,0.35)',
            outline: '12px solid rgba(163,230,53,0.6)',
          }}
        >
          {/* Centered brand mark */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={230}
            height={230}
            alt="Optima Smart Fix Logo"
            style={{ objectFit: 'contain', transform: 'scale(1.35)' }}
          />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 60,
            fontSize: 30,
            fontWeight: 600,
            color: '#D1D5DB',
          }}
        >
          High-Impact Renovations. Managed Intelligence.
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 60,
            fontSize: 22,
            color: '#9CA3AF',
          }}
        >
          optimaservicegroup.com
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  )
}
