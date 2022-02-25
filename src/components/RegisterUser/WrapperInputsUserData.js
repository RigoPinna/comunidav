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
                                                                    password:formData.password || '',confirmPass:formData.confirmPass || '' })
    const [ validForm, setValidForm ] = useState({ email: false, userName: false, password: false,confirmPass: false, terms:false })
    const hanldeTerms = () => {
        setValidForm({ ...validForm, terms:!validForm.terms })
    }
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
                        title = {'Error en la contraseña'}
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
                        title = {'Error en contraseñas'}
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
                        title = {'Error en contraseñas'}
                        descriptionError = { validForm.errorconfirmPass }
                    />
            }
            <div>
                <input
                    type="checkbox"
                    checked={ validForm.terms } 
                    name="terms" 
                    onChange={ hanldeTerms } 
                />
                <label class="__forms_txt_terms">
                    Acepto los <a href="/">"Términos y condiciones de uso"</a> y <a href="/">"Aviso de privacidad"</a>.
                </label>
            </div>
            <WrapperButtonsRegister 
                actualStep = { stateProgress.actualStep } 
                formData = { inputFormValues }
                validForm = { validForm }
                setValidForm = { setValidForm } 
            />
        </div>
    )
}
