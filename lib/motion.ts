// lib/motion.ts - Award-winning animation system

// Premium easing curves
const PREMIUM_EASE = [0.25, 0.1, 0.25, 1.0] as const // Custom bezier for luxury feel
const BOUNCE_EASE = [0.68, -0.55, 0.265, 1.55] as const // Subtle bounce
const POWER_EASE = [0.77, 0, 0.175, 1] as const // Strong acceleration

// Core animation variants
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: PREMIUM_EASE,
      type: "spring",
      bounce: 0.1
    } 
  }
}

export const stagger = {
  show: { 
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2 
    } 
  }
}

// Enhanced hover effects
export const magneticHover = {
  rest: { 
    scale: 1,
    rotate: 0,
    filter: "blur(0px) brightness(1)"
  },
  hover: { 
    scale: 1.05,
    rotate: -1,
    filter: "blur(0px) brightness(1.1)",
    transition: { 
      duration: 0.4, 
      ease: PREMIUM_EASE,
      type: "spring",
      stiffness: 300,
      damping: 20
    } 
  }
}

export const tiltHover = {
  rest: { 
    rotate: 0, 
    scale: 1,
    y: 0
  },
  hover: { 
    rotate: -2, 
    scale: 1.02,
    y: -4,
    transition: { 
      duration: 0.3, 
      ease: BOUNCE_EASE 
    } 
  }
}

// Advanced reveal animations
export const revealUp = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: PREMIUM_EASE as any,
      type: "spring" as const,
      bounce: 0.1
    }
  }
}

export const slideReveal = {
  hidden: {
    opacity: 0,
    x: -100,
    skewX: 5
  },
  show: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      duration: 1.0,
      ease: POWER_EASE as any
    }
  }
}

// Sophisticated staggered animations
export const staggerFast = {
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1
    }
  }
}

export const staggerSlow = {
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

// Page transitions
export const pageWipe = {
  initial: { 
    clipPath: "inset(0 0 100% 0)",
    opacity: 1 
  },
  animate: { 
    clipPath: "inset(0 0 0% 0)",
    transition: { 
      duration: 1.2, 
      ease: PREMIUM_EASE,
      staggerChildren: 0.1
    } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    } 
  }
}

// Premium micro-interactions
export const float = {
  rest: { 
    y: 0,
    rotate: 0
  },
  hover: { 
    y: -12,
    rotate: 1,
    transition: { 
      duration: 0.6, 
      ease: BOUNCE_EASE,
      type: "spring",
      stiffness: 400,
      damping: 10
    } 
  }
}

export const glow = {
  rest: { 
    boxShadow: "0 0 0 rgba(255, 255, 255, 0)",
    scale: 1
  },
  hover: { 
    boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(255, 255, 255, 0.08)",
    scale: 1.02,
    transition: { 
      duration: 0.4,
      ease: PREMIUM_EASE
    } 
  }
}

// Text animations
export const textReveal = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: PREMIUM_EASE as any
    }
  }
}

// Loading animations
export const loadingPulse = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: BOUNCE_EASE,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}

// Card animations
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    z: 0
  },
  hover: {
    scale: 1.03,
    y: -8,
    rotateX: 5,
    rotateY: 5,
    z: 50,
    transition: {
      duration: 0.4,
      ease: PREMIUM_EASE as any
    }
  }
}

// Legacy animations (keeping for compatibility)
export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: PREMIUM_EASE as any } }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: PREMIUM_EASE as any } }
}

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: PREMIUM_EASE as any } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: BOUNCE_EASE as any,
      type: "spring" as const,
      bounce: 0.2
    } 
  }
}
