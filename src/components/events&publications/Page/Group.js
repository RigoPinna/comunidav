import React from 'react'
import { EventBody } from './EventBody'
import { EventHeader } from './EventHeader'

export const Group = ( groupVisit ) => {
    return (
        <>
            <div className ="__wrapper_screen_event">
                <EventHeader { ...groupVisit }/>
            </div>
            <EventBody />
        </>
    )
}
