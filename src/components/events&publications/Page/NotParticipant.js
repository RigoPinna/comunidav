import React from 'react'
import { useHistory } from 'react-router'
import { IconArrowLeft } from '../../iconos/IconArrowLeft'
import { IllustrationNotParticipant } from '../../iconos/IllustrationNotParticipant'

export const NotParticipant = () => {
    const history = useHistory()
    const hanldeGoBack = e => {
        (history.length > 0 )
            ? history.goBack()
            : history.push('/profile')
    }
    return (
        <div className ="__wrapper_not_participant">
            <IllustrationNotParticipant />
            <strong>No eres participante del evento</strong>
            <p>Inscribete al evento para ver publicaciones y los participantes</p>
            <button onClick={ hanldeGoBack } className="__btn"> <IconArrowLeft /> Volver</button>
        </div>
    )
}
