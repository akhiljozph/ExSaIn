import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router'
import AuthLayout from '../../../layouts/AuthLayout/AuthLayout'
import AuthBrand from '../components/AuthBrand'
import LoginForm from '../components/LoginForm'
import LoginVisual from '../components/LoginVisual'

function LoginPage() {
  return (
    <AuthLayout visualPosition="right" visual={<LoginVisual />}>
      <Stack spacing={3}>
        <AuthBrand />

        <Box>
          <Typography variant="h1" gutterBottom>
            Welcome back
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sign in to keep track of your income, expenses and savings.
          </Typography>
        </Box>

        <LoginForm />

        <Typography variant="body2" color="text.secondary">
          New to ExSaIn?{' '}
          <Link component={RouterLink} to="/register">
            Create an account
          </Link>
        </Typography>
      </Stack>
    </AuthLayout>
  )
}

export default LoginPage
