'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 hero-bg">
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-32 h-32 mx-auto mb-8 relative overflow-hidden rounded-full bg-white ring-2 ring-lime/60 shadow-xl"
        >
          <Image
            src="/smart-fix-logo.png"
            alt="Smart Fix - Premium Home Renovation Management"
            fill
            className="object-contain scale-[1.35]"
            sizes="128px"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          High-Impact Renovations.<br />Managed Intelligence.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          We bring the vision, the management, and the master builders to your door.
          <span className="text-lime font-semibold"> Transform your property's value with a premium, turnkey experience.</span>
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          onClick={scrollToContact}
          className="bg-lime text-navy px-10 py-5 rounded-full text-lg font-bold hover:bg-gold hover:text-white transition-all duration-300 shadow-2xl hover:shadow-lime/50 transform hover:scale-105"
        >
          Get My Budget Estimate
        </motion.button>

        {/* Secondary WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
          className="mt-6"
        >
          <a
            href={(() => {
              const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ''
              const text = process.env.NEXT_PUBLIC_WHATSAPP_TEXT || "Hi! I&apos;m interested in a budget estimate via WhatsApp."
              return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}` : '#'
            })()}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-6 py-4 rounded-full text-base font-semibold transition-all duration-200 ${
              process.env.NEXT_PUBLIC_WHATSAPP_PHONE ? 'bg-[#25D366] text-white hover:brightness-110 shadow-lg hover:shadow-xl' : 'bg-white/10 text-white/60 cursor-not-allowed'
            }`}
            onClick={(e) => {
              if (!process.env.NEXT_PUBLIC_WHATSAPP_PHONE) e.preventDefault()
            }}
            aria-label="Chat on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.77 11.77 0 0 0 12.06 0C5.47.03.14 5.36.11 11.95A11.76 11.76 0 0 0 12 23.71h.01c2.07 0 4.11-.54 5.9-1.57l3.54 1.01-1.02-3.44a11.76 11.76 0 0 0 .09-16.23Z" />
              <path d="M8.26 7.96c-.24.13-.65.47-.74.9-.09.43-.21 1.25.88 2.78 1.09 1.53 2.55 2.63 2.94 2.83.39.2 1.49.57 2.05.36.56-.21 1.22-.79 1.38-1.36.16-.57.16-1.06.11-1.16-.05-.1-.18-.15-.38-.26-.21-.12-1.24-.61-1.43-.68-.19-.07-.33-.1-.47.1-.14.21-.54.68-.66.82-.12.14-.24.16-.44.06-.2-.1-.83-.3-1.58-.97-.58-.5-.97-1.11-1.09-1.3-.12-.19-.01-.29.09-.39.09-.09.21-.24.31-.36.1-.12.13-.2.19-.33.06-.13.03-.24-.01-.33-.04-.09-.47-1.16-.65-1.59-.17-.43-.36-.37-.49-.34-.12.03-.26.06-.4.14Z" fill="currentColor" />
            </svg>
            <span className="font-bold">💬 Quick Chat on WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-lime rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
