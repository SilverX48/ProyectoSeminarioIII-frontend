export const getAllPacientesReducers =(state = { pacientes: []}, action )=> {
    switch (action.type) {
        case 'GET_PACIENTES_REQUEST': return {
            loading:true,
            ...state
        }
        case 'GET_PACIENTES_SUCCESS': return {
            loading:false,
            pacientes: action.payload,
        }
        case 'GET_PACIENTES_ERROR': return {
            error: action.payload,
            loading: false,
        }
        default:
            return state
    }
}

export const postPacientesReducers =(state = {}, action )=> {
    switch (action.type) {
        case 'POST_PACIENTES_REQUEST': return {
            loading:true,
            ...state
        }
        case 'POST_PACIENTES_SUCCESS': return {
            loading:false,
            pacientes: action.payload,
        }
        case 'POST_PACIENTES_ERROR': return {
            error: action.payload,
            loading: false,
        }
        default:
            return state
    }
}


export const updatePacientesReducers =(state = {}, action )=> {
    switch (action.type) {
        case 'PUT_PACIENTES_REQUEST': return {
            loading:true,
            ...state
        }
        case 'PUT_PACIENTES_SUCCESS': return {
            loading:false,
            pacientes: action.payload,
        }
        case 'PUT_PACIENTES_ERROR': return {
            error: action.payload,
            loading: false,
        }
        default:
            return state
    }
}
