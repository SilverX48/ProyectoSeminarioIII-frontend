import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PacientesUpdateForm from './Components/PacientesUpdateForm';
import Citas from './Views/Citas';
import CitasAdd from './Views/CitasAdd';
import Login from './Views/Login';
import Pacientes from './Views/Pacientes';
import PacientesAdd from './Views/PacientesAdd';
import Reservaciones from './Views/Reservaciones';
import ReservacionesAdd from './Views/ReservacionesAdd';
import Home from './Views/Home';
import Signin from './Views/Signin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/pacientes' element={<Pacientes />}/>
        <Route path='/pacientesadd' element={<PacientesAdd />}/>
        <Route path='/pacientesupdate' element={<PacientesUpdateForm />}/>
        <Route path='/citas' element={<Citas />}/>
        <Route path='/citasadd' element={<CitasAdd />}/>
        <Route path='/reservaciones' element={<Reservaciones />}/>
        <Route path='/reservacionesadd' element={<ReservacionesAdd/>}/>
      </Routes>
    </Router>
  );
}

export default App;
