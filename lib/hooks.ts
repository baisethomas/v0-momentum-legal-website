// lib/hooks.ts - Advanced interaction hooks
import { useState, useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

// Smooth scroll progress hook
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrolled / maxHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollProgress
}

// Advanced parallax hook
export function useParallax(offset: number = 0.5) {
  const [elementTop, setElementTop] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => setScrollY(window.scrollY)
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
  }, [])

  const y = (scrollY - elementTop) * offset

  return { ref, y }
}

// Magnetic cursor effect hook
export function useMagneticEffect(strength: number = 0.3) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength
      
      x.set(deltaX)
      y.set(deltaY)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength, x, y])

  return { ref, x: springX, y: springY }
}

// Viewport intersection with threshold
export function useIntersection(threshold: number = 0.1) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      { threshold, rootMargin: '-10% 0px -10% 0px' }
    )

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [threshold, hasIntersected])

  return { ref, isIntersecting, hasIntersected }
}

// Smooth mouse tracking
export function useMousePosition() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const smoothX = useSpring(x, { stiffness: 300, damping: 30 })
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [x, y])

  return { x: smoothX, y: smoothY }
}

// Advanced scroll velocity tracking
export function useScrollVelocity() {
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
      
      const currentVelocity = Math.abs(deltaY) / deltaTime
      
      setVelocity(currentVelocity)
      
      prevScrollY.current = currentScrollY
      prevTime.current = currentTime
      
      rafId = requestAnimationFrame(updateVelocity)
    }

    rafId = requestAnimationFrame(updateVelocity)
    
    return () => cancelAnimationFrame(rafId)
  }, [])

  return velocity
}