import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { loginUsuarios } from "../actions/UsuariosActions";

import '../styles/formulario.css'


export default function LoginComponent(){
    const [user, Setuser] = useState('');
    const [password, Setpassword] = useState('');
    const navigation = useNavigate();

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

    function signin(){
        navigation('/signin');
    }

    return(
        <div className="formulario">
            <div className="form-group">
                <h2>Inicio de Sesion</h2>
                <label>Usuario</label>
                <input
                type='text'
                placeholder="Usuario"
                className="form-control"
                required
                value={user}
                onChange={(e) => { Setuser(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input
                type='password'
                placeholder="password"
                className="form-control"
                required
                value={password}
                onChange={(e) => { Setpassword(e.target.value) }}
                />
                </div>
            <button type='submit' className="btn btn-primary" onClick={login}>Ingresar</button>
            <button type='submit' className="btn btn-secondary" onClick={signin}>Nuevo Usuario</button>
        </div>
    )
}