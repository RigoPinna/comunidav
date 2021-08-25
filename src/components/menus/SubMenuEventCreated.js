import React from 'react'
import { ContentMenuIsMyEvent } from './ContentMenuIsMyEvent'
import { ContentMenuNotIsMyEvent } from './ContentMenuNotIsMyEvent'

export const SubMenuEventCreated = ({ isTheCreator, dataCreator }) => {
   
    return (
        <>
            {
                isTheCreator 
                    ? <ContentMenuIsMyEvent />
                    : <ContentMenuNotIsMyEvent {...dataCreator}/>
            }
        </>
    )
    
}
