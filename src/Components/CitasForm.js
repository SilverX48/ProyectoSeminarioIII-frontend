import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { postCitas } from "../actions/CitasActions";


export default function CitasForm(){
    const dispatch = useDispatch();
    const navigation = useNavigate(); 
    const [diagnostico, Setdiagnostico] = useState('');
    const [precio, Setprecio] = useState('');
    const [fecha, Setfecha] = useState('');

    function add(){
        const cita ={
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