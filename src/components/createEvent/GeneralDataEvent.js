import React, { useEffect } from 'react'
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { Input } from '../Inputs/Input'
import { ImageEvent } from '../events&publications/ImageEvent';
import { ButtonDeleteImageEvent } from './ButtonDeleteImageEvent';
import { ButtonUploadImage } from './ButtonUploadImage';
import { IconOneEvent } from '../iconos/IconOneEvent';
import { AlertInForm } from '../alerts/AlertInForm';
export const GeneralDataEvent = ({ inputFormValues, handdleInputChange, setFile: setStateFile, validation, imgURL: image }) => {
    const { file,setImgURL, drag, hanldeDragEnter, hanldeDragLeave, hanldeDrop, STYLE_DRAG_OVER, DRAG_IMAGE_STATE } = useDragAndDrop();
    useEffect(() => {
        file && setStateFile( file );
    }, [ file, setStateFile ])
    return (
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
            {
                validation.nameEvent 
                    && <AlertInForm 
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error en el nombre del evento' }
                            descriptionError = { validation.errornameEvent }
                        />
            }
            <p>Agrega una descripción o arrastra al recuadro una imagen para tu evento:</p>
            <textarea
                name = "description"
                value = { inputFormValues.description }
                onChange = { handdleInputChange } 
                onDragEnter = { hanldeDragEnter}
                onDragLeave = { hanldeDragLeave}
                onDrop = { hanldeDrop }
                className="__wrapper_drawAndDrop"
                style = { drag === DRAG_IMAGE_STATE.drag_over ? STYLE_DRAG_OVER : {} }
                placeholder = "Agrega una descripción a tu evento y arrastra una imagen relacionada aqui..."
            />
            {
                validation.description 
                    && <AlertInForm 
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error en la descripción del evento' }
                            descriptionError = { validation.errordescription }
                        />
            }
            {
                image 
                    && <div className="__wrapper_list_image">
                            <ImageEvent  
                                image= { image } 
                                title = {inputFormValues.nameEvent}
                                ButtonExtra = { () => <ButtonDeleteImageEvent setImgURL = { setImgURL } setFile = { setStateFile }/> }
                                />
                        </div>
            }
            {
                validation.image
                    && <AlertInForm 
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error en la imagen' }
                            descriptionError = { validation.errorimage }
                        />
            }
            <ButtonUploadImage setFile = { setStateFile } />
    </div>
    )
}
