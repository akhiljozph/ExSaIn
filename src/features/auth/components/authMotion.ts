/**
 * Gentle fade-and-rise for the auth visual panels, staggered by delay.
 * Disabled entirely when the user asks for reduced motion.
 */
export function rise(delayMs = 0) {
  return {
    animation: 'authRise 520ms cubic-bezier(0.22, 1, 0.36, 1) both',
    animationDelay: `${delayMs}ms`,
    '@keyframes authRise': {
      from: { opacity: 0, transform: 'translateY(14px)' },
      to: { opacity: 1, transform: 'none' },
    },
    '@media (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  }
}
