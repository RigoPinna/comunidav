import React from 'react'
import { useChangeForm } from '../../hooks/useChangeForm'
import { Input } from '../Inputs/Input'

export const WrapperInputsPersonData = () => {
    const  [ inputFormValues, handdleInputChange ] = useChangeForm({ name:'',lastName:'',SecondlastName:'', phone:'', rfc:'' });
    return (
            <>
                <Input 
                    name = {'name'}
                    inputStyle = {'__input'}
                    typeInput = {'text'}
                    value = { inputFormValues.personName }
                    placeholder = {'Tu nombre completo'}
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
                    name = {'SecondlastName'}
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
                    placeholder = {'Nùmero de telèfono'}
                    onChange = { handdleInputChange }
                />
                <Input 
                    name = {'phone'}
                    inputStyle = {'__input'}
                    typeInput = {'text'}
                    value = { inputFormValues.rfc }
                    placeholder = {'RFC'}
                    onChange = { handdleInputChange }
                />
                <button>Clic aqui para asignar RFC genèrico</button>
                
            </>          
    )
}
