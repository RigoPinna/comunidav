import React, { useContext } from 'react';

import { useChangeForm } from '../../hooks/useChangeForm';
import { Input } from '../Inputs/Input';
import { RegisterContext } from './RegisterContext';
import { WrapperButtonsRegister } from './WrapperButtonsRegister';

export const WrapperInputsUserData = () => {
    const { stateProgress } = useContext( RegisterContext );
    const [ inputFormValues, handdleInputChange ] = useChangeForm({ email:'', userName:'', password:'',confirmPass:'' });
    
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
            <Input
                name = { 'password' }
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
