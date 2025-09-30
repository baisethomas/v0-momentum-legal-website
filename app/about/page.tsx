"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Phone, Mail, Linkedin, Scale, Award, Building, Briefcase } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { fadeUp, stagger } from "@/lib/motion"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.location.href = '/'
      return
    }
    if (sectionId === 'services' || sectionId === 'contact') {
      window.location.href = `/#${sectionId}`
      return
    }
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <div className="min-h-full bg-gray-50 text-gray-900 font-inter">
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/Office Space (2).jpg"
            alt="Modern conference room with city skyline view"
            fill
            priority
            className="object-cover will-change-transform"
            style={{
              transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
              scale: 1.2,
            }}
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 max-w-screen-2xl lg:p-12 mx-auto pt-6 px-6 pb-6 w-full">
          <div className="flex items-center min-h-[60vh]">
            <motion.div 
              className="w-full max-w-4xl"
              variants={stagger}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              <div className="space-y-8">
                <motion.div 
                  className="inline-flex gap-2 w-fit text-xs font-medium text-white bg-white/20 backdrop-blur-sm pt-2 pr-4 pb-2 pl-4 items-center rounded-full"
                  variants={fadeUp}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  About Momentum Legal
                </motion.div>

                <motion.h1 
                  className="lg:text-7xl leading-none text-5xl font-light text-white tracking-tight"
                  variants={fadeUp}
                >
                  About
                  <br />
                  <span className="font-medium">Momentum Legal</span>
                </motion.h1>

                <motion.p 
                  className="text-lg lg:text-xl font-light leading-relaxed max-w-3xl text-gray-200"
                  variants={fadeUp}
                >
                  Discover the vision, values, and expertise that drive our commitment to excellence in legal representation.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-8 text-gray-900">
              Our
              <br />
              <span className="font-medium">Mission</span>
            </h2>
            <p className="text-lg lg:text-xl font-light leading-relaxed text-gray-600 mb-12">
              Our mission at Momentum Legal is to empower you to seize opportunities with clarity, confidence, and creative legal solutions. We thrive at the dynamic intersection of business, sports, and innovation, providing practical guidance for entrepreneurs, athletes, and institutions in fast-moving markets. We are dedicated to protecting your rights, minimizing risk, and fostering lasting growth for those who dare to redefine what's possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wilson Hall Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Wilson's Info */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div id="meet-the-founder">
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 text-gray-900">
                  Meet the Founder
                  <br />
                  <span className="font-medium">Wilson Hall</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg font-light leading-relaxed text-gray-600">
                <p>
                  Momentum Legal was founded by Wilson Hall, a corporate and business transactions attorney with a proven track record in complex deals. He has guided venture-backed startups, including those valued at over $1 billion, and advised Fortune 500 companies through global business challenges.
                </p>
                
                <p>
                  As the son of an entrepreneur, Wilson brings a unique, hands-on perspective to every client relationship. He understands the drive to build something new and the critical role of trusted advisors in transforming vision into reality.
                </p>
                
                <p>
                  Wilson's legal foundation was forged at Santa Clara University School of Law, where he earned his Juris Doctor and a High Tech Law Certificate with an Intellectual Property Specialization. This Silicon Valley training equipped him with expertise in both cutting-edge technologies and traditional business law.
                </p>
                
                <p>
                  Momentum Legal embodies Wilson's core values: initiative, innovation, and integrity. This firm was built for clients who are ready to take charge, pursue ambitious goals, and partner with a lawyer who not only commands the law, but deeply understands the fast-paced business realities of today's competitive markets.
                </p>

                <p>
                Prior to founding Momentum Legal, Wilson was an associate at two global and AmLaw 100 law firms.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Visual & Values */}
            <motion.div 
              className="lg:col-span-1 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Founder Headshot */}
              <div className="bg-white p-8 border border-gray-100 text-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <Image
                    src="/Hall Wilson.jpg"
                    alt="Wilson Hall, Founder of Momentum Legal"
                    width={280}
                    height={280}
                    className="w-64 h-64 object-cover rounded-full mx-auto border-4 border-gray-100"
                    priority
                  />
                </motion.div>
                <h3 className="text-xl font-medium mb-2 text-gray-900">Wilson Hall</h3>
                <p className="text-sm text-gray-600">Founder & Principal Attorney</p>
              </div>

              {/* Core Values */}
              <div className="bg-white p-8 border border-gray-100">
                <h3 className="text-lg font-medium mb-6 text-gray-900">Core Values</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Award className="h-5 w-5" />, title: "Initiative", description: "Taking proactive action for client success" },
                    { icon: <Building className="h-5 w-5" />, title: "Innovation", description: "Leveraging cutting-edge solutions and strategies" },
                    { icon: <Briefcase className="h-5 w-5" />, title: "Integrity", description: "Maintaining the highest ethical standards" }
                  ].map((value, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-black mt-1">
                        {value.icon}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{value.title}</div>
                        <div className="text-sm text-gray-600">{value.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 text-gray-900">
                Education &
                <br />
                <span className="font-medium">Credentials</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: "Legal Education",
                  items: [
                    { label: "Juris Doctor", detail: "Santa Clara University School of Law, 2022" },
                    { label: "High Tech Law Certificate", detail: "IP Specialization with Honors" }
                  ]
                },
                {
                  category: "Academic Background",
                  items: [
                    { label: "Bachelor of Arts", detail: "Sonoma State University, 2019" },
                    { label: "Field of Study", detail: "Criminology and Criminal Justice Studies" }
                  ]
                },
                {
                  category: "Bar Admissions",
                  items: [
                    { label: "California"}
                  ]
                },
                {
                  category: "Specializations",
                  items: [
                    { label: "Corporate Transactions", detail: "General corporate, VC funds, startups, M&A" },
                    { label: "NIL & Sports Law", detail: "Athletes, brands, collectives, compliance" }
                  ]
                }
              ].map((section, index) => (
                <motion.div 
                  key={index}
                  className="p-6 border border-gray-100 bg-gray-50"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-base font-medium mb-4 text-gray-900">{section.category}</h3>
                  <div className="space-y-3">
                    {section.items.map((item, i) => (
                      <div key={i}>
                        <div className="font-normal text-gray-800 text-sm">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.detail}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-8">
              Ready to partner with
              <br />
              <span className="font-medium">Momentum Legal?</span>
            </h2>
            <p className="text-lg font-light leading-relaxed max-w-2xl mx-auto text-gray-300 mb-12">
              Schedule a free consultation with Wilson Hall and discover how Momentum Legal can drive your vision forward with clarity, confidence, and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 text-sm font-medium transition-colors flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button 
                onClick={() => window.location.href = '/services'}
                className="border px-8 py-4 text-sm font-medium transition-colors border-gray-600 hover:border-white text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
              </motion.button>
            </div>
          </motion.div>
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
                <a href="/about" className="block transition-colors text-white">About</a>
                <a href="/services" className="block transition-colors hover:text-white">Services</a>
                <a href="/contact" className="block transition-colors hover:text-white">Contact</a>
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