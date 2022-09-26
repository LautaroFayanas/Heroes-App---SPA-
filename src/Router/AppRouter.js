import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../Autenticacion';
import { HeroesRoutes} from '../Heroes/Index';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={ <LoginPage /> } /> 
            <Route path='/*' element={ <HeroesRoutes /> } /> 
        </Routes>
    </>
  )
}
