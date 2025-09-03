"use client"

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { RotateCcw } from 'lucide-react'

interface MobilePullToRefreshProps {
  onRefresh?: () => void
  threshold?: number
}

export default function MobilePullToRefresh({ 
  onRefresh, 
  threshold = 80 
}: MobilePullToRefreshProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [canRefresh, setCanRefresh] = useState(false)
  const pullDistance = useMotionValue(0)
  const opacity = useTransform(pullDistance, [0, threshold], [0, 1])
  const scale = useTransform(pullDistance, [0, threshold], [0.8, 1.2])
  const rotate = useTransform(pullDistance, [0, threshold * 2], [0, 360])
  
  const startY = useRef(0)
  const isPulling = useRef(false)

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (window.scrollY === 0) {
        startY.current = e.touches[0].clientY
        isPulling.current = true
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isPulling.current) return
      
      const currentY = e.touches[0].clientY
      const distance = Math.max(0, currentY - startY.current)
      
      if (distance > 0) {
        e.preventDefault()
        pullDistance.set(Math.min(distance * 0.5, threshold * 1.5))
        setCanRefresh(distance > threshold)
      }
    }

    const handleTouchEnd = () => {
      if (isPulling.current && canRefresh && !isRefreshing) {
        setIsRefreshing(true)
        if (onRefresh) {
          onRefresh()
        }
        // Simulate refresh completion
        setTimeout(() => {
          setIsRefreshing(false)
          setCanRefresh(false)
        }, 1500)
      }
      
      pullDistance.set(0)
      isPulling.current = false
      setCanRefresh(false)
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: false })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [canRefresh, isRefreshing, onRefresh, pullDistance, threshold])

  return (
    <motion.div
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
      style={{
        y: pullDistance,
        opacity,
        scale
      }}
    >
      <div className="bg-black/80 backdrop-blur-sm rounded-full p-4 border border-white/20">
        <motion.div style={{ rotate }}>
          <RotateCcw 
            className={`w-6 h-6 text-white transition-colors duration-300 ${
              canRefresh ? 'text-green-400' : 'text-white'
            }`}
          />
        </motion.div>
      </div>
      
      {isRefreshing && (
        <motion.div
          className="absolute inset-0 bg-green-500/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
      )}
    </motion.div>
  )
}