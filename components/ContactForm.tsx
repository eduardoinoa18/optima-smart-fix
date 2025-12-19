'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  fullName: string
  phone: string
  projectType: string
  zipCode: string
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    // Here you would integrate with your backend/email service
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Start Your Transformation
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Get a fixed-price estimate in 48 hours. No pressure, no hidden fees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-softGray rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-navy font-semibold mb-2">
                Full Name *
              </label>
              <input
                {...register('fullName', { required: 'Full name is required' })}
                type="text"
                id="fullName"
                className="w-full px-4 py-3 rounded-lg border-2 border-navy/20 focus:border-lime focus:outline-none transition-colors"
                placeholder="John Smith"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-navy font-semibold mb-2">
                Phone (WhatsApp) *
              </label>
              <input
                {...register('phone', { 
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[\d\s\-\+\(\)]+$/,
                    message: 'Please enter a valid phone number'
                  }
                })}
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg border-2 border-navy/20 focus:border-lime focus:outline-none transition-colors"
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-navy font-semibold mb-2">
                Project Type *
              </label>
              <select
                {...register('projectType', { required: 'Please select a project type' })}
                id="projectType"
                className="w-full px-4 py-3 rounded-lg border-2 border-navy/20 focus:border-lime focus:outline-none transition-colors bg-white"
              >
                <option value="">Select a service...</option>
                <option value="kitchen">Kitchen Face-lift</option>
                <option value="bathroom">Boutique Bathroom</option>
                <option value="flooring">Luxury Flooring</option>
                <option value="curb-appeal">Curb Appeal</option>
                <option value="multiple">Multiple Services</option>
                <option value="other">Other</option>
              </select>
              {errors.projectType && (
                <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
              )}
            </div>

            {/* Zip Code */}
            <div>
              <label htmlFor="zipCode" className="block text-navy font-semibold mb-2">
                Zip Code *
              </label>
              <input
                {...register('zipCode', { 
                  required: 'Zip code is required',
                  pattern: {
                    value: /^\d{5}(-\d{4})?$/,
                    message: 'Please enter a valid zip code'
                  }
                })}
                type="text"
                id="zipCode"
                className="w-full px-4 py-3 rounded-lg border-2 border-navy/20 focus:border-lime focus:outline-none transition-colors"
                placeholder="12345"
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-lime text-navy px-8 py-4 rounded-full text-lg font-bold hover:bg-gold hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start My Transformation
            </button>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-lime/20 border-2 border-lime text-navy px-6 py-4 rounded-lg text-center font-semibold"
              >
                ✓ Thank you! We'll contact you within 48 hours.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
