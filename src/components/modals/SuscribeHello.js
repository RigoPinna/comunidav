import React from 'react'
import { IllustrationSuscribeHello } from '../iconos/IllustrationSuscribeHello'

export const SuscribeHello = ({ userName = 'UserName', evtName = 'Name Event'}) => {
    return (
        <>
        <IllustrationSuscribeHello /> 
        <p>Hola {userName}. </p>
        <br/>
        <p> 
            Al inscribirte al evento <strong>{ evtName }</strong>, 
            podras conocer nuevos voluntarios y acceder a las publicaciones
            en el grupo del evento.
        </p>
            
        </>
    )
}
