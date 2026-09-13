import AuthLayout from '../../layouts/AuthLayout/AuthLayout'
import AuthVisual from './components/AuthVisual'

function RegisterPage() {
  return (
    <AuthLayout
      visualPosition="left"
      visual={<AuthVisual variant="register" label="Register visual" />}
    >
      <h1>Register</h1>
      <p>Register content placeholder</p>
    </AuthLayout>
  )
}

export default RegisterPage
