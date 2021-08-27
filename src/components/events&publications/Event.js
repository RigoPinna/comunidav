import React from 'react'

import { ItemUser } from '../Items/ItemUser'
import { ButtonubMenuEvent } from '../menus/ButtonMenuEvent'
import { ImageEvent } from './ImageEvent'
import { ButtonSuscribeEvent } from './ButtonSuscribeEvent'
import { ButtonSendMessage } from '../inbox/ButtonSendMessage'
import { useSelector } from 'react-redux'

export const Event = ({ evtID, uid, aid,nameAsc,userImg, category,evtName, date, hours, location, imageEvt, requires, description, participants, listParticipants }) => {
    
    const { uid:uidLoged } = useSelector( state => state.userLogedReducer )
    const isTheCreator = ( uidLoged === uid );
    
    return (
        <div className = "__wrapper_publication_and_event animate__animated animate__fadeIn">
  
            <ButtonubMenuEvent 
                eid = { evtID } 
                uiLoged = { uidLoged }  
                isTheCreator = { isTheCreator }
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
                <p><strong>Ubicación • {location}</strong></p>
                <p className="badge_short badge_color_blue">{ participants } persona(s) inscrita(s)</p>
            </div>
            <div className="__wrapper_publication_and_event_footer">
                <ButtonSuscribeEvent 
                    uid = { uidLoged }
                    isTheCreator = { isTheCreator}
                    listParticipants = { listParticipants }
                    ascName = { nameAsc } 
                    evtName = { evtName }
                    eid = {evtID} 

                />
                {
                    !isTheCreator && <ButtonSendMessage text = { "Enviar mensaje" }/>
                }
            </div>
            
        </div>
    
    )
}
