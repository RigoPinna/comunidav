import React  from 'react'

import { useChangeData } from '../../hooks/useChangeData'
import { useChangeForm } from '../../hooks/useChangeForm'
import { Input } from '../Inputs/Input'

export const ConfigDataPrivate = ({ namePerson,lastName,secondlastName, rfc, phone, email }) => {

    const [ inputFormValues, handdleInputChange,setInputFormValues  ]= useChangeForm({name:namePerson,lastName,secondlastName, rfc,phone});
    const [ isDiferent ] = useChangeData( inputFormValues, { namePerson,lastName,secondlastName, rfc,phone } );
    return (
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
                isDiferent &&  <button className="__btn ">Guardar</button> 
            }
           
        </div>
    )
}
