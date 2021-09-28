import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

import { Link } from 'react-router-dom'
import { useChangeForm } from '../../hooks/useChangeForm'
import { fetchLogin } from '../../services/fetchLogin'
import { ComunidavLogo } from '../iconos/ComunidavLogo'
import { IconInputPassword } from '../iconos/IconInputPassword'
import { IconInputUser } from '../iconos/IconInputUser'
import { Input } from '../Inputs/Input'
import { LoadingInComponent } from '../loadings/LoadingInComponent'
import { MessageErrorInput } from '../MessageError/MessageErrorInput'

export const Login = ({history}) => {
    const [ stateResp, setStateResp ] = useState({isError: false, message:'',isLoading:false});
    const [ inputValues, handleOnChange ] = useChangeForm({ user:'', password: ''});
    const btnSubmit = useRef( null );
    useEffect(() => {
        const haveToken = sessionStorage.getItem('token');
        const uid = localStorage.getItem('uid');
        ( haveToken && uid ) && history.replace( `/profile` )
    }, [])
    const verifyLogin = ( ) => {
        setStateResp({...stateResp,...{isLoading:true}});
        fetchLogin( inputValues).then( resp => {
            if ( !resp.isError ) {
                setStateResp({
                    isError: false,
                    message: '',
                    isLoading: false,
                });
                if ( resp.isVerify ) {
                    localStorage.setItem( 'uid', resp.userID );
                    sessionStorage.setItem( 'token',resp.token );
                    history.replace(`/profile`);
                    return ;
                } 
                localStorage.setItem( 'uid', resp.userID );
                sessionStorage.setItem( 'token',resp.token );
                history.replace('verify');
                
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
                    placeholder = {'Usuario o correo electrónico'}
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
           <div className ="__wrapper_login_footer">
                <button
                    ref ={ btnSubmit }
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
           </form>
        </div>
    </div>
    )
}
