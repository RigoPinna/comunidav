import React from 'react'
import { MessageRecibed } from '../../chat/MessageRecibed'
import { ItemUser } from '../../Items/ItemUser'
import { ResponsesPublication } from './ResponsesPublication'

export const ItemPublication = ({pid,image, displayName, description, responses=[], typeUser, eid }) => {
    return (
        <div className = "__wrapper_publication">
            <div className = "__wrapper_publication_and_event_header">
                <ItemUser typeUser={typeUser} image={image} displayName={displayName}/>
            </div>
            <div className="info_general_evt">
                <p>{ description }</p>
            </div>
            <ResponsesPublication responses={ responses } pid = { pid } eid={ eid }/>          
        </div>
    )
}
