import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


import { getAllPacientes } from "../actions/PacientesActions"

import NavComponent from "../Components/NavComponent";
import PacientesComponents from "../Components/PacientesComponent";


export default function Pacientes(){
    const dispatch = useDispatch();
    const pacientesState = useSelector(state => state.getAllPacientesReducers);
    const {pacientes,error, loading} = pacientesState;
    useEffect(() =>{
        dispatch(getAllPacientes());
    },[])
    return(
    <div>
        <NavComponent />
            <div>
                <a href="/pacientesadd">Agregar Pacientes</a>

                {loading ? (<h1>Cargando...</h1>): error ? (<h1>Algo esta sucediendo aqui...?</h1>):(
                    <table className="table table-stripped table-dark">
                        <thead>
                        <tr>
                            <th>Identidad</th>
                            <th>Nombre Completo</th>
                            <th>Telefono</th>
                            <th>Fecha Nacimiento</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            pacientes.map((paciente)=>{
                            return <PacientesComponents key={paciente._id} paciente={paciente}/>})
                        }
                        </tbody>
                    </table>

                )}
            </div>
        </div>
        
    )
}