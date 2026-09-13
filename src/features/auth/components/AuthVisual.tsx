import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'

type AuthVisualProps = {
  variant: 'login' | 'register'
}

const copy = {
  login: 'Your money, clearly organised.',
  register: 'Income, expenses and savings in one place.',
}

/**
 * Decorative panel for the authentication pages. Deliberately static: the
 * animation that will live here is a separate task.
 */
function AuthVisual({ variant }: AuthVisualProps) {
  return (
    <Box
      sx={(theme) => {
        const accent =
          variant === 'login'
            ? theme.palette.primary.main
            : theme.palette.secondary.main

        return {
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          display: 'grid',
          placeItems: 'center',
          padding: theme.spacing(5, 3),
          backgroundColor: alpha(accent, 0.08),
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: alpha(accent, 0.1),
          },
          '&::before': {
            width: 280,
            height: 280,
            top: '-12%',
            insetInlineEnd: '-10%',
          },
          '&::after': {
            width: 200,
            height: 200,
            bottom: '-8%',
            insetInlineStart: '-6%',
          },
        }
      }}
    >
      <Typography
        variant="h3"
        sx={{
          position: 'relative',
          maxWidth: 340,
          textAlign: 'center',
          // On small screens this sits behind the form card, so hide it.
          display: { xs: 'none', md: 'block' },
        }}
      >
        {copy[variant]}
      </Typography>
    </Box>
  )
}

export default AuthVisual
