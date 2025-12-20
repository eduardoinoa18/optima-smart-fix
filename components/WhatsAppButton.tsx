'use client'

import { useMemo } from 'react'

function buildWhatsAppLink() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ''
  const text = process.env.NEXT_PUBLIC_WHATSAPP_TEXT || 'Hi! I\'m interested in a budget estimate via WhatsApp.'
  if (!phone) return '#'
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

export default function WhatsAppButton() {
  const href = useMemo(() => buildWhatsAppLink(), [])
  const isConfigured = href !== '#'

  if (!isConfigured) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp for instant support"
      className="fixed z-50 bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 bg-[#25D366] hover:shadow-[#25D366]/50 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="group-hover:scale-110 transition-transform"
      >
        <path d="M20.52 3.48A11.77 11.77 0 0 0 12.06 0C5.47.03.14 5.36.11 11.95A11.76 11.76 0 0 0 12 23.71h.01c2.07 0 4.11-.54 5.9-1.57l3.54 1.01-1.02-3.44a11.76 11.76 0 0 0 .09-16.23Z" fill="none" />
        <path d="M8.26 7.96c-.24.13-.65.47-.74.9-.09.43-.21 1.25.88 2.78 1.09 1.53 2.55 2.63 2.94 2.83.39.2 1.49.57 2.05.36.56-.21 1.22-.79 1.38-1.36.16-.57.16-1.06.11-1.16-.05-.1-.18-.15-.38-.26-.21-.12-1.24-.61-1.43-.68-.19-.07-.33-.1-.47.1-.14.21-.54.68-.66.82-.12.14-.24.16-.44.06-.2-.1-.83-.3-1.58-.97-.58-.5-.97-1.11-1.09-1.3-.12-.19-.01-.29.09-.39.09-.09.21-.24.31-.36.1-.12.13-.2.19-.33.06-.13.03-.24-.01-.33-.04-.09-.47-1.16-.65-1.59-.17-.43-.36-.37-.49-.34-.12.03-.26.06-.4.14Z" fill="white" />
      </svg>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </a>
  )
}
