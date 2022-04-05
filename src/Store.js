import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPacientesReducers, postPacientesReducers} from "./Reducers/PacientesReducers";
import { loginUsuariosReducers } from "./Reducers/UsuariosReducers";
import { getAllCitasReducers , postCitasReducers} from "./Reducers/CitasReducers";
import { getAllReservacionesReducers, postReservacionesReducers} from "./Reducers/ReservacionesReducers";




const finalReducer = combineReducers({
    getAllPacientesReducers: getAllPacientesReducers,
    postPacientesReducers: postPacientesReducers,
    loginUsuariosReducers:loginUsuariosReducers,
    getAllCitasReducers:getAllCitasReducers,
    postCitasReducers:postCitasReducers,
    getAllReservacionesReducers: getAllReservacionesReducers,
    postReservacionesReducers:postReservacionesReducers
})

const usuario_actual=localStorage.getItem('usuario_actual') ? JSON.parse(localStorage.getItem('usuario_actual')):null

const initialState ={
    loginUsuariosReducers:{
        usuario_actual:usuario_actual
    }
}

const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)));

export default store