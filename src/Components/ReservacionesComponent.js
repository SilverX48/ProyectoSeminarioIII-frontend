export default function ReservacionesComponents({reservaciones}){
    return(
                <tr>
                    <td>{reservaciones.fecha}</td>
                    <td>{reservaciones.descripcion}</td>
                    <td><button>Update</button></td>
                    <td><button>Delete</button></td>
                </tr>
    )
}