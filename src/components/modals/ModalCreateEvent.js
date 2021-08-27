import React, { useState } from 'react'
import { IconEvent } from '../iconos/IconEvent'
import { Input } from '../Inputs/Input'
import { WrapperModalsOrAlerts } from './WrapperModalsOrAlerts'
import DateTimePicker from 'react-datetime-picker';
import { useChangeForm } from '../../hooks/useChangeForm'
import { IconDescription } from '../iconos/IconDescription'
import { ContainerDragAndDrop } from '../DragAndDropImage/ContainerDragAndDrop';

export const ModalCreateEvent = () => {
    const [ inputFormValues, handdleInputChange] = useChangeForm({nameEvent:''});
    const dInit = new Date()
    const [dateInit, setDataInit] = useState( dInit );
    const [dateFinaly, setDataFinaly] = useState( new Date().setHours( dInit.getHours() + 1 ) );
    return (
        <WrapperModalsOrAlerts>
            <h1>Crear evento</h1>
            <form>
            <div className="__wrapper_data_modals">
                <p>Ingresa los datos principales para tu evento:</p>
                <br/>
                <p>Nombre de evento*:</p>
                <Input
                        name = "nameEvent" 
                        typeInput = {"text"} 
                        inputStyle = {'__input __input_with_icon'} 
                        placeholder = {'Ingresa el nombre del evento...'}
                        InputIcon = { IconEvent }
                        value = { inputFormValues.nameEvent}
                        onChange = { handdleInputChange }
                    />
                <p>Descripción del evento*:</p>
                <Input
                    name = "description" 
                    typeInput = {"text"} 
                    inputStyle = {'__input __input_with_icon'} 
                    placeholder = {'Ingresa una descripción para el evento'}
                    InputIcon = { IconDescription }
                    value = { inputFormValues.nameEvent}
                    onChange = { handdleInputChange }
                />

            </div>
                <div className="__wrapper_data_modals">
                    <p>Selecciona las fechas para tu evento( formato 24hrs):</p>
                    <br/>
                    <p>Fecha de inicio*:</p>
                    <div className="__input_wrapper">
                        <DateTimePicker
                            name = "dateInit"
                            onChange={ setDataInit }
                            value={ dateInit }
                            className ={ "__input_calendar" }
                        />
                    </div>
                    <p>Fecha de finalización*:</p>
                    <div className="__input_wrapper">
                        <DateTimePicker
                            name = "dateInit"
                            onChange={ setDataFinaly }
                            value={ dateFinaly }
                            className ={ "__input_calendar" }
                        />
                    </div>
                </div> 
                <div className="__wrapper_data_modals">
                    <p>Establece una imagen relacionada a tu evento:</p>
                    <input  type="file" style ={{display:'none'}}/>
                    <ContainerDragAndDrop />
                </div> 
            </form>
        </WrapperModalsOrAlerts>
    )
}
