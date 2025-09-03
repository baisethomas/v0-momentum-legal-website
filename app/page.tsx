"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Scale, Trophy, Users, CheckCircle, Star, Menu, X } from "lucide-react"

export default function MomentumLegalHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    { number: "500+", label: "Athletes Represented" },
    { number: "$50M+", label: "NIL Deals Secured" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ]

  const services = [
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Contract Negotiation",
      description:
        "Expert negotiation of NIL deals to maximize your earning potential while protecting your interests.",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Brand Partnerships",
      description: "Strategic guidance on brand partnerships that align with your values and career goals.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Legal Compliance",
      description: "Ensure all your NIL activities comply with NCAA regulations and state laws.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      sport: "Basketball",
      university: "Duke University",
      quote: "Momentum Legal helped me secure my first major NIL deal. Their expertise made all the difference.",
      rating: 5,
    },
    {
      name: "Marcus Williams",
      sport: "Football",
      university: "University of Alabama",
      quote: "Professional, knowledgeable, and always available. They truly understand the athlete experience.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      sport: "Soccer",
      university: "Stanford University",
      quote: "The team at Momentum Legal guided me through complex negotiations with confidence.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="font-playfair text-2xl font-bold text-primary">Momentum Legal</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-foreground hover:text-primary transition-colors">
                  Services
                </a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card">
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary">
                About
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-foreground hover:text-primary">
                Testimonials
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/professional-sports-stadium-with-dramatic-lighting.jpg')`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="secondary"
            className="mb-8 animate-fade-in-up bg-white/10 text-white border-white/20 backdrop-blur-sm"
          >
            Elite NIL Legal Representation
          </Badge>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in-up text-balance leading-tight">
            Your Partner in
            <span className="block text-white">NIL Success</span>
          </h1>
          <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto animate-fade-in-up text-pretty font-light leading-relaxed">
            Professional legal representation for college athletes navigating Name, Image, and Likeness opportunities.
            Maximize your potential while staying compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white border-0 px-8 py-4 text-lg font-semibold"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg bg-transparent"
            >
              Our Expertise
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up">
                <div className="font-playfair text-5xl md:text-6xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-white/90 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-8 text-balance">
              Comprehensive NIL Services
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto text-pretty font-light leading-relaxed">
              From contract negotiation to compliance guidance, we provide end-to-end legal support for your NIL
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-pretty">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-8 text-balance">
                Why Choose Momentum Legal?
              </h2>
              <p className="text-xl text-gray-600 mb-10 text-pretty font-light leading-relaxed">
                We specialize exclusively in NIL representation, giving us deep expertise in this rapidly evolving
                field. Our team understands both the legal complexities and the unique pressures facing college
                athletes.
              </p>

              <div className="space-y-4">
                {[
                  "Specialized NIL expertise",
                  "Former college athletes on our team",
                  "Proven track record of success",
                  "24/7 support during critical negotiations",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white rounded-3xl flex items-center justify-center shadow-2xl border border-gray-200">
                <div className="text-center">
                  <Scale className="h-32 w-32 text-black mx-auto mb-6" />
                  <p className="font-playfair text-3xl font-bold text-black">Justice in Motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              What Athletes Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Hear from the college athletes we've helped navigate their NIL opportunities successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 text-pretty">"{testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.sport} • {testimonial.university}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gray-500/20"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-8 text-balance">
            Ready to Maximize Your NIL Potential?
          </h2>
          <p className="text-2xl text-white/90 mb-12 text-pretty font-light leading-relaxed">
            Schedule a free consultation with our NIL experts and take the first step toward securing your future.
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
      <footer className="bg-card py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-playfair text-2xl font-bold text-primary mb-4">Momentum Legal</div>
              <p className="text-muted-foreground mb-4 text-pretty">
                Professional legal representation for college athletes navigating NIL opportunities.
              </p>
              <p className="text-sm text-muted-foreground">© 2024 Momentum Legal. All rights reserved.</p>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Contract Negotiation</li>
                <li>Brand Partnerships</li>
                <li>Legal Compliance</li>
                <li>NIL Strategy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@momentumlegal.com</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
