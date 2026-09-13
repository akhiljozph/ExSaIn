import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import { radii } from '../../../theme'
import AuthVisual from './AuthVisual'
import { rise } from './authMotion'

/** Inline paths so the project does not take on an icon package. */
const icons = {
  wallet:
    'M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
  trend: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',
  overview: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
}

const benefits = [
  {
    icon: icons.wallet,
    title: 'Track every transaction',
    description:
      'Bank accounts, credit cards and cash, recorded in one consistent place.',
  },
  {
    icon: icons.trend,
    title: 'Grow your savings',
    description: 'Follow SIPs, stocks and other investments as they build up.',
  },
  {
    icon: icons.overview,
    title: 'See the whole picture',
    description:
      'A dashboard that sums up income, spending and what is left over.',
  },
]

function RegisterVisual() {
  return (
    <AuthVisual accent="secondary">
      <Stack spacing={4}>
        <Box sx={rise(60)}>
          <Typography variant="h3" gutterBottom>
            Everything in one place.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ExSaIn brings your income, expenses and savings together so you can
            see where your money actually goes.
          </Typography>
        </Box>

        <Stack spacing={3}>
          {benefits.map((benefit, index) => (
            <Stack
              key={benefit.title}
              direction="row"
              spacing={2}
              sx={{ alignItems: 'flex-start', ...rise(180 + index * 110) }}
            >
              <Box
                sx={(theme) => ({
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: `${radii.md}px`,
                  color: theme.palette.secondary.main,
                  backgroundColor: alpha(theme.palette.secondary.main, 0.14),
                })}
              >
                <SvgIcon fontSize="small">
                  <path d={benefit.icon} />
                </SvgIcon>
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  {benefit.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {benefit.description}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </AuthVisual>
  )
}

export default RegisterVisual
