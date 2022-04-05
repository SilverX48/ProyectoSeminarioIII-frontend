import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { signinUsuarios } from "../actions/UsuariosActions";

export default function SigninForm(){
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const [identidad, Setidentidad] = useState('');
    const [nombre_completo, Setnombre_completo] = useState('');
    const [fecha_nacimiento, Setfecha_nacimiento] = useState('');
    const [email, Setemail] = useState('');
    const [user, Setuser] = useState('');
    const [password, Setpassword] = useState('');
    const [rol, Setrol] = useState('');
    const [estado, Setestado] = useState('');

    function add(){
        const usuario ={
            identidad,
            nombre_completo,
            fecha_nacimiento,
            email,
            user,
            password,
            rol,
            estado

        }
        console.log(usuario);
        dispatch(signinUsuarios(usuario));
        navigation('/');
    }

    return(
        <div className="formulario">
            <div className="form-group">
                <h2>Crear Cuenta</h2>
                <label>Identidad</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={identidad}
                onChange={(e) => { Setidentidad(e.target.value) }}
                />
            </div>
            <div className="form-group">
                <label>Nombre Completo</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={nombre_completo}
                onChange={(e) => { Setnombre_completo(e.target.value) }}
                />
            </div>
            <div  className="form-group">
                <label>Fecha Nacimiento</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={fecha_nacimiento}
                onChange={(e) => { Setfecha_nacimiento(e.target.value) }}
                />
            </div>
            <div  className="form-group">
                <label>Correo Electronico</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={email}
                onChange={(e) => { Setemail(e.target.value) }}
                />
            </div>
            <div  className="form-group">
                <label>Usuario</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={user}
                onChange={(e) => { Setuser(e.target.value) }}
                />
            </div>
            <div  className="form-group">
                <label>Contraseña</label>
                <input
                type='password'
                placeholder=""
                className="form-control"
                required
                value={password}
                onChange={(e) => { Setpassword(e.target.value) }}
                />
            </div>
            <div  className="form-group">
                <label>Rol</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={rol}
                onChange={(e) => { Setrol(e.target.value) }}
                />
            </div>
            <div  className="form-group">
                <label>Estado</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={estado}
                onChange={(e) => { Setestado(e.target.value) }}
                />
            </div>
                <button type='submit' className="btn btn-primary" onClick={add}>Agregar</button>
        </div>
    )
}