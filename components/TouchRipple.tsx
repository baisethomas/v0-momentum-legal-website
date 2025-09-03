"use client"

import { motion, AnimatePresence } from 'framer-motion'

interface RippleProps {
  ripples: Array<{id: number, x: number, y: number}>
}

export default function TouchRipple({ ripples }: RippleProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-inherit">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full bg-white/20"
            style={{
              left: ripple.x - 20,
              top: ripple.y - 20,
              width: 40,
              height: 40,
            }}
            initial={{ 
              scale: 0, 
              opacity: 0.8 
            }}
            animate={{ 
              scale: 3, 
              opacity: 0 
            }}
            exit={{ 
              scale: 3.5, 
              opacity: 0 
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}