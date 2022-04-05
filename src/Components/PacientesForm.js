import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postPacientes } from "../actions/PacientesActions"
import { useNavigate } from "react-router-dom";


export default function PacientesForm(){
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const [identidad, Setidentidad] = useState('');
    const [nombre_completo, Setnombre_completo] = useState('');
    const [telefono, Settelefono] = useState('');
    const [fecha_nacimiento, Setfecha_nacimiento] = useState('');
    const [email, Setemail] = useState('');

    function add(){
        const paciente ={
            identidad,
            nombre_completo,
            telefono,
            fecha_nacimiento,
            email
        }
        console.log(paciente);
        dispatch(postPacientes(paciente));
        navigation('/pacientes');
    }

    return(
        <div className="formulario">
            <h2>Registrar Paciente</h2>
            
            <div className="form-group">
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

            <div className="form-group">
                <label>Teléfono</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={telefono}
                onChange={(e) => { Settelefono(e.target.value) }}
                />
            </div>

            <div className="form-group">
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

            <div className="form-group">
                <label>Email</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={email}
                onChange={(e) => { Setemail(e.target.value) }}
                />
            </div>

            <button type='submit' className="btn btn-primary" onClick={add}>Agregar</button>
        </div>
    )
}