// lib/mobile-hooks.ts - Mobile-specific interaction hooks
import { useState, useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

// Detect mobile device
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

// Touch-optimized magnetic effect (reduced strength for mobile)
export function useMobileMagnetic(strength: number = 0.1) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springX = useSpring(x, { stiffness: 300, damping: 25 })
  const springY = useSpring(y, { stiffness: 300, damping: 25 })

  // Return static values for now to avoid ref issues
  return { x: springX, y: springY }
}

// Mobile scroll velocity (optimized for touch scrolling)
export function useMobileScrollVelocity() {
  const [velocity, setVelocity] = useState(0)
  const prevScrollY = useRef(0)
  const prevTime = useRef(Date.now())

  useEffect(() => {
    let rafId: number

    const updateVelocity = () => {
      const currentTime = Date.now()
      const currentScrollY = window.scrollY
      
      const deltaY = currentScrollY - prevScrollY.current
      const deltaTime = currentTime - prevTime.current
      
      // Smooth velocity calculation for mobile
      const currentVelocity = Math.min(Math.abs(deltaY) / deltaTime, 5) // Cap velocity
      
      setVelocity(currentVelocity * 0.1) // Reduce intensity for mobile
      
      prevScrollY.current = currentScrollY
      prevTime.current = currentTime
      
      rafId = requestAnimationFrame(updateVelocity)
    }

    rafId = requestAnimationFrame(updateVelocity)
    
    return () => cancelAnimationFrame(rafId)
  }, [])

  return velocity
}

// Touch ripple effect (simplified)
export function useTouchRipple() {
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number}>>([])

  // Return empty ripples for now to avoid ref issues
  return { ripples: [] }
}

// Mobile-optimized parallax (reduced effect for performance)
export function useMobileParallax(offset: number = 0.2) {
  const [elementTop, setElementTop] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      // Throttle scroll updates on mobile
      if (isMobile) {
        setTimeout(() => setScrollY(window.scrollY), 16)
      } else {
        setScrollY(window.scrollY)
      }
    }
    
    const updateElementTop = () => {
      if (element) {
        setElementTop(element.offsetTop)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateElementTop)
    updateElementTop()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateElementTop)
    }
  }, [isMobile])

  // Reduce parallax effect on mobile for better performance
  const mobileOffset = isMobile ? offset * 0.5 : offset
  const y = (scrollY - elementTop) * mobileOffset

  return { ref, y, isMobile }
}

// Mobile viewport height (accounts for mobile browser UI)
export function useMobileViewport() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      // Use window.innerHeight for mobile to account for browser UI
      setHeight(window.innerHeight)
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    
    // Also listen for orientation changes on mobile
    window.addEventListener('orientationchange', () => {
      setTimeout(updateHeight, 100) // Delay to ensure accurate height
    })

    return () => {
      window.removeEventListener('resize', updateHeight)
      window.removeEventListener('orientationchange', updateHeight)
    }
  }, [])

  return height
}

// Mobile-safe intersection observer
export function useMobileIntersection(threshold: number = 0.1) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Adjust threshold for mobile
    const mobileThreshold = isMobile ? Math.max(threshold, 0.05) : threshold
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      { 
        threshold: mobileThreshold,
        rootMargin: isMobile ? '-5% 0px -5% 0px' : '-10% 0px -10% 0px'
      }
    )

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [threshold, hasIntersected, isMobile])

  return { ref, isIntersecting, hasIntersected, isMobile }
}

// Touch-friendly drag detection
export function useTouchDrag() {
  const [isDragging, setIsDragging] = useState(false)
  const [dragDistance, setDragDistance] = useState({ x: 0, y: 0 })
  const startPos = useRef({ x: 0, y: 0 })
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      startPos.current = { x: touch.clientX, y: touch.clientY }
      setIsDragging(true)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      
      const touch = e.touches[0]
      const deltaX = touch.clientX - startPos.current.x
      const deltaY = touch.clientY - startPos.current.y
      
      setDragDistance({ x: deltaX, y: deltaY })
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
      setDragDistance({ x: 0, y: 0 })
    }

    element.addEventListener('touchstart', handleTouchStart, { passive: true })
    element.addEventListener('touchmove', handleTouchMove, { passive: true })
    element.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging])

  return { ref, isDragging, dragDistance }
}