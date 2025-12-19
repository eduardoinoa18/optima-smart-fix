'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Kitchen Face-lift',
    description: 'Professional cabinet refinishing, luxury quartz countertops, and modern hardware.',
    icon: '🏠',
    bgClass: 'service-bg-1'
  },
  {
    title: 'Boutique Bathrooms',
    description: 'Spa-like upgrades, LED mirrors, and designer fixtures.',
    icon: '✨',
    bgClass: 'service-bg-2'
  },
  {
    title: 'Luxury Flooring',
    description: 'High-end LVP installation that is waterproof and scratch-resistant.',
    icon: '🎯',
    bgClass: 'service-bg-3'
  },
  {
    title: 'Curb Appeal',
    description: 'Exterior painting and architectural lighting to boost resale value.',
    icon: '🌟',
    bgClass: 'service-bg-4'
  }
]

export default function SmartSolutions() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Smart Solutions
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Most contractors focus on construction. We focus on the <span className="text-gold font-semibold">Result</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-cover-center transform group-hover:scale-110 transition-transform duration-500 ${service.bgClass}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 text-4xl">
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="bg-navy p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Messaging */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center max-w-4xl mx-auto bg-softGray rounded-2xl p-10"
        >
          <p className="text-xl text-navy/80 leading-relaxed italic">
            "We combine design intelligence with professional execution to make your home look like a showroom 
            <span className="text-gold font-semibold"> without the showroom price tag.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
