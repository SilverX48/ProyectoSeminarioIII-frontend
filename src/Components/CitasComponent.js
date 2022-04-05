export default function CitasComponents({cita}){
    return(
                <tr>
                    <td>{cita.diagnostico}</td>
                    <td>{cita.precio}</td>
                    <td>{cita.fecha}</td>
                    <td><button>Update</button></td>
                    <td><button>Delete</button></td>
                </tr>
    )
}