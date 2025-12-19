'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  fullName: string
  phone: string
  primaryGoal: string
  investmentRange: string
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
            Budget Intake Form
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Tell us your goals and budget range. We'll create a customized Smart Fix plan.
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

            {/* Primary Goal */}
            <div>
              <label htmlFor="primaryGoal" className="block text-navy font-semibold mb-2">
                Primary Goal *
              </label>
              <select
                {...register('primaryGoal', { required: 'Please select a goal' })}
                id="primaryGoal"
                className="w-full px-4 py-3 rounded-lg border-2 border-navy/20 focus:border-lime focus:outline-none transition-colors bg-white"
              >
                <option value="">Select your primary goal...</option>
                <option value="resale">Increase Resale Value</option>
                <option value="personal">Personal Modernization</option>
                <option value="rental">Rental Upgrade</option>
              </select>
              {errors.primaryGoal && (
                <p className="text-red-500 text-sm mt-1">{errors.primaryGoal.message}</p>
              )}
            </div>

            {/* Investment Range */}
            <div>
              <label htmlFor="investmentRange" className="block text-navy font-semibold mb-2">
                Estimated Investment Range *
              </label>
              <select
                {...register('investmentRange', { required: 'Please select a budget range' })}
                id="investmentRange"
                className="w-full px-4 py-3 rounded-lg border-2 border-navy/20 focus:border-lime focus:outline-none transition-colors bg-white"
              >
                <option value="">Select your budget range...</option>
                <option value="10-20k">$10,000 - $20,000</option>
                <option value="20-50k">$20,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
              {errors.investmentRange && (
                <p className="text-red-500 text-sm mt-1">{errors.investmentRange.message}</p>
              )}
            </div>

            {/* Disclaimer */}
            <div className="bg-softGray border-2 border-navy/10 rounded-lg p-4">
              <p className="text-sm text-navy/70 italic">
                <span className="font-semibold">Note:</span> Optima Smart Fix works within your budget to maximize impact. All values are preliminary estimates for management and coordination purposes.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-lime text-navy px-8 py-4 rounded-full text-lg font-bold hover:bg-gold hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get My Budget Estimate
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
