import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { postReservaciones } from "../actions/ReservacionesActions";



export default function ReservacionesForm(){
    const dispatch = useDispatch();
    const navigation = useNavigate(); 
    const [fecha, Setfecha] = useState('');
    const [descripcion, Setdescripcion] = useState('');

    function add(){
        const reservacion ={
            fecha,
            descripcion,
        }
        console.log(reservacion);
        dispatch(postReservaciones(reservacion));
        navigation('/reservaciones');
    }

    return(
        <div>
            <input
            type='text'
            placeholder="Fecha"
            className="input"
            required
            value={fecha}
            onChange={(e) => { Setfecha(e.target.value) }}
            />
            <input
            type='text'
            placeholder="Descripcion"
            className="input"
            required
            value={descripcion}
            onChange={(e) => { Setdescripcion(e.target.value) }}
            />
            <button onClick={add}>Agregar</button>
        </div>
    )
}