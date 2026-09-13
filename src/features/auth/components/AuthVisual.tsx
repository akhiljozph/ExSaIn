import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'

type AuthVisualProps = {
  variant: 'login' | 'register'
  label: string
}

function AuthVisual({ variant, label }: AuthVisualProps) {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'start center',
        paddingInline: theme.spacing(2),
        paddingBlock: theme.spacing(5),
        backgroundColor: alpha(
          variant === 'login'
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
          0.08,
        ),
        [theme.breakpoints.up('md')]: {
          placeItems: 'center',
        },
      })}
    >
      <Typography variant="overline" color="text.secondary">
        {label}
      </Typography>
    </Box>
  )
}

export default AuthVisual
