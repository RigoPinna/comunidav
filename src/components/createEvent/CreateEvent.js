import React,{ useState } from 'react'
import { useChangeForm } from '../../hooks/useChangeForm'
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { ButtonBack } from '../ButtonBack/ButtonBack';
import { ButtonCreateEvent } from '../createEvent/ButtonCreateEvent';
import { GeneralDataEvent } from './GeneralDataEvent';
import { DateEvent } from './DateEvent';
import { UbicationEvent } from './UbicationEvent';

export const CreateEvent = () => {
    const [ inputFormValues, handdleInputChange] = useChangeForm({ nameEvent:'', description:'',requirement:'', dateInit:'',ubication:'', image:'' });
    const [validation, setValidation ] = useState({ nameEvent:false, description:false,requirement:false, dateInit:false,ubication:false, image:false })
    const [dateInit, setDataInit] = useState( new Date() );
    const [dateFinally, setDataFinally] = useState( new Date() );
    const { file, setFile, imgURL } = useDragAndDrop();
    return (
        <form className = "__wrapper_form animate__animated animate__fadeIn" encType="multipart/form-data" >
           <div className = "__wrapper_header_form">
               <ButtonBack />
                <h1>Crear evento</h1>

           </div>
           <div className = "__wrapper_body_form">
               <GeneralDataEvent  
                    inputFormValues ={ inputFormValues } 
                    handdleInputChange ={ handdleInputChange } 
                    imgURL = {imgURL}
                    setFile = { setFile }
                    validation = { validation } />
                <DateEvent 
                    dateInit = { dateInit }
                    setDataInit = { setDataInit } 
                    dateFinally = { dateFinally }
                    setDataFinally = {setDataFinally}
                    validation = { validation }
                />
               <UbicationEvent
                    ubication = { inputFormValues.ubication }
                    requirement = { inputFormValues.requirement }
                    handdleInputChange ={ handdleInputChange } 
                    validation = { validation }
               />
           </div>
           <div className="__wrapper_footer_form">
              <ButtonCreateEvent 
                    dateInit = { dateInit } 
                    imageFile = { file }
                    imageURL = { imgURL }
                    valuesForm = { inputFormValues }
                    validation = { validation }
                    setValidation = { setValidation }
                />
           </div>
        </form>
    )
}
