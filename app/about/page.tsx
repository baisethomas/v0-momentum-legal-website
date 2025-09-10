"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Scale, Trophy, Users, CheckCircle, Star, Menu, X, ArrowLeft, Award, Building, Briefcase } from "lucide-react"
import { 
  fadeUp, 
  stagger, 
  staggerFast,
  staggerSlow,
  magneticHover, 
  revealUp, 
  slideReveal,
  textReveal,
  cardHover,
  fadeIn, 
  slideInLeft, 
  slideInRight, 
  scaleIn,
  glow 
} from "@/lib/motion"
import { 
  mobileRevealUp,
  mobileSlideIn,
  mobileTouchScale,
  mobileButtonPress,
  mobileCardHover,
  mobileStagger,
  mobileTextReveal,
  mobileFloat,
  mobileBadgePulse,
  mobileSectionReveal
} from "@/lib/mobile-animations"
import { useParallax, useMagneticEffect, useScrollProgress } from "@/lib/hooks"
import { 
  useIsMobile, 
  useMobileMagnetic, 
  useMobileParallax, 
  useMobileIntersection,
  useTouchRipple 
} from "@/lib/mobile-hooks"
import CustomCursor, { useCursorStyle } from "@/components/CustomCursor"
import TouchRipple from "@/components/TouchRipple"
import MobileLoading from "@/components/MobileLoading"
import MobilePullToRefresh from "@/components/MobilePullToRefresh"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showMobileLoading, setShowMobileLoading] = useState(false)
  
  // Advanced scroll and parallax effects
  const { scrollYProgress } = useScroll()
  const scrollProgress = useScrollProgress()
  const heroParallax = useParallax(0.5)
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300])
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])
  
  // Device detection and adaptive effects
  const isMobile = useIsMobile()
  
  // Magnetic effects (always initialize both)
  const ctaMagnetic = useMagneticEffect(0.2)
  const logoMagnetic = useMagneticEffect(0.1)
  const mobileCTAMagnetic = useMobileMagnetic(0.1)
  const mobileLogoMagnetic = useMobileMagnetic(0.05)
  
  // Touch ripple effects
  const ctaRipple = useTouchRipple()
  
  // Custom cursor - always call hook, conditionally use
  useCursorStyle()
  const shouldShowCursor = !isMobile
  
  // Mobile pull-to-refresh handler
  const handleRefresh = () => {
    window.location.reload()
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    
    // Mobile loading experience
    if (isMobile) {
      setShowMobileLoading(true)
      const mobileTimer = setTimeout(() => {
        setShowMobileLoading(false)
        setIsLoaded(true)
      }, 2000) // 2 second mobile loading
      
      return () => {
        window.removeEventListener("scroll", handleScroll)
        clearTimeout(mobileTimer)
      }
    } else {
      // Desktop immediate load
      const timer = setTimeout(() => setIsLoaded(true), 100)
      
      return () => {
        window.removeEventListener("scroll", handleScroll)
        clearTimeout(timer)
      }
    }
  }, [isMobile])

  return (
    <>
      {/* Mobile loading screen */}
      {isMobile && (
        <MobileLoading 
          isVisible={showMobileLoading} 
          onComplete={() => setShowMobileLoading(false)}
        />
      )}
      
      {/* Mobile pull-to-refresh */}
      {isMobile && <MobilePullToRefresh onRefresh={handleRefresh} />}
      
      {/* Custom cursor for desktop only */}
      {shouldShowCursor && <CustomCursor />}
      <motion.div 
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Navigation */}
        <motion.nav 
          className="fixed top-0 w-full bg-black border-b border-gray-800 z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 py-4">
              <motion.div 
                className="flex items-center relative"
                ref={logoMagnetic.ref}
                style={{ 
                  x: logoMagnetic.x, 
                  y: logoMagnetic.y 
                }}
                whileHover={!isMobile ? { scale: 1.05 } : undefined}
                whileTap={isMobile ? { scale: 0.98 } : undefined}
              >
                <a href="/" className="flex items-center">
                  <img 
                    src="/logo-black.png" 
                    alt="Momentum Legal" 
                    className="h-16 w-auto transition-all duration-300"
                    data-cursor-text="Home"
                  />
                </a>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <motion.div 
                  className="ml-10 flex items-baseline space-x-8"
                  variants={isMobile ? mobileStagger : staggerFast}
                  initial="hidden"
                  animate={isLoaded ? "show" : "hidden"}
                >
                  {/* Services Dropdown */}
                  <motion.div 
                    className="relative group"
                    variants={isMobile ? mobileSlideIn : fadeUp}
                    whileHover={!isMobile ? { y: -2 } : undefined}
                    whileTap={isMobile ? { scale: 0.95 } : undefined}
                    data-cursor-text={!isMobile ? "Services" : undefined}
                  >
                    <a 
                      href="/#services"
                      className="text-white hover:text-gray-300 transition-all duration-300 relative group"
                    >
                      Services
                      <motion.div 
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white origin-left"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                    
                    {/* Services Dropdown Menu */}
                    <motion.div 
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                      initial={{ y: -10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      <div className="py-2">
                        <a href="/services/corporate-venture" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors">
                          <div className="font-semibold">Corporate & Venture</div>
                          <div className="text-sm text-gray-600">VC funds, startups, growth companies</div>
                        </a>
                        <a href="/services/nil-athlete" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors">
                          <div className="font-semibold">NIL & Athlete Representation</div>
                          <div className="text-sm text-gray-600">Student-athletes, professional athletes</div>
                        </a>
                        <a href="/services/collective" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors">
                          <div className="font-semibold">Collective Representation</div>
                          <div className="text-sm text-gray-600">NIL collectives, donor groups</div>
                        </a>
                        <a href="/services/brand-sponsor" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors">
                          <div className="font-semibold">Brand & Sponsor Advisory</div>
                          <div className="text-sm text-gray-600">Consumer brands, agencies</div>
                        </a>
                        <a href="/services/university-institutional" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors">
                          <div className="font-semibold">University & Institutional</div>
                          <div className="text-sm text-gray-600">Division I universities, compliance</div>
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Other Navigation Items */}
                  {["About", "Testimonials", "Contact"].map((item, i) => (
                    <motion.a 
                      key={item}
                      href={item === "About" ? "/about" : `/#${item.toLowerCase()}`}
                      className={`text-white hover:text-gray-300 transition-all duration-300 relative group ${item === "About" ? "text-gray-300" : ""}`}
                      variants={isMobile ? mobileSlideIn : fadeUp}
                      whileHover={!isMobile ? { y: -2 } : undefined}
                      whileTap={isMobile ? { scale: 0.95 } : undefined}
                      data-cursor-text={!isMobile ? item : undefined}
                    >
                      {item}
                      <motion.div 
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white origin-left"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <motion.div whileTap={{ scale: 0.9 }}>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    data-cursor-text="Menu"
                  >
                    <motion.div
                      animate={{ rotate: isMenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className="md:hidden overflow-hidden"
            initial={false}
            animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md"
              variants={staggerFast}
              initial="hidden"
              animate={isMenuOpen ? "show" : "hidden"}
            >
              {/* Services Section */}
              <motion.div variants={slideReveal}>
                <div className="px-3 py-2 text-white font-semibold">Services</div>
                <div className="pl-6 space-y-1">
                  <a href="/services/corporate-venture" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Corporate & Venture
                  </a>
                  <a href="/services/nil-athlete" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    NIL & Athlete Representation
                  </a>
                  <a href="/services/collective" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Collective Representation
                  </a>
                  <a href="/services/brand-sponsor" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Brand & Sponsor Advisory
                  </a>
                  <a href="/services/university-institutional" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                    University & Institutional
                  </a>
                </div>
              </motion.div>

              {/* Other Navigation Items */}
              {["About", "Testimonials", "Contact"].map((item) => (
                <motion.a 
                  key={item}
                  href={item === "About" ? "/about" : `/#${item.toLowerCase()}`}
                  className={`block px-3 py-2 text-white hover:text-gray-300 transition-all duration-300 hover:translate-x-2 ${item === "About" ? "text-gray-300" : ""}`}
                  variants={slideReveal}
                  onClick={() => setIsMenuOpen(false)}
                  data-cursor-text={item}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Scroll progress indicator */}
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-white origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </motion.nav>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/professional-sports-stadium-with-dramatic-lighting.jpg')`,
              y: backgroundY,
              scale: scaleProgress
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />

          <motion.div 
            className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-32"
            variants={staggerSlow}
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
          >
            <motion.div 
              className="mb-8"
              variants={fadeUp}
            >
              <Badge
                variant="secondary"
                className="mb-8 bg-white/10 text-white border-white/20 backdrop-blur-sm"
              >
                <Scale className="h-4 w-4 mr-2" />
                About Momentum Legal
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="font-playfair text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-8 text-balance leading-tight"
              variants={isMobile ? mobileTextReveal : textReveal}
            >
              <motion.span 
                className="inline-block"
                whileHover={{ 
                  scale: 1.02,
                  textShadow: "0 0 40px rgba(255,255,255,0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                About Momentum Legal
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto text-pretty font-light leading-relaxed"
              variants={textReveal}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Discover the vision, values, and expertise that drive our commitment to excellence in legal representation.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={staggerFast}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              <motion.div 
                variants={isMobile ? mobileRevealUp : revealUp}
                ref={ctaMagnetic.ref}
                style={{ 
                  x: ctaMagnetic.x, 
                  y: ctaMagnetic.y 
                }}
                className="relative"
              >
                <motion.div
                  whileHover={!isMobile ? magneticHover.hover : undefined}
                  whileTap={isMobile ? mobileButtonPress : { scale: 0.95 }}
                  initial={!isMobile ? magneticHover.rest : mobileButtonPress.rest}
                  ref={isMobile ? ctaRipple.ref : undefined}
                >
                  <Button
                    size="lg"
                    className="bg-black hover:bg-gray-800 text-white border-0 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl transition-all duration-300 relative overflow-hidden"
                    data-cursor-text={!isMobile ? "Schedule" : undefined}
                  >
                    Schedule Free Consultation
                    <motion.div
                      whileHover={!isMobile ? { x: 4 } : undefined}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                    </motion.div>
                    {isMobile && <TouchRipple ripples={ctaRipple.ripples} />}
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div variants={isMobile ? mobileRevealUp : revealUp}>
                <motion.div
                  whileHover={!isMobile ? {
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.5)"
                  } : undefined}
                  whileTap={isMobile ? { scale: 0.96 } : { scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent shadow-2xl transition-all duration-300"
                    data-cursor-text={!isMobile ? "Learn More" : undefined}
                    onClick={() => window.location.href = "/"}
                  >
                    <ArrowLeft className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                    Back to Home
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white relative">
          {/* Subtle animated background */}
          <motion.div
            className="absolute inset-0 opacity-[0.02]"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"] 
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              className="text-center mb-12 sm:mb-20"
              variants={isMobile ? mobileStagger : staggerSlow}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
            >
              <motion.h2 
                className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold text-black mb-6 sm:mb-8 text-balance"
                variants={isMobile ? mobileTextReveal : textReveal}
                whileHover={!isMobile ? { 
                  scale: 1.02,
                  textShadow: "0 4px 20px rgba(0,0,0,0.1)"
                } : undefined}
                whileTap={isMobile ? { scale: 0.98 } : undefined}
              >
                Our Mission
              </motion.h2>
              <motion.div 
                className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto text-pretty font-light leading-relaxed space-y-6"
                variants={isMobile ? mobileTextReveal : textReveal}
              >
                <p>
                  Our mission at Momentum Legal is to empower you to seize opportunities with clarity, confidence, and creative legal solutions. We thrive at the dynamic intersection of business, sports, and innovation, providing practical guidance for entrepreneurs, athletes, and institutions in fast-moving markets. We are dedicated to protecting your rights, minimizing risk, and fostering lasting growth for those who dare to redefine what's possible.
                </p>
              </motion.div>
            </motion.div>

            {/* Wilson Hall Profile Section */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-16 items-center mt-20"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                variants={slideInLeft}
              >
                <motion.h3 
                  className="font-playfair text-4xl md:text-5xl font-bold text-black mb-8 text-balance"
                  variants={fadeUp}
                >
                  Meet Wilson Hall
                </motion.h3>
                <motion.div 
                  className="text-lg text-gray-600 text-pretty font-light leading-relaxed space-y-6"
                  variants={fadeUp}
                >
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
                    Momentum Legal embodies Wilson's core values: initiative, innovation, and integrity. This firm was built for clients who are ready to take charge, pursue ambitious goals, and partner with a lawyer who not only masters the law, but deeply understands the fast-paced business realities of today's competitive markets.
                  </p>
                </motion.div>

                {/* Core Values */}
                <motion.div 
                  className="space-y-4 mt-10"
                  variants={stagger}
                >
                  {[
                    { icon: <Award className="h-5 w-5" />, text: "Initiative - Taking proactive action for client success" },
                    { icon: <Building className="h-5 w-5" />, text: "Innovation - Leveraging cutting-edge solutions and strategies" },
                    { icon: <Briefcase className="h-5 w-5" />, text: "Integrity - Maintaining the highest ethical standards" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center"
                      variants={fadeUp}
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mr-3 text-black flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative"
                variants={slideInRight}
              >
                <motion.div 
                  className="aspect-square bg-white rounded-3xl flex items-center justify-center shadow-2xl border border-gray-200"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Scale className="h-32 w-32 text-black mx-auto mb-6" />
                    </motion.div>
                    <p className="font-playfair text-3xl font-bold text-black">Excellence in Law</p>
                    <p className="text-gray-600 mt-2">Built on Initiative, Innovation & Integrity</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gray-500/20"></div>
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-8 text-balance">
              Ready to Partner With Us?
            </h2>
            <p className="text-2xl text-white/90 mb-12 text-pretty font-light leading-relaxed">
              Schedule a free consultation with Wilson Hall and discover how Momentum Legal can drive your vision forward with clarity, confidence, and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-black px-10 py-4 text-lg font-semibold">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 text-lg bg-transparent"
                onClick={() => window.location.href = "/#services"}
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <img src="/logo-new.png" alt="Momentum Legal" className="h-32 w-auto mb-4" />
                <p className="text-gray-600 mb-4 max-w-md">
                  At the intersection of sports, business, and innovation, Momentum Legal is more than a law firm. We are your strategic partners, dedicated to driving your vision forward.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/services/corporate-venture" className="hover:text-black transition-colors">Corporate & Venture</a></li>
                  <li><a href="/services/nil-athlete" className="hover:text-black transition-colors">NIL & Athlete Representation</a></li>
                  <li><a href="/services/collective" className="hover:text-black transition-colors">Collective Representation</a></li>
                  <li><a href="/services/brand-sponsor" className="hover:text-black transition-colors">Brand & Sponsor Advisory</a></li>
                  <li><a href="/services/university-institutional" className="hover:text-black transition-colors">University & Institutional</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Phone: (555) 123-4567</li>
                  <li>Email: info@momentumlegal.com</li>
                  <li>Available 24/7</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
              <p>&copy; 2024 Momentum Legal. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  )
}