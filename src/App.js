import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';


import {store, persistor} from './Store';
import './App.css';
import Login from './Components/Views/Login/LoginPage';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/Signin/SinginPage';


function App() {
  return (
    
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Splash/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<Signin/>}/>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;