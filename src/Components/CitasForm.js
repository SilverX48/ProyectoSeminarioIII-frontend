import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { postCitas } from "../actions/CitasActions";


export default function CitasForm(){
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const [identidad, Setidentidad] = useState('');
    const [nombre_paciente, Setnombre_paciente] = useState('');
    const [doctor, Setdoctor] = useState('');
    const [diagnostico, Setdiagnostico] = useState('');
    const [precio, Setprecio] = useState('');
    const [fecha, Setfecha] = useState('');

    function add(){
        const cita ={
            identidad, 
            nombre_paciente, 
            doctor,
            diagnostico,
            precio,
            fecha,
        }
        console.log(cita);
        dispatch(postCitas(cita));
        navigation('/citas');
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
            placeholder="Nombre Paciente"
            className="input"
            required
            value={nombre_paciente}
            onChange={(e) => { Setnombre_paciente(e.target.value) }}
            />
            <input
            type='text'
            placeholder="Doctor"
            className="input"
            required
            value={doctor}
            onChange={(e) => { Setdoctor(e.target.value) }}
            />
            <input
            type='text'
            placeholder="Diagnostico"
            className="input"
            required
            value={diagnostico}
            onChange={(e) => { Setdiagnostico(e.target.value) }}
            />
            <input
            type='text'
            placeholder="Precio"
            className="input"
            required
            value={precio}
            onChange={(e) => { Setprecio(e.target.value) }}
            />
            <input
            type='text'
            placeholder="Fecha"
            className="input"
            required
            value={fecha}
            onChange={(e) => { Setfecha(e.target.value) }}
            />
            <button onClick={add}>Agregar</button>
        </div>
    )
}