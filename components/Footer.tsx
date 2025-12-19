'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="w-16 h-16 relative mb-4 overflow-hidden">
              <Image
                src="/smart-fix-logo.png"
                alt="Smart Fix Logo - Premium Home Renovation Management"
                fill
                className="object-contain scale-125"
                sizes="64px"
              />
            </div>
            <h3 className="text-2xl font-bold text-lime mb-2">SMART FIX</h3>
            <p className="text-white/70 leading-relaxed">
              High-impact aesthetic renovations designed to maximize your property's value.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>Designer Kitchens</li>
              <li>Boutique Bathrooms</li>
              <li>Full-Home Flooring</li>
              <li>Premium Finishes</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get Started</h4>
            <p className="text-white/70 mb-4">
              Ready to transform your space?
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-lime text-navy px-6 py-3 rounded-full font-semibold hover:bg-gold hover:text-white transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center text-white/60 text-sm">
            <p className="mb-3">
              <span className="text-lime font-semibold">Optima Smart Fix</span> is a specialized management division of <span className="text-lime font-semibold">Optima Service Group LLC</span>.
            </p>
            <p className="mb-2 text-xs">
              Physical construction services are performed by independent certified affiliates. Optima Smart Fix acts as the project originator and brand manager.
            </p>
            <p>
              © {new Date().getFullYear()} Optima Smart Fix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
