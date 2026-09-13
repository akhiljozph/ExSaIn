/**
 * Radius scale for ExSaIn surfaces.
 *
 * Lives in its own module so `index.ts` and `components.ts` can share one
 * source of truth without importing each other.
 */
export const radii = {
  sm: 8,
  md: 10,
  lg: 12,
  pill: 999,
} as const
