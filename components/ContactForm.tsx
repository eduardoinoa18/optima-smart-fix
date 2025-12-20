'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  fullName: string
  email: string
  phone: string
  preferredContact: string
  primaryGoal: string
  investmentRange: string
  timeline: string
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

  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ''
    const whatsappText = encodeURIComponent("Hi! I'd like a free consultation and budget estimate for my renovation project.")
  const whatsappLink = whatsappPhone ? `https://wa.me/${whatsappPhone}?text=${whatsappText}` : '#'

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-softGray">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-lime/10 text-lime px-4 py-2 rounded-full text-sm font-bold mb-4">
            ⚡ Free Consultation — No Obligation
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Get Your Custom Renovation Plan
          </h2>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto mb-8">
            Tell us about your project. Our team will prepare a detailed budget breakdown and timeline tailored to your goals.
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-navy/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Avg. Response: 2 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-lime" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Vetted Affiliates Only</span>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp Quick Option */}
        {whatsappPhone && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 border-2 border-[#25D366]/30 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.52 3.48A11.77 11.77 0 0 0 12.06 0C5.47.03.14 5.36.11 11.95A11.76 11.76 0 0 0 12 23.71h.01c2.07 0 4.11-.54 5.9-1.57l3.54 1.01-1.02-3.44a11.76 11.76 0 0 0 .09-16.23Z" />
                      <path d="M8.26 7.96c-.24.13-.65.47-.74.9-.09.43-.21 1.25.88 2.78 1.09 1.53 2.55 2.63 2.94 2.83.39.2 1.49.57 2.05.36.56-.21 1.22-.79 1.38-1.36.16-.57.16-1.06.11-1.16-.05-.1-.18-.15-.38-.26-.21-.12-1.24-.61-1.43-.68-.19-.07-.33-.1-.47.1-.14.21-.54.68-.66.82-.12.14-.24.16-.44.06-.2-.1-.83-.3-1.58-.97-.58-.5-.97-1.11-1.09-1.3-.12-.19-.01-.29.09-.39.09-.09.21-.24.31-.36.1-.12.13-.2.19-.33.06-.13.03-.24-.01-.33-.04-.09-.47-1.16-.65-1.59-.17-.43-.36-.37-.49-.34-.12.03-.26.06-.4.14Z" fill="#25D366" />
                    </svg>
                    <h3 className="text-2xl font-bold text-navy">Prefer WhatsApp?</h3>
                  </div>
                  <p className="text-navy/70 mb-4 md:mb-0">
                    Chat directly with our team for instant answers and a faster quote.
                  </p>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                >
                  Start WhatsApp Chat →
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-navy/20"></div>
          <span className="text-navy/40 font-semibold text-sm">OR SUBMIT FORM BELOW</span>
          <div className="flex-1 h-px bg-navy/20"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-softGray rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
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

              <div>
                <label htmlFor="email" className="block text-navy font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-navy/20 focus:border-lime focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Phone and Preferred Contact */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-navy font-semibold mb-2">
                  Phone Number (WhatsApp Preferred) *
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

              <div>
                <label htmlFor="preferredContact" className="block text-navy font-semibold mb-2">
                  Preferred Contact Method *
                </label>
                <select
                  {...register('preferredContact', { required: 'Please select contact method' })}
                  id="preferredContact"
                  className="w-full px-4 py-3 rounded-lg border-2 border-navy/20 focus:border-lime focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select method...</option>
                  <option value="whatsapp">💬 WhatsApp (Fastest)</option>
                  <option value="phone">📞 Phone Call</option>
                  <option value="email">📧 Email</option>
                </select>
                {errors.preferredContact && (
                  <p className="text-red-500 text-sm mt-1">{errors.preferredContact.message}</p>
                )}
              </div>
            </div>

            {/* Goal, Budget, Timeline Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="primaryGoal" className="block text-navy font-semibold mb-2">
                  Project Goal *
                </label>
                <select
                  {...register('primaryGoal', { required: 'Please select a goal' })}
                  id="primaryGoal"
                  className="w-full px-4 py-3 rounded-lg border-2 border-navy/20 focus:border-lime focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select goal...</option>
                  <option value="resale">💰 Increase Resale Value</option>
                  <option value="personal">🏠 Personal Modernization</option>
                  <option value="rental">🔑 Rental Property Upgrade</option>
                  <option value="other">🎯 Other</option>
                </select>
                {errors.primaryGoal && (
                  <p className="text-red-500 text-sm mt-1">{errors.primaryGoal.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="investmentRange" className="block text-navy font-semibold mb-2">
                  Budget Range *
                </label>
                <select
                  {...register('investmentRange', { required: 'Please select a budget range' })}
                  id="investmentRange"
                  className="w-full px-4 py-3 rounded-lg border-2 border-navy/20 focus:border-lime focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select budget...</option>
                  <option value="10-20k">$10K - $20K</option>
                  <option value="20-50k">$20K - $50K</option>
                  <option value="50-100k">$50K - $100K</option>
                  <option value="100k+">$100K+</option>
                </select>
                {errors.investmentRange && (
                  <p className="text-red-500 text-sm mt-1">{errors.investmentRange.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="timeline" className="block text-navy font-semibold mb-2">
                  Timeline *
                </label>
                <select
                  {...register('timeline', { required: 'Please select timeline' })}
                  id="timeline"
                  className="w-full px-4 py-3 rounded-lg border-2 border-navy/20 focus:border-lime focus:outline-none transition-colors bg-white"
                >
                  <option value="">When to start?</option>
                  <option value="asap">⚡ ASAP</option>
                  <option value="1-3months">📅 1-3 Months</option>
                  <option value="3-6months">🗓️ 3-6 Months</option>
                  <option value="planning">🤔 Just Planning</option>
                </select>
                {errors.timeline && (
                  <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
                )}
              </div>
            </div>

            {/* Trust & Privacy */}
            <div className="bg-gradient-to-br from-navy/5 to-lime/5 border-2 border-navy/10 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-lime flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-navy font-semibold mb-2">Your Privacy is Protected</p>
                  <p className="text-sm text-navy/70 leading-relaxed">
                    We respect your information. No spam, no pressure. Our team will review your goals and provide a detailed breakdown—no surprises, just transparent pricing and a clear plan.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-navy/10">
                <span className="text-xs bg-white px-3 py-1 rounded-full text-navy/60 font-medium">🔒 SSL Encrypted</span>
                <span className="text-xs bg-white px-3 py-1 rounded-full text-navy/60 font-medium">✅ GDPR Compliant</span>
                <span className="text-xs bg-white px-3 py-1 rounded-full text-navy/60 font-medium">⚡ 2-Hour Response</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-lime to-lime/90 text-navy px-8 py-5 rounded-full text-xl font-bold hover:from-gold hover:to-gold/90 hover:text-white transition-all duration-300 shadow-2xl hover:shadow-lime/50 transform hover:scale-[1.02] flex items-center justify-center gap-3 group"
              >
                <span>Get My Free Consultation & Estimate</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="text-center text-sm text-navy/50">
                By submitting, you agree to receive follow-up communication. Unsubscribe anytime.
              </p>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-lime/20 to-lime/10 border-2 border-lime text-navy px-8 py-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-lime flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Request Received! 🎉</h4>
                    <p className="text-navy/80 mb-3">Thank you for choosing Optima Smart Fix. Here's what happens next:</p>
                    <ul className="space-y-2 text-sm text-navy/70">
                      <li className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-lime/20 text-lime flex items-center justify-center text-xs font-bold">1</span>
                        <span>Our team reviews your project (within 2 hours)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-lime/20 text-lime flex items-center justify-center text-xs font-bold">2</span>
                        <span>We prepare a custom budget breakdown & timeline</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-lime/20 text-lime flex items-center justify-center text-xs font-bold">3</span>
                        <span>You receive a detailed plan via your preferred contact method</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-xs text-navy/60 italic">Check your inbox (and spam folder) for confirmation.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
