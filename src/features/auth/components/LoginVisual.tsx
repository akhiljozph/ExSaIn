import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { radii } from '../../../theme'
import AuthVisual from './AuthVisual'
import { rise } from './authMotion'
import PreviewCard, { MiniBars, MiniBreakdown } from './PreviewCard'

const ROTATE_MS = 5000

/** Illustrative figures only — nothing here reads real data. */
const cards = [
  {
    id: 'balance',
    title: 'Total balance',
    value: '₹2,48,600',
    delta: '+4.2%',
    body: (
      <MiniBars
        accent="primary"
        data={[
          { label: 'Apr', value: 42 },
          { label: 'May', value: 58 },
          { label: 'Jun', value: 71 },
          { label: 'Jul', value: 49 },
          { label: 'Aug', value: 83 },
          { label: 'Sep', value: 96 },
        ]}
      />
    ),
    footer: [
      { label: 'Income', value: '₹86,400' },
      { label: 'Expenses', value: '₹52,180' },
    ],
  },
  {
    id: 'spending',
    title: 'Spending this month',
    value: '₹52,180',
    delta: '−8.1%',
    body: (
      <MiniBreakdown
        accent="primary"
        rows={[
          { label: 'Rent & bills', value: '₹24,000', percent: 46 },
          { label: 'Food & groceries', value: '₹11,940', percent: 23 },
          { label: 'Transport', value: '₹7,310', percent: 14 },
        ]}
      />
    ),
    footer: [
      { label: 'Transactions', value: '48' },
      { label: 'Daily average', value: '₹1,739' },
    ],
  },
  {
    id: 'savings',
    title: 'Savings & investments',
    value: '₹1,12,400',
    delta: '+8.6%',
    body: (
      <MiniBreakdown
        accent="secondary"
        rows={[
          { label: 'SIP', value: '₹48,200', percent: 43 },
          { label: 'Stocks', value: '₹41,600', percent: 37 },
          { label: 'Emergency fund', value: '₹22,600', percent: 20 },
        ]}
      />
    ),
    footer: [
      { label: 'Monthly SIP', value: '₹15,000' },
      { label: 'Returns', value: '₹9,680' },
    ],
  },
]

function LoginVisual() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    // Auto-rotation is motion too, so leave it off when the user opts out.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % cards.length)
    }, ROTATE_MS)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <AuthVisual accent="primary">
      <Stack spacing={3}>
        <Box sx={rise(60)}>
          <Typography variant="h3" gutterBottom>
            Your money, clearly organised.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Balances, spending and savings in one view, updated as you record
            them.
          </Typography>
        </Box>

        {/* Every card shares one grid cell, so the box sizes to the tallest
            of them and nothing is clipped when the content changes. */}
        <Box sx={{ ...rise(180), display: 'grid' }}>
          {cards.map((card, index) => (
            <Box
              key={card.id}
              sx={{
                gridArea: '1 / 1',
                opacity: index === active ? 1 : 0,
                transform:
                  index === active
                    ? 'translateY(0) scale(1)'
                    : 'translateY(12px) scale(0.985)',
                transition:
                  'opacity 420ms ease, transform 560ms cubic-bezier(0.22, 1, 0.36, 1)',
                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',
                },
              }}
            >
              <PreviewCard
                title={card.title}
                value={card.value}
                delta={card.delta}
                body={card.body}
                footer={card.footer}
              />
            </Box>
          ))}
        </Box>

        <Stack
          direction="row"
          spacing={1}
          sx={{ justifyContent: 'center', ...rise(300) }}
        >
          {cards.map((card, index) => (
            <Box
              key={card.id}
              sx={(theme) => ({
                width: index === active ? 22 : 6,
                height: 6,
                borderRadius: `${radii.pill}px`,
                backgroundColor:
                  index === active
                    ? theme.palette.primary.main
                    : alpha(theme.palette.primary.main, 0.25),
                transition: 'width 360ms ease, background-color 360ms ease',
                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',
                },
              })}
            />
          ))}
        </Stack>
      </Stack>
    </AuthVisual>
  )
}

export default LoginVisual
