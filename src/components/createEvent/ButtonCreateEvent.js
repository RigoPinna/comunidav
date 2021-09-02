import React from 'react'
import { paseDate } from '../../helpers/paseDate';
import { useValidateForm } from '../../hooks/useValidateForm';
export const ButtonCreateEvent = ({ valuesForm, imageFile, dateInit, dateFinally, validation, setValidation }) => {
    const  [ OBJ_VALIDATE_TEMPORALLY, isValid ] = useValidateForm(
        validation,
        {...valuesForm, ...{ dateInit, dateFinally, image:imageFile }}
    )
    const hanadleCreateEvent = e => {
        e.preventDefault();
       
        if ( isValid ) {
            const data = parseDataEvent();
        } else {
            console.log( "error ")
            setValidation( OBJ_VALIDATE_TEMPORALLY )
        }
        
    }

    function parseDataEvent (){
        const { date: DInit, hour: HInit } = paseDate( dateInit )
        const { date: DFinally, hour: HFinally } = paseDate( dateFinally )
        return {
            ...valuesForm, 
            ...{ dateInit:DInit, hourInit:HInit,dateFinally:DFinally,hourFinally:HFinally, image:imageFile } 
        }
    }
    return (
        <button onClick={ hanadleCreateEvent } className="__btn">Crear evento</button>
    )
}
