import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUsuarios } from "../actions/UsuariosActions";

import '../styles/login.css'


export default function LoginComponent(){
    const [user, Setuser] = useState('');
    const [password, Setpassword] = useState(''); 

    const loginstate = useSelector(state =>state.loginUsuariosReducers)
    const {loading, error} = loginstate;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(localStorage.getItem('usuario_actual')){
            window.location.href='/home'
        }
    })

    function login(){
        const usuario ={
            user,
            password
        }
        console.log(usuario);
        dispatch(loginUsuarios(usuario));
    }

    return(
        <div className="form_field">
            <h2>Inicio de Sesion</h2>
            <label>Usuario</label>
            <input
            type='text'
            placeholder="Usuario"
            className="input"
            required
            value={user}
            onChange={(e) => { Setuser(e.target.value) }}
            />
            <label>Contraseña</label>
            <input
            type='password'
            placeholder="password"
            className="input"
            required
            value={password}
            onChange={(e) => { Setpassword(e.target.value) }}
            />
            <button className="login_button" onClick={login}>Ingresar</button>  
        </div>
    )
}