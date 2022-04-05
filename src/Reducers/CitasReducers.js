export const getAllCitasReducers =(state = { citas: []}, action )=> {
    switch (action.type) {
        case 'GET_CITAS_REQUEST': return {
            loading:true,
            ...state
        }
        case 'GET_CITAS_SUCCESS': return {
            loading:false,
            citas: action.payload,
        }
        case 'GET_CITAS_ERROR': return {
            error: action.payload,
            loading: false,
        }
        default:
            return state
    }
}

export const postCitasReducers =(state = {}, action )=> {
    switch (action.type) {
        case 'POST_CITAS_REQUEST': return {
            loading:true,
            ...state
        }
        case 'POST_CITAS_SUCCESS': return {
            loading:false,
            citas: action.payload,
        }
        case 'POST_CITAS_ERROR': return {
            error: action.payload,
            loading: false,
        }
        default:
            return state
    }
}