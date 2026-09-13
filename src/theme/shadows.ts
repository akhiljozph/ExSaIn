import type { Shadows } from '@mui/material/styles'

/**
 * Restrained elevation. Hierarchy should come from surface contrast and
 * dividers first, with shadow as the last resort, so the ramp stays soft and
 * stops climbing well before MUI's default level 24.
 */
const ramp = [
  'none',
  '0 1px 2px rgba(16, 24, 40, 0.05)',
  '0 1px 3px rgba(16, 24, 40, 0.06), 0 1px 2px rgba(16, 24, 40, 0.04)',
  '0 2px 6px rgba(16, 24, 40, 0.07), 0 1px 2px rgba(16, 24, 40, 0.04)',
  '0 4px 10px rgba(16, 24, 40, 0.07), 0 1px 3px rgba(16, 24, 40, 0.05)',
  '0 6px 16px rgba(16, 24, 40, 0.08), 0 2px 4px rgba(16, 24, 40, 0.05)',
  '0 10px 24px rgba(16, 24, 40, 0.09), 0 3px 6px rgba(16, 24, 40, 0.05)',
  '0 16px 32px rgba(16, 24, 40, 0.10), 0 4px 8px rgba(16, 24, 40, 0.05)',
]

export const shadows = [
  ...ramp,
  ...Array<string>(25 - ramp.length).fill(ramp[ramp.length - 1]),
] as Shadows
