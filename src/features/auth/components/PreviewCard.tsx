import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import type { ReactNode } from 'react'
import { radii } from '../../../theme'

export type Accent = 'primary' | 'secondary'

/** Six-column bar chart, last column highlighted as the current period. */
export function MiniBars({
  data,
  accent,
}: {
  data: { label: string; value: number }[]
  accent: Accent
}) {
  return (
    <Box>
      <Box
        sx={{ display: 'flex', alignItems: 'flex-end', gap: 1.25, height: 84 }}
      >
        {data.map((point, index) => (
          <Box
            key={point.label}
            sx={(theme) => ({
              flex: 1,
              height: `${point.value}%`,
              borderRadius: `${radii.sm}px`,
              backgroundColor:
                index === data.length - 1
                  ? theme.palette[accent].main
                  : alpha(theme.palette[accent].main, 0.22),
            })}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: 1.25, mt: 1 }}>
        {data.map((point) => (
          <Typography
            key={point.label}
            variant="caption"
            color="text.secondary"
            sx={{ flex: 1, textAlign: 'center' }}
          >
            {point.label}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

/** Labelled rows with a proportion bar, for category style breakdowns. */
export function MiniBreakdown({
  rows,
  accent,
}: {
  rows: { label: string; value: string; percent: number }[]
  accent: Accent
}) {
  return (
    <Stack spacing={1.75}>
      {rows.map((row) => (
        <Box key={row.label}>
          <Stack
            direction="row"
            sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}
          >
            <Typography variant="caption" color="text.secondary">
              {row.label}
            </Typography>
            <Typography variant="numeric" component="span">
              {row.value}
            </Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={row.percent}
            color={accent}
            sx={(theme) => ({
              mt: 0.75,
              height: 6,
              borderRadius: `${radii.pill}px`,
              backgroundColor: alpha(theme.palette[accent].main, 0.14),
            })}
          />
        </Box>
      ))}
    </Stack>
  )
}

type PreviewCardProps = {
  title: string
  value: string
  delta: string
  body: ReactNode
  footer: { label: string; value: string }[]
}

function PreviewCard({ title, value, delta, body, footer }: PreviewCardProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ height: '100%' }}>
        <Stack spacing={2.5} sx={{ height: '100%' }}>
          <Stack
            direction="row"
            sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }}
          >
            <Box>
              <Typography
                variant="overline"
                component="div"
                color="text.secondary"
              >
                {title}
              </Typography>
              <Typography variant="numericLarge" component="div">
                {value}
              </Typography>
            </Box>
            <Chip
              size="small"
              color="success"
              variant="outlined"
              label={delta}
            />
          </Stack>

          <Box sx={{ flexGrow: 1 }}>{body}</Box>

          <Box>
            <Divider sx={{ mb: 2 }} />
            <Stack
              direction="row"
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}
            >
              {footer.map((item, index) => (
                <Box
                  key={item.label}
                  sx={{ textAlign: index === 0 ? 'left' : 'right' }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                  >
                    {item.label}
                  </Typography>
                  <Typography variant="numeric" component="div">
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PreviewCard
