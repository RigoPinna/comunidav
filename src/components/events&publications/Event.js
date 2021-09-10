import React, { useEffect, useState } from 'react'

import { ItemUser } from '../Items/ItemUser'
import { ButtonubMenuEvent } from '../menus/ButtonMenuEvent'
import { ImageEvent } from './ImageEvent'
import { ButtonSuscribeEvent } from './ButtonSuscribeEvent'
import { ButtonSendMessage } from '../inbox/ButtonSendMessage'
import { useSelector } from 'react-redux'
import { IconLocation } from '../iconos/IconLocation'

export const Event = ({ evtID, uid, aid,nameAsc,userImg, category,evtName, date, hours, location, imageEvt, requires, description, participants }) => {
    
    const { userLogedReducer } = useSelector( state => state )
    const [isTheCreator, setisTheCreator] = useState( false )
    useEffect(() => {
        if ( !!userLogedReducer.uid ) {
            setisTheCreator(( userLogedReducer.uid === uid ))
        }
    }, [userLogedReducer.uid ])
    
    return (
        <div className = "__wrapper_publication_and_event animate__animated animate__fadeIn">
            <ButtonubMenuEvent 
                eid = { evtID } 
                uiLoged = {userLogedReducer.uid }  
                isTheCreator = { isTheCreator }
                participants = {  participants }
                nameEvent = { evtName }
                dataCreator = {{
                    uid,
                    aid,
                    displayName: nameAsc,
                    category,
                }}
            />
         
            
            <div className = "__wrapper_publication_and_event_header">
                <ItemUser 
                    typeUser = {'ASC'} 
                    image = { userImg }
                    displayName = { nameAsc }
                    textSecondary = { `Categoria • ${ category }` }

                />
            </div>
            <div className = "__wrapper_publication_and_event_body">
                <h3>{evtName}</h3>
                <p>Este evento inicia el <time>{date} • {hours}</time></p>
                { 
                    !!imageEvt  && <ImageEvent image = { imageEvt } title = { evtName } />
                }
                {
                    !!description && <p>{description}</p>
                }
                <p><strong>Ubicación </strong>• {location}</p>
                <p className="badge_short badge_color_blue">{ participants.length } persona(s) inscrita(s)</p>
            </div>
            <div className="__wrapper_publication_and_event_footer">
                <ButtonSuscribeEvent
                    uid= { userLogedReducer.uid } 
                    participants = { participants }
                    ascName = { nameAsc } 
                    evtName = { evtName }
                    eid = { evtID } 

                />
                {
                    !isTheCreator && <ButtonSendMessage text = { "Enviar mensaje" }/>
                }
            </div>
            
        </div>
    
    )
}
