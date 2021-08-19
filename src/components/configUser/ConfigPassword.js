import React from 'react';
import { useChangeForm } from '../../hooks/useChangeForm';
import { Input } from '../Inputs/Input';

export const ConfigPassword = () => {
    const [ inputFormValues, handdleInputChange ]= useChangeForm({password:'',confirmPass:'', newPassword:''});
    return (
        <div className ="animate__animated animate__bounce animate__fadeIn">
             <Input
                name = { 'password' }
                onChange = { handdleInputChange }
                typeInput = {'password'}
                inputStyle = {'__input'}
                value  = { inputFormValues.password }
                placeholder = {'Contraseña actual'}
            />
             <Input
                name = { 'newPassword' }
                onChange = { handdleInputChange }
                typeInput = {'password'}
                inputStyle = {'__input'}
                value  = { inputFormValues.newPassword }
                placeholder = {'Nueva contraseña'}
            />
             <Input
                name = { 'confirmPass' }
                onChange = { handdleInputChange }
                typeInput = {'password'}
                inputStyle = {'__input'}
                value  = { inputFormValues.confirmPass }
                placeholder = {'Confirmar contraseña'}
            />
            
        </div>
    )
}
