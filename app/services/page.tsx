"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Menu, X, Phone, Mail, Linkedin, Scale, Building, Users, Trophy, Briefcase, GraduationCap } from "lucide-react"

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
    if (sectionId === 'about') {
      window.location.href = '/about'
      return
    }
    if (sectionId === 'contact') {
      window.location.href = '/#contact'
      return
    }
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  }

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }

  const services = [
    {
      title: "Corporate & Venture Transactions",
      description: "Navigate complex corporate and venture transactions with clarity and confidence. From initial formation to strategic financing, M&A, and ongoing corporate counsel, we structure, negotiate, and protect your business interests, ensuring a foundation for sustained growth.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80",
      alt: "Corporate Law",
      icon: <Building className="h-8 w-8" />,
      id: "corporate-venture",
      services: [
        "Entity Formation and Structuring: LLCs, C‑Corps, partnerships, governance documents.",
        "Venture Financings: Represent VC funds and startups in debt and equity financings.",
        "Mergers & Acquisitions: Buy‑side and sell‑side legal counsel for acquisitions, joint ventures, asset sales.",
        "Commercial Contracts: Licensing agreements, distribution deals, service agreements.",
        "Employment & Equity Matters: Executive contracts, stock options, ESOP plans.",
        "Compliance & Risk Advisory: Regulatory strategy, securities compliance, risk mitigation."
      ]
    },
    {
      title: "NIL & Athlete Representation",
      description: "For student‑athletes, we are more than just legal counsel; we are your strategic partners. We safeguard your eligibility while building your brand, providing practical NIL guidance, expert contract negotiation, and robust business structuring. Maximize today's opportunities and confidently prepare for a lasting career.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      alt: "Sports and Athletes",
      icon: <Trophy className="h-8 w-8" />,
      id: "nil-athlete",
      services: [
        "NIL Contract Review & Negotiation: Endorsements, sponsorships, appearances, social media deals.",
        "Brand & IP Protection: Trademark filings, publicity rights, licensing deals.",
        "Business Formation for Athletes: LLC or S‑corps for NIL income management.",
        "Tax & Compliance Guidance: 1099 vs W‑2 considerations, NCAA/CSC compliance alignment.",
        "Long‑Term Planning: Transitioning from college NIL to professional contracts, equity stakes, and royalties."
      ]
    },
    {
      title: "NIL Collective Representation",
      description: "In a rapidly evolving regulatory landscape, NIL collectives demand proactive and precise legal strategy. We provide comprehensive support for governance, compliance, donor agreements, and athlete contracts, ensuring your programs remain credible, competitive, and sustainable.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      alt: "Team Collaboration",
      icon: <Users className="h-8 w-8" />,
      id: "collective",
      services: [
        "Entity Structuring: For‑profit vs nonprofit, tax strategy, governance.",
        "Compliance Policies: NIL rule navigation, NCAA & CSC regulatory alignment.",
        "Contract Infrastructure: Templates for athlete deals, donor agreements, sponsorship partnerships.",
        "Ongoing Legal Counsel: Monthly retainer services for compliance monitoring, contract drafting, and governance updates.",
        "Audits & Risk Reviews: Annual compliance audits for donor reassurance and institutional credibility."
      ]
    },
    {
      title: "Brand & Sponsor Advisory",
      description: "Brands partnering with athletes face distinct legal and regulatory complexities. We empower sponsors and agencies to structure impactful deals, protect intellectual property, and expertly navigate NIL and advertising regulations, ensuring effective and fully compliant campaigns.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      alt: "Brand Strategy",
      icon: <Briefcase className="h-8 w-8" />,
      id: "brand-sponsor",
      services: [
        "Athlete Sponsorship Deals: Negotiation, drafting, compliance checks.",
        "Campaign Structuring: Social media, merchandise, appearances, joint ventures.",
        "IP & Licensing Agreements: Co‑branding, trademarks, content rights.",
        "Regulatory Compliance: State law, NCAA rules, FTC advertising guidelines."
      ]
    },
    {
      title: "University & Institutional Counsel",
      description: "Colleges and athletic departments are navigating the unprecedented shifts of the NIL era. We provide essential policy drafting, comprehensive compliance training, and rigorous contract oversight. Our expertise protects your institution, supports your student‑athletes, and preserves the integrity of your programs.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
      alt: "University Campus",
      icon: <GraduationCap className="h-8 w-8" />,
      id: "university-institutional",
      services: [
        "Policy Drafting: NIL handbooks, compliance guides, contract templates.",
        "Workshops & Training: For compliance officers, athletes, and coaches.",
        "Third‑Party Risk Management: Vetting contracts with collectives and sponsors.",
        "Legal Audits: Assessing NIL ecosystem for compliance and reputational risk.",
        "Strategic Advisory: Supporting schools in revenue‑sharing and post‑House v. NCAA transition."
      ]
    }
  ]

  return (
    <div className="min-h-full bg-gray-50 text-gray-900 font-inter">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full backdrop-blur-sm border-b z-50 bg-black/95 border-gray-800"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Brand */}
            <motion.div 
              className="flex gap-3 items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.location.href = '/'}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src="/1x/logo.png" 
                alt="Momentum Legal" 
                className="h-10 w-auto filter invert"
              />
              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-poppins font-semibold tracking-tight text-white uppercase">
                    <span className="text-2xl">M</span>OMENTUM <span className="text-2xl">L</span>EGAL
                  </span>
                </div>
                <span className="text-xs font-poppins font-normal tracking-wide text-gray-300 uppercase">
                  a Professional Corporation
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-sm font-normal transition-colors text-gray-300 hover:text-white"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-normal transition-colors text-gray-300 hover:text-white"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-sm font-normal transition-colors text-white font-medium"
              >
                Services
              </button>
              <div className="h-5 w-px bg-gray-600"></div>
              <a href="https://www.linkedin.com/company/momentum-legal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/momentumlegal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <motion.button 
                onClick={() => window.location.href = '/contact'}
                className="px-6 py-2.5 text-sm font-medium transition-colors bg-white hover:bg-gray-100 text-black"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden border-t border-gray-700 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
              >
                <button onClick={() => scrollToSection('home')} className="block w-full text-left text-sm font-normal text-gray-300 hover:text-white">Home</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-sm font-normal text-gray-300 hover:text-white">About</button>
                <button onClick={() => scrollToSection('services')} className="block w-full text-left text-sm font-medium text-white">Services</button>
                <button onClick={() => window.location.href = '/contact'} className="w-full mt-4 px-6 py-2.5 text-sm font-medium bg-white text-black">
                  Schedule Consultation
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
            alt="Legal services and expertise"
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
                  Our Services
                </motion.div>

                <motion.h1 
                  className="lg:text-7xl leading-none text-5xl font-light text-white tracking-tight"
                  variants={fadeUp}
                >
                  Legal
                  <br />
                  <span className="font-medium">Services</span>
                </motion.h1>

                <motion.p 
                  className="text-lg lg:text-xl font-light leading-relaxed max-w-3xl text-gray-200"
                  variants={fadeUp}
                >
                  At Momentum Legal, we deliver more than just legal services—we provide the clarity, protection, and momentum you need to succeed. Whether you're closing a venture deal, navigating NIL opportunities, or building institutional compliance, our mission is to turn your complex challenges into lasting opportunities. We help you move forward with confidence.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="grid gap-8 lg:gap-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                id={service.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                  {/* Service Image & Icon */}
                  <motion.div 
                    className="lg:col-span-1"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className="aspect-square overflow-hidden rounded-2xl bg-gray-900">
                        <img 
                          src={service.image} 
                          alt={service.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 group-hover:bg-black/10 transition-colors duration-300 bg-black/20"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black">
                            {service.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Service Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-4 text-gray-900">
                        <span className="font-medium">{service.title}</span>
                      </h2>
                      <p className="text-lg font-light leading-relaxed text-gray-600 mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-3">
                      <h3 className="text-base font-medium text-gray-900 mb-4">Key Services:</h3>
                      <ul className="space-y-3">
                        {service.services.map((item, i) => {
                          const [label, description] = item.split(': ')
                          return (
                            <motion.li 
                              key={i}
                              className="flex items-start gap-3"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></div>
                              <div className="text-sm font-light leading-relaxed text-gray-600">
                                <span className="font-normal text-gray-800">{label}:</span> {description}
                              </div>
                            </motion.li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Separator */}
                {index < services.length - 1 && (
                  <div className="mt-12 pt-12 border-t border-gray-100"></div>
                )}
              </motion.div>
            ))}
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
              Ready to get
              <br />
              <span className="font-medium">started?</span>
            </h2>
            <p className="text-lg font-light leading-relaxed max-w-2xl mx-auto text-gray-300 mb-12">
              Schedule a free consultation to discuss how our legal services can support your goals and drive your success forward.
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
                onClick={() => scrollToSection('about')}
                className="border px-8 py-4 text-sm font-medium transition-colors border-gray-600 hover:border-white text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn About Our Team
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
                  src="/1x/logo.png" 
                  alt="Momentum Legal" 
                  className="h-10 w-auto filter invert"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-poppins font-semibold tracking-tight uppercase">
                    <span className="text-2xl">M</span>OMENTUM <span className="text-2xl">L</span>EGAL
                  </span>
                  <span className="text-xs font-poppins font-normal tracking-wide text-gray-300 uppercase">
                    a Professional Corporation
                  </span>
                </div>
              </div>
              <p className="text-sm font-light leading-relaxed max-w-md mb-6 text-gray-400">
                Corporate, NIL, and institutional counsel—delivered with clarity, speed, and precision.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/momentum-legal" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/momentumlegal" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700" aria-label="X">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="mailto:intake@momentumlegal.com" className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4 tracking-wide">NAVIGATION</h4>
              <div className="space-y-3 text-sm font-light text-gray-400">
                <button onClick={() => scrollToSection('home')} className="block transition-colors hover:text-white">Home</button>
                <button onClick={() => scrollToSection('about')} className="block transition-colors hover:text-white">About</button>
                <button onClick={() => scrollToSection('services')} className="block transition-colors text-white">Services</button>
                <button onClick={() => scrollToSection('contact')} className="block transition-colors hover:text-white">Contact</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-4 tracking-wide">SERVICES</h4>
              <div className="space-y-3 text-sm font-light text-gray-400">
                <span className="block">Corporate & Venture</span>
                <span className="block">NIL & Athletes</span>
                <span className="block">NIL Collectives</span>
                <span className="block">Brand & Sponsors</span>
                <span className="block">University Counsel</span>
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