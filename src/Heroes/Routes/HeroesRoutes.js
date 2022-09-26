
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../UI/Components/Navbar'
import { MarvelPages , DcPages , Hero , Search } from '../Index'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className='container'>
            <Routes>
                <Route  path='marvel' element={ <MarvelPages /> } />
                <Route path='dc' element={ <DcPages /> } />
                <Route path='search' element={ <Search /> } />
                <Route path='hero/:id' element={ <Hero /> } />

                <Route path='/' element={ <Navigate to='/marvel' /> } />
            </Routes>
        </div>

    </>
  )
}
