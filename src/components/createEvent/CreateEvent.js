import React,{ useState } from 'react'
import DateTimePicker from 'react-datetime-picker';

import { Input } from '../Inputs/Input'
import { useChangeForm } from '../../hooks/useChangeForm'
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

import { ButtonBack } from '../ButtonBack/ButtonBack';

import { IconLocation } from '../iconos/IconLocation';
import { ButtonCreateEvent } from '../createEvent/ButtonCreateEvent';
import { GeneralDataEvent } from './GeneralDataEvent';
import { useEffect } from 'react';

export const CreateEvent = () => {
    const [ inputFormValues, handdleInputChange] = useChangeForm({ nameEvent:'', description:'', dateInit:'', dateFinally:'', ubication:'', image:'' });
    const [validation, setValidation ] = useState({ nameEvent:false, description:false, dateInit:false, dateFinally:false, ubication:false, image:false })
  
    const { file, setFile } = useDragAndDrop();
    const [dateInit, setDataInit] = useState( new Date() );
    const [dateFinally, setDataFinally] = useState( new Date() );
    return (
        <form className = "__wrapper_form animate__animated animate__fadeIn">
           <div className = "__wrapper_header_form">
               <ButtonBack />
                <h1>Crear evento</h1>

           </div>
           <div className = "__wrapper_body_form">
               <GeneralDataEvent  
                    inputFormValues ={ inputFormValues } 
                    handdleInputChange ={ handdleInputChange } 
                    setFile = { setFile }
                    validation = { validation } />
                <div className="__wrapper_data_modals">
                    <p>Selecciona las fechas para tu evento(formato 24hrs):</p>
                    <hr/>
                    <br/>
                    <p>Fecha de inicio*:</p>
                    <div className="__input_wrapper">
                        <DateTimePicker
                            name = "dateInit"
                            onChange={ setDataInit }
                            value={ dateInit }
                            className ={ "__input_calendar" }
                            calendarClassName = {"__calendar"}
                            
                        />
                    </div>
                    <p>Fecha de finalización*:</p>
                    <div className="__input_wrapper">
                        <DateTimePicker
                            name = "dateInit"
                            onChange={ setDataFinally }
                            value={ dateFinally }
                            className ={ "__input_calendar" }
                            calendarClassName = {"__calendar"}
                        />
                    </div>
                </div> 
                
                <div className="__wrapper_data_modals">
                    <p>¿Dónde se llevará a cabo tu evento?</p>
                    <hr/>
                    <br/>
                    <p>Ubicación del evento*: </p>
                    <Input
                            name = "location" 
                            typeInput = {"text"} 
                            inputStyle = {'__input __input_with_icon'} 
                            placeholder = {'Ubicación del evento...'}
                            InputIcon = {  IconLocation }
                            value = { inputFormValues.ubication}
                            onChange = { handdleInputChange }
                        />
                </div>
           </div>
           <div className="__wrapper_footer_form">
              <ButtonCreateEvent 
                    dateInit = {dateInit } 
                    dateFinally = { dateFinally }
                    imageFile = { file }
                    valuesForm = { inputFormValues }
                    validation = { validation }
                    setValidation = { setValidation }
                />
           </div>
        </form>
    )
}
