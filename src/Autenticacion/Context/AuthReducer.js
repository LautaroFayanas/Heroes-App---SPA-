import { type } from '@testing-library/user-event/dist/type';


export const AuthReducer = ( state = {} , action ) => {
 switch (action.types) {

    case type.login:
        return {
            ...state,
            logged: true,
            user: action.payload
        }
 
    case type.logout:
        return {
            logged: false,
        }

    default:
        return state;
 }
}
