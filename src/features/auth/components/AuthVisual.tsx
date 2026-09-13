import './AuthVisual.css'

type AuthVisualProps = {
  variant: 'login' | 'register'
  label: string
}

function AuthVisual({ variant, label }: AuthVisualProps) {
  return (
    <div className={`auth-visual auth-visual--${variant}`}>
      <span className="auth-visual__label">{label}</span>
    </div>
  )
}

export default AuthVisual
