'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-lime/20"
    >
      <div className="container mx-auto px-4 max-w-7xl py-2 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 relative flex-shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-lime/60">
            <Image
              src="/smart-fix-logo.png"
              alt="Smart Fix Logo - Premium Home Renovation Management"
              fill
              className="object-contain scale-[1.45]"
              priority
              sizes="64px"
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-lime font-bold text-lg tracking-tight">SMART FIX</div>
            <div className="text-white/60 text-xs">Optima Service Group</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          <a href="#how-it-works" className="text-white/70 hover:text-lime transition-colors text-sm font-medium">How It Works</a>
          <a href="#services" className="text-white/70 hover:text-lime transition-colors text-sm font-medium">Services</a>
          <a href="#gallery" className="text-white/70 hover:text-lime transition-colors text-sm font-medium">Gallery</a>
          <a href="#contact" className="text-white/70 hover:text-lime transition-colors text-sm font-medium">Get Estimate</a>
        </nav>

        {/* CTA + WhatsApp */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-lime text-navy px-6 py-2 rounded-full text-sm font-bold hover:bg-gold transition-all duration-300"
          >
            Get Started
          </button>
          <a
            href={(() => {
              const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ''
              const text = process.env.NEXT_PUBLIC_WHATSAPP_TEXT || "Hi! I'm interested in a budget estimate via WhatsApp."
              return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}` : '#'
            })()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border border-white/15 ${
              process.env.NEXT_PUBLIC_WHATSAPP_PHONE ? 'bg-[#25D366] hover:brightness-110' : 'bg-white/10 text-white/60 cursor-not-allowed'
            }`}
            onClick={(e) => {
              if (!process.env.NEXT_PUBLIC_WHATSAPP_PHONE) e.preventDefault()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.77 11.77 0 0 0 12.06 0C5.47.03.14 5.36.11 11.95A11.76 11.76 0 0 0 12 23.71h.01c2.07 0 4.11-.54 5.9-1.57l3.54 1.01-1.02-3.44a11.76 11.76 0 0 0 .09-16.23Z" />
              <path d="M8.26 7.96c-.24.13-.65.47-.74.9-.09.43-.21 1.25.88 2.78 1.09 1.53 2.55 2.63 2.94 2.83.39.2 1.49.57 2.05.36.56-.21 1.22-.79 1.38-1.36.16-.57.16-1.06.11-1.16-.05-.1-.18-.15-.38-.26-.21-.12-1.24-.61-1.43-.68-.19-.07-.33-.1-.47.1-.14.21-.54.68-.66.82-.12.14-.24.16-.44.06-.2-.1-.83-.3-1.58-.97-.58-.5-.97-1.11-1.09-1.3-.12-.19-.01-.29.09-.39.09-.09.21-.24.31-.36.1-.12.13-.2.19-.33.06-.13.03-.24-.01-.33-.04-.09-.47-1.16-.65-1.59-.17-.43-.36-.37-.49-.34-.12.03-.26.06-.4.14Z" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </motion.header>
  )
}
