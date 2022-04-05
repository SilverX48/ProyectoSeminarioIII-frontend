import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUsuarios } from "../actions/UsuariosActions";

export default function LoginComponent(){
    const [user, Setuser] = useState('');
    const [password, Setpassword] = useState(''); 

    const loginstate = useSelector(state =>state.loginUsuariosReducers)
    const {loading, error} = loginstate;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(localStorage.getItem('usuario_actual')){
            window.location.href='/pacientes'
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
        <div>
            <input
            type='text'
            placeholder="Identidad"
            className="input"
            required
            value={user}
            onChange={(e) => { Setuser(e.target.value) }}
            />
            <input
            type='password'
            placeholder="password"
            className="input"
            required
            value={password}
            onChange={(e) => { Setpassword(e.target.value) }}
            />
            <button onClick={login}>Ingresar</button>  
        </div>
    )
}