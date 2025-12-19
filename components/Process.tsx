'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Design',
    description: 'We curate the aesthetic.',
    detail: 'Our design team creates a customized plan that maximizes visual impact and property value.',
    icon: '🎨'
  },
  {
    number: '02',
    title: 'Quote',
    description: 'Fixed pricing. No hidden fees.',
    detail: 'Transparent, all-inclusive pricing provided upfront. What you see is what you pay.',
    icon: '💎'
  },
  {
    number: '03',
    title: 'Build',
    description: 'Fast execution by certified partners.',
    detail: 'Professional installation with minimal disruption. Most projects completed in days, not weeks.',
    icon: '⚡'
  }
]

export default function Process() {
  return (
    <section className="py-24 bg-softGray">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            The Optima Process
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Simple, transparent, and designed for your peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-lime/30" />
              )}

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Number */}
                <div className="text-6xl font-bold text-lime/20 mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-navy mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gold font-semibold mb-4">
                  {step.description}
                </p>

                {/* Detail */}
                <p className="text-navy/70 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transparency Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center max-w-3xl mx-auto bg-navy rounded-2xl p-10"
        >
          <p className="text-xl text-white/90 leading-relaxed">
            Powered by <span className="text-lime font-bold">Optima Service Group</span>, we bring 
            corporate-level reliability to home renovations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
