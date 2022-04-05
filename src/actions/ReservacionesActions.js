import axios from "axios";
export const getAllReservaciones = () => async dispatch =>{
    dispatch({type:'GET_RESERVACIONES_REQUEST'});
    try {
        const response = await axios.get('http://localhost:3000/api/v1/reservaciones/all');
        console.log(response);
        dispatch({type: 'GET_RESERVACIONES_SUCCESS', payload:response.data});
    } catch (error) {
        dispatch({type: 'GET_RESERVACIONES_ERROR', payload:error});
    }
}

export const postReservaciones = (reservaciones) => async dispatch =>{
    dispatch({type:'POST_RESERVACIONES_REQUEST'});
    try {
        const response = await axios.post('http://localhost:3000/api/v1/reservaciones/new',reservaciones);
        console.log(response);
        dispatch({type: 'POST_RESERVACIONES_SUCCESS', payload:response.data});
    } catch (error) {
        dispatch({type: 'POST_RESERVACIONES_ERROR', payload:error});
    }
}