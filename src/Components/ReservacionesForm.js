import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { postReservaciones } from "../actions/ReservacionesActions";



export default function ReservacionesForm(){
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const [identidad, Setidentidad] = useState('');
    const [nombre_paciente, Setnombre_paciente] = useState(''); 
    const [fecha, Setfecha] = useState('');
    const [descripcion, Setdescripcion] = useState('');

    function add(){
        const reservacion ={
            identidad,
            nombre_paciente,
            fecha,
            descripcion,
        }
        console.log(reservacion);
        dispatch(postReservaciones(reservacion));
        navigation('/reservaciones');
    }

    return(
        <div className="formulario">
            <h2>Registrar Reservación</h2>
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
                <label>Fecha</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={fecha}
                onChange={(e) => { Setfecha(e.target.value) }}
                />
            </div>
            
            <div className="form-group">
                <label>Descripcion</label>
                <input
                type='text'
                placeholder=""
                className="form-control"
                required
                value={descripcion}
                onChange={(e) => { Setdescripcion(e.target.value) }}
                />
            </div>

            <button type='submit' className="btn btn-primary" onClick={add}>Agregar</button>
        </div>
    )
}