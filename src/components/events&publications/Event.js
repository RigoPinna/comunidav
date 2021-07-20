import React from 'react'

import { ItemUser } from '../Items/ItemUser'
import { SubMenuEventPublic } from '../menus/SubMenuEventPublic'
import { ImageEvent } from './ImageEvent'
import { ButtonSuscribeEvent } from './ButtonSuscribeEvent'
import { ButtonSendMessage } from '../inbox/ButtonSendMessage'


export const Event = ({ evtID, uid, aid,nameAsc,userImg, category,evtName, date, hours, location, imageEvt, requires, description, participants }) => {
    
    return (
       
        <div className = "__wrapper_publication_and_event animate__animated animate__fadeIn">
            <SubMenuEventPublic />
            <div className = "__wrapper_publication_and_event_header">
                <ItemUser 
                    typeUser = {'ASC'} 
                    image = { userImg }
                    displayName = { nameAsc }
                    textSecondary = { `Categoria • ${category}` }

                />
            </div>
            <div className = "__wrapper_publication_and_event_body">
                <h3>{evtName}</h3>
                <p>Este evento inicia el <time>{date} • {hours}</time></p>
                { 
                    !!imageEvt  && <ImageEvent image = { imageEvt } />
                }
                {
                    !!description && <p>{description}</p>
                }
                <p><strong>Ubicación • {location}</strong></p>
                <p className="badge_short badge_color_blue">{ participants } persona(s) inscrita(s)</p>
            </div>
            <div className="__wrapper_publication_and_event_footer">
                <ButtonSuscribeEvent />
                <ButtonSendMessage text = { "Enviar mensaje" }/>
            </div>
        </div>
    
    )
}
