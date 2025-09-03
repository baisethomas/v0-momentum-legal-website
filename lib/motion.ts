// lib/motion.ts
export const fadeUp = {
  hidden:{ opacity:0, y:16 },
  show:{ opacity:1, y:0, transition:{ duration:0.32, ease:[0.2,0.8,0.2,1] } }
}

export const stagger = {
  show:{ transition:{ staggerChildren:0.08, delayChildren:0.06 } }
}

export const tiltHover = {
  rest:{ rotate:0 },
  hover:{ rotate:-2, transition:{ duration:0.18, ease:[0.2,0.8,0.2,1] } }
}

export const pageWipe = {
  initial:{ x:'-101%', opacity:1 },
  animate:{ x:'100%', transition:{ duration:0.18, ease:[0.2,0.8,0.2,1] } },
  exit:{ opacity:0, transition:{ duration:0.12 } }
}

// Additional motion variants for enhanced animations
export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } }
}

export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } }
}

export const float = {
  rest: { y: 0 },
  hover: { y: -8, transition: { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] } }
}

export const glow = {
  rest: { boxShadow: "0 0 0 rgba(59, 130, 246, 0)" },
  hover: { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)", transition: { duration: 0.3 } }
}
