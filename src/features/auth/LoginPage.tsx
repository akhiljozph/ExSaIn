import Typography from '@mui/material/Typography'
import AuthLayout from '../../layouts/AuthLayout/AuthLayout'
import AuthVisual from './components/AuthVisual'

function LoginPage() {
  return (
    <AuthLayout
      visualPosition="right"
      visual={<AuthVisual variant="login" label="Login visual" />}
    >
      <Typography variant="h1" gutterBottom>
        Login
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Login content placeholder
      </Typography>
    </AuthLayout>
  )
}

export default LoginPage
