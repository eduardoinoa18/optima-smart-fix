'use client'

import { motion } from 'framer-motion'
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider'

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-softGray">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            See the Smart Fix Difference
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            We transform spaces in days, not months.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2940&auto=format&fit=crop"
                alt="Before renovation - dated kitchen"
                style={{ objectFit: 'cover', height: '600px' }}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2940&auto=format&fit=crop"
                alt="After renovation - modern luxury kitchen"
                style={{ objectFit: 'cover', height: '600px' }}
              />
            }
            position={50}
            style={{ height: '600px' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-lg text-navy/60 italic">
            Drag the slider to see the transformation
          </p>
        </motion.div>
      </div>
    </section>
  )
}
