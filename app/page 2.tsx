"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Scale, Trophy, Users, CheckCircle, Star, Menu, X } from "lucide-react"
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
  float, 
  glow 
} from "@/lib/motion"
import { useParallax, useMagneticEffect, useScrollProgress } from "@/lib/hooks"
import CustomCursor, { useCursorStyle } from "@/components/CustomCursor"

export default function MomentumLegalHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Advanced scroll and parallax effects
  const { scrollYProgress } = useScroll()
  const scrollProgress = useScrollProgress()
  const heroParallax = useParallax(0.5)
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300])
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])
  
  // Magnetic effects for key elements
  const ctaMagnetic = useMagneticEffect(0.2)
  const logoMagnetic = useMagneticEffect(0.1)
  
  // Custom cursor
  useCursorStyle()
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    
    // Page load animation
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const stats = [
    { number: "200+", label: "Clients Represented" },
    { number: "$100M+", label: "Deals Facilitated" },
    { number: "15+", label: "Years Combined Experience" },
    { number: "24/7", label: "Support Available" },
  ]

  const services = [
    {
      icon: <Scale className="h-8 w-8" />,
      title: "NIL Representation",
      description:
        "Comprehensive NIL guidance for athletes, from contract negotiation to compliance with NCAA regulations and state laws.",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Business Transactions",
      description: "Complex deal-making services for collectives, universities, entrepreneurs, and investors in the sports ecosystem.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Strategic Partnerships",
      description: "We're not just attorneys — we're partners in creating lasting growth through innovative legal solutions.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student-Athlete",
      organization: "Duke University Basketball",
      quote: "Momentum Legal helped me secure my first major NIL deal. Their expertise made all the difference.",
      rating: 5,
    },
    {
      name: "Marcus Williams",
      role: "Collective Director",
      organization: "Crimson Tide Collective",
      quote: "Professional, knowledgeable, and always available. They understand both the legal complexities and business opportunities.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "University Administrator",
      organization: "Stanford Athletics",
      quote: "The team at Momentum Legal guided us through complex NIL compliance and business transactions with confidence.",
      rating: 5,
    },
  ]

  return (
    <>
      <CustomCursor />
      <motion.div 
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800/30 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 py-4">
            <motion.div 
              className="flex items-center"
              ref={logoMagnetic.ref}
              style={{ x: logoMagnetic.x, y: logoMagnetic.y }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/logo-black.png" 
                alt="Momentum Legal" 
                className="h-16 w-auto transition-all duration-300"
                data-cursor-text="Home"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <motion.div 
                className="ml-10 flex items-baseline space-x-8"
                variants={staggerFast}
                initial="hidden"
                animate={isLoaded ? "show" : "hidden"}
              >
                {["Services", "About", "Testimonials", "Contact"].map((item, i) => (
                  <motion.a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-gray-300 transition-all duration-300 relative group"
                    variants={fadeUp}
                    whileHover={{ y: -2 }}
                    data-cursor-text={item}
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
                href={`#${item.toLowerCase()}`}
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
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={staggerSlow}
          initial="hidden"
          animate={isLoaded ? "show" : "hidden"}
        >
          <motion.div variants={revealUp}>
            <Badge
              variant="secondary"
              className="mb-8 bg-white/10 text-white border-white/20 backdrop-blur-md shadow-2xl"
            >
              Elite NIL Legal Representation
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="font-playfair text-6xl md:text-8xl font-bold text-white mb-8 text-balance leading-tight"
            variants={textReveal}
          >
            <motion.span 
              className="inline-block"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 40px rgba(255,255,255,0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <span className="text-2xl">M</span>OMENTUM <span className="text-2xl">L</span>EGAL
            </motion.span>
            <motion.span 
              className="block text-white mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Driving deals forward
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto text-pretty font-light leading-relaxed"
            variants={textReveal}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.0, duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            A boutique law firm built to move business forward. We operate at the intersection of sports, business, and innovation — representing athletes, collectives, universities, entrepreneurs, and investors.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={staggerFast}
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
          >
            <motion.div 
              variants={revealUp}
              ref={ctaMagnetic.ref}
              style={{ x: ctaMagnetic.x, y: ctaMagnetic.y }}
            >
              <motion.div
                whileHover={magneticHover.hover}
                whileTap={{ scale: 0.95 }}
                initial={magneticHover.rest}
              >
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl transition-all duration-300"
                  data-cursor-text="Schedule"
                >
                  Schedule Free Consultation
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div variants={revealUp}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg bg-transparent shadow-2xl transition-all duration-300"
                  data-cursor-text="Learn More"
                >
                  Our Expertise
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm"
            animate={{ 
              y: [0, -8, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            data-cursor-text="Scroll"
          >
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ 
                height: [12, 6, 12],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeUp}
                whileHover={float}
              >
                <div className="font-playfair text-5xl md:text-6xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-white/90 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="font-playfair text-5xl md:text-6xl font-bold text-black mb-8 text-balance"
              variants={fadeUp}
            >
              Comprehensive Legal Services
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-600 max-w-4xl mx-auto text-pretty font-light leading-relaxed"
              variants={fadeUp}
            >
              From NIL representation to complex business transactions, we guide clients through fast-moving opportunities while delivering the full spectrum of contract, compliance, and deal-making services.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => {
              const blurColors = ['indigo-500/10', 'cyan-600/10', 'fuchsia-500/10'];
              const iconColors = ['text-indigo-700', 'text-cyan-700', 'text-fuchsia-700'];
              const blurPositions = [
                'absolute -left-24 -top-24 h-56 w-56',
                'absolute right-[-20%] top-[-30%] h-64 w-64',
                'absolute -bottom-24 -right-24 h-64 w-64'
              ];
              
              return (
                <motion.article 
                  key={index} 
                  variants={fadeUp}
                  className="group relative overflow-hidden sm:p-8 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm bg-black/5 border-black/10"
                >
                  <div className={`${blurPositions[index]} rounded-full bg-${blurColors[index]} blur-3xl`}></div>
                  <div className="flex gap-4 items-start">
                    <div className="relative">
                      <div className="grid h-12 w-12 place-items-center rounded-full ring-1 bg-black/5 ring-black/15">
                        <motion.div 
                          className={`${iconColors[index]}`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {service.icon}
                        </motion.div>
                      </div>
                      <div className="pointer-events-none absolute -inset-4 rounded-full border border-black/5"></div>
                    </div>
                  </div>
                  <h3 className="mt-6 text-[22px] sm:text-[24px] font-semibold tracking-tight text-black">{service.title}</h3>
                  <p className="mt-3 text-slate-600 text-pretty">{service.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                className="font-playfair text-5xl md:text-6xl font-bold text-black mb-8 text-balance"
                variants={slideInLeft}
              >
                Why Choose Momentum Legal?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 mb-10 text-pretty font-light leading-relaxed"
                variants={fadeUp}
              >
                We operate at the intersection of sports, business, and innovation. Our boutique approach means personalized attention and deep expertise across the entire sports ecosystem — from individual athletes to major institutional clients.
              </motion.p>

              <motion.div 
                className="space-y-4"
                variants={stagger}
              >
                {[
                  "Boutique firm with personalized attention",
                  "Multi-faceted expertise across sports, business & innovation",
                  "Proven track record with athletes, collectives & universities",
                  "24/7 support for fast-moving opportunities",
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    variants={fadeUp}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
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
                  <p className="font-playfair text-3xl font-bold text-black">Justice in Motion</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
              variants={fadeUp}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
              variants={fadeUp}
            >
              Hear from athletes, collectives, universities, and entrepreneurs we've helped navigate complex opportunities successfully.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {testimonials.map((testimonial, index) => {
              const blurColors = ['emerald-500/10', 'blue-500/10', 'purple-500/10'];
              const blurPositions = [
                'absolute -left-24 -top-24 h-56 w-56',
                'absolute right-[-20%] top-[-30%] h-64 w-64',
                'absolute -bottom-24 -right-24 h-64 w-64'
              ];
              
              return (
                <motion.article 
                  key={index} 
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl border p-6 sm:p-8 backdrop-blur-sm border-black/10 bg-black/5"
                >
                  <div className={`${blurPositions[index]} rounded-full bg-${blurColors[index]} blur-3xl`}></div>
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="grid h-12 w-12 place-items-center rounded-full ring-1 bg-black/5 ring-black/15">
                        <motion.div 
                          className="flex"
                          variants={stagger}
                        >
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              variants={scaleIn}
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                      <div className="pointer-events-none absolute -inset-4 rounded-full border border-black/5"></div>
                    </div>
                  </div>
                  <blockquote className="mt-6 text-slate-600 text-pretty">"{testimonial.quote}"</blockquote>
                  <div className="mt-4">
                    <div className="font-semibold text-black">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role} • {testimonial.organization}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gray-500/20"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-8 text-balance">
            Ready to Move Your Business Forward?
          </h2>
          <p className="text-2xl text-white/90 mb-12 text-pretty font-light leading-relaxed">
            Schedule a free consultation with our legal experts and take the first step toward creating lasting growth in the sports ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-10 py-4 text-lg font-semibold">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 text-lg bg-transparent"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img 
                src="/logo-new.png" 
                alt="Momentum Legal" 
                className="h-32 w-auto mb-4"
              />
              <p className="text-gray-600 mb-4 text-pretty">
                A boutique law firm built to move business forward. We operate at the intersection of sports, business, and innovation.
              </p>
              <p className="text-sm text-gray-600">© 2024 Momentum Legal. All rights reserved.</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>NIL Representation</li>
                <li>Business Transactions</li>
                <li>Strategic Partnerships</li>
                <li>Compliance & Deal-Making</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@momentumlegal.com</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      </motion.div>
    </>
  )
}
