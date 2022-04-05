export default function CitasComponents({cita}){
    return(
                <tr>
                    <td>{cita.identidad}</td>
                    <td>{cita.nombre_paciente}</td>
                    <td>{cita.doctor}</td>
                    <td>{cita.diagnostico}</td>
                    <td>{cita.precio}</td>
                    <td>{cita.fecha}</td>
                    <td><button className="btn btn-primary">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
    )
}