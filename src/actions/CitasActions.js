import axios from "axios";
export const getAllCitas = () => async dispatch =>{
    dispatch({type:'GET_CITAS_REQUEST'});
    try {
        const response = await axios.get('http://localhost:3000/api/v1/citas/all');
        console.log(response);
        dispatch({type: 'GET_CITAS_SUCCESS', payload:response.data});
    } catch (error) {
        dispatch({type: 'GET_CITAS_ERROR', payload:error});
    }
}

export const postCitas = (cita) => async dispatch =>{
    dispatch({type:'POST_CITAS_REQUEST'});
    try {
        const response = await axios.post('http://localhost:3000/api/v1/citas/new',cita);
        console.log(response);
        dispatch({type: 'POST_CITAS_SUCCESS', payload:response.data});
    } catch (error) {
        dispatch({type: 'POST_CITAS_ERROR', payload:error});
    }
}