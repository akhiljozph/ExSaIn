import Box from '@mui/material/Box'
import { alpha } from '@mui/material/styles'
import type { ReactNode } from 'react'

type AuthVisualProps = {
  /** Which brand colour tints the panel. */
  accent: 'primary' | 'secondary'
  children: ReactNode
}

/**
 * Shared shell for the authentication side panels: brand tint, decorative
 * shapes and content sizing. Each page supplies its own content.
 */
function AuthVisual({ accent, children }: AuthVisualProps) {
  return (
    <Box
      sx={(theme) => {
        const color = theme.palette[accent].main

        return {
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          display: 'grid',
          placeItems: 'center',
          padding: theme.spacing(6, 4),
          backgroundColor: alpha(color, 0.08),
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: alpha(color, 0.1),
          },
          '&::before': {
            width: 320,
            height: 320,
            top: '-14%',
            insetInlineEnd: '-12%',
          },
          '&::after': {
            width: 220,
            height: 220,
            bottom: '-10%',
            insetInlineStart: '-8%',
          },
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 400,
          // Below md this panel is only a background behind the form card.
          display: { xs: 'none', md: 'block' },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default AuthVisual
