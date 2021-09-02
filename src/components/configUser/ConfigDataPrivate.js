import React from 'react'


import { useChangeData } from '../../hooks/useChangeData'
import { useChangeForm } from '../../hooks/useChangeForm'
import { useSaveData } from '../../hooks/useSaveData'
import { useUpdateUserData } from '../../hooks/useUpdateUserData'
import { useValidateForm } from '../../hooks/useValidateForm'

import { AlertInForm } from '../alerts/AlertInForm'
import { IconCheck } from '../iconos/IconCheck'
import { Input } from '../Inputs/Input'
import { LoadingInComponent } from '../loadings/LoadingInComponent'

export const ConfigDataPrivate = ( oldData ) => {
    const [ isSaved, setIsSaved ] = useSaveData();
    const { namePerson:name, lastName, secondlastName, rfc, phone, email } = oldData;
    const [ inputFormValues, handdleInputChange,setInputFormValues  ]= useChangeForm({
        name, 
        lastName, 
        secondlastName, 
        rfc, 
        phone 
    });
    const [ isDiferent,setIsDiferent ] = useChangeData( inputFormValues, {
         name,
         lastName,
         secondlastName, 
         rfc,
         phone });
    const [ validForm, isValid ] = useValidateForm({
         
        name:false,
        lastName:false,
        secondlastName:false, 
        rfc:false,
        phone:false }, inputFormValues)
   const [isLoading, handleSaveData ] = useUpdateUserData( setIsDiferent, setIsSaved, isValid, inputFormValues, oldData )
    return (
        <>
        <div className ={"animate__animated animate__bounce animate__fadeIn"}>
            <p>Nombre:</p>
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
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error en tu Nombre' }
                            descriptionError = { validForm.errorname }
                        />
            }
            <p>Apellido paterno:</p>
            <Input 
                name = {'lastName'}
                inputStyle = {'__input'}
                typeInput = {'text'}
                value = { inputFormValues.lastName }
                placeholder = {'Tu nombre'}
                onChange = { handdleInputChange }
            />
             {
                validForm.lastName 
                    && <AlertInForm 
                            styleAlert = { '__alert_error_inForm' }
                            title = { 'Error en tu apellido paterno' }
                            descriptionError = { validForm.errorlastName }
                        />
            }  
            <p>Apellido materno:</p>
            <Input 
                name = {'secondlastName'}
                inputStyle = {'__input'}
                typeInput = {'text'}
                value = { inputFormValues.secondlastName }
                placeholder = {'Tu nombre'}
                onChange = { handdleInputChange }
            />
            {
                validForm.secondlastName 
                    && <AlertInForm 
                            styleAlert = { '__alert_error_inForm' }
                            title = { 'Error en tu apellido materno' }
                            descriptionError = { validForm.errorsecondlastName }
                        />
            } 
            <p>Número de teléfono:</p>
            <Input 
                    name = {'phone'}
                    inputStyle = {'__input'}
                    typeInput = {'number'}
                    value = { inputFormValues.phone }
                    placeholder = {'Tu número de teléfono'}
                    onChange = { handdleInputChange }
            />
            {
                    validForm.phone 
                        && <AlertInForm 
                                styleAlert={'__alert_error_inForm'}
                                title = {'Error en tu numero de teléfono'}
                                descriptionError = {validForm.errorphone}
                            />
                }
            <p>RFC:</p>
            <Input 
                name = {'rfc'}
                inputStyle = {'__input'}
                typeInput = {'text'}
                value = { inputFormValues.rfc }
                placeholder = {' Tu RFC'}
                onChange = { handdleInputChange }
                setValue = { setInputFormValues }
                formValues = { inputFormValues }
            />
            {
                validForm.rfc 
                && <AlertInForm 
                        styleAlert = { '__alert_error_inForm' }
                        title = { 'Error en tu RFC' }
                        descriptionError = { validForm.errorrfc }
                    />
            }
            <p>Correo electrónico asociado a esta cuenta:</p>
            <strong>{ email }</strong>
            {
                isDiferent 
                    &&  <button 
                            disabled = { isLoading} 
                            onClick = { handleSaveData } 
                            className="__btn ">
                                {
                                    isLoading 
                                        ? <LoadingInComponent />
                                        :<> <IconCheck /> <p>Guardar cambios</p></>
                                }
                            </button> 
            }
           
        </div>
        {
            isSaved 
            && <div className = "__wrapper_saved animate__animated animate__bounce animate__fadeOut animate__delay-4s">
                    <h4>Se han guardado los cambios correctamente</h4>
                    <IconCheck />
                </div>
        }
        </>
    )
}
