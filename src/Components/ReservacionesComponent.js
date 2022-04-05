export default function ReservacionesComponents({reservaciones}){
    return(
                <tr>
                    <td>{reservaciones.identidad}</td>
                    <td>{reservaciones.nombre_paciente}</td>
                    <td>{reservaciones.fecha}</td>
                    <td>{reservaciones.descripcion}</td>
                    <td><button className="btn btn-primary">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
    )
}