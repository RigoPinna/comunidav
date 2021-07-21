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

export const Login = ({history}) => {
    const [inputValues, handleOnChange ] = useChangeForm({ user:'', password: ''});
    const [ isLoading, setLoading ] = useLoadingButton( );
    const verifyLogin = ( ) => {
        setLoading( !isLoading );
        fetchLogin( inputValues).then( resp => {
            if ( resp.isVerify ) {
                setLoading( !isLoading );
                localStorage.setItem( 'uid', resp.userID );
                history.replace(`/association/${resp.userID}`)
            } else {

            }
        });
    }
    return (
        <div className="__wrapper_login">
        <ComunidavLogo />
        <h1>Iniciar sesión <span></span></h1>
        <div className ="__wrapper_login_body">
           <form autoComplete ="false">
               <Input
                    name = "user" 
                    typeInput = {"text"} 
                    inputStyle = {'__input __input_with_icon'} 
                    placeholder = {'Usuario y/o email'}
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
                <button
                    onClick = { verifyLogin }
                    className = "__btn"
                    disabled = { isLoading }
                    >
                        { 
                            isLoading
                                ? <LoadingInComponent />
                                : 'Iniciar sesión' 
                        }
                </button>
           </form>
        </div>
        <FooterPage />
    </div>
    )
}
