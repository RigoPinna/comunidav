import React from 'react'
import { IllustrationSuscribeHello } from '../iconos/IllustrationSuscribeHello'

export const SuscribeHello = ({ userName = 'UserName', evtName = 'Name Event'}) => {
    return (
        <>
        <IllustrationSuscribeHello /> 
        <p>Hola {userName}. </p>
        <br/>
        <p> 
            Inscribete al evento <strong>{ evtName }</strong> para:
        </p>
        <ol>
            <li>Conocer voluntarios.</li>
            <li>Mantenerte al tanto del estado del evento.</li>
            <li>Participar en el evento.</li>
            <li>Publicar y responder preguntas en el grupo.</li>
        </ol>
            
        </>
    )
}
