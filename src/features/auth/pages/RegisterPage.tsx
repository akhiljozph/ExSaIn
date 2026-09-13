import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router'
import AuthLayout from '../../../layouts/AuthLayout/AuthLayout'
import AuthBrand from '../components/AuthBrand'
import RegisterForm from '../components/RegisterForm'
import RegisterVisual from '../components/RegisterVisual'

function RegisterPage() {
  return (
    <AuthLayout visualPosition="left" visual={<RegisterVisual />}>
      <Stack spacing={3}>
        <AuthBrand />

        <Box>
          <Typography variant="h1" gutterBottom>
            Create your account
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Set up ExSaIn to start tracking where your money goes.
          </Typography>
        </Box>

        <RegisterForm />

        <Typography variant="body2" color="text.secondary">
          Already have an account?{' '}
          <Link component={RouterLink} to="/login">
            Sign in
          </Link>
        </Typography>
      </Stack>
    </AuthLayout>
  )
}

export default RegisterPage
