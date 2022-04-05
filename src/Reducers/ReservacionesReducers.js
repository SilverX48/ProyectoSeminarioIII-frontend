export const getAllReservacionesReducers =(state = { reservaciones: []}, action )=> {
    switch (action.type) {
        case 'GET_RESERVACIONES_REQUEST': return {
            loading:true,
            ...state
        }
        case 'GET_RESERVACIONES_SUCCESS': return {
            loading:false,
            reservaciones: action.payload,
        }
        case 'GET_RESERVACIONES_ERROR': return {
            error: action.payload,
            loading: false,
        }
        default:
            return state
    }
}

export const postReservacionesReducers =(state = {}, action )=> {
    switch (action.type) {
        case 'POST_RESERVACIONES_REQUEST': return {
            loading:true,
            ...state
        }
        case 'POST_RESERVACIONES_SUCCESS': return {
            loading:false,
            reservaciones: action.payload,
        }
        case 'POST_RESERVACIONES_ERROR': return {
            error: action.payload,
            loading: false,
        }
        default:
            return state
    }
}