import Typography from '@mui/material/Typography'
import AuthLayout from '../../layouts/AuthLayout/AuthLayout'
import AuthVisual from './components/AuthVisual'

function RegisterPage() {
  return (
    <AuthLayout
      visualPosition="left"
      visual={<AuthVisual variant="register" label="Register visual" />}
    >
      <Typography variant="h1" gutterBottom>
        Register
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Register content placeholder
      </Typography>
    </AuthLayout>
  )
}

export default RegisterPage
