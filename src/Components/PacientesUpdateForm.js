import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { updatePacientes } from "../actions/PacientesActions";


export default function PacientesUpdateForm(){
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
        dispatch(updatePacientes(paciente));
        navigation('/pacientes');
    }

    return(
        <div>
            <input
            type='text'
            placeholder="Identidad"
            className="input"
            required
            value={identidad}
            onChange={(e) => { Setidentidad(e.target.value) }}
            />
            <input
            type='text'
            placeholder="Nombre Completo"
            className="input"
            required
            value={nombre_completo}
            onChange={(e) => { Setnombre_completo(e.target.value) }}
            />
            <input
            type='text'
            placeholder="Telefono"
            className="input"
            required
            value={telefono}
            onChange={(e) => { Settelefono(e.target.value) }}
            />
            <input
            type='text'
            placeholder="Fecha Nacimiento"
            className="input"
            required
            value={fecha_nacimiento}
            onChange={(e) => { Setfecha_nacimiento(e.target.value) }}
            />
            <input
            type='text'
            placeholder="Email"
            className="input"
            required
            value={email}
            onChange={(e) => { Setemail(e.target.value) }}
            />
            <button onClick={add}>Agregar</button>
        </div>
    )
}