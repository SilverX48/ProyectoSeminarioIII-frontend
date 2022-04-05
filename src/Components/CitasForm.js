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
        <div className="formulario">
            <h2>Registrar Cita</h2>
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
                <label>Nombre de Paciente</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={nombre_paciente}
                onChange={(e) => { Setnombre_paciente(e.target.value) }}
                />
            </div>

            <div className="form-group">
                <label>Nombre Doctor</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={doctor}
                onChange={(e) => { Setdoctor(e.target.value) }}
                />
            </div>

            <div className="form-group">
                <label>Diagnostico</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={diagnostico}
                onChange={(e) => { Setdiagnostico(e.target.value) }}
                />
            </div>

            <div className="form-group">
                <label>Precio</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={precio}
                onChange={(e) => { Setprecio(e.target.value) }}
                />
            </div>

            <div className="form-group">
                <label>Fecha</label>
                <input
                type='date'
                placeholder=""
                className="form-control"
                required
                value={fecha}
                onChange={(e) => { Setfecha(e.target.value) }}
                />
            </div>

            <button  type='submit' className="btn btn-primary" onClick={add}>Agregar</button>
        </div>
    )
}