import React from 'react'
import { ContentMenuIsMyEvent } from './ContentMenuIsMyEvent'
import { ContentMenuNotIsMyEvent } from './ContentMenuNotIsMyEvent'

export const SubMenuEventCreated = ({ isTheCreator, dataCreator, participants, nameEvent, eid }) => {
   
    return (
        <>
            {
                isTheCreator 
                    ? <ContentMenuIsMyEvent participants={participants} nameEvent={nameEvent} eid = { eid }/>
                    : <ContentMenuNotIsMyEvent {...dataCreator}/>
            }
        </>
    )
    
}
