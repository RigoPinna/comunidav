import React from 'react'
import { Link } from 'react-router-dom'
import { IconArrowRight } from '../iconos/IconArrowRight'
import { IllustrationSuscribe } from '../iconos/IllustrationSuscribe'

export const SuscribeWelcome = ( { evtID }) => {
    return (
        <>
            <IllustrationSuscribe />
            <p className = "animate__animated animate__fadeIn">Felicidades, ahora perteneces al grupo del evento.</p>
            <br/>
            <p className = "animate__animated animate__fadeIn">Podras encontrar el grupo del evento en: </p>
            <br/>
            <strong className = "animate__animated animate__fadeInRight">Mi perfil &gt; Mis grupos </strong>
            <Link to={`/event/${evtID}`} className = "__btn __btn_oval animate__animated animate__fadeIn" >
                <p>Ir al grupo ahora</p>
                <IconArrowRight />
            </Link>
            
        </>
    )
}
