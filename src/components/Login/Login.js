import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { useChangeForm } from '../../hooks/useChangeForm'
import { useLoadingButton } from '../../hooks/useLoadingButton'

import { fetchLogin } from '../../services/fetchLogin'
import { FooterPage } from '../FooterPage'
import { ComunidavLogo } from '../iconos/ComunidavLogo'
import { IconInputPassword } from '../iconos/IconInputPassword'
import { IconInputUser } from '../iconos/IconInputUser'
import { Input } from '../Inputs/Input'
import { LoadingInComponent } from '../loadings/LoadingInComponent'
import { MessageErrorInput } from '../MessageError/MessageErrorInput'

export const Login = ({history}) => {
    const [ stateResp, setStateResp ] = useState({isError: false, message:'',isLoading:false});
    const [ inputValues, handleOnChange ] = useChangeForm({ user:'', password: ''});
    const verifyLogin = ( ) => {
        setStateResp({...stateResp,...{isLoading:true}});
        fetchLogin( inputValues).then( resp => {
            if ( !resp.isError ) {
                if ( resp.isVerify ) {
                    setStateResp({
                        isError: false,
                        message: '',
                        isLoading: false,
                    });
                    localStorage.setItem( 'uid', resp.userID );
                    history.replace(`user?q=${resp.userID}`)
                } else {
    
                }
            } else {
                setStateResp({
                    isError: true,
                    message: resp.typeError,
                    isLoading: false,
                });
            }
        });
    }
    return (
        <div className="__wrapper_login">
        <ComunidavLogo />
        <h1>Iniciar sesión <span></span></h1>
        <p>Nosotros tenemos que ser el cambio que queremos ver en el mundo.</p>
        <div className ="__wrapper_login_body">
           <form autoComplete ="false">
                { 
                    stateResp.isError 
                    && <MessageErrorInput  messageError = { stateResp.message }/> 
                }
               <Input
                    name = "user" 
                    typeInput = {"text"} 
                    inputStyle = {'__input __input_with_icon'} 
                    placeholder = {'Usuario y/o correo electrónico'}
                    InputIcon = { IconInputUser }
                    value = {inputValues.user}
                    onChange = {handleOnChange}
                />
               <Input
                    name = "password" 
                    typeInput = {"password"} 
                    inputStyle = {'__input __input_with_icon'} 
                    placeholder = {'Contraseña'}
                    InputIcon = { IconInputPassword }
                    value = {inputValues.password}
                    onChange = {handleOnChange}
                />

                <Link to= "/" className ="__forgot_password">¿Olvidaste tu contraseña?</Link>
           </form>
           <div className ="__wrapper_login_footer">
                <button
                    onClick = { verifyLogin }
                    className = "__btn"
                    disabled = {  stateResp.isLoading }
                    >
                        { 
                             stateResp.isLoading
                                ? <LoadingInComponent />
                                : 'Iniciar sesión' 
                        }
                </button>
                <Link className ="__btn_register" to='/register'>
                    ¿No tienes una cuenta?, resgistrate aqui.
                </Link>
            </div>
        </div>
    </div>
    )
}
