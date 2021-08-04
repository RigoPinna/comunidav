import React, { useContext, useState } from 'react';

import { useChangeForm } from '../../hooks/useChangeForm';
import { AlertInForm } from '../alerts/AlertInForm';
import { Input } from '../Inputs/Input';
import { RegisterContext } from './RegisterContext';
import { RequirementPassword } from './RequirementPassword';
import { WrapperButtonsRegister } from './WrapperButtonsRegister';

export const WrapperInputsUserData = () => {
    const { stateProgress } = useContext( RegisterContext );
    const { formData } = stateProgress;
    const [ inputFormValues, handdleInputChange ] = useChangeForm({ email:formData.email || '', userName:formData.userName || '', 
                                                                    password:formData.password || '',confirmPass:formData.confirmPass || '' });

    const [ validForm, setValidForm ] = useState({ email: false, userName: false, password: false,confirmPass: false })
    return (
        <div className="animate__animated animate__fadeIn">
            <Input
                name = { 'email' }
                onChange = { handdleInputChange }
                typeInput = {'text'}
                inputStyle = {'__input'}
                value  = { inputFormValues.email }
                placeholder = {'Correo electrónico'}
            />
            {
                validForm.email 
                && <AlertInForm 
                        styleAlert={'__alert_error_inForm'}
                        title = {'Error en tu correo electrónico'}
                        descriptionError = { validForm.erroremail }
                    />
            }
            <Input
                name = { 'userName' }
                onChange = { handdleInputChange }
                typeInput = {'text'}
                inputStyle = {'__input'}
                value  = { inputFormValues.userName }
                placeholder = {'Nombre de usuario'}
            />
            {
                validForm.userName 
                && <AlertInForm 
                        styleAlert={'__alert_error_inForm'}
                        title = {'Error en tu nombre de usuario'}
                        descriptionError = { validForm.erroruserName }
                    />
            }
            <Input
                name = { 'password' }
                onChange = { handdleInputChange }
                typeInput = {'password'}
                inputStyle = {'__input'}
                value  = { inputFormValues.password }
                placeholder = {'Contraseña'}
            />
            {
                validForm.password 
                && <AlertInForm 
                        styleAlert={'__alert_error_inForm'}
                        title = {'Error en tu nombre de usuario'}
                        descriptionError = { validForm.errorpassword }
                    />
            }
           <RequirementPassword />
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
                        styleAlert={'__alert_error_inForm'}
                        title = {'Error en tu nombre de usuario'}
                        descriptionError = { validForm.errorconfirmPass }
                    />
            }
            <WrapperButtonsRegister 
                actualStep = { stateProgress.actualStep } 
                formData = { inputFormValues }
                validForm = { validForm }
                setValidForm = { setValidForm } 
            />
        </div>
    )
}
