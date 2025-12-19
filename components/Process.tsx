'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Smart Curation',
    description: 'We define your aesthetic vision.',
    detail: 'Our design team curates a customized aesthetic plan with a transparent budget range aligned to your investment goals.',
    icon: '🎨'
  },
  {
    number: '02',
    title: 'Secured Execution',
    description: 'Elite certified affiliates assigned.',
    detail: 'We deploy our vetted network of insured, master-level construction affiliates to execute with precision and professionalism.',
    icon: '⚙️'
  },
  {
    number: '03',
    title: 'Managed Success',
    description: 'Premium oversight end-to-end.',
    detail: 'We oversee brand standards, timelines, and quality assurance to ensure a premium result from vision to completion.',
    icon: '✅'
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
            How It Works
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            We manage the entire experience, from vision to premium execution.
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

        {/* Brand Authority Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center max-w-3xl mx-auto bg-navy rounded-2xl p-10"
        >
          <p className="text-xl text-white/90 leading-relaxed mb-4">
            <span className="text-lime font-bold">One point of contact.</span> You deal with us; we deal with the contractors.
          </p>
          <p className="text-white/70 text-sm">
            Powered by <span className="text-lime font-bold">Optima Service Group</span>, we bring project management excellence and brand authority to home renovations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
