import React from 'react'


import { EventOrPublication } from '../events&publications/EventOrPublication'

import { ContainerInfoProfile } from '../Items/ContainerInfoProfile'
import { DoPublicationHeader } from '../Items/DoPublicationHeader'

import { SubMenuProfileAsc } from '../menus/SubMenuProfileAsc'


export const ProfileAsc = ( userData ) => {
    
    return (
        <>
            <ContainerInfoProfile { ...userData }/>
            <DoPublicationHeader 
                displayName={ userData.displayName } 
                textSecondary = { userData.userName } 
                image = { userData.image } 
            />
            <SubMenuProfileAsc />
            <EventOrPublication />
           
            
        </>
    )
}
