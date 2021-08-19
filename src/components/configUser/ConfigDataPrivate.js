import React, { useEffect }  from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { useChangeData } from '../../hooks/useChangeData'
import { useChangeForm } from '../../hooks/useChangeForm'
import { useSaveData } from '../../hooks/useSaveData'
import { updateUserData } from '../../reducers/authReducer'
import { IconCheck } from '../iconos/IconCheck'
import { Input } from '../Inputs/Input'

export const ConfigDataPrivate = ( oldData ) => {
    const dispatch = useDispatch();
    const [ isSaved, setIsSaved ] = useSaveData();
    const { namePerson:name, lastName, secondlastName, rfc, phone, email } = oldData;
    const [ inputFormValues, handdleInputChange,setInputFormValues  ]= useChangeForm({name, lastName, secondlastName, rfc, phone });
    const [ isDiferent,setIsDiferent ] = useChangeData( inputFormValues, { name,lastName,secondlastName, rfc,phone } );
    const handleSaveData = (evt ) => {
        evt.preventDefault();
        dispatch( updateUserData( inputFormValues, oldData ) );
        setIsDiferent( false );
        setIsSaved( true );
    }
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
            <p>Apellido paterno:</p>
            <Input 
                name = {'lastName'}
                inputStyle = {'__input'}
                typeInput = {'text'}
                value = { inputFormValues.lastName }
                placeholder = {'Tu nombre'}
                onChange = { handdleInputChange }
            />  
            <p>Apellido materno:</p>
            <Input 
                name = {'secondlastName'}
                inputStyle = {'__input'}
                typeInput = {'text'}
                value = { inputFormValues.secondlastName }
                placeholder = {'Tu nombre'}
                onChange = { handdleInputChange }
            /> 
            <p>Número de teléfono:</p>
            <Input 
                    name = {'phone'}
                    inputStyle = {'__input'}
                    typeInput = {'number'}
                    value = { inputFormValues.phone }
                    placeholder = {'Tu número de teléfono'}
                    onChange = { handdleInputChange }
                />
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
            <p>Correo electrónico asociado a esta cuenta:</p>
            <strong>{ email }</strong>
            {
                isDiferent &&  <button onClick = { handleSaveData } className="__btn ">Guardar</button> 
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
