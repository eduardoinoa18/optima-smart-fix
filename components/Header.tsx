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
      <div className="container mx-auto px-4 max-w-7xl py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
            >
              <circle cx="100" cy="100" r="95" fill="none" stroke="#CCFF00" strokeWidth="2"/>
              <g transform="translate(100, 100)">
                <circle cx="-35" cy="-35" r="5" fill="#CCFF00"/>
                <line x1="-35" y1="-35" x2="-15" y2="-35" stroke="#CCFF00" strokeWidth="2"/>
                <line x1="-35" y1="-35" x2="-35" y2="-15" stroke="#CCFF00" strokeWidth="2"/>
                <circle cx="0" cy="0" r="8" fill="#CCFF00"/>
                <circle cx="35" cy="-35" r="5" fill="#CCFF00"/>
                <line x1="35" y1="-35" x2="15" y2="-35" stroke="#CCFF00" strokeWidth="2"/>
                <line x1="35" y1="-35" x2="35" y2="-15" stroke="#CCFF00" strokeWidth="2"/>
                <circle cx="0" cy="40" r="5" fill="#CCFF00"/>
                <line x1="0" y1="40" x2="0" y2="20" stroke="#CCFF00" strokeWidth="2"/>
                <line x1="-35" y1="-35" x2="0" y2="0" stroke="#D4AF37" strokeWidth="1.5" opacity="0.7"/>
                <line x1="35" y1="-35" x2="0" y2="0" stroke="#D4AF37" strokeWidth="1.5" opacity="0.7"/>
                <line x1="0" y1="0" x2="0" y2="40" stroke="#D4AF37" strokeWidth="1.5" opacity="0.7"/>
              </g>
            </svg>
          </div>
          <div>
            <div className="text-lime font-bold text-lg tracking-tight">SMART FIX</div>
            <div className="text-white/60 text-xs">Optima Service Group</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white/70 hover:text-lime transition-colors text-sm font-medium">How It Works</a>
          <a href="#" className="text-white/70 hover:text-lime transition-colors text-sm font-medium">Services</a>
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
