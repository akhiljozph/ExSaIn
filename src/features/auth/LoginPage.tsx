import AuthLayout from '../../layouts/AuthLayout/AuthLayout'
import AuthVisual from './components/AuthVisual'

function LoginPage() {
  return (
    <AuthLayout
      visualPosition="right"
      visual={<AuthVisual variant="login" label="Login visual" />}
    >
      <h1>Login</h1>
      <p>Login content placeholder</p>
    </AuthLayout>
  )
}

export default LoginPage
