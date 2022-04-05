import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getAllReservaciones } from "../actions/ReservacionesActions";
import ReservacionesComponents from "../Components/ReservacionesComponent";

import NavComponent from "../Components/NavComponent";

export default function Reservaciones(){
    const dispatch = useDispatch();
    const reservacionesState = useSelector(state => state.getAllReservacionesReducers);
    const {reservaciones, error, loading} = reservacionesState;
    useEffect(() =>{
        dispatch(getAllReservaciones());
    },[])
    return(
    <div>
        <NavComponent />
            <div>
                <a href="/reservacionesadd">Agregar Reservaciones</a>
                {loading ? (<h1>Cargando...</h1>): error ? (<h1>Algo esta sucediendo aqui...?</h1>):(
                    <table className="table table-stripped table-dark">
                        <thead>
                            <tr>
                                <th>Identidad</th>
                                <th>Nombre Paciente</th>
                                <th>Fecha</th>
                                <th>Descripcion</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reservaciones.map((reservacion)=>{
                                return <ReservacionesComponents key={reservacion._id} reservaciones={reservacion}/>})
                            }
                        </tbody>
                    </table>
                )} 
            </div>
        </div>
        
    )
}