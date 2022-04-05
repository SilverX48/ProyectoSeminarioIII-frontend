import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


import { getAllPacientes } from "../actions/PacientesActions"
import { logoutUsuario } from "../actions/UsuariosActions";
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
            {loading ? (<h1>Cargando...</h1>): error ? (<h1>Algo esta sucediendo aqui...?</h1>):(
                pacientes.map((paciente)=>{
                    return <div key={paciente._id}>
                        <div>
                            <PacientesComponents paciente={paciente}/>
                        </div>
                    </div>
                })
            )}
            <a href="/pacientesadd">Agregar Pacientes</a>
            <a onClick={()=>{dispatch(logoutUsuario())}} className="btn">Salir</a> 
        </div>
    )
}