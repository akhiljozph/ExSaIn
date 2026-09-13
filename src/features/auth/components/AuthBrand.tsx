import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

/** Wordmark placeholder until a real ExSaIn logo exists. */
function AuthBrand() {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
      <Box
        aria-hidden
        sx={(theme) => ({
          width: 36,
          height: 36,
          display: 'grid',
          placeItems: 'center',
          borderRadius: `${theme.shape.borderRadius}px`,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          fontWeight: 700,
          fontSize: '1.125rem',
          lineHeight: 1,
        })}
      >
        E
      </Box>
      <Typography variant="h4" component="span">
        ExSaIn
      </Typography>
    </Stack>
  )
}

export default AuthBrand
