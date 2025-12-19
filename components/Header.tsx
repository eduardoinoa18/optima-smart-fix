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

        {/* CTA Button */}
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-lime text-navy px-6 py-2 rounded-full text-sm font-bold hover:bg-gold transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </motion.header>
  )
}
