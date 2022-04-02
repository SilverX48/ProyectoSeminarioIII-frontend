import Signin from "./Signin";
import { useState } from "react";
import { publicAxios } from "../../../Lib/apiClient";

const SigninPage = () =>{
    const [txtIdentidad, setTxtIdentidad] = useState('');
    const [txtNombre, setTxtNombre] = useState('');
    const [txtFecha, setTxtFecha] = useState('');
    const [txtCorreo, setTxtCorreo] = useState('');
    const [txtUsuario, setTxtUsuario] = useState('');
    const [txtPassword, setTxtPassword] = useState('');
    const [txtRol, setTxtRol] = useState('');
    const [txtEstado, setTxtEstado] = useState('');
    const onChangeHandler = ({target: {name, value}})=>{
        switch (name) {
            case 'txtIdentidad':
                setTxtIdentidad(value);
                break;

            case 'txtNombre':
                setTxtNombre(value);
                break;

            case 'txtFecha':
                setTxtFecha(value);
                break;

            case 'txtCorreo':
                setTxtCorreo(value);
                break;

            case 'txtUsuario':
                setTxtUsuario(value);
                break;
        
            case 'txtPassword':
                setTxtPassword(value);
                break;
            
            case 'txtRol':
                setTxtRol(value);
                break;

            case 'txtEstado':
                setTxtEstado(value);
                break;

            default:
                break;
            
        }

    }
    const onConfirm = async(e)=>{
        e.preventDefault();
        e.stopPropagation();
        try{
        const data = publicAxios.post(
            '/api/v1/seguridad_personal/new_user',
            {
                identidad: txtIdentidad,
                nombre_completo: txtNombre,
                fecha_nacimiento: txtFecha,
                email: txtCorreo,
                user: txtUsuario,
                password: txtPassword,
                rol: txtRol,
                estado: txtEstado
            }
        );
        console.log('Signin Request: ', data)
        } catch(ex){
            console.log('Error on Signin submit', ex)
        }
    }

    const onCancel = (e) =>{
        e.preventDefault();
        e.stopPropagation();
    }
    //Comillas invertidas ALT+96
    return(
        <>
        <Signin
            txtIdentidadValue={txtIdentidad}
            txtNombreValue={txtNombre}
            txtFechaValue={txtFecha}
            txtCorreoValue={txtCorreo}
            txtUsuarioValue={txtUsuario}
            txtPasswordValue={txtPassword}
            txtRolValue={txtRol}
            txtEstadoValue={txtEstado}
            onChange={onChangeHandler}
            errorTxtIdentidad=""
            errorTxtNombre=""
            errorTxtFecha=""
            errorTxtCorreo=""
            errorTxtUsuario="" 
            errorPassword=""
            errorTxtRol=""
            errorTxtEstado="" 
            onConfirmClick={onConfirm}
            onCancelClick={onCancel}
        />
        </>
    )
}

export default SigninPage;