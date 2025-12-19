'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Designer Kitchens',
    description: 'Curated surfaces and modern cabinetry finishes managed to perfection.',
    icon: '🏠',
    bgClass: 'service-bg-1'
  },
  {
    title: 'Boutique Bathrooms',
    description: 'Spa-inspired transformations that turn dated bathrooms into luxury retreats.',
    icon: '✨',
    bgClass: 'service-bg-2'
  },
  {
    title: 'Full-Home Flooring',
    description: 'Seamless LVP and hardwood solutions to unify your home\'s aesthetic.',
    icon: '🎯',
    bgClass: 'service-bg-3'
  },
  {
    title: 'Premium Finishes',
    description: 'Exterior details and architectural elements that maximize curb appeal and value.',
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
            Managed Solutions for Your Home
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Expert curation and professional execution—every detail managed to perfection.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-lg text-navy font-bold mb-2">✓ Vetted Affiliates</p>
              <p className="text-navy/70">Only certified, insured, and master-level builders.</p>
            </div>
            <div>
              <p className="text-lg text-navy font-bold mb-2">✓ Value Focused</p>
              <p className="text-navy/70">Every Smart Fix maximizes ROI on your investment.</p>
            </div>
            <div>
              <p className="text-lg text-navy font-bold mb-2">✓ One Point of Contact</p>
              <p className="text-navy/70">Deal with us. We manage the contractors.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
