import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'

const initialState = {
    logged: false
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user
    }
}

export const AuthProvider = ({children}) => {

   const [authState, dispatch] = useReducer( AuthReducer , initialState , init );

   const login = ( name = '') => {

    const user = {id: 'ABC', name}

    const action = {
        type: login,
        payload: user
    }

    localStorage.setItem('user' , JSON.stringify(user) );
    dispatch(action);

   }

  return (
        <AuthContext.Provider value ={{
            ...authState,
            login: login
        }}>
            {children}
        </AuthContext.Provider>
  )
}
