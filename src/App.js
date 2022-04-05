import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Citas from './Views/Citas';
import CitasAdd from './Views/CitasAdd';
import Login from './Views/Login';
import Menu from './Views/Menu';
import Pacientes from './Views/Pacientes';
import PacientesAdd from './Views/PacientesAdd';
import Reservaciones from './Views/Reservaciones';
import ReservacionesAdd from './Views/ReservacionesAdd';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Menu/>} />
        <Route path='/pacientes' element={<Pacientes />}/>
        <Route path='/pacientesadd' element={<PacientesAdd />}/>
        <Route path='/citas' element={<Citas />}/>
        <Route path='/citasadd' element={<CitasAdd />}/>
        <Route path='/reservaciones' element={<Reservaciones />}/>
        <Route path='/reservacionesadd' element={<ReservacionesAdd/>}/>
      </Routes>
    </Router>
  );
}

export default App;
