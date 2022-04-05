import { useDispatch } from "react-redux";
import { logoutUsuario } from "../actions/UsuariosActions";

export default function NavComponent (){

    const dispatch = useDispatch();
    return(
    <header className="header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="navbar-brand m-0" href="">Welcome!</p>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pacientes">Pacientes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/citas">Citas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/reservaciones">Reservaciones</a>
          </li>
          <a onClick={()=>{dispatch(logoutUsuario())}} className="btn">Salir</a>
        </ul>
      </div>
    </nav>
  </header>
    )
}