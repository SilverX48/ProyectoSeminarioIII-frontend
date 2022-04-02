import Login from "./Login";
import { useDispatch , useSelector} from "react-redux";
import { useState } from "react";
import { publicAxios } from "../../../Lib/apiClient";
import Loading from "../../UX/Loading/Loading";

const LoginPage = () =>{
    const { isLoading, errors} = useSelector((state) =>{return state.security});
    const dispatch = useDispatch();
    const [txtCorreo, setTxtCorreo] = useState('');
    const [txtPassword, setTxtPassword] = useState('');
    const onChangeHandler = ({target: {name, value}})=>{
        switch (name) {
            case 'txtCorreo':
                setTxtCorreo(value);
                break;
        
            case 'txtPassword':
                setTxtPassword(value);
                break;

            default:
                break;
            
        }

    }
    const onConfirm = async(e)=>{
        e.preventDefault();
        e.stopPropagation();
        try{
        dispatch({type:'ON_LOGIN_LOADING', payload:{}})
        const data = await publicAxios.post(
            '/api/v1/seguridad/login',
            {
                email: txtCorreo,
                password: txtPassword
            }
        );
        console.log('Login Request: ', data.data)
        const {jwt:jwtToken, user} = data.data;

        dispatch({ type:'ON_LOGIN_SUCCESS', payload:{jwtToken, ...user}});
        } catch(ex){
            dispatch({type:'ON_LOGIN_ERROR', payload:{errors:['Credenciales Incorrectas!']}});
        console.log('Error on Login submit', ex)
        }
    }

    const onCancel = (e) =>{
        e.preventDefault();
        e.stopPropagation();
    }
    //Comillas invertidas ALT+96
    return(
        <>
        {isLoading && <Loading />}
        <Login
        txtCorreoValue={txtCorreo}
         txtPasswordValue={txtPassword}
         onChange={onChangeHandler}
         errorTxtCorreo=''
         errorPassword={errors.length && errors.join(' ')}
         onConfirmClick={onConfirm}
         onCancelClick={onCancel}
        />
        </>
    )
}

export default LoginPage;