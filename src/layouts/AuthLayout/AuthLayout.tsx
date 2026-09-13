import Box from '@mui/material/Box'
import type { ReactNode } from 'react'
import { radii } from '../../theme'

type VisualPosition = 'left' | 'right'

type AuthLayoutProps = {
  /** Decorative panel supplied by the page, so each page can use its own theme. */
  visual: ReactNode
  /** Side the visual panel occupies on large screens. */
  visualPosition?: VisualPosition
  children: ReactNode
}

function AuthLayout({
  visual,
  visualPosition = 'right',
  children,
}: AuthLayoutProps) {
  const visualColumn = visualPosition === 'left' ? 1 : 2
  const contentColumn = visualPosition === 'left' ? 2 : 1

  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        display: 'grid',
        minHeight: '100svh',
        isolation: 'isolate',
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: '1fr 1fr',
        },
      })}
    >
      {/* Small screens: the visual fills the viewport and the content sits on top. */}
      <Box
        aria-hidden
        sx={(theme) => ({
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          [theme.breakpoints.up('md')]: {
            position: 'static',
            gridRow: 1,
            gridColumn: visualColumn,
          },
        })}
      >
        {visual}
      </Box>

      <Box
        sx={(theme) => ({
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          placeItems: 'center',
          padding: theme.spacing(3),
          [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            gridRow: 1,
            gridColumn: contentColumn,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: '100%',
            maxWidth: 420,
            padding: theme.spacing(3),
            borderRadius: `${radii.lg}px`,
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: theme.shadows[3],
            [theme.breakpoints.up('md')]: {
              padding: 0,
              borderRadius: 0,
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
            },
          })}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default AuthLayout
