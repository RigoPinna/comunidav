import React,{ useState } from 'react'
import DateTimePicker from 'react-datetime-picker';

import { IconEvent } from '../iconos/IconEvent'
import { Input } from '../Inputs/Input'
import { useChangeForm } from '../../hooks/useChangeForm'
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { ImageEvent } from '../events&publications/ImageEvent';
import { ButtonBack } from '../ButtonBack/ButtonBack';
import { ButtonDeleteImageEvent } from '../createEvent.js/ButtonDeleteImageEvent';
import { paseDate } from '../../helpers/paseDate';
import { ButtonUploadImage } from '../createEvent.js/ButtonUploadImage';
import { IconArrowRight } from '../iconos/IconArrowRight';
import { IconOneEvent } from '../iconos/IconOneEvent';
import { IconLocation } from '../iconos/IconLocation';
export const CreateEventScreen = () => {

    const [ inputFormValues, handdleInputChange] = useChangeForm({ nameEvent:'', description:'', dateInit:'', dateFinally:'' });
    const [ imgURL,file,setFile, setImgURL, drag, hanldeDragEnter, hanldeDragLeave, hanldeDrop, STYLE_DRAG_OVER, DRAG_IMAGE_STATE ] = useDragAndDrop();
    const [dateInit, setDataInit] = useState( new Date() );
    const [dateFinally, setDataFinally] = useState( new Date() );

    const habldeCreateEvent = e => {
        e.preventDefault();
        const { date: DInit, hour: HInit } = paseDate( dateInit )
        const { date: DFinally, hour: HFinally } = paseDate( dateFinally )
        const dataEvent = {...inputFormValues, ...{ dateInit:DInit, hourInit:HInit,dateFinally:DFinally,hourFinally:HFinally, image:file } };
        console.log( dataEvent );
    }

    return (
        <>
        <form onSubmit={ habldeCreateEvent } className = "__wrapper_form">
           <div className = "__wrapper_header_form">
               <ButtonBack />
                <h1>Crear evento</h1>

           </div>
           <div className = "__wrapper_body_form">
                <div className="__wrapper_data_modals">
                    <p>Ingresa el nombre de tu evento y una pequeña descripción:</p>
                    <hr/>
                    <br/>
                    <p>Nombre de evento*:</p>
                    <Input
                            name = "nameEvent" 
                            typeInput = {"text"} 
                            inputStyle = {'__input __input_with_icon'} 
                            placeholder = {'Ingresa el nombre del evento...'}
                            InputIcon = {  IconOneEvent }
                            value = { inputFormValues.nameEvent}
                            onChange = { handdleInputChange }
                        />
                    <p>Agrega una descripción o arrastra al recuadro una imagen para tu evento:</p>
                    <textarea
                        name = "description"
                        onChange = { handdleInputChange } 
                        onDragEnter = { hanldeDragEnter}
                        onDragLeave = { hanldeDragLeave}
                        onDrop = { hanldeDrop }
                        className="__wrapper_drawAndDrop"
                        style = { drag === DRAG_IMAGE_STATE.drag_over ? STYLE_DRAG_OVER : {} }
                        placeholder = "Agrega una descripción a tu evento y arrastra una imagen relacionada aqui..."
                    />
                    {
                        imgURL 
                            && <div className="__wrapper_list_image">
                                    <ImageEvent  
                                        image= { imgURL } 
                                        title = {inputFormValues.nameEvent}
                                        ButtonExtra = { () => <ButtonDeleteImageEvent setImgURL = { setImgURL } setFile = { setFile }/> }
                                        />
                                </div>
                    }
                    <ButtonUploadImage setFile = { setFile } />
                </div>
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
                            value = { inputFormValues.nameEvent}
                            onChange = { handdleInputChange }
                        />
                </div>
           </div>
           <div className="__wrapper_footer_form">
               <button className="__btn">Crear evento</button>
           </div>
        </form>
        </>
    )
}
