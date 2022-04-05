import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


import { getAllCitas } from "../actions/CitasActions";
import CitasComponents from "../Components/CitasComponent";

import NavComponent from "../Components/NavComponent";



export default function Citas(){
    const dispatch = useDispatch();
    const citasState = useSelector(state => state.getAllCitasReducers);
    const {citas, error, loading} = citasState;
    useEffect(() =>{
        dispatch(getAllCitas());
    },[])
    return(
    <div>
        <NavComponent />
            <div>
                {loading ? (<h1>Cargando...</h1>): error ? (<h1>Algo esta sucediendo aqui...?</h1>):(
                    <table className="table table-hover">
                        <tr>
                            <th>Diagnostico</th>
                            <th>Precio</th>
                            <th>Fecha</th>
                            <th></th>
                            <th></th>
                        </tr>
                        {
                            citas.map((cita)=>{
                            return <CitasComponents key={cita._id} cita={cita}/>})
                        }

                    </table>

                )}
                
                <a href="/citasadd">Agregar Citas</a>
                 
            </div>
        </div>
        
    )
}