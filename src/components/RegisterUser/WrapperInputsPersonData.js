import React, { useContext, useState } from 'react'
import { useChangeForm } from '../../hooks/useChangeForm'
import { AlertInForm } from '../alerts/AlertInForm';
import { Input } from '../Inputs/Input'
import { RegisterContext } from './RegisterContext';
import { WrapperButtonsRegister } from './WrapperButtonsRegister';

export const WrapperInputsPersonData = () => {

    const { stateProgress } = useContext( RegisterContext );
    const { formData } = stateProgress;
    const  [ inputFormValues, handdleInputChange,setInputFormValues ] = useChangeForm({ 
                                                        name:formData.name,
                                                        lastName:formData.lastName,
                                                        secondlastName:formData.secondlastName,
                                                        phone:formData.phone, 
                                                        rfc:formData.rfc });
                                                    
    const [ validForm, setValidForm] = useState({
        name:false,
        lastName:false,
        secondlastName:false,
        phone:false, 
        rfc:false});
    return (
            <div className="animate__animated animate__fadeIn">
                <Input 
                    name = {'name'}
                    inputStyle = {'__input'}
                    typeInput = {'text'}
                    value = { inputFormValues.name }
                    placeholder = {'Tu nombre'}
                    onChange = { handdleInputChange }
                />
                {
                    validForm.name 
                        && <AlertInForm 
                                styleAlert={'__alert_error_inForm'}
                                title = {'Error en tu Nombre'}
                                descriptionError = {'Debe contener mínimo dos letras, evite usar acentos y la letra "ñ"'}
                            />
                }
                <Input 
                    name = {'lastName'}
                    inputStyle = {'__input'}
                    typeInput = {'text'}
                    value = { inputFormValues.lastName }
                    placeholder = {'Apellido paterno'}
                    onChange = { handdleInputChange }
                />
                {
                    validForm.lastName 
                        && <AlertInForm 
                                styleAlert={'__alert_error_inForm'}
                                title = {'Error en tu apellido paterno'}
                                descriptionError = {'Debe contener mínimo dos letras, evite usar acentos y la letra "ñ"'}
                            />
                }
                <Input 
                    name = {'secondlastName'}
                    inputStyle = {'__input'}
                    typeInput = {'text'}
                    value = { inputFormValues.secondlastName }
                    placeholder = {'Apellido materno'}
                    onChange = { handdleInputChange }
                />
                {
                    validForm.secondlastName 
                        && <AlertInForm 
                                styleAlert={'__alert_error_inForm'}
                                title = {'Error en tu apellido materno'}
                                descriptionError = {'Debe contener mínimo dos letras, evite usar acentos y la letra "ñ"'}
                            />
                }
                <Input 
                    name = {'phone'}
                    inputStyle = {'__input'}
                    typeInput = {'number'}
                    value = { inputFormValues.phone }
                    placeholder = {'Número de teléfono'}
                    onChange = { handdleInputChange }
                />
                {
                    validForm.secondlastName 
                        && <AlertInForm 
                                styleAlert={'__alert_error_inForm'}
                                title = {'Error en tu numero de teléfono'}
                                descriptionError = {'Debe contener diez dígitos ej. 000-000-0000'}
                            />
                }
                <Input 
                    name = {'rfc'}
                    inputStyle = {'__input'}
                    typeInput = {'text'}
                    value = { inputFormValues.rfc }
                    placeholder = {'RFC'}
                    onChange = { handdleInputChange }
                    setValue = { setInputFormValues }
                    formValues = { inputFormValues }
                />
                 <WrapperButtonsRegister 
                    actualStep = { stateProgress.actualStep }
                    formData = {inputFormValues}
                    validForm = {validForm} 
                    setValidForm= { setValidForm }
                />
            </ div>          
    )
}
