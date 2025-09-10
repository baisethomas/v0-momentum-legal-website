"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X, Phone, Mail, Linkedin, Twitter, MapPin } from "lucide-react"

export default function MomentumLegalV2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }

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
            >
              <img 
                src="/1x/logo.png" 
                alt="Momentum Legal" 
                className="h-8 w-auto filter invert"
              />
              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-poppins font-semibold tracking-tight text-white uppercase">MOMENTUM LEGAL</span>
                </div>
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
                onClick={() => window.location.href = '/about'}
                className="text-sm font-normal transition-colors text-gray-300 hover:text-white"
              >
                About
              </button>
              <button 
                onClick={() => window.location.href = '/services'}
                className="text-sm font-normal transition-colors text-gray-300 hover:text-white"
              >
                Services
              </button>
              <div className="h-5 w-px bg-gray-600"></div>
              <a href="https://www.linkedin.com/company/momentum-legal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/momentumlegal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5" />
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
              <div className="space-y-4">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left text-sm font-normal text-gray-300 hover:text-white">Home</button>
                <button onClick={() => window.location.href = '/about'} className="block w-full text-left text-sm font-normal text-gray-300 hover:text-white">About</button>
                <button onClick={() => window.location.href = '/services'} className="block w-full text-left text-sm font-normal text-gray-300 hover:text-white">Services</button>
                <button onClick={() => window.location.href = '/contact'} className="w-full mt-4 px-6 py-2.5 text-sm font-medium bg-white text-black">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="max-w-screen-2xl lg:p-12 mx-auto pt-6 px-6 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-screen">
            {/* Left Column - Text */}
            <motion.div 
              className="lg:col-span-5 flex flex-col justify-center"
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
                  Speed & Precision
                </motion.div>

                <div className="space-y-6">
                  <motion.h1 
                    className="lg:text-7xl leading-none text-5xl font-light text-gray-900 tracking-tight"
                    variants={fadeUp}
                  >
                    Momentum<br />
                    <span className="font-medium">Legal</span><br />
                    <span className="text-gray-400">the Power Behind Your Next Move</span>
                  </motion.h1>

                  <motion.p 
                    className="text-lg lg:text-xl font-light leading-relaxed max-w-lg text-gray-600"
                    variants={fadeUp}
                  >
                    Business, NIL, and institutional counsel built for speed, precision, and clarity.
                  </motion.p>

                  <motion.p 
                    className="text-sm lg:text-base font-light leading-relaxed max-w-lg text-gray-600"
                    variants={fadeUp}
                  >
                    We partner with founders, athletes, brands, collectives, and universities to structure deals, protect IP, and navigate evolving regulations with practical, outcome‑focused advice.
                  </motion.p>
                </div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  variants={fadeUp}
                >
                  <motion.button 
                    onClick={() => window.location.href = '/contact'}
                    className="px-8 py-4 text-sm font-medium transition-colors flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button 
                    onClick={() => scrollToSection('services')}
                    className="border px-8 py-4 text-sm font-medium transition-colors border-gray-300 hover:border-black text-gray-900"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Services
                  </motion.button>
                </motion.div>

                <motion.div 
                  className="text-sm text-gray-700"
                  variants={fadeUp}
                >
                  Move quickly. Get it right the first time.
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Showcase Grid */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4 lg:gap-6 h-full">
                {/* Large Featured */}
                <motion.div 
                  className="col-span-2 row-span-2 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 lg:h-96 overflow-hidden bg-gray-900">
                    <img 
                      src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80" 
                      alt="Deal Room" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 group-hover:bg-black/10 transition-colors duration-300 bg-black/20"></div>
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 text-xs font-medium bg-white text-black">FEATURED</span>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-2xl font-light mb-1">Corporate & Venture</div>
                      <div className="text-sm opacity-90">Formation, Financing, M&A</div>
                      <div className="text-xs opacity-75 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        California • Nationwide
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Small Cards */}
                {[
                  {
                    image: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80",
                    title: "NIL & Athletes",
                    subtitle: "Contracts, Brand, Compliance"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80",
                    title: "NIL Collectives",
                    subtitle: "Governance & Compliance"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
                    title: "Universities",
                    subtitle: "Policy & Training"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
                    title: "Brands & Sponsors",
                    subtitle: "Deals & Compliance"
                  }
                ].map((card, index) => (
                  <motion.div 
                    key={index}
                    className="group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-32 lg:h-40 overflow-hidden bg-gray-900">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/30"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <div className="text-sm font-light">{card.title}</div>
                        <div className="text-xs opacity-90">{card.subtitle}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>  
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white pt-24 pb-24">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Section Header */}
            <motion.div 
              className="lg:col-span-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 text-gray-900">
                Our
                <br />
                <span className="font-medium">Services</span>
              </h2>
              <p className="text-lg font-light leading-relaxed text-gray-600">
                Practical, business‑first counsel across corporate, NIL, and institutional needs—so you can move decisively and stay compliant.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Service Cards */}
                {[
                  {
                    title: "Corporate & Venture Transactions",
                    description: "Navigate complex corporate and venture transactions with clarity and confidence. From initial formation to strategic financing, M&A, and ongoing corporate counsel, we structure, negotiate, and protect your business interests, ensuring a foundation for sustained growth.",
                    image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80",
                    alt: "Corporate Law",
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
                    services: [
                      "Athlete Sponsorship Deals: Negotiation, drafting, compliance checks.",
                      "Campaign Structuring: Social media, merchandise, appearances, joint ventures.",
                      "IP & Licensing Agreements: Co‑branding, trademarks, content rights.",
                      "Regulatory Compliance: State law, NCAA rules, FTC advertising guidelines."
                    ]
                  }
                ].slice(0, 4).map((service, index) => (
                  <motion.div 
                    key={index}
                    className={`group p-8 border transition-colors cursor-pointer border-gray-100 hover:border-gray-200 ${index === 3 ? 'sm:col-span-2' : ''}`}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 w-full h-28 overflow-hidden rounded-lg">
                      <img 
                        src={service.image} 
                        alt={service.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-sm font-light leading-relaxed text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="text-sm font-light leading-relaxed text-gray-600 space-y-2">
                      {service.services.map((item, i) => {
                        const [label, description] = item.split(': ')
                        return (
                          <li key={i}>
                            <span className="font-normal text-gray-800">{label}:</span> {description}
                          </li>
                        )
                      })}
                    </ul>
                  </motion.div>
                ))}

                {/* University & Institutional Counsel - Full Width */}
                <motion.div 
                  className="group p-8 border transition-colors cursor-pointer border-gray-100 hover:border-gray-200 sm:col-span-2"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 w-full h-28 overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" 
                      alt="University Campus"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-3 text-gray-900">University & Institutional Counsel</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-600 mb-4">
                    Colleges and athletic departments are navigating the unprecedented shifts of the NIL era. We provide essential policy drafting, comprehensive compliance training, and rigorous contract oversight. Our expertise protects your institution, supports your student‑athletes, and preserves the integrity of your programs.
                  </p>
                  <ul className="text-sm font-light leading-relaxed text-gray-600 space-y-2">
                    {[
                      "Policy Drafting: NIL handbooks, compliance guides, contract templates.",
                      "Workshops & Training: For compliance officers, athletes, and coaches.",
                      "Third‑Party Risk Management: Vetting contracts with collectives and sponsors.",
                      "Legal Audits: Assessing NIL ecosystem for compliance and reputational risk.",
                      "Strategic Advisory: Supporting schools in revenue‑sharing and post‑House v. NCAA transition."
                    ].map((item, i) => {
                      const [label, description] = item.split(': ')
                      return (
                        <li key={i}>
                          <span className="font-normal text-gray-800">{label}:</span> {description}
                        </li>
                      )
                    })}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>      
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <motion.div 
              className="lg:col-span-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 text-gray-900">
                About
                <br />
                <span className="font-medium">Momentum Legal</span>
              </h2>
              <p className="text-lg font-light leading-relaxed text-gray-600">
                We deliver modern corporate and NIL counsel to founders, athletes, brands, collectives, and institutions—clear advice, fast execution, and durable outcomes.
              </p>
            </motion.div>
            <motion.div 
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-8 border border-gray-100 bg-white">
                <h3 className="text-base font-medium mb-3 text-gray-900">About the Founder — Wilson Hall</h3>
                <p className="text-sm font-light leading-relaxed text-gray-600">
                  Wilson advises across corporate transactions, NIL matters, and institutional policy, blending practical deal‑making with thoughtful compliance and risk management.
                </p>
              </div>
              <div className="p-8 border border-gray-100 bg-white">
                <h3 className="text-base font-medium mb-3 text-gray-900">Credentials</h3>
                <ul className="text-sm font-light leading-relaxed text-gray-600 space-y-2">
                  <li><span className="font-normal text-gray-800">Juris Doctor —</span> Santa Clara University School of Law, 2022</li>
                  <li><span className="font-normal text-gray-800">High Tech Law Certificate —</span> IP Specialization with Honors</li>
                  <li><span className="font-normal text-gray-800">Bachelor of Arts —</span> Sonoma State University, 2019 (Criminology and Criminal Justice Studies)</li>
                  <li><span className="font-normal text-gray-800">Bar Admissions —</span> California</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { number: "50+", label: "TRANSACTIONS CLOSED" },
              { number: "30+", label: "INSTITUTIONS SUPPORTED" },
              { number: "100%", label: "NIL ELIGIBILITY MAINTAINED" },
              { number: "5★", label: "CLIENT SATISFACTION" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl lg:text-5xl font-light mb-2 text-gray-900">{stat.number}</div>
                <div className="text-sm font-medium tracking-wide text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight">
                Let's build your
                <br />
                <span className="font-medium">Momentum</span>
              </h2>
              <p className="text-lg font-light leading-relaxed max-w-lg text-gray-300">
                Ready to drive your vision forward? Connect with us today.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 border flex items-center justify-center border-gray-600">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-light">+1 (555) 555-0117</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 border flex items-center justify-center border-gray-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-light">intake@momentumlegal.com</span>
                </div>
              </div>
            </div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600"
                />
              </div>
              <input 
                type="email" 
                placeholder="Work Email" 
                className="w-full bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600"
              />
              <input 
                type="text" 
                placeholder="Company / Organization (optional)" 
                className="w-full bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600"
              />
              <textarea 
                placeholder="Briefly describe your matter (corporate, NIL, institution)..." 
                rows={4}
                className="w-full bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors resize-none border-gray-600"
              ></textarea>
              <motion.button 
                className="w-full py-4 text-sm font-medium transition-colors bg-white text-black hover:bg-gray-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Inquiry
              </motion.button>
            </motion.div>
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
                  className="h-8 w-auto filter invert"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-poppins font-semibold tracking-tight uppercase">MOMENTUM LEGAL</span>
                  <span className="text-[12px] text-gray-400">The Power Behind Your Next Move.</span>
                </div>
              </div>
              <p className="text-sm font-light leading-relaxed max-w-md mb-6 text-gray-400">
                Corporate, NIL, and institutional counsel—delivered with clarity, speed, and precision.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/momentum-legal" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/momentumlegal" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700" aria-label="X (Twitter)">
                  <Twitter className="w-4 h-4" />
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
                <button onClick={() => scrollToSection('services')} className="block transition-colors hover:text-white">Services</button>
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