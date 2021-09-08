import React from 'react'
import { AlertInForm } from '../alerts/AlertInForm'
import { IconLocation } from '../iconos/IconLocation'
import { IconRequire } from '../iconos/IconRequire'
import { Input } from '../Inputs/Input'

export const UbicationEvent = ({ ubication,  handdleInputChange, validation, requirement }) => {
    return (
        <div className="__wrapper_data_modals">
            <p>¿Dónde se llevará a cabo tu evento y cuales son los requisitos?</p>
            <hr/>
            <br/>
            <p>Ubicación del evento*: </p>
            <Input
                name = "ubication" 
                typeInput = {"text"} 
                inputStyle = {'__input __input_with_icon'} 
                placeholder = {'Ubicación del evento...'}
                InputIcon = {  IconLocation }
                value = { ubication }
                onChange = { handdleInputChange }
            />
            {
                validation.ubication 
                    && <AlertInForm 
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error en ubicación' }
                            descriptionError = { validation.errorubication }
                        />
            }
             <Input
                name = "requirement" 
                typeInput = {"text"} 
                inputStyle = {'__input __input_with_icon'} 
                placeholder = {'Requisitos del evento:'}
                InputIcon = {  IconRequire }
                value = { requirement }
                onChange = { handdleInputChange }
            />
            {
                validation.requirement
                    && <AlertInForm 
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error en ubicación' }
                            descriptionError = { validation.errorrequirement }
                        />
            }
        </div>
    )
}
