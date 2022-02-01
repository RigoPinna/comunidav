import React from 'react'
import DateTimePicker from 'react-datetime-picker';
import { AlertInForm } from '../alerts/AlertInForm'

export const DateEvent = ({ dateInit, setDataInit, dateFinally, setDataFinally , validation }) => {
   
    return (
        <div className="__wrapper_data_modals">
                    <p>¿Cuádo se llevara acabo este evento?</p>
                    <hr/>
                    <br/>
                    <p>Fecha de inicio(24 hrs)*:</p>
                    <DateTimePicker
                        name = "dateInit"
                        onChange={ setDataInit }
                        value={ dateInit }
                        className ={ "__input_calendar" }
                        calendarClassName = {"__calendar"}
                        
                    />
                    {
                        validation.dateInit 
                            && <AlertInForm 
                                    styleAlert={ '__alert_error_inForm' }
                                    title = { 'Error en  la fecha de inicio' }
                                    descriptionError = { validation.errordateInit }
                                />
                    }
                </div> 
    )
}
