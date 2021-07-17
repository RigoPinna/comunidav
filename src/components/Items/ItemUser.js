import React from 'react'
import { Avatar } from './Avatar'

import { BadgeShort } from './BadgeShort'

export const ItemUser = ( { displayName='name lastname ', image, textSecondary='text secondary', handle = ()=>{}} ) => {
    
    return (
        <div onClick={ handle } className = "_item">
            <Avatar image = { image } name = { displayName } />
            <BadgeShort typeUser = 'ASC' text='ASC'/>
            <div className = "info-Contact">
                <strong >{displayName}</strong>
                <p>{textSecondary}</p>

            </div>
            
        </div>
    )
}
