"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, Linkedin, MapPin, Clock, CheckCircle, Check, Send } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { fadeUp, stagger } from "@/lib/motion"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    services: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.location.href = '/'
      return
    }
    if (sectionId === 'about') {
      window.location.href = '/about'
      return
    }
    if (sectionId === 'services') {
      window.location.href = '/services'
      return
    }
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }


  return (
    <div className="min-h-full bg-gray-50 text-gray-900 font-inter">
      <Navigation currentPage="contact" />

      {/* Hero Section */}
      <section className="pt-20">
        <div className="max-w-screen-2xl lg:p-12 mx-auto pt-6 px-6 pb-6">
          <div className="min-h-[60vh] flex items-center">
            <motion.div 
              className="w-full max-w-4xl"
              variants={stagger}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              <div className="space-y-8">
                <motion.div 
                  className="inline-flex gap-2 w-fit text-xs font-medium text-gray-700 bg-gray-100 pt-2 pr-4 pb-2 pl-4 items-center"
                  variants={fadeUp}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  Contact Us
                </motion.div>

                <motion.h1 
                  className="lg:text-7xl leading-none text-5xl font-light text-gray-900 tracking-tight"
                  variants={fadeUp}
                >
                  Let's build your
                  <br />
                  <span className="font-medium">Momentum</span>
                </motion.h1>

                <motion.p 
                  className="text-lg lg:text-xl font-light leading-relaxed max-w-3xl text-gray-600"
                  variants={fadeUp}
                >
                  Ready to drive your vision forward? Connect with us today for a free consultation and discover how we can turn your complex challenges into lasting opportunities.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Contact Information */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 ring-1 ring-emerald-200 text-xs text-emerald-800 bg-emerald-100 rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Now booking Q4 2025
                </div>
                <h4 className="text-xl sm:text-2xl text-gray-900 font-medium tracking-tight">
                  Ready to drive your vision forward?
                </h4>
                <ul className="text-sm text-gray-700 space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>Free consultation and case assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>Clear pricing, flexible engagement models</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 text-sm">
                  <a href="mailto:info@momentumlegalpc.com" className="inline-flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition">
                    <Mail className="w-4 h-4" strokeWidth={1.5} />
                    info@momentumlegalpc.com
                  </a>
                  <span className="text-gray-400 hidden sm:inline">•</span>
                  <a href="tel:415-404-9232" className="inline-flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition">
                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                    415-404-9232
                  </a>
                </div>
              </div>

              {!isSubmitted ? (
                <form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                      placeholder="Your name" 
                      className="w-full placeholder-gray-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-gray-900 bg-white border-gray-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                      placeholder="you@company.com" 
                      className="w-full placeholder-gray-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-gray-900 bg-white border-gray-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-medium text-gray-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company name" 
                      className="w-full placeholder-gray-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-gray-900 bg-white border-gray-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"
                    />
                  </div>
                  
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-medium text-gray-700 mb-2">Timeline</label>
                    <select 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full appearance-none outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-gray-900 bg-white border-gray-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2m">1–2 months</option>
                      <option value="3-6m">3–6 months</option>
                      <option value="6m+">6+ months</option>
                    </select>
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-medium text-gray-700 mb-2">Services</label>
                    <select 
                      name="services"
                      value={formData.services}
                      onChange={handleInputChange}
                      className="w-full appearance-none outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-gray-900 bg-white border-gray-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"
                    >
                      <option value="">Select service</option>
                      <option value="corporate">Corporate & Venture</option>
                      <option value="nil-athlete">NIL & Athlete Rep</option>
                      <option value="nil-collective">NIL Collective</option>
                      <option value="brand-sponsor">Brand & Sponsor Advisory</option>
                      <option value="university">University Counsel</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-gray-700 mb-2">Legal matter details</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3} 
                      placeholder="Describe your legal needs, goals, timeline..." 
                      className="w-full placeholder-gray-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-gray-900 bg-white border-gray-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <p className="text-xs text-gray-600">We'll get back to you within 24 hours with next steps.</p>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="inline-flex gap-2 ring-1 ring-emerald-300 hover:bg-emerald-300 transition text-sm font-medium text-white bg-emerald-500 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow items-center disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" strokeWidth={1.5} />
                      {isSubmitting ? 'Sending...' : 'Send inquiry'}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div 
                  className="lg:col-span-2 text-center py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-medium mb-2 text-gray-900">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        budget: '',
                        timeline: '',
                        services: '',
                        message: ''
                      })
                    }}
                    className="px-6 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black text-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo-latest.png" 
                  alt="Momentum Legal" 
                  className="h-10 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-poppins font-semibold tracking-tight uppercase">
                    <span className="text-2xl">M</span>OMENTUM <span className="text-2xl">L</span>EGAL
                  </span>
                  <span className="text-[10px] font-poppins font-normal tracking-wide text-gray-300 uppercase">
                    a Professional Corporation
                  </span>
                </div>
              </div>
              <p className="text-sm font-light leading-relaxed max-w-md mb-4 text-gray-400">
                Corporate, NIL, and institutional counsel—delivered with clarity, speed, and precision.
              </p>
              <div className="text-sm font-light text-gray-400 mb-6">
                <p>28 Geary St., Suite 650 #193</p>
                <p>San Francisco, CA 94108</p>
                <p className="mt-2">
                  <a href="tel:415-404-9232" className="hover:text-gray-300 transition-colors">415-404-9232</a>
                </p>
              </div>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/momentum-legal" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/momentumlegal" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700" aria-label="X">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="mailto:info@momentumlegalpc.com" className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4 tracking-wide">NAVIGATION</h4>
              <div className="space-y-3 text-sm font-light text-gray-400">
                <a href="/" className="block transition-colors hover:text-white">Home</a>
                <a href="/about" className="block transition-colors hover:text-white">About</a>
                <a href="/services" className="block transition-colors hover:text-white">Services</a>
                <a href="/contact" className="block transition-colors text-white">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-4 tracking-wide">SERVICES</h4>
              <div className="space-y-3 text-sm font-light text-gray-400">
                <a href="/services#corporate-venture" className="block transition-colors hover:text-white">Corporate & Venture</a>
                <a href="/services#nil-athlete" className="block transition-colors hover:text-white">NIL & Athletes</a>
                <a href="/services#collective" className="block transition-colors hover:text-white">NIL Collectives</a>
                <a href="/services#brand-sponsor" className="block transition-colors hover:text-white">Brand & Sponsors</a>
                <a href="/services#university-institutional" className="block transition-colors hover:text-white">University Counsel</a>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-gray-500 border-gray-800">
            <p>© 2025 Momentum Legal. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}