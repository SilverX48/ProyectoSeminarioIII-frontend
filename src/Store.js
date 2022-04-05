import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPacientesReducers, postPacientesReducers} from "./Reducers/PacientesReducers";
import { loginUsuariosReducers } from "./Reducers/UsuariosReducers";

const finalReducer = combineReducers({
    getAllPacientesReducers: getAllPacientesReducers,
    postPacientesReducers: postPacientesReducers,
    loginUsuariosReducers:loginUsuariosReducers
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