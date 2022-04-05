import axios from "axios";
export const getAllPacientes = () => async dispatch =>{
    dispatch({type:'GET_PACIENTES_REQUEST'});
    try {
        const response = await axios.get('http://localhost:3000/api/v1/pacientes/all');
        console.log(response);
        dispatch({type: 'GET_PACIENTES_SUCCESS', payload:response.data});
    } catch (error) {
        dispatch({type: 'GET_PACIENTES_ERROR', payload:error});
    }
}

export const postPacientes = (paciente) => async dispatch =>{
    dispatch({type:'POST_PACIENTES_REQUEST'});
    try {
        const response = await axios.post('http://localhost:3000/api/v1/pacientes/new',paciente);
        console.log(response);
        dispatch({type: 'POST_PACIENTES_SUCCESS', payload:response.data});
    } catch (error) {
        dispatch({type: 'POST_PACIENTES_ERROR', payload:error});
    }
}