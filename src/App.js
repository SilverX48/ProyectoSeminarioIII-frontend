import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './Views/Login';
import Pacientes from './Views/Pacientes';
import PacientesAdd from './Views/PacientesAdd';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/pacientes' element={<Pacientes />}/>
        <Route path='/pacientesadd' element={<PacientesAdd />}/>
        
      </Routes>
    </Router>
  );
}

export default App;
