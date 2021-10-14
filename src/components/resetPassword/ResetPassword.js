import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { useChangeForm } from '../../hooks/useChangeForm';
import { useValidateForm } from '../../hooks/useValidateForm';
import { closeAlert, openAlert } from '../../reducers/uiReducer';
import { fetchResetPassword } from '../../services/fetchResetPassword';
import { AlertInForm } from '../alerts/AlertInForm';
import { IconInputPassword } from '../iconos/IconInputPassword';
import { Input } from '../Inputs/Input'
import { LoadingInComponent } from '../loadings/LoadingInComponent';
import { RequirementPassword } from '../RegisterUser/RequirementPassword';

export const ResetPassword = ({ user, setViewAlert }) => {
    const [loading, setLoading] = useState( false )
    const history = useHistory()
    const [ inputFormValues, handdleInputChange ]= useChangeForm({ password:'',confirmPass:'' });
    const [ validForm, isValid ] = useValidateForm({ password:false, confirmPass:false } ,inputFormValues );
    const hanldeResetPass = e => {
        setLoading( true )
        e.preventDefault();
        if( isValid ) {
            const data = {
                email: user.email,
                code: user.token,
                password: inputFormValues.password,
            }
            console.log( data )
            fetchResetPassword({step:"resetPass", data }).then( resp => {
                console.log( resp )
                if( resp.ok ) {
                        if( resp.verify ) {
                            const { payload } = openAlert( 
                                '¡Perfecto!',
                                "Se ha actualizado tu contraseña correctamente", 
                                ()=> history.replace("/login"))
                        setViewAlert( payload )
                        } else {
                            const { payload } = openAlert( 
                                    'Error',
                                    "Algo salió mal, vuelve a intentar", 
                                    ()=> setViewAlert( closeAlert() ))
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
    }
    return (
        <>
            <label>Ingresa tu nueva contraseña: </label>
            <Input
                name = { 'password' }
                onChange = { handdleInputChange }
                typeInput = {'password'}
                inputStyle = {'__input __input_with_icon'}
                InputIcon = { IconInputPassword }
                value  = { inputFormValues.password }
                placeholder = {'Nueva contraseña'}
            />
            {
                validForm.password 
                && <AlertInForm 
                        styleAlert={'__alert_error_inForm'}
                        title = {'Error en contraseñas'}
                        descriptionError = { validForm.errorpassword }
                    />
            }
             <label>Confirma tu nueva contraseña: </label>
            <Input
                name = { 'confirmPass' }
                onChange = { handdleInputChange }
                typeInput = {'password'}
                inputStyle = {'__input __input_with_icon'}
                InputIcon = { IconInputPassword }
                value  = { inputFormValues.confirmPass }
                placeholder = {'Confirmar contraseña'}
            />
            {
                validForm.confirmPass 
                && <AlertInForm 
                        styleAlert={'__alert_error_inForm'}
                        title = {'Error en contraseñas'}
                        descriptionError = { validForm.errorconfirmPass }
                    />
            }
            <RequirementPassword />
            <button
                disabled = { loading } 
                className="__btn"
                onClick={ hanldeResetPass }>
                    {
                        loading 
                            ? <LoadingInComponent />
                            : "Actualizar contraseña"
                    }
                </button>
        </>
    )
}
