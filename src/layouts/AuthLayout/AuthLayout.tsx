import type { ReactNode } from 'react'
import './AuthLayout.css'

type VisualPosition = 'left' | 'right'

type AuthLayoutProps = {
  /** Decorative panel supplied by the page, so each page can use its own theme. */
  visual: ReactNode
  /** Side the visual panel occupies on large screens. */
  visualPosition?: VisualPosition
  children: ReactNode
}

function AuthLayout({
  visual,
  visualPosition = 'right',
  children,
}: AuthLayoutProps) {
  return (
    <div className={`auth-layout auth-layout--visual-${visualPosition}`}>
      <div className="auth-layout__visual" aria-hidden="true">
        {visual}
      </div>
      <div className="auth-layout__content">
        <div className="auth-layout__content-inner">{children}</div>
      </div>
    </div>
  )
}

export default AuthLayout
