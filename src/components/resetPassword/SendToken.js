import React, { useState } from 'react'
import { useChangeForm } from '../../hooks/useChangeForm'
import { closeAlert, openAlert } from '../../reducers/uiReducer'
import { fetchResetPassword } from '../../services/fetchResetPassword'
import { IconMail } from '../iconos/IconMail'
import { Input } from '../Inputs/Input'
import { LoadingInComponent } from '../loadings/LoadingInComponent'

export const SendToken = ({ setStep, setViewAlert, setUser }) => {
    const [ loadig, setLoading ] = useState( false )
    const [ inputValues, handdleInputChange ] = useChangeForm({ email:'' })
    const hanldeSendtoken = ( e ) => {
        e.preventDefault()
        setLoading( true )
        fetchResetPassword({ step:"sendToken", data:inputValues }).then( resp => {
            if( resp.ok ) {
                if ( resp.email ) {
                    if( resp.token ) {
                        setUser({ email:inputValues.email, verify:false, token:null })
                        setStep({ sendEmail: false, verifyToken:true, resetPass: false })
                    } else {
                        const { payload } = openAlert( 
                                'Error',
                                "Ups...Hubo un error al enviar su código, por favor intente más tarde", 
                                ()=> setViewAlert( closeAlert() ) )
                        setViewAlert( payload )
                        setLoading( false )
                    }
    
                } else {
                    const { payload } = openAlert( 
                        "Atención","Algo anda mal con el correo que proporcionó, por favor verifique si es correcto", 
                        ()=> setViewAlert( closeAlert() ) )
                    setViewAlert( payload )
                    setLoading( false )
                }
    
            } else {
                const { payload } = openAlert( 'Error',"Ups... algo salió mal, intente más tarde", ()=> setViewAlert( closeAlert() ) )
                setViewAlert( payload )
                setLoading( false )
            }
        })
    }
    return (
        <>
            <label>Ingresa el correo electrónico con el que registraste tu usuario</label>
                <Input
                    name = "email" 
                    typeInput = {"email"} 
                    inputStyle = {'__input __input_with_icon'} 
                    placeholder = {'Correo electrónico'}
                    InputIcon = { IconMail }
                    value = { inputValues.email }
                    onChange = {handdleInputChange}
                />
                {
                    (inputValues.email.trim() !== "") 
                        && <button 
                                disabled={ loadig } 
                                onClick={ hanldeSendtoken } 
                                className="__btn animate__animated animate__fadeIn">
                                    { 
                                        loadig 
                                            ? <LoadingInComponent />
                                            :"Enviar código"
                                    }
                            </button>
                }
        </>
    )
}
