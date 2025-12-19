'use client'

import { motion } from 'framer-motion'

const portfolioItems = [
  {
    bgClass: 'portfolio-bg-1',
    title: 'Matte Black Elegance',
    proTip: 'Pro-Tip: Matte black fixtures add 15% perceived value'
  },
  {
    bgClass: 'portfolio-bg-2',
    title: 'Waterfall Edge Island',
    proTip: 'Pro-Tip: Waterfall counters are the #1 kitchen trend'
  },
  {
    bgClass: 'portfolio-bg-3',
    title: 'Floating Vanity',
    proTip: 'Pro-Tip: Floating vanities make small bathrooms feel spacious'
  },
  {
    bgClass: 'portfolio-bg-4',
    title: 'Statement Lighting',
    proTip: 'Pro-Tip: Lighting increases perceived value by 20%'
  },
  {
    bgClass: 'portfolio-bg-5',
    title: 'Modern Minimalism',
    proTip: 'Pro-Tip: Clean lines appeal to 85% of buyers'
  },
  {
    bgClass: 'portfolio-bg-6',
    title: 'Luxury Details',
    proTip: 'Pro-Tip: Premium hardware is a low-cost, high-impact upgrade'
  }
]

export default function Portfolio() {
  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Inspiration Gallery
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Every detail is designed to elevate your space and maximize value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-cover-center transform group-hover:scale-110 transition-transform duration-500 ${item.bgClass}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                
                {/* Pro-Tip Badge */}
                <div className="inline-block bg-lime text-navy px-4 py-2 rounded-full text-sm font-semibold">
                  {item.proTip}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
