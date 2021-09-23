import React from 'react'
import { ButtonBack } from '../../ButtonBack/ButtonBack'
import { WrapperDetails } from '../../configUser/WrapperDetails'
import { ItemInformationEvent } from '../../groupsEvents/ItemInformationEvent'
import { Participants } from '../../groupsEvents/Participants'
import { IconDescription } from '../../iconos/IconDescription'
import { ItemUser } from '../../Items/ItemUser'
export const EventHeader = ({ nameEvent, requirement, ubication, description, creator, participants, eid  }) => {
    return (
        <>
        <div className = "__wrapper_header_form">
            <ButtonBack />
            <h1>{ nameEvent }</h1>
        </div>
        <div className = "__wrapper_info_event">
            <h2>Información del evento</h2>
            <div className = "__wrapper_info_event_body">
               <ItemInformationEvent title="Descripción" content={ description } Icon = {IconDescription}/>
               <ItemInformationEvent title="Requisitos" content={requirement} Icon = {IconDescription}/>
            </div>
            <div className = "__wrapper_info_footer">
                <ItemUser 
                    typeUser="ASC" 
                    displayName={ creator.displayName } 
                    image={ creator.image }
                    textSecondary="Creador"
                />
                <Participants participants={ participants } eid = { eid }/>
            </div>
        </div>
        </>
    )
}
