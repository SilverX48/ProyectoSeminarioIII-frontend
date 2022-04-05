import { useNavigate } from 'react-router-dom'

export default function PacientesComponents({paciente}){
    const navigation = useNavigate();
    function onClick(){
        navigation('/pacientesUpdate');
    }
    return(
                <tr>
                    <td>{paciente.identidad}</td>
                    <td>{paciente.nombre_completo}</td>
                    <td>{paciente.telefono}</td>
                    <td>{paciente.fecha_nacimiento}</td>
                    <td>{paciente.email}</td>
                    <td><button className="btn btn-primary" onClick={onClick}>Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
    )
}