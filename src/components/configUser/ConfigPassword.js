import React, { useState } from 'react';
import { useChangeForm } from '../../hooks/useChangeForm';
import { Input } from '../Inputs/Input';
import { RequirementPassword } from '../RegisterUser/RequirementPassword';
import { LoadingInComponent } from '../loadings/LoadingInComponent';
import { IconCheck } from '../iconos/IconCheck';
import { useDispatch, useSelector } from 'react-redux';
import { useValidateForm } from '../../hooks/useValidateForm';
import { AlertInForm } from '../alerts/AlertInForm';
import { updatePasswordUser } from '../../reducers/authReducer';

export const ConfigPassword = () => {
    const dispatch = useDispatch();
    const [ validForm, setValidForm ] = useState({oldPassword:false, errorOldPassword:"Ingresa tu contraseña actual"});
    const { loadingInComponent } = useSelector( state => state.uiReducer )
    const [ inputFormValues, handdleInputChange ]= useChangeForm({ oldPassword:'',password:'',confirmPass:''});
    const  [ OBJ_VALIDATE_TEMPORALLY, isValid ] = useValidateForm({ password:false, confirmPass:false },{ password:inputFormValues.password, confirmPass:inputFormValues.confirmPass });
    const handleUpdatePassword = e => {
        e.preventDefault();
        if ( inputFormValues.oldPassword.trim() != '' ) {
            if ( inputFormValues.oldPassword === inputFormValues.password ) {
                setValidForm({...validForm, oldPassword:true, errorOldPassword:"No pudes ingresar una nueva contraseña exactamente igual a tu actual contraseña" })
            } else {
                if ( isValid ) {
                    dispatch( updatePasswordUser( inputFormValues.oldPassword, inputFormValues.password ) ); 
                }
                setValidForm({...OBJ_VALIDATE_TEMPORALLY, oldPassword:false });
            }
            return ;
        } 
        setValidForm({...validForm, oldPassword:true,errorOldPassword:"Ingresa tu contraseña actual" });
    }
    return (
        <div className ="animate__animated animate__bounce animate__fadeIn">
            <p>Contraseña actual:</p>
             <Input
                name = { 'oldPassword' }
                onChange = { handdleInputChange }
                typeInput = {'password'}
                inputStyle = {'__input'}
                value  = { inputFormValues.oldPassword }
                placeholder = {'Contraseña actual'}
            />
             {
                validForm.oldPassword 
                    && <AlertInForm 
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error en tu contraseña actual' }
                            descriptionError = { validForm.errorOldPassword }
                        />
            }
            <p>Nueva contraseña:</p>
             <Input
                name = { 'password' }
                onChange = { handdleInputChange }
                typeInput = {'password'}
                inputStyle = {'__input'}
                value  = { inputFormValues.password }
                placeholder = {'Nueva contraseña'}
            />
            {
                validForm.password 
                    && <AlertInForm 
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error en tu nueva contraseña' }
                            descriptionError = { validForm.errorpassword }
                        />
            }
            <p>Confirmar contraseña nueva:</p>
             <Input
                name = { 'confirmPass' }
                onChange = { handdleInputChange }
                typeInput = {'password'}
                inputStyle = {'__input'}
                value  = { inputFormValues.confirmPass }
                placeholder = {'Confirmar contraseña'}
            />
            {
                validForm.confirmPass
                    && <AlertInForm 
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error al confirmar tu contraseña' }
                            descriptionError = { validForm.errorconfirmPass }
                        />
            }
            <RequirementPassword />
            <button 
                disabled = { loadingInComponent } 
                onClick = { handleUpdatePassword } 
                className="__btn ">
                    {
                        loadingInComponent 
                            ? <LoadingInComponent />
                            : <> <IconCheck /> <p>Guardar cambios</p> </>
                    }
            </button> 
        </div>
    )
}
