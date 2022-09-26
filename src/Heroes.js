import { AuthProvider } from './Autenticacion/Context/AuthProvider'
import { AppRouter } from './Router/AppRouter'

export const Heroes = () => {
  return (
    <AuthProvider>
         <AppRouter /> 
    </AuthProvider>
  )
}
