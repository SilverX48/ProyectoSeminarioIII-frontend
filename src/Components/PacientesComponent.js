import '../styles/pacientes.css'

export default function PacientesComponents({paciente}){
    return(
                <tr>
                    <td>{paciente.identidad}</td>
                    <td>{paciente.nombre_completo}</td>
                    <td>{paciente.telefono}</td>
                    <td>{paciente.fecha_nacimiento}</td>
                    <td>{paciente.email}</td>
                    <td><button className='pacientes_button'>Update</button></td>
                    <td><button className='pacientes_button'>Delete</button></td>
                </tr>
    )
}