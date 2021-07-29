import React, { useContext } from 'react'
import { useChangeForm } from '../../hooks/useChangeForm'
import { Input } from '../Inputs/Input'
import { RegisterContext } from './RegisterContext';
import { WrapperButtonsRegister } from './WrapperButtonsRegister';

export const WrapperInputsPersonData = () => {

    const { stateProgress } = useContext( RegisterContext );
    const  [ inputFormValues, handdleInputChange ] = useChangeForm({ name:'',lastName:'',secondlastName:'', phone:'', rfc:'' });
   
    return (
            <div className="animate__animated animate__fadeIn">
                <Input 
                    name = {'name'}
                    inputStyle = {'__input'}
                    typeInput = {'text'}
                    value = { inputFormValues.personName }
                    placeholder = {'Tu nombre(s)'}
                    onChange = { handdleInputChange }
                />
                <Input 
                    name = {'lastName'}
                    inputStyle = {'__input'}
                    typeInput = {'text'}
                    value = { inputFormValues.lastName }
                    placeholder = {'Apellido paterno'}
                    onChange = { handdleInputChange }
                />
                <Input 
                    name = {'secondlastName'}
                    inputStyle = {'__input'}
                    typeInput = {'text'}
                    value = { inputFormValues.SecondlastName }
                    placeholder = {'Apellido materno'}
                    onChange = { handdleInputChange }
                />
                <Input 
                    name = {'phone'}
                    inputStyle = {'__input'}
                    typeInput = {'number'}
                    value = { inputFormValues.phone }
                    placeholder = {'Número de teléfono'}
                    onChange = { handdleInputChange }
                />
                <Input 
                    name = {'rfc'}
                    inputStyle = {'__input'}
                    typeInput = {'text'}
                    value = { inputFormValues.rfc }
                    placeholder = {'RFC'}
                    onChange = { handdleInputChange }
                />
                 <WrapperButtonsRegister 
                    actualStep = { stateProgress.actualStep }
                    formData = {inputFormValues} 
                />
            </ div>          
    )
}
