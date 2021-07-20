import React, { useState } from 'react'
import { ContainerOptions } from '../ContainerOptions/ContainerOptions'


import { ContainerInfoProfile } from '../Items/ContainerInfoProfile'
import { DoPublicationHeader } from '../Items/DoPublicationHeader'

import { SubMenuProfileAsc } from '../menus/SubMenuProfileAsc'

const OPTION_MENU = {
    viewMyEvents: 1,
    viewMyGroups: 2,
    viewMyFav: 3,
}
export const ProfileAsc = React.memo(( userData ) => {

    const [ viewOption, setViewOption ] = useState( OPTION_MENU.viewMyEvents );
    const userIDloged = localStorage.getItem( 'uid' );
    const isVisitProfileOltherProfile = ( userData.userVisitId === userIDloged ); 
 
    return (
        <>
            <ContainerInfoProfile { ...userData }/>
            <DoPublicationHeader 
                displayName={ userData.displayName } 
                textSecondary = { userData.userName } 
                image = { userData.image } 
            />
            { isVisitProfileOltherProfile && <SubMenuProfileAsc setViewOption = { setViewOption } />}
            <div className = '__wrapper_feed_publications'>
            {
                !!viewOption && <ContainerOptions uidVisit = { userData.userVisitId } optionMenu = { viewOption } />
            }
            </div>
           
            
        </>
    )
})
