"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Linkedin } from "lucide-react"

interface NavigationProps {
  currentPage: 'home' | 'about' | 'services' | 'contact'
}

export function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.location.href = '/'
      return
    }
    if (sectionId === 'about' && currentPage !== 'about') {
      window.location.href = '/about'
      return
    }
    if (sectionId === 'services' && currentPage !== 'services') {
      window.location.href = '/services'
      return
    }
    if (sectionId === 'contact' && currentPage !== 'contact') {
      window.location.href = '/contact'
      return
    }
    
    // Same page scrolling
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const getNavItemClass = (page: string) => {
    const baseClass = "text-sm font-normal transition-colors"
    if (currentPage === page) {
      return `${baseClass} text-white font-medium`
    }
    return `${baseClass} text-gray-300 hover:text-white`
  }

  const getMobileNavItemClass = (page: string) => {
    const baseClass = "block w-full text-left text-sm font-normal"
    if (currentPage === page) {
      return `${baseClass} text-white font-medium`
    }
    return `${baseClass} text-gray-300 hover:text-white`
  }

  return (
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
              src="/logo-latest.png" 
              alt="Momentum Legal" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-2">
                <span className="text-xl font-poppins font-semibold tracking-tight text-white uppercase">
                  <span className="text-2xl">M</span>OMENTUM <span className="text-2xl">L</span>EGAL
                </span>
              </div>
              <span className="text-[10px] font-poppins font-normal tracking-wide text-gray-300 uppercase">
                a Professional Corporation
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={getNavItemClass('home')}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={getNavItemClass('about')}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={getNavItemClass('services')}
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
            {currentPage === 'contact' ? (
              <motion.div 
                className="px-6 py-2.5 text-sm font-medium transition-colors bg-white text-black"
              >
                Schedule Consultation
              </motion.div>
            ) : (
              <motion.button 
                onClick={() => window.location.href = '/contact'}
                className="px-6 py-2.5 text-sm font-medium transition-colors bg-white hover:bg-gray-100 text-black"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
              </motion.button>
            )}
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
              <button onClick={() => scrollToSection('home')} className={getMobileNavItemClass('home')}>Home</button>
              <button onClick={() => scrollToSection('about')} className={getMobileNavItemClass('about')}>About</button>
              <button onClick={() => scrollToSection('services')} className={getMobileNavItemClass('services')}>Services</button>
              <button onClick={() => window.location.href = '/contact'} className="w-full mt-4 px-6 py-2.5 text-sm font-medium bg-white text-black">
                Schedule Consultation
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}