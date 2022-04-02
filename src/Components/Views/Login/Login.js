import { PrimaryButton, SecondaryButton} from "../../UX/Forms/Button";
import Input from "../../UX/Forms/Input";
import Page from "../../UX/Page/Page";

const Login = ({
    txtCorreoValue, 
    txtPasswordValue, 
    onChange: onChangeHandler, 
    errorTxtCorreo, 
    errorPassword, 
    onConfirmClick, 
    onCancelClick}) => {
    return(
        <Page 
        header={(<h2>&nbsp;Iniciar Sesion</h2>)}
        >
            <section>
                <Input
                label="Correo Electronico"
                type="text"
                name="txtCorreo"
                placeholder="Su Correo Electronico"
                value={txtCorreoValue}
                error={errorTxtCorreo}
                onChange={onChangeHandler}
                />
                <Input
                label="Contraseña"
                type="password"
                name="txtPassword"
                placeholder="Su Contraseña"
                value={txtPasswordValue}
                error={errorPassword}
                hasError={!!(errorPassword && true)}
                info="Minimo 8 caracteres, una Mayuscula, una minuscula, un numero y un simbolo"
                onChange={onChangeHandler}
                />

                <PrimaryButton onClick={onConfirmClick}>
                    Iniciar Sesion
                </PrimaryButton>

                <SecondaryButton onClick={onCancelClick}>
                    Crear Cuenta
                </SecondaryButton>
            </section>

        </Page>
    );
}

export default Login;