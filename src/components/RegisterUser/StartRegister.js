import React from 'react'
import { ComunidavLogo } from '../iconos/ComunidavLogo'
import { IllustrationAsc } from '../iconos/IllustrationAsc'
import { IllustrationVol } from '../iconos/IllustrationVol'
import { CardRegister } from './CardRegister'

export const StartRegister = () => {
    
    return (
        <div className = "__wrapper_register_content animate__animated animate__fadeIn"> 
        <ComunidavLogo />
            <h1>Comencemos, ¿Eres una asociación o voluntario?</h1>
            <div className = "__card_container">
                <CardRegister
                    title = { 'Asociación' }
                    sentence = { 'La esencia de la vida es servir a los demás y hacer el bien.' }
                    Illustration = { IllustrationAsc } 
                    colorClass = { 'bg_asc' }
                />
                <CardRegister
                    title = { 'Voluntario' }
                    sentence = { 'Ser voluntario o voluntaria es compartir con otros nuestra propia humanidad.' }
                    Illustration = { IllustrationVol } 
                    colorClass = { 'bg_vol' }
                />
            </div>
        </div>
    )
}
