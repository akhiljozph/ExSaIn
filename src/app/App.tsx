import { RouterProvider } from 'react-router'
import AppThemeProvider from './providers/AppThemeProvider'
import { router } from './routes'

function App() {
  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  )
}

export default App
