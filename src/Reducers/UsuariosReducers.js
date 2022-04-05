export const loginUsuariosReducers =(state = {}, action )=> {
    switch (action.type) {
        case 'LOGIN_USUARIOS_REQUEST': return {
            loading:true,
            
        }
        case 'LOGIN_USUARIOS_SUCCESS': return {
            loading:false,
            success:true,
            usuario_actual: action.payload,
        }
        case 'LOGIN_USUARIOS_ERROR': return {
            error: action.payload,
            loading: false,
        }
        default:
            return state
    }
}

export const signinUsuariosReducers =(state = {}, action )=> {
    switch (action.type) {
        case 'SIGNIN_USUARIOS_REQUEST': return {
            loading:true,
            ...state
        }
        case 'SIGNIN_USUARIOS_SUCCESS': return {
            loading:false,
            citas: action.payload,
        }
        case 'SIGNIN_USUARIOS_ERROR': return {
            error: action.payload,
            loading: false,
        }
        default:
            return state
    }
}