import React, { useContext } from 'react';

import { useChangeForm } from '../../hooks/useChangeForm';
import { Input } from '../Inputs/Input';
import { RegisterContext } from './RegisterContext';
import { WrapperButtonsRegister } from './WrapperButtonsRegister';

export const WrapperInputsUserData = () => {
    const { stateProgress } = useContext( RegisterContext );
    const { formData } = stateProgress;
    const [ inputFormValues, handdleInputChange ] = useChangeForm({ 
                                                        email:formData.email || '', 
                                                        userName:formData.userName || '', 
                                                        password:formData.password || '',
                                                        confirmPass:formData.confirmPass || '' });
    
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
            <Input
                name = { 'userName' }
                onChange = { handdleInputChange }
                typeInput = {'text'}
                inputStyle = {'__input'}
                value  = { inputFormValues.userName }
                placeholder = {'Nombre de usuario'}
            />
            <Input
                name = { 'password' }
                onChange = { handdleInputChange }
                typeInput = {'password'}
                inputStyle = {'__input'}
                value  = { inputFormValues.password }
                placeholder = {'Contraseña'}
            />
            <div className="__form_wrapper_info_password">
                <h5>Requisitos de contraseña</h5>
                <p> -Al menos 8 caracteres</p>
                <p> -Sin espacios en blanco</p>
                <p> -Al menos un dígito</p>
                <p> -Al menos un letra MAYÚSCULA y una letra minúscula</p>
            </div>
            <Input
                name = { 'confirmPass' }
                onChange = { handdleInputChange }
                typeInput = {'password'}
                inputStyle = {'__input'}
                value  = { inputFormValues.confirmPass }
                placeholder = {'Confirmar contraseña'}
            />
            
           
            <WrapperButtonsRegister actualStep = { stateProgress.actualStep } formData = {inputFormValues} />
        </div>
    )
}
