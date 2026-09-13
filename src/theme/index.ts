import { createTheme } from '@mui/material/styles'
import { components } from './components'
import { palette } from './palette'
import { shadows } from './shadows'
import { radii } from './tokens'
import { typography } from './typography'

export const theme = createTheme({
  palette,
  typography,
  shadows,
  components,
  shape: { borderRadius: radii.md },
  spacing: 8,
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
})

export { radii }
