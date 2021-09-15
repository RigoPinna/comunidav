import React, { useEffect, useState } from 'react'

import { ItemUser } from '../Items/ItemUser'
import { ButtonubMenuEvent } from '../menus/ButtonMenuEvent'
import { ImageEvent } from './ImageEvent'
import { ButtonSuscribeEvent } from './ButtonSuscribeEvent'
import { ButtonSendMessage } from '../inbox/ButtonSendMessage'
import { useSelector } from 'react-redux'
import { IconLocation } from '../iconos/IconLocation'

export const Event = ( event ) => {
    
    const { userLogedReducer } = useSelector( state => state )
    const [isTheCreator, setisTheCreator] = useState( false )
    useEffect(() => {
        if ( !!userLogedReducer.uid ) {
            setisTheCreator(( userLogedReducer.uid === event.uid ))
        }
    }, [userLogedReducer.uid ])
    
    return (
        <div className = "__wrapper_publication_and_event animate__animated animate__fadeIn">
            <ButtonubMenuEvent 
                eid = { event.evtID } 
                uiLoged = {userLogedReducer.uid }  
                isTheCreator = { isTheCreator }
                participants = {  event.participants }
                nameEvent = { event.evtName }
                dataCreator = {{
                    uid: event.uid,
                    aid: event.aid,
                    displayName: event.nameAsc,
                    category: event.category,
                }}
            />
         
            
            <div className = "__wrapper_publication_and_event_header">
                <ItemUser 
                    typeUser = {'ASC'} 
                    image = { event.userImg }
                    displayName = { event.nameAsc }
                    textSecondary = { `Categoria • ${ event.category }` }

                />
            </div>
            <div className = "__wrapper_publication_and_event_body">
                <h3>{event.evtName}</h3>
                <p>Este evento inicia el <time>{event.date} • {event.hours}</time></p>
                { 
                    !!event.imageEvt  && <ImageEvent image = { event.imageEvt } title = { event.evtName } />
                }
                {
                    !!event.description && <p>{event.description}</p>
                }
                <p><strong>Ubicación </strong>• {event.location}</p>
                <p className="badge_short badge_color_blue">{ event.participants.length } persona(s) inscrita(s)</p>
            </div>
            <div className="__wrapper_publication_and_event_footer">
                <ButtonSuscribeEvent
                    uidLoged= { userLogedReducer.uid } 
                    {...event} 

                />
                {
                    !isTheCreator && <ButtonSendMessage text = { "Enviar mensaje" }/>
                }
            </div>
            
        </div>
    
    )
}
