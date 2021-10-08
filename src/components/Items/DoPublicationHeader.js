import React from 'react'
import { ButtonCreateEvent } from './ButtonCreateEvent'
import { ItemUser } from './ItemUser'

export const DoPublicationHeader = React.memo(({displayName, textSecondary, image,title='Nunca es tarde para ayudar', ComponentCreatePublication, typeUser="ASC" }) => {

    return (
        <>
        <div className = "__wrapper_doPublication  animate__animated animate__fadeIn">
            <ItemUser typeUser={typeUser} displayName = {displayName} textSecondary = {textSecondary} image = {image}/>
            <p>{ title }</p>
            { 
                ComponentCreatePublication 
                    ? <ComponentCreatePublication />
                    :<ButtonCreateEvent />
            }
        </div>
        </>
    )
})
