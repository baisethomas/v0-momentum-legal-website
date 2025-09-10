"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Scale, Users, Target, Shield, FileText, Menu, X, ArrowLeft } from "lucide-react"
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

export default function BrandSponsorPage() {
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

  const services = [
    {
      title: "Athlete Sponsorship Deals",
      description: "Negotiation, drafting, compliance checks.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Campaign Structuring",
      description: "Social media, merchandise, appearances, joint ventures.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "IP & Licensing Agreements",
      description: "Co-branding, trademarks, content rights.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Regulatory Compliance",
      description: "State law, NCAA rules, FTC advertising guidelines.",
      icon: <FileText className="h-6 w-6" />
    }
  ]

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
                  {["Services", "About", "Testimonials", "Contact"].map((item, i) => (
                    <motion.a 
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="text-white hover:text-gray-300 transition-all duration-300 relative group"
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
              {["Services", "About", "Testimonials", "Contact"].map((item) => (
                <motion.a 
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block px-3 py-2 text-white hover:text-gray-300 transition-all duration-300 hover:translate-x-2"
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
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
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
                Service Offerings
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
                4. Brand & Sponsor Advisory
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto text-pretty font-light leading-relaxed"
              variants={textReveal}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <strong>Clients:</strong> Consumer brands, agencies, sponsors entering NIL or athlete partnerships.
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
                  >
                    <ArrowLeft className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                    Back to Services
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
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
                Our Brand & Sponsor Services
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-2xl text-gray-600 max-w-4xl mx-auto text-pretty font-light leading-relaxed"
                variants={isMobile ? mobileTextReveal : textReveal}
              >
                Comprehensive legal support for consumer brands, agencies, and sponsors navigating the dynamic world of athlete partnerships and NIL opportunities.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto"
              variants={isMobile ? mobileStagger : staggerFast}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: isMobile ? "-20px" : "-50px" }}
            >
              {services.map((service, index) => {
                const colors = [
                  { bg: 'indigo-500/5', border: 'indigo-200/30', icon: 'text-indigo-700', glow: 'indigo-500/20' },
                  { bg: 'cyan-500/5', border: 'cyan-200/30', icon: 'text-cyan-700', glow: 'cyan-500/20' },
                  { bg: 'fuchsia-500/5', border: 'fuchsia-200/30', icon: 'text-fuchsia-700', glow: 'fuchsia-500/20' },
                  { bg: 'emerald-500/5', border: 'emerald-200/30', icon: 'text-emerald-700', glow: 'emerald-500/20' }
                ][index]
                
                return (
                  <motion.article 
                    key={index} 
                    variants={isMobile ? mobileCardHover : cardHover}
                    className="group relative overflow-hidden p-6 sm:p-8 border-2 rounded-2xl sm:rounded-3xl backdrop-blur-sm transition-all duration-500"
                    style={{
                      backgroundColor: `rgb(var(--${colors.bg}))`,
                      borderColor: `rgb(var(--${colors.border}))`
                    }}
                    whileHover={!isMobile ? {
                      scale: 1.02,
                      y: -4,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.08)"
                    } : undefined}
                    whileTap={isMobile ? mobileCardHover.tap : undefined}
                    data-cursor-text={!isMobile ? service.title : undefined}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgb(var(--${colors.glow})) 0%, transparent 70%)`
                      }}
                      onMouseMove={(event: any) => {
                        const rect = event.currentTarget.getBoundingClientRect()
                        const x = ((event.clientX - rect.left) / rect.width) * 100
                        const y = ((event.clientY - rect.top) / rect.height) * 100
                        event.currentTarget.style.setProperty('--x', `${x}%`)
                        event.currentTarget.style.setProperty('--y', `${y}%`)
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div className="flex gap-3 sm:gap-4 items-start mb-4 sm:mb-6">
                        <motion.div className="relative">
                          <motion.div 
                            className="grid h-12 w-12 sm:h-16 sm:w-16 place-items-center rounded-xl sm:rounded-2xl ring-2 bg-white/80 backdrop-blur-sm transition-all duration-300"
                            whileHover={!isMobile ? { 
                              scale: 1.1, 
                              rotate: 10,
                              backgroundColor: "rgba(255,255,255,0.95)"
                            } : undefined}
                            whileTap={isMobile ? { scale: 1.05, rotate: 5 } : undefined}
                          >
                            <motion.div 
                              className={`${colors.icon} transition-all duration-300`}
                              whileHover={!isMobile ? { scale: 1.2 } : undefined}
                            >
                              {service.icon}
                            </motion.div>
                          </motion.div>
                           
                          {/* Subtle glow effect */}
                          <motion.div 
                            className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500"
                            style={{ backgroundColor: `rgb(var(--${colors.glow}))` }}
                          />
                        </motion.div>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl sm:text-2xl font-bold tracking-tight text-black mb-3 sm:mb-4 group-hover:text-black transition-colors duration-300"
                        whileHover={!isMobile ? { x: 4 } : undefined}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-sm sm:text-base text-slate-600 text-pretty leading-relaxed group-hover:text-slate-700 transition-colors duration-300"
                        initial={{ opacity: 0.8 }}
                        whileHover={!isMobile ? { opacity: 1 } : undefined}
                      >
                        {service.description}
                      </motion.p>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <motion.div
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundColor: `rgb(var(--${colors.glow}))` }}
                      whileHover={!isMobile ? { scale: 1.5 } : undefined}
                    />
                  </motion.article>
                )
              })}
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
              Ready to Partner with Athletes?
            </h2>
            <p className="text-2xl text-white/90 mb-12 text-pretty font-light leading-relaxed">
              Schedule a free consultation with our legal experts and take the first step toward building successful and compliant athlete partnerships.
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
              >
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <img src="/logo-black.png" alt="Momentum Legal" className="h-8 w-auto mb-4" />
                <p className="text-gray-600 mb-4 max-w-md">
                  A boutique law firm built to move business forward. We operate at the intersection of sports, business, and innovation.
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
                  <li>info@momentumlegal.com</li>
                  <li>(555) 123-4567</li>
                  <li>Schedule Consultation</li>
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

