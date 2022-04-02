import { PrimaryButton, SecondaryButton} from "../../UX/Forms/Button";
import Input from "../../UX/Forms/Input";
import Page from "../../UX/Page/Page";
import Nav from "../../UX/Nav/Nav"

const Signin = ({
    txtIdentidadValue,
    txtNombreValue,
    txtFechaValue,
    txtCorreoValue,
    txtUsuarioValue,
    txtPasswordValue,
    txtRolValue,
    txtEstadoValue,
    onChange: onChangeHandler,
    errorTxtIdentidad,
    errorTxtNombre,
    errorTxtFecha,
    errorTxtCorreo,
    errorTxtUsuario, 
    errorPassword,
    errorTxtRol,
    errorTxtEstado, 
    onConfirmClick, 
    onCancelClick}) => {
    return(
        <Page 
        header={(<h2>&nbsp;Crear Cuenta</h2>)}
        footer={(<Nav/>)}
        >
            <section>
                <Input
                label="Identidad"
                type="text"
                name="txtIdentidad"
                placeholder="Identidad"
                value={txtIdentidadValue}
                error={errorTxtIdentidad}
                onChange={onChangeHandler}
                />
                <Input
                label="Nombre Completo"
                type="text"
                name="txtNombre"
                placeholder="Nombre Completo"
                value={txtNombreValue}
                error={errorTxtNombre}
                onChange={onChangeHandler}
                />
                <Input
                label="Fecha Nacimiento"
                type="text"
                name="txtFecha"
                placeholder="Su Fecha de Nacimiento"
                value={txtFechaValue}
                error={errorTxtFecha}
                onChange={onChangeHandler}
                />

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
                label="Usuario"
                type="text"
                name="txtUsuario"
                placeholder="Usuario"
                value={txtUsuarioValue}
                error={errorTxtUsuario}
                onChange={onChangeHandler}
                />
                <Input
                label="Contraseña"
                type="password"
                name="txtPassword"
                placeholder="Su Contraseña"
                value={txtPasswordValue}
                error={errorPassword}
                info="Minimo 8 caracteres, una Mayuscula, una minuscula, un numero y un simbolo"
                onChange={onChangeHandler}
                />
                <Input
                label="Rol"
                type="text"
                name="txtRol"
                placeholder="Rol"
                value={txtRolValue}
                error={errorTxtRol}
                onChange={onChangeHandler}
                />
                <Input
                label="Estado"
                type="text"
                name="txtEstado"
                placeholder="Estado"
                value={txtEstadoValue}
                error={errorTxtEstado}
                onChange={onChangeHandler}
                />

                <PrimaryButton onClick={onConfirmClick}>
                    Crear Cuenta
                </PrimaryButton>

                <SecondaryButton onClick={onCancelClick}>
                    Tengo Cuenta
                </SecondaryButton>
            </section>

        </Page>
    );
}

export default Signin;