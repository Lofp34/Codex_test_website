import { motion as Motion } from 'framer-motion'

const floatTransition = {
  duration: 12,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
}

const driftTransition = {
  duration: 18,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'linear',
}

const pulseTransition = {
  duration: 6,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
}

const particles = ['p1', 'p2', 'p3', 'p4']

export function HeroMotionVisual() {
  return (
    <div className="hero-motion" aria-hidden="true">
      <Motion.div
        className="hero-blob hero-blob--primary"
        initial={{ scale: 0.9, x: -30, y: -40, rotate: -6 }}
        animate={{
          scale: [0.9, 1.05, 1],
          x: [-40, 10, -20],
          y: [-20, 15, 0],
          rotate: [-6, 4, -2],
        }}
        transition={floatTransition}
      />
      <Motion.div
        className="hero-blob hero-blob--secondary"
        initial={{ scale: 0.7, x: 120, y: 40, rotate: 10 }}
        animate={{
          scale: [0.65, 0.85, 0.7],
          x: [110, 160, 120],
          y: [40, 10, 70],
          rotate: [10, -4, 8],
        }}
        transition={{ ...floatTransition, duration: 16, delay: 0.5 }}
      />
      <Motion.div
        className="hero-orb hero-orb--accent"
        initial={{ scale: 0.8, x: 240, y: -60, opacity: 0.75 }}
        animate={{
          scale: [0.75, 1, 0.85],
          x: [240, 180, 260],
          y: [-70, -20, -40],
          opacity: [0.6, 0.85, 0.7],
        }}
        transition={{ ...floatTransition, duration: 14, delay: 0.8 }}
      />

      <Motion.svg
        className="hero-mesh"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255, 107, 53, 0.75)" />
            <stop offset="50%" stopColor="rgba(255, 166, 0, 0.45)" />
            <stop offset="100%" stopColor="rgba(41, 121, 255, 0.55)" />
          </linearGradient>
          <radialGradient id="heroGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="rgba(255, 166, 0, 0.5)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </radialGradient>
        </defs>
        <Motion.circle
          cx="420"
          cy="160"
          r="120"
          fill="url(#heroGlow)"
          initial={{ opacity: 0.35 }}
          animate={{ opacity: [0.25, 0.55, 0.3], scale: [0.95, 1.05, 1] }}
          transition={pulseTransition}
        />
        <Motion.path
          d="M60 220 C160 140, 320 320, 520 120"
          stroke="url(#heroStroke)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.4 }}
          animate={{ pathLength: [0, 1], opacity: [0.2, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Motion.path
          d="M120 80 C260 40, 360 220, 520 200"
          stroke="rgba(41, 121, 255, 0.4)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: [0, 1], opacity: [0.2, 0.5, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <Motion.path
          d="M80 300 C220 260, 360 340, 520 260"
          stroke="rgba(255, 107, 53, 0.35)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ pathLength: [0, 1], opacity: [0.15, 0.45, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
      </Motion.svg>

      <Motion.ul
        className="hero-particles"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.5,
              repeat: Infinity,
              repeatType: 'loop',
            },
          },
        }}
      >
        {particles.map((id, index) => (
          <Motion.li
            key={id}
            className="hero-particle"
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: {
                opacity: [0, 1, 0],
                y: [-10, -30, -50],
                scale: [0.8, 1.05, 0.6],
                transition: {
                  ...driftTransition,
                  duration: 8 + index,
                  delay: index * 0.5,
                },
              },
            }}
          />
        ))}
      </Motion.ul>
    </div>
  )
}

export default HeroMotionVisual
