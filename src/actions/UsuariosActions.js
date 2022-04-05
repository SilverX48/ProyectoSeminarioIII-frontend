import axios from "axios";

export const loginUsuarios = (usuario) => async dispatch =>{
    dispatch({type:'LOGIN_USUARIOS_REQUEST'});
    try {
        const response = await axios.post('http://localhost:3000/api/v1/seguridad_personal/login',usuario);
        console.log(response);
        dispatch({type: 'LOGIN_USUARIOS_SUCCESS', payload:response.data});
        localStorage.setItem('usuario_actual',JSON.stringify(response.data));
        window.location.href='/pacientes'
    } catch (error) {
        dispatch({type: 'LOGIN_USUARIOS_ERROR', payload:error});
    }
}

export const logoutUsuario = () =>{
    localStorage.removeItem('usuario_actual')
    window.location.href='/'
}